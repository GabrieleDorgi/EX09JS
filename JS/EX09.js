var num = parseFloat(prompt("Informe um valor:"))
var a = 0

if (num % 3 == 0) {
    alert(" o Valor informado é múltiplo do n° 3")
    a++
}
if (num % 7 == 0) {
    alert("O Valor informado é múltiplo do n° 7")
    a++
}
if (a == 0) {
    alert("O Valor informado não é múltiplo do 3 e do 7")
}
