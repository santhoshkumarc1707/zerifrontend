// import head from "@/assets/head.png"; // Ensure the correct image path

// const HeaderSection = () => {
//     return (
//         <div className="relative w-full h-[450px]">
//             {/* Background Image with Overlay */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center rounded-none"
//                 style={{ backgroundImage: `url(${head})` }}
//             >
//                 {/* Dark Overlay for Readability */}
//                 <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//             </div>

//             {/* Content */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
//                 <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
//                     Sell Your Old Zari Sarees at the Best Price
//                 </h1>
//                 <p className="text-2xl text-white">
//                     Get Instant Quotes & Hassle-Free Selling.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default HeaderSection;

import head from "@/assets/head.png"; // Ensure the correct image path

const HeaderSection = () => {
    return (
        <div className="relative w-full h-[450px]">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center rounded-none"
                style={{ backgroundImage: `url(${head})` }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
                    Sell Your Old Zari Sarees at the Best Price
                </h1>
                <p className="text-2xl text-white">
                    Get Instant Quotes & Hassle-Free Selling.
                </p>
            </div>
        </div>
    );
};

export default HeaderSection;
