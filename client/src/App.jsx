
// import './App.css'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import PaymentSuccess from "./components/PaymentSuccess"
import PaymentFailed from './components/PaymentFailed'
import PaymentHistory from "./components/PaymentHistory"
import Nav from "./components/Nav"



function App() {


  return (
    <Router>
      <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/paymentsuccessful" element={<PaymentSuccess/>}/>
      <Route path='/paymentfailed' element={<PaymentFailed/>}/>
      <Route path='/paymenthistory' element={<PaymentHistory/>}/> 
    </Routes>
    </Router>
  )
}

export default App
