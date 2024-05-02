import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Cartelera from "../pages/cartelera/cartelera";
import Estrenos from "../pages/estrenos/estrenos";
import Confiteria from "../pages/confiteria/confiteria";
import Registro from "../pages/registro/registro";
import InfoPelicula from "../pages/infopelicula/infopelicula";
import PagoPrimerPaso from "../pages/pagos/pagoprimerpaso";
import PagoSegundoPaso from "../pages/pagos/pagosegundopaso";
import PagoTercerPaso from "../pages/pagos/pagotercerpaso";
import Compras from "../pages/compras/compras";

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
    },
    {        path:"/pelicula/:id",
        element: <InfoPelicula/>
    },
    {
        path:"/pelicula/:id/pago-1",
        element: <PagoPrimerPaso/>
    },
    {
        path:"/pelicula/:id/pago-2",
        element: <PagoSegundoPaso/>
    },
    {
        path:"/pelicula/:id/pago-3",
        element: <PagoTercerPaso/>
    },
    {
        path:"/compras",
        element: <Compras/>
    }
])

const rutas=()=>{
    return (
        <RouterProvider router={router} />
    )
}
export default rutas