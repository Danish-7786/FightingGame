let playButton = document.getElementById('sim')
let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById('p2Name');
let p1atksound = document.getElementById('p1attack')
let p2atksound = document.getElementById('p2attack')
let p1healsound = document.getElementById('p1heal')
let p2healsound = document.getElementById('p2heal')
let p1HealthDiv = document.getElementById("p1Health")
let p2HealthDiv = document.getElementById("p2Health")
let resultDiv = document.getElementById('result')
// let p2Attack = document.getElementById('p2Attack')
console.log(p1atksound);

// console.log(p1Name);
let p2Health = p2HealthDiv.textContent;

let p1Health = p1HealthDiv.textContent;
console.log();
let randomAttack = () => {
   return Math.floor(Math.random()*10)
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
let p1Name = p1NameDiv.innerText;
if(p2Health<=0){
    Winner(p1Name)
}
    let health = randomAttack();
    p1Health-=health
    p2atksound.play();
    p1HealthDiv.innerHTML=`<h1>${p1Health}</h1>`
}
const p1Attack= () => {
    let health = randomAttack();
    let p2Name = p2NameDiv.innerText;
    console.log(p2Name);
    
    p2Health-=health;
    p1atksound.play()
    if(p1Health<=0 ){
        Winner(p2Name)
   }
    p2HealthDiv.innerHTML = `<h1>${p2Health}</h1>`
    
}
const p1Heal= () => {
   
    let healHealth = randomHeal();
    p1healsound.play()
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
    p2healsound.play()
    if(p2Health<100){
        p2Health+=healHealth;
    }
    if(p2Health>100){
        p2Health=100;
    }
   
    p2HealthDiv.innerHTML =`<h1>${p2Health}</h1>`
}

const Winner = 
(name)=> {
        resultDiv.innerHTML = `<h1 style='color:green'> Winner: ${name}</h1>`

    
}
