
const foods = [
  {
    id: 1, name: "Paneer Butter Masala",
    price: 250,
    img: "pages\Menu\Paneer butter masala.jpg"
  },

  {
    id: 2,
    name: "Butter Naan",
    price: 150,
    img: "pages\Menu\Butter Naan.jpg"
  },

  {
    id: 3,
    name: "Chicken Biryani",
    price: 200,
    img: "pages\Menu\chicken biryani.jpg"
  },

  {
    id: 4,
    name: "Chole Bhature",
    price: 200,
    img: "pages\Menu\Chole Bhature.jpg"
  },

  {
    id: 5,
    name: "Cold Coffee",
    price: 200,
    img: "pages/Menu/Cold Coffee.jpg"
  },

  {
    id: 6,
    name: "Masala Dosa",
    price: 200,
    img: "pages\Menu\masala dosa.jpg"
  },

  {
    id: 7,
    name: "Momos",
    price: 200,
    img: "pages\Menu\Momos.jpg"
  },

  {
    id: 8,
    name: "Paneer butter Masala",
    price: 200,
    img: "pages\Menu\Paneer butter masala.jpg"
  },

  {
    id: 9,
    name: "Spring Masala",
    price: 200,
    img: "pages\Menu\Spring Rolls.jpg"
  },

  {
    id: 10,
    name: "Veg Pulav",
    price: 200,
    img: "pages\Menu\Veg Pulao.jpeg"
  },

  {
    id: 11,
    name: "Veg Thali",
    price: 200,
    img: "pages\Menu\Veg Thali.jpg"
  }
];

// Display food items
const foodList = document.getElementById('food-list');

foods.forEach(food => {
  const div = document.createElement('div');
  div.classList.add('food-item');
  div.innerHTML = `
      <img src="${food.img}" alt="${food.name}" width="100">
      <h3>${food.name}</h3>
      <p>Price: ₹${food.price}</p>
      <button onclick="cartText(${food.id})">Add to Cart</button>
    `;
  foodList.appendChild(div);
});

// Function to add food to cart
function cartText(id) {
  const selectedFood = foods.find(food => food.id === id);

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(selectedFood);

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${selectedFood.name} added to cart!`);
}
