import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserItem from '../../components/UserItem/UserItem'
import { useDispatch, useSelector } from 'react-redux'

import './Users.css'
import { getUsersFromServer } from '../../Redux/store/users'

export default function Users() {
  const users =
    useSelector((state) => {
      return state?.users
    }) || []
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'کاربران'
  }, [])

  useEffect(() => {
    dispatch(getUsersFromServer(`https://redux-cms.iran.liara.run/api/users`))
  }, [dispatch])

  return (
    <div className="col-8 content  px-0 ">
      <div className="content__wrapper">
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

        <div className="users">
          <div className="users__list-container">
            <div className="users__list users__list-wrapper">
              {users?.map((user) => (
                <UserItem key={user?._id} {...user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
