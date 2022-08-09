"use strict"

function convertRatingToIndex(rating) {
    if (rating < 2.5) {
        return 0
    } else if (rating > 3.5) {
        return 2
    } else {
        return 1
    }
}

function testRating() {
    if ((convertRatingToIndex(1.0)) === 0) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(1.0))
    }

    if ((convertRatingToIndex(1.5)) === 0) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(1.0))
    }

    if ((convertRatingToIndex(3.0)) === 1) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(3.0))
    }

    if ((convertRatingToIndex(3.5)) === 1) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(3.5))
    }

    if ((convertRatingToIndex(4.0)) === 2) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(4.0))
    }

    
    if ((convertRatingToIndex(5.5)) === 2) {
        console.log("Passed")
    } else {
        console.log("failed", convertRatingToIndex(5.5))
    }
}

testRating()