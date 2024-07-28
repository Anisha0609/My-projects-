let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');
const opentab=(tabname)=>{
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


let sidemeu = document.getElementById("sidemenu")
const openmenu=()=>{
    sidemeu.style.right = "0"
}
const closemenu=()=>{
    sidemeu.style.right = "-200px";
}




