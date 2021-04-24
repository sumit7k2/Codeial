module.exports.profile=function(req,res){
    return res.render('user',{
        title:'User',
        name:'Sumit'
    });
}

// Render signup page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:'Sign up'
    });
}

// render signin page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:'Sign in'
    });
}

// Getting data from signup form
module.exports.create=function(req,res){
    // todo later
}

// sign-in and create session for the user
module.exports.createSession=function(req,res){
    // todo later
}