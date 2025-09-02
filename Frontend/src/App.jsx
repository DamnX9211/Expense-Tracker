import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Toaster } from "@/components/ui/sonner"
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  
])

function App() {
  return (
    <div >
      <RouterProvider router={appRouter} />
      <Toaster />
    </div>
  )
}

export default App