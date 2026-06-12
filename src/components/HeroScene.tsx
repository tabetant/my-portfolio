"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 170;
const LINK_DISTANCE = 2.1;
const SPREAD: [number, number, number] = [7.5, 4.2, 2.6];

// Violet palette pulled from the site accent (violet-400/500/600)
const PALETTE = ["#a78bfa", "#8b5cf6", "#7c3aed", "#c4b5fd"];

interface Graph {
  base: Float32Array;
  phase: Float32Array;
  speed: Float32Array;
  colors: Float32Array;
  edges: [number, number][];
}

function buildGraph(): Graph {
  const base = new Float32Array(NODE_COUNT * 3);
  const phase = new Float32Array(NODE_COUNT);
  const speed = new Float32Array(NODE_COUNT);
  const colors = new Float32Array(NODE_COUNT * 3);
  const color = new THREE.Color();

  // Deterministic-ish but varied: plain Math.random is fine client-side
  for (let i = 0; i < NODE_COUNT; i++) {
    base[i * 3] = (Math.random() - 0.5) * 2 * SPREAD[0];
    base[i * 3 + 1] = (Math.random() - 0.5) * 2 * SPREAD[1];
    base[i * 3 + 2] = (Math.random() - 0.5) * 2 * SPREAD[2];
    phase[i] = Math.random() * Math.PI * 2;
    speed[i] = 0.4 + Math.random() * 0.6;
    color.set(PALETTE[i % PALETTE.length]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const edges: [number, number][] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    for (let j = i + 1; j < NODE_COUNT; j++) {
      const dx = base[i * 3] - base[j * 3];
      const dy = base[i * 3 + 1] - base[j * 3 + 1];
      const dz = base[i * 3 + 2] - base[j * 3 + 2];
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < LINK_DISTANCE) {
        edges.push([i, j]);
      }
    }
  }

  return { base, phase, speed, colors, edges };
}

function driftedPosition(
  graph: Graph,
  i: number,
  t: number,
  out: [number, number, number]
) {
  const p = graph.phase[i];
  const s = graph.speed[i];
  out[0] = graph.base[i * 3] + Math.sin(t * s + p) * 0.22;
  out[1] = graph.base[i * 3 + 1] + Math.cos(t * s * 0.8 + p * 1.7) * 0.22;
  out[2] = graph.base[i * 3 + 2] + Math.sin(t * s * 0.6 + p * 0.9) * 0.18;
}

// Soft radial glow sprite so points render as orbs, not squares
function makeGlowSprite(): THREE.Texture | null {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const g = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function Constellation() {
  const group = useRef<THREE.Group>(null);
  const pointsGeo = useRef<THREE.BufferGeometry>(null);
  const linesGeo = useRef<THREE.BufferGeometry>(null);
  const graph = useMemo(buildGraph, []);
  const sprite = useMemo(makeGlowSprite, []);

  const pointPositions = useMemo(
    () => new Float32Array(graph.base),
    [graph]
  );
  const linePositions = useMemo(
    () => new Float32Array(graph.edges.length * 6),
    [graph]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pos: [number, number, number] = [0, 0, 0];

    for (let i = 0; i < NODE_COUNT; i++) {
      driftedPosition(graph, i, t, pos);
      pointPositions[i * 3] = pos[0];
      pointPositions[i * 3 + 1] = pos[1];
      pointPositions[i * 3 + 2] = pos[2];
    }
    for (let e = 0; e < graph.edges.length; e++) {
      const [a, b] = graph.edges[e];
      linePositions[e * 6] = pointPositions[a * 3];
      linePositions[e * 6 + 1] = pointPositions[a * 3 + 1];
      linePositions[e * 6 + 2] = pointPositions[a * 3 + 2];
      linePositions[e * 6 + 3] = pointPositions[b * 3];
      linePositions[e * 6 + 4] = pointPositions[b * 3 + 1];
      linePositions[e * 6 + 5] = pointPositions[b * 3 + 2];
    }
    if (pointsGeo.current) {
      pointsGeo.current.attributes.position.needsUpdate = true;
    }
    if (linesGeo.current) {
      linesGeo.current.attributes.position.needsUpdate = true;
    }

    // Cursor parallax: ease the whole constellation toward the pointer
    if (group.current) {
      const targetY = state.pointer.x * 0.28;
      const targetX = -state.pointer.y * 0.18;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry ref={pointsGeo}>
          <bufferAttribute
            attach="attributes-position"
            args={[pointPositions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[graph.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={sprite ?? undefined}
          alphaMap={sprite ?? undefined}
        />
      </points>
      <lineSegments>
        <bufferGeometry ref={linesGeo}>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      className="!absolute inset-0"
    >
      <Constellation />
    </Canvas>
  );
}
