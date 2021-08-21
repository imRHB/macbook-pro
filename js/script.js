document.getElementById('btn-memory-default').addEventListener('click', function () {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    extraMemoryCostText.innerText = 0;
    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
});

document.getElementById('btn-memory-double').addEventListener('click', function () {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    extraMemoryCostText.innerText = 180;

    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
});
document.getElementById('btn-storage-default').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 0;
    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
});
document.getElementById('btn-storage-double').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 100;
    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
});
document.getElementById('btn-storage-complete').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 180;
    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
});
document.getElementById('btn-delivery-free').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-cost');
    deliveryChargeText.innerText = 0;
    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
});
document.getElementById('btn-delivery-express').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-cost');
    deliveryChargeText.innerText = 20;
    const totalCostText = document.getElementById('total-cost');
    const total = updatePrice();
    totalCostText.innerText = total;
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
    const grandTotal = bestCostAmount + extraMemoryCostAmount + extraStorageCostAmount + deliveryChargeAmount;
    return grandTotal;
};