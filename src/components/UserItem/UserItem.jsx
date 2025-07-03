import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { removeUserFromServer } from '../../Redux/store/users'

export default function UserItem({
  _id,
  firstname,
  lastname,
  email,
  age,
  city,
  username,
}) {
  console.log(firstname)

  const dispatch = useDispatch()

  const userRemoveHandler = () => {
    swal({
      title: 'آیا از حذف مطمئن هستید؟',
      icon: 'warning',
      buttons: ['نه', 'آره'],
    }).then((result) => {
      if (result) {
        dispatch(removeUserFromServer(_id))

        swal({
          title: 'کاربر مورد نظر با موفقیت حذف شد',
          icon: 'success',
          button: 'اوکی',
        })
      }
    })
  }

  return (
    <div className="uesrs__item">
      <div className="users__info">
        <div className="users__details">
          <p className="users__name my-0">
            {firstname} {lastname}
          </p>
          <p lang="en" className="users__email">
            {/* ce01010101it@gmail.com */}
            {email}
          </p>
        </div>
      </div>
      <div className="users__btns">
        <button className="btn-custome btn-custome--gray">پیام ها</button>
        <button className="btn-custome btn-custome__blue">اطلاعات</button>
        <button
          className="btn-custome btn-custome__red"
          onClick={userRemoveHandler}
        >
          حذف
        </button>
      </div>
    </div>
  )
}
