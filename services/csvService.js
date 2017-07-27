/**
 * @param  {[string] - path to csv file}
 * @param  {Function (callback)}
 * @return {[array]}
 */
exports.pullCsvData = function(csvLink,callback){

	var csv=require('csvtojson');
	csv()
	.fromFile(csvLink)

	.on('end_parsed',(jsonArrObj)=>{

    	callback(jsonArrObj);
	
	});

}