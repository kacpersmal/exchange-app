import React from 'react';

const LandingPage = () => {
  return (
    <div className="gap-4 md:gap-0 w-full flex flex-col md:flex-row justify-center items-center mt-5 md:mt-12 text-white">
      <div className="m-2 md:m-0 max-w-md border border-emerald-700 md:border-r-0 rounded-md md:rounded-r-none md:rounded-l-md bg-neutral-900 p-4">
        <p className="text-3xl text-center">Exchange</p>
        <p className="text-gray-500 text-xs text-center mb-2">Here you can buy and sell currencies around the world! </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet odio felis, non ullamcorper eros suscipit vitae. Maecenas viverra in dui non tristique. Sed est
          tortor, sodales eget convallis non, gravida a ligula. Sed at enim in enim porttitor venenatis in imperdiet ex. Nam imperdiet tincidunt blandit. Maecenas eleifend aliquam
          mi. Nam non dolor commodo, tempus sapien id, sodales massa. Etiam commodo libero est, quis lobortis orci convallis nec. Suspendisse varius libero non massa tristique
          laoreet. Curabitur efficitur sed mauris eu volutpat.
        </p>
      </div>
      <div className="min-h-96  w-64 bg-neutral-900 rounded-md p-4 border border-emerald-700">
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet odio felis, non ullamcorper eros suscipit vitae. Maecenas viverra in dui non tristique. Sed est
          tortor, sodales eget convallis non, gravida a ligula. Sed at enim in enim porttitor venenatis in imperdiet ex. Nam imperdiet tincidunt blandit. Maecenas eleifend aliquam
          mi. Nam non dolor commodo, tempus sapien id, sodales massa. Etiam commodo libero est, quis lobortis orci convallis nec. Suspendisse varius libero non massa tristique
          laoreet. Curabitur efficitur sed mauris eu volutpat.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
