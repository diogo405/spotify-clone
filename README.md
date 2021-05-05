# Spotify Clone

A Spotify Clone using React, Typescript, and Redux. Check it live [here](https://spotifyclooone.netlify.app/).

## 🎛 How it works
The application has two pages: Home and Album. When Home is loaded it pulls data from the fake API (see below). Album page follows the same pattern except it gets  the album title and thumbnail from Redux store.

To run the ol `npm i`, `npm start` 

## 📽 Fake API
Fake API (API.tsx) is a Typescript file with a few functions that return json content (they are all hard-coded in the json folder) wrapped in a Promise. Each method has a setTimeout with a Math.random to simulate a http request - and show the skeletons ☠️

## 📱 Resposiveness
From 250px to Inifity 🚀
