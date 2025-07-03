import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  console.log(articles)

  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper d-flex flex-column align-content-between">
        <ul class="content__tabs">
          <li class="content__tab">
            <Link to="/users" class="content__tab-link">
              <span class="fa fa-user"></span>
              کاربران
            </Link>
          </li>
          <li class="content__tab">
            <Link to="/infos" class="content__tab-link">
              <span class="fa fa-book"></span>
              اطلاعات
            </Link>
          </li>
          <li class="content__tab">
            <Link to="/courses" class="content__tab-link">
              <span class="fa fa-store"></span>
              دوره‌ها
            </Link>
          </li>

          <li class="content__tab">
            <Link to="/articles" class="content__tab-link">
              <span class="fa fa-newspaper"></span>
              وبلاگ
            </Link>
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
  )
}
