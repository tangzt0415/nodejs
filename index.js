var rect = require('./rectangle')

let solveRect = (l,b) => {
    console.log("Solving for rectangle: " + l + " + " +  b  )

    if (l<=0 || b <=0){
        console.log("Rectangle dimension cannot be zero")
    }
    else{
        console.log("area of rectangle = " , + rect.area(l,b));
        console.log("perimeter of rectangle = " , + rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-1,3);