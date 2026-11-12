/* =========================================================================
   CAMPUS CAFETERIA ORDERING SYSTEM - JAVASCRIPT
   100% Pure Vegetarian Multi-Shop College Cafeteria Ordering System
   ========================================================================= */

// =========================================================================
// 1. EDITABLE CAFETERIA SHOPS LIST (Easy to edit for LPU or any college campus)
// You can easily modify, add, or rename shops here (e.g. "Shop 1", "Shop 2", etc.)
// =========================================================================
const CAFETERIA_SHOPS = [
    "Kitchen-ette",
    "Roll-on",
    "South City Cafe",
    "Nand juice"
];

// =========================================================================
// 2. FOOD MENU DATABASE (Pure Vegetarian Menu across Campus Shops)
// Every dish has an exact matching photo, shop assignment, and category
// =========================================================================
const MENU_ITEMS = [
    // --- BREAKFAST DISHES ---
    {
        id: 1,
        name: "Masala Dosa with Sambar",
        category: "breakfast",
        shop: "Shop 1",
        price: 60,
        inStock: true,
        description: "Crispy South Indian fermented rice crepe stuffed with spiced potato masala, served with coconut chutney & hot sambar.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Steamed Idli Sambar Combo",
        category: "breakfast",
        shop: "Shop 1",
        price: 50,
        inStock: false, // Demonstrating Sold Out item
        description: "Steamed fluffy white rice cakes served with aromatic lentil vegetable sambar and freshly ground coconut chutney.",
        image: "https://images.unsplash.com/photo-1741376509253-221ac18fac0f?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Veg Grilled Cheese Sandwich",
        category: "breakfast",
        shop: "Shop 2",
        price: 50,
        inStock: true,
        description: "Golden toasted sandwich loaded with sliced cucumber, tomatoes, bell peppers, melted cheese, and tangy mint spread.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        name: "Indori Poha with Sev & Peanuts",
        category: "breakfast",
        shop: "Shop 3",
        price: 35,
        inStock: true,
        description: "Steamed flattened rice tempered with mustard seeds, turmeric, curry leaves, crunchy roasted peanuts, and spicy ratlami sev.",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        name: "Chole Bhature Platter",
        category: "breakfast",
        shop: "Shop 3",
        price: 75,
        inStock: true,
        description: "Two fluffy deep-fried bhaturas accompanied by Punjabi spiced chickpea curry, pickled carrots, and fresh sliced onions.",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600&auto=format&fit=crop&q=80"
    },

    // --- LUNCH DISHES ---
    {
        id: 6,
        name: "Deluxe Veg Special Thali",
        category: "lunch",
        shop: "Shop 1",
        price: 110,
        inStock: true,
        description: "Wholesome Indian lunch platter containing Paneer sabzi, Dal Tadka, Jeera basmati rice, 3 whole-wheat rotis, salad, and sweet.",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 7,
        name: "Paneer Butter Masala Combo",
        category: "lunch",
        shop: "Shop 4",
        price: 95,
        inStock: true,
        description: "Soft fresh cottage cheese cubes cooked in rich buttery tomato cashew gravy served with 2 layered flaky Laccha Parathas.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 8,
        name: "Kadai Paneer with Tawa Paratha",
        category: "lunch",
        shop: "Shop 4",
        price: 90,
        inStock: true,
        description: "Fresh paneer and crunchy bell peppers tossed in fresh freshly ground kadai spices served with whole wheat parathas.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 9,
        name: "Rajma Chawal Comfort Bowl",
        category: "lunch",
        shop: "Shop 1",
        price: 70,
        inStock: true,
        description: "Traditional North Indian slow-simmered red kidney beans in spiced tomato gravy poured generously over steamed long basmati rice.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 10,
        name: "Mumbai Special Pav Bhaji",
        category: "lunch",
        shop: "Shop 2",
        price: 65,
        inStock: true,
        description: "Mashed vegetable curry prepared with special spices and butter, garnished with coriander and served with 2 hot butter-toasted pavs.",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80"
    },

    // --- SNACKS DISHES ---
    {
        id: 11,
        name: "Crispy Veggie Burger",
        category: "snacks",
        shop: "Shop 2",
        price: 55,
        inStock: true,
        description: "Crisp seasoned vegetable patty placed inside toasted sesame buns with iceberg lettuce, sliced tomatoes, and creamy eggless mayonnaise.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 12,
        name: "Golden Punjabi Samosa (2 Pcs)",
        category: "snacks",
        shop: "Shop 3",
        price: 30,
        inStock: true,
        description: "Crispy golden fried crust stuffed with spicy mashed potatoes, green peas, and whole spices, served with saunth and mint chutney.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 13,
        name: "Crispy Salted French Fries",
        category: "snacks",
        shop: "Shop 2",
        price: 50,
        inStock: true,
        description: "Golden fried potato batons sprinkled with rock salt and served piping hot with tomato ketchup dip.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 14,
        name: "Veggie Masala Maggi",
        category: "snacks",
        shop: "Shop 3",
        price: 40,
        inStock: true,
        description: "All-time favorite campus noodles tossed with sweet peas, carrots, butter, and extra spicy maggi masala.",
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 15,
        name: "Crispy Veg Spring Rolls",
        category: "snacks",
        shop: "Shop 4",
        price: 60,
        inStock: false, // Demonstrating Sold Out item
        description: "Crunchy rolled appetizers packed with shredded cabbage, carrots, capsicum, and spring onions, served with spicy schezwan dip.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
    },

    // --- BEVERAGES ---
    {
        id: 16,
        name: "Campus Special Masala Chai",
        category: "beverages",
        shop: "Shop 3",
        price: 15,
        inStock: true,
        description: "Rich milk tea brewed to perfection with crushed fresh ginger, green cardamom, cloves, and cinnamon.",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 17,
        name: "South Indian Filter Coffee",
        category: "beverages",
        shop: "Shop 1",
        price: 25,
        inStock: true,
        description: "Traditional frothy filter coffee brewed from roasted chicory blend and boiling fresh milk.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 18,
        name: "Chilled Cold Coffee with Ice Cream",
        category: "beverages",
        shop: "Shop 2",
        price: 55,
        inStock: true,
        description: "Creamy blended cold coffee poured over ice and crowned with a generous scoop of vanilla ice cream.",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 19,
        name: "Fresh Lemon Mint Soda",
        category: "beverages",
        shop: "Shop 4",
        price: 30,
        inStock: true,
        description: "Chilled sparkling soda mixed with freshly squeezed lemon juice, crushed garden mint, black salt, and cumin.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 20,
        name: "Sweet Kesar Mango Lassi",
        category: "beverages",
        shop: "Shop 1",
        price: 60,
        inStock: false, // Demonstrating Sold Out item
        description: "Thick chilled yogurt beverage churned with sweet mango pulp and infused with saffron and pistachios.",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=80"
    }
];

