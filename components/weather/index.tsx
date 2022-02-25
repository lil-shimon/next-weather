import {WeatherPresenter} from "./presenter";
import {API_URL} from "../../utils";
import axios from "axios";
import {useEffect, useState} from "react";

interface Detail {
    wave: string
    weather: string
    wind: string
}

interface ChangeOfRain {
    T00_06: string
    T06_12: string
    T12_18: string
    T18_24: string
}

export interface Forecast {
    chanceOfRain: ChangeOfRain;
    date: string;
    dateLabel: string;
    detail: Detail;
}

export interface Forecasts {
    forecasts: Forecast[]
}

export const WeatherComponent = () => {

    /**
     * @types {String} API URL
     */
    const apiUrl = API_URL

    const [forecasts,setForecasts] = useState<any>([])
    const [title, setTitle] = useState("")

    /**
     * call weather api
     */
    const getWeatherInfo = () => {
        axios.get(apiUrl).then((res) => {
            setForecasts(res.data.forecasts)
            setTitle(res.data.title)
        }).catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])

    return <WeatherPresenter forecasts={forecasts} title={title}/>
}