function arrayMaxNum(a){
    let max = -99999;
    for(const num of a){
        if(max < num)
            max = num;
    }
    return max;
}

const array = [ 33,55,32, 65,80,43];
const maxNum = arrayMaxNum(array);

console.log(maxNum);