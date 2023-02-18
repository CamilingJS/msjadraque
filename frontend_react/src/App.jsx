import { useState } from 'react'
import './App.css'

import {About, Blog, Footer, Header, Skills, Testimonial} from './container';
import {Navbar} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Blog />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
