var count = 1;
function fill(control)
{
    if(count<=9) { //this give only 9 chance to play the game
    if (count%2!==0) //by every click the element must change
    {
        document.getElementById(control.id).innerHTML='X';  //element should print
    }else{
    document.getElementById(control.id).innerHTML='O';
    }
    count ++; //it will increase the count no.
    if(checkWin())  //give the alert that one player has won the game
    {
        alert("Winner")
        reset();
    }
    }else {  //there is no place to play again lets restart the game
        alert ("Match Draw");
        reset();
    }
}
function reset () //in reset the all block should become empty
{ for(var i=1;i<=9;i++)
    {
        document.getElementById('div'+i).innerHTML=''; //we make the block null and count must return to 1
    }
    count=1;
}
function checkWin() //possibilities by which game can win with same element
{
   if(checkCondition('div1', 'div2', 'div3') || checkCondition('div4', 'div5', 'div6') || checkCondition('div7', 'div8', 'div9') || checkCondition('div1', 'div4', 'div7') ||
   checkCondition('div5', 'div2', 'div8') || checkCondition('div6', 'div9', 'div3') || checkCondition('div1', 'div5', 'div9') || checkCondition('div5', 'div7', 'div3'))
   {return true}
}
function checkCondition(div1, div2, div3) //winning condition is that a streight line must contain same icon
{
    if (getData(div1)!=""&& getData(div2)!=""&& getData(div3)!=""&& getData(div1)==getData(div2)&& getData(div2)==getData(div3))
    {
        return true; 
    }
}
function getData(div) //this function to just reduce the line of codes that in check condition we call this function
{
    return document.getElementById(div).innerHTML;
}