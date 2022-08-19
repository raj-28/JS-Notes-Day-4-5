
function notifyme(){
    alert('u will see notification Next')

    Notification.requestPermission()
    .then((userPermission)=> {
        console.log(userPermission);
        if(userPermission === 'default'){
            alert('please provide permission')
        }else{
            new Notification('New Mail',{body: 'Hello You won A lottery'})
        }
    })
}