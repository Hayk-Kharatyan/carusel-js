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



document.querySelector(".right").addEventListener("click", function () {
    if (i < arrImg.length - 1 ) {

        i++

    }
    else {
        i = 0
    }

    document.querySelector(".img1").src = arrImg[i]
})