let imageBack = document.getElementById('image')
let Like = document.getElementById('like')
let buttonColor = document.getElementById('buttoncolor')
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        Like.style.color = '#0967d2'
        buttonColor.style.backgroundColor = "#0967d2"
        buttonColor.style.color = "#ffffff"
        imageBack.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png'
        isImageLiked = true;

    } else {
        imageBack.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png'
        Like.style.color = '#cbd2d9'
        buttonColor.style.backgroundColor = "#cbd2d9"
        buttonColor.style.color = "#9aa5b1"
        isImageLiked = false;



    }
}