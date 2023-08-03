let mainImg = document.querySelector(".main-img");
let thumbImg = document.querySelectorAll(".thumb-img");
let slideImg = document.querySelectorAll(".slide-img");
let priceDetails = document.querySelector(".price-details");
let cartItems = document.querySelector(".cart-items");
let modalClose = document.querySelector(".modal-close");
let cart = document.querySelector(".cart");
let cartDetails = document.querySelector(".cart-details");
let navOpen = document.querySelector(".nav-open");
let navClose = document.querySelector(".nav-close");
let nav = document.querySelector(".nav");

navOpen.addEventListener("click", () => {
	nav.classList.remove("hidden");
	nav.classList.add("flex");
	console.log("opennig the nav");
});

navClose.addEventListener("click", () => {
	console.log("closing the nav");
	nav.classList.remove("flex");
	nav.classList.add("hidden");
});

cart.addEventListener("click", () => {
	let display = cartDetails.style.display;
	if (display == "" || display == "none") {
		cartDetails.style.display = "flex";
		return;
	}
	cartDetails.style.display = "";
});

let itemsNum = 0;

let activeElement = document.querySelectorAll(".thumb-img")[0];
activeElement.classList.add("opacity-60", "border-Orange", "border-2");

let itemsDisplay = document.querySelector(".items-display");

thumbImg.forEach((element) => {
	element.addEventListener("click", () => {
		mainImg.src = element.src.replace("-thumbnail", "");
		activeElement.classList.remove("opacity-60", "border-Orange", "border-2");
		activeElement = element;
		activeElement.classList.add("opacity-60", "border-Orange", "border-2");
	});
});

function increaseItems() {
	let totalPrice = document.querySelector(".total-price");
	itemsNum++;
	console.log(itemsNum);
	itemsDisplay.innerHTML = itemsNum;
	totalPrice.innerHTML =
		"Total: " + `<span class="text-Orange text-lg"> $${itemsNum * 125}</span>`;
}

function decreaseItems() {
	let totalPrice = document.querySelector(".total-price");

	if (itemsNum > 0) {
		itemsNum--;
	}
	console.log(itemsNum);
	itemsDisplay.innerHTML = itemsNum;
	totalPrice.innerHTML =
		"Total: " + `<span class="text-Orange text-lg"> $${itemsNum * 125}</span>`;
}

function addToCart() {
	let cartNum = document.querySelector(".cart-num");
	if (itemsNum > 0) {
		cartNum.classList.remove("hidden");
		cartNum.innerHTML = itemsNum;
		cartNum.classList.add("inline");

		// function createElement(name, classesArr, text) {
		// 	let htmlNode = document.createElement(name);
		// 	classesArr.forEach((element) => {
		// 		htmlNode.classList.add(element);
		// 	});
		// 	let textNode = document.createTextNode(text);
		// 	htmlNode.appendChild(textNode);
		// 	return htmlNode;
		// }

		// let img = createElement("img", ["rounded", "w-11", "aspect-auto", "grow"]);
		// // var t = document.createTextNode("Hello World");
		// img.src = "./images/image-product-1-thumbnail.jpg";
		// cartItems.innerHTML = ``;
		// cartItems.appendChild(img);
		// let div = document.createElement("div");
		// let para1 = createElement("p", [], "Fall limited sneekers Edition");
		// div.appendChild(para1);
		// let para2 = createElement("p", ["price-details"], `$125x${itemsNum}`);
		// let b = createElement("b", ["text-black", "pl-1"], `$${itemsNum * 125}`);
		// para2.appendChild(b);
		// div.appendChild(para2);

		cartItems.innerHTML = `
		<div class="flex flex-row items-center justify-center">
		<img
			src="./src/images/image-product-1-thumbnail.jpg"
			alt=""
			class="rounded w-11 aspect-auto grow" />
		<div class="pl-2">
			<p>Fall limited sneekers Edition</p>
			<p class="price-details">
				$125x${itemsNum} <b class="text-black "> $${itemsNum * 125}</b >
			</p>
		</div>
		<i class="fa-solid fa-trash-can pl-2 cursor-pointer"></i>
		</div>
		<button class="button">
			Check it Out
		</button>
		`;
	}
}

mainImg.addEventListener("click", (e) => {
	let modalImg = document.querySelector(".modal-img");
	let modal = document.querySelector(".modal");
	console.log(modalImg);
	modalImg.src = e.target.src;
	modal.classList.remove("hidden");
	modal.classList.add("flex");
});

slideImg.forEach((element) => {
	element.addEventListener("click", (e) => {
		let modalImg = document.querySelector(".modal-img");
		let modal = document.querySelector(".modal");
		console.log(e.target.src);
		modalImg.src = e.target.src;
		modal.classList.remove("hidden");
		modal.classList.add("flex");
	});
});

modalClose.addEventListener("click", () => {
	let modal = document.querySelector(".modal");
	modal.classList.remove("flex");
	modal.classList.add("hidden");
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		nav.classList.remove("hidden");
		nav.classList.add("flex");
	}
});
