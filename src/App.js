import { Canvas } from "@react-three/fiber"

function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
