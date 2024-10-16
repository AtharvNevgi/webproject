const cityName = document.getElementById('cityName');
const submitButton = document.getElementById('submitButton');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const dataHide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = 'Please Enter the City Name!';
        // alert('Please Enter the City Name !');
        dataHide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d90ef8ddb191868cbd28cc3791c8e1c3` ;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
                       
            const tempMood = arrData[0].weather[0].main;

            // conditions to check weather condition
          if (tempMood == "Sunny"){
              temp_status.innerHTML = `<i class="fas fa-sun" style="color": #eccc68;></i>`
          }else if(tempMood == "Clouds"){
              temp_status.innerHTML = `<i class="fa-solid fa-cloud" style="color: #eee; font-size: 34px;"></i>`
          }else if(tempMood == "Rainy"){
              temp_status.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #91a0b8;"></i>`
          }else if(tempMood == "Haze"){
              temp_status.innerHTML = `<i class="fa-solid fa-smog" style="color: #eee;"></i>`
          }else if(tempMood == 'Clear'){
              temp_status.innerHTML = `<i class="fa-sharp-duotone fa-solid fa-cloud-sun" style="--fa-primary-color: #f9f7f0; --fa-secondary-color: #ffff00;"></i>`
          }else {
            temp_status.innerHTML = `<i class="fas fa-sun" style="color": #eccc68;></i>`
          }

          dataHide.classList.remove('data_hide');

        }catch{
            city_name.innerText = 'Please Enter the valid city name!';
            // alert('Please enter city name properly');
            dataHide.classList.add('data_hide');
        }

    }


}

submitButton.addEventListener('click', getInfo);