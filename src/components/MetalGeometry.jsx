// src/components/MetalGeometry.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Html, useGLTF, useProgress } from "@react-three/drei";

/**
 * Loader UI
 */
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: "white", textAlign: "center", fontFamily: "Inter, sans-serif" }}>
        <div style={{ fontSize: 14, marginBottom: 6 }}>Modell betöltése…</div>
        <div style={{ width: 180, height: 6, background: "#123", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: "#00AEEF" }} />
        </div>
        <div style={{ fontSize: 11, opacity: 0.85, marginTop: 6 }}>{Math.round(progress)}%</div>
      </div>
    </Html>
  );
}

/**
 * GLB modell betöltése
 * FONTOS: a fájl legyen a public/models mappában!
 */
function Model({ scale = 1.0 }) {
  const gltf = useGLTF(import.meta.env.BASE_URL + "models/cnc_machine.glb");
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={ref} dispose={null} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
}

/**
 * FŐ KOMPONENS
 */
export default function MetalGeometry() {
  return (
    <div className="w-full h-[520px]">
      <Canvas shadows camera={{ position: [0, 1.6, 6], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <spotLight position={[-6, 8, 6]} angle={0.4} intensity={0.4} penumbra={0.5} />

        <Suspense fallback={<Loader />}>
          <Model scale={1.0} />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={0.2}
        />
      </Canvas>
    </div>
  );
}
