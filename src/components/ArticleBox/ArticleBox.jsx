import React from 'react'

export default function ArticleBox({ _id, title, desc, category, views }) {
  return (
    <div class="articles__item">
      <div class="articles__details w-100">
        <div class="articles__info">
          <h3 class="articles__name">{title} </h3>
          <p class="articles__short-desc">{desc}</p>
        </div>
        <div class="articles__tags">
          <div class="articles__boxes">
            <div class="articles__category-box d-flex gap-2 align-items-center">
              <span class="fa fa-tags"></span>
              <p class="articles__tag-text articles__category my-0">
                <span>دسته بندی :</span>
                <span class="articles__category-value">{category}</span>
              </p>
            </div>
            <div class="articles__visited-box d-flex gap-2 align-items-center">
              <span class="fa fa-users"></span>
              <p class="articles__tag-text articles__visited my-0">
                <span>تعداد بازدید :</span>
                <span class="articles__visited-count">{views}</span>
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
  )
}
