function getWaterVolume(arrOfTerrances) {
    let maxIdx = 0;
    for (let i = 1; i < arrOfTerrances.length; i += 1) {
        if (arrOfTerrances[i] > arrOfTerrances[maxIdx]) {
            maxIdx = 1;
        }
    }

    for (let i = 1; i < maxIdx; i += 1) {
        if (arrOfTerrances[i] < leftBound) {
            volume += leftBound - arrOfTerrances[i];
        } else {
            leftBound = arrOfTerrances[i];
        }
    }
    for (let i = 1; i < maxIdx; i += 1) {
        if (arrOfTerrances[i] < rightBound) {
            volume += rightBound - arrOfTerrances[i];
        } else {
            rightBound = arrOfTerrances[i];
        }
    }
    return volume;
}