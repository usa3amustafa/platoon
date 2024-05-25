import { useEffect } from "react"
import AppRouter from "./AppRouter/AppRouter"
import lenis from "./lenisInit"

const App = () => {
  useEffect(() => {
    lenis.start()
    return () => {
      lenis.stop()
    }
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}
export default App
