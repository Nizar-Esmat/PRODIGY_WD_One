window.onscroll = function(){
    var nav = document.getElementById('nav')
    if(document.body.scrollTop >20 || document.documentElement.scrollTop>20 ){
        nav.style.backgroundColor = "#555";
    }else{
        nav.style.backgroundColor = "#333"
    }
}