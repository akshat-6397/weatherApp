import axios from "axios";
import { useEffect } from "react";
import { FiSun } from "react-icons/fi";

const ImageAndText = () => {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text: "Delhi",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "333e0b64b0mshc98a6f68d719a9bp18fb13jsndeb5d72eafd1",
      "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=577b76062193c8d60b4f5467d0baaade')
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <div className="text-9xl flex justify-center mt-10">
        <FiSun></FiSun>
      </div>
      <div>
        <div className="mt-10 text-6xl flex justify-center">26°C</div>
        {/* <div className="flex justify-center mt-2"><hr className="w-1/3"></hr></div> */}
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>City</label><span>Pune</span></div>
        <div className="flex justify-center mt-2"><hr className="w-1/2"></hr></div>
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>Humidity</label><span>38%</span></div>
        <div className="flex justify-center mt-2"><hr className="w-1/2"></hr></div>
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>visiblity</label><span>3000 mi</span></div>
        <div className="flex justify-center mt-2"><hr className="w-1/2"></hr></div>
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>Wind Speed</label><span>5 km/h</span></div>
      </div>
    </div>
  );
};

export default ImageAndText;
