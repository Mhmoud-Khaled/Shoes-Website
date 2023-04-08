let imgUrl = document.getElementById("large-img")


function getImgURL(event) {
    let url = event.target.attributes.src.value
    imgUrl.setAttribute("src", url)
}
