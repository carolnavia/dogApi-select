const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds";
  const res = await fetch(url);

  //console.log(res);
  if (!res.ok) {
    // error para desarrollador

    const { url, status, statusText } = res;

    throw Error(`Error: in fetch${url}, ${status}, ${statusText} `);
  }

  const breeds = await res.json();

  return breeds;
};

export default getBreeds;
