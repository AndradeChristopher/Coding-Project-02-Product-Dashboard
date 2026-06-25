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
