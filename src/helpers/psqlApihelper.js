// Need some sort of useContext here for server name

const apiLURL = 'http://localhost:5000';

export async function getData() {
   return (fetch(`${apiLURL}/users`)
  .then((response) => response.json())
  .then(data => {
    return (data);
  })
  .catch((e) => {
      console.log('error',e);
  }));
}