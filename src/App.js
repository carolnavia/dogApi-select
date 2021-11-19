import React, { useState, useEffect } from "react";
import { Card } from "./componentes/Card";
import { Select } from "./componentes/Select";
import getDog from "./helpers/getDog";

const initialDog = {
  image:
    "https://cdn.pixabay.com/photo/2017/08/17/15/34/pug-2651728_960_720.jpg",
  breed: {
    id: 1,
    name: "Pug",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId).then((newDog) => {
      setDog(newDog);
      setLoading(false);
    });
  };

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}

export default App;
