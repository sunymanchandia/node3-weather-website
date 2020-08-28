const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=cd7df8e704e2185a84a65a9eed4d6b31&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
        callback('Unable to connect to services',undefined)
        }
        else if(body.error){
            callback('Unable to find the location',undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+'°F outside. There is '+body.current.precip+'% chance of rain. It feels like '+body.current.feelslike+' degrees out. Humidity is '+body.current.humidity+'%.')
        }
    })
}
module.exports=forecast