// Fallback image in case external network image fails to load
const FALLBACK_IMAGE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f3f4f6'/><text x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-size='36'>🌱</text><text x='50%25' y='68%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2316a34a' font-weight='bold'>Pure Veg Cafeteria</text></svg>";

// Tax Rate (5% Demo Tax as per project requirement)
const TAX_RATE = 0.05;

// LocalStorage Keys
const STORAGE_CART_KEY = "campus_cafeteria_cart";
const STORAGE_LAST_ORDER_KEY = "campus_cafeteria_last_order";

// =========================================================================
// 3. APPLICATION STATE
// =========================================================================
let currentShop = "all";       // "all" or specific shop from CAFETERIA_SHOPS
let currentCategory = "all";   // "all" or "breakfast", "lunch", "snacks", "beverages"
let searchQuery = "";          // Search filter string
let cart = [];                 // Array of { id, name, price, shop, quantity }

// =========================================================================
// 4. DOM ELEMENTS
// =========================================================================
const foodGrid = document.getElementById("food-grid");
const noResultsEl = document.getElementById("no-results");
const shopFilter = document.getElementById("shop-filter");
const categoryTabs = document.getElementById("category-tabs");
const searchInput = document.getElementById("search-input");
const resetFilterBtn = document.getElementById("reset-filter-btn");

