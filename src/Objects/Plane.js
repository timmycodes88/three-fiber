import degreesToRadians from "../utils/degreesToRadians"

export default function Plane() {
  return (
    <>
      <mesh position={[0, 0, 0]} rotation={[-degreesToRadians(90), 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color={"#226eff"} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[degreesToRadians(90), 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color={"#226eff"} />
      </mesh>
    </>
  )
}
