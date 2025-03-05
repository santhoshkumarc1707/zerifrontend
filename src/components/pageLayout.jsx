import { SVGComponent, SecondSVGComponent, ThirdSVGComponent, FourthSVGComponent, FifthSVGComponent } from "../assets/svgComponts";

const PageLayout = () => {
    const steps = [
        {
            title: "Free Secure Pouch",
            description: "India's first online marketplace for selling pure Zari Silk Sarees, Kanchipuram Silk Sarees, with a free pickup service.",
            icon: <SVGComponent />,
        },
        {
            title: "Pack Your Items",
            description: "Securely pack your sarees using the pouch provided and get ready for pickup.",
            icon: <SecondSVGComponent />,
        },
        {
            title: "Free Pickup",
            description: "Enjoy a hassle-free pickup service right from your doorstep.",
            icon: <ThirdSVGComponent />,
        },
        {
            title: "Quality Test",
            description: "Our experts will evaluate the quality and authenticity of your sarees.",
            icon: <FourthSVGComponent />,
        },
        {
            title: "Receive Money",
            description: "Get instant payment after the successful evaluation of your sarees.",
            icon: <FifthSVGComponent />,
        },
    ];

    return (
        <div className="flex flex-col items-center py-20 px-10 bg-white">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">How It Works</h2>

            {/* Steps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex-1 p-6 border-2 border-gray-200 rounded-xl flex flex-col items-center bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 mb-4 flex justify-center items-center">{step.icon}</div>

                        {/* Step Number */}
                        <div className="w-8 h-8 bg-black text-white flex justify-center items-center rounded-full text-sm font-semibold shadow-md mb-3">
                            {index + 1}
                        </div>

                        {/* Title */}
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{step.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 text-center">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageLayout;
