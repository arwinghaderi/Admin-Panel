import React from "react";

export default function CourseBox() {
  return (
    <div class="products__item">
      <img
        src="../../img/store/redux.png"
        alt="product-img-1"
        class="products__img"
      />
      <div class="products__details w-100">
        <div class="products__info">
          <h3 class="products__name">دوره متخصص ریداکس</h3>
          <p class="products__short-desc">
            لورم ایپسوم متن ساختگی برای پروتوتایپ اپلیکیشن های ...
          </p>
        </div>
        <div class="products__tags">
          <div class="products__boxes">
            <div class="products__price-box">
              <span class="fa fa-wallet"></span>

              <span class="product__teg-text">قیمت :</span>
              <span class="product__teg-text products__price-value">35000</span>
            </div>
            <div class="products__category-box">
              <span class="fa fa-folder"></span>

              <span class="product__teg-text">دسته بندی:</span>
              <span class="product__teg-text products__category">
                فرانت اند
              </span>
            </div>
            <div class="products__shop-box">
              <span class="fa fa-users"></span>

              <span class="product__teg-text">تعداد فروش :</span>
              <span class="product__teg-text products__sell">10</span>
            </div>
          </div>
          <div class="products__btns">
            <button class="btn btn-danger btn-lg">حذف</button>
            <button class="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>

      <div class="product__discount-Box">30%</div>
    </div>
  );
}
