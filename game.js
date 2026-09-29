const DRINKS = [
    { id: "tra_xanh_sua", name: "Trà xanh sữa", price: 25000, emoji: "🍵", recipe: { tra: 1, sua: 1, duong: 1, da: 1 } },
    { id: "tra_chanh", name: "Trà chanh", price: 20000, emoji: "🍋", recipe: { tra: 1, chanh: 1, duong: 1, da: 1 } },
    { id: "tra_dau", name: "Trà dâu", price: 25000, emoji: "🍓", recipe: { tra: 1, dau: 1, duong: 1, da: 1 } },
    { id: "tra_oi", name: "Trà ổi", price: 25000, emoji: "🍐", recipe: { tra: 1, oi: 1, duong: 1, da: 1 } },
    { id: "tra_dao", name: "Trà đào", price: 25000, emoji: "🍑", recipe: { tra: 1, dao: 1, duong: 1, da: 1 } },
    { id: "tra_bi_dao", name: "Trà bí đao", price: 20000, emoji: "🥤", recipe: { bi_dao: 1, duong: 1, da: 1 } },
    { id: "sua_dau", name: "Sữa dâu", price: 25000, emoji: "🥛", recipe: { sua: 2, dau: 1, duong: 1, da: 1 } },
    { id: "sua_tuoi_tran_chau_duong_den", name: "Sữa tươi trân châu đường đen", price: 30000, emoji: "🧋", recipe: { sua: 2, duong_den: 1, da: 1 } },
    { id: "sua_dua", name: "Sữa dứa", price: 25000, emoji: "🍍", recipe: { sua: 1, dua: 1, duong: 1, da: 1 } },
    { id: "sua_dau_nanh", name: "Sữa đậu nành", price: 20000, emoji: "🥛", recipe: { dau_nanh: 2, duong: 1, da: 1 } }
];

const TOPPINGS = [
    { id: "tran_chau", name: "Trân châu", price: 5000, emoji: "⚫", recipe: { tran_chau: 1 } },
    { id: "thach", name: "Thạch", price: 5000, emoji: "🟪", recipe: { thach: 1 } },
    { id: "rau_cau", name: "Rau câu", price: 5000, emoji: "🟩", recipe: { rau_cau: 1 } },
    { id: "banh_flan", name: "Bánh flan", price: 8000, emoji: "🍮", recipe: { banh_flan: 1 } }
];

const INGREDIENTS = [
    { id: "tra", name: "Trà", emoji: "🍃", unit: "gói", pack: 10, packPrice: 8000 },
    { id: "sua", name: "Sữa tươi", emoji: "🥛", unit: "phần", pack: 10, packPrice: 12000 },
    { id: "duong", name: "Đường", emoji: "🍚", unit: "phần", pack: 10, packPrice: 4000 },
    { id: "da", name: "Đá", emoji: "🧊", unit: "phần", pack: 10, packPrice: 2000 },
    { id: "chanh", name: "Chanh", emoji: "🍋", unit: "quả", pack: 10, packPrice: 5000 },
    { id: "dau", name: "Dâu", emoji: "🍓", unit: "phần", pack: 10, packPrice: 10000 },
    { id: "oi", name: "Ổi", emoji: "🍐", unit: "phần", pack: 10, packPrice: 7000 },
    { id: "dao", name: "Đào", emoji: "🍑", unit: "phần", pack: 10, packPrice: 9000 },
    { id: "bi_dao", name: "Bí đao", emoji: "🥒", unit: "phần", pack: 10, packPrice: 6000 },
    { id: "dua", name: "Dứa", emoji: "🍍", unit: "phần", pack: 10, packPrice: 7000 },
    { id: "dau_nanh", name: "Đậu nành", emoji: "🫘", unit: "phần", pack: 10, packPrice: 9000 },
    { id: "duong_den", name: "Đường đen", emoji: "🟤", unit: "phần", pack: 10, packPrice: 6000 },
    { id: "tran_chau", name: "Trân châu", emoji: "⚫", unit: "phần", pack: 10, packPrice: 8000 },
    { id: "thach", name: "Thạch", emoji: "🟪", unit: "phần", pack: 10, packPrice: 7000 },
    { id: "rau_cau", name: "Rau câu", emoji: "🟩", unit: "phần", pack: 10, packPrice: 7000 },
    { id: "banh_flan", name: "Bánh flan", emoji: "🍮", unit: "cái", pack: 10, packPrice: 15000 }
];

