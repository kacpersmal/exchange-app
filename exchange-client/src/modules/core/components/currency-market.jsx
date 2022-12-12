import React from 'react';
import { useSelector } from 'react-redux';

const MarketActions = () => {
  return (
    <div className="flex flex-row gap-2 justify-evenly">
      <button className="border border-emerald-700 text-emerald-700 hover:animate-pulse p-2 rounded-md">Buy</button>
    </div>
  );
};

const CurrencyItem = ({ data }) => {
  return (
    <tr className="bg-neutral-800">
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{data.Code}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{data.Unit}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{data.PurchasePrice.toFixed(2)}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white">
        <MarketActions />
      </td>
    </tr>
  );
};

const CurrencyMarket = () => {
  const latestData = useSelector((state) => state.exchange.exchangeItems);
  const latestUpdate = useSelector((state) => state.exchange.exchangeLastUpdate);

  return (
    <div>
      <p className="text-neutral-300">Last update: {new Date(latestUpdate).toLocaleString()}</p>
      <table className="table-auto w-full">
        <thead className="border-b border-b-emerald-700">
          <tr>
            <th className="border border-emerald-700 text-left w-56 p-2">Currency</th>
            <th className="border border-emerald-700 text-left w-36 p-2">Unit</th>
            <th className="border border-emerald-700 text-left w-36 p-2">Value</th>
            <th className="border border-emerald-700 text-left w-24 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {latestData?.map((item, index) => (
            <CurrencyItem key={item.Code} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyMarket;
