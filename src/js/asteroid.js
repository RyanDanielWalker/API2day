export default class AsteroidInfo {
  static getInfo(date) {
    const apiKey = process.env.API_KEY
    return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      })
  }
}