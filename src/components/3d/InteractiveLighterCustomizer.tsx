'use client'

import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Text, Html } from '@react-three/drei'
import { Group, Mesh, Vector3, Color } from 'three'
import * as THREE from 'three'
import { gsap } from 'gsap'
import confetti from 'canvas-confetti'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Flame, Sparkles, Volume2, Palette, RotateCcw } from 'lucide-react'

// Flame Particle System Component
function FlameParticles({ isLit = false, position = [0, 2, 0] }: { isLit?: boolean; position?: [number, number, number] }) {
  const particlesRef = useRef<THREE.Points>(null)
  const [particles] = useState(() => {
    const particleCount = 50
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.2
      positions[i * 3 + 1] = Math.random() * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2
      
      const t = Math.random()
      colors[i * 3] = 1.0 // Red
      colors[i * 3 + 1] = 0.5 + t * 0.5 // Orange to Yellow
      colors[i * 3 + 2] = 0.0 // Blue
      
      sizes[i] = Math.random() * 0.5 + 0.1
    }
    
    return { positions, colors, sizes }
  })

  useFrame((state, delta) => {
    if (!particlesRef.current || !isLit) return
    
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const colors = particlesRef.current.geometry.attributes.color.array as Float32Array
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += delta * 2 // Move upward
      positions[i] += Math.sin(state.clock.elapsedTime * 5 + i) * delta * 0.5 // Flicker
      positions[i + 2] += Math.cos(state.clock.elapsedTime * 3 + i) * delta * 0.3
      
      // Reset particle when it goes too high
      if (positions[i + 1] > 3) {
        positions[i + 1] = 0
        positions[i] = (Math.random() - 0.5) * 0.2
        positions[i + 2] = (Math.random() - 0.5) * 0.2
      }
      
      // Animate colors for flame effect
      const colorIndex = Math.floor(i / 3) * 3
      colors[colorIndex] = 1.0
      colors[colorIndex + 1] = 0.3 + Math.sin(state.clock.elapsedTime * 10 + i) * 0.3
      colors[colorIndex + 2] = Math.max(0, Math.sin(state.clock.elapsedTime * 15 + i) * 0.2)
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.geometry.attributes.color.needsUpdate = true
  })

  if (!isLit) return null

  return (
    <points ref={particlesRef} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.sizes.length}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// 3D Lighter Model Component
function LighterModel({ 
  material = 'chrome', 
  color = '#000000',
  isLit = false,
  onClick 
}: { 
  material?: string
  color?: string
  isLit?: boolean
  onClick?: () => void
}) {
  const groupRef = useRef<Group>(null)
  const bodyRef = useRef<Mesh>(null)
  const topRef = useRef<Mesh>(null)
  
  // Animate the lighter on mount
  useEffect(() => {
    if (groupRef.current) {
      gsap.fromTo(groupRef.current.rotation, 
        { y: -Math.PI * 2 },
        { y: 0, duration: 2, ease: "back.out(1.7)" }
      )
      gsap.fromTo(groupRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      )
    }
  }, [])

  // Hover animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  // Material properties based on selection
  const getMaterialProps = () => {
    switch (material) {
      case 'chrome':
        return { metalness: 1, roughness: 0.1, color: new Color('#C0C0C0') }
      case 'gold':
        return { metalness: 1, roughness: 0.2, color: new Color('#FFD700') }
      case 'matte':
        return { metalness: 0.1, roughness: 0.9, color: new Color(color) }
      case 'rainbow':
        return { metalness: 0.8, roughness: 0.2, color: new Color('#FF00FF') }
      default:
        return { metalness: 0.5, roughness: 0.3, color: new Color(color) }
    }
  }

  const materialProps = getMaterialProps()

  return (
    <group ref={groupRef} onClick={onClick}>
      {/* Lighter Body */}
      <mesh ref={bodyRef} position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.35, 2.5, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      
      {/* Lighter Top */}
      <mesh ref={topRef} position={[0, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 0.3, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      
      {/* Flame Guard */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Brand Text */}
      <Text
        position={[0, 0, 0.41]}
        fontSize={0.15}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]}
      >
        FLS
      </Text>
      
      {/* Flame Particles */}
      <FlameParticles isLit={isLit} position={[0, 2, 0]} />
      
      {/* Glow effect when lit */}
      {isLit && (
        <pointLight
          position={[0, 2, 0]}
          color="#ff4500"
          intensity={2}
          distance={5}
        />
      )}
    </group>
  )
}

