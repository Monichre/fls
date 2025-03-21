'use client'

import {forwardRef, useRef, useState} from 'react'
import Image from 'next/image'
import {motion, type MotionValue} from 'framer-motion'
import {Canvas} from '@react-three/fiber'
import {Environment, Float, CameraControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {Button} from '@/components/ui/button'
import {ZoomIn, ZoomOut, RotateCcw} from 'lucide-react'
import {Divider} from '@/components/ui'
import {PinContainer} from '@/components/ui/3d-pin'

// Define types for the LighterModel
interface LighterModelProps {
  y?: number
  [key: string]: unknown
}

// Custom 3D lighter model using Three.js primitives
function LighterModel({y = 0, ...props}: LighterModelProps) {
  const meshRef = useRef<THREE.Group>(null)

  // Import the Model component from the lighter component
  // import { Model } from "@/components/3d/lighter/lighter";

  // Create a texture loader for the logo
  const texture = new THREE.TextureLoader().load('/mobile_screen_medium.png')

  // Set texture properties for better rendering
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping
  texture.minFilter = THREE.LinearFilter
  texture.needsUpdate = true

  // Create a material with the texture
  // Create a material with the texture
  const logoMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    roughness: 0.3,
    metalness: 0.2,
  })

  // To use this material, we'll apply it to a mesh in the return function

  // Animation using y value for rotation
  useFrame(() => {
    if (meshRef.current) {
      // Use the y value to compute rotation - normalize it to a reasonable range
      // The division factor controls how sensitive the rotation is to scrolling
      const yRotation = y ? (y / 1000) * Math.PI : 0

      // Apply rotation with smooth interpolation
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        yRotation,
        0.05
      )
    }
  })

  return (
    <group ref={meshRef} {...props} dispose={null} scale={1.5}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color='#222222' roughness={0.5} metalness={0.8} />
      </mesh>
      {/* Logo using the texture material */}
      <mesh position={[0, 0, 0.26]} castShadow receiveShadow>
        <planeGeometry args={[0.8, 1.6]} />
        <primitive object={logoMaterial} attach='material' />
      </mesh>
    </group>
  )

  // return (
  // 	<group ref={meshRef} {...props} dispose={null} scale={1.5}>
  // 		{/* Lighter body */}
  // 		<mesh position={[0, 0, 0]} castShadow receiveShadow>
  // 			<boxGeometry args={[1, 2, 0.5]} />
  // 			<meshStandardMaterial color="#222222" roughness={0.5} metalness={0.8} />
  // 		</mesh>

  // 		{/* Lighter top */}
  // 		<mesh position={[0, 1.2, 0]} castShadow receiveShadow>
  // 			<boxGeometry args={[1, 0.4, 0.5]} />
  // 			<meshStandardMaterial color="#333333" roughness={0.3} metalness={0.9} />
  // 		</mesh>

  // 		{/* Wheel */}
  // 		<mesh
  // 			position={[0, 1.4, 0.3]}
  // 			rotation={[Math.PI / 2, 0, 0]}
  // 			castShadow
  // 			receiveShadow
  // 		>
  // 			<cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
  // 			<meshStandardMaterial color="#444444" roughness={0.2} metalness={1} />
  // 		</mesh>

  // 		{/* Yellow accent */}
  // 		<mesh position={[0, 0, 0.26]} castShadow receiveShadow>
  // 			<boxGeometry args={[0.8, 1.8, 0.05]} />
  // 			<meshStandardMaterial color="#FFCC00" roughness={0.4} metalness={0.2} />
  // 		</mesh>

  // 		{/* FLS logo */}
  // 		<mesh position={[0, -0.5, 0.29]} castShadow receiveShadow>
  // 			<boxGeometry args={[0.6, 0.6, 0.01]} />
  // 			<meshStandardMaterial color="#FFCC00" roughness={0.4} metalness={0.2} />
  // 		</mesh>
  // 	</group>
  // );
}

// Define types for Scene
interface SceneProps {
  y?: number
  defaultZoom?: number
  minZoom?: number
  maxZoom?: number
}

