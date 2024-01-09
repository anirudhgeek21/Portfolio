import React from 'react';
import Navbar from './Navbar';

const PricingCard = ({ title, description, features, price }) => (
  
  <div className="bg-white p-5 mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
    <div className="p-8 sm:p-10 lg:flex-auto">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
      <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
      <div className="mt-10 flex items-center gap-x-4">
        <h4 className="flex-none text-sm font-semibold leading-6 text-purple-800">Whats included</h4>
        <div className="h-px flex-auto bg-gray-100"></div>
      </div>
      <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-purple-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs px-8">
          <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
          </p>
          
          <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
        </div>
      </div>
    </div>
  </div>
);

const FreelancingServices = () => (
  <div className="bg-[#E9F3FF] cursor-default">
    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl m-auto w-6/12 text-center mt-12">Freelancing services</h2>
    <div className="bg-[#E9F3FF] py-24 sm:py-20 -z-50">
      {/* Add PricingCard components here */}
    </div>
  </div>
);

export default FreelancingServices;
