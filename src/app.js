/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // bottones header
  let btnBlonoppies = document.querySelector("#btn-blonoppies");
  let btnhornililoops = document.querySelector("#btn-hornililoops");
  let sect2 = document.querySelector("#sect2");
  // Blonnopies
  let firstselection = "";
  btnBlonoppies.addEventListener("click", event => {
    console.log("click detected in Blonoppies");
    sect2.classList.remove("d-none");
    firstselection = "Blonoppies";
    // Background Image
    document.body.style.backgroundImage =
      "url('src/assets/img/Background.jpg')";
  });
  btnhornililoops.addEventListener("click", event => {
    sect2.classList.remove("d-none");
    firstselection = "Hornililoops";
  });
  let btnher = document.querySelector("#btn-her");
  let btnhim = document.querySelector("#btn-him");
  let btnthem = document.querySelector("#btn-them");

  let secondselection = "";
  btnher.addEventListener("click", event => {
    secondselection = "Her";
    generateName(
      firstselection,
      secondselection,
      resultHeader,
      herName,
      connectors,
      lastNamesBlonoppies,
      himName,
      themName,
      lastNamesHornililoops
    );
  });
  btnhim.addEventListener("click", event => {
    secondselection = "Him";
    generateName(
      firstselection,
      secondselection,
      resultHeader,
      herName,
      connectors,
      lastNamesBlonoppies,
      himName,
      themName,
      lastNamesHornililoops
    );
  });
  btnthem.addEventListener("click", event => {
    secondselection = "Them";
    generateName(
      firstselection,
      secondselection,
      resultHeader,
      herName,
      connectors,
      lastNamesBlonoppies,
      himName,
      themName,
      lastNamesHornililoops
    );
  });
  let resultHeader = document.querySelector("#result");
  let herName = [
    "Luna",
    "Amber",
    "Iris",
    "Aurora",
    "Serena",
    "Nova",
    "Selene",
    "Stella",
    "Vera",
    "Zara",
    "Maya",
    "Isla",
    "Chloe",
    "Daphne",
    "Lila",
    "Nina",
    "Ophelia",
    "Elara",
    "Vivian",
    "Freya",
    "Marina",
    "Celia",
    "Lydia",
    "Elena",
    "Sophia"
  ];
  let himName = [
    "Leo",
    "Asher",
    "Eli",
    "Felix",
    "Atlas",
    "Julian",
    "Kai",
    "Orion",
    "Ethan",
    "Ronan",
    "Silas",
    "Oscar",
    "Hugo",
    "Milo",
    "Caleb",
    "Sebastian",
    "Theodore",
    "Zane",
    "Damian",
    "Adrian",
    "Raphael",
    "Lucian",
    "Gabriel",
    "Ezekiel",
    "Maxwell"
  ];
  let themName = [
    "Aria",
    "Kai",
    "Jordan",
    "Skyler",
    "Rowan",
    "River",
    "Morgan",
    "Sage",
    "Quinn",
    "Phoenix",
    "Riley",
    "Avery",
    "Charlie",
    "Emerson",
    "Harper",
    "Finley",
    "Dakota",
    "Taylor",
    "Cameron",
    "Lennon",
    "Parker",
    "Hayden",
    "Reese",
    "Remy",
    "Indigo"
  ];
  let connectors = [
    "Van der",
    "Del",
    "De",
    "Von",
    "O'",
    "Di",
    "Mc",
    "Mac",
    "La",
    "Le",
    "St.",
    "Fitz",
    "Al-",
    "Du",
    "Dos",
    "El-",
    "D'",
    "Da",
    "Des",
    "San",
    "Ben",
    "Ibn",
    "Ap",
    "L'",
    "A'"
  ];

  let lastNamesBlonoppies = [
    "Unicorn",
    "Ice Cream",
    "Rainbow",
    "Shooting Stars",
    "Cotton Candy",
    "Cherry Blossoms",
    "Moonlight",
    "Fireflies",
    "Crystal Snowflakes",
    "Starry Night",
    "Fairy Wings",
    "Sunsets",
    "Lullabies",
    "Candy Canes",
    "Butterflies",
    "Rose Petals",
    "Cotton Clouds",
    "Aurora Borealis",
    "Dewdrops",
    "Teddy Bears",
    "Baby’s Laughter",
    "Honeycomb",
    "Seashells",
    "Fireworks",
    "Dreamcatchers"
  ];

  let lastNamesHornililoops = [
    "Ruler",
    "Caliper",
    "Protractor",
    "Compass",
    "Micrometer",
    "Thermometer",
    "Barometer",
    "Telescope",
    "Scale",
    "Stopwatch",
    "Calculator",
    "Spreadsheet",
    "Algorithm",
    "Data Logger",
    "Graphing Paper",
    "Survey Tool",
    "Measuring Tape",
    "Spectrometer",
    "Oscilloscope",
    "Statistical Software",
    "Data Visualization Tool",
    "Goniometer",
    "Flow Meter",
    "Measuring Cylinder",
    "Digital Multimeter"
  ];

  function generateName(
    firstselection,
    secondselection,
    resultHeader,
    herName,
    connectors,
    lastNamesBlonoppies,
    himName,
    themName,
    lastNamesHornililoops
  ) {
    if (firstselection === "Blonoppies") {
      console.log("blonnopies");
      if (secondselection === "Her") {
        resultHeader.innerHTML =
          herName[Math.floor(Math.random() * herName.length)] +
          " " +
          connectors[Math.floor(Math.random() * connectors.length)] +
          " " +
          lastNamesBlonoppies[
            Math.floor(Math.random() * lastNamesBlonoppies.length)
          ];
      }
      if (secondselection === "Him") {
        resultHeader.innerHTML =
          himName[Math.floor(Math.random() * himName.length)] +
          " " +
          connectors[Math.floor(Math.random() * connectors.length)] +
          " " +
          lastNamesBlonoppies[
            Math.floor(Math.random() * lastNamesBlonoppies.length)
          ];
      }
      if (secondselection === "Them") {
        resultHeader.innerHTML =
          themName[Math.floor(Math.random() * themName.length)] +
          " " +
          connectors[Math.floor(Math.random() * connectors.length)] +
          " " +
          lastNamesBlonoppies[
            Math.floor(Math.random() * lastNamesBlonoppies.length)
          ];
      }
    }
    if (firstselection === "Hornililoops") {
      if (secondselection === "Her") {
        resultHeader.innerHTML =
          herName[Math.floor(Math.random() * herName.length)] +
          " " +
          connectors[Math.floor(Math.random() * connectors.length)] +
          " " +
          lastNamesHornililoops[
            Math.floor(Math.random() * lastNamesHornililoops.length)
          ];
      }
      if (secondselection === "Him") {
        resultHeader.innerHTML =
          himName[Math.floor(Math.random() * himName.length)] +
          " " +
          connectors[Math.floor(Math.random() * connectors.length)] +
          " " +
          lastNamesHornililoops[
            Math.floor(Math.random() * lastNamesHornililoops.length)
          ];
      }
      if (secondselection === "Them") {
        resultHeader.innerHTML =
          themName[Math.floor(Math.random() * themName.length)] +
          " " +
          connectors[Math.floor(Math.random() * connectors.length)] +
          " " +
          lastNamesHornililoops[
            Math.floor(Math.random() * lastNamesHornililoops.length)
          ];
      }
    }
  }
};
