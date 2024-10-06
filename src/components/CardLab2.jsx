import React from 'react';

function CardLab2(props) {
  return (
    <div className="card card-compact bg-base-100 w-96 max-sm:w-80 shadow-xl  flex flex-col justify-center items-center ">
      <figure className="min-w-full max-h-[300px]">
        <img className="w-full" src={props.img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>

        <div className="card-actions ">
          <button
            onClick={props.onClick}
            className="btn btn-neutral text-white"
          >
            Show Details
          </button>
          <button
            onClick={props.onClickDel}
            className="btn bg-red-900 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLab2;
