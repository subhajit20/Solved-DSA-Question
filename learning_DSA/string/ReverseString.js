let str = 'Subhajit';

let reveredStr = '';
for(let i = str.length - 1; i >= 0; i--){
    console.log(str[i]);    
    reveredStr += str[i];
}

console.log('Main string ---> ',str);
console.log('Reversed string ---> ', reveredStr);