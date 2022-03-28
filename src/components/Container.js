import { useEffect, useState } from "react";
import { fetchData } from "../functions/fetchData";
import Input from "./Input";
import Results from "./Results";

function Container(props) {
    const [weather, setweather] = useState()

    const handleInputChange = async(event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        const data = await fetchData(inputValue);
        console.log(data)
        setweather(data); 
    }

  return (
    <div id='container'>
        <Input onChange={(e) => handleInputChange(e)}/>
        <Results showResults={weather}/>
        {console.log('weather in container statement ' + weather)}
    </div>
  )
}

export default Container