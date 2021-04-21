import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getElements(response) {
  if (response.main) {
    $("#show-count").text(`<p>There were ${response.element_count} asteroids near Earth on your birthday. </p>`);
    // $("#show-dist").text(`<p>The object was ${response.near_earth_objects.${date}[0].close_approach_data[0].miss_distance.miles} miles away.</p>`);
  }
}



$(document).ready(function () {