// $(document).ready(function () {
    
// });

window.onload = function(){
    var rsakey = "XXXXX";
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(rsakey);
    var enPsw = encrypt.encrypt('12345');
    console.info(enPsw);
}