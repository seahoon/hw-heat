var exercise = {};

exercise.countRecords = function(data){
    return data.length; 
};

// var total = chicago.data.reduce(function(previous, current){
//     return previous + current;

// console.log('total' + total);

// var wordsFlat = words.reduce(function(previous, current){
// 	return previous.concat(current);
// },[]);

exercise.countDistrictCrimes = function(data,district){
    console.log(data);
    var matching = data.reduce(function(number,current){
        if (current[19] == district){
            number += 1;
        }
        return number;
    },0);

    return matching; 
};

exercise.countPrimaryType = function(data,primaryType){
    var matching = data.reduce(function(number,current){
        if (current[13] == primaryType){
            number += 1;
        }
        return number;
    },0);
    return matching;
};

exercise.countLocation = function(data,location){
    var matching = data.reduce(function(number,current){
        if (current[11] == location){
            number += 1;
        }
        return number;
    },0);
    return matching;
};

exercise.buildLatLngPoint = function(crime){
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
};
