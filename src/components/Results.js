import moment from "moment";
import { convertToDay } from "../functions/convertToDay";
import { IMAGE_SIZE, IMAGE_URL } from "../services/constants";

function Results(props) {

  return (
    
    <div>
      
      {
      typeof props.showResults !== "undefined"? 
        <div>
        <div className='city'>
          <p>{props.showResults.data.city.name}</p>
        </div>
        <div className='daybox'>
            <div className='day'>
               <p>{convertToDay(props.showResults.data.list[0].dt)}</p>
            </div>
            <div className='image'>
            <p><img src={`${IMAGE_URL}${props.showResults.data.list[0].weather[0].icon}${IMAGE_SIZE}`}/> </p>
            </div>
            <div className='detailsbox'>
              <p className="clarity">{props.showResults.data.list[0].weather[0].main}</p>
              <p className='low'> low: <span className="temp">{Math.round(props.showResults.data.list[0].main.temp_min)}</span></p>
              <p className='high'> high: <span className="temp">{Math.round(props.showResults.data.list[0].main.temp_max)}</span></p>
              <p className="sunrise"> sunrise: {moment((props.showResults.data.city.sunrise) * 1000).format('h:mm')}</p>
              <p className="sunset"> sunset: {moment((props.showResults.data.city.sunset) * 1000).format('h:mm')}</p>
              <p className="humidity"> humidity: {props.showResults.data.list[0].main.humidity}</p>
            </div>
        </div>
        <div className='daybox'>
            <div className='day'>
               <p>{convertToDay(props.showResults.data.list[8].dt)}</p>
            </div>
            <div className='image'>
            <p><img src={`${IMAGE_URL}${props.showResults.data.list[8].weather[0].icon}${IMAGE_SIZE}`}/> </p>
            </div>
            <div className='detailsbox'>
              <p className="clarity">{props.showResults.data.list[8].weather[0].main}</p>
              <p className='low'> low: <span className="temp">{Math.round(props.showResults.data.list[8].main.temp_min)}</span></p>
              <p className='high'> high: <span className="temp">{Math.round(props.showResults.data.list[8].main.temp_max)}</span></p>
              <p className="sunrise"> sunrise: {moment((props.showResults.data.city.sunrise) * 1000).format('h:mm')}</p>
              <p className="sunset"> sunset: {moment((props.showResults.data.city.sunset) * 1000).format('h:mm')}</p>
              <p className="humidity"> humidity: {props.showResults.data.list[8].main.humidity}</p>
            </div>
        </div>
        <div className='daybox' >
            <div className='day'>
               <p>{convertToDay(props.showResults.data.list[16].dt)}</p>
            </div>
            <div className='image'>
            <p><img src={`${IMAGE_URL}${props.showResults.data.list[16].weather[0].icon}${IMAGE_SIZE}`}/> </p>
            </div>
            <div className='detailsbox'>
              <p className="clarity">{props.showResults.data.list[16].weather[0].main}</p>
              <p className='low'> low: <span className="temp">{Math.round(props.showResults.data.list[16].main.temp_min)}</span></p>
              <p className='high'> high: <span className="temp">{Math.round(props.showResults.data.list[16].main.temp_max)}</span></p>
              <p className="sunrise"> sunrise: {moment((props.showResults.data.city.sunrise) * 1000).format('h:mm')}</p>
              <p className="sunset"> sunset: {moment((props.showResults.data.city.sunset) * 1000).format('h:mm')}</p>
              <p className="humidity"> humidity: {props.showResults.data.list[16].main.humidity}</p>
            </div>
        </div>
        <div className='daybox' >
            <div className='day'>
               <p>{convertToDay(props.showResults.data.list[24].dt)}</p>
            </div>
            <div className='image'>
            <p><img src={`${IMAGE_URL}${props.showResults.data.list[24].weather[0].icon}${IMAGE_SIZE}`}/> </p>
            </div>
            <div className='detailsbox'>
              <p className="clarity">{props.showResults.data.list[24].weather[0].main}</p>
              <p className='low'> low: <span className="temp">{Math.round(props.showResults.data.list[24].main.temp_min)}</span></p>
              <p className='high'> high: <span className="temp">{Math.round(props.showResults.data.list[24].main.temp_max)}</span></p>
              <p className="sunrise"> sunrise: {moment((props.showResults.data.city.sunrise) * 1000).format('h:mm')}</p>
              <p className="sunset"> sunset: {moment((props.showResults.data.city.sunset) * 1000).format('h:mm')}</p>
              <p className="humidity"> humidity: {props.showResults.data.list[24].main.humidity}</p>
            </div>
        </div>
        <div className='daybox' >
            <div className='day'>
               <p>{convertToDay(props.showResults.data.list[32].dt)}</p>
            </div>
            <div className='image'>
            <p><img src={`${IMAGE_URL}${props.showResults.data.list[32].weather[0].icon}${IMAGE_SIZE}`}/> </p>
            </div>
            <div className='detailsbox'>
              <p className="clarity">{props.showResults.data.list[32].weather[0].main}</p>
              <p className='low'> low: <span className="temp">{Math.round(props.showResults.data.list[32].main.temp_min)}</span></p>
              <p className='high'> high: <span className="temp">{Math.round(props.showResults.data.list[32].main.temp_max)}</span></p>
              <p className="sunrise"> sunrise: {moment((props.showResults.data.city.sunrise) * 1000).format('h:mm')}</p>
              <p className="sunset"> sunset: {moment((props.showResults.data.city.sunset) * 1000).format('h:mm')}</p>
              <p className="humidity"> humidity: {props.showResults.data.list[32].main.humidity} </p>
            </div>
        </div>
        {/* {console.log(props.showResults.data.list[0].main.temp_min)} */}
        {/* {console.log(props.showResults.data.list.map(item => {
                const dates = item.dt_txt.slice(0, 10)
                dates.filter(date => date.indexOf("2022-03-28"))
          }))} */}

        {/* {console.log(

          props.showResults.data.list.map(date => {
            const newDate = date.dt_txt.slice(0, 10)
            const byDay = newDate;
          })

          )} */}



        </div>
       : ''}
  
    </div>
  )
}

export default Results