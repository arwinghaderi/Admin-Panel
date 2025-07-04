import React, { useState } from 'react'
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
  const [isShowModal, setIsShowModal] = useState(false)

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
    <>
      <div
        className={`modal ${isShowModal ? 'show-modal' : null}`}
        id="show-info-modal"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">جزئیات</h4>
            </div>

            <div class="modal-body position-relative">
              <form action="#" class="form row mx-0">
                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`عنوان: ${title}`}
                    class="form-control form__input input-user-firstname"
                    readonly
                  />
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-users form__icon"></span>

                  <input
                    type="text"
                    name=""
                    value={` توضیحات: ${desc}`}
                    id="lastname"
                    class="form-control form__input input-user-lastname"
                    readonly
                  />
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name=""
                    value={`  تعداد فروش: ${registersCount}`}
                    id="username"
                    class="form-control form__input input-user-username"
                    readonly
                  />
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={`قیمت: ${price}`}
                    id="email"
                    class="form-control form__input input-user-email"
                    readonly
                  />
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`گروهبندی: ${category}`}
                    class="form-control form__input input-user-password"
                    readonly
                  />
                </div>
                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-wallet form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`تخفیف: ${discount} درصد`}
                    id="count-product"
                    class="form-control form__input input-user-product"
                    readonly
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>

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
              <button
                className="btn btn-info btn-lg"
                onClick={() => setIsShowModal(true)}
              >
                اطلاعات
              </button>
            </div>
          </div>
        </div>
        <div className="product__discount-Box">{discount}%</div>
      </div>
    </>
  )
}
