const useFetchData = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

export default useFetchData;
