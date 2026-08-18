// =====================================================
// SUPERMARKET BILLING SYSTEM
// =====================================================


// -----------------------------------------------------
// PRODUCT DATA
// -----------------------------------------------------

const products = [
    {
        quantityId: "quantity1",
        priceId: "price1",
        amountId: "amount1"
    },

    {
        quantityId: "quantity2",
        priceId: "price2",
        amountId: "amount2"
    },

    {
        quantityId: "quantity3",
        priceId: "price3",
        amountId: "amount3"
    }
];


// -----------------------------------------------------
// CONSTANT
// -----------------------------------------------------

// Discount rate = 10%
const DISCOUNT_RATE = 0.10;

// Discount is applied above ₹2000
const DISCOUNT_LIMIT = 2000;


// -----------------------------------------------------
// GET HTML ELEMENTS
// -----------------------------------------------------

const calculateBtn =
    document.getElementById("calculateBtn");

const clearBtn =
    document.getElementById("clearBtn");

const totalAmount =
    document.getElementById("totalAmount");

const discountAmount =
    document.getElementById("discountAmount");

const finalAmount =
    document.getElementById("finalAmount");

const errorMessage =
    document.getElementById("errorMessage");

const successMessage =
    document.getElementById("successMessage");

const successText =
    document.getElementById("successText");


// -----------------------------------------------------
// USER-DEFINED FUNCTION
// Calculate amount for one product
// -----------------------------------------------------

function calculateProductAmount(
    quantity,
    unitPrice
) {

    return quantity * unitPrice;
}


// -----------------------------------------------------
// USER-DEFINED FUNCTION
// Calculate discount
// -----------------------------------------------------

function calculateDiscount(total) {

    if (total > DISCOUNT_LIMIT) {

        return total * DISCOUNT_RATE;

    }

    return 0;
}


// -----------------------------------------------------
// USER-DEFINED FUNCTION
// Format amount as Indian Rupees
// -----------------------------------------------------

function formatCurrency(amount) {

    return "₹" + amount.toFixed(2);
}


// -----------------------------------------------------
// USER-DEFINED FUNCTION
// Show error message
// -----------------------------------------------------

function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";

    successMessage.style.display = "none";
}


// -----------------------------------------------------
// CALCULATE BUTTON
// -----------------------------------------------------

calculateBtn.addEventListener(
    "click",
    function() {

        // Hide previous error
        errorMessage.style.display = "none";


        // ---------------------------------------------
        // Variables and Data Types
        // ---------------------------------------------

        let total = 0;


        // ---------------------------------------------
        // Calculate each product
        // ---------------------------------------------

        for (
            let i = 0;
            i < products.length;
            i++
        ) {

            const quantityInput =
                document.getElementById(
                    products[i].quantityId
                );

            const priceInput =
                document.getElementById(
                    products[i].priceId
                );


            // Convert input values from strings to numbers
            const quantity =
                Number(quantityInput.value);

            const unitPrice =
                Number(priceInput.value);


            // -----------------------------------------
            // Validation
            // -----------------------------------------

            if (
                quantityInput.value === "" ||
                priceInput.value === ""
            ) {

                showError(
                    "Please enter quantity and unit price for all three products."
                );

                return;
            }


            if (
                quantity < 0 ||
                unitPrice < 0
            ) {

                showError(
                    "Quantity and unit price cannot be negative."
                );

                return;
            }


            // -----------------------------------------
            // Calculate product amount
            // -----------------------------------------

            const productAmount =
                calculateProductAmount(
                    quantity,
                    unitPrice
                );


            // Add to total
            total += productAmount;


            // Display product amount
            document.getElementById(
                products[i].amountId
            ).textContent =
                formatCurrency(productAmount);
        }


        // ---------------------------------------------
        // Calculate discount
        // ---------------------------------------------

        const discount =
            calculateDiscount(total);


        // ---------------------------------------------
        // Calculate final payable amount
        // ---------------------------------------------

        const finalPayable =
            total - discount;


        // ---------------------------------------------
        // Display results
        // ---------------------------------------------

        totalAmount.textContent =
            formatCurrency(total);


        discountAmount.textContent =
            formatCurrency(discount);


        finalAmount.textContent =
            formatCurrency(finalPayable);


        // ---------------------------------------------
        // Display success message
        // ---------------------------------------------

        successText.textContent =
            "Your final payable amount is " +
            formatCurrency(finalPayable) +
            ".";


        successMessage.style.display =
            "flex";


        // Scroll to result
        successMessage.scrollIntoView({
            behavior: "smooth"
        });

    }
);


// -----------------------------------------------------
// CLEAR BUTTON
// -----------------------------------------------------

clearBtn.addEventListener(
    "click",
    function() {

        // Clear all input fields
        for (
            let i = 0;
            i < products.length;
            i++
        ) {

            document.getElementById(
                products[i].quantityId
            ).value = "";

            document.getElementById(
                products[i].priceId
            ).value = "";


            // Reset product amount
            document.getElementById(
                products[i].amountId
            ).textContent = "₹0.00";
        }


        // Reset bill values
        totalAmount.textContent =
            "₹0.00";

        discountAmount.textContent =
            "₹0.00";

        finalAmount.textContent =
            "₹0.00";


        // Hide messages
        errorMessage.style.display =
            "none";

        successMessage.style.display =
            "none";


        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);