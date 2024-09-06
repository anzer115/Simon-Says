let gameSeq=[] ;
let userSeq=[] ;

let btns = ["yellow", "purple", "red" , "green"] ;
let started = false ;
let level = 0 ;
let h2 = document.querySelector("h2") ;


document.addEventListener("keypress", function()
{   if(started==false)
    {
    console.log("Game Started") ;
    started=true ;
    }
    levelup() ;
}) ;

function gameFlash(btn)
{
btn.classList.add('flash') ;
setTimeout(function(){
    btn.classList.remove('flash')
} , 250) ;
}

function userflash(btn)
{
btn.classList.add("userFlash") ;
setTimeout(function(){
    btn.classList.remove("userFlash")
} , 250) ;
}

function levelup(){
    userSeq=[] ; //jese hi level up hoga wese hi shuru se color pick krne padenge
    level++ ;
    h2.innerText = `Level ${level}` ;
    //random btn choose
    let randomidx = Math.floor(Math.random()*4);
    let randomcolor= btns[randomidx] ;
    let randombtn = document.querySelector(`.${randomcolor}`) ;
    gameSeq.push(randomcolor) ;
    gameFlash(randombtn) ;

}

function checkAns(idx){
    console.log("curr level", level) ;
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length== gameSeq.length)
        {
            setTimeout(levelup,1000) ;
        }

    }
    else{
        document.querySelector("body").style.backgroundColor="red" ;
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key` ;
        reset() ;
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white" ;},150) ;
    }
}

function btnpress(){
    let btn = this ;
    userflash(btn) ;
    let userColor = btn.getAttribute("id") ;
    console.log(userColor) ;
    userSeq.push(userColor) ;
    checkAns(userSeq.length-1) ; //last color ko track kiya

}
let allbtns = document.querySelectorAll(".btn") ;
for(btn of allbtns)
{
    btn.addEventListener("click", btnpress) ;
}

function reset()  //to reset after game is over
{
    started = false ;
    gameSeq = [] ;
    userSeq = [] ;
    level=0 ;
}