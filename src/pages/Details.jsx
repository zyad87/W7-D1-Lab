import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Details() {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  document.title = 'Details';
  const navigate = useNavigate();

  useEffect(() => {
    fetchData('https://67023d30bd7c8c1ccd3e4758.mockapi.io/img');
  }, []);

  function fetchData(url) {
    axios
      .get(url)
      .then(function (response) {
        // handle success

        const dataFound = response.data.find((e) => e.id === id);

        console.log(dataFound);
        setdata(dataFound);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row bg-base-300 rounded-lg p-5">
          <img src={data.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex flex-col justify-center gap-5 ">
            <h1 className="text-5xl font-bold">
              Name: <span className="text-blue-400">{data.name}</span>
            </h1>

            <h1 className="text-5xl font-bold">
              gender: <span className="text-blue-400">{data.gender}</span>
            </h1>
            <button
              onClick={() => {
                navigate('../Lab2');
              }}
              className="btn btn-neutral btn-lg w-[50%]"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
