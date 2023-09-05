async function makePizza (){
const stepOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Started preparing pizza.");
        resolve();
    }, 1000);
});
const stepTwo = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Made the base.");
        resolve();
    }, 2000);
});

const stepThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Added the sauce and cheese");
        resolve();
    }, 3000);
});

const stepFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Added the pizza toppings.");
        resolve();
    }, 4000);
});

const stepFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Cooked the pizza.");
        resolve();
    }, 5000);
});

const stepSix = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Pizza is ready.");
        resolve();
    }, 6000);
});

await stepOne;
    await stepTwo;
    await stepThree;
    await stepFour;
    await stepFive;
    await stepSix;

    console.log("All steps completed.");
}
    makePizza().catch(error => {
        console.error("An error occurred:", error);
    });
