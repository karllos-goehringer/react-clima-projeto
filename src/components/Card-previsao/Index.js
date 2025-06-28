import estilos from './Card-previsao.module.css';
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoWaterSharp } from "react-icons/io5";
export default function ClimaCard(props) {
    if (!props.dados || props.dados.tempAtual === undefined){ 
        return null;
    } else {
        return (
            <div className="weathercard">
                <div className="weather-header">
                    <h2>{props.dados.city}, {props.dados.country}</h2>
                    <img src={`https://openweathermap.org/img/wn/${props.dados.tempIcon}@2x.png`}></img>
                    <p className={estilos.weathertemp}>
                        {props.dados.tempAtual.toFixed(1).toString().replace('.', ',')} <sup>°C</sup>
                    </p>
                    <p className='description'>{props.dados.description}</p>
                </div>
                <div className={estilos.wheaterdetails}>
                        <div className={estilos.bloco1}>
                            <div><FaTemperatureArrowUp color='#F03A4C' fontSize={20} /><strong>Máxima:</strong> {props.dados.tempMax.toFixed(1).toString().replace('.', ',')}<sup>°C</sup></div>
                            <div><IoWaterSharp  fontSize={20} color='#0FB2F2'/><strong>Umidade:</strong> {props.dados.humidity}%</div>

                        </div>
                        <div className={estilos.bloco2}>
                        <div><FaTemperatureArrowDown color='#55B3D9' fontSize={20}/><strong>Mínima:</strong> {props.dados.tempMin.toFixed(1).toString().replace('.', ',')} <sup>°C</sup></div>
                        <div><FaWind fontSize={20} /><strong>Vento:</strong> {props.dados.windSpeed} km/h</div>
                        </div>
                    </div>
                </div>
        )
    }
}