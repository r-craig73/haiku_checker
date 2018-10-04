import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Solution } from './haiku-checker';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    let haiku = $('#haiku').val();
    let solution = new Solution(haiku.replace(/[^a-zA-Z ]/g, "").toLowerCase());
    $('#haikus').append('<li>************ Haiku Results ************</li>');
    $('#haikus').append('<li>Haiku text: ' + solution.haiku + '</li>');
    $('#haikus').append('<li>Count vowels: ' + solution.countVowels() + '</li>');
    $('#haikus').append('<li>Count words ending with [consonant]le: ' + solution.countEndWithLe() + '</li>');
    $('#haikus').append('<li>Count double vowels, diphtongs, or triphthongs: ' + solution.countDoubleVowel() + '</li>');
    $('#haikus').append('<li>Count words ending with a silent e: ' + solution.countEndWithE() + '</li>');
    $('#haikus').append('<li>Count words ending with ia: ' + solution.countEndWithIa() + '</li>');
    $('#haikus').append('<li>Count 2 consonants resulting in sound within a word: ' + solution.countConSound() + '</li>');
    $('#haikus').append('<li>Count 2 or more consonants next to each other: ' + solution.countNextConsonants() + '</li>');
    $('#haikus').append('<li>************ Other Results ************</li>');
    $('#haikus').append('<li>Count vowel-consonant pairs: ' + solution.countPair() + '</li>');
    $('#haikus').append('<li>************ Seventeen (17) syllables? ************: ' + solution.haikuNumber() + '</li>');
  });
});
