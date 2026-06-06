// ===== PRODUCT DATA =====
const products = {
    electronics: [
        {
            id: 1,
            title: "Wireless Bluetooth Earbuds with Noise Cancelling, 48H Playtime",
            price: 29.99,
            originalPrice: 59.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Earbuds",
            rating: 4.4,
            reviews: 12453,
            discount: 50,
            category: "electronics"
        },
        {
            id: 2,
            title: "Smart Watch Fitness Tracker with Heart Rate Monitor",
            price: 39.99,
            originalPrice: 79.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=SmartWatch",
            rating: 4.2,
            reviews: 8932,
            discount: 50,
            category: "electronics"
        },
        {
            id: 3,
            title: "10000mAh Portable Power Bank Fast Charging USB-C",
            price: 19.99,
            originalPrice: 34.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=PowerBank",
            rating: 4.6,
            reviews: 23456,
            discount: 43,
            category: "electronics"
        },
        {
            id: 4,
            title: "Mechanical Gaming Keyboard RGB Backlit 87 Keys",
            price: 45.99,
            originalPrice: 89.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Keyboard",
            rating: 4.5,
            reviews: 5678,
            discount: 49,
            category: "electronics"
        },
        {
            id: 5,
            title: "Wireless Gaming Mouse with 7 Programmable Buttons",
            price: 24.99,
            originalPrice: 49.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Mouse",
            rating: 4.3,
            reviews: 3421,
            discount: 50,
            category: "electronics"
        },
        {
            id: 6,
            title: "USB-C Hub Multiport Adapter 7-in-1 for Laptop",
            price: 22.99,
            originalPrice: 39.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=USB+Hub",
            rating: 4.4,
            reviews: 7845,
            discount: 43,
            category: "electronics"
        },
        {
            id: 7,
            title: "Ring Light 10\" with Tripod Stand for Streaming",
            price: 18.99,
            originalPrice: 35.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Ring+Light",
            rating: 4.1,
            reviews: 4532,
            discount: 47,
            category: "electronics"
        },
        {
            id: 8,
            title: "Bluetooth Speaker Waterproof Portable Outdoor 24W",
            price: 34.99,
            originalPrice: 69.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Speaker",
            rating: 4.7,
            reviews: 15678,
            discount: 50,
            category: "electronics"
        },
        {
            id: 9,
            title: "Webcam 1080P Full HD with Microphone for PC",
            price: 27.99,
            originalPrice: 54.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Webcam",
            rating: 4.3,
            reviews: 6789,
            discount: 49,
            category: "electronics"
        },
        {
            id: 10,
            title: "Wireless Charging Pad 15W Fast Qi Charger",
            price: 12.99,
            originalPrice: 24.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Charger",
            rating: 4.5,
            reviews: 9876,
            discount: 48,
            category: "electronics"
        }
    ],
    home: [
        {
            id: 11,
            title: "LED Desk Lamp with USB Charging Port Eye-Caring",
            price: 26.99,
            originalPrice: 45.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Desk+Lamp",
            rating: 4.6,
            reviews: 11234,
            discount: 41,
            category: "home"
        },
        {
            id: 12,
            title: "Air Purifier for Home Large Room with HEPA Filter",
            price: 89.99,
            originalPrice: 159.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Purifier",
            rating: 4.7,
            reviews: 8765,
            discount: 44,
            category: "home"
        },
        {
            id: 13,
            title: "Non-Stick Cookware Set 10 Piece Pots and Pans",
            price: 54.99,
            originalPrice: 99.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Cookware",
            rating: 4.4,
            reviews: 5432,
            discount: 45,
            category: "home"
        },
        {
            id: 14,
            title: "Robot Vacuum Cleaner with Mop 2-in-1 Smart Navigation",
            price: 149.99,
            originalPrice: 299.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Robot+Vacuum",
            rating: 4.3,
            reviews: 7654,
            discount: 50,
            category: "home"
        },
        {
            id: 15,
            title: "Electric Kettle Stainless Steel 1.7L Fast Boil",
            price: 24.99,
            originalPrice: 39.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Kettle",
            rating: 4.5,
            reviews: 13456,
            discount: 38,
            category: "home"
        },
        {
            id: 16,
            title: "Memory Foam Pillow Cervical Contour for Sleeping",
            price: 32.99,
            originalPrice: 59.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Pillow",
            rating: 4.4,
            reviews: 9234,
            discount: 45,
            category: "home"
        },
        {
            id: 17,
            title: "Shower Head High Pressure 6 Spray Modes",
            price: 15.99,
            originalPrice: 29.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Shower+Head",
            rating: 4.6,
            reviews: 18765,
            discount: 47,
            category: "home"
        },
        {
            id: 18,
            title: "Electric Toothbrush Sonic Rechargeable with 8 Heads",
            price: 21.99,
            originalPrice: 44.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Toothbrush",
            rating: 4.3,
            reviews: 6543,
            discount: 51,
            category: "home"
        }
    ],
    fashion: [
        {
            id: 19,
            title: "Men's Running Shoes Lightweight Breathable Athletic",
            price: 35.99,
            originalPrice: 69.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Shoes",
            rating: 4.3,
            reviews: 4567,
            discount: 49,
            category: "fashion"
        },
        {
            id: 20,
            title: "Women's Crossbody Bag Leather Small Shoulder Purse",
            price: 19.99,
            originalPrice: 39.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Purse",
            rating: 4.5,
            reviews: 3456,
            discount: 50,
            category: "fashion"
        },
        {
            id: 21,
            title: "Polarized Sunglasses for Men Women UV400 Protection",
            price: 14.99,
            originalPrice: 29.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Sunglasses",
            rating: 4.4,
            reviews: 8765,
            discount: 50,
            category: "fashion"
        },
        {
            id: 22,
            title: "Digital Watch Waterproof Sports LED for Men",
            price: 16.99,
            originalPrice: 34.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Watch",
            rating: 4.2,
            reviews: 5678,
            discount: 51,
            category: "fashion"
        },
        {
            id: 23,
            title: "Winter Beanie Hat Warm Knit Cap with Fleece Lining",
            price: 11.99,
            originalPrice: 22.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Beanie",
            rating: 4.6,
            reviews: 2345,
            discount: 48,
            category: "fashion"
        },
        {
            id: 24,
            title: "Travel Backpack Large Capacity Anti-Theft with USB Port",
            price: 28.99,
            originalPrice: 55.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Backpack",
            rating: 4.5,
            reviews: 12345,
            discount: 48,
            category: "fashion"
        },
        {
            id: 25,
            title: "Leather Belt Men's Casual Dress Automatic Buckle",
            price: 13.99,
            originalPrice: 26.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Belt",
            rating: 4.3,
            reviews: 7890,
            discount: 48,
            category: "fashion"
        },
        {
            id: 26,
            title: "Women's Athletic Sneakers Slip-On Walking Shoes",
            price: 29.99,
            originalPrice: 59.99,
            image: "https://via.placeholder.com/300x300/f0f0f0/333?text=Sneakers",
            rating: 4.4,
            reviews: 6543,
            discount: 50,
            category: "fashion"
        }
    ]
};

