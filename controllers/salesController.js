csvService = require('../services/csvService');

exports.list_all_sales = function(req, res) {


	csvService.pullCsvData('./data/realestatetransactions.csv',function(response){
		var sales1 = response;

		csvService.pullCsvData('./data/SalesJan2009.csv',function(response){

			var sales2 = sales1.concat(response);
			var promise = cloneAndPluck(sales2, ["price","city","state","transaction_date","latitude","longitude"],function(ta){
				res.json(ta);
			});

		});
	});

};

var cloneAndPluck = function(sourceObject, keys,callback) {
    
    var newArray = [];
	
	sourceObject.forEach(function(obj,objKey){
    	
    	newObj = {};

    	keys.forEach(function(key,keyVal){
    		
    		if(typeof obj[key]!="undefined")
    			newObj[key] = obj[key];
    		else if(typeof obj[key.charAt(0).toUpperCase() + key.slice(1)]!="undefined")
    			newObj[key] = obj[key.charAt(0).toUpperCase() + key.slice(1)];

    	});
    	
    	newArray.push(newObj);

    	if(objKey+1==sourceObject.length){
    		callback(newArray);
    	}

    });

};



