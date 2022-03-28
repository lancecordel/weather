import moment from "moment";

function Results(props) {
    const IMAGE_URL = 'http://openweathermap.org/img/wn/';
    const IMAGE_SIZE ='@2x.png';
    const days =['Sunday']

    // function convertToDay(convert){
    //   let d = new Date(convert * 1000);
    //   // let localDay = d.getTime(convert);
    //   // let weekDay = moment(localDay).format('dddd')
    //   return d;
    // }

    // console.log(convertToDay(1648468800))

    // let d = new Date();
    // let localTime = d.getTime(1648382400)
    // console.log(localTime)




    
function convertToDay(utc){
    const dateObject = new Date(utc * 1000)
    const humanDateFormat = dateObject.toLocaleString()
    const day = dateObject.toLocaleString("en-US", {weekday: "long"})
    return day;
}


    // console.log(moment(1648380934810).format('dddd'))


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
              <p className='low'> low: <span className="temp">{Math.round(props.showResults.data.list[19].main.temp_min)}</span></p>
              <p className='high'> high: <span className="temp">{Math.round(props.showResults.data.list[28].main.temp_max)}</span></p>
              <p className="sunrise"> sunrise: {moment((props.showResults.data.city.sunrise) * 1000).format('h:mm')}</p>
              <p className="sunset"> sunset: {moment((props.showResults.data.city.sunset) * 1000).format('h:mm')}</p>
              <p className="humidity"> humidity: {props.showResults.data.list[32].main.humidity}</p>
            </div>
        </div>




        </div>
       :
       ''}
    </div>
  )
}

export default Results