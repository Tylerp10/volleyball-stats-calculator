const displayEff = document.querySelector(".displayEff")
const displayPer = document.querySelector(".displayPer")
const displayAcePer = document.querySelector(".displayAcePer")
const displayErrPer = document.querySelector(".displayErrPer")
const kills = document.querySelector(".kills")
const errors = document.querySelector(".errors")
const total = document.querySelector(".total")
const aces = document.querySelector(".aces")
const serveErrors = document.querySelector(".serveErrors")
const totalServes = document.querySelector(".totalServes")
const effBtn = document.querySelector(".effBtn")
const calculateServ = document.querySelector(".servBtn")
const clearAtt = document.querySelector(".clearAtt")
const clearServ = document.querySelector(".clearServ")

let killsNum;
let errorsNum;
let totalAtt;
let acesNum;
let servErrors;
let servAtt;

effBtn.disabled = false;
calculateServ.disabled = false;

function calculateEff(a,b,c) {
    return (a-b)/c
}
function calculateKillPercent(a,b) {
    return (a/b)*100
}
function calculateServe(a,b){
    return (a/b)*100
}

effBtn.addEventListener('click', ()=> {
    killsNum = kills.value
    errorsNum = errors.value
    totalAtt = total.value
    if (killsNum !== "" && errorsNum !== "" && totalAtt !== ""){
        let efficiency = calculateEff(killsNum,errorsNum,totalAtt)
        let killPercent = calculateKillPercent(killsNum, totalAtt)
        displayEff.textContent += ` ${efficiency.toFixed(3)}`
        displayPer.textContent += ` ${killPercent.toFixed(2)}%`
        effBtn.disabled = true
    }
})

calculateServ.addEventListener('click', ()=> {
    acesNum = aces.value
    servErrors = serveErrors.value
    servAtt = totalServes.value
    if (acesNum !== "" && servErrors !== "" && servAtt !== ""){
        let acePer = calculateServe(acesNum, servAtt)
        let serveErrorsPer = calculateServe(servErrors, servAtt)
        displayAcePer.textContent += ` ${acePer.toFixed(2)}%`
        displayErrPer.textContent += ` ${serveErrorsPer.toFixed(2)}%`
        calculateServ.disabled = true;
    }
})

clearAtt.addEventListener('click', ()=> {
    kills.value = ""
    errors.value = ""
    total.value = ""
    displayEff.textContent = "Efficiency:"
    displayPer.textContent = "Kill Percentage:"
    effBtn.disabled = false
})

clearServ.addEventListener('click', ()=> {
    aces.value = ""
    serveErrors.value = ""
    totalServes.value = ""
    displayAcePer.textContent = "Ace Percentage:"
    displayErrPer.textContent = "Error Percentage:"
    calculateServ.disabled = false;
})