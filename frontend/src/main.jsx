
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { CookiesProvider } from "react-cookie";
import {RouterProvider} from "react-router-dom";
import router from "./routes/router"

createRoot(document.getElementById('root')).render(
    <CookiesProvider>
        <RouterProvider router={router} />
    </CookiesProvider>
    // <App />
  
)
