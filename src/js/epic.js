export default class EpicImg {
  static getImg(date) {
    const apiKey = process.env.API_KEY;
    return fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json()
      })
      .catch(function (error) {
        return error;
      })
  }
}