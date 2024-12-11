import React from "react";

interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
}

const features: Feature[] = [
    {
        title: "EZ Form",
        description:
            "Get in-depth analytics about bid trends, success rates, and contract awards, helping you make informed decisions.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-blue-500"
                viewBox="0 0 24 24"
            >
                <path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2zm-1 15H7v-4h4v4zm6-6h-4V7h4v4z" />
            </svg>
        ),
    },
    {
        title: "Suggestions Based on Profile",
        description:
            "Use powerful tools to prepare compliant and competitive bids, boosting your chances of winning.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-green-500"
                viewBox="0 0 24 24"
            >
                <path d="M12 2C6.477 2 2 6.478 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2zm-1 15H7v-4h4v4zm6-6h-4V7h4v4z" />
            </svg>
        ),
    },
    {
        title: "Automated Compliance Checks",
        description:
            "Ensure your bids meet all legal requirements and standards effortlessly with our compliance verification tool.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm-1 16h-4v-4h4v4zm6-6h-4V7h4v4z" />
            </svg>
        ),
    },
    {
        title: "Contract Oversight",
        description:
            "Monitor active contracts, deadlines, and deliverables with built-in project management tools.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-purple-500"
                viewBox="0 0 24 24"
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 15H7v-4h4v4zm6-6h-4V7h4v4z" />
            </svg>
        ),
    },
];

const FeaturesCard: React.FC = () => {
    return (
        <section className="container mx-auto p-8" id="cards" >
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
                Key Features of Contractual
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="flex items-center justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesCard;
