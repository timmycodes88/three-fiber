import tw from "twin.macro"
import Scene from "./Scene"

function App() {
  return (
    <Body>
      <Scene />
    </Body>
  )
}

const Body = tw.div`h-screen w-screen bg-blue-200`

export default App
