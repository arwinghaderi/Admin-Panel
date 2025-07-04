import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ArticleBox from './../../components/ArticleBox/ArticleBox'

import './Articles.css'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlesFromServer } from '../../Redux/store/Articles'

export default function Articles() {
  const articles = useSelector((state) => state.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getArticlesFromServer(`https://redux-cms.iran.liara.run/api/articles`)
    )
  }, [])


      useEffect(() => {
        document.title = 'مقالات'
      }, [])
  return (
    <>
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
                to="/infos"
                className={({ isActive }) =>
                  isActive ? 'content__tab-link-active' : 'content__tab-link'
                }
              >
                <span className="fa fa-book"></span>
                اطلاعات
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

          <div class="articles">
            <div class="articles__list">
              {articles && articles?.length > 0
                ? articles?.map((article) => (
                    <ArticleBox key={article._id} {...article} />
                  ))
                : 'مقاله‌ای موجود نیست'}
            </div>
          </div>

          <div class="new-article">
            <button
              class="btn-custome btn-custome__blue"
              data-bs-toggle="modal"
              data-bs-target="#new-article"
              id="btn-modal-new-article"
            >
              افزودن مقاله جدید
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
