import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Cartelera from "../pages/cartelera/cartelera";
import Estrenos from "../pages/estrenos/estrenos";
import Confiteria from "../pages/confiteria/confiteria";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Cartelera/>
    },
    {
        path:"/estrenos",
        element: <Estrenos/>
    },
    {
        path:"/confiteria",
        element: <Confiteria/>
    }
])

const rutas=()=>{
    return (
        <RouterProvider router={router} />
    )
}
export default rutas