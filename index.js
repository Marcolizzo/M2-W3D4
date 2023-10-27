// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const cambioTitolo = function () {
    let h1 = document.querySelector("h1")
    let originalText = "Marco's Shop"
    let newText = "Negozio di Marco"
    if (h1.innerText === originalText) {
        h1.innerText = newText
    } else {
        h1.innerText = originalText
    }

    // cambio anche il nome del negozio che si trova in fondo alla pagina
    document.querySelector(".nome_negozio").innerText = h1.innerText
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
const cambioSfondo = function () {
    const sfondo = document.querySelector("body")
    sfondo.classList.toggle("colore_sfondo")
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
const cambioIndirizzo = function () {
    let indirizzo = document.querySelector(".indirizzo_negozio")
    let original = "Via Giuseppe Garibaldi, 91234 Musterstadt"
    let nuovo = "Via Napoleone, 72323 Stuttgart"
    if (indirizzo.innerText === original) {
        indirizzo.innerText = nuovo
    } else {
        indirizzo.innerText = original
    }
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
const classe = function () {
    const tutteLeA = document.querySelectorAll("a")

    for (let i = 0; i < tutteLeA.length; i++) {
        const singoleA = tutteLeA[i]
        singoleA.classList.add("link")
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
const visibility = function () {
    const tutteLeImmagini = document.querySelectorAll("img")
    for (i = 0; i < tutteLeImmagini.length; i++) {
        const singoleImmagini = tutteLeImmagini[i]
        singoleImmagini.classList.toggle("visibility")
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
const colorePrezzo = function () {
    const tuttiIPrezzi = document.querySelectorAll(".prezzo")

    for (i = 0; i < tuttiIPrezzi.length; i++) {
        tuttiIPrezzi[i].style = `color: rgb(
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)} )`
    }
}