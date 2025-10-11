import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive";
import { Room } from './Room.jsx';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [-30, 0, 20], fov: 45 }}>
        <ambientLight intensity={1} color="#1a1a40"/>
        <directionalLight position={[5, 5, 5]} intensity={2}/>
        <OrbitControls 
          enablePan={false} 
          enableZoom={!isTablet} 
          maxDistance={40} 
          minDistance={10} 
          minPolarAngle={Math.PI/ 5} 
          maxPolarAngle={Math.PI / 2}
        />

        <group 
          scale={isMobile ? 0.7 : 2}
          position={[0, -3.5, 1]}
        >
          <Room />
        </group>
    </Canvas>
  )
}

export default HeroExperience