// Scene component with camera controls
function Scene({
  y = 0,
  defaultZoom = 6,
  minZoom = 3,
  maxZoom = 10,
}: SceneProps) {
  const controlsRef = useRef<CameraControls>(null)

  return (
    <>
      <CameraControls ref={controlsRef} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-5, 5, 5]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
      <Environment preset='city' />

      <Float rotationIntensity={0.4}>
        {/* <LighterModel y={y} /> */}
        <Image
          src='/mobile_screen_medium.png'
          alt='FLS Lighter'
          width={100}
          height={100}
        />
      </Float>
    </>
  )
}

// Define the HeroProps interface with proper types
interface HeroProps {
  y: number | MotionValue<number>
  opacity: number | MotionValue<number>
  [key: string]: unknown
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({y, opacity, ...props}, ref) => {
    const [zoom, setZoom] = useState(6)
    const cameraControlsRef = useRef<CameraControls>(null)

    // Zoom in/out functions
    const zoomIn = () => {
      setZoom(Math.max(zoom - 1, 3))
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dolly(1, true)
      }
    }

    const zoomOut = () => {
      setZoom(Math.min(zoom + 1, 10))
      if (cameraControlsRef.current) {
        cameraControlsRef.current.dolly(-1, true)
      }
    }

    const resetView = () => {
      setZoom(6)
      if (cameraControlsRef.current) {
        cameraControlsRef.current.reset(true)
      }
    }

    return (
      <section
        id='hero'
        ref={ref}
        className='relative !h-[944px] flex items-center overflow-hidden'
        style={{height: '944px'}}
      >
        {/* Hero Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/hero.avif'
            alt='FLS Lighter'
            fill
            priority
            quality={100}
            className='object-cover object-center'
          />
          {/* Gradient overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-900 z-1 overlay' />
        </div>

        {/* Content */}
        <motion.div
          style={{y, opacity}}
          className='container mx-auto px-4 lg:px-6 z-20 flex md:flex-col lg:flex-row items-center justify-center overflow-visible'
        >
          <div className='sm:w-full sm:h-auto lg:w-1/2 mb-10 lg:mb-0'>
            <Image
              width={217}
              height={85}
              src='/logo-letters.png'
              alt='FLS Logo'
            />
            <h1
              className='hero-text text-4xl lg:text-6xl font-bold text-white my-2'
              style={{letterSpacing: '-1px'}}
            >
              FIRE UP THE FUN
            </h1>

            <div className='hero-buttons flex flex-wrap gap-4'>
              <Button
                className='bg-yellow rounded-full button transition-all duration-300'
                size='lg'
              >
                Our Products
              </Button>
              <Button
                className='bg-white text-black hover:bg-white/10 rounded-full button transition-all duration-300'
                size='lg'
              >
                View More
              </Button>
            </div>
          </div>

          <div className='lg:w-1/2 h-[600px] lg:h-[600px] relative overflow-visible'>
            {/* Semi-transparent backdrop for 3D model */}
            <div className='absolute inset-0 bg-none z-0' />

            {/* 3D Model Canvas */}
            {/* <div className="relative z-10 h-full w-full flex items-center justify-center overflow-visible canvas-wrapper">
							<div className="relative animate-float">
								<div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30 blur-sm rounded-lg -z-10"></div>
							</div>
							 <Canvas
									camera={{ position: [0, 0, 6], fov: 40 }}
									shadows
									dpr={[1, 2]}
									gl={{ preserveDrawingBuffer: true, alpha: true }}
									style={{ height: "100%", width: "100%", overflow: "visible" }}
								>
									<Scene y={typeof y === "number" ? y : 0} />
								</Canvas> 

							{/* Zoom controls - now OUTSIDE the Canvas */}
            {/* <div className="hero-buttons absolute bottom-4 right-4 flex flex-col gap-2 bg-black/30 backdrop-blur-sm p-2 rounded-lg">
								<Button
									onClick={zoomIn}
									className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white"
									aria-label="Zoom in"
								>
									<ZoomIn size={16} />
								</Button>
								<Button
									onClick={zoomOut}
									className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white"
									aria-label="Zoom out"
								>
									<ZoomOut size={16} />
								</Button>
								<Button
									onClick={resetView}
									className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white"
									aria-label="Reset view"
								>
									<RotateCcw size={16} />
								</Button>
							</div> 
						</div>
						*/}
          </div>
        </motion.div>

        {/* Bottom border */}
        <Divider
          backgroundImage='/bottom-decal.svg'
          color='#F7CB00'
          height={50}
          className='z-10'
        />
      </section>
    )
  }
)

Hero.displayName = 'Hero'
