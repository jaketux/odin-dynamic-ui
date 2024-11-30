function dropDownModule(){
    const dropDownSecondItems = document.querySelectorAll('.dropdown-second')
    const dropDownThirdItems = document.querySelectorAll('.dropdown-third')
    const dropDownArrows = document.querySelectorAll('.dropdown-arrow')


    for (let i = 0; i <dropDownArrows.length; i++){
        dropDownArrows[i].addEventListener('click', function(){
        if (dropDownSecondItems[i].classList.contains("visible"))
        {dropDownSecondItems[i].classList.remove("visible")
        } else if (!dropDownSecondItems[i].classList.contains("visible")){
            dropDownSecondItems[i].classList.add("visible")
        }
        if (dropDownThirdItems[i].classList.contains("visible"))
        {dropDownThirdItems[i].classList.remove("visible")
        } else if (!dropDownThirdItems[i].classList.contains("visible")){
            dropDownThirdItems[i].classList.add("visible")
        }
        })
    }
    console.log(dropDownSecondItems[0].classList)
}




dropDownModule()