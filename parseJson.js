let results = 'workout-data.json';

var lookInto = results.samples;

    for( let key in lookInto ) {
     var selectData = lookInto[key].values.positionLat;
     console.log(selectData);
    }

    //console.log( selectData.69106658_5 )
