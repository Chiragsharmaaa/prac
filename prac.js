// Call

var obj = {num:2}

var addToThis = function(a,b,c) {

    return this.num + a + b + c;

}



console.log(addToThis.call(obj,1,2,3))





// Apply

var obj = {num:2}

var addToThis = function(a,b,c) {

    return this.num + a + b + c;

}

let arr = [1,2,3]

console.log(addToThis.apply(obj,arr))







// Bind

var obj = {num:2}

var addToThis = function(a,b,c) {

    return this.num + a + b + c;

}



var bound = (addToThis.bind(obj,1,2,3))

console.log(bound(1,2,3))



4. 	var Student = {age:20}

		var getAge = function() {

    		return this.age;

		}



		var bound = getAge.bind(Student)

		console.log(bound())



//function currying



// using bind method

// let multiply = function(x, y) {

//     console.log(x*y)

// }



// let multiplyByThree = multiply.bind(this, 3)

// multiplyByThree(5);







// using function closures

let Multiply = function(x) {

    return function(y) {

        console.log(x*y);

    }

}



let multiplyByTwo = Multiply(2)

multiplyByTwo(3);

