function setup (){
    let i=0
    while(i<numUnicorns){
        //create a unicorn

        //document.getElementById("unicorn0")


        //{make:"ford",model:"fiesta",mileage:30000}
        //document.createElement()
        //element.appendChild <-- You can append to *any* element (including ones you just created)
        //element.classList.add("someClass")
        //element.innerHTML = "something"/someVariable


        let u = {}        
        u.div = document.createElement("div")
        document.body.appendChild(u.div)
        u.div.classList.add("unicorn")
        u.div.style.top= i * 6 +"%"                    
        
        u.x=0
        u.color= "blue"
        u.div.style.backgroundColor="blue"

        unicorns[i]=u

        i++
    }
}

function resetRace(){
 
    let i=0
    while(i<numUnicorns){
        unicorns[i].x=0
        i++
    }
 }


 function moveUnicorns(){

    let i=0
    while(i<numUnicorns){
        unicorns[i].div.style.left= unicorns[i].x +"%"
        unicorns[i].x += Math.random() 

        if (unicorns[i].x>90){
            alert (`${colours[i]} unicorn wins the race`)
            resetRace()
        }

        i++
    }
    requestAnimationFrame(moveUnicorns)
}

