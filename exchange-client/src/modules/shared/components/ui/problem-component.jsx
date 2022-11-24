import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProblemComponent = ({ text, title, showBack = true }) => {
  return (
    <div className="w-full flex flex-row">
      <div className="mx-auto mt-20 text-center p-2 bg-neutral-900 rounded-md border border-pink-900">
        <FontAwesomeIcon className="text-9xl text-pink-900" icon={faSadCry} />
        <p className="text-pink-900 text-3xl font-semibold">{title}</p>
        <p className="text-neutral-300">{text}</p>
        <Link to="/" className="mt-2 text-sm text-neutral-400 flex flex-row gap-1 items-center justify-center">
          <p className=" underline underline-offset-1">Go to Home page!</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default ProblemComponent;