const game = {
    day: 1,
    money: 100000,
    hour: 5,
    minute: 0,
    state: "morning",
    shopOpen: false,
    customerWaiting: false,
    ingredientsBought: false,
    cleaned: false,
    preparedDrink: false,
    prepStep: 0,
    selectedDrink: null,
    selectedTopping: null,
    requestedDrink: null,
    requestedTopping: null,
    secondsPerGameMinute: 0.125,
    timer: null,
    customerTimer: null,
    targetCustomers: 12,
    servedCustomers: 0,
    leftCustomers: 0,
    patience: 100,
    patienceDrainPerSecond: 4,
    inventory: {}
};

const el = {
    day: document.getElementById("day"),
    money: document.getElementById("money"),
    time: document.getElementById("time"),
    state: document.getElementById("state"),
    customer: document.getElementById("customer"),
    log: document.getElementById("log"),
    buyBtn: document.getElementById("buyBtn"),
    cleanBtn: document.getElementById("cleanBtn"),
    openBtn: document.getElementById("openBtn"),
    orderPanel: document.getElementById("orderPanel"),
    requestedDrink: document.getElementById("requestedDrink"),
    requestedToppingText: document.getElementById("requestedToppingText"),
    drinkMenu: document.getElementById("drinkMenu"),
    toppingMenu: document.getElementById("toppingMenu"),
    selectedDrink: document.getElementById("selectedDrink"),
    selectedTopping: document.getElementById("selectedTopping"),
    makeBtn: document.getElementById("makeBtn"),
    serveBtn: document.getElementById("serveBtn"),
    customerCount: document.getElementById("customerCount"),
    leftCount: document.getElementById("leftCount"),
    patienceBar: document.getElementById("patienceBar"),
    patienceText: document.getElementById("patienceText"),
    mood: document.getElementById("mood"),
    inventory: document.getElementById("inventory"),
    inventoryPanel: document.getElementById("inventoryPanel"),
    buyMoreBtn: document.getElementById("buyMoreBtn"),
    prepPanel: document.getElementById("prepPanel"),
    prepStepText: document.getElementById("prepStepText"),
    prepBar: document.getElementById("prepBar"),
    prepHint: document.getElementById("prepHint"),
    inventoryToggle: document.getElementById("inventoryToggle"),
    logToggle: document.getElementById("logToggle")
};

function formatMoney(value) {
    return value.toLocaleString("vi-VN");
}

function getDrink(id) {
    return DRINKS.find(drink => drink.id === id);
}

function getTopping(id) {
    return id ? TOPPINGS.find(topping => topping.id === id) : null;
}

function getIngredient(id) {
    return INGREDIENTS.find(item => item.id === id);
}

function getRecipe(drinkId, toppingId) {
    const recipe = { ...getDrink(drinkId).recipe };
    const topping = getTopping(toppingId);

    if (topping) {
        Object.entries(topping.recipe).forEach(([id, amount]) => {
            recipe[id] = (recipe[id] || 0) + amount;
        });
    }

    return recipe;
}

function getMissingIngredients(recipe) {
    return Object.entries(recipe)
        .filter(([id, amount]) => (game.inventory[id] || 0) < amount)
        .map(([id, amount]) => ({
            item: getIngredient(id),
            need: amount,
            have: game.inventory[id] || 0
        }));
}

