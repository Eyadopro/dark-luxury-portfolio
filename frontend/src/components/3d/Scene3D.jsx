import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useRef } from 'react'

function FloatingOrb() {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.15
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere args={[1.4, 64, 64]} ref={mesh} scale={1.6}>
        <MeshDistortMaterial
          color="#c9a227"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.25}
          metalness={0.7}
        />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5e0" />
      <pointLight position={[-4, -2, 3]} intensity={0.6} color="#c9a227" />
      <FloatingOrb />
    </Canvas>
  )
}
