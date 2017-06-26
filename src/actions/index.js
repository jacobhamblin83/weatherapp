import axios from 'axios';
import config from '../config';

const ROOT_URL = config.ROOT_URL;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}