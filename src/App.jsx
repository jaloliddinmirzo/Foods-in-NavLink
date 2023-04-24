import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import Breakfast from "./Breakfast"
import Shakes from "./Shakes"
import All from "./All"
import Lunch from "./Lunch"


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <All></All>
      },
      {
        path: "breakfast",
        element: <Breakfast></Breakfast>
      },
      {
        path: "lunch",
        element: <Lunch></Lunch>
      },
      {
        path: "shakes",
        element: <Shakes></Shakes>
      }
    ]
  },

])


function App() {

  return (
    <RouterProvider router={routers} ></RouterProvider>
  )
}

export default App
