//console.log(document.querySelectorAll("#projects .cItem"))

const allCItems = document.querySelectorAll("#projects .cItem")
//console.log(allCItems)

// wyciagamy każdy cItem osobno

allCItems.forEach( cItem => {
    //console.log(cItem)
    //kazdemu po kliknieciu dodajemy funkcje strzałkową

    cItem.addEventListener("mouseover", () =>{
    
        allCItems.forEach( cItem  => {
           
           cItem.classList.remove("active")
        
        })
  
        cItem.classList.add("active") 
    })
})


// COOCIES

    document
    .querySelector(".coocies button")
    .onclick = e =>{
    
   // console.log(e.target.parentElement)
        e.target.parentElement.remove(); 
    }   

    //cItem.onclick = () => {
        
    
//console.log(cItem.classList)


//document.querySelectorAll("#projects .cItem").forEach( cItem => {
//   console.log(cItem)
//})

//console.log([cItem]) - jeżeli chce sprawdzić to wrzucam do konsoli i sprawdzam obiekty



