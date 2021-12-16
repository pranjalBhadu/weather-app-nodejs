const request = require('postman-request')

const geocode = (address, callback) => {
    if(address == undefined) {
        return callback("Please enter a location to get the weather!!")
    }
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoicHJhbmphbGJoYWR1IiwiYSI6ImNreDFnODE4MzFobWYyd2xhb20xYmJmbXkifQ.qnmm39Y3DRW1L31kbv8ElA&limit=1"

    request({url, 
            json: true
        }, (error, {body}) => {
            if(error){
                callback('Unable to connect to the internet!')
            }else if(body.features.length == 0){
                callback('Enter valid location!')
            }else{
                const data = body.features[0]
                callback(undefined, {
                    longitude: data.center[0],
                    latitude: data.center[1],
                    location: data.place_name
                })
            }
        })

}

module.exports = geocode