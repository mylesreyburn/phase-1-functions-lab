// Code your solution in this file!

// one block = 264 feet
// scuber HQ is on 42nd street

function distanceFromHqInBlocks(street){
    let distance = (42-street);
    if (distance < 0){
        distance = distance * (-1)
    }
    return distance;
}

function distanceFromHqInFeet(street){
    let distance = (42-street)*264;
    if (distance < 0){
        distance = distance * (-1)
    }
    return distance;
}

function distanceTravelledInFeet(start, end){
    let distance = (start-end)*264;
    if (distance < 0){
        distance = distance * (-1)
    }
    return distance;
}

function calculatesFarePrice(start, destination){
    let distance = (start-destination)*264;
    let fare = 0;
    if (distance < 0){
        distance = distance * (-1)
    }
    if (distance <= 400){
        fare = 0;
        return fare;
    } else if (distance > 400 && distance <=2000){
        fare = 0.02 * (distance - 400);
        return fare;
    } else if (distance > 2000 && distance <= 2500){
        fare = 25;
        return fare;
    } else {
        return "cannot travel that far"
    }
}