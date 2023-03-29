import { faCircleCheck as selectRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck as selectSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SinglePlayer = ({ singleData, handleSelect }) => {
  const { id, picture, name, about, age, job, price } = singleData;
  return (
    <div className="card card-compact bg-base-100 border rounded-md">
      <div className="flex justify-center align-middle p-2">
        <img className="h-52" src={picture} alt="" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Age: {age}</p>
        <p>{about}</p>
      </div>
      <div className="flex justify-around mb-4">
        <p>Job: {job}</p>
        <p>Price: ${price}</p>
      </div>
      <div className="card-actions">
        <button onClick={() => handleSelect(id)} type="button" className="w-full btn btn-xs">
          <span className="mr-2">Select</span>
          {singleData.selected ? <FontAwesomeIcon icon={selectSolid} /> : <FontAwesomeIcon icon={selectRegular} />}
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
