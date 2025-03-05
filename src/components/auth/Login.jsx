// import Loginpic from "@/assets/loginpic.svg";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
//             {/* Left Side - Login Form */}
//             <div className="w-full md:w-1/2 max-w-md md:max-w-lg lg:max-w-xl bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
//                     Welcome Back!
//                 </h2>
//                 <p className="text-gray-500 text-center md:text-left mt-2 mb-6 sm:mb-8">
//                     Sign in to continue.
//                 </p>

//                 {/* Input Field */}
//                 <div className="w-full mb-4">
//                     <label className="block text-gray-700 font-medium mb-2">
//                         Phone Number
//                     </label>
//                     <div className="relative">
//                         <input
//                             type="tel"
//                             placeholder="Enter your phone number"
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
//                         />
//                     </div>
//                 </div>

//                 {/* Button */}
//                 <button
//                     className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg mt-4 sm:mt-6 transition duration-300 hover:bg-green-700 shadow-md"
//                     onClick={() => navigate("/")}
//                 >
//                     Send OTP
//                 </button>

//                 {/* reCAPTCHA Info */}
//                 <p className="text-xs text-gray-500 mt-4 sm:mt-6 text-center">
//                     This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
//                 </p>
//             </div>

//             {/* Right Side - Background Image */}
//             <div className="hidden md:flex md:w-1/2 justify-center items-center">
//                 <div className="relative w-full max-w-lg">
//                     <img
//                         src={Loginpic}
//                         alt="Login Illustration"
//                         className="w-full h-auto object-cover rounded-lg md:rounded-l-xl"
//                     />
//                     {/* Dark Overlay */}
//                     <div className="absolute inset-0 bg-black opacity-30 rounded-lg md:rounded-l-xl"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
import Loginpic from "@/assets/loginpic.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen">
            {/* Left Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 sm:px-10 md:px-16 lg:px-24 shadow-lg">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                        Welcome Back!
                    </h2>
                    <p className="text-gray-500 mb-6 sm:mb-8">Sign in to continue.</p>

                    {/* Input Field */}
                    <div className="w-full mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                        />
                    </div>

                    {/* Button */}
                    <button
                        className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg mt-4 transition duration-300 hover:bg-green-700 shadow-md"
                        onClick={() => navigate("/")}
                    >
                        Send OTP
                    </button>

                    {/* reCAPTCHA Info */}
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div
                className="hidden md:block md:w-1/2 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Loginpic})`,
                }}
            ></div>
        </div>
    );
};

export default Login;
