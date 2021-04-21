import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AsteroidInfo from './js/asteroid.js';

function getElements(response) {
  let userDate = Object.keys(response["near_earth_objects"]);
  let yes = response.near_earth_objects[userDate][0].close_approach_data[0].miss_distance.miles
  if (response) {
    $(".show-count").html(`<p>There were ${response.element_count} asteroids near Earth on your birthday. </p>`);
    $(".show-dist").html(`<p>The closest asteroid was ${yes} miles away from earth</p>`);
  }
}


$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let date = $("#bday").val();
    $("#bday").val("");
    AsteroidInfo.getInfo(date)
      .then(function (response) {
        getElements(response, date);
      });
  });
});