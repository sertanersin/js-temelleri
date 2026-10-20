const degerler = [0,1,-5,"","0"," ",null,undefined,NaN,[],{},"false"];

for (const deger of degerler) {
    if (deger){
        console.log(deger, "doğru (truthy)");
    }
    else {
        console.log(deger, "yanlış(falsy)");
    }
}