const cartItemsContainer = document.getElementById("cart-items-container");
const cartEmptyEl = document.getElementById("cart-empty");
const cartFooterEl = document.getElementById("cart-footer");
const cartItemsCountEl = document.getElementById("cart-items-count");
const navCartCountEl = document.getElementById("nav-cart-count");
const clearCartBtn = document.getElementById("clear-cart-btn");

const billSubtotalEl = document.getElementById("bill-subtotal");
const billTaxEl = document.getElementById("bill-tax");
const billTotalEl = document.getElementById("bill-total");

const pickupTimeSlot = document.getElementById("pickup-time-slot");
const slotError = document.getElementById("slot-error");
const studentNameInput = document.getElementById("student-name");
const studentRollInput = document.getElementById("student-roll");
const checkoutBtn = document.getElementById("checkout-btn");

// Modals
const receiptModal = document.getElementById("receipt-modal");
const receiptContent = document.getElementById("receipt-content");
const closeModalBtn = document.getElementById("close-modal-btn");
const newOrderBtn = document.getElementById("new-order-btn");
const printReceiptBtn = document.getElementById("print-receipt-btn");

const lastOrderModal = document.getElementById("last-order-modal");
const lastOrderContent = document.getElementById("last-order-content");
const viewLastOrderBtn = document.getElementById("view-last-order-btn");
const closeLastOrderBtn = document.getElementById("close-last-order-btn");
const closeLastOrderAction = document.getElementById("close-last-order-action");

const toast = document.getElementById("toast");

// =========================================================================
// 5. INITIALIZATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Shop Dropdown options from CAFETERIA_SHOPS
    initializeShopDropdown();

    // 2. Load cart from LocalStorage
    loadCartFromStorage();

    // 3. Render initial vegetarian food menu
    renderMenu();

    // 4. Render cart
    renderCart();

    // 5. Attach Event Listeners
    setupEventListeners();
});

// Populate shop dropdown dynamically so adding shops in JS automatically works
function initializeShopDropdown() {
    if (!shopFilter) return;

    // Clear previous options except default
    shopFilter.innerHTML = '<option value="all">🏬 All Cafeteria Shops (Full Campus Menu)</option>';

    CAFETERIA_SHOPS.forEach(shopName => {
        const option = document.createElement("option");
        option.value = shopName;
        option.textContent = `🏪 ${shopName}`;
        shopFilter.appendChild(option);
    });
}

// =========================================================================
// 6. EVENT LISTENERS
// =========================================================================
function setupEventListeners() {
    // Shop Filter Change
    shopFilter.addEventListener("change", (e) => {
        currentShop = e.target.value;
        renderMenu();
    });

    // Category Tabs Click
    categoryTabs.addEventListener("click", (e) => {
        if (e.target.classList.contains("cat-btn")) {
            document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            currentCategory = e.target.getAttribute("data-category");
            renderMenu();
        }
    });

    // Search Input
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderMenu();
    });

    // Reset Filters Button
    resetFilterBtn.addEventListener("click", () => {
        currentShop = "all";
        currentCategory = "all";
        searchQuery = "";
        shopFilter.value = "all";
        searchInput.value = "";

        document.querySelectorAll(".cat-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-category") === "all");
        });

        renderMenu();
    });

    // Clear Cart Button
    clearCartBtn.addEventListener("click", () => {
        if (cart.length === 0) return;
        if (confirm("Are you sure you want to empty your tray?")) {
            clearCart();
        }
    });

    // Pickup Slot Selection Change (Clear validation error on change)
    pickupTimeSlot.addEventListener("change", () => {
        if (pickupTimeSlot.value) {
            pickupTimeSlot.classList.remove("input-error");
            slotError.classList.add("hidden");
        }
    });

    // Checkout Button
    checkoutBtn.addEventListener("click", handleCheckout);

    // Modal Close Buttons
    closeModalBtn.addEventListener("click", () => receiptModal.classList.add("hidden"));
    newOrderBtn.addEventListener("click", () => receiptModal.classList.add("hidden"));
    printReceiptBtn.addEventListener("click", () => window.print());

    // Last Order Modal Buttons
    viewLastOrderBtn.addEventListener("click", openLastOrderModal);
    closeLastOrderBtn.addEventListener("click", () => lastOrderModal.classList.add("hidden"));
    closeLastOrderAction.addEventListener("click", () => lastOrderModal.classList.add("hidden"));

    // Close modals on overlay background click
    window.addEventListener("click", (e) => {
        if (e.target === receiptModal) receiptModal.classList.add("hidden");
        if (e.target === lastOrderModal) lastOrderModal.classList.add("hidden");
    });
}

