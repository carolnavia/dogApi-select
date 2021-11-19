import React from "react";
import { Loading } from "./Loading";

export const Card = ({ dog, updateDog, loading }) => {
  if (loading) return <Loading />;

  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image} alt="dog" />
      <p>{dog.breed.name}</p>
    </div>
  );
};
