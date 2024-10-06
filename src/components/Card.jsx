import React from 'react';

function Card(props) {
  return (
    <div className="card card-compact bg-gray-700 w-96 shadow-xl flex flex-col justify-center items-center py-4">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
      </div>
    </div>
  );
}

export default Card;
