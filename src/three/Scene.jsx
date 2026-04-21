import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { TubeGeometry, Vector3, CatmullRomCurve3 } from "three";
import { useRef, useMemo } from "react";
import * as THREE from "three";


function Particles() {
  const pointsRef = useRef();
  const particleCount = 2000;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0003;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 0, -10]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#4f46e5"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene() {
  return (
    <Canvas
  camera={{ position: [0, 0, 12], fov: 50 }}
  dpr={[1, 2]}
  gl={{
    antialias: true,
    toneMapping: THREE.ACESFilmicToneMapping,
    outputColorSpace: THREE.SRGBColorSpace,
  }}
>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <Particles />
      

    </Canvas>
  );
}
