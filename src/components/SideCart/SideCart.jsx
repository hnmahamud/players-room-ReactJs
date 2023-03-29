import React from 'react';

const SideCart = ({ cartData, handleClearAll }) => {
  let totalCost = 0;
  for (const data of cartData) {
    totalCost += data.price;
  }
  return (
    <div className="p-4 md:sticky md:top-0">
      <h1 className="text-2xl font-bold text-center mb-8">Your Team</h1>
      <p className="mb-4">Total Cost: ${totalCost}</p>
      {cartData.map((data, index) => (
        <div key={index} className="flex align-middle gap-2 mb-2">
          <p>{index + 1}.</p>
          <img className="w-[32px] h-[32px] rounded-full" src={data.picture} alt="" />
          <p>{data.name} ({data.job}):</p>
          <p>${data.price}</p>
        </div>
      ))}
      <div className="mt-12">
        <button onClick={() => handleClearAll()} type="button" className="w-full btn btn-xs">Clear All</button>
      </div>
    </div>
  );
};

export default SideCart;
