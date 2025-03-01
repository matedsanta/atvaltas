// Színváltó gomb működése
const szinvalto = document.getElementById("szinvalto");
const root = document.querySelector(':root');

const szinek = {
    rozsaszin: {
        hatter: 'linear-gradient(to bottom right, #830a5a, #db44c4)',
        szoveg: '#531a4a',
        szin1: '#ee3ab850',
        szin2: '#ae16a1',
        szin3: '#b832ab',
    },
    zold: {
        hatter: 'linear-gradient(to bottom right, #29a5bbff, #169f72)',
        szoveg: '#105653',
        szin1: '#3aeeb850',
        szin2: '#16aea1',
        szin3: '#32b8ab',
    },
    kek: {
        hatter: 'linear-gradient(to bottom right, #196bbd, #1192c5)',
        szoveg: '#142569',
        szin1: '#5c8fff50',
        szin2: '#314aad',
        szin3: '#29359e',
    }
};

let szin = 0;

const switchColors = () => {
    const szinKulcsok = Object.keys(szinek);
    if (szin + 1 < szinKulcsok.length) {
        szin++;
    } else {
        szin = 0;
    }

    const kovSzin = szinek[szinKulcsok[szin]];

    root.style.setProperty('--hatter', kovSzin.hatter);
    root.style.setProperty('--szin-szoveg', kovSzin.szoveg);
    root.style.setProperty('--szin-1', kovSzin.szin1);
    root.style.setProperty('--szin-2', kovSzin.szin2);
    root.style.setProperty('--szin-3', kovSzin.szin3);
};

szinvalto.addEventListener('click', switchColors);

// Ellenőrzés gomb működése
const ellenorzesGomb = document.getElementById("ellenorzes");

if (ellenorzesGomb) {
    ellenorzesGomb.addEventListener("click", () => {
        console.log("Ellenőrzés gomb megnyomva!"); // Konzol naplózás

        const feladat1 = document.getElementById("feladat1").value.trim();
        const feladat2 = document.getElementById("feladat2").value.trim();
        const feladat3 = document.getElementById("feladat3").value.trim();

        console.log("Feladat 1 válasza:", feladat1); // Konzol naplózás
        console.log("Feladat 2 válasza:", feladat2); // Konzol naplózás
        console.log("Feladat 3 válasza:", feladat3); // Konzol naplózás

        let helyesValaszok = 0;

        if (window.location.pathname.includes("decimalis.html")) {
            if (feladat1 === "1111") {
                alert("1. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("1. feladat hibás! A helyes válasz: 1111");
            }
            if (feladat2 === "31") {
                alert("2. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("2. feladat hibás! A helyes válasz: 31");
            }
            if (feladat3 === "FF") {
                alert("3. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("3. feladat hibás! A helyes válasz: FF");
            }
        } else if (window.location.pathname.includes("binaris.html")) {
            if (feladat1 === "13") {
                alert("1. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("1. feladat hibás! A helyes válasz: 13");
            }
            if (feladat2 === "52") {
                alert("2. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("2. feladat hibás! A helyes válasz: 52");
            }
            if (feladat3 === "F0") {
                alert("3. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("3. feladat hibás! A helyes válasz: F0");
            }
        } else if (window.location.pathname.includes("oktalis.html")) {
            if (feladat1 === "10") {
                alert("1. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("1. feladat hibás! A helyes válasz: 10");
            }
            if (feladat2 === "11110") {
                alert("2. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("2. feladat hibás! A helyes válasz: 11110");
            }
            if (feladat3 === "3F") {
                alert("3. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("3. feladat hibás! A helyes válasz: 3F");
            }
        } else if (window.location.pathname.includes("hexadecimalis.html")) {
            if (feladat1 === "47") {
                alert("1. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("1. feladat hibás! A helyes válasz: 47");
            }
            if (feladat2 === "1001101") {
                alert("2. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("2. feladat hibás! A helyes válasz: 1001101");
            }
            if (feladat3 === "33") {
                alert("3. feladat helyes!");
                helyesValaszok++;
            } else {
                alert("3. feladat hibás! A helyes válasz: 33");
            }
        }

        if (helyesValaszok === 3) {
            alert("Gratulálok, minden feladatot helyesen oldottál meg!");
        }
    });
} else {
    console.error("Az 'ellenorzes' gomb nem található!"); // Hibanaplózás
}