import getNorthwind from "./Ajax.js";
import { Customer } from "./customer.model.js";
let input: Element | null = document.querySelector("#input");
let all: Element | null = document.querySelector("#all");

all.addEventListener("click", () => {
  getNorthwind(
    "https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;currencies;borders;flag",
    firstLoad
  );
});

function firstLoad(): void {
  let customers: Customer[] = JSON.parse(this.responseText);
  // console.log(customers)

  let buttons = customers.map(
    (customer) => `<div style="display:flex; margin-bottom: 1em;"> 
                        <img src="${customer.flag}" alt="couty flag" width="50%" style="margin-right: 1em;" >
                        <div style=" display: inline-block;   width:40%";>
                        name: <p>${customer.name}</p> <br>
                        capital: <p>${customer.capital}</p> <br>
                        currencies: <p><br> code: ${customer.currencies[0].code} <br> currencies name: ${customer.currencies[0].name} <br> symbol: ${customer.currencies[0].symbol} </p> <br>
                        borders: <p>${customer.borders}</p> <br>
                        Top level domain : <p>${customer.topLevelDomain}</p><br>
                        </div>
                    </div>
                    `
  );
  let list: Element | null = document.querySelector("#note");
  if (list) {
    list.innerHTML = buttons.join("");
  }
  input.focus();
}

let send = document.querySelector("#send");

send.addEventListener("click", () => {
  let inputvalue: any = document.querySelector("#input").value;
  if (inputvalue === "") {
    throw alert("you didnt inserted value")
  }
  getNorthwind(
    `https://restcountries.eu/rest/v2/name/${inputvalue}?fields=name;topLevelDomain;capital;currencies;borders;flag
    `,
    search
  );
});

function search(): void {
  let customers: Customer[] = JSON.parse(this.responseText);
  // console.log(customers)

  let buttons = customers.map(
    (customer) => `<div style="display:flex; margin-bottom: 1em;"> 
                          <img src="${customer.flag}" alt="couty flag" width="50%" style="margin-right: 1em;" >
                          <div style=" display: inline-block;   width:40%";>
                          name: <p>${customer.name}</p> <br>
                          capital: <p>${customer.capital}</p> <br>
                          currencies: <p><br> code: ${customer.currencies[0].code} <br> currencies name: ${customer.currencies[0].name} <br> symbol: ${customer.currencies[0].symbol} </p> <br>
                          borders: <p>${customer.borders}</p> <br>
                          Top level domain : <p>${customer.topLevelDomain}</p><br>
                          </div>
                      </div>
                      `
  );
  let list: Element | null = document.querySelector("#note");
  if (list) {
    list.innerHTML = buttons.join("");
  }
  input.focus();
}