const allProducts = [...products.electronics, ...products.home, ...products.fashion];

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('mydrop_cart')) || [];

function saveCart() {
    localStorage.setItem('mydrop_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function addToCart(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    saveCart();
    updateCartCount();
    renderCart();
    showToast('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartItemQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart();
    updateCartCount();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartEmpty = document.getElementById('cartEmpty');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="#" class="continue-shopping" onclick="closeCart()">Continue Shopping</a>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }

    let html = '';
    let total = 0;
    let totalItems = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1)">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Delete</button>
                    </div>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    document.getElementById('cartItemCount').textContent = totalItems;
    document.getElementById('cartTotalPrice').textContent = `$${total.toFixed(2)}`;
    cartFooter.style.display = 'block';
}

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== RENDER STARS =====
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.3;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ===== FORMAT REVIEWS COUNT =====
function formatReviews(count) {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
}

// ===== RENDER PRODUCT CARD =====
function renderProductCard(product) {
    const priceParts = product.price.toFixed(2).split('.');
    return `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-card-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-card-title">${product.title}</div>
            <div class="product-card-rating">
                <span class="stars">${renderStars(product.rating)}</span>
                <span class="rating-count">${formatReviews(product.reviews)}</span>
            </div>
            <div class="product-card-price">
                <span class="price-symbol">$</span>
                <span class="price-whole">${priceParts[0]}</span>
                <span class="price-decimal">${priceParts[1]}</span>
            </div>
            <div class="product-card-prime">
                <i class="fas fa-check"></i> FREE Delivery
            </div>
        </div>
    `;
}

