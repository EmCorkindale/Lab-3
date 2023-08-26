const n =1.23456;
console.log(n.toFixed(2)); 
console.log(n.toPrecision(10));

const user = {
    name: 'John',
    age: 36,
    toString(){
        return this.name + this.age
    }
    }
    console.log("User: " + user) // User: John

    const apple = {
        name: 'Apple',
        category: 'Granny Smith',
        price: 1.2,
        valueOf() { // without this special function, we can’t multiply the object below
        return this.price
        }
        }
        console.log("The value of apple is $" + apple * 2) // 2.4

        console.log( String.fromCodePoint(65) ) // Z
        const stringNums = ["81", "1", "41", "102", "35", "1004"]
        
        console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
        console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

        const mobile = '041234567'
console.log(mobile)