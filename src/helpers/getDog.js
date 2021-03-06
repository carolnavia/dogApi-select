const getDog = async (breedId) => {
  // let url;
  // if (!breedId || breedId === 0) {
  //   url = "https://api.thedogapi.com/v1/images/search";
  // } else {
  //   url = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;
  // }

  const url =
    !breedId || breedId === 0
      ? "https://api.thedogapi.com/v1/images/search"
      : `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;

  const res = await fetch(url);

  if (!res.ok) {
    // error para desarrollador

    const { url, status, statusText } = res;

    throw Error(`Error: in fetch${url}, ${status}, ${statusText} `);
  }
  const [data] = await res.json();

  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
    };
  }

  const dog = {
    image,

    breed,
  };

  return dog;
};

export default getDog;
