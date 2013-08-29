console.log(' *************************** Gerar API *************************** ');

var fs = require("fs"); 


//SchemaMongo
var schemaMongo = function() {
	fs.readFile('templateSchema/schema.tpl', function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    var tpl = data.toString();   

	    tpl = tpl.replace(/\$\$name\$\$/gi, process.env.gNOME);
	    tpl = tpl.replace(/\$\$nameQ\$\$/gi, process.env.gNOMEQ);
	    tpl = tpl.replace(/\$\$schema\$\$/gi, process.env.gSCHEMA);

	    fs.writeFile(process.env.gNOME+"Schema.js", tpl, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("Gerado Schema "+process.env.gNOMEQ);
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

	    console.log(schema);

	    fs.writeFile(process.env.gNOME+"API.js", tpl, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("Gerado API "+process.env.gNOMEQ);
		    }
		});

	});
};



//Functions
var functions = function() {
	fs.readFile('templateFunctions/functions.tpl', function read(err, data) {
	    if (err) {
	        throw err;
	    }
	    var tpl = data.toString();   

	    tpl = tpl.replace(/\$\$name\$\$/gi, process.env.gNOME);
	    tpl = tpl.replace(/\$\$nameQ\$\$/gi, process.env.gNOMEQ);

		var schema = eval(process.env.gSCHEMA);
		

	    fs.writeFile(process.env.gNOME+"Function.js", tpl, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		        console.log("Gerado Functions "+process.env.gNOMEQ);
		    }
		});

	});
};

schemaMongo();
api();
functions();