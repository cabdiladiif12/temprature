                 // assigment 1

// 1. PLUS
document.querySelector('#pul').addEventListener('click', function(t){
    t.preventDefault;
    let a=parseInt(document.querySelector('#number').value);
    let b=parseInt(document.querySelector('#numbers').value);
    document.querySelector('#result').innerHTML=(a+b);
})
// 2. minus
document.querySelector('#min').addEventListener('click', function(y){
    y.preventDefault;
    let a=document.querySelector('#number').value;
    let b=document.querySelector('#numbers').value;
    document.querySelector('#result').innerHTML=(a-b)
})
// 3. multiplication
document.querySelector('#mul').addEventListener('click', function(c){
    c.preventDefault;
    let a=document.querySelector('#number').value;
    let b=document.querySelector('#numbers').value;
    document.querySelector('#result').innerHTML=(a*b)
})
// 4. divide
document.querySelector('#divide').addEventListener('click', function(d){
    d.preventDefault;
    let a=document.querySelector('#number').value;
    let b=document.querySelector('#numbers').value;
    document.querySelector('#result').innerHTML=(a/b)
})

                 // assigment 2

let celsius= document.getElementById('celsius');
let farhrenhiet= document.getElementById('fahrenheit');
// covert celsius to farhrenhiet
celsius.oninput= () => {
    let output= (parseFloat(celsius.value) * 9) / 5 + 32;
    farhrenhiet.value= parseFloat(output.toFixed(2));
}
// covert farhrenhiet to celsius
farhrenhiet.oninput= () => {
    let output= ((parseFloat(farhrenhiet.value) - 32) * 5) / 9;
    celsius.value= parseFloat(output.toFixed(2));
}