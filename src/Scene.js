import tw, { styled } from "twin.macro"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"

import Box from "./Objects/Box"
import Plane from "./Objects/Plane"
import { Suspense, useState } from "react"

export default function Scene() {
  return (
    <Body>
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <Box />
      <Plane />
    </Body>
  )
}

function Body({ children }) {
  return (
    <FullScreenCanvas>
      <Suspense fallback={null}>{children}</Suspense>
    </FullScreenCanvas>
  )
}

const FullScreenCanvas = tw(Canvas)`h-screen`
