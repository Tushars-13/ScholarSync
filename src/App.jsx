import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
  <div className= "app">
    <Navbar
      name="Tushar"
      cgpa="7.1"
      department="CSE-DS"
    />

    <div className= "content">
      <Sidebar />
      <Dashboard />
    </div>

  </div>
  )
  
}
export default App
