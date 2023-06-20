function swap(a,b) {
    [a,b] = [b,a];
    return [a,b]
}

let x= 5;
let y = 10;
[x,y] = swap(x,y);
console.log(x,y);