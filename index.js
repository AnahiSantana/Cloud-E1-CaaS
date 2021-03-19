const URL = 'https://toneanalyzer-paas-anahi.mybluemix.net/';
var text;

function analizeText(){
    // textIn = {};
    text = document.getElementById("intext").value;
    console.log(text)
    axios({
        method: 'post',
        url: URL,
        data:{
            text : text
        }
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

