import './App.css'
import Footer from './pages/home/Footer'
import Header from './pages/home/Header'
import Home from './pages/home/Home'

function App() {
  return (
    //eu preciso de <> para funcionar mais de duas tag
    <> 
    <Header/>
      <Home />
      <Footer />
    </>
  )
}

export default App