function updateUI() {
    el.day.textContent = game.day;
    el.money.textContent = formatMoney(game.money);
    el.time.textContent =
        String(game.hour).padStart(2, "0") + ":" +
        String(game.minute).padStart(2, "0");

    const names = {
        morning: "Buổi sáng",
        shopping: "Đang mua nguyên liệu",
        cleaning: "Đang dọn quán",
        preparing: "Đang chuẩn bị",
        serving: "Đang phục vụ khách",
        end: "Kết thúc ngày"
    };

    el.state.textContent = names[game.state] || game.state;

    el.customer.classList.toggle("hidden", !game.customerWaiting);
    el.orderPanel.classList.toggle("hidden", !game.customerWaiting);

    el.makeBtn.disabled =
        !game.customerWaiting ||
        !game.selectedDrink ||
        game.preparedDrink;

    const prepSteps = [
        "Chọn đúng món và topping để bắt đầu.",
        "Bước 1/4: Đặt ly và cho phần nền.",
        "Bước 2/4: Thêm đường / vị chính.",
        "Bước 3/4: Thêm đá và khuấy nhẹ.",
        "Bước 4/4: Thêm topping và lắc hoàn thiện!"
    ];
    if (el.prepStepText) el.prepStepText.textContent = `${game.prepStep} / 4`;
    if (el.prepBar) el.prepBar.style.width = `${Math.min(100, game.prepStep * 25)}%`;
    if (el.prepHint) {
        el.prepHint.textContent = game.preparedDrink
            ? "✨ Ly đã hoàn thành! Giao khách thôi!"
            : prepSteps[game.prepStep] || prepSteps[0];
    }
    if (el.makeBtn) {
        el.makeBtn.textContent = game.prepStep === 0 ? "🧋 Bắt đầu pha" : `✨ Làm bước ${game.prepStep + 1}`;
    }

    el.serveBtn.disabled =
        !game.customerWaiting ||
        !game.preparedDrink;

    if (el.customerCount) el.customerCount.textContent = `${game.servedCustomers} / ${game.targetCustomers}`;
    if (el.leftCount) el.leftCount.textContent = game.leftCustomers;
    if (el.patienceBar) el.patienceBar.style.width = Math.max(0, game.patience) + "%";
    if (el.patienceText) el.patienceText.textContent = Math.max(0, Math.round(game.patience)) + "%";
    if (el.mood) el.mood.textContent = getMood(game.patience);

    renderInventory();
    updateSelectedOrder();
}

function log(message) {
    const line = document.createElement("div");
    line.className = "log-line";
    line.textContent = "• " + message;
    el.log.prepend(line);
}

function renderMenus() {
    el.drinkMenu.innerHTML = "";
    el.toppingMenu.innerHTML = "";

    DRINKS.forEach(drink => {
        const button = document.createElement("button");
        button.className = "menu-btn";
        button.dataset.id = drink.id;
        button.textContent = `${drink.emoji} ${drink.name}`;
        button.addEventListener("click", () => selectDrink(drink.id));
        el.drinkMenu.appendChild(button);
    });

    const noTopping = document.createElement("button");
    noTopping.className = "topping-btn";
    noTopping.dataset.id = "none";
    noTopping.textContent = "🚫 Không topping";
    noTopping.addEventListener("click", () => selectTopping(null));
    el.toppingMenu.appendChild(noTopping);

    TOPPINGS.forEach(topping => {
        const button = document.createElement("button");
        button.className = "topping-btn";
        button.dataset.id = topping.id;
        button.textContent = `${topping.emoji} ${topping.name}`;
        button.addEventListener("click", () => selectTopping(topping.id));
        el.toppingMenu.appendChild(button);
    });
}

function renderInventory() {
    if (!el.inventory) return;

    el.inventory.innerHTML = "";
    INGREDIENTS.forEach(item => {
        const card = document.createElement("div");
        card.className = "inventory-item";
        const amount = game.inventory[item.id] || 0;
        card.innerHTML = `
            <div class="inventory-name">${item.emoji} ${item.name}</div>
            <strong>${amount}</strong>
            <span>${item.unit}</span>
        `;
        card.title = `Mua ${item.pack} ${item.unit}: ${formatMoney(item.packPrice)}đ`;
        el.inventory.appendChild(card);
    });
}

function initInventory() {
    INGREDIENTS.forEach(item => {
        game.inventory[item.id] = 0;
    });
}

