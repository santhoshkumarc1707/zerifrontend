// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import Logo from "@/assets/logo.png";
// import { useItemContext } from "../ItemContext"; // Import the context to get cart items

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Use the context to get selectedItems from the cart
//   const { selectedItems } = useItemContext();

//   // Calculate total items in cart by summing up quantities
//   const cartCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <nav className="bg-white shadow-md w-full fixed top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
//           <img src={Logo} alt="Logo" className="h-12 w-24" />
//           <h1 className="text-2xl font-bold text-yellow-500">OldSaree</h1>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-8">
//           <Link to="#" className="hover:text-red-500">Why Us</Link>
//           <Link to="#" className="hover:text-red-500">Sell</Link>
//           <Link to="#" className="hover:text-red-500">Service</Link>
//           <Link to="#" className="hover:text-red-500">How It Works</Link>
//         </div>

//         {/* Cart Icon */}
//         <div className="relative flex items-center">
//           <Link to="/orders" className="hover:text-red-500 flex items-center relative">
//             <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
//           <Link to="/sell">
//             <Button className="bg-red-600 hover:bg-red-500 text-white">Sell Now</Button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white shadow-md p-4 flex flex-col gap-4 items-center text-center">
//           <Link to="#" className="hover:text-red-500 w-full py-2 border-b" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
//           <Link to="#" className="hover:text-red-500 w-full py-2 border-b" onClick={() => setIsMenuOpen(false)}>Sell</Link>
//           <Link to="#" className="hover:text-red-500 w-full py-2 border-b" onClick={() => setIsMenuOpen(false)}>Service</Link>
//           <Link to="#" className="hover:text-red-500 w-full py-2 border-b" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
//           <div className="pt-3 flex flex-col w-full">
//             <Button variant="outline" className="w-full" onClick={() => { setIsMenuOpen(false); navigate("/login"); }}>Login</Button>
//             <Link to="/sell" className="w-full mt-2">
//               <Button className="w-full bg-red-600 hover:bg-red-500 text-white">Sell Now</Button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo.png";
import { useItemContext } from "../ItemContext";
import {Link} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get cart items count
  const { selectedItems } = useItemContext();
  const cartCount = selectedItems.reduce((acc, item) => acc + item.quantity, 0);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      localStorage.setItem("scrollToSection", id);
      navigate("/"); // Navigate to home
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false); // Close mobile menu on click
  };

  // Function to scroll to a section
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay ensures the page renders first
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="h-12 w-24" />
          <h1 className="text-2xl font-bold text-yellow-500">OldSaree</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={() => handleScroll("why-us")} className="hover:text-red-500">Why Us</button>
          <button onClick={() => handleScroll("sell")} className="hover:text-red-500">Sell</button>
          <button onClick={() => handleScroll("service")} className="hover:text-red-500">Service</button>
          <button onClick={() => handleScroll("how-it-works")} className="hover:text-red-500">How It Works</button>
        </div>

        {/* Buttons (Login & Sell) */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
          <Link to="/sell">
            <Button className="bg-red-600 hover:bg-red-500 text-white relative">
              Sell Now
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 flex flex-col gap-4 items-center text-center">
          <button onClick={() => handleScroll("why-us")} className="hover:text-red-500 w-full py-2 border-b">Why Us</button>
          <button onClick={() => handleScroll("sell")} className="hover:text-red-500 w-full py-2 border-b">Sell</button>
          <button onClick={() => handleScroll("service")} className="hover:text-red-500 w-full py-2 border-b">Service</button>
          <button onClick={() => handleScroll("how-it-works")} className="hover:text-red-500 w-full py-2 border-b">How It Works</button>
          
          {/* Mobile Buttons */}
          <div className="pt-3 flex flex-col w-full">
            <Button variant="outline" className="w-full" onClick={() => { setIsMenuOpen(false); navigate("/login"); }}>Login</Button>
            <Link to="/sell" className="w-full mt-2">
              <Button className="w-full bg-red-600 hover:bg-red-500 text-white relative">
                Sell Now
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

