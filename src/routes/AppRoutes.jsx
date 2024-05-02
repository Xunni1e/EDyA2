import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Cartelera from "../pages/cartelera/cartelera";
import Estrenos from "../pages/estrenos/estrenos";
import Confiteria from "../pages/confiteria/confiteria";
import Registro from "../pages/registro/registro";
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
    },
    {
        path:"/registro",
        element: <Registro/>
    }
])

const rutas=()=>{
    return (
        <RouterProvider router={router} />
    )
}
export default rutas