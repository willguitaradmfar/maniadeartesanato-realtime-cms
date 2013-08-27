var fs              = require('fs'),
    helper          = require('../helper');

module.exports = function(app, config, db, query) {
   
    app.post('/file-upload', function(req, res) {
        //console.log(req.body);
        //console.log(req.files);
        // diretorio temporario
        var tmp_path = req.files.my_file.path;
        console.log(tmp_path);
        // diretorio definitivo
        var local_path = process.env.PATH_UPLOAD + req.files.my_file.name;
        // enviar arquivo do dir temporario para o definitivo
        fs.rename(tmp_path, local_path, function(err) {
            //if (err) throw err;
            if (err) {
                    console.log(JSON.stringify(err));
                    //res.sendfile(__dirname + '/public/error.html');
                    res.send(500, {status:"ERRO", erro : JSON.stringify(err)});
                    return;
                }
                // deletar arquivo temporario
                fs.unlink('./' + tmp_path, function() {
                if (err) console.log(JSON.stringify(err));
                    //res.send('File uploaded to: ' + local_path + ' - ' + req.files.my_file.size + ' bytes');
                    //res.sendfile(__dirname + '/public/success.html');
                    res.send(200, {status:"Ok", tmp : process.env.TMP, def : process.env.PATH_UPLOAD});
                });
                helper.removeAllFiles(process.env.TMP);
            });
    });
};