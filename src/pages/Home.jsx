// // import ClothingDisplay from '@/components/PicShop'
// // import HeaderSection from '../components/HeaderSection'
// // import FAQ from '@/components/acc'
// // import PageLayout from '@/components/pageLayout'
// // import TrustSection from '@/components/TruestSection'

// // const Home = () => {

// //   return (
// //     <div>
// //       < HeaderSection />
// //       <ClothingDisplay />
// //       <PageLayout />
 
// //   <TrustSection />
// //       <FAQ />
// //     </div>
// //   )
// // }

// // export default Home
// import ClothingDisplay from '@/components/PicShop'
// import HeaderSection from '../components/HeaderSection'
// import FAQ from '@/components/acc'
// import PageLayout from '@/components/pageLayout'
// import TrustSection from '@/components/TruestSection'

// const Home = () => {
//   return (
//     <div>
//       <HeaderSection />
//       <ClothingDisplay />

//       {/* Target for "How It Works" */}
//       <div id="how-it-works" className="pt-20">
//         <PageLayout />
//       </div>

//       {/* Target for "Why Us" */}
//       <div id="why-us" className="pt-20">
//         <TrustSection />
//       </div>

//       <FAQ />
//     </div>
//   )
// }

// export default Home;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClothingDisplay from '@/components/PicShop';
import HeaderSection from '../components/HeaderSection';
import FAQ from '@/components/acc';
import PageLayout from '@/components/pageLayout';
import TrustSection from '@/components/TruestSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = localStorage.getItem("scrollToSection");

    if (scrollToSection) {
      setTimeout(() => {
        const section = document.getElementById(scrollToSection);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          localStorage.removeItem("scrollToSection"); // Clear after use
        }
      }, 500); // Ensure rendering before scrolling
    }
  }, [location]);

  return (
    <div>
      <HeaderSection />
      <ClothingDisplay />

      {/* Section for How It Works */}
      <div id="how-it-works" className="pt-20">
        <PageLayout />
      </div>

      {/* Section for Why Us */}
      <div id="why-us" className="pt-20">
        <TrustSection />
      </div>

      <FAQ />
    </div>
  );
};

export default Home;
