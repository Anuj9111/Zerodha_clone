import React from "react";

const Summary = () => {
  return (
    <div className="p-6 bg-white">
      {/* User Greeting */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Hi, User!</h2>
        <hr className="mt-3 border-gray-300" />
      </div>

      {/* Equity Section */}
      <div className="mb-8">
        <p className="mb-5 text-lg font-semibold text-gray-700">Equity</p>

        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* Left */}
          <div className="md:w-1/3">
            <h3 className="text-4xl font-bold text-gray-800">3.74k</h3>
            <p className="mt-2 text-gray-500">Margin available</p>
          </div>

          {/* Divider */}
          <div className="hidden h-20 border-l border-gray-300 md:block"></div>

          {/* Right */}
          <div className="space-y-3 text-gray-600">
            <p className="flex justify-between gap-10">
              <span>Margins used</span>
              <span className="font-semibold">0</span>
            </p>

            <p className="flex justify-between gap-10">
              <span>Opening balance</span>
              <span className="font-semibold">3.74k</span>
            </p>
          </div>
        </div>

        <hr className="mt-8 border-gray-300" />
      </div>

      {/* Holdings Section */}
      <div>
        <p className="mb-5 text-lg font-semibold text-gray-700">
          Holdings (13)
        </p>

        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* Left */}
          <div className="md:w-1/3">
            <h3 className="text-4xl font-bold text-green-600">
              1.55k
              <span className="ml-2 text-lg font-medium text-green-500">
                +5.20%
              </span>
            </h3>

            <p className="mt-2 text-gray-500">P&amp;L</p>
          </div>

          {/* Divider */}
          <div className="hidden h-20 border-l border-gray-300 md:block"></div>

          {/* Right */}
          <div className="space-y-3 text-gray-600">
            <p className="flex justify-between gap-10">
              <span>Current Value</span>
              <span className="font-semibold">31.43k</span>
            </p>

            <p className="flex justify-between gap-10">
              <span>Investment</span>
              <span className="font-semibold">29.88k</span>
            </p>
          </div>
        </div>

        <hr className="mt-8 border-gray-300" />
      </div>
    </div>
  );
};

export default Summary;