function buyStarterIngredients() {
    if (game.ingredientsBought) {
        log("Bạn đã mua lô nguyên liệu đầu ngày rồi. Có thể bấm Mua thêm để bổ sung kho.");
        return;
    }

    const starter = 20000;
    if (game.money < starter) {
        log("Không đủ tiền để mua lô nguyên liệu đầu ngày.");
        return;
    }

    const starterAmounts = {
        tra: 5, sua: 5, duong: 5, da: 5,
        chanh: 5, dau: 5, oi: 5, dao: 5,
        bi_dao: 5, dua: 5, dau_nanh: 5, duong_den: 5,
        tran_chau: 5, thach: 5, rau_cau: 5, banh_flan: 5
    };

    game.money -= starter;
    Object.entries(starterAmounts).forEach(([id, amount]) => {
        game.inventory[id] += amount;
    });
    game.ingredientsBought = true;
    game.state = "shopping";

    log("🛒 Đã nhập kho lô nguyên liệu đầu ngày: mỗi loại +5. -20.000đ");
    updateUI();
}

function buyMoreIngredients() {
    if (game.shopOpen) {
        log("Quán đang mở. Bạn vẫn có thể mua thêm nguyên liệu, nhưng khách đang chờ nên hãy nhanh tay!");
    }

    const choice = prompt(
        "Nhập tên nguyên liệu muốn mua:\n\n" +
        INGREDIENTS.map(item => `${item.name} (+${item.pack} ${item.unit}) — ${formatMoney(item.packPrice)}đ`).join("\n")
    );

    if (!choice) return;

    const normalized = choice.trim().toLowerCase();
    const item = INGREDIENTS.find(candidate => candidate.name.toLowerCase() === normalized);

    if (!item) {
        log("❌ Không tìm thấy nguyên liệu đó. Hãy nhập đúng tên.");
        return;
    }

    if (game.money < item.packPrice) {
        log(`❌ Không đủ tiền mua ${item.name}. Cần ${formatMoney(item.packPrice)}đ.`);
        return;
    }

    game.money -= item.packPrice;
    game.inventory[item.id] += item.pack;
    game.ingredientsBought = true;
    log(`🛒 Mua thêm ${item.name}: +${item.pack} ${item.unit}. -${formatMoney(item.packPrice)}đ.`);
    updateUI();
}

function selectDrink(id) {
    if (game.preparedDrink) {
        log("Món đã pha xong. Hãy giao cho khách trước.");
        return;
    }

    game.selectedDrink = id;
    log("Đã chọn " + getDrink(id).name + ".");
    refreshMenuSelection();
    updateUI();
}

function selectTopping(id) {
    if (game.preparedDrink) {
        log("Món đã pha xong. Hãy giao cho khách trước.");
        return;
    }

    game.selectedTopping = id;
    log(id ? "Đã chọn " + getTopping(id).name + "." : "Không thêm topping.");
    refreshMenuSelection();
    updateUI();
}

function refreshMenuSelection() {
    document.querySelectorAll(".menu-btn").forEach(button => {
        button.classList.toggle("selected", button.dataset.id === game.selectedDrink);
    });

    document.querySelectorAll(".topping-btn").forEach(button => {
        const selectedId = game.selectedTopping || "none";
        button.classList.toggle("selected", button.dataset.id === selectedId);
    });
}

function updateSelectedOrder() {
    if (!game.selectedDrink) {
        el.selectedDrink.textContent = "Chưa chọn";
    } else {
        const drink = getDrink(game.selectedDrink);
        el.selectedDrink.textContent = drink.emoji + " " + drink.name;
    }

    if (!game.selectedTopping) {
        el.selectedTopping.textContent = "+ Không topping";
    } else {
        const topping = getTopping(game.selectedTopping);
        el.selectedTopping.textContent = "+ " + topping.emoji + " " + topping.name;
    }
}

function getMood(patience) {
    if (!game.customerWaiting) return "—";
    if (patience >= 75) return "😊 Rất vui";
    if (patience >= 50) return "🙂 Hài lòng";
    if (patience >= 25) return "😐 Hơi sốt ruột";
    return "😣 Sắp mất kiên nhẫn";
}

