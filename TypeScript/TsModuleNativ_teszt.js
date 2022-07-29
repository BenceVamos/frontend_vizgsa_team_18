var alsoHatar;
var felsoHatar;
var result;
alsoHatar = 2;
felsoHatar = 16;
function Rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
result = Rng(alsoHatar, felsoHatar);
//  2   -------------------
var meret;
var numbArray = new Array();
//alsoHatar = 2;
//felsoHatar = 16;
meret = 11;
for (var i = 0; i < meret; i++) {
    numbArray.push(Rng(alsoHatar, felsoHatar));
}
for (var i = 0; i < meret; i++) {
    document.write(numbArray[i]);
}
//  3   -------------------
var VizsgaltTomb = numbArray;
function Duplazo(arrayIn) {
    var resultArray = new Array();
    for (var i = 0; i < meret; i++) {
        resultArray.push(arrayIn[i] * 2);
    }
    return resultArray;
}
//  4   -------------------
function PrimekSzama(arrayIn) {
    var primQty = 0;
    var inspectedNumber;
    var isPrim;
    for (var i = 0; i < meret; i++) {
        inspectedNumber = arrayIn[i];
        isPrim = true;
        for (var y = 2; y < inspectedNumber / 2; y++) {
            if (inspectedNumber % y == 0) {
                isPrim = false;
                break;
            }
        }
        if (isPrim) {
            primQty++;
        }
    }
    return primQty;
}
for (var i = 0; i < meret; i++) {
    document.write('task 4 -> ' + VizsgaltTomb[i]);
}
document.write('prim qty -> ' + PrimekSzama(VizsgaltTomb));
//  5   -------------------
var tempArray = new Array();
var isUnique = true;
function EgyediElemek(arrayIn) {
    var uniquQty = 0;
    for (var i = 0; i < meret; i++) {
        isUnique = true;
        var toCheck = arrayIn[i];
        for (var y = 0; y < meret; y++) {
            if (y != i) {
                if (arrayIn[y] == toCheck) {
                    isUnique = false;
                }
            }
        }
        if (isUnique == true) {
            console.log('unique ---> ' + arrayIn[i]);
            uniquQty++;
        }
    }
    return uniquQty;
}
document.write('task 5 -> ' + 'uniqueQty -> ' + EgyediElemek(VizsgaltTomb));
