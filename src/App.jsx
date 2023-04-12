import QRCard from "./components/QRCard"
import { QRProvider } from "./context/QRContext"

function App() {

  return (
   <QRProvider>
   <QRCard/>
   </QRProvider>
  )
}

export default App
