import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' 
import Layout from './Layout.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import ContactUs from './Componets/ContactUs/ContactUs.jsx'
import User from './Componets/User/User.jsx'
import Github from './Componets/Github/Github.jsx'
import { githubInfoLoader } from './Componets/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path : '/' ,
//     element : <Layout/> , 
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "About",
//         element : <About/>
//       },
//       {
//         path : "ContactUs",
//         element : <ContactUs/>
//       }
//     ]
//   }
// ])

// Another way or Syntax for Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route path='User/:userid' element={<User/>}/>
      {/* <Route path='Github' element={<Github/>}/> */}
      <Route
        loader={githubInfoLoader}         /* used for better optimisation */
        path='Github'
        element={<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
