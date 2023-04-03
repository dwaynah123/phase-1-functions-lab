// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let blocks;
    if (street > 42) {
        blocks = street-42;
    } else if (street < 42) {
        blocks = 42-street;
    } else if (street = 42) {
        blocks = 0;
    }
    return blocks;
}
function distanceFromHqInFeet(street) {
    let blocks = distanceFromHqInBlocks(street)*264;
    return blocks;
}
function distanceTravelledInFeet(start, destination) {
    let feet;
    if (start > destination) {
        feet = (start-destination)*264;
    } else if (start < destination) {
        feet = (destination-start)*264;
    } else if (start=destination) {
        feet = 0;
    }
    return feet;
}
function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    let price;
    if (feet <= 400) {
        price = 0;
    } else if (feet > 400 && feet < 2000) {
        price = ((feet-400)*2)*0.01;
    } else if (feet > 2000 && feet < 2500) {
        price = 25;
    } else if (feet > 2500) {
        price = 'cannot travel that far';
    }
    return price;
}