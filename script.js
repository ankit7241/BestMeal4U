const {ethers} = require("ethers");
async function connect()
{
	console.log("HII");

	if(typeof window.ethereum !== "undefined")
	{
		 ethereum.request({method: "eth_requestAccounts"});
	}
}

async function amountToPay()
{
	const contractAddress ="0x95CD7c5003Cb25e51b26B1956E570409E6B8C6d8";
	const abi = [
		{
			"inputs": [],
			"name": "sendMoney",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "getOwnerBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address payable",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();
	const contract = new ethers.Contract(contractAddress,abi,signer);
	await contract.sendMoney();
}

module.exports ={
	connect,
	amountToPay,
};

const price= document.getElementById("price").value;
const finalPrice = price/1000;
let amount = 0;
let totalBill = 0;
for(let i=0; i<13 ; i++){
document.querySelectorAll("li")[i].addEventListener("click",(event) =>{
let text = event.target.classList[0] + "1";
event.target.classList.toggle("dark")
document.querySelector("." + text).classList.toggle("hidden");
let currentPrice = event.target.querySelector("em").innerText;
amount = amount + parseInt(currentPrice);
if(event.target.classList[1] == "dark")
amount = amount - (2 * parseInt(currentPrice));
document.querySelector(".bill").value = amount;
});
}



const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

btn.addEventListener("click", calculateTip)


// .toString()
// setTimeout(func, time(in ms))

function hideError() {
setTimeout(() => {
error.style.display = "none"
}, 3000)
}
const priceToPay =document.querySelector("#price")

function calculateTip() {
const tip = document.querySelector(".tip")
const bill = document.querySelector(".bill").value
console.log(bill)
const rate = document.querySelector(".rate").value
console.log(rate)

if (bill === "" || rate == "") {
error.style.display = "block"
hideError()
} 
else if (isNaN(bill)) { // it is a function that checks if the input is Not a Number boolean
error.innerHTML = "Please enter a Number!"
error.style.display = "block"
hideError()
}
else {
let tipAmount = Math.round(bill * rate)
tip.innerHTML = `Tip Amount: ${tipAmount}`
totalBill = Number(bill) + tipAmount
total.innerHTML = `Total Amount: ${totalBill}`
priceToPay.value= totalBill

}
}