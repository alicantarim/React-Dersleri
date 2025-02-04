import React from "react";

function Product(props) {
  console.log(props);
  const { productName, price } = props;
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>

      <div>
        <div>İsim: {props.productName}</div>
        <div>Fiyat: {props.price} TL</div>
        <div>
          <p>Object Desctucturing Test !!</p>
          <p>
            Ürün: {productName}, Fiyat: {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
