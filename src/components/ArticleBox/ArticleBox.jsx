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
                  <span class="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={` تعداد بازدید : ${views}`}
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
