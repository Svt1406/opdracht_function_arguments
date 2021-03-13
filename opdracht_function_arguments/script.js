//No arguments


const paintWalls = function (){
    console.log("the wall has been painted red");
}

paintWalls();

// Single argument 

const paintWallss = function (color) {
    console.log("the wall has been painted " + color);
}

paintWallss ('green');
paintWallss ('pink');

// Multiple arguments 

const paintWallsss = function (location, color){
    console.log(location + ' has been painted ' + color);
}

paintWallsss ('the north wall', 'green');
paintWallsss ('the south-east wall', 'pink');
