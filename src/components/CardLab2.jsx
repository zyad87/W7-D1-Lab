import React from 'react';

function CardLab2(props) {
  return (
    <div className="card card-compact bg-gray-900 w-96 max-sm:w-80 shadow-xl flex flex-col justify-center items-center ">
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
           Details
          </button>
          <button
            onClick={props.onClickEdit}
            className="btn bg-cyan-600 text-white"
          >
            Edit
          </button>
          <button
            onClick={props.onClickDel}
            className="btn bg-red-800 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardLab2;
