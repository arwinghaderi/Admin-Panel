import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCourseFromServer } from '../../Redux/store/courses'

export default function CourseBox({
  _id,
  category,
  desc,
  discount,
  price,
  registersCount,
  title,
}) {
  const dispatch = useDispatch()
  console.log(_id)

  const removeCoureseHandler = () => {
    swal({
      title: 'آیا از حذف مطمئن هستید؟',
      icon: 'warning',
      buttons: ['نه', 'آره'],
    }).then((result) => {
      if (result) {
        dispatch(removeCourseFromServer(_id))

        swal({
          title: 'دوره ی مورد نظر با موفقیت حذف شد',
          icon: 'success',
          button: 'اوکی',
        })
      }
    })
  }

  return (
    <div class="products__item">
      <div class="products__details w-100">
        <div class="products__info">
          <h3 class="products__name"> {title}</h3>
          <p class="products__short-desc">{desc}</p>
        </div>
        <div class="products__tags">
          <div class="products__boxes">
            <div class="products__price-box products-box-info">
              <span class="fa fa-wallet"></span>

              <span class="product__teg-text">قیمت :</span>
              <span class="product__teg-text products__price-value">
                {price.toLocaleString()}
              </span>
            </div>
            <div class="products__category-box  products-box-info">
              <span class="fa fa-folder"></span>

              <span class="product__teg-text">دسته بندی:</span>
              <span class="product__teg-text products__category">
                فرانت اند
                {category}
              </span>
            </div>
            <div class="products__shop-box products-box-info">
              <span class="fa fa-users"></span>

              <span class="product__teg-text">تعداد فروش :</span>
              <span class="product__teg-text products__sell">
                {registersCount}
              </span>
            </div>
          </div>
          <div class="products__btns">
            <button
              class="btn btn-danger btn-lg"
              onClick={removeCoureseHandler}
            >
              حذف
            </button>
            <button class="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>
      <div class="product__discount-Box">30%</div>
    </div>
  )
}
