console.log(document.getElementById("id1"));
let h1cont = document.getElementById("id2")
console.log(h1cont.innerHTML);

h1cont.innerHTML += "I am Edited content"

function clickHandler(){
    document.getElementById("id2").innerHTML = "Now i am changed to this new line "

}

function optionfruit(select){
    var a = select.selectedIndex;
    var fav = select.options[a].value;
    if(a==0){
        alert("Please Select a fruit");
    }else{
        document.write("your fav Fruit is "+fav)
    }
}