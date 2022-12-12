import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const WalletItem = ({ code, amount, currencyData }) => {
  return (
    <tr className="bg-neutral-800">
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{code}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{currencyData.filter((x) => x.Code == code)[0].SellPrice.toFixed(2)}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{amount}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white">{(currencyData.filter((x) => x.Code == code)[0].SellPrice.toFixed(2) * amount).toFixed(2)}</td>
      <td className="border border-emerald-700 text-left p-1 font-light text-white"></td>
    </tr>
  );
};

const WalletItems = ({ walletData, currencyData }) => (
  <>
    <WalletItem code="USD" amount={walletData.usd_amount} currencyData={currencyData} />
    <WalletItem code="EUR" amount={walletData.eur_amount} currencyData={currencyData} />
    <WalletItem code="CHF" amount={walletData.chf_amount} currencyData={currencyData} />
    <WalletItem code="RUB" amount={walletData.rub_amount} currencyData={currencyData} />
    <WalletItem code="CZK" amount={walletData.czk_amount} currencyData={currencyData} />
    <WalletItem code="GBP" amount={walletData.gbp_amount} currencyData={currencyData} />
  </>
);

const UserWallet = () => {
  const { user } = useAuth0();

  const [walletData, setWalletData] = useState();

  const currencyData = useSelector((state) => state.exchange.exchangeItems);
  console.log(currencyData);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_USER_API}/wallets/${user.sub.split('|')[1]}`)
      .then((dt) => dt.json())
      .then((data) => {
        setWalletData(data);
        console.log(data);
      });
  }, []);
  if (!walletData) return;

  return (
    <div>
      <table className="table-auto w-full border-b border-emerald-700 p-2">
        <thead className="border-b border-b-emerald-700">
          <tr>
            <th className="border border-emerald-700 text-left w-56 p-2">Currency</th>
            <th className="border border-emerald-700 text-left w-36 p-2">Unit price</th>
            <th className="border border-emerald-700 text-left w-36 p-2">Amount</th>
            <th className="border border-emerald-700 text-left w-36 p-2">Value</th>
            <th className="border border-emerald-700 text-left w-36 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <WalletItems walletData={walletData} currencyData={currencyData} />
        </tbody>
      </table>
      <p className="p-2 text-2xl">Available PLN: {walletData.pln_amount}</p>
    </div>
  );
};

export default UserWallet;
