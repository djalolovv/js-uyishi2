var userNumber = prompt('9999 gacha bolgan raqamni kiriting')
if (isNaN(userNumber)){
    alert('iltimos raqam kiriting!!!')
}
if (userNumber < 10){
    alert('bu son 1 xonali');
} 
else if(userNumber >= 10 && userNumber < 100){
    alert('bu son 2 xonali');
}
 else if(userNumber >= 100 && userNumber < 1000){
    alert('bu son 3 xonali');
}
else if(userNumber >= 1000 && userNumber < 10000){
    alert('bu son 4 xonali');
}
