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

// Format

function displayProducts(products) {
    const container = document.getElementById("product-container");

    products.slice(0, 5).forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.fields.name}</h3>
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <p>$${product.fields.price / 100}</p>
        `;

        container.appendChild(card);
    });
}

// Fetch
fetchProductsThen();
fetchProductsAsync();
