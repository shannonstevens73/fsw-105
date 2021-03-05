var readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name? ");
console.log(
  name +
    ", you have entered the Dragon Quest. Do you have the courage to fight evil? Let your journey begin."
);

const badGuys = ["Slime", "Dracky", "Skeleton Knight", "Baramos"];
const treasure = [
  "Medical Herb",
  " Leaf of the World Tree",
  " Erdricks Sword",
  " Erdricks Armor",
];
var prize = [];
let userHitPoints = 50;
const userInput = ["w", "e", "p"];
let loot = treasure[Math.floor(Math.random() * treasure.length)];

function game() {
  const attackPower = Math.floor(Math.random() * 10);
  const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)];
  let badGuyHitPoints = 35;
  const badGuysPower = Math.floor(Math.random() * 10);
  const walk = readlineSync.keyIn(
    "Enter you command i to see inventory, w to walk, or e to exit: ",
    { limit: `iwe` }
  );

  if (walk === `i`) {
    console.log(`
      ${name}:   
      Your Hit Points: ${userHitPoints}
      Treasure:  ${treasure}`);
  }

  if (walk === `w`) {
    let key = Math.random();
    if (key <= 0.3) {
      console.log("Walking...");
    } else if (key >= 0.3) {
      console.log(badGuy + " showed up.");
      while (badGuyHitPoints > 0 && userHitPoints > 0) {
        const user = readlineSync.keyIn(
          `What do you want to do? Enter "r" to run or "a" to attack: `,
          { limit: "ra" }
        );

        if (user === "r") {
          const run = Math.random();
          if (run < 0.5) {
            console.log(
              `Before you can run away  ${badGuy} attacks you with: ${badGuysPower}`
            );
          } else {
            console.log("You escaped");
            break;
          }
        }
        if (user === "a") {
          badGuyHitPoints -= attackPower;
          console.log(`${badGuy} hit points now at ${badGuyHitPoints}`);

          userHitPoints -= badGuysPower;
          console.log(`${name} hit points now at ${userHitPoints}`);

          if (userHitPoints <= 0) {
            console.log(`${name}, you have been slain!`);
            break;
          } else if (badGuyHitPoints <= 0) {
            console.log(`${name}, you have defeated ${badGuy}`);
          }
        }
      }
    }
  



  
  } else if (walk === "e") {
    console.log("Thank you for playing Dragon Quest!");
  } else {
    console.log("broken");
  }
}
game();




  /*  while (userHitPoints > 0) {
       userRestore = function () {
         userActive = true;
         userHitPoints = 50;
       };
     }
     userRestore();  */
