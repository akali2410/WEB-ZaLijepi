window.onload = () =>
    
    {
        
        document.querySelector('#izracunaj').onclick = izracunajCijenu;
    }
 
function izracunajCijenu() {
    let kvadratura = document.querySelector('#kvadratura').value;
    let materijal = document.querySelector('#materijal').value;
   
    let total = (kvadratura * materijal);
    total = total.toFixed(2);
 
    
    document.querySelector('.racun').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}