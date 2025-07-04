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
    <div className="products__item">
      <div className="products__details w-100">
        <div className="products__info">
          <h3 className="products__name"> {title}</h3>
          <p className="products__short-desc">{desc}</p>
        </div>
        <div className="products__tags">
          <div className="products__boxes">
            <div className="products__price-box products-box-info">
              <span className="fa fa-wallet"></span>

              <span className="product__teg-text">قیمت :</span>
              <span className="product__teg-text products__price-value">
                {price.toLocaleString()}
              </span>
            </div>
            <div className="products__category-box  products-box-info">
              <span className="fa fa-folder"></span>

              <span className="product__teg-text">دسته بندی:</span>
              <span className="product__teg-text products__category">
                فرانت اند
                {category}
              </span>
            </div>
            <div className="products__shop-box products-box-info">
              <span className="fa fa-users"></span>

              <span className="product__teg-text">تعداد فروش :</span>
              <span className="product__teg-text products__sell">
                {registersCount}
              </span>
            </div>
          </div>
          <div className="products__btns">
            <button
              className="btn btn-danger btn-lg"
              onClick={removeCoureseHandler}
            >
              حذف
            </button>
            <button className="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>
      <div className="product__discount-Box">30%</div>
    </div>
  )
}
