import React from 'react';
import { CurrencyMarket } from '../../../core';

const Card = ({ children, title }) => {
  return (
    <div className="bg-neutral-900 border border-emerald-700  rounded-md  text-white ">
      <p className="w-full border-b border-b-emerald-700 p-2 text-left text-2xl">{title}</p>
      <div className="p-2 ">{children}</div>
    </div>
  );
};

const ExchangePage = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-row mx-auto my-auto items-center justify-center gap-2 mt-10">
        <Card title="Currencies">
          <CurrencyMarket />
        </Card>
        <Card title="My wallet">eee 2 </Card>
      </div>
    </div>
  );
};

export default ExchangePage;
