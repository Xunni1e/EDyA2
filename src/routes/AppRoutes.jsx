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
import Nosotros from "../pages/nosotros/nosotros";
import NotFound from "../pages/notfound/notfound";
import { RedirectCali } from "../hooks/useRedirect";

const router = createBrowserRouter([
    {
        path:"/",
        element: <RedirectCali/>
    },
    {
        path:"/:ciudad",
        element: <Cartelera/>
    },
    {
        path:"/:ciudad/estrenos",
        element: <Estrenos/>
    },
    {
        path:"/:ciudad/confiteria",
        element: <Confiteria/>
    },
    {
        path:"/:ciudad/registro",
        element: <Registro/>
    },
    {   path:"/:ciudad/pelicula/:id",
        element: <InfoPelicula/>
    },
    {
        path:"/:ciudad/pelicula/:id/pago-1",
        element: <PagoPrimerPaso/>
    },
    {
        path:"/:ciudad/pelicula/:id/pago-2",
        element: <PagoSegundoPaso/>
    },
    {
        path:"/:ciudad/pelicula/:id/pago-3",
        element: <PagoTercerPaso/>
    },
    {
        path:"/:ciudad/compras",
        element: <Compras/>
    },
    {
        path:"/:ciudad/*",
        element: <NotFound/>
    },
    {
        path:"/:ciudad/nosotros",
        element: <Nosotros/>
    }
])

const rutas=()=>{
    return (
        <RouterProvider router={router} />
    )
}
export default rutas