
// const url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
const url = 'https://static.easysunday.com/covid-19/getTodayCases.json'
let data

document.addEventListener('DOMContentLoaded', (event) => {

  fetch(url).then( resp => resp.json() ).then( d => {
    data=d 
    for(let key in d) {
    console.log(`${key} : ${d[key]}`)
    if(document.getElementById(key) !== null)
      document.getElementById(key).innerHTML += ` <b>${d[key]}</b>`
    }
  })
  
})