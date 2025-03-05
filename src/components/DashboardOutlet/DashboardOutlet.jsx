import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const DashboardOutlet = () => {
  return (
    <div className="flex h-14 flex-col min-h-screen">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardOutlet;