function generateCustomerOrder() {
    const drink = DRINKS[Math.floor(Math.random() * DRINKS.length)];
    let topping = null;

    if (Math.random() < 0.6) {
        topping = TOPPINGS[Math.floor(Math.random() * TOPPINGS.length)];
    }

    return { drink, topping };
}

function spawnCustomer() {
    if (!game.shopOpen || game.customerWaiting) return;

    const order = generateCustomerOrder();
    game.customerWaiting = true;
    game.requestedDrink = order.drink.id;
    game.requestedTopping = order.topping ? order.topping.id : null;
    game.selectedDrink = null;
    game.selectedTopping = null;
    game.preparedDrink = false;
    game.prepStep = 0;
    game.patience = 100;

    el.requestedDrink.textContent = order.drink.emoji + " " + order.drink.name;
    el.requestedToppingText.textContent = order.topping
        ? "➕ " + order.topping.emoji + " " + order.topping.name
        : "🚫 Không topping";

    log("🙂 Khách gọi: " + order.drink.name + (order.topping ? " + " + order.topping.name : ""));
    refreshMenuSelection();
    updateUI();
}

function makeDrink() {
    if (!game.customerWaiting) return;

    if (!game.selectedDrink) {
        log("Hãy chọn đồ uống trước.");
        return;
    }

    if (game.selectedDrink !== game.requestedDrink) {
        log("❌ Sai đồ uống! Khách đã gọi món khác.");
        return;
    }

    if (game.selectedTopping !== game.requestedTopping) {
        log("❌ Sai topping! Hãy làm đúng yêu cầu của khách.");
        return;
    }

    if (game.prepStep < 4) {
        game.prepStep++;
        game.state = "preparing";
        const stepMessages = [
            "🧋 Đặt ly xinh xắn lên quầy.",
            "🥛 Cho phần nền và nguyên liệu chính.",
            "🧊 Thêm đá, đường và khuấy nhẹ.",
            game.selectedTopping ? "✨ Thêm topping, lắc đều và hoàn thiện!" : "✨ Lắc đều, lau miệng ly và hoàn thiện!"
        ];
        log(stepMessages[game.prepStep - 1]);

        if (game.prepStep === 4) {
            const recipe = getRecipe(game.selectedDrink, game.selectedTopping);
            const missing = getMissingIngredients(recipe);

            if (missing.length > 0) {
                game.prepStep = 0;
                log("❌ Thiếu nguyên liệu để hoàn thành ly: " + missing.map(item => `${item.item.name} (${item.have}/${item.need})`).join(", ") + ".");
                log("💡 Hãy bấm Mua thêm rồi pha lại từ đầu.");
                updateUI();
                return;
            }

            Object.entries(recipe).forEach(([id, amount]) => {
                game.inventory[id] -= amount;
            });

            game.preparedDrink = true;
            game.state = "serving";
            const drink = getDrink(game.selectedDrink);
            log("🎀 Hoàn thành " + drink.name + "! Nguyên liệu đã được trừ khỏi kho.");
            log("💗 Ly đã sẵn sàng, giao cho khách nào!");
        }

        updateUI();
    }
}
function serveCustomer() {
    if (!game.customerWaiting || !game.preparedDrink) return;

    const drink = getDrink(game.selectedDrink);
    const topping = getTopping(game.selectedTopping);
    let earning = drink.price + (topping ? topping.price : 0);
    const bonus = Math.round(earning * 0.2 * (Math.max(0, game.patience) / 100));
    earning += bonus;

    const mood = getMood(game.patience);
    game.money += earning;
    game.servedCustomers++;
    game.customerWaiting = false;
    game.preparedDrink = false;
    game.prepStep = 0;
    game.selectedDrink = null;
    game.selectedTopping = null;

    log(`${mood} Khách nhận món và thanh toán +${formatMoney(earning)}đ.`);
    updateUI();

    if (game.servedCustomers >= game.targetCustomers) {
        endDay();
        return;
    }

    game.customerTimer = setTimeout(() => {
        if (game.shopOpen && game.hour < 22 && !game.customerWaiting) spawnCustomer();
    }, 1200);
}

