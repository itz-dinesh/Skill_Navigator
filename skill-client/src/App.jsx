import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Sidebar from './components/SideBar'
import ProfileForm from './components/ProfileForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup />
      {/* <Sidebar />
      <ProfileForm /> */}
    </div>
  )
}

export default App;
