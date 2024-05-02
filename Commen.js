exports.sentizeuser = (user)=>{
   return ({username:user.username,Phone_Number:user.Phone_Number ,id:user._id})
}

exports.CookieExtracter = function (req){
   console.log("Cookie Extracter Function Called")
   let token = null;
   console.log(req)
   if(req && req.cookies){
      
      token = req.cookies['jwt'];
   }
   return token;

}