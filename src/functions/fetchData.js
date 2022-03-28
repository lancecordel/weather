import axios from "axios";
import { API_KEY, BASE_URL } from "../services/constants";

export const fetchData = async (zipcode) => {
    const response = await axios.get(`${BASE_URL}${zipcode}${API_KEY}`);
    // console.log(response.data)

    //destructure from main data object
    // const {city, list} = response.data;

    //destructure subcomponents needed
    // const {name, sunrise, sunset} = city;
    // const [{dt_txt} ,{main}] = list;
    // console.log(main)

    //return values as an array
    return response;
    
}