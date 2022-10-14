var button1=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var divOutput=document.querySelector("#output");

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var minionURL="https://api.funtranslations.com/translate/minion.json"
function  getTranslationURL(text)
{
    return minionURL + "?"  + "text= " +text
}

function errorHandler(error)
{
    console.log("error occured!",error)
}


button1.addEventListener("click" , function clickEventHandler()
{
    // console.log("clicked!!!");
    // console.log("input",txtInput.value)
    // divOutput.innerText="aeeeeeaaaaagggggggg"+ txtInput.value;
    var textInput=txtInput.value;
    fetch(getTranslationURL(textInput))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated
        divOutput.innerText=translatedtext
    })
    .catch(errorHandler)
})











// This will ask user input
// var username=prompt("enter your name!")
// alert("hello "+username+ " have a great day");





// answers of live exercise 05
var textarea=document.querySelector("textarea");
var btnprimary=document.querySelector(".btn-primary");
var btn=document.querySelector("#input-btn");
var input=document.querySelector("input[name='translator']");
