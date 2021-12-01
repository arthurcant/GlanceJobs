function dropDown(index){

    let box = document.querySelectorAll('.drop-menu')[index]
    
    if(box.offsetHeight == 0){
        box.style.height = '461px'
    }else {
        box.style.height = '0px'
    }

}









