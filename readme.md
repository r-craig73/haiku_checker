#haiku_checker

## An app to check if poems are haikus

## Epicodus two day project: started 03/14-15/2018

## GitHub repository: https://github.com/r-craig73/haiku_checker

#### By Ron Craig (https://github.com/r-craig73) & Hamza Naeem (https://github.com/hamzilitary)

## Description
#### Epicodus lesson - Practicing Test Driven Development using Jasmine to write the test specs and Karma to run the specs.  The specs checks whether a poem is a haiku.

## List of specs passing
1. Make sure a haiku has 17 syllables (failed spec).
2. Count number of words in the haiku.
3. Syllable detection by 2 or more consonants next to each other.
4. Be able to count vowels for each word.
5. Be able to count vowels and consonants pairs.
6. Be able to count double vowels as one syllable.
7. Be able to count the number of times a word ends with 'e'.
8. Be able to count the number of times a word ends with 'ia'.

### Possible sources for haiku and syllable detection
#### http://jzimba.blogspot.com/2017/07/an-algorithm-for-counting-syllables.html (interesting rules)
#### The consonant surrounded by vowels https://www.howmanysyllables.com/divideintosyllables

## Appliction Setup
* Clone the repository
* In the home directory, install webpacks and npm `$ npm install`
* In the home directory, build the code by running `$ npm run build`
* Open `haiku_checker/dist/index.html` in a Chrome browser to run the application

## Testing setup
* Clone the repository
* In the home directory, run `$ npm test`
* Open a Chrome browser matching the URL to view the passing/fail specs

## Technologies Used
* HTML
* JavaScript
* Webpacks and npm
* Jasmine
* Karma

## MIT License

#### Copyright (c) 2018 _Ron Craig & Hamza Naeem_
