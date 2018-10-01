import { Solution } from './haiku-checker';
import './../src/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    let haiku = $('#haiku').val();
    let solution = new Solution(haiku);
    $('#haikus').append('<li>******</li>');
    $('#haikus').append('<li>Haikup text: ' + solution.haiku + '</li>');
    $('#haikus').append('<li>Count vowels: ' + solution.countVowels() + '</li>');
    $('#haikus').append('<li>Count vowel-consonant pairs : ' + solution.countPair() + '</li>');
    $('#haikus').append('<li>Count double vowels : ' + solution.countDoubleVowel() + '</li>');
    $('#haikus').append('<li>Count words ending with e : ' + solution.countEndWithE() + '</li>');
    $('#haikus').append('<li>Count words ending with ia : ' + solution.countDoubleVowel() + '</li>');
    $('#haikus').append('<li>Count 2 or more consonants next to each other: ' + solution.countNextConsonants() + '</li>');
  });
});
