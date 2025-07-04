import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ArticleBox from './../../components/ArticleBox/ArticleBox'
import Swal from 'sweetalert2'

import './Articles.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  createArticlesFromServer,
  getArticlesFromServer,
} from '../../Redux/store/Articles'

export default function Articles() {
  const articles = useSelector((state) => state.articles)
  const dispatch = useDispatch()
  const [isShowModal, setIsShowModal] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    views: '',
    category: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  useEffect(() => {
    dispatch(
      getArticlesFromServer(`https://redux-cms.iran.liara.run/api/articles`)
    )
  }, [dispatch])

  const handleCreateArticle = () => {
    const { title, desc, views, category } = formData
    console.log(formData)

    if (!title.trim() || !desc.trim() || !views.trim() || !category.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'لطفاً همه فیلدها را کامل پر کنید',
        confirmButtonText: 'باشه',
      })
      return
    }

    dispatch(createArticlesFromServer(formData)).then(() => {
      dispatch(
        getArticlesFromServer(`https://redux-cms.iran.liara.run/api/articles`)
      )
    })

    setIsShowModal(false)
    setFormData({
      title: '',
      desc: '',
      views: '',
      category: '',
    })
  }

  useEffect(() => {
    document.title = 'مقالات'
  }, [])

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
              <h4 className="modal-title"> ثبت مقاله ی جدید</h4>
            </div>

            <div className="modal-body position-relative">
              <form className="form row mx-0">
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="عنوان مقاله را وارد کنید"
                    className="form-control form__input input-user-firstname"
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-users form__icon"></span>
                  <input
                    type="text"
                    id="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    placeholder="توضیحات مقاله را بنویسید "
                    className="form-control form__input input-user-lastname"
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="number"
                    id="views"
                    value={formData.views}
                    onChange={handleChange}
                    placeholder="تعداد بازدید را بنویسید"
                    className="form-control form__input input-user-email"
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-control form__input input-user-password"
                    placeholder="گروهبندی مقاله را بنویسید"
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
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={handleCreateArticle}
              >
                ایجاد مقاله
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-8 content px-0">
        <div className="content__wrapper d-flex flex-column align-content-between">
          <ul className="content__tabs">
            <li className="content__tab">
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? 'content__tab-link-active' : 'content__tab-link'
                }
              >
                <span className="fa fa-user"></span>
                کاربران
              </NavLink>
            </li>

            <li className="content__tab">
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? 'content__tab-link-active' : 'content__tab-link'
                }
              >
                <span className="fa fa-store"></span>
                دوره‌ها
              </NavLink>
            </li>

            <li className="content__tab">
              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  isActive ? 'content__tab-link-active' : 'content__tab-link'
                }
              >
                <span className="fa fa-newspaper"></span>
                وبلاگ
              </NavLink>
            </li>
          </ul>

          <div className="articles">
            <div className="articles__list">
              {articles && articles.length > 0
                ? articles.map((article) => (
                    <ArticleBox key={article._id} {...article} />
                  ))
                : 'مقاله‌ای موجود نیست'}
            </div>
          </div>

          <div className="new-article">
            <button
              className="btn-custome btn-custome__blue"
              id="btn-modal-new-article"
              onClick={() => setIsShowModal(true)}
            >
              افزودن مقاله جدید
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
