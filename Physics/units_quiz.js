const readline = require("readline");

async function input(s) {
    process.stdout.write(s + "\n> ")
    const r = readline.createInterface({input:process.stdin});
    return new Promise(rs => {
        r.on("line", l=>{
            r.close()
            rs(l);
        })
    })
}
let units = {
    m: "meter",
    g: "gram",
    s: "second",
    A: "ampere",
    K: "degrees kelvin",
    mol: "mole",
    cd: "candela"
}
let prefs = {
    f: "femto",
    p: "pico",
    n: "nano",
    m: "milli",
    c: "centi",
    M: "mega",
    G: "giga",
    T: "tera",
    P: "peta"
}
let pows =  {
    f: -15,
    p: -12,
    n: -9,
    m: -3,
    c: -2,
    M: 6,
    G: 9,
    T: 12,
    P: 15
}

async function units_quiz() {
    while(true) {
        let u = Object.keys(units)[~~(Math.random()*Object.keys(units).length)]
        let p = Object.keys(prefs)[~~(Math.random()*Object.keys(prefs).length)]
        
        while(1) {
            let ans = await input(p+u);
            if(ans == prefs[p]+units[u]) {
                console.log("Good job!");
                break;
            }
            console.log("Try again");
        }
    }
}
async function numbers_quiz() {
    while(true) {
        let p = Object.keys(pows)[~~(Math.random()*Object.keys(pows).length)]
        
        while(1) {
            let ans = await input(p + " = 10^?");
            if(+ans == pows[p]) {
                console.log("Good job!");
                break;
            }
            console.log("Try again");
        }
    }
}
async function main() {
    let {argv} = process;
    if(argv[2] == "numbers") return await numbers_quiz();
    else return await units_quiz();

}
main();