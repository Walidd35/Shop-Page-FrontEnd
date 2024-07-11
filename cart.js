// Sélectionner l'élément du DOM où afficher les éléments du panier
const cartItemsContainer = document.getElementById('cart__items');
const totalQuantityElement = document.getElementById('totalQuantity');
const totalPriceElement = document.getElementById('totalPrice');

// Récupérer les données du panier depuis le localStorage
const storedItems = localStorage.getItem('kanapInfo');
const cartItems = storedItems ? JSON.parse(storedItems) : [];

// Fonction pour afficher les éléments du panier
function displayCartItems() {
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide</p>';
        totalQuantityElement.textContent = '0';
        totalPriceElement.textContent = '0';
    } else {
        cartItemsContainer.innerHTML = cartItems.map(item => `
            <article class="cart__item" data-id="${item.id}" data-color="${item.color}">
                <div class="cart__item__img">
                    <img src="${item.imageUrl}" alt="Image de ${item.name}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${item.name}</h2>
                        <p>${item.color}</p>
                        <p>${item.price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}" data-id="${item.id}" data-color="${item.color}">
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteItem" data-id="${item.id}" data-color="${item.color}">Supprimer</p>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');

        updateTotal();
    }
}

// Fonction pour mettre à jour la quantité et le prix total
function updateTotal() {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    totalQuantityElement.textContent = totalQuantity;
    totalPriceElement.textContent = totalPrice;
}

// Écouteur d'événements pour modifier la quantité d'un produit
cartItemsContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains('itemQuantity')) {
        const id = event.target.dataset.id;
        const color = event.target.dataset.color;
        const newQuantity = parseInt(event.target.value, 10);

        const item = cartItems.find(item => item.id === id && item.color === color);
        if (item) {
            item.quantity = newQuantity;
            localStorage.setItem('kanapInfo', JSON.stringify(cartItems));
            updateTotal();
        }
    }
});

// Écouteur d'événements pour supprimer un produit
cartItemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteItem')) {
        const id = event.target.dataset.id;
        const color = event.target.dataset.color;

        const itemIndex = cartItems.findIndex(item => item.id === id && item.color === color);
        if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1);
            localStorage.setItem('kanapInfo', JSON.stringify(cartItems));
            displayCartItems();
        }
    }
});

// Appeler la fonction pour afficher les éléments du panier
displayCartItems();