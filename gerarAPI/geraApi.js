console.log(' *************************** Gerar API *************************** ');

var fs = require("fs"); 


//SchemaMongo
var schemaMongo = function() {
	fs.readFile('templateSchema/schema.tpl', function read(err, data) {
	    if (err)throw err;

	    var tpl = data.toString();   

	    tpl = tpl.replace(/\$\$name\$\$/gi, process.env.gNOME);
	    tpl = tpl.replace(/\$\$nameQ\$\$/gi, process.env.gNOMEQ);
	    tpl = tpl.replace(/\$\$schema\$\$/gi, process.env.gSCHEMA);

	    fs.writeFile(process.env.gNOME+"Schema.js", tpl, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("Gerado Schema "+process.env.gNOMEQ);
		        injectSchemaMongo(tpl);
		    }
		});

	});
};

var injectSchemaMongo = function(code) {
	fs.readFile(process.env.gFILESCHEMA, function read(err, data) {
	    if (err)throw err;

	    var tpl = data.toString();	    

	    tpl = tpl.replace(/\/\/\$varNewSchema\$/gi, code);	    
	    
	    fs.writeFile(process.env.gFILESCHEMA, tpl, function(err) {
		    if(err)console.log(err);
		     else {
		        console.log("Schema Injetado"+process.env.gNOMEQ);		        
		    }
		});

	});
};

//VARSchemaMongo
var varSchemaMongo = function() {
	fs.readFile('templateSchema/varSchema.tpl', function read(err, data) {
	    if (err)throw err;
	    
	    var tpl = data.toString();   

	    tpl = tpl.replace(/\$\$name\$\$/gi, process.env.gNOME);
	    tpl = tpl.replace(/\$\$nameQ\$\$/gi, process.env.gNOMEQ);
	    tpl = tpl.replace(/\$\$schema\$\$/gi, process.env.gSCHEMA);

	    fs.writeFile(process.env.gNOME+"VarSchema.js", tpl, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("Gerado VarSchema "+process.env.gNOMEQ);
		        injectVarSchemaMongo(tpl);
		    }
		});

	});
};


var injectVarSchemaMongo = function(code) {
	fs.readFile(process.env.gFILESCHEMA, function read(err, data) {
	    if (err)throw err;

	    var tpl = data.toString();	    
	    
	    tpl = tpl.replace(/\/\/\$newSchema\$/gi, ',\n'+code);
	    
	    fs.writeFile(process.env.gFILESCHEMA, tpl, function(err) {
		    if(err)console.log(err);
		     else {
		        console.log("VarSchema Injetado"+process.env.gNOMEQ);		        
		    }
		});

	});
};


//API
var api = function() {
	fs.readFile('templateAPI/api.tpl', function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    var tpl = data.toString();   

	    tpl = tpl.replace(/\$\$name\$\$/gi, process.env.gNOME);
	    tpl = tpl.replace(/\$\$nameQ\$\$/gi, process.env.gNOMEQ);

		var schema = eval(process.env.gSCHEMA);

		var gSCHEMA = "";// = process.env.gSCHEMA;

		for(var i in schema){
			gSCHEMA += '\n \t\tnew'+process.env.gNOMEQ+'.'+i+' = req.body.'+i;
		}

	    tpl = tpl.replace(/\$\$schema\$\$/gi, gSCHEMA);	    

	    fs.writeFile(process.env.gNOME+"API.js", tpl, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("Gerado API "+process.env.gNOMEQ);
		        injectAPI();

				fs.rename(process.env.gNOME+"API.js", process.env.gPATHAPI+"/"+process.env.gNOME+"API.js", function(err){
				    if(err)throw err;
				});	
		    }
		});

	});
};

var injectAPI = function() {
	fs.readFile(process.env.gFILEMAIN, function read(err, data) {
	    if (err)throw err;

		var tpl = data.toString();	    
	    
	    tpl = tpl.replace(/\/\/\$requireAPI\$/gi, "\nrequire('./routes/api/"+process.env.gNOME+"API')(app, config, db, query);//$requireAPI$");
	    
	    fs.writeFile(process.env.gFILEMAIN, tpl, function(err) {
		    if(err)console.log(err);
		     else {
		        console.log("Require API Injetado"+process.env.gNOMEQ);		        		        
		    }
		});	

	});
};

//Functions
var functions = function() {
	fs.readFile('templateFunctions/functions.tpl', function read(err, data) {
	    if (err)throw err;

	    var tpl = data.toString();

	    tpl = tpl.replace(/\$\$name\$\$/gi, process.env.gNOME);
	    tpl = tpl.replace(/\$\$nameQ\$\$/gi, process.env.gNOMEQ);

		var schema = eval(process.env.gSCHEMA);
		

	    fs.writeFile(process.env.gNOME+"Function.js", tpl, function(err) {
		    if(err)console.log(err);
		    else {		    	
		        console.log("Gerado Functions "+process.env.gNOMEQ);
		        injectFunctions();

		        fs.rename(process.env.gNOME+"Function.js", process.env.gPATHFUNCTIONS+"/"+process.env.gNOME+"Function.js", function(err){
				    if(err)throw err;
				});
		    }
		});

	});
};

var injectFunctions = function() {
	fs.readFile(process.env.gFILEMAIN, function read(err, data) {
	    if (err)throw err;

		var tpl = data.toString();	    
	    
	    tpl = tpl.replace(/\/\/\$requireFunctions\$/gi, "\n\tquery."+process.env.gNOME+"    = require('./routes/"+process.env.gNOME+"Function')(app, db);//$requireFunctions$");
	    
	    fs.writeFile(process.env.gFILEMAIN, tpl, function(err) {
		    if(err)console.log(err);
		     else {
		        console.log("Require Functions Injetado"+process.env.gNOMEQ);		        
		    }
		});	

	});
};

schemaMongo();
api();
setTimeout(function() {
	functions();
}, 4000);
setTimeout(function() {
	varSchemaMongo();
}, 2000);