// =========================================================================
// 7. MENU RENDERING LOGIC (Shop Filter + Category + Search)
// =========================================================================
function renderMenu() {
    // Filter items based on Shop, Category, and Search query
    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesShop = (currentShop === "all") || (item.shop === currentShop);
        const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                              item.description.toLowerCase().includes(searchQuery) ||
                              item.shop.toLowerCase().includes(searchQuery);

        return matchesShop && matchesCategory && matchesSearch;
    });

    // Toggle No Results view
    if (filteredItems.length === 0) {
        foodGrid.innerHTML = "";
        noResultsEl.classList.remove("hidden");
        return;
    } else {
        noResultsEl.classList.add("hidden");
    }

    // Build Cards HTML
    foodGrid.innerHTML = filteredItems.map(item => {
        const stockStatusClass = item.inStock ? "in-stock" : "sold-out";
        const stockStatusText = item.inStock ? "In Stock" : "Sold Out";
        const buttonDisabled = !item.inStock ? "disabled" : "";
        const buttonText = item.inStock ? "Add to Cart" : "Sold Out";

        return `
            <div class="food-card ${!item.inStock ? 'sold-out' : ''}">
                <div class="food-image-wrapper">
                    <img 
                        src="${item.image}" 
                        alt="${item.name}" 
                        class="food-image" 
                        loading="lazy"
                        onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
                    >
                    <div class="card-badges">
                        <!-- Pure Vegetarian Green Dot Box -->
                        <div class="diet-icon veg" title="100% Pure Vegetarian">
                            <span class="diet-circle"></span>
                        </div>
                        <!-- Stock Availability Tag -->
                        <span class="stock-tag ${stockStatusClass}">${stockStatusText}</span>
                    </div>
                </div>

                <div class="food-card-body">
                    <div class="food-meta-row">
                        <span class="food-category-label">${item.category}</span>
                        <!-- Shop Badge on Every Food Card -->
                        <span class="shop-badge" title="Sold at ${item.shop}">🏪 ${item.shop}</span>
                    </div>
                    
                    <h3 class="food-title">${item.name}</h3>
                    <p class="food-desc">${item.description}</p>
                    
                    <div class="food-card-footer">
                        <span class="food-price">₹${item.price.toFixed(2)}</span>
                        <button 
                            class="add-btn" 
                            ${buttonDisabled} 
                            onclick="addToCart(${item.id})"
                        >
                            ${buttonText}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// =========================================================================
// 8. CART MANAGEMENT (With Shop Information & Shop Grouping)
// =========================================================================

// Add item to cart (saves item with its specific shop name)
window.addToCart = function(itemId) {
    const foodItem = MENU_ITEMS.find(item => item.id === itemId);
    if (!foodItem) return;

    // Guard: Prevent adding sold out items
    if (!foodItem.inStock) {
        showToast("Sorry, this item is currently sold out!");
        return;
    }

    // Check if item is already in cart
    const existingIndex = cart.findIndex(item => item.id === itemId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: foodItem.id,
            name: foodItem.name,
            price: foodItem.price,
            shop: foodItem.shop, // Store shop name along with the item
            quantity: 1
        });
    }

    saveCartToStorage();
    renderCart();
    showToast(`Added "${foodItem.name}" (${foodItem.shop}) to tray!`);
};

// Change item quantity (+1 or -1)
window.changeQuantity = function(itemId, change) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += change;

    // If quantity reaches 0, remove item from cart
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }

    saveCartToStorage();
    renderCart();
};

// Remove item completely from cart
window.removeFromCart = function(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    renderCart();
};

// Clear entire cart
function clearCart() {
    cart = [];
    saveCartToStorage();
    renderCart();
}

// Save cart to LocalStorage
function saveCartToStorage() {
    try {
        localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
    } catch (e) {
        console.error("Unable to save cart to localStorage", e);
    }
}

// Load cart from LocalStorage (with backwards-compatibility for shop attribute)
function loadCartFromStorage() {
    try {
        const storedCart = localStorage.getItem(STORAGE_CART_KEY);
        if (storedCart) {
            cart = JSON.parse(storedCart);
            
            // Ensure each item has its shop property even if loaded from older session
            cart.forEach(cartItem => {
                if (!cartItem.shop) {
                    const match = MENU_ITEMS.find(m => m.id === cartItem.id);
                    cartItem.shop = match ? match.shop : "Shop 1";
                }
            });
        }
    } catch (e) {
        console.error("Error reading cart from localStorage", e);
        cart = [];
    }
}

// Render Cart UI: Group items by shop if items come from different shops
function renderCart() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update Cart Counters
    cartItemsCountEl.textContent = `(${totalCount} items)`;
    navCartCountEl.textContent = totalCount;

    // If Cart is Empty
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "";
        cartEmptyEl.classList.remove("hidden");
        cartFooterEl.style.opacity = "0.5";
        checkoutBtn.disabled = true;
        checkoutBtn.style.cursor = "not-allowed";

        billSubtotalEl.textContent = "₹0.00";
        billTaxEl.textContent = "₹0.00";
        billTotalEl.textContent = "₹0.00";
        return;
    }

    // If Cart has items
    cartEmptyEl.classList.add("hidden");
    cartFooterEl.style.opacity = "1";
    checkoutBtn.disabled = false;
    checkoutBtn.style.cursor = "pointer";

    // 1. Group cart items by their respective shop
    const groupedByShop = {};
    cart.forEach(item => {
        const shop = item.shop || "Shop 1";
        if (!groupedByShop[shop]) {
            groupedByShop[shop] = [];
        }
        groupedByShop[shop].push(item);
    });

    // 2. Render HTML grouped by shop
    let cartHtml = "";
    for (const [shopName, shopItems] of Object.entries(groupedByShop)) {
        const itemsHtml = shopItems.map(item => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title-row">
                            <span class="diet-icon veg" style="width: 14px; height: 14px;">
                                <span class="diet-circle" style="width: 6px; height: 6px;"></span>
                            </span>
                            <div class="cart-item-title" title="${item.name}">${item.name}</div>
                        </div>
                        <div class="cart-item-meta">
                            <span class="cart-item-shop-badge">🏪 ${item.shop}</span>
                            <span>₹${item.price.toFixed(2)} each</span>
                        </div>
                    </div>

                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)" title="Decrease">-</button>
                            <span class="qty-number">${item.quantity}</span>
                            <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)" title="Increase">+</button>
                        </div>
                        <span class="cart-item-total">₹${itemTotal}</span>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove item">&times;</button>
                    </div>
                </div>
            `;
        }).join("");

        cartHtml += `
            <div class="cart-shop-group">
                <div class="cart-shop-header">
                    <span class="cart-shop-header-title">
                        <span>🏪</span>
                        <strong>${shopName}</strong>
                    </span>
                    <span class="cart-shop-count">${shopItems.length} ${shopItems.length === 1 ? 'item' : 'items'}</span>
                </div>
                ${itemsHtml}
            </div>
        `;
    }

    cartItemsContainer.innerHTML = cartHtml;

    // Calculate Financials
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * TAX_RATE; // 5% demo tax
    const total = subtotal + tax;

    billSubtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    billTaxEl.textContent = `₹${tax.toFixed(2)}`;
    billTotalEl.textContent = `₹${total.toFixed(2)}`;
}

