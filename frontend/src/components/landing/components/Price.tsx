interface PricingCardProps {
    name: string;
    description: string;
    price: number;
    features: string[];
    popular?: boolean;
}

function PricingCard({ name, description, price, features, popular }: PricingCardProps) {
    return (
        <div className={`border rounded-lg p-6 shadow-sm flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl ${popular ? "border-[#f15218]" : "border-gray-300"}`}>
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500 mt-1.5">{description}</p>
                </div>
                {popular && (
                    <span className="px-2 py-1 text-sm font-medium text-white bg-[#f15218] rounded">
                        Popular
                    </span>
                )}
            </div>
            <div className="mt-4">
                <span className="text-4xl font-bold">S./ {price}</span>
                <span className="text-gray-500 ml-1">/plan</span>
            </div>
            <div className="mt-4 flex-grow">
                <ul className="space-y-3">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                            <svg
                                className="w-4 h-4 text-[#f15218] shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-500">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <button
                    className={`w-full py-2 text-white rounded transition-colors duration-300 ${popular
                        ? "bg-[#f15218] hover:bg-[#fdbe0f]"
                        : "bg-gray-700 hover:bg-gray-800"
                        }`}
                >
                    Matricularme .  .  .
                </button>
            </div>
        </div>
    );
}

export default function PricingTable() {
    const plans: PricingCardProps[] = [
        {
            name: "Plan de dos pagos",
            description: "Perfecto para iniciar",
            price: 250,
            features: ["Dos pagos", "Acceso completo al sistema", "Pago siguiente a la mitad del semestre"],
        },
        {
            name: "Plan pago unico",
            description: "Best for professionals",
            price: 500,
            features: ["Unico pago", "Acceso completo al sistema", "Pago unico"],
            popular: true,
        }
    ];

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto p-4">
            {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
            ))}
        </div>
    );
}
