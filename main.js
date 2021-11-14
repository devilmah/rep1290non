window.addEventListener('DOMContentLoaded', function (event) {
document.getElementById('main-form').addEventListener("submit",checkForm);});
function checkForm(event)
{	
	event.preventDefault();
	var el=document.getElementById('main-form');
	let price=el.price.value;/*document.getElementById("price");*/
	let amount=el.amount.value;/*document.getElementById("amount");*/
	let res; let fail="";
	if(price=="" || amount=="")
	{
		fail="Заполните поля";
	}
	if(isNaN(price) || isNaN(amount))
	{
		fail= "Введены некорректные данные";
	}
	price=parseInt(price,10);
	amount=parseInt(amount,10);
	if(price<0 || amount<0)
	{
		fail= "Введены некорректные данные ";
	}
	
	if(fail!="")
	{
		document.getElementById('error').innerHTML= fail;
	}
	else
	{
		document.getElementById('error').innerHTML= fail;
		res=price*amount;
		alert("ЦЕНА: "+res);
	}


}
