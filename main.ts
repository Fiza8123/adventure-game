import inquirer from "inquirer";

//games variable

let enimes =["skeleton","zombie","worrier", "assessin"]
let maxenemyhealth = 75
let enemyattacktohero =25

//player varaible

let herohealth = 100
let attackdamagetoenamy = 50
let numhealthpotion = 3
let potionhealamount = 30
let healthpotiondropchance = 50

//while loop condition

let gamerunning = true

console.log("welcome to deadzone");

Game:
while(gamerunning) {
  let enemyhealth = Math.floor(Math.random() * maxenemyhealth +1)
  let enemyindex =Math.floor(Math.random() * enimes.length)
  let enemy = enimes[enemyindex]

  console.log(` # ${enemy} has appeared # \n`);


  while (enemyhealth > 0){
   console.log(` your health ${herohealth}`);
   console.log(`${enemy} Health: ${enemyhealth}`);

   let options = await inquirer.prompt({
     name:"ans",
     type:"list",
     message:"what would you like to do",
     choices:["1:Attack","2: Take health potion","3: Run"]
      });

      if(options.ans === "1:Attack"){
        let damagetoenemy =Math.floor(Math.random() * attackdamagetoenamy +1 ) 
        let damagetohero =Math.floor(Math.random() * enemyattacktohero +1)

        enemyhealth -=damagetoenemy
        herohealth -= damagetohero 
        console.log(`you strick the ${enemy} for ${damagetoenemy}`);
        console.log(`${enemy} strick you for ${damagetohero} damage.`);
        


    if(herohealth > 1){
     console.log("you have taken too much damage. now you are not able to continue.");
     break;
    }
      }

       else if (options.ans ==="2: Take health potion" ){
     if(numhealthpotion > 0){
        herohealth += potionhealamount
        numhealthpotion--

        console.log(`you use health potion ${potionhealamount}`);
        console.log(`you have now ${herohealth} health`);
        console.log(` you have${numhealthpotion} health postion left`)
      }else{
        console.log(`you have no health potion left. defeat enemy for a chance to get more healtrh potion`);
      }
    }
    else if(options.ans === "3: Run"){
console.log(`you run away from ${enemy}`);
continue Game;
    }
  }
  if(herohealth < 1){
    console.log(`you are out from battle. you are too weak`);
    break;
  }

  console.log(`${enemy} was defeated`);
  console.log(` you have ${herohealth} health`);


  let randomnumber = Math.floor(Math.random() * 100 + 1)
  if(randomnumber < healthpotiondropchance){
    numhealthpotion++

    console.log(`enemy give you health potion`);
    console.log(`your health is ${herohealth}`);
    console.log(`your health potion is ${numhealthpotion}`);
  }

  let useroption = await inquirer.prompt({
    name :"ans",
    type:"list",
    message:"what would you like to do now",
    choices: ["1: continue","2: exit"]
  })

  if(useroption.ans ==="1: continue"){
    console.log("you are continue on your adventure");
  }else{
    console.log("you successfully Exit from deadzone");
    break;
  }
  console.log("thamk you for playing.\n")
}




















