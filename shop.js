let cartBtn=document.getElementById('btnShop');
for(let i=0;i<cartBtn.length;i++){
  cartBtn[i].addEventListener('click',addToCart);
}

function addToCart(event){
  btn=event.target
  console.log(btn);
}