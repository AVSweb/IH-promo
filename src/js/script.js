try {
    let innerPageNav = document.querySelector(".inner-page__nav");
    
    innerPageNav.addEventListener("click", () => {
        innerPageNav.classList.toggle("small-nav");
    });
} catch (e) {}

try {
   
    const cartCounters = document.querySelectorAll(".cart__counter");
    
    cartCounters.forEach(elem => {
        
        let cartCounterPlus = elem.querySelector(".cart__counter-plus");
        let cartCounterMinus = elem.querySelector(".cart__counter-minus");
        let cartCounterInput = elem.querySelector(".cart__counter-value");
        
        cartCounterPlus.addEventListener("click", () => {
            cartCounterInput.value = 1 + parseInt(cartCounterInput.value, 10);
        });
        
        cartCounterMinus.addEventListener("click", () => {
            if (cartCounterInput.value - 1 > 0) {
                cartCounterInput.value = cartCounterInput.value -= 1;
            }
        });
    });
    
    let pickup = document.querySelector("#pickup");
    
    pickup.addEventListener("change", () => {
        let data = pickup.options[pickup.selectedIndex].getAttribute('data-adress');
        document.querySelector(".changed__date")
            .innerHTML = data;
    });
    
    
} catch (e) {}
