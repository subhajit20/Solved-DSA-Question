let array = [9, 10, 2, 10, 10, 2, 1, 1];

array.sort()

let newarray = [];
let index = 0;

for(let i = index; i <= array.length - 1; i++){
    newarray.push(array[i]);
    for(let x = i+1; x <= array.length - 1; x++){
        if(array[i] === array[x] && i !== x && newarray.includes(array[i])){
            newarray.pop()
        }else{
            index = x + 1;
            break;
        }
    }
}
console.log(newarray)