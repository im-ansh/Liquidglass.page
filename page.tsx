'use client';

import { GlassCard } from '@/components/GlassCard';
import { GlassButton } from '@/components/GlassButton';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function SpinningCube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00FFFF" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1f1f1f] text-white p-6 flex flex-col items-center justify-center gap-12">
      <GlassCard className="p-8 text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4">🧊 LiquidGlass UI</h1>
        <p className="text-lg mb-6">
          A library of 30+ elegant Apple-style glassmorphism components built with Tailwind, React & TypeScript.
        </p>
        <GlassButton label="Get Started" onClick={() => alert('Coming Soon')} />
      </GlassCard>

      <section className="w-full max-w-3xl h-[400px]">
        <Canvas>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <SpinningCube />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <p className="text-center text-sm mt-2 opacity-60">Interactive 3D Cube – Powered by Three.js</p>
      </section>
    </main>
  );
}