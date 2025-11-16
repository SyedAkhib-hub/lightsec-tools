// Password Strength Example
function calcEntropy(pwd) {
    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^A-Za-z0-9]/.test(pwd)) pool += 32;
    return pwd.length * Math.log2(pool || 1);
}

const breachedList = ["123456","password","qwerty","111111","123123","abc123","dragon"];

function crackTime(entropy) {
    const guessesPerSecond = 1e10;
    let seconds = Math.pow(2, entropy) / guessesPerSecond;
    const units = [
        {label:"years", value:60*60*24*365},
        {label:"days", value:60*60*24},
        {label:"hours", value:60*60},
        {label:"minutes", value:60},
        {label:"seconds", value:1}
    ];
    for (let u of units) {
        if (seconds >= u.value) return (seconds/u.value).toFixed(2) + " " + u.label;
    }
    return "<1 second";
}

function checkStrength(inputId, outId, extraId){
    let pwd = document.getElementById(inputId).value;
    let ent = calcEntropy(pwd);
    let score = ent<28?1:ent<36?2:ent<60?3:ent<80?4:5;
    let breached = breachedList.includes(pwd)?"⚠ Found in breaches":"✔ Not found";
    let crack = crackTime(ent);
    document.getElementById(outId).innerHTML = `<b>Entropy:</b> ${ent.toFixed(2)} bits <br> <b>Strength:</b> ${score}/5`;
    document.getElementById(extraId).innerHTML = `<b>Crack Time:</b> ${crack} <br> <b>Breach Check:</b> ${breached}`;
}

// You can add base64, hash, ROT functions here similarly
