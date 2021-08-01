
const url = 'https://static.easysunday.com/covid-19/getTodayCases.json'

async function getResult() {
  const resp = await axios.get(url);
  // console.log(resp.data);
  return resp.data;
}

document.addEventListener('DOMContentLoaded', (event) => {
  getResult().then( d => {
    for(let key in d) {
    // console.log(`${key} : ${d[key]}`)
    if(key ==="UpdateDate") {
      document.getElementById("UpdateDate").innerHTML += ` ${d["UpdateDate"].split(" ")[0]}`
    }
    else if(document.getElementById(key) !== null)
      document.getElementById(key).innerHTML += ` <b>${d[key]}</b>`
  }
  })
  
})