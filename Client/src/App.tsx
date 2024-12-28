import { SignedIn, SignedOut } from "@clerk/clerk-react"
import Navigation from "./Navigation/Navigation"
import Auth from "./Auth/Auth"
// import Form from "./Navigation/Form"


function App() {
  

  return (
    <div className="relative bg-background-500 p-4 text-grayscale-500  min-h-screen">
      {/* <SignedIn>
        <Navigation/> */}
        {/* <Form/> */}
      {/* </SignedIn> */}
      {/* <SignedOut> */}
        <Auth/>
      {/* </SignedOut> */}
    </div>
  )
}

export default App
