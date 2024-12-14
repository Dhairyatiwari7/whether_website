let temp = document.querySelector("#temp");
let name = document.querySelector("#location");
let date = document.querySelector("#time");
let condtn = document.querySelector("#condition");
let srchfld = document.querySelector("#srch_area");
const form = document.querySelector("#search-form");

form.addEventListener('submit', search);

let tar = 'Mumbai';

const fetchloc = async (loc) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=e62f7d448c514a40aed112954241412&q=${loc}&aqi=no`;
    const r = await fetch(url);
    const data = await r.json();
    console.log(data);

    let locationName = data.location.name;
    let temperature = data.current.temp_c;
    let localTime = data.location.localtime;
    let condition = data.current.condition.text;

    update(temperature, locationName, localTime, condition);
}

function update(temperature, location, date_time, condition) {
    temp.innerText = `${temperature}°C`;
    name.innerText = location;
    date.innerText = new Date(date_time).toLocaleString();
    condtn.innerText = condition;
}

function search(e) {
    e.preventDefault(); 
    const target = srchfld.value;
    fetchloc(target);
}

fetchloc(tar); 
