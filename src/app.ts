import getNorthwind from './Ajax.js'
import { Customer } from './customer.model.js'
window.addEventListener('load', () => {
    getNorthwind("https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;currencies;borders;flag", firstLoad)
})



function firstLoad(): void {
    let customers: Customer[] = JSON.parse(this.responseText)
    // console.log(customers)
    
    let buttons = customers.map(
        customer => `<div 
                        <img src="${customer.flag}" alt="couty flag" width="100"> 
                        name: <h3>${customer.name}</h3>
                        capital: <h3>${customer.capital}</h3>
                        currencies: <h3>${customer.currencies}</h3> 
                        borders: <h3>${customer.borders}</h3> 
                        Top level domain : <h3>${customer.topLevelDomain}</h3>
                    </div>
                    <br>`)
    let list: Element | null = document.querySelector('#note')
    if (list) {
        list.innerHTML = buttons.join('')
    }
}