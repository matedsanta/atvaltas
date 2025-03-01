const DecimalToBinary = (num) => {
    let binarisSzam = "";

    while (num !== 0) {
        binarisSzam = (num % 2).toString() + binarisSzam;
        num = Math.floor(num / 2);
    }

    return binarisSzam || "0";
};

const BinaryToDecimal = (num) => {
    let decimalisSzam = 0;
    let hatvany = 0;

    while (num > 0) {
        const utolsoSzamjegy = num % 10;
        decimalisSzam += utolsoSzamjegy * Math.pow(2, hatvany);
        num = Math.floor(num / 10);
        hatvany++;
    }

    return decimalisSzam;
};

const DecimalToOctal = (num) => {
    let oktalisSzam = "";

    while (num !== 0) {
        oktalisSzam = (num % 8).toString() + oktalisSzam;
        num = Math.floor(num / 8);
    }

    return oktalisSzam || "0";
};

const OctalToDecimal = (num) => {
    let decimalisSzam = 0;
    let hatvany = 0;

    while (num > 0) {
        const utolsoSzamjegy = num % 10;
        decimalisSzam += utolsoSzamjegy * Math.pow(8, hatvany);
        num = Math.floor(num / 10);
        hatvany++;
    }

    return decimalisSzam;
};

const DecimalToHexadecimal = (num) => {
    let hexadecSzam = "";

    while (num !== 0) {
        const utolsoSzamjegy = num % 16;
        hexadecSzam =
            (utolsoSzamjegy < 10
                ? utolsoSzamjegy
                : String.fromCharCode(utolsoSzamjegy + 55)) +
            hexadecSzam;
        num = Math.floor(num / 16);
    }

    return hexadecSzam || "0";
};

const HexadecimalToDecimal = (num) => {
    let decimalisSzam = 0;
    let hatvany = 0;

    num = num.toUpperCase(); // Nagybetűssé alakítás

    while (num.length > 0) {
        const utolsoKarakter = num[num.length - 1];
        let utolsoSzamjegy;

        if (utolsoKarakter >= "0" && utolsoKarakter <= "9") {
            utolsoSzamjegy = parseInt(utolsoKarakter, 10);
        } else if (utolsoKarakter >= "A" && utolsoKarakter <= "F") {
            utolsoSzamjegy = utolsoKarakter.charCodeAt(0) - 55; // A=10, B=11, ..., F=15
        } else {
            warn();
            return null;
        }

        decimalisSzam += utolsoSzamjegy * Math.pow(16, hatvany);
        num = num.slice(0, -1); // Az utolsó karakter eltávolítása
        hatvany++;
    }

    return decimalisSzam;
};

valtasGomb.addEventListener("click", () => {
    const bemenetiElem = document.querySelector(`datalist option[value="${eredeti.value}"]`);
    const kimenetiElem = document.querySelector(`datalist option[value="${kimeneti.value}"]`);

    if (bemenetiElem && kimenetiElem) {
        const bemenetId = parseInt(bemenetiElem.dataset.id, 10);
        const kimenetId = parseInt(kimenetiElem.dataset.id, 10);
        let szam = beszam.value;

        if (bemenetId === 1 || bemenetId === 4) {
            szam = parseInt(szam, 10);
        }

        if (isNaN(szam) && bemenetId !== 2) {
            warn();
            return;
        }

        switch (bemenetId) {
            case 1: // Decimális
                break;
            case 2: // Hexadecimális
                szam = HexadecimalToDecimal(szam);
                break;
            case 3: // Oktális
                szam = OctalToDecimal(parseInt(szam, 10));
                break;
            case 4: // Bináris
                szam = BinaryToDecimal(parseInt(szam, 10));
                break;
            default:
                warn();
                return;
        }

        switch (kimenetId) {
            case 1: // Decimális
                kiszam.value = szam;
                break;
            case 2: // Hexadecimális
                kiszam.value = DecimalToHexadecimal(szam);
                break;
            case 3: // Oktális
                kiszam.value = DecimalToOctal(szam);
                break;
            case 4: // Bináris
                kiszam.value = DecimalToBinary(szam);
                break;
            default:
                warn();
                return;
        }
    } else {
        warn();
    }
});

const csereGomb = document.getElementById("cseregomb");

csereGomb.addEventListener('click', () => {
    const bemenetiElem = document.querySelector(`datalist option[value="${eredeti.value}"]`);
    const kimenetiElem = document.querySelector(`datalist option[value="${kimeneti.value}"]`);
    document.getElementById("eredeti").value = kimenetiElem.value;
    document.getElementById("kimeneti").value = bemenetiElem.value;
    const beszam_eredeti = beszam.value;
    const kiszam_eredeti = kiszam.value;
    beszam.value = kiszam_eredeti
    kiszam.value = beszam_eredeti
});


const root = document.querySelector(':root');

var szin = 0 


const szinek = {
    rozsaszin: {
        hatter: 'linear-gradient(to bottom right, #830a5a, #db44c4)',
        szoveg: '#531a4a',
        szin1: '#ee3ab850',
        szin2: '#ae16a1',
        szin3: '#b832ab',
        gomb: 'src/switch-zold.png'
    },
    zold: {
        hatter: 'linear-gradient(to bottom right, #29a5bbff, #169f72)',
        szoveg: '#105653',
        szin1: '#3aeeb850',
        szin2: '#16aea1',
        szin3: '#32b8ab',
        gomb: 'src/switch-zold.png'
    },
    kek: {
        hatter: 'linear-gradient(to bottom right, #196bbd, #1192c5)',
        szoveg: '#142569',
        szin1: '#5c8fff50',
        szin2: '#314aad',
        szin3: '#29359e',
        gomb: 'src/switch-zold.png'
    }
};

const body = document.querySelector('body');
const csereicon = document.querySelector('#csico');
const switchColors = () => {
    
    const szinKulcsok = Object.keys(szinek)
    if (szin + 1 < szinKulcsok.length) {
        szin++;
    } else {
        szin = 0; 
    }

    const kovSzin = szinek[szinKulcsok[szin]]

    root.style.setProperty('--hatter', kovSzin.hatter)
    root.style.setProperty('--szin-szoveg', kovSzin.szoveg)
    root.style.setProperty('--szin-1', kovSzin.szin1)
    root.style.setProperty('--szin-2', kovSzin.szin2)
    root.style.setProperty('--szin-3', kovSzin.szin3)
    
    csereicon.src = kovSzin.gomb

}
//Színcsere gomb hozzáadása
var colorswitch = document.querySelector("#szinvalto")
/* document.body.appendChild(colorswitch); */

colorswitch.addEventListener('click', () => {switchColors()})

document.querySelector('#beszam').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        valtasGomb.click();
    } else if (event.key === "Tab") {
        event.preventDefault();
        csereGomb.click();
    }
});


switchColors()

const warn = () => {
    var warning_parent = document.createElement("div");
    warning_parent.id = "warningparent";
    document.body.appendChild(warning_parent);

    var warning = document.createElement("div");
    warning.id = "warning";
    warning.innerHTML = "Érvénytelen bemenet!";
    warning_parent.appendChild(warning);

    
    var close = document.createElement("button")
    close.innerHTML = "Bezárás"
    warning.appendChild(close)

    colorswitch.disabled = true
    close.onclick = () => {
        document.body.removeChild(warning_parent);
        colorswitch.disabled = false
    }
}

