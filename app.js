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
let resetBtn = document.getElementById('resetBtn')
// let p2Attack = document.getElementById('p2Attack')
class Person {
    name;
    health;
    constructor(health){
        this.health = health
    }
}
let player1 = new Person(p1HealthDiv.textContent)
let player2 = new Person(p2HealthDiv.textContent)
console.log(p1atksound);
console.log(player2.name);
console.log(player1.health);
console.log(player2.health);
// console.log(p1Name);



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
player2.name = p2NameDiv.innerText;
console.log(player2.name);

    Winner()

    let health = randomAttack();
    player1.health-=health
    p2atksound.play();
    p1HealthDiv.innerHTML=`<h1>${player1.health}</h1>`
}
const p1Attack= () => {
    let health = randomAttack();
    let p2Name = p2NameDiv.innerText;
    console.log(p2Name);
    
    player2.health-=health;
    p1atksound.play()
    
        Winner()
   
    p2HealthDiv.innerHTML = `<h1>${player2.health}</h1>`
    
}
const p1Heal= () => {
   
    let healHealth = randomHeal();
    p1healsound.play()
    if(player1.health<100){
        player1.health+=healHealth;
    }
    if(player1.health>100){
        player1.health=100;
    }
 
    p1HealthDiv.innerHTML =`<h1>${player1.health}</h1>`
    

}
const p2Heal= () => {
    let healHealth = randomHeal();
    p2healsound.play()
    if(player2.health<100){
        player2.health+=healHealth;
    }
    if(player2.health>100){
        player2.health=100;
    }
   
    p2HealthDiv.innerHTML =`<h1>${player2.health}</h1>`
}

const Winner = 
()=> {
    if(player1.health<=0){
        resultDiv.innerHTML = `<h1 style='color:green'> Winner: ${player2.name}</h1>`

    }
    else if(player2.health<=0){
        resultDiv.innerHTML = `<h1 style='color:green>Winner :${player1.name
        }`

    }
        

    

    
}
const reset= () => {
    player1.health=100;
    player2.health=100;
    p1HealthDiv.innerHTML=`<h1>${player1.health}</h1>`
    p2HealthDiv.innerHTML=`<h1>${player2.health}</h1>`
}
