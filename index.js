var rect =  require('./rectangle')

let solveRect = (l,b) => {
    console.log("Solving for rectangle: " + l + " + " +  b  )

    //callback using rect
    rect(l,b,(err, rectangle) => {
        if (err) { //if error occurs during callback
            console.log("Error: " + err.message);
        }
        else {
            console.log("Area: " + rectangle.area());
            console.log("Perimeter: " + rectangle.perimeter());
        }
    });
    //print first then prints callback
    console.log("last part of solveRect");
}

solveRect(2,4);
