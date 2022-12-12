let weather = {
    apiKey: "fcb3996c80938cd60d6e3adf7975de5c",


    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

     
    

    displayWeather: function (data) {
      const { name } = data;
      const { country } = data.sys;
      const { cod } = data;
    //   const { timezone } = data;
      const { icon, description } = data.weather[0];
      const { temp, temp_max, feels_like, humidity } = data.main;
      const { speed, deg } = data.wind;
      const { pressure } = data.main;
      const {temp_min} = data.main;

      document.querySelector(".city").innerText = "Weather in " + name + " " + country;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".temp_min").innerText = "Minimum temperature: " + temp_min + "°C";
      document.querySelector(".temp_max").innerText = "Maximum temperature: " + temp_max + "°C";
      document.querySelector(".feels_like").innerText = "Feels Like: " + feels_like + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".pressure").innerText =
        "Pressure: " + pressure + "Pa";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        document.querySelector(".wind_d").innerText =
        "Wind Direction: " + deg + "° "+ windDir(deg);
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
    


  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document.querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });

    function windDir(deg){
        const dirs= ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        return dirs[Math.round(deg / 45) % 8];
    }

    async function requestFullname(name) {

        let nameApi = `https://restcountries.com/v2/name/name?fullText=true`;

       const cityName = fetch(nameApi).then(response =>response.json()).then(result => {
            return result.name
        })
        return cityName;
      }
      async function showDetails(info) {
        console.log(info)
      
      
        var countryName = await requestFullname(cod)
    
    }

  