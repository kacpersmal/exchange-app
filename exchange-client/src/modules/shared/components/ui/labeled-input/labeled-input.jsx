import React from 'react';
const LabeledInput = ({ onChange, label, type, placeholder }) => {
  return (
    <>
      {label && <p className="text-sm text-gray-500">{label}</p>}
      <input className="p-2 rounded-md text-neutral-200 bg-neutral-800 border border-emerald-500" placeholder={placeholder} type={type ?? 'text'} onChange={onChange}></input>
    </>
  );
};

export default LabeledInput;
