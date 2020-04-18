
const url = 'https://covid19.th-stat.com/api/open/today'
let data

fetch(url).then( resp => resp.json() ).then( d => {
  data=d 
  for(let key in d)
  if(document.getElementById(key) !== null)
    document.getElementById(key).innerText += `${d[key]}`
})
