import React from "react";

export default function UserItem() {
  return (
    <div class="uesrs__item">
      <div class="users__info">
        <img
          src="../../img/admin/profile/banana.png"
          alt="photo user"
          class="users__img"
        />
        <div class="users__details">
          <p class="users__name my-0">محمدامین سعیدی راد</p>
          <p lang="en" class="users__email">
            ce01010101it@gmail.com
          </p>
        </div>
      </div>
      <div class="users__btns">
        <button class="btn-custome btn-custome--gray">پیام ها</button>
        <button class="btn-custome btn-custome__blue">اطلاعات</button>
        <button class="btn-custome btn-custome__red">حذف</button>
      </div>
    </div>
  );
}
