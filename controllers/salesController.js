csvService = require('../services/csvService');

exports.list_all_sales = function(req, res) {


	csvService.pullCsvData('./data/realestatetransactions.csv',function(response){
		var sales1 = response;

		csvService.pullCsvData('./data/SalesJan2009.csv',function(response){

			var sales12 = sales1.concat(response);
			// var handPicked = (sales12 => ({'Price'})) (object);
			var promise = cloneAndPluck(sales12, ["price","city","state","transaction_date","latitude","longitude"],function(ta){
				res.json(ta);
			});

			// console.log(promise);
			// console.log(subset);
			// console.log(promise);
			// res.json(subset);	
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

	    	// console.log(newObj);


	    	// console.log(sourceObjectlength);
	    	// console.log(objKey+1);

	    	if(objKey+1==sourceObject.length){
	    		callback(newArray);
	    	}

	    });

};