// =========================================================================
// 9. CHECKOUT & DEMO ORDER GENERATION (With Shop Grouping on Receipt)
// =========================================================================
function handleCheckout() {
    // 1. Validate Cart is not empty
    if (cart.length === 0) {
        alert("Your tray is empty! Please add items before checking out.");
        return;
    }

    // 2. Validate Pickup Time Slot (Mandatory requirement)
    const selectedSlot = pickupTimeSlot.value;
    if (!selectedSlot) {
        pickupTimeSlot.classList.add("input-error");
        slotError.classList.remove("hidden");
        pickupTimeSlot.focus();
        showToast("Please choose a pickup time slot!");
        return;
    } else {
        pickupTimeSlot.classList.remove("input-error");
        slotError.classList.add("hidden");
    }

    // 3. Optional Student Details
    const studentName = studentNameInput.value.trim() || "Campus Student";
    const studentRoll = studentRollInput.value.trim() || "LPU-" + Math.floor(1000 + Math.random() * 9000);

    // 4. Calculate Final Bill
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * TAX_RATE;
    const finalTotal = subtotal + tax;

    // 5. Generate Demo Order ID (e.g., #CC-84210)
    const orderId = "CC-" + Math.floor(10000 + Math.random() * 90000);
    const orderTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const orderDate = new Date().toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });

    // 6. Build Order Record with item shops
    const orderRecord = {
        orderId: orderId,
        date: orderDate,
        time: orderTime,
        studentName: studentName,
        studentRoll: studentRoll,
        pickupSlot: selectedSlot,
        items: [...cart],
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        finalTotal: finalTotal.toFixed(2)
    };

    // 7. Save Order to LocalStorage
    try {
        localStorage.setItem(STORAGE_LAST_ORDER_KEY, JSON.stringify(orderRecord));
    } catch (e) {
        console.error("Unable to save last order in localStorage", e);
    }

    // 8. Render Receipt in Modal grouped by shop
    renderReceiptModal(orderRecord);

    // 9. Reset Cart after successful order
    cart = [];
    saveCartToStorage();
    renderCart();

    // Reset Form Fields
    pickupTimeSlot.value = "";
    studentNameInput.value = "";
    studentRollInput.value = "";

    // Show Confirmation Modal
    receiptModal.classList.remove("hidden");
}

