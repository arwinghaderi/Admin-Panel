import React from "react";

export default function Sidebar() {
  return (
    <div class="col-10 col-md-3 sidebar mx-auto mx-md-0 px-0">
      <div class="sidebar-content">
        <div class="card position-relative text-center">
          <img
            class="card-img-top sidebar__img-banner"
            src="../../img/admin/banner/banner.png"
            alt="banner admin photo"
          />
          <div class="card-body">
            <h4 class="card-title sidebar__top-name">محمدامین سعیدی راد</h4>
            <p class="card-text sidebar__top-email" lang="en">
              توسعه دهنده جاوا اسکریپت
            </p>
            <ul class="list px-0">
              <li class="list__item">
                <span class="fa fa-text-height"></span>
                <p class="list__text mb-0">
                  <span class="">نام کوچک</span>
                  <span class="list__firstname">محمدامین</span>
                </p>
              </li>
              <li class="list__item">
                <span class="fa fa-text-width"></span>

                <p class="list__text mb-0">
                  <span class="">نام خانوادگی</span>
                  <span class="list__lastname">سعیدی راد</span>
                </p>
              </li>
              <li class="list__item">
                <span class="fa fa-wallet"></span>

                <p class="list__text mb-0">
                  <span class="">تعداد دوره</span>
                  <span class="list__course-count">35</span>
                </p>
              </li>
            </ul>
            <button class="btn-custome btn-custome__blue btn-sidebar w-100">
              تغییر اطلاعات
              <span class="fa fa-pencil"></span>
            </button>
          </div>

          <div class="sidebar__profile">
            <img
              src="../../img/admin/profile/banana.png"
              alt="admin photo"
              class="sidebar__img-profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
