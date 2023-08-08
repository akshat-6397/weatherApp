import { FiSun } from "react-icons/fi";
import { BsCloudHaze2 } from "react-icons/bs";
import cloudyIcon from "./Images/cloudyIcon.png";
import lightingRain from "./Images/lightingRain.png";
import cloudSnow from "./Images/cloudSnowIcon.png";
import dustIcon from "./Images/dustIcon.png";
import drizzleCloudIcon from "./Images/drizzleCloudIcon.png";
import fogCloudIcon from "./Images/fogCloudIcon.png";
import tornadoCloudIcon from "./Images/tornadoCloudIcon.png";
import moonIcon from "./Images/moonIcon.jpg";
import cloudyIconNight from "./Images/cloudyIconNight.png";
import drizzleNight from "./Images/drizzleNight.jpg";

const ImageAndText = ({data}) => {
    const time = new Date();

    const showIcon = (text) => {
        switch(text) {
            case "Haze":
                return <BsCloudHaze2 className="text-gray-500" />;
            case "Clouds":
                return data.country === "IN" && time.getHours() >= 18?<img src={cloudyIconNight} alt="nightIcon" className="h-32 w-32" /> :<img src={cloudyIcon} alt="cloud" className="h-32 w-32 mb-0" />;
            case "Rain" || "moderate rain":
                return <img src={lightingRain} alt="rain" className="h-32 w-32"/>;
            case "Snow":
                return <img src={cloudSnow} alt="cloud" className="h-32 w-32" />;
            case "Dust":
                return <img src={dustIcon} alt="dust" className="h-32 w-32" />;
            case "Drizzle":
                return data.country === "IN" && time.getHours() >= 18?<img src={drizzleNight} alt="drizzle" className="h-40 w-40 mix-blend-multiply" />:<img src={drizzleCloudIcon} alt="drizzle" className="h-40 w-40" />
            case "Fog":
                return <img src={fogCloudIcon} alt="fogCloud" className="h-32 w-32" />;
            case "Tornado":
                return <img src={tornadoCloudIcon} alt="tornado" className="h-32 w-32" />;
            default: 
                return time.getHours()>18?<img src={moonIcon} alt="moon" className="h-32 w-32 mix-blend-multiply" />:<FiSun className="text-yellow-300" style={{animation: "spin 20s linear infinite"}} ></FiSun>;        
        }
    };

  return (
    <div className="mt-5">
      <div className="text-9xl flex justify-center mt-10">
      {showIcon(data.text)}
      </div>
      <div className="flex justify-center text-5xl mt-5"><label>{data.text}</label></div>
      <div>
        <div className="mt-5 text-6xl flex justify-center">{data.temperature}°C</div>
        <label className="flex justify-center mt-2">feels like {data.ft}°C</label>
        <div className="flex justify-between border-b pb-3 lg:w-4/5 sm:w-2/5 md:w-4/5 m-auto mt-5"><label>City</label><span>{data.city}</span></div>
        <div className="flex justify-between border-b pb-3 lg:w-4/5 sm:w-2/5 md:w-4/5 m-auto mt-5"><label>Humidity</label><span>{data.humidity}%</span></div>
        <div className="flex justify-between border-b pb-3 lg:w-4/5 sm:w-2/5 md:w-4/5 m-auto mt-5"><label>visiblity</label><span>{data.visibility} mi</span></div>
        <div className="flex justify-between lg:w-4/5 sm:w-2/5 md:w-4/5 m-auto mt-5"><label>Wind Speed</label><span>{data.windSpeed} km/h</span></div>
      </div>
    </div>
  );
};

export default ImageAndText;
