function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mEW38Fkp7B":
        Script1();
        break;
      case "6oFtRenFwes":
        Script2();
        break;
      case "6YjqkW677Eb":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
var d = new Date();
var o = {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'};

//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx_SYb5VUiurfJoi858TA7GQRp3Qj-sRyfCTdyEQdGYa7iFGJ9y/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10), //STORE DATE
 "HORA" : d.toLocaleDateString('en-US', o), //STORE DATE
 "MATRICULA" : player.GetVar("Matricula"),
 "NOMBRE" : player.GetVar("Nombre"),
 "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestre"),
  "DIAPOSITIVAS VISUALISADAS" : player.GetVar("VIS"),
  "TOTAL DE DIAPOSITIVAS" : player.GetVar("TOT"),
  "CANTIDAD DE INTENTOS" : player.GetVar("intentos"),
  "INTENTOS <70" : player.GetVar("noaprobado"),
  "INTENTOS > 69.99" : player.GetVar("aprobado")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

