import React from "react";

export default function ArticleBox() {
  return (
    <div class="articles__item">
      <img
        src="../../img/store/products/product-img-1.jpg"
        alt="product-img-1"
        class="articles__img"
      />
      <div class="articles__details w-100">
        <div class="articles__info">
          <h3 class="articles__name">دوره متخصص ریداکس</h3>
          <p class="articles__short-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            ullam voluptates impedit incidunt
          </p>
        </div>
        <div class="articles__tags">
          <div class="articles__boxes">
            <div class="articles__category-box d-flex gap-2 align-items-center">
              <span class="fa fa-tags"></span>
              <p class="articles__tag-text articles__category my-0">
                <span>دسته بندی :</span>
                <span class="articles__category-value">فرانت‌اند</span>
              </p>
            </div>
            <div class="articles__visited-box d-flex gap-2 align-items-center">
              <span class="fa fa-users"></span>
              <p class="articles__tag-text articles__visited my-0">
                <span>تعداد بازدید :</span>
                <span class="articles__visited-count">23</span>
              </p>
            </div>
          </div>
          <div class="articles__btns">
            <button class="op-btn btn btn-danger btn-lg">حذف</button>
            <button class="op-btn btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>
    </div>
  );
}
