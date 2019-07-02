## BASIC TEST REST API
Exercise: Catch them all

Objective:
Create an API endpoint to download pokemon images.

Notes:
   •    In order to search the pokemon you need to use the next api -> https://pokeapi.co/

Business requirements:

   •    Demonstrate that the API endpoint exists /api/v1/images/pokemons?name={name}&imageType={imageType}

   •    Demonstrate that the imageType argument only accepts (“back_default”, “front_default”, “front_shiny”) otherwise a Bad Request should be returned.

   •    Demonstrate that if the image does not exist, then the endpoint is fetching the image based on the imageType argument from the Pokemon API and stored on the hard disk

   •    Demonstrate that if the image already exists on the disk, then the endpoint is fetching the image based on the imageType from the hard disk

   •    Demonstrate that the image is being saved on the disk using the next format “${pokemonName}_{imageType}.png”

   •    Demonstrate that if the pokemonName argument is not present you should return a bad request response status

   •    Demonstrate that if the pokemon is not found using Pokemon API you should return a Not found response status

Bonus

   •    Demonstrate that the API /api/v1/images/pokemon/:pokemon/status exists and returns “cache” or “unknown” if we have the image stored o

## Overview
  - Basic Custom REST API structure for consume a Custom Pokemon. I miss understood the requirements.
  - I though it was "BUILD YOUR REST API."

## Requirements
  - nodejs
  - express
  - body parser

## Executions
  - npm install

## Instructions
  - Execute commands in the console.
  - node index.js
  - http://localhost:3000
  - For see the resource go to link:
    http://localhost:3000/pokemons/1