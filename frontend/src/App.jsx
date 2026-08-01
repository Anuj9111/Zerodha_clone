import { Outlet } from "react-router-dom";
import {Navbar} from "./components/landing_page/Navbar.jsx";
import {Footer} from "./components/landing_page/Footer.jsx";

function App() {
  return (
    <div className="h-full w-screen font-serif">
      <Navbar />
      <main className="pt-18">
        <Outlet />
      </main>

      

      <Footer />
    </div>
  );
}

export default App;