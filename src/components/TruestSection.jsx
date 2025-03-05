import { ShieldCheck, ClipboardList, Package, Zap, DollarSign, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "India’s First Online Marketplace",
        icon: <ShieldCheck className="text-yellow-500 w-12 h-12" />,
        description: "OLDZARI.COM is India’s first platform for selling Pure Zari Silk, Kanchipuram, and Banarasi Sarees with free pickup and secure packing.",
    },
    {
        title: "Free Quality Test Report",
        icon: <ClipboardList className="text-yellow-500 w-12 h-12" />,
        description: "We provide a detailed quality test report for your Zari items, ensuring transparency and confidence in your sale.",
    },
    {
        title: "Secure Packaging",
        icon: <Package className="text-yellow-500 w-12 h-12" />,
        description: "Your sarees are protected with free tamper-proof courier covers and secure saree pouches during transit.",
    },
    {
        title: "Fast & Hassle-Free Payment",
        icon: <Zap className="text-yellow-500 w-12 h-12" />,
        description: "Selling is quick and easy! Once confirmed, your payment is instantly transferred to your UPI or bank account.",
    },
    {
        title: "Accurate Pricing",
        icon: <DollarSign className="text-yellow-500 w-12 h-12" />,
        description: "We determine a fair price based on quality assessments and expert valuation of your saree’s Zari content.",
    },
    {
        title: "100% Satisfaction Guarantee",
        icon: <RefreshCw className="text-yellow-500 w-12 h-12" />,
        description: "Not happy with the offer? No problem! We’ll return your saree at no cost—no questions asked.",
    },
];

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Why Choose <span className="text-yellow-500">OLDSAREE.COM?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center bg-white p-8 shadow-xl rounded-2xl border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Icon */}
                        <div className="mb-4">{feature.icon}</div>
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        {/* Description */}
                        <p className="text-gray-700 text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
