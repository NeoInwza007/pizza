document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById('pizzaform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let size;
        var sizeInputs = document.getElementsByName('Size');
        for (var input of sizeInputs) {
            if (input.checked) {
                size = input.value;
                break;
            }
        }

        var selectedToppings = [];
        var toppingInputs = document.getElementsByName('topping');
        for (var input of toppingInputs) {
            if (input.checked) {
                selectedToppings.push(input.value);
            }
        }

        if (selectedToppings.length >= 3) {
            alert('Please selected a single topping.');
            return;
        }

        console.log(selectedToppings)

        var crustType = document.getElementById('crusttype').value;

        var number = document.getElementById('number').value;

        if (selectedToppings.lenght > 1){
            alert('Please try again')
            return;
        }

        if (!size || !selectedToppings.length || crustType === 'select' || number <= 0) {
            alert('Please select your crust type.');
            return;
        }

        processOrder(size, selectedToppings, crustType, number);
    });


    function processOrder(size, toppings, crustType, number) {

        let totalCost = 0;
        if (size === 'medium') {
            totalCost += 200;
        } else if (size === 'large') {
            totalCost += 300;
        }

        for (var topping of toppings) {
            if (topping === 'm') {
                totalCost += 30 * number;
            } else if (topping === 'l') {
                totalCost += 50 * number;
            } else {

            }
        }

        alert(`Your Oder:
        Size: ${size.toUpperCase()}
        Toppings: ${toppings.join(', ')}
        Crust Type: ${crustType}
        Number of Pizzas: ${number}
        Total Cost: ${totalCost} THB`);
        
        form.reset();
    }
});