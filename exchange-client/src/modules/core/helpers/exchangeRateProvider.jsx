import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeData } from '../state/exchangeSlice';
const ExchangeRateProvider = ({ children }) => {
  const dispatch = useDispatch();
  let socket = undefined;

  useEffect(() => {
    socket = new WebSocket('ws://webtask.future-processing.com:8068/ws/currencies');

    socket.onmessage = (event) => {
      const dt = JSON.parse(event.data);
      dispatch(setExchangeData(dt));
    };
  }, []);

  return children;
};

export default ExchangeRateProvider;
