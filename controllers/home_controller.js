module.exports.home=function(req,res){
    return res.end('<h1>Home</h1>');
}

module.exports.profile=function(req,res){
    return res.end('<h1>You are a silly moron</h1>');
}