// Get elements
const cartTableBody = document.querySelector("#cart tbody");
const cartTotalElement = document.getElementById("final-value");
let cart = [];

// Add to cart function
function addToCart(id, name, price, image) {
  // Check if item is already in the cart
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem = {
      id,
      name,
      price,
      image,
      quantity: 1,
      get subtotal() {
        return this.price * this.quantity;
      }
    };
    cart.push(newItem);
  }
  updateCartUI();
}

// Update cart UI
function updateCartUI() {
  cartTableBody.innerHTML = "";
  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.id = `nth${index + 1}`;
    row.innerHTML = `
      <td><a style="cursor: pointer;" onclick="removeFromCart(${index})"><i class="far fa-times-circle"></i></a></td>
      <td><img src="${item.image}" alt=""></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></td>
      <td id="update${index + 1}">${item.subtotal}</td>
    `;
    cartTableBody.appendChild(row);
  });
  updateCartTotal();
}

// Update cart total
function updateCartTotal() {
  const total = cart.reduce((acc, item) => acc + item.subtotal, 0);
  cartTotalElement.innerText = total;
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Update quantity
function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity);
  updateCartUI();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");
    addToCart(id, name, price, image);
  });
});

// Initialize cart UI
updateCartUI();
