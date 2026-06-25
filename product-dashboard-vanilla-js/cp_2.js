// Constant URL for retrieval.

const url = "https://www.course-api.com/javascript-store-products";

function fetchProductsThen() {
    fetch(url)
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function handleError(error) {
    console.log(`Error occurred: ${error.message}`);
}

async function fetchProductsAsync() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        displayProducts(products);

    } catch (error) {
        handleError(error);
    }
}
