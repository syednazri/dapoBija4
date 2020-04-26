// var processorLink = "http://localhost/ikhlim/webapps/apk2/release/processor.php";
// var adsLink = "http://localhost/ikhlim/webapps/apk2/release/adsPage.php";
// var imgLink = "http://localhost/ikhlim/webapps/apk2/release/img/";
// var Link = "http://localhost/ikhlim/webapps/apk2/release/";

var processorLink = "http://dapobija.nineat.com/processor.php";
var adsLink = "http://dapobija.nineat.com/adsPage.php";
var imgLink = "http://dapobija.nineat.com/img/";
var Link = "http://dapobija.nineat.com/";


function xPost(processPage,postParamenter,elements){
    var z = new XMLHttpRequest();
    z.open("POST",processPage,true);
    z.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    z.onreadystatechange = function(){
        if(z.readyState == 4 && z.status == 200){
            elements(z.responseText);
        }
    }
    z.send(postParamenter);
}
xPost("http://dapobija.nineat.com/vcheck.php","vcheck=1.0",
function(opr){
    if(opr == "false"){
        window.location.href = "http://dapobija.nineat.com/apk/dapobija.apk";
    }

}
)
