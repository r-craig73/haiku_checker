import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Solution } from './haiku-checker';
import './styles.css';

$(document).ready(function() {
  $('#haikus').hide();
  $('#new-haiku-button').hide();
  $('#haikus-text').hide();
  $('#haiku-syllables').hide();
  $('#haiku-details').hide();

  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    $('#haikus').show();
    $('#new-haiku-button').show();
    $('#haikus-text').show();
    $('#haiku-syllables').show();
    $('#haiku-details').show();
    let haiku = $('#haiku').val();
    let solution = new Solution(haiku.replace(/[^a-zA-Z ]/g, "").toLowerCase());
    $('#haikus-text').append('<b>' + solution.haiku + '</b>');
    $('#haikus-syllables').append('<b>' + solution.aHaiku() + '<b>');
    $('#haikus-details').append('<li>Count vowels: ' + solution.countVowels() + '</li>');
    $('#haikus-details').append('<li>Count words ending with [consonant]le: ' + solution.countEndWithLe() + '</li>');
    $('#haikus-details').append('<li>Count double vowels, diphtongs or triphthongs: ' + solution.countDoubleVowel() + '</li>');
    $('#haikus-details').append('<li>Count words ending with a silent e: ' + solution.countEndWithE() + '</li>');
    $('#haikus-details').append('<li>Count words ending with ia: ' + solution.countEndWithIa() + '</li>');
    $('#haikus-details').append('<br><h5>Sum of five details: ' + solution.haikuNumber() + '</h5>');
  });

  $('#new-haiku-button').click(function() {
    event.preventDefault();
    location.reload();
  });
});
