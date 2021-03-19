const URL = 'https://toneanalyzer-paas-anahi.mybluemix.net/';
var text;
var resp = document.getElementById("res");

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
    .then(data=>{
        if(data.data.tones[0] == undefined){
            resp.innerHTML = "Entrada no valida";
        }else{
            console.log(data.data.tones[0])
            resp.innerHTML = data.data.tones[0].tone_name + " : " + data.data.tones[0].score*100 + "%";
        }
    }
    )
    .catch(err=>console.log(err))
}