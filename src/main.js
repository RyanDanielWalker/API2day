import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AsteroidInfo from './js/asteroid.js';
import EpicImg from './js/epic.js';

function getElements(response, date) {
  let userDate = Object.keys(response["near_earth_objects"]);
  let dist = parseInt(response.near_earth_objects[userDate][0].close_approach_data[0].miss_distance.miles).toFixed(1);
  if (response) {
    $(".show-count").html(`<p>There were ${response.element_count} asteroids near Earth on your birthday!!! </p>`);
    $(".show-dist").html(`<p>The closest asteroid was ${dist} miles away from earth on ${date}!!!</p>`);
  }
}

function getPicture(response) {
  if (response[0]) {
    let add = response[0].url;
    $(".show-img").html(`<img class="pic" src="${add}"/>`);

  } else {
    $(".show-img").empty();
    $(".show-img").text("Woops, there's no photo from that date!");
  }
}



$(document).ready(function () {
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  let today = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + date).slice(-2);
  console.log(today);
  $("button").before(`<input id="bday" type="date" value="${today}" max="${today}">`);
  $("#form").submit(function (event) {
    event.preventDefault();
    let date = $("#bday").val();
    $("#bday").val("");
    AsteroidInfo.getInfo(date)
      .then(function (response) {
        getElements(response, date);
      });
    EpicImg.getImg(date)
      .then(function (response) {
        getPicture(response);
      });
  });
});

