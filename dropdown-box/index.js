function dropDownModule(){
    const dropDownItems = document.querySelectorAll('.dropdown-items')
    const dropDownArrows = document.querySelectorAll('.dropdown-arrow')


    for (let i = 0; i <dropDownArrows.length; i++){
        dropDownArrows[i].addEventListener('click', function(){
        if (dropDownItems[i].classList.contains("visible"))
        {dropDownItems[i].classList.remove("visible")
        } else if (!dropDownItems[i].classList.contains("visible")){
            dropDownItems[i].classList.add("visible")
        }
        })
    }
    console.log(dropDownItems[0].classList)
}




dropDownModule()