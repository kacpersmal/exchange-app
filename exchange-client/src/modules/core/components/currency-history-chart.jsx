import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CurrencyHistoryChart = () => {
  const [latestData, setLatestData] = useState();
  const latestUpdate = useSelector((state) => state.exchange.exchangeLastUpdate);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HISTORY_API}/fetch`)
      .then((dt) => dt.json())
      .then((data) => {
        setLatestData(data.items.result);
      });
  }, [latestUpdate]);

  return (
    <div className="w-full h-full">
      {latestData && (
        <div className="mt-2 p-4">
          <LineChart width={700} height={300}>
            <CartesianGrid strokeDasharray="3 3" />

            <YAxis tick={true} type="number" allowDataOverflow={true} dataKey="average_price" domain={[(dataMin) => 0, (dataMax) => Math.ceil(dataMax * 2)]} />
            <Tooltip />
            {latestData.map((s, index) => {
              return (
                <Line
                  type="monotone"
                  dot={false}
                  strokeWidth={3}
                  stroke="#BE185D"
                  connectNulls={true}
                  animateNewValues={true}
                  dataKey="average_price"
                  data={s.items}
                  name={s.code}
                  key={index}
                />
              );
            })}
          </LineChart>
        </div>
      )}
    </div>
  );
};

export default CurrencyHistoryChart;
