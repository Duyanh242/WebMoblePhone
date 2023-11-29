const listBtn = document.querySelectorAll("button");
// console.log(listBtn)
 listBtn.forEach(function(button, index) {
     // console.log(button, index);
     button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h4").innerText;
        var productPrice = product.querySelector("span").innerText;
        addCart(productImg, productName, productPrice);
     }})})
    function addCart(productImg, productName, productPrice) {
        var addTr = document.createElement("tr");
        var listItem = document.querySelectorAll("tbody tr");
        var productT = document.querySelectorAll(".titleName");
        for(var i = 0; i < listItem.length; i++) {
            if(productT[i].innerText == productName) {
                alert("Sản phẩm đã tồn tại. Chọn sản phẩm khác!!!");
                return;
            }

        }
        var trContent = '<tr><td style="display: flex; align-items: center;"><img src="'+productImg+'" alt="" style="width: 70px;"><span class="titleName">'+productName+'</span></td><td><span class="priceN">'+productPrice+'</span><sup>đ</sup></td><td><input type="number" value="1" min="1" style="width: 30px; outline: none;" class ="input-Elem"></td><td><span style="cursor: pointer;" class ="cart-delete">Xóa</span></td></tr>'
    addTr.innerHTML = trContent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addTr);
    cartTotal();
    deleteItem();
    updatePriceInput();
    }
    function cartTotal() {
        var listItem = document.querySelectorAll("tbody tr");
        var sumPrice = 0;
        var totalC = 0;
        for(var i = 0; i < listItem.length; i++) {
            var price = listItem[i].querySelector(".priceN").innerText;
            var inputElem = listItem[i].querySelector("input").value;
            var coins = inputElem*price;
            sumPrice += coins;
            totalC = sumPrice;      
        }
        var labelSum = document.getElementById("num_money");
        labelSum.innerText = totalC.toLocaleString("de-DE")
    }
    function deleteItem() {
        var listItem = document.querySelectorAll("tbody tr");
        var productT = document.querySelectorAll(".cart-delete");
        for(var i = 0; i < listItem.length; i++) {
            productT[i].addEventListener("click", function(event){
                var cartDelete = event.target;
                var cartItemR = cartDelete.parentElement.parentElement;
                cartItemR.remove();
                cartTotal();
            })
        }
    }
    function updatePriceInput() {
        var listItem = document.querySelectorAll("tbody tr")
        var productInput = document.querySelectorAll(".input-Elem")
        for(var i = 0; i < listItem.length; i++) {
            productInput[i].addEventListener("change", function(event){
                cartTotal();
            })
        }
    }