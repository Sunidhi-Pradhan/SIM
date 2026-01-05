document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("pname").value;
    let price = document.getElementById("price").value;
    let stock = document.getElementById("stock").value;

    let table = document.getElementById("product table");

    let row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = price;
    row.insertCell(2).innerText = stock;

    document.getElementById("productForm").reset();
});
