function visGruppe() {
    var valgt = document.getElementById("tips_valg")
    var kategori = valgt.options[valgt.selectedIndex].value // Hvilken kategori som har blitt valgt

    // FIKS: Bildene havner under når man velger en kategori
    var sections = document.getElementsByTagName("section")
    for (i = 0; sections.length; i++) {
        if (sections[i].classList.contains(kategori)) {
            sections[i].style.display = "inline-flex"
        } else {
            sections[i].style.display = "none"
        }
    }    
}