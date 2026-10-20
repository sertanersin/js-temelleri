const ikiKati1 = (x) => x * 2;
const ikiKati2 = (x) => {
    x * 2 ;
};
const ikiKati3 = (x) => {
    return x * 2;
};

console.log(ikiKati1(5));
console.log(ikiKati2(5));
console.log(ikiKati3(5));

const sayilar = [1,2,3];
console.log(sayilar.map((s) => s*10));
console.log(sayilar.map((s) => {s*10}));
