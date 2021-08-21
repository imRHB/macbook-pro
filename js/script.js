document.getElementById('btn-memory-default').addEventListener('click', function () {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    extraMemoryCostText.innerText = 0;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

document.getElementById('btn-memory-double').addEventListener('click', function () {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    extraMemoryCostText.innerText = 180;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

document.getElementById('btn-storage-default').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 0;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

document.getElementById('btn-storage-double').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 100;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

document.getElementById('btn-storage-complete').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 180;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

document.getElementById('btn-delivery-free').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-cost');
    deliveryChargeText.innerText = 0;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

document.getElementById('btn-delivery-express').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-cost');
    deliveryChargeText.innerText = 20;
    const totalCostText = document.getElementById('total-cost');
    const totalCost = updatePrice();
    totalCostText.innerText = totalCost;
});

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

document.getElementById('btn-promo-apply').addEventListener('click', function () {
    let totalPrice = updatePrice();
    const priceTotal = document.getElementById('price-total');
    const promoCodeField = document.getElementById('input-field-promo');
    const promoCode = promoCodeField.value;
    if (promoCode == 'stevekaku') {
        totalPrice = totalPrice - ((totalPrice * 20) / 100);
        priceTotal.innerText = totalPrice;
    }
    else {
        alert('Invalid Promo Code entered!');
    }
    promoCodeField.value = '';
});
