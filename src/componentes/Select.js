import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];

export const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setErrors] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => {
        setBreeds(newBreeds);
      })
      .catch((error) => {
        console.log(error);
        setErrors("Error al cargar las razas");
      });
  };

  return (
    <>
      <select onChange={() => updateDog()}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      {error && <Error error={error} />}
    </>
  );
};
