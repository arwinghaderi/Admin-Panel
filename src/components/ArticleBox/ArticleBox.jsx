import React, { useState } from 'react'
import { removeArticlesFromServer } from '../../Redux/store/Articles'
import { useDispatch } from 'react-redux'

export default function ArticleBox({ _id, title, desc, category, views }) {
  const dispatch = useDispatch()
  const [isShowModal, setIsShowModal] = useState(false)

  const removeArticleHandler = () => {
    swal({
      title: 'آیا از حذف مطمئن هستید؟',
      icon: 'warning',
      buttons: ['نه', 'آره'],
    }).then((result) => {
      if (result) {
        dispatch(removeArticlesFromServer(_id))

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
      {/* modal */}
      <div
        className={`modal ${isShowModal ? 'show-modal' : ''}`}
        id="show-info-modal"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">جزئیات</h4>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0">
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`عنوان: ${title}`}
                    className="form-control form__input input-user-firstname"
                    readOnly
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-users form__icon"></span>

                  <input
                    type="text"
                    name=""
                    value={` توضیحات: ${desc}`}
                    id="lastname"
                    className="form-control form__input input-user-lastname"
                    readOnly
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={` تعداد بازدید : ${views}`}
                    id="email"
                    className="form-control form__input input-user-email"
                    readOnly
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`گروهبندی: ${category}`}
                    className="form-control form__input input-user-password"
                    readOnly
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="articles__item">
        <div className="articles__details w-100">
          <div className="articles__info">
            <h3 className="articles__name">{title} </h3>
            <p className="articles__short-desc">{desc}</p>
          </div>
          <div className="articles__tags">
            <div className="articles__boxes">
              <div className="articles__category-box d-flex gap-2 align-items-center">
                <span className="fa fa-tags"></span>
                <p className="articles__tag-text articles__category my-0">
                  <span>دسته بندی :</span>
                  <span className="articles__category-value">{category}</span>
                </p>
              </div>
              <div className="articles__visited-box d-flex gap-2 align-items-center">
                <span className="fa fa-users"></span>
                <p className="articles__tag-text articles__visited my-0">
                  <span>تعداد بازدید :</span>
                  <span className="articles__visited-count">{views}</span>
                </p>
              </div>
            </div>
            <div className="articles__btns">
              <button
                className="op-btn btn btn-danger btn-lg"
                onClick={removeArticleHandler}
              >
                حذف
              </button>
              <button
                className="op-btn btn btn-info btn-lg"
                onClick={() => setIsShowModal(true)}
              >
                اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
