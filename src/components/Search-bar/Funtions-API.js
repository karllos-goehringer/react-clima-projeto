export function showAlert(msg) {
  const alertBox = document.querySelector("#alert");
  if(alertBox != undefined){
  alertBox.innerHTML = msg;
  alertBox.classList.add("show");
  }

}
export async function requestAPI() {
    const cidade = document.getElementById('cidade').value
    const pais = document.getElementById('pais').value
    const apiKey = '8a60b2de14f7a17c7a11706b2cfcd87c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)},${encodeURI(pais)}&appid=${apiKey}&units=metric&lang=pt_br`
    if (!cidade) {
        showAlert('Você precisa digitar uma cidade...');
    }
      try {
    const res = await fetch(apiUrl);
    const json = await res.json();
    if (json.cod === 200) {
      console.log(json)
      return({
        city: json.name,
        country: json.sys.country,
        tempAtual: json.main.temp,
        tempMax: json.main.temp_max,
        tempMin: json.main.temp_min,
        description: json.weather[0].description,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        humidity: json.main.humidity,
      });
    } else {
      //document.querySelector('#boxclima').classList.remove('show');
      showAlert('Não foi possível localizar a cidade.');
    }
  } catch (error) {
    console.error(error);
  }
}