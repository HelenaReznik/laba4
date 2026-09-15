function calculateOrder() {

    let donutPrice = Number(document.getElementById("donut").value);

    let quantity = Number(document.getElementById("quantity").value);

    let toppingPrice = Number(document.getElementById("topping").value);

    let total = (donutPrice + toppingPrice) * quantity;

    document.getElementById("result").innerHTML =
        "Стоимость заказа: " + total + " ₽ 🍩";

}