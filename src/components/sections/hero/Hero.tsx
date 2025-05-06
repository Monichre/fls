'use client'

import {forwardRef, useRef, useState} from 'react'
import Image from 'next/image'
import {motion, type MotionValue} from 'framer-motion'

import {Environment, Float, CameraControls} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {Button} from '@/components/ui/button'

import {useScrollToSection} from '@/hooks/useScrollToSection'

import {SignUpForm} from '@/components/sign-up/signup-form'
import {Divider} from '@/components/ui'

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
  valueProposition?: string
  primaryCTA?: string
  secondaryCTA?: string
  isMobile?: boolean
  isLandscape?: boolean
  prefersReducedMotion?: boolean
  [key: string]: unknown
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      y,
      opacity,
      valueProposition = 'High-Performance Lighters for Adventure, Home & Everywhere in Between',
      primaryCTA = 'Shop FLS Lighters',
      secondaryCTA = 'Watch Demo',
      ...props
    },
    ref
  ) => {
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

    const {isScrolled, mobileMenuOpen, scrollTo, scrollToSection} =
      useScrollToSection()

    const handleClick = (href: string) => {
      // const targetId = href.split('#')[1]
      scrollTo(href)
    }
    // email
    // name
    // company
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
            alt='FLS Lighter - Premium Windproof Lighter'
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
          layoutId='hero-content'
          // style={{y, opacity}}
          className='container h-full flex flex-col justify-center align-center items-center  mx-auto px-4 lg:px-6 z-20 md:flex md:flex-row justify-center items-center overflow-visible'
        >
          <div className='sm:w-full sm:h-auto md:w-1/2 md:w-[40vw] mb-10 lg:mb-0 mx-auto px-12'>
            <Image
              width={217}
              height={85}
              src='/logo-letters.png'
              alt='FLS USA Logo - Premium Lighters'
              className='mb-10 mx-auto md:mx-0'
            />
            <h1
              className='hero-text text-center md:text-left text-4xl lg:text-6xl font-bold text-white mb-4 mx-auto'
              style={{letterSpacing: '-1px'}}
            >
              SPARK THE <br /> EXCITEMENT
            </h1>

            {/* Value proposition subheading */}
            <p className='hero-text text-center md:text-left text-lg md:text-xl text-yellow-400 mb-6'>
              {valueProposition}
            </p>

            <div className='hero-buttons flex flex-wrap gap-4 mt-2 justify-center md:justify-start'>
              <Button
                className='bg-yellow-400 hover:bg-yellow-500 text-black rounded-full button transition-all duration-300 button fade-in'
                size='lg'
                onClick={() => handleClick('#lighter-collection')}
              >
                {primaryCTA}
              </Button>
              <Button
                className='bg-white text-black hover:bg-white/10 hover:text-white rounded-full button transition-all duration-300 button fade-in'
                size='lg'
                onClick={(e) => handleClick('#signature-design')}
                variant='outline'
              >
                {secondaryCTA}
              </Button>
            </div>
          </div>

          <div className='lg:w-1/2 relative overflow-visible flex items-center justify-center content-center'>
            {/* Semi-transparent backdrop for 3D model */}
            <div className='absolute inset-0 bg-none z-0' />
            <div className='relative z-10'>
              <div className='max-w-3xl text-center fade-in opacity-0 translate-y-10'>
                <h2
                  className='hero-text text-center text-4xl lg:text-6xl font-bold mb-2  uppercase font-poppins-black max-w-3xl mx-auto'
                  style={{letterSpacing: '-1px', color: '#fff'}}
                >
                  Wholesalers <span className='text-[#F7CB00]'> & </span>{' '}
                  Distributors
                </h2>
                <p className='text-white max-w-md mx-auto text-center text-lg md:text-xl text-[#F7CB00] bottom-content-item'>
                  Get exclusive pricing and early access to new products
                </p>
              </div>

              {/* <div className='max-w-[300px] md:max-h-[500px] md:max-w-md mx-auto md:mx-0 '> */}
              <SignUpForm />
              {/* </div> */}
            </div>
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
