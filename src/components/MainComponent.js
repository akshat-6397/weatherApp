import React, { useRef, useState } from "react";
import ImageAndText from "./ImageAndText";
import axios from "axios";
import styled from 'styled-components';
import { BiLoaderAlt } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = styled.a`
  align-items: center;
  appearance: none;
  width: 100px;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 30px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;

&:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

&:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

&:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
`;

const MainComponent = () => {
    const buttonRef = useRef();
  const [mydata, setMydata] = useState({
    temperature: 0,
    city: "",
    humidity: 0,
    visibility: 0,
    windSpeed: 0,
    text:'',
    country: '',
    ft: 0,
  });
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchClick = () => {
    setLoading(true);
    axios
      .request(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=577b76062193c8d60b4f5467d0baaade`
      )
      .then((response) => {
        setMydata({
          ...mydata,
          city: response?.data.name,
          humidity: response?.data?.main?.humidity,
          temperature: Math.round(
            (response?.data?.main?.temp - 273.15).toFixed(2)
          ),
          visibility: response?.data?.visibility,
          windSpeed: response?.data?.wind?.speed,
          text: response?.data?.weather[0]?.main,
          country: response?.data?.sys?.country,
          ft: Math.round(
            (response?.data?.main?.feels_like - 273.15).toFixed(2)
          ),
        });
        setPlace('');
        toast.success("Weather Data Captured!😎", {position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",});
        setLoading(false);
      })
      .catch((error) => {toast.warn("Please enter a valid city or you can try with different name🤨.", {position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",});
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });
  };

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
        buttonRef.current.click();
    }
  };

  const handleLoadClick = () => {
    return;
  }

  return (
    <div className="border bg-gradient-to-r from-blue-900 to-indigo-700 border-white lg:w-1/3 md:w-4/5 sm:w-4/5 w-full border-solid p-5 shadow-2xl shadow-indigo-900">
      <div className="flex justify-center mt-5 relative">
        <input
          className="p-2 text-white py-1 mr-30 bg-transparent border-b-2 outline-none placeholder-white  w-4/5"
          type="text"
          placeholder="Enter a City...."
          value={place}
          onKeyDown={handleKeyPress}
          onChange={(e) => setPlace(e.target.value)}
        />
        <Button
          className={`bg-gray-950 rounded-full p-1 text-2xl shadow-2xl shadow-white text-white ml-2 mt-1 ${loading?'opacity-70':''}`}
          onClick={loading?handleLoadClick:handleSearchClick}
          ref={buttonRef}
        >{loading?<BiLoaderAlt className="animate-spin" />:"Search"}</Button>
      </div>
      <ImageAndText data={mydata} />
      <ToastContainer />
    </div>
  );
};

export default MainComponent;
