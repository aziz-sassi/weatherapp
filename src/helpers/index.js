import axios from "axios";

export const onSearch = (loc) => {
  return axios.get(`https://geocode.maps.co/search?q=${loc}&api_key=65d4ab7c9f75f723201407pwu5d2e90`)
    .then(response => {
      return response.data; 
    })
    .catch(error => {
     
      console.error("Error fetching location data:", error);
      throw error; 
    });
};
export const fetchWeatherData = (latitude, longitude) => {
    return axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
      .then(response => {
        return response.data; 
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        throw error; 
      });
  };
  