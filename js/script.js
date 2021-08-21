/* function getMemory(memoryOption) {
    const memoryDefault = document.getElementById('btn-mem-' + memoryOption);
    // const memoryDouble = document.getElementById(memoryOption + memoryOption);

    const priceBasic = document.getElementById('price-basic');
    const priceExtraMemory = document.getElementById('price-extra-mem');
    const priceExtraStorage = document.getElementById('price-extra-stor');
    const deliveryCharge = document.getElementById('');
    const priceTotal = document.getElementById('price-total');
    let basicAmount = parseFloat(priceBasic.innerText);
    const extraMemoryCost = parseFloat(priceExtraMemory.innerText);
    const extraStorageCost = parseFloat(priceExtraStorage);
    const deliveryChargeCost = parseFloat(deliveryCharge);
    const totalCost = parseFloat(priceTotal);

    if (memoryOption == 'double') {
        memoryPrice = priceBasic.innerText + 180;
    }
    else {
        memoryPrice = priceBasic.innerText + 0;
    }
    return memoryPrice;

};
const memoryPrice = getMemory();

function getStorage() {
    const storageDefault = document.getElementById('btn-stor-default');
    const storageDouble = document.getElementById('btn-stor-double');
    const storageComplete = document.getElementById('btn-stor-complete');

};

function deliveryCost() {
    const deliveryFree = document.getElementById('btn-del-free');
    const deliveryExpress = document.getElementById('btn-del-exp');
};

function priceTotal() {
    const priceBasic = document.getElementById('price-basic');
    const priceExtraMemory = document.getElementById('price-extra-mem');
    const priceExtraStorage = document.getElementById('price-extra-stor');
    const deliveryCharge = document.getElementById('');
    const priceTotal = document.getElementById('price-total');
    let basicAmount = parseFloat(priceBasic.innerText);
    const extraMemoryCost = parseFloat(priceExtraMemory.innerText);
    const extraStorageCost = parseFloat(priceExtraStorage);
    const deliveryChargeCost = parseFloat(deliveryCharge);
    const totalCost = parseFloat(priceTotal);
    getMemory();
    basicAmount = basicAmount + 180;
    priceBasic.innerText = basicAmount;
}; */

// new code

/* function memoryOption() {
    const memory = document.getElementById('btn-mem-' + memorySize);

};

function priceCount() {
    const defaultMemoryPrice = getElementById()
};

document.getElementById('btn-mem-default').addEventListener('click', function () {
    memoryOption('default');
}) */

/* function memoryDouble() {
    document.getElementById()
}

document.getElementById('btn-mem-default').addEventListener('click', function () {
    const bestCost = document.getElementById('basic-cost');
    const bestPrice = parseFloat(bestCost.innerText);
    bestCost.innerText = bestPrice;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryPrice = parseFloat(extraMemoryCost.innerText);
    extraMemoryCost.innerText = extraMemoryPrice;
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraStroragePrice = parseFloat(extraStorageCost.innerText);
    extraStorageCost.innerText = extraStroragePrice;
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCharge = parseFloat(deliveryCost.innerText);
    deliveryCost.innerText = deliveryCharge;
    const totalCost = document.getElementById('total-cost');
    const totalPrice = parseFloat(totalCost.innerText);
    totalCost.innerText = totalPrice;
});

document.getElementById('btn-mem-double').addEventListener('click', function () {
    const bestCost = document.getElementById('basic-cost');
    const bestPrice = parseFloat(bestCost.innerText);
    bestCost.innerText = bestPrice;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryPrice = parseFloat(extraMemoryCost.innerText) + 180;
    extraMemoryCost.innerText = extraMemoryPrice;
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraStroragePrice = parseFloat(extraStorageCost.innerText);
    extraStorageCost.innerText = extraStroragePrice;
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCharge = parseFloat(deliveryCost.innerText);
    deliveryCost.innerText = deliveryCharge;
    const totalCost = document.getElementById('total-cost');
    const totalPrice = parseFloat(totalCost.innerText) + extraMemoryPrice + extraStroragePrice + deliveryCharge;
    totalCost.innerText = totalPrice;
}); */
/* 
function defaultMemory() {
    const defaultMemoryText = document.getElementById('extra-memory-cost');
    const defaultMemoryPrice = 0;
    defaultMemoryText.innerText = defaultMemoryPrice;
    return defaultMemoryPrice;
};

function doubleMemory() {
    const doubleMemoryText = document.getElementById('extra-memory-cost');
    const doubleMemoryPrice = 180;
    doubleMemoryText.innerText = doubleMemoryPrice;
    return doubleMemoryPrice;
};

function defaultStorage() {
    const defaultStorageText = document.getElementById('extra-storage-cost');
    const defaultStoragePrice = 0;
    defaultStorageText.innerText = defaultStoragePrice;
    return defaultStoragePrice;
};

function doubleStorage() {
    const doubleStorageText = document.getElementById('complete-storage-cost');
    const doubleStoragePrice = 100;
    doubleStorageText.innerText = doubleStoragePrice;
    return doubleStoragePrice;
};

function completeStorage() {
    // const completeStorageText = document.getElementById('extra-storage-cost');
    const completeStoragePrice = 180;
    // completeStorageText.innerText = completeStoragePrice;
    return completeStoragePrice;
}; */


/* function priceUpdate() {
    const bestPrice = 1299;

    const defaultMemoryPrice = defaultMemory();
    const doubleMemoryPrice = doubleMemory();
    const defaultStoragePrice = defaultStorage();
    const doubleStoragePrice = doubleStorage();
    const completeStoragePrice = completeStorage();

    const completeStorageText = document.getElementById('extra-storage-cost');
    completeStorageText.innerText = completeStoragePrice;

    let totalPriceText = document.getElementById('total-cost');
    let totalPrice = bestPrice + completeStoragePrice;
    totalPriceText.innerText = totalPrice;
}; */
function priceUpdate() {

};

