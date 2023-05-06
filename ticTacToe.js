
var head1=document.getElementById("head1");
var div=document.querySelectorAll("div");
var st=document.getElementById("st");
var ipt1=document.getElementById("pl1");
var ipt2=document.getElementById("pl2");
var lb1=document.getElementById("lb1");
var mainC=document.getElementById("mainC");
// validity of name of players
function checkValid()
{
    var player1=document.getElementById("pl1").value;
    var player2=document.getElementById("pl2").value;
    if(player1=="" && player2=="")
    {
        st.disabled=true;
        head1.style.display="flex";
        head1.style.justifyContent="center";
        head1.innerHTML="Enter the player names first !!!";
        window.setTimeout(()=>{document.location.reload()},1000);
    }
    
}
var count=0;
    function clickCount()
    {
        count++;
        return count;
    }

var flag=1;
function startGame()
{
    
    alert(" The Game is Started Now !");
    st.disabled=true;
    var player1=document.getElementById("pl1").value;
    var player2=document.getElementById("pl2").value;
    // alert(player1);
    for(i=0;i<div.length;i++)
    {
        div[i].addEventListener("click",game,false);
    }
    
    head1.innerHTML=`${player1}'s turn now !`;
    resetButton();

    function game(event)
    {
        if(event.type=="click")
        {
            // hiding space aquired by heading 4
            head1.style.display="flex";
            head1.style.justifyContent="center";
            head1.style.margin="0";
            if(flag==1)
            {
                event.target.innerHTML="X";
                head1.innerHTML=`${player2}'s turn now !`; 
                flag=0;
                event.target.removeEventListener("click",game,false);    
            }
            else if(flag==0)
            {
                head1.innerHTML=`${player1}'s turn now !`; 
                event.target.innerHTML="0";
                flag=1;
                event.target.removeEventListener("click",game,false);
            }
                var d1=document.getElementById("d1").textContent;
                var d2=document.getElementById("d2").textContent;
                var d3=document.getElementById("d3").textContent;
                var d4=document.getElementById("d4").textContent;
                var d5=document.getElementById("d5").textContent;
                var d6=document.getElementById("d6").textContent;
                var d7=document.getElementById("d7").textContent;
                var d8=document.getElementById("d8").textContent;
                var d9=document.getElementById("d9").textContent;
            // var val=clickCount();
            var val=clickCount();
            // alert("val="+val);
            if(val>=5)
            {
                // for player 1
                if(d1=="X" && d2=="X" && d3=="X")
                { 
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d4=="X" && d5=="X" && d6=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d7=="X" && d8=="X" && d9=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d1=="X" && d4=="X" && d7=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d2=="X" && d5=="X" && d8=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d3=="X" && d6=="X" && d9=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d1=="X" && d5=="X" && d9=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }
                else if(d3=="X" && d5=="X" && d7=="X")
                {   
                    head1.innerHTML=`${player1} is a Winner !!!`;
                    alert(`${player1} is a Winner !!!`);
                    removeE();
                }

                  // for player 2
                  if(d1=="0" && d2=="0" && d3=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d4=="0" && d5=="0" && d6=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d7=="0" && d8=="0" && d9=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d1=="0" && d4=="0" && d7=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d2=="0" && d5=="0" && d8=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d3=="0" && d6=="0" && d9=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d1=="0" && d5=="0" && d9=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }
                else if(d3=="0" && d5=="0" && d7=="0")
                {   
                    head1.innerHTML=`${player2} is a Winner !!!`;
                    alert(`${player2} is a Winner !!!`);
                    removeE();
                }


                if(val==9)
                {
                    head1.innerHTML=`Please Click on reset to Restart the Game !!!`;
                }
            }
            
        }
    }
    function removeE()
    {
        for(i=0;i<div.length;i++)
        {
            div[i].removeEventListener("click",game,false);
        }
        
    }

}

// reset button creation
function resetButton()
{
    var btn=document.createElement("input");
    btn.setAttribute("type","reset");
    btn.setAttribute("onclick","gameReset()");
    var resLab=document.getElementById("reslab");
    resLab.appendChild(btn);
    resLab.style.display="flex";
    btn.style.height="35px";
    btn.style.borderRadius="8px";
    resLab.style.marginTop="0";
    st.style.display="none";


}

// reset game
function gameReset()
{
    location.reload();
}
