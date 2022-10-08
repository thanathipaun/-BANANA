import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Slidbar from "./Slidbar";



export default function Layout() {
    return (
      <div>
        <Navbar />
        <Slidbar />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }