import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Box() {
  const meshRef = useRef()
  const [color, setColor] = useState(0)
  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })
  return (
    <mesh
      ref={meshRef}
      position={[0, 1, 0]}
      onClick={() => setColor(curr => (curr >= 2 ? 0 : curr + 1))}
    >
      <boxBufferGeometry />
      <meshStandardMaterial
        color={color === 0 ? "green" : color === 1 ? "orange" : "hotpink"}
      />
    </mesh>
  )
}
