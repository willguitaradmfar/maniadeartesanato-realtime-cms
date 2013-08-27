exports.removeAllFiles = function(dirPath){
    try { 
        var files = fs.readdirSync(dirPath); 
    }catch(e) { return; }

    if (files.length > 0){
        for (var i = 0; i < files.length; i++) {
            var filePath = dirPath + '/' + files[i];
            if (fs.statSync(filePath).isFile()){
                console.log(filePath);
                fs.unlinkSync(filePath);
            }// else { rmDir(filePath); }
        }
    }
}