// Render Order Receipt in Modal (Grouped by Shop)
function renderReceiptModal(order) {
    // Group items by shop for the receipt
    const groupedShops = {};
    order.items.forEach(item => {
        const shop = item.shop || "Shop 1";
        if (!groupedShops[shop]) {
            groupedShops[shop] = [];
        }
        groupedShops[shop].push(item);
    });

    const shopsListStr = Object.keys(groupedShops).join(", ");

    let shopGroupsHtml = "";
    for (const [shopName, items] of Object.entries(groupedShops)) {
        const rows = items.map(item => `
            <tr>
                <td>${item.name} × ${item.quantity}</td>
                <td style="text-align: right;">₹${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `).join("");

        shopGroupsHtml += `
            <div class="receipt-shop-section">
                <span class="receipt-shop-title">🏪 ${shopName}</span>
                <table class="receipt-table">
                    <thead>
                        <tr>
                            <th>Item Details</th>
                            <th style="text-align: right;">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    }

    receiptContent.innerHTML = `
        <div class="receipt-card">
            <div class="receipt-token-header">
                <span class="text-muted text-small">CAMPUS CAFETERIA DEMO TOKEN</span>
                <div class="token-id">#${order.orderId}</div>
                <p class="text-small" style="color: #059669; font-weight: 600;">Pickup Counter: ${shopsListStr}</p>
            </div>

            <div class="receipt-meta">
                <div class="receipt-meta-item">
                    <strong>STUDENT / CUSTOMER</strong>
                    <span>${order.studentName} (${order.studentRoll})</span>
                </div>
                <div class="receipt-meta-item">
                    <strong>PICKUP TIME SLOT</strong>
                    <span style="color: #ea580c; font-weight: 700;">${order.pickupSlot}</span>
                </div>
                <div class="receipt-meta-item">
                    <strong>ORDER DATE & TIME</strong>
                    <span>${order.date} at ${order.time}</span>
                </div>
                <div class="receipt-meta-item">
                    <strong>DIET / PAYMENT</strong>
                    <span>100% Pure Veg • Pay at Counter</span>
                </div>
            </div>

            <!-- Grouped Shop Items -->
            ${shopGroupsHtml}

            <div class="receipt-total-box">
                <div class="bill-row">
                    <span>Subtotal</span>
                    <span>₹${order.subtotal}</span>
                </div>
                <div class="bill-row">
                    <span>Demo Tax (5%)</span>
                    <span>₹${order.tax}</span>
                </div>
                <div class="bill-row total-row">
                    <strong>Total Payable</strong>
                    <strong class="total-price">₹${order.finalTotal}</strong>
                </div>
            </div>
        </div>

        <div class="receipt-instruction">
            📢 <strong>Show Order Token #${order.orderId}</strong> at <strong>${shopsListStr}</strong> between <strong>${order.pickupSlot}</strong> to collect your food.
        </div>
    `;
}

// =========================================================================
// 10. VIEW LAST ORDER MODAL (Grouped by Shop)
// =========================================================================
function openLastOrderModal() {
    const lastOrderData = localStorage.getItem(STORAGE_LAST_ORDER_KEY);
    
    if (!lastOrderData) {
        lastOrderContent.innerHTML = `
            <div style="text-align: center; padding: 24px 0;">
                <span style="font-size: 2.5rem;">📋</span>
                <p style="margin-top: 10px; font-weight: 600;">No previous orders found</p>
                <p class="text-muted text-small">You haven't placed any demo order from this browser yet.</p>
            </div>
        `;
    } else {
        try {
            const order = JSON.parse(lastOrderData);

            // Group by shop
            const groupedShops = {};
            order.items.forEach(item => {
                const shop = item.shop || "Shop 1";
                if (!groupedShops[shop]) {
                    groupedShops[shop] = [];
                }
                groupedShops[shop].push(item);
            });

            let shopGroupsHtml = "";
            for (const [shopName, items] of Object.entries(groupedShops)) {
                const rows = items.map(item => `
                    <tr>
                        <td>${item.name} × ${item.quantity}</td>
                        <td style="text-align: right;">₹${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                `).join("");

                shopGroupsHtml += `
                    <div class="receipt-shop-section">
                        <span class="receipt-shop-title">🏪 ${shopName}</span>
                        <table class="receipt-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th style="text-align: right;">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>
                    </div>
                `;
            }

            lastOrderContent.innerHTML = `
                <div class="receipt-card">
                    <div class="receipt-token-header">
                        <span class="text-muted text-small">LAST PLACED ORDER</span>
                        <div class="token-id">#${order.orderId}</div>
                    </div>

                    <div class="receipt-meta">
                        <div class="receipt-meta-item">
                            <strong>NAME / ID</strong>
                            <span>${order.studentName} (${order.studentRoll})</span>
                        </div>
                        <div class="receipt-meta-item">
                            <strong>SCHEDULED PICKUP</strong>
                            <span style="color: #ea580c; font-weight: 700;">${order.pickupSlot}</span>
                        </div>
                        <div class="receipt-meta-item">
                            <strong>PLACED AT</strong>
                            <span>${order.date} ${order.time}</span>
                        </div>
                        <div class="receipt-meta-item">
                            <strong>TOTAL BILL</strong>
                            <span style="font-weight: 700;">₹${order.finalTotal}</span>
                        </div>
                    </div>

                    ${shopGroupsHtml}
                </div>
            `;
        } catch (e) {
            lastOrderContent.innerHTML = "<p>Error loading previous order data.</p>";
        }
    }

    lastOrderModal.classList.remove("hidden");
}

// =========================================================================
// 11. TOAST NOTIFICATION HELPER
// =========================================================================
let toastTimeout;
function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.style.opacity = "1";

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.classList.add("hidden"), 300);
    }, 2400);
}
