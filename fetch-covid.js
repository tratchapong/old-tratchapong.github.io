
const url = 'https://covid19.th-stat.com/json/covid19v2/getTodayCases.json'
let data

fetch(url).then( resp => resp.json() ).then( d => {
  data=d 
  for(let key in d)
  if(document.getElementById(key) !== null)
    document.getElementById(key).innerHTML += ` <b>${d[key]}</b>`
})
