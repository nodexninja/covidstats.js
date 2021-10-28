function virus(){
  const search = document.getElementById("search")
  var inputVal = search.value
  const cases = document.getElementById("cases")
  const deaths = document.getElementById("deaths")
  const tcases = document.getElementById("todaycases")
  const tdeaths = document.getElementById("todaydeaths")
  fetch("https://corona.lmao.ninja/v2/countries/"+inputVal)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.message !== undefined) {
        cases.innerHTML = `No data on ${search.value}`
        deaths.innerHTML = `No data on ${search.value}`
        tcases.innerHTML = `No data on ${search.value}`
        tdeaths.innerHTML = `No data on ${search.value}`
      } else if (search.value === "") {
        return
      } else {
        console.log(data)
        cases.innerHTML = `Number of cases: ${data.cases}`
        deaths.innerHTML = `Number of deaths: ${data.deaths}`
        tcases.innerHTML = `New cases: ${data.todayCases}`
        tdeaths.innerHTML = `New deaths: ${data.todayDeaths}`
      }
  });
}
const submit = document.getElementById("submit")
submit.addEventListener("click", virus)
function scratch() {
  const search = document.getElementById("search")
  var inputVal = search.value
  fetch("https://api.scratch.mit.edu/"+inputVal)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (false) {
        
      } else if (search.value === "") {
        return
      } else {
        console.log(data)
      }
  });
}