function upDate(previewPic) {
    console.log("Hovered over image:", previewPic.alt, previewPic.src);
    document.getElementById("image").innerText = previewPic.alt;
    document.getElementById("image").style.backgroundImage = `url('${previewPic.src}')`;
}
function undo() {
    document.getElementById("image").innerText = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").style.color = "pink";
    document.getElementById("image").style.fontSize = "25px";
}
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("mouseover", function() {
        document.getElementById("image").style.color = "yellow";
        document.getElementById("image").style.fontSize = "100px";
        upDate(thumbnail);
    });
    thumbnail.addEventListener("mouseout", undo); 
});