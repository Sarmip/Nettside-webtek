
function bunntekst() {
    if (height < screen.height) {
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.bottom = "0";
        document.getElementById("footer").style.left = "0";
        document.getElementById("footer").style.right = "0";
    }
}

bunntekst();
