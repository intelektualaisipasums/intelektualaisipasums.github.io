
const janis = document.getElementById("janis")
const kaste = document.getElementById("kaste")

janis.style.display = " ";

function janis_poz(x_pos,y_pos){
    janis.style.position = "absolute";
    janis.style.left = x_pos+'px';
    janis.style.top = y_pos+'px';
}
function janis_uzspragst(){
    janis.src="boom.png";
}
function janis_atspragst(){
    janis.src="peteris.png";
}
var opa = 3123
var div = document.createElement('div');
div.setAttribute('class', 'post block bc2');
div.innerHTML = `
   <h1><center>Vai peterim uzspragt?</center></h1>
   <button onclick="janis_uzspragst()" style = "top: 40px;left:30px;position: relative;height:100px;width:100px;" > Ja </button>
   <button onclick="janis_atspragst()" style = "top: 40px;left:220px;position: relative;height:100px;width:100px;" > Ne </button>
`;
document.getElementById('kaste').appendChild(div);

janis_poz(200,200);
//janis_uzspragst();