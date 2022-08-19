function save(){
    let useString = document.getElementById('item-list').ariaValueMax;
    sessionStorage.setItem('my-data',useString);
}

function remove(){
    console.log("remove")
    sessionStorage.removeItem("my-data");
}

function display(){
    console.log('display');
    let datastring = sessionStorage.getItem('my-data');
    console.log(datastring);
    document.getElementById('data').innerHTML= "<li>${datastring}</li>"
}