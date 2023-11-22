// memuzinho dos filo
var filo = document.getElementById('filo')
var filosofos = document.getElementById('filosofos')
filo.addEventListener('mousemove', function enter(){
    filosofos.style.height='40%'
})
filo.addEventListener('mouseout', function out(){
    filosofos.style.height='0'
})

// corzinha
var theme = document.getElementById('bnt_th');
function togmode() {
    document.body.classList.toggle('dark');
}
function loadtheme(){
    const darkmode = localStorage.getItem("dark")
    if(darkmode){
        togmode();
    }
}
loadtheme();
theme.addEventListener('click', function Mtheme(){
    togmode();
    localStorage.removeItem("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark",1)
    }
    if(theme.alt === '1'){
        theme.src = '/src/imgs/lua.png'
        theme.alt = '2'
    }else{
        theme.src = '/src/imgs/verao.png'
        theme.alt = '1'
    }
})

// $(document).ready(function() {
//     var largura = $(window).width();
//     if (largura <= 921) {
//     }
//     else if (tam >= 922) {
//     }
// }); 