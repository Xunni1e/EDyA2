import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Routes from "./routes/AppRoutes";
import { ShowtimeProvider } from "../context/useFuncionContext";
import { AsientosProvider } from "../context/useAsientosContext";
import { AuthProvider } from "../context/authContext";
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <ShowtimeProvider>
                <AsientosProvider>
                    <Routes />
                </AsientosProvider>
            </ShowtimeProvider>
        </AuthProvider>
    </React.StrictMode>,
)
