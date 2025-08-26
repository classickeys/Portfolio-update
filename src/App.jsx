import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/index.jsx'
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';
import Contact from './components/Contact/index.jsx';
import Projects from './components/Projects/index.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
