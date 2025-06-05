import React from 'react';

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export function PricingCard({ plan, price, features, isFeatured }: PricingCardProps) {
  return (
    <div
      tabIndex={0}
      className={\`flex flex-col items-center p-6 rounded-lg shadow-md transition focus:outline-none focus:ring-4 sm:w-full sm:max-w-sm
      \${isFeatured ? ' bg-slate-800 text-white scale-105 ring-4 ring-slate-400' : ' bg-white text-gray-900'}\`}
    >
      <h3 className="text-xl font-semibold mb-2">{plan}</h3>
      <p className="text-4xl font-bold mb-4">${price}</p>
      <ul className="mb-6 space-y-1 text-sm text-center">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        className={\`px-4 py-2 text-sm font-semibold rounded focus:outline-none focus:ring-2
          \${isFeatured ? 'bg-white text-slate-800' : 'bg-slate-800 text-white'}\`}
      >
        SUBSCRIBE
      </button>
    </div>
  );
}
