/* 
    Define variables as globally
*/

const defaultSizeMemoryCost = 0;
const doubleSizeMemoryCost = 180;
const defaultSizeStorageCost = 0;
const doubleSizeStorageCost = 100;
const completeStorageCost = 180;
const freeDeliveryCost = 0;
const expressDeliveryCost = 20;

/* 
    Function to get the memory, storage and delivery option
*/

function getChoice(choice, choiceId) {
    const additionalChoice = document.getElementById(choiceId);
    additionalChoice.innerText = choice;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
};

/* 
    Button handler for 8GB Unified Memory
*/

document.getElementById('btn-memory-default').addEventListener('click', function () {
    getChoice(defaultSizeMemoryCost, 'extra-memory-cost');
});

/*
    Button handler for 16GB Unified Memory
*/

document.getElementById('btn-memory-double').addEventListener('click', function () {
    getChoice(doubleSizeMemoryCost, 'extra-memory-cost');
});

/*
    Button handler for 256GB SSD Storage
*/

document.getElementById('btn-storage-default').addEventListener('click', function () {
    getChoice(defaultSizeStorageCost, 'extra-storage-cost');
});

/*
    Button handler for 512GB SSD Storage
*/

document.getElementById('btn-storage-double').addEventListener('click', function () {
    getChoice(doubleSizeStorageCost, 'extra-storage-cost');
});

/*
    Button handler for 1TB SSD Storage
*/

document.getElementById('btn-storage-complete').addEventListener('click', function () {
    getChoice(completeStorageCost, 'extra-storage-cost');
});

/*
    Button handler for free delivery
*/

document.getElementById('btn-delivery-free').addEventListener('click', function () {
    getChoice(freeDeliveryCost, 'delivery-cost');
});

/*
    Button handler for express delivery
*/

document.getElementById('btn-delivery-express').addEventListener('click', function () {
    getChoice(expressDeliveryCost, 'delivery-cost');
});

/*
    Function for calculate the total price
*/

function updatePrice() {
    const bestPriceText = document.getElementById('best-cost');
    const bestCostAmount = parseFloat(bestPriceText.innerText);
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    const extraMemoryCostAmount = parseFloat(extraMemoryCostText.innerText);
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    const extraStorageCostAmount = parseFloat(extraStorageCostText.innerText);
    const deliveryChargeText = document.getElementById('delivery-cost');
    const deliveryChargeAmount = parseFloat(deliveryChargeText.innerText);
    const totalCost = bestCostAmount + extraMemoryCostAmount + extraStorageCostAmount + deliveryChargeAmount;

    const priceTotal = document.getElementById('price-total');
    priceTotal.innerText = totalCost;

    return totalCost;
};

/*
    Button handler for promo code, promo code validation and final calculation
*/

document.getElementById('btn-promo-apply').addEventListener('click', function () {
    let totalPrice = updatePrice();
    const priceTotal = document.getElementById('price-total');
    const promoCodeField = document.getElementById('input-field-promo');
    const promoCode = promoCodeField.value;
    const validPromo = document.getElementById('valid-promo');
    const invalidPromo = document.getElementById('invalid-promo');
    const emptyPromo = document.getElementById('empty-promo');
    if (promoCode.toLowerCase() == 'stevekaku') {
        totalPrice = totalPrice - ((totalPrice * 20) / 100);
        priceTotal.innerText = totalPrice;
        validPromo.style.display = 'block';
        invalidPromo.style.display = 'none';
        emptyPromo.style.display = 'none';
    }
    else if (promoCode == '') {
        validPromo.style.display = 'none';
        invalidPromo.style.display = 'none';
        emptyPromo.style.display = 'block';
    }
    else {
        const invalidPromo = document.getElementById('invalid-promo');
        validPromo.style.display = 'none';
        invalidPromo.style.display = 'block';
        emptyPromo.style.display = 'none';
    }
    promoCodeField.value = '';
});
