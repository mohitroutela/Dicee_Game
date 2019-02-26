
var a
a=Math.ceil(Math.random()*(5)+1);
var b;
b=Math.ceil(Math.random()*(5)+1);
document.querySelector("img.img1").setAttribute("src","images/dice"+a+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+b+".png");
if(a>b)
{
  document.querySelector("h1").innerText="Player 1 Wins";
}
else if (a<b) {
  document.querySelector("h1").innerText="Player 2 Wins";
}
else
{
  document.querySelector("h1").innerText="Draw !!!";
}
