let elementAdded = 0;
const CONTAINER = document.querySelector(".container");
const INPUT = document.querySelector("#input");
const BUTTON = document.querySelector("button");
let listBoxValues = [];
let listBtnClose = [];
let listCharBinary = [];
let charBinary = [];
let boxTxtAllCaracter = [];
let boxTxtAllBinary = [];

BUTTON.addEventListener("click", addNewBoxValues);

function addNewBoxValues() {
  boxValuesCreate();
  toBianary();
  sectionBoxValues();
  btnCloseEvent();
  caracterBoxAndBinaryBox();
  charBinary = [];
  elementAdded++;
}

function boxValuesCreate() {
  const BOXVALUES = document.createElement("article");
  (BOXVALUES.id = `box-values-${elementAdded}`),
    BOXVALUES.classList.add(`box-values`);
  document.body.appendChild(BOXVALUES);
  listBoxValues[elementAdded] = document.getElementById(
    `box-values-${elementAdded}`
  );
}

function sectionBoxValues() {
  listBoxValues[elementAdded].innerHTML = `
    <div id="btn-close-${elementAdded}" class="btn-close">    
      <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
    </div>
    <section id="box-txt-all-caracter-${elementAdded}" class="box-txt-all-caracter box-txt-all-caracter">
      <div class="caracter">
        ${INPUT.value}
      </div>
    </section>
    <section id="box-txt-all-binary-${elementAdded}" class="box-txt-all-binary box-txt-all-binary">
      <div class="binary">
      ${charBinary}
      </div>
    </section>
  `;
  listBtnClose[elementAdded] = document.getElementById(
    `btn-close-${elementAdded}`
  );
}

function btnCloseEvent() {
  for (let i = 0; i < listBtnClose.length; i++) {
    listBtnClose[i].addEventListener("click", () => {
      listBoxValues[i].classList.add("none");
    });
  }
}

function caracterBoxAndBinaryBox() {
  boxTxtAllCaracter[elementAdded] = document.querySelector(
    `#box-txt-all-caracter-${elementAdded}`
  );
  boxTxtAllBinary[elementAdded] = document.querySelector(
    `#box-txt-all-binary-${elementAdded}`
  );

  console.log(boxTxtAllCaracter[elementAdded]);
  for (let i = 0; i < INPUT.value.length; i++) {
    boxTxtAllCaracter[elementAdded].innerHTML += `
    <div class="one-carater">
      <div class="nbr-caracter">
          ${i}
      </div>
          ${INPUT.value[i]}
      </div>
      `;
    boxTxtAllBinary[elementAdded].innerHTML += `
      <div class="one-binary">
      <div class="nbr-binary">
          ${i}
      </div>
          ${charBinary[i]}
      </div>
      `;
  }
}

function toBianary() {
  for (let i = 0; i < INPUT.value.length; i++) {
    switch (INPUT.value[i]) {
      case "a":
        charBinary[i] = " 01100001";
        break;
      case "b":
        charBinary[i] = " 01100010";
        break;
      case "c":
        charBinary[i] = " 01100011";
        break;
      case "d":
        charBinary[i] = " 01100100";
        break;
      case "e":
        charBinary[i] = " 01100101";
        break;
      case "f":
        charBinary[i] = " 01100110";
        break;
      case "g":
        charBinary[i] = " 01100111";
        break;
      case "h":
        charBinary[i] = " 01101000";
        break;
      case "i":
        charBinary[i] = " 01101001";
        break;
      case "j":
        charBinary[i] = " 01101010";
        break;
      case "k":
        charBinary[i] = " 01101011";
        break;
      case "l":
        charBinary[i] = " 01101100";
        break;
      case "m":
        charBinary[i] = " 01101101";
        break;
      case "n":
        charBinary[i] = " 01101110";
        break;
      case "o":
        charBinary[i] = " 01101111";
        break;
      case "p":
        charBinary[i] = " 01110000";
        break;
      case "q":
        charBinary[i] = " 01110001";
        break;
      case "r":
        charBinary[i] = " 01110010";
        break;
      case "s":
        charBinary[i] = " 01110011";
        break;
      case "t":
        charBinary[i] = " 01110100";
        break;
      case "u":
        charBinary[i] = " 01110101";
        break;
      case "v":
        charBinary[i] = " 01110110";
        break;
      case "w":
        charBinary[i] = " 01110111";
        break;
      case "x":
        charBinary[i] = " 01111000";
        break;
      case "y":
        charBinary[i] = " 01111001";
        break;
      case "z":
        charBinary[i] = " 01111010";
        break;
      case "A":
        charBinary[i] = " 01000001";
        break;
      case "B":
        charBinary[i] = " 01000010";
        break;
      case "C":
        charBinary[i] = " 01000011";
        break;
      case "D":
        charBinary[i] = " 01000100";
        break;
      case "E":
        charBinary[i] = " 01000101";
        break;
      case "F":
        charBinary[i] = " 01000110";
        break;
      case "G":
        charBinary[i] = " 01000111";
        break;
      case "H":
        charBinary[i] = " 01001000";
        break;
      case "I":
        charBinary[i] = " 01001001";
        break;
      case "J":
        charBinary[i] = " 01001010";
        break;
      case "K":
        charBinary[i] = " 01001011";
        break;
      case "L":
        charBinary[i] = " 01001100";
        break;
      case "M":
        charBinary[i] = " 01001101";
        break;
      case "N":
        charBinary[i] = " 01001110";
        break;
      case "O":
        charBinary[i] = " 01001111";
        break;
      case "P":
        charBinary[i] = " 01010000";
        break;
      case "Q":
        charBinary[i] = " 01010001";
        break;
      case "R":
        charBinary[i] = " 01010010";
        break;
      case "S":
        charBinary[i] = " 01010011";
        break;
      case "T":
        charBinary[i] = " 01010100";
        break;
      case "U":
        charBinary[i] = " 01010101";
        break;
      case "V":
        charBinary[i] = " 01010110";
        break;
      case "W":
        charBinary[i] = " 01010111";
        break;
      case "X":
        charBinary[i] = " 01011000";
        break;
      case "Y":
        charBinary[i] = " 01011001";
        break;
      case "Z":
        charBinary[i] = " 01011010";
        break;
      case " ":
        charBinary[i] = " 00100000";
        break;
      case "0":
        charBinary[i] = "";
        break;
      case "1":
        charBinary[i] = " 00110001";
        break;
      case "2":
        charBinary[i] = " 00110010";
        break;
      case "3":
        charBinary[i] = " 00110011";
        break;
      case "4":
        charBinary[i] = " 00110100";
        break;
      case "5":
        charBinary[i] = " 00110101";
        break;
      case "6":
        charBinary[i] = " 00110110";
        break;
      case "7":
        charBinary[i] = " 00110111";
        break;
      case "8":
        charBinary[i] = " 00111000";
        break;
      case "9":
        charBinary[i] = " 00111001";
        break;
      case "é":
        charBinary[i] =
          " 0010011001100101011000010110001101110101011101000110010100111011";
        break;
      default:
        console.log("valeur non listé");
    }
  }
}
