import { useState } from 'react'
import './App.css'

import {About, Blog, Footer, Header, Skills, Testimonial} from './container';
import {Navbar} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <About />
      <Blog />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
    </div>
  )
}

export default App
