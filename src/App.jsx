import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layout/app-layout'
import {Home} from './pages/home'
import { Search } from './pages/search'
import { Category } from './pages/category'
import { Favorites } from './pages/favorites'

const router = createBrowserRouter([
  {element: <AppLayout />,
    
   children: [
    {
     element: < Home />,
     path: '/' 
    },
    {
      element: <Search />,
      path: '/search/:query'  //: is for variable
    },
    {
      element: <Category />,
      path: '/:type/:slug'
    },
    {
      element: <Favorites />,
      path: '/favorites'
    }
   ]
  },

])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