function customerLeaves() {
    if (!game.customerWaiting) return;
    game.leftCustomers++;
    game.customerWaiting = false;
    game.preparedDrink = false;
    game.prepStep = 0;
    game.selectedDrink = null;
    game.selectedTopping = null;
    log("😔 Khách hết kiên nhẫn và rời đi.");
    updateUI();

    if (game.servedCustomers + game.leftCustomers >= game.targetCustomers) {
        endDay();
        return;
    }

    game.customerTimer = setTimeout(() => {
        if (game.shopOpen && game.hour < 22 && !game.customerWaiting) spawnCustomer();
    }, 1200);
}

function endDay() {
    game.state = "end";
    game.shopOpen = false;
    game.customerWaiting = false;
    clearTimeout(game.customerTimer);
    clearInterval(game.timer);
    log(`🌙 Kết thúc ngày ${game.day}: phục vụ ${game.servedCustomers}/${game.targetCustomers} khách, ${game.leftCustomers} khách rời đi.`);
    updateUI();
}

function advanceMinute() {
    game.minute++;

    if (game.minute >= 60) {
        game.minute = 0;
        game.hour++;
    }

    if (game.hour === 7 && game.minute === 0) {
        game.state = "preparing";
        log("Đã đến 07:00. Bạn có thể mở cửa.");
    }

    if (game.shopOpen && game.customerWaiting) {
        game.patience -= game.patienceDrainPerSecond * game.secondsPerGameMinute;
    }

    if (game.shopOpen && game.customerWaiting && game.patience <= 0) {
        customerLeaves();
    }

    if (game.hour >= 22 && game.shopOpen) {
        endDay();
        return;
    }

    updateUI();
}

function cleanShop() {
    game.cleaned = true;
    game.state = "cleaning";

    log("🧹 Đã dọn quán sạch sẽ.");
    updateUI();
}

function openShop() {
    if (game.hour < 7) {
        log("Chưa đến 07:00. Hãy chuẩn bị quán trước.");
        return;
    }

    if (!game.ingredientsBought) {
        log("Bạn chưa mua nguyên liệu đầu ngày.");
        return;
    }

    if (!game.cleaned) {
        log("Bạn chưa dọn quán.");
        return;
    }

    if (game.shopOpen) {
        log("Quán đang mở rồi.");
        return;
    }

    game.shopOpen = true;
    game.state = "serving";

    log("🎉 Quán đã mở cửa!");
    spawnCustomer();
    updateUI();
}

el.buyBtn.addEventListener("click", buyStarterIngredients);
el.buyMoreBtn.addEventListener("click", buyMoreIngredients);
el.cleanBtn.addEventListener("click", cleanShop);
el.openBtn.addEventListener("click", openShop);
el.makeBtn.addEventListener("click", makeDrink);
el.serveBtn.addEventListener("click", serveCustomer);

if (el.inventoryToggle) {
    el.inventoryToggle.addEventListener("click", () => {
        const open = el.inventoryPanel.classList.toggle("collapsed") === false;
        el.inventoryToggle.setAttribute("aria-expanded", String(open));
        el.inventoryToggle.lastElementChild.textContent = open ? "⌃" : "⌄";
    });
}

if (el.logToggle) {
    el.logToggle.addEventListener("click", () => {
        const open = el.log.classList.toggle("log-collapsed") === false;
        el.logToggle.setAttribute("aria-expanded", String(open));
        el.logToggle.lastElementChild.textContent = open ? "⌃" : "⌄";
    });
}

function startGame() {
    initInventory();
    game.targetCustomers = 10 + Math.floor(Math.random() * 6);
    renderMenus();

    log("Chào mừng bạn đến với Tiệm Trà Sữa Nhỏ!");
    log("05:00 - Bạn thức dậy.");
    log("Mua lô nguyên liệu đầu ngày, dọn quán và mở cửa lúc 07:00.");
    log("Mỗi món sẽ tiêu hao nguyên liệu thật trong kho.");
    log(`Hôm nay dự kiến có ${game.targetCustomers} khách.`);

    game.timer = setInterval(advanceMinute, game.secondsPerGameMinute * 1000);
    updateUI();
}

startGame();
