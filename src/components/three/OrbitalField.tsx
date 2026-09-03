"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState, useEffect, Suspense, useSyncExternalStore } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function detectWebGL(): boolean {
  if (typeof window === "undefined") return true; // assume available for SSR
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

/* ------------------------------------------------------------------ */
/* Particle field                                                     */
/* ------------------------------------------------------------------ */

function ParticleField({
  count,
  spread,
}: {
  count: number;
  spread: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute roughly in a sphere shell around origin
      const r = spread * (0.4 + Math.random() * 0.6);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, spread]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.018;
    ref.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        sizeAttenuation
        color="#9EC3F5"
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/* Orbit + traveling nodes                                            */
/* ------------------------------------------------------------------ */

interface OrbitProps {
  radius: number;
  tilt: number; // radians around X
  yaw?: number; // radians around Y
  period: number; // seconds per revolution
  color?: string;
  nodeColor?: string;
  nodes?: number;
  reduced?: boolean;
}

function Orbit({
  radius,
  tilt,
  yaw = 0,
  period,
  color = "#2E96F5",
  nodeColor = "#EAFE07",
  nodes = 3,
  reduced = false,
}: OrbitProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.Line>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Build orbit line points (circle on XY plane, then rotated)
  const lineGeometry = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    return geo;
  }, [radius]);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;
    if (!reduced) {
      g.rotation.z += (delta * (Math.PI * 2)) / period;
    }
    // Move nodes along the orbit using elapsed time
    const t = performance.now() / 1000;
    for (let i = 0; i < nodes; i++) {
      const mesh = nodeRefs.current[i];
      if (!mesh) continue;
      const phase = (i / nodes) * Math.PI * 2;
      const a = (t / period) * Math.PI * 2 + phase;
      const speed = reduced ? 0 : 1;
      const ang = a * speed;
      mesh.position.set(
        Math.cos(ang) * radius,
        Math.sin(ang) * radius,
        0,
      );
      // Subtle pulse
      const pulse = reduced ? 1 : 0.85 + 0.15 * Math.sin(t * 1.5 + phase);
      mesh.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef} rotation={[tilt, yaw, 0]}>
      {/* line */}
      {/* @ts-expect-error R3F typing for line is loose */}
      <line ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </line>
      {/* nodes */}
      {Array.from({ length: nodes }).map((_, i) => (
        <mesh key={i} ref={(el) => { nodeRefs.current[i] = el; }}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial
            color={nodeColor}
            transparent
            opacity={0.95}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Camera parallax + scroll reaction                                  */
/* ------------------------------------------------------------------ */

function CameraController({
  scrollRef,
  reduced,
}: {
  scrollRef: React.MutableRefObject<number>;
  reduced: boolean;
}) {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 14));
  const lookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    // Smooth target based on pointer position (±2-4°)
    const px = reduced ? 0 : pointer.x;
    const py = reduced ? 0 : pointer.y;
    const desiredX = px * 1.5;
    const desiredY = -py * 1.0;

    // Scroll reaction: camera moves closer and slightly down
    const scroll = scrollRef.current;
    const scrollZ = 14 - scroll * 4; // 14 → 10
    const scrollY = -scroll * 0.8;

    target.current.x += (desiredX - target.current.x) * Math.min(1, delta * 2.5);
    target.current.y += (desiredY + scrollY - target.current.y) * Math.min(1, delta * 2.5);
    target.current.z += (scrollZ - target.current.z) * Math.min(1, delta * 2);

    camera.position.copy(target.current);
    camera.lookAt(lookAt.current);
  });

  return null;
}

/* ------------------------------------------------------------------ */
/* Scene                                                              */
/* ------------------------------------------------------------------ */

function Scene({
  scrollRef,
  reduced,
  particleCount,
}: {
  scrollRef: React.MutableRefObject<number>;
  reduced: boolean;
  particleCount: number;
}) {
  return (
    <>
      <CameraController scrollRef={scrollRef} reduced={reduced} />
      <ambientLight intensity={0.4} />
      <ParticleField count={particleCount} spread={12} />

      {/* 3 orbital curves */}
      <Orbit radius={4.2} tilt={0.3} yaw={0.1} period={32} color="#0960E1" nodeColor="#EAFE07" nodes={3} reduced={reduced} />
      <Orbit radius={5.6} tilt={-0.5} yaw={0.6} period={42} color="#2E96F5" nodeColor="#EAFE07" nodes={4} reduced={reduced} />
      <Orbit radius={7.0} tilt={0.8} yaw={-0.4} period={52} color="#9EC3F5" nodeColor="#EAFE07" nodes={5} reduced={reduced} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Public component                                                   */
/* ------------------------------------------------------------------ */

export interface OrbitalFieldProps {
  className?: string;
  /** Called every frame with the latest normalized scroll (0..1) */
  getScroll?: () => number;
}

export function OrbitalField({ className, getScroll }: OrbitalFieldProps) {
  // Subscribe to prefers-reduced-motion changes via useSyncExternalStore
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  // Detect WebGL once on the client. Lazy initializer returns true during SSR;
  // the effect below updates it after mount.
  const [webgl, setWebgl] = useState(true);
  const [particleCount, setParticleCount] = useState(420);
  const scrollRef = useRef(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only detection, no way to read during render without SSR mismatch
    setWebgl(detectWebGL());

    // Particle count by viewport size (desktop/tablet/mobile)
    const updateParticles = () => {
      const w = window.innerWidth;
      if (w < 640) setParticleCount(180);
      else if (w < 1024) setParticleCount(280);
      else setParticleCount(420);
    };
    updateParticles();
    window.addEventListener("resize", updateParticles);

    // Scroll → ref (smooth)
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = Math.max(
          1,
          document.body.scrollHeight - window.innerHeight,
        );
        scrollRef.current = Math.min(1, Math.max(0, window.scrollY / max));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", updateParticles);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Fallback: CSS-only orbital hint
  if (!webgl) {
    return (
      <div className={className} aria-hidden>
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-40" />
        <div className="absolute inset-0 pointer-events-none">
          {[200, 280, 360].map((size, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border border-blue-yonder/30"
              style={{
                width: size,
                height: size,
                transform: `translate(-50%, -50%) rotate(${i * 18}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("#07173F"), 1);
        }}
      >
        <Suspense fallback={null}>
          <Scene
            scrollRef={scrollRef}
            reduced={reduced}
            particleCount={particleCount}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
