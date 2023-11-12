const speles_virsma = document.getElementById("virsma");
function sakt(){
    console.log("ez");
}

function uzlikt_speles_saksanas_pogu(){
    var div = document.createElement('div');
    div.style = `
    position:relative;
    height:55px;
    width:200px;
    background-color:green;
    font-size: 40px;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align:center;
    border-radius: 25px;
    cursor: pointer;
    user-select: none;`;
    div.innerText = "SAKT!"
    div.onclick = function () {
        div.remove();
        sakt();
    };
    speles_virsma.appendChild(div);
    
}



function uzlikt_elementu(vards,x,y,r,id){
    var div = document.createElement('img');
    div.id = id 
    div.style.position = "absolute";
    div.src = vards
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.transform =  "rotate("+ r +"deg)";
    div.style.transition = "all .9s ease-in-out";
    speles_virsma.appendChild(div);
}
function kustinat_elementu(element, x, y){
    element.style.left =parseInt(element.style.left)+x + "px"
    element.style.top =parseInt(element.style.top)+y + "px"

}
function izdzest_visu_kas_nav(atb){
    var elementi_uz_ekrana =  document.querySelectorAll( 'body *' );
    for (let index = 0; index < elementi_uz_ekrana.length; ++index) {
        var element = elementi_uz_ekrana[index];
        if ( element.id[0] == "i"  &&  element.id[2] != atb){
            element.remove();
        }
    }

}

function pirmais_jaut(atb){
    var elementi_uz_ekrana =  document.querySelectorAll( 'body *' );
    for (let i = 0; i < elementi_uz_ekrana.length; ++i) {
        var element = elementi_uz_ekrana[i];
        if (element.id[0] == "b"){
            element.remove();
            //elementi_uz_ekrana.splice(index, 1);
        }
        if (element.id == "pet"){
            if (atb==0){
                kustinat_elementu(element, 300, -150)
            }
            if (atb==1){
                kustinat_elementu(element, 300, 0)
            }
            if (atb==2){
                kustinat_elementu(element, 300, +150)
            }
        setTimeout(() => izdzest_visu_kas_nav(atb), 1200)
        
        }

}}
function uzlikt_jautajumu(){
    var div = document.createElement('div');
    div.id = "jaut"
    div.style=`
    position:absolute;
    background-color:green;
    width:300px;
    height:400px;
    top:100px;
    left:640px;
    border: 6px solid black;
    cursor: pointer;
    user-select: none;;
    `;
    div.innerHTML = `
    <style>
    .jaut {
        background-color:gray;
        text-align: center;
        line-height: 40px;
        height:40px;
        width:200px;
        border-radius: 20px;
    }
    .jaut:hover {
        transform: scale(1.2);
    }
    </style>
    <center>
    <h1>Ko Pēterim radīt?</h1>
    <div onclick = "pirmais_jaut(0)"; class = "jaut"; >Klavier spēli</div><br>
    <div onclick = "pirmais_jaut(1)"; class = "jaut"; >Datorprogrammu </div><br> 
    <div onclick = "pirmais_jaut(2)"; class = "jaut"; >Raķeti </div><br> 
    <div onclick = "pirmais_jaut(3)"; class = "jaut"; >Nošauties </div><br> 
    </center>
    `;
    speles_virsma.appendChild(div);
}

function sakt(){
    console.log("ez");
    uzlikt_elementu('peteris.png',50,240,0,"pet");
    uzlikt_elementu('klavieres.png',420,70,0,"iz0");
    uzlikt_elementu('dators.png',420,250,0,"iz1");
    uzlikt_elementu('rakete.png',420,450,0, "iz2");

    uzlikt_elementu('bulta0.png',100,220,0, "b0");
    uzlikt_elementu('bulta0.png',100,320,30, "b1");
    uzlikt_elementu('bulta0.png',100,120,-30, "b2");

    uzlikt_jautajumu();
    
}

uzlikt_speles_saksanas_pogu()
















/*
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
*/