// Estrura While -> "enquanto"
var c = 0;
while (c <= 5) {
    console.log("Testando repetições " + c)

    c++; //incrementador
}

var arr = ["a", "b", "c", "d", "e"];
var pos = 0;
while (pos <= 4) {
    console.log(arr[pos]);

    pos++;
}

// Uma string se comporta como se fosse um array e nós podemos iterar todos os caracteres dela:
var nome = "Mateus";
var n = 0;

while (n <= 5) {
    console.log(nome[n]);
    
    n++;
}
