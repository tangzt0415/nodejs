module.exports = (x,y,callback) => {
    if (x<=0 || y <=0){
        setTimeout(() => { //function + time period
            callback(new Error("Rectangle dimension cannot be zero"),null) 
        }, 2000);
        
    }
    else{
        setTimeout(() => { //function + time period
            callback(null,{
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            })
        }, 2000);
        
    }
}


