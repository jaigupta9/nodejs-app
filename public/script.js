var productsList = []
var x = 20;

function loadProducts(renderProductListWithData) {
    setTimeout(() => {
        productsList = productsListfromServer;
        renderProductListWithData()
    }, 2000);
}

const foo = (arg1) => {
    console.log(arg1);
}

function doo(arg1) {
    console.log(arg1)
}
var arr1 = [1, 2, 3, 4, 5];
function renderProducts() {
    document.getElementById("tag2").innerHTML = arr1
    // Fetch the data from the server
    // Convert the data into html and render it on UI

    function renderProductListWithData() {
        if (productsList.length === 0) {
            document.getElementById("data").innerHTML = "Loading data from server...";
            return;
        }
        document.getElementById("data").innerHTML = `
    <table>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                ${productsList.map((product, index) => {
            // Array.map() is a Method which accept arguement which is a function defination -->

            return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                    </tr>
                    `
        })}
            </tbody>
        </table>
        `
    }
    loadProducts(renderProductListWithData);
    renderProductListWithData();
}
renderProducts();