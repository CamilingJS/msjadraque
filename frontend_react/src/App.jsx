import { useState } from 'react'
import './App.css'

import {About, Blog, Footer, Header, Skills, Testimonial, Works} from './container';
import {Navbar} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Blog />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default App
