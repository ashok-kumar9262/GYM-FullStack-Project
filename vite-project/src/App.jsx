import React from 'react'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
  import {BrowserRouter} from 'react-router-dom'

  import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions'
import Gellery from './components/Gellery';
import Pricing from './components/Pricing';
import Contect from './components/Contect';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>

    {/* <Navbar /> */}
    <Hero />
    <WorkoutSessions />
    <Gellery />
    {/* <Pricing /> */}
    <Contect />
    <BMICalculator />
    <Footer />


    </BrowserRouter>
    
  )
}

export default App