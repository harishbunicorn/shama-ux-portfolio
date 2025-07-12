// ✅ File: components/ParticleBurst.jsx
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleBurst({ trigger }) {
  const group = useRef();
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 400; i++) {
      const dir = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();
      arr.push({ dir, speed: Math.random() * 2 + 0.5 });
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!trigger) return;
    group.current.children.forEach((p, i) => {
      const { dir, speed } = particles[i];
      p.position.add(dir.clone().multiplyScalar(speed * delta));
      p.material.opacity -= delta * 0.7;
    });
  });

  return (
    <group ref={group}>
      {particles.map((_, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <sphereGeometry args={[0.015, 6, 6]} />
          <meshBasicMaterial transparent opacity={1} color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}



