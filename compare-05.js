// Compare objects and arrays :
const first = {a:5, b:2, c:5};
const second = {a:5, b:2, c:5};
/* Method- 01 - Never Use this method , because if the order of the of the object property is different .
This will give wrong result */
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

if(firstString === secondString){
    console.log("same");
}
else{
    console.log("not same");
}

// Method - 02 - (not optimized - should check internet)
function compareObject(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first,second);
console.log(isSame);