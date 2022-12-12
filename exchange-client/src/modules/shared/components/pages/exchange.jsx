import React from 'react';
import { CurrencyHistoryChart, CurrencyMarket } from '../../../core';
import { UserWallet } from '../../../user';

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
          <CurrencyHistoryChart />
        </Card>
        <Card title="My wallet">
          <UserWallet />
        </Card>
      </div>
    </div>
  );
};

export default ExchangePage;
