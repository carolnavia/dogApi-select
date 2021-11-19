const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url);

  //console.log(res);
  if (!res.ok) {
    // error para desarrollador
    throw Error("Error");
  }

  const breeds = await res.json();

  return breeds;
};

export default getBreeds;
