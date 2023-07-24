import React from "react";
import Header from "../../components/weatherPage/weatherDetails/Header";
import Degre from "../../components/weatherPage/weatherDetails/Degre";
import Details from "../../components/weatherPage/weatherDetails/Details";

function TommorowWeather({ temp, text, icon, pressure, speed, deg }) {
	return (
		<>
			<Header text='Today' icon={icon} />
			<Degre temp={temp} text={text} />
			<Details
				color1='bg-violet-900/80'
				color2='bg-purple-700/80'
				color3='bg-orange-300/80'
				pressure={pressure}
				speed={speed}
				deg={deg && deg}
			/>
		</>
	);
}

export default TommorowWeather;