// Scene Component
function Scene({ 
  material, 
  color, 
  isLit, 
  onLighterClick 
}: { 
  material: string
  color: string
  isLit: boolean
  onLighterClick: () => void
}) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <LighterModel 
        material={material}
        color={color}
        isLit={isLit}
        onClick={onLighterClick}
      />
      
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.5} 
        scale={10} 
        blur={2} 
        far={2}
      />
      
      <Environment preset="studio" />
    </>
  )
}

// Material Options
const materials = [
  { id: 'chrome', name: 'Chrome', icon: '✨' },
  { id: 'gold', name: 'Gold', icon: '👑' },
  { id: 'matte', name: 'Matte', icon: '🎨' },
  { id: 'rainbow', name: 'Rainbow', icon: '🌈' },
]

const colors = [
  '#000000', '#FF0000', '#00FF00', '#0000FF', 
  '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF',
  '#800080', '#FFA500', '#FFC0CB', '#A52A2A'
]

// Main Component
export function InteractiveLighterCustomizer() {
  const [selectedMaterial, setSelectedMaterial] = useState('chrome')
  const [selectedColor, setSelectedColor] = useState('#000000')
  const [isLit, setIsLit] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/lighter-click.mp3') // You'd need to add this sound file
    audioRef.current.volume = 0.3
  }, [])

  const playSound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {}) // Ignore audio play errors
    }
  }

  const handleLighterClick = () => {
    setIsLit(!isLit)
    playSound()
    
    // Haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(100)
    }
    
    // Confetti when lighting
    if (!isLit) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FF4500', '#FF6347']
      })
    }
  }

  const resetCustomization = () => {
    setSelectedMaterial('chrome')
    setSelectedColor('#000000')
    setIsLit(false)
    
    // Celebration confetti
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.3 }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            FLS Lighter Customizer
          </h1>
          <p className="text-xl text-zinc-300">
            Design your perfect lighter with real-time 3D preview
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6 h-[600px]"
            >
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={
                  <Html center>
                    <div className="text-white">Loading...</div>
                  </Html>
                }>
                  <Scene
                    material={selectedMaterial}
                    color={selectedColor}
                    isLit={isLit}
                    onLighterClick={handleLighterClick}
                  />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    maxDistance={8}
                    minDistance={3}
                    maxPolarAngle={Math.PI / 1.5}
                  />
                </Suspense>
              </Canvas>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Material Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-yellow-400" />
                Material
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((material) => (
                  <Button
                    key={material.id}
                    variant={selectedMaterial === material.id ? "default" : "outline"}
                    className="h-16 flex flex-col gap-1"
                    onClick={() => setSelectedMaterial(material.id)}
                  >
                    <span className="text-2xl">{material.icon}</span>
                    <span className="text-sm">{material.name}</span>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Color Selection */}
            {selectedMaterial === 'matte' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">Color</h3>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color 
                          ? 'border-yellow-400 scale-110' 
                          : 'border-zinc-600 hover:border-zinc-400'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Controls</h3>
              <div className="space-y-3">
                <Button
                  onClick={handleLighterClick}
                  className={`w-full ${
                    isLit 
                      ? 'bg-orange-500 hover:bg-orange-600' 
                      : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                  }`}
                >
                  <Flame className="w-4 h-4 mr-2" />
                  {isLit ? 'Extinguish' : 'Light it up!'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="w-full"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Sound {soundEnabled ? 'On' : 'Off'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={resetCustomization}
                  className="w-full"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-zinc-800/50 backdrop-blur rounded-2xl p-6"
            >
              <div className="text-center">
                <AnimatePresence>
                  {isLit && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="text-orange-400 font-bold text-lg mb-2"
                    >
                      🔥 FLAME ON! 🔥
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="text-sm text-zinc-400">
                  Click the lighter to ignite!<br />
                  Drag to rotate • Scroll to zoom
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}