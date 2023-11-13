const speles_virsma = document.getElementById("virsma");
var atbildes_saraksts = [];
uzlikt_speles_saksanas_pogu()

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
    div.innerText = "SĀKT!"
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
    div.style.transition = "all .9s ease-in-out";
    div.src = vards
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.transform =  "rotate("+ r +"deg)";
    speles_virsma.appendChild(div);
}

function nonemt_elementu(id){
    document.getElementById(id).remove();
}
function kustinat_elementu_notimeout(id, x, y, time){
    element = document.getElementById(id);
    element.style.transition = "all .9s ease-in-out";
    //element.style.transition = "all ."+time+"s ease-in-out";
    element.style.left =x + "px"
    element.style.top = y + "px"

}
function kustinat_elementu(id, x, y, time){
    setTimeout(kustinat_elementu_notimeout.bind(null, id, x, y, time), 300);
}

function izvele(atb){
    atbildes_saraksts.push(atb);
    sakt()
  
}
function uzlikt_jautajumu(jaut, atb){

    var div = document.createElement('div');
    div.id = "jaut"
    div.style=`
    position:absolute;
    background-color:green;
    width:300px;
    height:470px;
    top:40px;
    left:640px;
    border: 6px solid black;
    user-select: none;;
    `;
    var innerHTML_string = `
    <style>
    .jaut {
        background-color:gray;
        text-align: center;
        line-height: 40px;
        height:auto;
        width:200px;
        cursor: pointer;
        border-radius: 20px;
    }
    .jaut:hover {
        transform: scale(1.2);
    }
    </style>
    <center>
    `;
    innerHTML_string = innerHTML_string + "<h2>" + jaut +"</h2>"
    if (atb != undefined) {
        
    for (let i = 0; i < atb.length; i++){
        innerHTML_string = innerHTML_string + '<div onclick = "izvele('+ i +')" class = "jaut"; >'+ "<b>" + atb[i] + "</b>" +'</div><br>';
    }}
    innerHTML_string = innerHTML_string + "</center>";
    div.innerHTML = innerHTML_string;
    speles_virsma.appendChild(div);
}

function izdzest_visu(){
    var node = document.getElementById("virsma").querySelectorAll('*');
    for (let i = 0; i < node.length; ++i) {
        if ( node[i].id != "saraksts"){
            node[i].remove();
        }
    }

}
function original_izvele(){
    var PeteraAtbilde = document.getElementById("PeteraInputs").value;
    if (PeteraAtbilde.length > 0){
        atbildes_saraksts.push(PeteraAtbilde);
        sakt()
    }
}

