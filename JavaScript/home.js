function dropDown(index){

    let box = document.querySelectorAll('.drop-menu')[index]
    
    if(box.offsetHeight == 0){
        box.style.height = '461px'
    }else {
        box.style.height = '0px'
    }

}

function getNameLink(link) {
    let title = document.querySelector('#last');

    text = link.innerText 

    title.innerText = title


}

function start(x) {
    setTimeout(getNameLink(x), 1000);

}








