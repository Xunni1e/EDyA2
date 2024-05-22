import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Routes from "./routes/AppRoutes";
import { ShowtimeProvider } from "./hooks/useFuncion";
import { AsientosProvider } from "./hooks/useAsientos";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ShowtimeProvider>
            <AsientosProvider>
                <Routes />
            </AsientosProvider>
        </ShowtimeProvider>
    </React.StrictMode>,
)