
exports.pullCsvData = function(csvLink,callback){

	var csv=require('csvtojson');
	csv()
	.fromFile(csvLink)

	.on('end_parsed',(jsonArrObj)=>{

    	callback(jsonArrObj);
	
	});

}