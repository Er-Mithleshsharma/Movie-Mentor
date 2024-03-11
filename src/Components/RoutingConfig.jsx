import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const RoutingConfig = () => {
    const approuter = createBrowserRouter([
        {
             path:"/",
             element:<App/>,
             children:[
              {
                 path:'/',
                 element:<Login/>
              },
                 {
              path:"/browse",
              element:<Browse/>
                 },
             ]
        },
     
    ])
     
   
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default RoutingConfig