// ===== RENDER DEAL CARD =====
function renderDealCard(product) {
    const claimed = Math.floor(Math.random() * 60) + 20;
    return `
        <div class="deal-card" onclick="openProductModal(${product.id})">
            <div class="deal-card-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="deal-card-info">
                <span class="deal-badge">Up to ${product.discount}% off</span>
                <div class="deal-progress">
                    <div class="deal-progress-bar" style="width: ${claimed}%"></div>
                </div>
                <div class="deal-claimed">${claimed}% claimed</div>
                <div class="deal-card-title">${product.title}</div>
                <div class="deal-card-price">
                    <span class="deal-original-price">$${product.originalPrice.toFixed(2)}</span>
                    <span class="deal-current-price">$${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;
}

// ===== POPULATE CAROUSELS =====
function populateCarousels() {
    // Best Sellers
    const bestSellersEl = document.getElementById('bestSellersCarousel');
    bestSellersEl.innerHTML = products.electronics.map(p => renderProductCard(p)).join('');

    // Recommended
    const recommendedEl = document.getElementById('recommendedCarousel');
    const recommended = [...products.home, ...products.fashion].sort(() => Math.random() - 0.5);
    recommendedEl.innerHTML = recommended.map(p => renderProductCard(p)).join('');

    // Trending
    const trendingEl = document.getElementById('trendingCarousel');
    const trending = allProducts.sort(() => Math.random() - 0.5).slice(0, 12);
    trendingEl.innerHTML = trending.map(p => renderProductCard(p)).join('');

    // Deals
    const dealsEl = document.getElementById('dealsGrid');
    const deals = allProducts.sort(() => Math.random() - 0.5).slice(0, 4);
    dealsEl.innerHTML = deals.map(p => renderDealCard(p)).join('');
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.title;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalRating').innerHTML = `
        <span class="stars">${renderStars(product.rating)}</span>
        <span class="rating-text">${product.reviews.toLocaleString()} ratings</span>
    `;
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalOriginalPrice').textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById('modalDiscount').textContent = `-${product.discount}%`;

    document.getElementById('modalAddToCart').onclick = () => {
        const qty = parseInt(document.getElementById('modalQuantity').value);
        addToCart(productId, qty);
    };

    document.getElementById('modalBuyNow').onclick = () => {
        const qty = parseInt(document.getElementById('modalQuantity').value);
        addToCart(productId, qty);
        closeProductModal();
        openCart();
    };

    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== CART SIDEBAR =====
function openCart() {
    renderCart();
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartSidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== SIDE MENU =====
function openSideMenu() {
    document.getElementById('sideMenuOverlay').classList.add('active');
    document.getElementById('sideMenu').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSideMenu() {
    document.getElementById('sideMenuOverlay').classList.remove('active');
    document.getElementById('sideMenu').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== SIGN IN MODAL =====
function openSignInModal() {
    document.getElementById('signInModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSignInModal() {
    document.getElementById('signInModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== HERO CAROUSEL =====
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
let autoSlideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// ===== PRODUCT CAROUSEL SCROLL =====
function scrollCarousel(carouselId, direction) {
    const carouselMap = {
        bestSellers: 'bestSellersCarousel',
        recommended: 'recommendedCarousel',
        trending: 'trendingCarousel'
    };
    const carousel = document.getElementById(carouselMap[carouselId]);
    if (!carousel) return;
    const scrollAmount = 600;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// ===== SEARCH FUNCTIONALITY =====
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;

    const results = allProducts.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        // Show first result in modal
        openProductModal(results[0].id);
        showToast(`Found ${results.length} result(s) for "${query}"`);
    } else {
        showToast(`No results found for "${query}"`);
    }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Populate content
    populateCarousels();
    updateCartCount();

    // Hero carousel
    document.getElementById('carouselNext').addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    document.getElementById('carouselPrev').addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    startAutoSlide();

    // Product carousel arrows
    document.querySelectorAll('.product-carousel-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            const carouselId = arrow.dataset.carousel;
            const direction = arrow.classList.contains('product-carousel-next') ? 1 : -1;
            scrollCarousel(carouselId, direction);
        });
    });

    // Cart
    document.getElementById('cartBtn').addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);

    // Side menu
    document.getElementById('allMenuBtn').addEventListener('click', openSideMenu);
    document.getElementById('sideMenuClose').addEventListener('click', closeSideMenu);
    document.getElementById('sideMenuOverlay').addEventListener('click', closeSideMenu);

    // Product modal
    document.getElementById('modalClose').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) {
            closeProductModal();
        }
    });

    // Sign in
    document.getElementById('accountBtn').addEventListener('click', (e) => {
        e.preventDefault();
        openSignInModal();
    });
    document.getElementById('heroSignInBtn').addEventListener('click', openSignInModal);
    document.getElementById('signInModalClose').addEventListener('click', closeSignInModal);
    document.getElementById('signInModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('signInModal')) {
            closeSignInModal();
        }
    });
    document.getElementById('signInSubmit').addEventListener('click', () => {
        showToast('Sign in feature coming soon!');
        closeSignInModal();
    });

    // Search
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Back to top
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        showToast('Checkout feature coming soon!');
    });

    // Keyboard escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProductModal();
            closeCart();
            closeSideMenu();
            closeSignInModal();
        }
    });
});