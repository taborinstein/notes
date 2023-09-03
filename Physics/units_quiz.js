const readline = require("readline");
const r = readline.createInterface({input:process.stdin});
async function input(s) {
    console.log(s, "> ")
    return new Promise(rs => {
        r.on("line", rs);
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
async function main() {
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
main();