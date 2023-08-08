import { FiSun } from "react-icons/fi";
import { BsCloudHaze2 } from "react-icons/bs";
import cloudyIcon from "./Images/cloudyIcon.png";
import lightingRain from "./Images/lightingRain.png";
import cloudSnow from "./Images/cloudSnowIcon.png";
import dustIcon from "./Images/dustIcon.png";
import drizzleCloudIcon from "./Images/drizzleCloudIcon.png";
import fogCloudIcon from "./Images/fogCloudIcon.png";
import tornadoCloudIcon from "./Images/tornadoCloudIcon.png";

const ImageAndText = ({data}) => {

    const showIcon = (text) => {
        switch(text) {
            case "Haze":
                return <BsCloudHaze2 className="text-gray-500" />;
            case "Clouds":
                return <img src={cloudyIcon} alt="cloud" className="h-32 w-32 mb-0" />;
            case "Rain" || "moderate rain":
                return <img src={lightingRain} alt="rain" className="h-32 w-32"/>;
            case "Snow":
                return <img src={cloudSnow} alt="cloud" className="h-32 w-32" />;
            case "Dust":
                return <img src={dustIcon} alt="dust" className="h-32 w-32" />;
            case "Drizzle":
                return <img src={drizzleCloudIcon} alt="drizzle" className="h-40 w-40" />
            case "Fog":
                return <img src={fogCloudIcon} alt="fogCloud" className="h-32 w-32" />;
            case "Tornado":
                return <img src={tornadoCloudIcon} alt="tornado" className="h-32 w-32" />;
            default: 
                return <FiSun className="animate-spin text-yellow-300" ></FiSun>;                
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
        {/* <div className="flex justify-center mt-2"><hr className="w-1/3"></hr></div> */}
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>City</label><span>{data.city}</span></div>
        <div className="flex justify-center mt-2"><hr className="w-1/2"></hr></div>
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>Humidity</label><span>{data.humidity}%</span></div>
        <div className="flex justify-center mt-2"><hr className="w-1/2"></hr></div>
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>visiblity</label><span>{data.visibility} mi</span></div>
        <div className="flex justify-center mt-2"><hr className="w-1/2"></hr></div>
        <div className="flex justify-between w-1/2 m-auto mt-8"><label>Wind Speed</label><span>{data.windSpeed} km/h</span></div>
      </div>
    </div>
  );
};

export default ImageAndText;
