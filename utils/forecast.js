const request = require('postman-request')

const forecst = (longitude, latitude, callback) => {
    url = "http://api.weatherstack.com/current?access_key=80018dca44ab48425cac19189b0d1863&query="+latitude+","+longitude+""

    request({
        url,
        json: true,
    }, (error, {body}) => {
        if(error){
            callback("No Internet connection found!")
        }else if(body.error){
            callback("Enter valid location!")
        }else{
            const data = body.current
            callback(undefined, 'It is currently '+data.temperature+' degrees out. There is '+data.precip+'% chances of rain')
        }
    })
}

module.exports = forecst