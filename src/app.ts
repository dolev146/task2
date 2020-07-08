import getAjax from "./Ajax.js";
import { Country } from "./country.model.js";
let input: Element | null = document.querySelector("#input");
let all: Element | null = document.querySelector("#all");

all.addEventListener("click", () => {
  getAjax(
    "https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;currencies;borders;flag",
    firstLoad
  );
});

function firstLoad(): void {
  let countries: Country[] = JSON.parse(this.responseText);

  let buttons = countries.map(
    (country) => `<div style="display:flex; margin-bottom: 1em;"> 
                        <img src="${country.flag}" alt="couty flag" width="50%" style="margin-right: 1em;" >
                        <div style=" display: inline-block;   width:40%";>
                        name: <p>${country.name}</p> <br>
                        capital: <p>${country.capital}</p> <br>
                        currencies: <p><br> code: ${country.currencies[0].code} <br> currencies name: ${country.currencies[0].name} <br> symbol: ${country.currencies[0].symbol} </p> <br>
                        borders: <p>${country.borders}</p> <br>
                        Top level domain : <p>${country.topLevelDomain}</p><br>
                        </div>
                    </div>
                    `
  );
  let list: Element | null = document.querySelector("#note");
  if (list) {
    list.innerHTML = buttons.join("");
  }
  input.focus();
  input.value = ""
}

let send = document.querySelector("#send");

send.addEventListener("click", () => {
  let inputvalue: any = document.querySelector("#input").value;
  if (inputvalue === "") {
    throw alert("you didnt inserted value")
  }
  getAjax(
    `https://restcountries.eu/rest/v2/name/${inputvalue}?fields=name;topLevelDomain;capital;currencies;borders;flag
    `,
    search
  );
});

function search(): void {
  let countries: Country[] = JSON.parse(this.responseText);

  let buttons = countries.map(
    (country) => 
                      `<div style="display:flex; margin-bottom: 1em;"> 
                        <img src="${country.flag}" alt="couty flag" width="50%" style="margin-right: 1em;" >
                        <div style=" display: inline-block;   width:40%";>
                        name: <p>${country.name}</p> <br>
                        capital: <p>${country.capital}</p> <br>
                        currencies: <p><br> code: ${country.currencies[0].code} <br> currencies name: ${country.currencies[0].name} <br> symbol: ${country.currencies[0].symbol} </p> <br>
                        borders: <p>${country.borders}</p> <br>
                        Top level domain : <p>${country.topLevelDomain}</p><br>
                        </div>
                    </div>
                    `
  );
  let list: Element | null = document.querySelector("#note");
  if (list) {
    list.innerHTML = buttons.join("");
  }
  input.focus();
  input.value = ""
}