function orgianl_atblidle(jautajums){
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
    user-select: none;;
    `;
    div.innerHTML = `
    <center>
    <h2> ${jautajums} </h2>
        <input id = "PeteraInputs">
        <br>
        <br>
        <button onclick = "original_izvele()" style = "width: 80px; height: 30px;">
        Iesniegt !
        </button>
    </center>
    `
    speles_virsma.appendChild(div);

}

function uzlikt_visus_elementus() {
    switch (atbildes_saraksts[0]) {
        case 0:
            uzlikt_elementu("peteris.png", 340, 70, 1, "pet");
            uzlikt_elementu('klavieres.png',420,70,0,"iz0");
            break;
        case 1:
            uzlikt_elementu("peteris.png", 340, 250, 1, "pet");
            uzlikt_elementu('dators.png',420,250,0,"iz1");
            break;
        case 2:
            uzlikt_elementu("peteris.png", 340, 450, 1, "pet");
            uzlikt_elementu('rakete.png',420,450,0, "iz2");
            break;
    }
}

function sakt(){
    jautajuma_nummurs = atbildes_saraksts.length;
    switch (jautajuma_nummurs) {
        case 0:
            console.log("Lets go!");
            //Sakartot skatuvi//
            uzlikt_elementu('peteris.png',50,240,0,"pet");
            uzlikt_elementu('klavieres.png',420,70,0,"iz0");
            uzlikt_elementu('dators.png',420,250,0,"iz1");
            uzlikt_elementu('rakete.png',420,450,0, "iz2");
            uzlikt_elementu('bulta0.png',100,220,0, "b0");
            uzlikt_elementu('bulta0.png',100,320,30, "b1");
            uzlikt_elementu('bulta0.png',100,120,-30, "b2");
            //Sakartot skatuvi//
            var Jaut0_jaut = "Ko Pēterim radīt?"
            var Jaut0_atb = ["Klavieru skaņdarbu", "Datorprogrammu", "Raķeti"]
            uzlikt_jautajumu(Jaut0_jaut, Jaut0_atb);
            break;
        case 1:
            var Jaut1_jaut = ""
            izdzest_visu();
            uzlikt_elementu('peteris.png',50,240,0,"pet");
            switch(atbildes_saraksts[0]){
                case 0:
                    uzlikt_elementu('klavieres.png',420,70,0,"iz0");
                    kustinat_elementu("pet", 340, 70, 1);
                    Jaut1_jaut = "Kā nosaukt Pētera klavieru skaņdarbu?";
                    break;
                case 1:
                    uzlikt_elementu('dators.png',420,250,0,"iz1");
                    kustinat_elementu("pet", 340, 250, 1);
                    Jaut1_jaut = "Kā nosaukt Pētera Datorprogrammatūru?";
                    break;
                case 2:
                    uzlikt_elementu('rakete.png',420,450,0, "iz2");
                    kustinat_elementu("pet", 340, 450, 1);
                    Jaut1_jaut = "Kā nosaukt Pētera Starpkontinentālo balistisko ieroci?"
                    break;
                }       
            orgianl_atblidle(Jaut1_jaut)
            break;
        case 2:
            izdzest_visu()
            var Jaut2_jaut = "Vai Pēterim dokumentēt \"" + atbildes_saraksts[1] + "\" izstrādes procesu?"
            var Jaut2_atb = ["Jā", "Nē"]
            uzlikt_jautajumu(Jaut2_jaut, Jaut2_atb)
            uzlikt_visus_elementus()
            break;
        case 3:
            izdzest_visu()
            var jaut3_jaut = ""
            uzlikt_visus_elementus();
            if (atbildes_saraksts[2] == 0){
                x = parseInt(document.getElementById("pet").style.left) -100;
                y = parseInt(document.getElementById("pet").style.top) -50;
                uzlikt_elementu("camera2.png", x, y, 0, "camera");
            }
            switch (atbildes_saraksts[0]) {
                case 0:
                    jaut3_jaut = "Vai reģistrēt klavieru oriģināldarbu \"" + atbildes_saraksts[1] + "\" autortiesību birojā?";
                    break;
                case 1: 
                    jaut3_jaut = "Vai reģistrēt datorprogrammatūru \"" + atbildes_saraksts[1] + "\" autortiesību birojā?";
                    break;
                case 2:
                    jaut3_jaut = "Vai reģistrēt starpkontinentālo balistisko ieroci \"" + atbildes_saraksts[1] + "\" patentu birojā?";
                    break;
            }
            var jaut3_atb = ["Jā", "Nē"]
            uzlikt_jautajumu(jaut3_jaut, jaut3_atb)
            break;
        case 4:
                izdzest_visu();
                uzlikt_visus_elementus();
                if (atbildes_saraksts[3] == 0){
                    x = parseInt(document.getElementById("pet").style.left);
                    y = parseInt(document.getElementById("pet").style.top) -50;
                    uzlikt_elementu("folder.png", x, y, 0, "folder");
                    kustinat_elementu("folder", -100, -100);
                }
                uzlikt_elementu("dim.png", -100, 100, 0, "dim");
                jaut4_jaut_rakete = "Dmitrijs izmanto Pētera raķešu uzbūves shēmas, lai realizētu Ziemeļkorejas pasūtījumus.";
                jaut4_atb_rakete = ["Tiesāties", "Nospļauties"];
                jaut4_jaut_dators = "Dmitrijs izveido tehnoloģiju pakalpojumu uzņēmumu \"" + "Megasoft" + "\" kas izmanto Pētera datorprogrammatūru kā pamatu.";
                jaut4_atb_dators = ["Tiesāties", "Turpināt dzīvi izmantojot \" Megasoft \" pakalpojumus. "];
                jaut4_jaut_klavieres = "Dmitrijs savā kafejnīca atskaņo Pētera skaņdarbus.";
                jaut4_atb_klavieres = ["Palūgt, lai neatskaņo viņa skaņdarbus kafejnīcā", "Piedāvāt iegādāties tiesības darba atskaņošanai", "Demolēt kafejnīcu"];
                switch (atbildes_saraksts[0]) {
                    case 0:
                        uzlikt_jautajumu(jaut4_jaut_klavieres, jaut4_atb_klavieres)
                        kustinat_elementu("dim", 150, 350);
                        uzlikt_elementu("kafe.png", 100, 1000, 0, "kafe");
                        kustinat_elementu("kafe", 300, 250);
                        break;
                    case 1:
                        uzlikt_jautajumu(jaut4_jaut_dators, jaut4_atb_dators)
                        kustinat_elementu("dim", 200, 100);
                        uzlikt_elementu("megasoft.png", 230, -300, 0, "zime");
                        kustinat_elementu("zime", 300, 100);
                        break;
                    case 2:
                        uzlikt_jautajumu(jaut4_jaut_rakete, jaut4_atb_rakete)
                        kustinat_elementu("dim", 200, 100);
                        uzlikt_elementu("facto.png", 300, -300, 0, "facto");
                        kustinat_elementu("facto", 300, 60);
                        
                        break;
                }
                break;
        case 5:
                izdzest_visu();
                switch(atbildes_saraksts[0]) {
                    case 0:
                        switch (atbildes_saraksts[4]) {
                            case 0:
                                uzlikt_jautajumu("Dmitrijs beidz atskaņot Pētera skaņdarbus kafejnīcā.");
                                uzlikt_elementu("ok_beidz.png", 0, 50, 0);
                                break;
                            case 1:
                                uzlikt_jautajumu("Dmitrijs nopērk Pētera darba astkaņošanas tiesības, Pēteris nopelna.")
                                uzlikt_elementu("nauda_beigas_klav.png", 0, 50, 0);
                                break;
                            case 2:
                                uzlikt_jautajumu("Pēteris tiek noķerts, pārkāpjot krimināllikumu 185. pantu, par bojājumiem tiek pieprasīta samaksa, ko viņš nevar samaksāt, Pēterim tiek atņemta brīvība uz 2 gadiem.")
                                uzlikt_elementu("cietums.png", 0, 50, 0);
                                break;
                        }
                        break;
                    case 1: 
                        switch (atbildes_saraksts[4]) {
                            case 0:
                                switch (atbildes_saraksts[2]) {
                                    case 0: 
                                        uzlikt_jautajumu("Pēteris UZVAR pateicoties pierādījumiem par izstrādes procesu!");
                                        uzlikt_elementu("tiesa_uzvara.png", 0, 120, 0);
                                        break;
                                    case 1:
                                        uzlikt_jautajumu("Tiesas process notiek ar vilcināšanos, jo Pēterin ir sarežģīti pierādīt savas autortiesības uz datorprogrammatūru.")
                                        uzlikt_elementu("tiesa_uzvara_velak.png", 0, 120, 0);
                                        break;
                                }
                                break;
                            case 1:
                                uzlikt_jautajumu("Pēteris sēž krēslā, neko nedara...");
                                uzlikt_elementu("kresls.png", 30, 120, 0);
                                break;
                        }
                        break;
                    case 2:
                        switch (atbildes_saraksts[4]) {
                            case 0:
                                switch (atbildes_saraksts[3]) {
                                    case 0:
                                        uzlikt_jautajumu("Pēteris uzvar tiesas procesu, jo iepriekš bija patentējis raķešu uzbūves shēmas, apstādina eksportu uz Ziemeļkoreju.")
                                        uzlikt_elementu("nuke.png", 20, 50,0, "nuke")
                                        break;
                                    case 1:
                                        uzlikt_jautajumu("Tā kā Pēteris nebija patentējis savu raķeti, viņš zaudē tiesas procesu un dzīvo stacijas laukumā \"Origo\".");
                                        uzlikt_elementu("origo.png", 20, 50, 0);
                                        break;
                                }
                                break;
                            case 1:
                                uzlikt_jautajumu("Pēteris saglabā nervu šūnas, plunčājas pludmalē!");
                                uzlikt_elementu("pludmale.png", 100, 100, 0, "p");
                                break;
                        }
                    break;
                }
            break;
    }
}
