function getData(){
    alert("we will get data Soon")

    const xhr = new XMLHttpRequest();

    const url = "http://127.0.0.1:5500/Day%204-5/data.json"
    xhr.open('GET',url);

    xhr.onload = () =>{
        console.log('loaded the data')
        console.log(xhr.responseText)

        let objdata = JSON.parse(xhr.responseText)
        console.log(objdata)

        for (let key in objdata){
            let dl = document.createElement('dl');
            let dt = document.createElement('dt');
            dt.innerHTML = `${key}`

            let dd = document.createElement('dd')
            dd.innerHTML = `${objdata[key]}`;

            dl.appendChild(dt);
            dl.appendChild(dd);

            document.getElementById("data").appendChild(dl);
        }
    };

    xhr.send();
}