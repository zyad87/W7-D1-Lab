import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditCharacter() {
  const [name, setname] = useState('');
  const [gender, setgender] = useState('');
  const [urlImage, seturlImage] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://67023d30bd7c8c1ccd3e4758.mockapi.io/img/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
        setname(response.data.name);
        setgender(response.data.gender);
        seturlImage(response.data.image);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  function editData() {
    let valid = true;
    if (!name) {
      valid = false;
    }
    if (!gender) {
      valid = false;
    }
    if (!urlImage) {
      valid = false;
    }
    if (valid) {
      axios
        .put(`https://67023d30bd7c8c1ccd3e4758.mockapi.io/img/${id}`, {
          name: name,
          gender: gender,
          image: urlImage,
        })

        .then(() => {
          fetchData();
          navigate('../Lab2');
        });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="min-w-full max-h-[300px]">
          <img
            src={
              urlImage === '' ? 'https://placehold.co/600x400/png' : urlImage
            }
            alt="image"
          />
        </figure>
        <div className="card-body ">
          <label className="text-center"> Character details</label>
          {/* {} */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
              type="text"
              className="grow"
              placeholder="Name"
            />
          </label>
          {/* {} */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              value={gender}
              onChange={(e) => {
                setgender(e.target.value);
              }}
              type="text"
              className="grow"
              placeholder="Gender"
            />
          </label>

          {/* {} */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              value={urlImage}
              onChange={(e) => {
                seturlImage(e.target.value);
              }}
              type="text"
              className="grow"
              placeholder="URL"
            />
          </label>

          <div className="card-actions justify-end gap-3 mt-10">
            <button
              className="btn bg-green-700 text-white"
              onClick={() => {
                editData();
              }}
            >
              Edit Character
            </button>
            <button
              className="btn bg-gray-700 text-white"
              onClick={() => {
                navigate('../lab2');
              }}
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCharacter;
