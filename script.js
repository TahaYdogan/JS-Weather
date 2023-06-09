const url = 'https://api.openweathermap.org/data/2.5/' // Api Baglantisi
const key = 'd6d811593585691512d1ea774efe24c7'          // api key

const setQuery = (e) =>{ //aray function
    if(e.keyCode == '13') // enter tusuna basilmasini saglayan kosul
    getResult(searchBar.value)

}
const getResult = (cityName) => {
   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(weather =>{
    return weather.json()
   })
   .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')  // id bilgisi ile secmek
    city.innerText = `${result.name}, ${result.sys.country}`// api ile sayfadaki deigisiklikleri saglamak

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C/ ${Math.round(result.main.temp_max)}°C ` 
    
}


const searchBar = document.getElementById('searchbar')
searchBar.addEventListener('keypress',setQuery) // tusa basilma eventi 