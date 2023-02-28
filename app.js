let playButton = document.getElementById('sim')
let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById('p2Name');
let p1HealthDiv = document.getElementById("p1Health")
let p2HealthDiv = document.getElementById("p2Health")
// let p2Attack = document.getElementById('p2Attack')

let p2Health = p2HealthDiv.textContent;
let p1Health = p1HealthDiv.textContent;
console.log();
let randomAttack = () => {
   return Math.floor(Math.random()*15)
}
let randomHeal = () => {
    return Math.floor(Math.random()*5)
 }
 let winner = 0;
document.addEventListener('keydown',function(e){

    if(e.key =='q'){
        p1Attack();
    }
    if(e.key == 'p'){
        p2Attack();
    }
    if(e.key == 'a'){
        p1Heal();
    }
    if(e.key == 'l'){
        p2Heal();
    }
})
const p2Attack =()=> {
    let health = randomAttack();
    p1Health-=health
    p1HealthDiv.innerHTML=`<h1>${p1Health}</h1>`
}
const p1Attack= () => {
    let health = randomAttack();

    p2Health-=health;

    p2HealthDiv.innerHTML = `<h1>${p2Health}</h1>`
    
}
const p1Heal= () => {
    let healHealth = randomHeal();
    if(p1Health<100){
        p1Health+=healHealth;
    }
    if(p1Health>100){
        p1Health=100;
    }
 
    p1HealthDiv.innerHTML =`<h1>${p1Health}</h1>`
    

}
const p2Heal= () => {
    let healHealth = randomHeal();
    if(p2Health<100){
        p2Health+=healHealth;
    }
    if(p2Health>100){
        p2Health=100;
    }
    p2HealthDiv.innerHTML =`<h1>${p2Health}</h1>`
}

