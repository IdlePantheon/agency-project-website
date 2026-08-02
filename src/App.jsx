import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Footer from './components/Footer'
import AddProjectForm from './components/AddProjectForm'
import ProjectCard from './components/ProjectCard'
import ProjectList from './components/ProjectList'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Footer />
      <AddProjectForm />
      <ProjectCard />
      <ProjectList />
    </div>
  );
}

export default App
