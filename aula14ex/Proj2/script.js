function musication() {
    var musica = document.getElementsByName('musica')
    var remoto = document.getElementById('tagplayer')
    var botaotoca = document.getElementById('botaodeplay')

    if (musica[0].checked){
        botaotoca.src = '01AncientWinds.mp3'
        remoto.src = '01AncientWinds.mp3'
    }else if (musica[1].checked) {
        botaotoca.src = '02HereIAm.mp3'
        remoto.src = '02HereIAm.mp3'
    }else if (musica[2].checked) {
        botaotoca.src = '03DistantThunder.mp3' 
        remoto.src = '03DistantThunder.mp3' 
    }else if (musica[3].checked) {
        botaotoca.src = '04ForTomorrow.mp3'
        remoto.src = '04ForTomorrow.mp3'
    }else if (musica[4].checked) {
        botaotoca.src = '09Ritual.mp3'
        remoto.src = '09Ritual.mp3'
    }

}