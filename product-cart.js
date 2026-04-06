let cart = [];

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

function closeAll() {
  document.getElementById("cartPanel").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

function addToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}

function updateCart() {
  const itemsDiv = document.getElementById("cartItems");
  const count = document.getElementById("cartCount");
  const totalEl = document.getElementById("total");
  itemsDiv.innerHTML = "";
  let total = 0,
    totalItems = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    totalItems += item.qty;
    itemsDiv.innerHTML += `
   <div class='cart-item'>
     <div>${item.name}<br>₹${item.price}</div>
     <div class='qty-controls'>
       <button class='qty-btn' onclick='changeQty(${index}, -1)'>-</button>
       <span>${item.qty}</span>
       <button class='qty-btn' onclick='changeQty(${index}, 1)'>+</button>
     </div>
   </div>`;
  });

  count.innerText = totalItems;
  totalEl.innerText = total;
}