/* function getMemory(memoryOption) {
    const memory = document.getElementById('btn-memory-' + memoryOption);

}; */

/* function updatePrice() {
    const bestPriceText = document.getElementById('best-cost');
    const bestCostAmount = parseFloat(bestPriceText.innerText);
    const totalCostText = document.getElementById('total-cost');
    const totalCostAmount = parseFloat(totalCostText.innerText);
    totalCostAmount = totalCostAmount + bestCostAmount;
    return totalCostAmount;
}; */



document.getElementById('btn-memory-default').addEventListener('click', function () {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    extraMemoryCostText.innerText = 0;
    // const extraMemoryCostAmount = extraMemoryCostText.innerText;
    // return extraMemoryCostAmount;
});

document.getElementById('btn-memory-double').addEventListener('click', function () {
    const extraMemoryCostText = document.getElementById('extra-memory-cost');
    // const extraMemoryCostAmount = 180;
    extraMemoryCostText.innerText = 180;
    // extraMemoryCostText.innerText = extraMemoryCostAmount;
    // const totalPriceText = document.getElementById('total-cost');
    // const totalPriceAmount = parseFloat(totalPriceText.innerText) + extraMemoryCostAmount;
    // totalPriceText.innerText = totalPriceAmount;
});
document.getElementById('btn-storage-default').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 0;
});
document.getElementById('btn-storage-double').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 100;
});
document.getElementById('btn-storage-complete').addEventListener('click', function () {
    const extraStorageCostText = document.getElementById('extra-storage-cost');
    extraStorageCostText.innerText = 180;
});
document.getElementById('btn-delivery-free').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-cost');
    deliveryChargeText.innerText = 0;
});
document.getElementById('btn-delivery-express').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-cost');
    deliveryChargeText.innerText = 20;
});

/*
function memoryDefault() {
    const bestCost = document.getElementById('basic-cost');
    // const bestPrice = parseFloat(bestCost.innerText);
    // bestPrice = 1299 + price;
    bestCost.innerText = 1299;

    const extraMemoryCost = document.getElementById('extra-memory-cost');
    // let extraMemoryPrice = parseFloat(extraMemoryCost.innerText);
    let extraMemoryPrice = 0 + defaultMemoryPrice;
    extraMemoryCost.innerText = extraMemoryPrice;

    const extraStorageCost = document.getElementById('extra-storage-cost');
    let extraStroragePrice = 0 + defaultStoragePrice;
    extraStorageCost.innerText = extraStroragePrice;

    const deliveryCost = document.getElementById('delivery-cost');
    let deliveryCharge = 0 + freeDeliveryCharge;
    deliveryCost.innerText = deliveryCharge;

    const totalCost = document.getElementById('total-cost');
    let totalPrice = parseFloat(totalCost.innerText);
    totalPrice = 1299 + extraMemoryPrice + extraStroragePrice + deliveryCharge;
    totalCost.innerText = totalPrice;
};
 */



/* function memoryDefault(price) {
    const bestCost = document.getElementById('basic-cost');
    // const bestPrice = parseFloat(bestCost.innerText);
    // bestPrice = 1299 + price;
    bestCost.innerText = 1299;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    let extraMemoryPrice = parseFloat(extraMemoryCost.innerText);
    extraMemoryPrice = 0 + price;
    extraMemoryCost.innerText = extraMemoryPrice;
    let extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 0;
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    const totalCost = document.getElementById('total-cost');
    let totalPrice = parseFloat(totalCost.innerText);
    totalPrice = 1299 + extraMemoryPrice;
    totalCost.innerText = totalPrice;
}; */
/*
function memoryDouble(price) {
    const bestCost = document.getElementById('basic-cost');
    // const bestPrice = parseFloat(bestCost.innerText);
    // bestPrice = 1299 + price;
    bestCost.innerText = 1299;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    let extraMemoryPrice = parseFloat(extraMemoryCost.innerText);
    extraMemoryPrice = 0 + price;
    extraMemoryCost.innerText = extraMemoryPrice;
    let extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 0;
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    const totalCost = document.getElementById('total-cost');
    let totalPrice = parseFloat(totalCost.innerText);
    totalPrice = 1299 + extraMemoryPrice;
    totalCost.innerText = totalPrice;
};

function storageDefault() {
    const bestCost = document.getElementById('basic-cost');
    // const bestPrice = parseFloat(bestCost.innerText);
    // bestPrice = 1299 + price;
    bestCost.innerText = 1299;
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    let extraMemoryPrice = parseFloat(extraMemoryCost.innerText);
    extraMemoryPrice = 0;
    extraMemoryCost.innerText = extraMemoryPrice;
    let extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = 0;
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    const totalCost = document.getElementById('total-cost');
    let totalPrice = parseFloat(totalCost.innerText);
    totalPrice = 1299 + extraMemoryPrice;
    totalCost.innerText = totalPrice;
};

const defaultMemoryPrice = 0;
const doubleMemoryPrice = 180;
const defaultStoragePrice = 0;
const doubleStoragePrice = 100;
const completeStoragePrice = 180;
const freeDeliveryCharge = 0;
const expressDeliveryCharge = 20;

document.getElementById('btn-memory-default').addEventListener('click', function () {

    memoryDefault();
});

document.getElementById('btn-memory-double').addEventListener('click', function () {

    memoryDouble(180);
});

document.getElementById('btn-storage-default').addEventListener('click', function () {
    storageDefault(0);
}) */