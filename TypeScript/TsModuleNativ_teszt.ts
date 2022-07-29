let alsoHatar: number;
let felsoHatar: number;
let result: number;

alsoHatar = 2;
felsoHatar = 16;

function Rng(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

result = Rng(alsoHatar, felsoHatar);

//  2   -------------------

let meret: number;
let numbArray: number[] = new Array();

//alsoHatar = 2;
//felsoHatar = 16;
meret = 11;

for (let i = 0; i < meret; i++) {
    numbArray.push(Rng(alsoHatar, felsoHatar));
}

for (let i = 0; i < meret; i++) {
    document.write(numbArray[i]);
}

//  3   -------------------

const VizsgaltTomb: number[] = numbArray;


function Duplazo(arrayIn: number[]) {
    let resultArray = new Array();

    for (let i = 0; i < meret; i++) {
        resultArray.push(arrayIn[i] * 2);
    }
    return resultArray;
}

//  4   -------------------

function PrimekSzama(arrayIn: number[]) {
    let primQty = 0;
    let inspectedNumber;
    let isPrim;
    for (let i = 0; i < meret; i++) {
        inspectedNumber = arrayIn[i];
        isPrim = true;

        for (let y = 2; y < inspectedNumber / 2; y++) {
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

for (let i = 0; i < meret; i++) {
    document.write('task 4 -> ' + VizsgaltTomb[i]);
}
document.write('prim qty -> ' + PrimekSzama(VizsgaltTomb));

//  5   -------------------
let tempArray: number[] = new Array();
let isUnique: boolean = true;

function EgyediElemek(arrayIn: number[]) {
    let uniquQty: number = 0;
    for (let i = 0; i < meret; i++) {
        isUnique = true;
        const toCheck: number = arrayIn[i];
        for (let y = 0; y < meret; y++) {
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