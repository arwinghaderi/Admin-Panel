import React, { useEffect } from 'react'

import './Courses.css'
import CourseBox from '../../components/CourseBox/CourseBox'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getingCoursesFromServer } from '../../Redux/store/courses'

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
  

  return (
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

        <div class="products products-container">
          <div class="products__list products-wrapper ">
            {courses?.map((course) => (
              <CourseBox key={course?._id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
