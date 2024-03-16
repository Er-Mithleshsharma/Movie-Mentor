import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MovieDetail from './MovieDetail';
import Watch from './Watch';


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
                 {
                  path:"/moviedetail/:id",
                  element:<MovieDetail/>
                 },
                 {
                  path:"/watch/:id",
                  element:<Watch/>
                 }
     
    ])
     
   
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default RoutingConfig