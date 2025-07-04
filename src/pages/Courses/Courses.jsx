import React, { useEffect, useState } from 'react'

import './Courses.css'
import CourseBox from '../../components/CourseBox/CourseBox'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  createCourseFromServer,
  getingCoursesFromServer,
} from '../../Redux/store/courses'

export default function Courses() {
  const courses =
    useSelector((state) => {
      console.log('state courses', state)
      return state?.courses
    }) || []
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getingCoursesFromServer(`https://redux-cms.iran.liara.run/api/courses`)
    )
  }, [])

  useEffect(() => {
    document.title = 'دوره ها'
  }, [])

  const [isShowModal, setIsShowModal] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    registersCount: '',
    discount: '',
    desc: '',
  })
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }
  const handleCreateArticle = () => {
    const { title, desc, category, registersCount, discount, price } = formData

    if (
      (!title.trim() ||
        !desc.trim() ||
        !price.trim() ||
        !category.trim() ||
        !registersCount.trim(),
      !discount.trim())
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'لطفاً همه فیلدها را کامل پر کنید',
        confirmButtonText: 'باشه',
      })
      return
    }

    dispatch(createCourseFromServer(formData)).then(() => {
      dispatch(
        getingCoursesFromServer(`https://redux-cms.iran.liara.run/api/courses`)
      )
    })

    setIsShowModal(false)
    setFormData({
      title: '',
      price: '',
      category: '',
      registersCount: '',
      discount: '',
      desc: '',
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
              <h4 className="modal-title"> ثبت دوره ی جدید</h4>
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
                    placeholder="عنوان دوره را وارد کنید"
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
                    placeholder="توضیحات دوره را بنویسید "
                    className="form-control form__input input-user-lastname"
                  />
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="number"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="  (در صورت وارد کردن 0 رایگان محصوب می شود) قیمت دوره  را بنویسید"
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
                    placeholder="گروهبندی دوره ی را بنویسید"
                  />
                </div>
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-key form__icon"></span>
                  <input
                    type="number"
                    id="registersCount"
                    value={formData.registersCount}
                    onChange={handleChange}
                    className="form-control form__input input-user-password"
                    placeholder=" (صفر وارد کنید) تعداد دانشجو های دوره  را بنویسید"
                  />
                </div>
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-key form__icon"></span>
                  <input
                    type="number"
                    id="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    className="form-control form__input input-user-password"
                    placeholder="تخفیف دوره ی را بنویسید"
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
                ایجاد دوره
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div class="col-8 content px-0">
        <div class="content__wrapper d-flex flex-column align-content-between">
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
          <div className="new-article">
            <button
              className="btn-custome btn-custome__blue"
              id="btn-modal-new-article"
              onClick={() => setIsShowModal(true)}
            >
              افزودن دوره ی جدید
            </button>
          </div>
          <div class="products products-container">
            <div class="products__list products-wrapper ">
              {courses?.map((course) => (
                <CourseBox key={course?._id} {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
