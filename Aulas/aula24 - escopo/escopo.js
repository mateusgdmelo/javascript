// escopo global
var x = 1;

var y = 2;
console.log(x);
console.log(y);

function teste() { // escopo local

    var z = 0;
    console.log(z);
};

teste();

function testando() { //escopo local

    var z = 5;
    console.log(z);
};

testando();


