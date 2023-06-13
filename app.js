let arrImg = ["img1.jpg", "img2.jpg", "img3.jpg"]
let i = 0

document.querySelector(".left").addEventListener("click", function () {
    if (i > 0) {

        i--

    }

    else {
        i = arrImg.length-1
    }

    document.querySelector(".img1").src = arrImg[i]

})



function rightclick(){
   

    if(i<arrImg.length - 1 ){
    
    i++

    
    }
    
    
    else{
       
        i = 0

    }
    
   document.querySelector(".img1").src = arrImg[i]  
   document.querySelector(".p").innerHTML= i + 1
}

let rightbtn = document.querySelector(".right")

rightbtn.addEventListener("click",function(){
    rightclick()
 })
 
 setInterval(rightclick, 3000);

let mini_images=document.querySelectorAll(".images")
let bigimg = document.querySelector(".img1")
let toggle1 = document.querySelector("#toggle1")
let toggle2 = document.querySelector("#toggle2")
let toggle3 = document.querySelector("#toggle3")
for(let j = 0; j<mini_images.length;j++){

    mini_images[j].addEventListener("click",function(){
        let src = this.src
        let id = this.id
        bigimg.src=src

        if(id==="toggle1"){
            toggle1.classList.add("checkedimage")
            toggle2.classList.remove("checkedimage")
            toggle3.classList.remove("checkedimage")
        }

        
        if(id==="toggle2"){
            toggle2.classList.add("checkedimage")
            toggle1.classList.remove("checkedimage")
            toggle3.classList.remove("checkedimage")
        }

        
        if(id==="toggle3"){
            toggle3.classList.add("checkedimage")
            toggle1.classList.remove("checkedimage")
            toggle2.classList.remove("checkedimage")
        }
    })

}





