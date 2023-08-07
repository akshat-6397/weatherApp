import { FiSun } from "react-icons/fi";
import { BsCloudDrizzle, BsCloudFog, BsCloudHaze2, BsCloudLightningRain, BsCloudSnow, BsCloudSun, BsTornado, BsWind } from "react-icons/bs";

const ImageAndText = ({data}) => {

    const showIcon = (text) => {
        switch(text) {
            case "Haze":
                return <BsCloudHaze2 />;
            case "Clouds":
                return <BsCloudSun />;
            case "Rain" || "moderate rain":
                return <BsCloudLightningRain />;
            case "Snow":
                return <BsCloudSnow />;
            case "Dust":
                return <BsWind />;
            case "Drizzle":
                return <BsCloudDrizzle />;
            case "Fog":
                return <BsCloudFog />;
            case "Tornado":
                return <BsTornado />;
            default: 
                return <FiSun className="animate-spin" ></FiSun>;
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
