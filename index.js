function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42){
        return blocks - 42
    }
    else if (blocks <= 42){
        return 42 - blocks 
    }
}

function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = distanceFromHqInBlocks(blocks)
    const distanceInFeet = distanceInBlocks * 264
    return distanceInFeet  
}
function distanceTravelledInFeet(start, stop) {
    if (start >= stop){
        return (start - stop) * 264
    }
    else if (start <= stop){
        return (stop - start)  * 264
    }
}
function calculatesFarePrice(start, stop) {
    const feetTravelled = distanceTravelledInFeet(start, stop)
    if (feetTravelled >= 2500) {
        return 'cannot travel that far'
    }
    else if (feetTravelled <= 400) {
        const fare = 0
        return fare
    }
    else if (feetTravelled >= 400 && feetTravelled <=2000) {
        const farePerFoot = .02 * (feetTravelled - 400)
        return farePerFoot 
    }
    else if (feetTravelled >= 2000) {
        const flatRateFare = 25
        return flatRateFare
    }
}