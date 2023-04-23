db.users.insert({"phonenumber": 8886665253, "password": "44444444"})

db.users.insert({"phonenumber": 9949995699, "password": "123456"})
db.users.insert({"phonenumber": 9502922227, "password": "123456"})
db.users.insert({"phonenumber": 8886766666, "password": "345678"})


db.rfareconfigs.find({}).toArray().forEach(
    function (config) {
        var fromCity =new RegExp("^" + config.sourcecity.toLowerCase(), "i")
        var toCity =new RegExp("^" + config.destinationcity.toLowerCase(), "i")
        var fc = db.fareconfigs.findOne({"sourcecity":fromCity,"destinationcity":toCity})
        if(fc) {
           // print("FC " + JSON.stringify(fc));
           print("RFare " + config.sourcecity +" - "+  config.destinationcity   + " config " + fc
                +" Rayalaseema NonAC " + config.NON_AC_SEATER +"  NonAC" + fc.NON_AC_SEATER);
            var result = db.fareconfigs.updateMany({"sourcecity":fromCity,"destinationcity":toCity},{$set:{
                    "AC_SEATER":config.AC_SEATER,
                    "NON_AC_SEATER":config.NON_AC_SEATER,
                    "AC_SLEEPER":config.AC_SLEEPER,
                    "NON_AC_SLEEPER":config.NON_AC_SLEEPER,
                    "MULTI_SEATER":config.MULTI_SEATER,
                    "MULTI_SLEEPER":config.MULTI_SLEEPER,
                    "skipcalculate":true,
                    "slab":config.slab
                }});
            print(JSON.stringify(result));
        } else {
            print("not found " + config.sourcecity +"  "+ config.destinationcity)
        }
    }
);

mongoimport --username whizzard --password whizzard596$ -d whizzard -c stationcodes --type csv --file AbhibuStationNamesWithCorrections-July15.csv --headerline

db.stationcodes.find({}).toArray().forEach(
    function (station) {
        var fareconfig = db.fareconfigs.findOne({"sourcecity":station.StationName});
        if(fareconfig) {
            print("found " + fareconfig.sourcecity);
            db.fareconfigs.updateMany({"sourcecity":station.StationName},{$set:{"aSourceStationID":station.StationID,"aSourceStateName":station.StateName}})
        }
        fareconfig = db.fareconfigs.findOne({"destinationcity":station.StationName});
        if(fareconfig) {
            print("found " + fareconfig.destinationcity);
            db.fareconfigs.updateMany({"destinationcity":station.StationName},{$set:{"aDestinationStationID":station.StationID,"aDestinationStateName":station.StateName}})
        }
    }
);

db.fareconfigs.find({$or:[{"aSourceStationID":{$exists:false}},{"aDestinationStationID":{$exists:false}}]}).toArray().forEach(
    function (config) {
        var station = db.stationcodes.find({"StationName":config.sourcecity});
        if(station) {
            db.fareconfigs.updateMany({"sourcecity":config.sourcecity},{$set:{"aSourceStationID":station.StationID,"aSourceStateName":station.StateName}});
            print("updated " + config.sourcecity)
        }
    }
);

db.fareconfigs.find({}).toArray().forEach(
    function (config) {
       if(!config.aSourceStationID){
           print(JSON.stringify(config.sourcecity));
       }
    }
);


db.fareconfigs.find({"aSourceStationID":{$exists:false}}).toArray().forEach(
    function (config) {
        var station = db.stationcodes.find({"StationName":config.sourcecity});
        if(station.StationID) {
            //db.fareconfigs.updateMany({"sourcecity":config.sourcecity},{$set:{"aSourceStationID":station.StationID,"aSourceStateName":station.StateName}});
            print("updated " + config.sourcecity +" station " + JSON.stringify(station))
        }
    }
);



var notFoundCities = []
db.fareconfigs.find({$or:[{"aSourceStationID":{$exists:false}},{"aDestinationStationID":{$exists:false}}]}).toArray().forEach(
    function (config) {
        if(!config.aSourceStationID) {
            if(notFoundCities.indexOf(config.sourcecity) == -1) {
                notFoundCities.push(config.sourcecity);
            }
        }
    }
);

print(notFoundCities)


db.stationcodes.find({'StationName': { '$regex': 'Anantapur', '$options': 'i' } })

db.stationcodes.insert({"StationName" : "Anantapur", "StationID" : 3465, "StateCode" : "AP"})
db.stationcodes.insert({"StationName" : "Ananthapur", "StationID" : 65, "StateCode" : "AP"})
