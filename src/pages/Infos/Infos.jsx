import React from "react";
import { Link } from "react-router-dom";

import "./Infos.css";

export default function Infos() {
  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper">
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
        <div class="active"></div>

        <div class="information">
          <div id="accordion">
            <div class="card">
              <div class="card-header">
                <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                  اطلاعات شما
                </a>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                data-bs-parent="#accordion"
              >
                <div class="card-body information-current-admin-wrapper-form p-4">
                  <form action="#" class="form row mx-0">
                    <div class="form__box-input col-6 px-2">
                      <span class="fa fa-user form__icon"></span>
                      <input
                        type="text"
                        name=""
                        value=""
                        id="firstname"
                        placeholder="نام "
                        class="form-control form__input"
                        required
                      />
                      <label for="firstname" class="form__label my-0">
                        نام
                      </label>
                    </div>

                    <div class="form__box-input col-6 px-2">
                      <span class="fa fa-users form__icon"></span>

                      <input
                        type="text"
                        name=""
                        value=""
                        id="lastname"
                        placeholder="نام خانوادگی"
                        class="form-control form__input"
                        required
                      />
                      <label for="lastname" class="form__label my-0">
                        نام خانوادگی
                      </label>
                    </div>

                    <div class="form__box-input col-6 px-2">
                      <span class="fa fa-address-book form__icon"></span>

                      <input
                        lang="en"
                        type="text"
                        name=""
                        value=""
                        id="username"
                        placeholder="نام کاربری"
                        class="form-control form__input"
                        required
                      />
                      <label for="username" class="form__label my-0">
                        نام کاربری
                      </label>
                    </div>

                    <div class="form__box-input col-6 px-2">
                      <span class="fa fa-globe form__icon"></span>

                      <input
                        lang="en"
                        type="email"
                        name=""
                        value=""
                        id="email"
                        placeholder="email "
                        class="form-control form__input"
                        required
                      />
                      <label for="email" class="form__label my-0" lang="en">
                        email
                      </label>
                    </div>

                    <div class="form__box-input col-4 px-2">
                      <span class="fa fa-key form__icon"></span>

                      <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="رمز جاری"
                        class="form-control form__input"
                        required
                      />
                      <label for="password" class="form__label my-0">
                        رمز جاری
                      </label>
                      <span class="fa fa-key form__icon"></span>
                    </div>
                    <div class="form__box-input col-4 px-2">
                      <span class="fa fa-key form__icon"></span>

                      <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="رمز  جدید"
                        class="form-control form__input"
                        required
                      />
                      <label for="password" class="form__label my-0">
                        رمز جدید
                      </label>
                      <span class="fa fa-key form__icon"></span>
                    </div>
                    <div class="form__box-input col-4 px-2">
                      <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="تکرار رمز"
                        class="form-control form__input"
                        required
                      />
                      <label for="password" class="form__label my-0">
                        تکرار رمز
                      </label>
                      <span class="fa fa-key form__icon"></span>
                    </div>

                    <div class="change-profile-box px-0 d-flex gap-4 mb-4">
                      <div class="change-profile-input-box">
                        <img
                          src="../../img/admin/profile/banana.png"
                          class="change-profile-pic"
                          alt=""
                        />
                        <label
                          for="upload-profile-input"
                          class="upload-profile-input-label"
                        >
                          <input
                            type="file"
                            id="upload-profile-input"
                            name=""
                          />
                        </label>
                      </div>

                      <div class="change-banner-input-box">
                        <img
                          src="../../img/admin/banner/banner.png"
                          class="change-banner-pic"
                          alt=""
                        />
                        <label
                          for="upload-banner-input"
                          class="upload-banner-input-label"
                        >
                          <input type="file" id="upload-banner-input" name="" />
                        </label>
                      </div>
                    </div>

                    <button class="btn-custome btn-custome__blue col-6 mb-3">
                      اپدیت اطلاعات
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <a
                  class="collapsed btn information__team-title"
                  data-bs-toggle="collapse"
                  href="#collapseTwo"
                >
                  اطلاعات تیم
                </a>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                data-bs-parent="#accordion"
              >
                <div class="row justify-content-center mx-0 p-4">
                  <div class="infromation-team-container">
                    <div class="infromation-team-cards d-flex flex-wrap">
                      <div class="card col-4 information__team-card p-2">
                        <img
                          class="card-img-top information__admin-img"
                          src="../../img/store/avaters/avatar2.png"
                          alt="admin photo"
                        />
                        <div class="card-body d-flex flex-column justify-content-between p-4">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h4 class="card-title information__admin-name my-0">
                              عرشیا احسنی
                            </h4>
                            <p class="card-text information__admin-role my-0">
                              باغدار
                            </p>
                          </div>
                          <div class="mt-4 d-flex justify-content-end gap-2">
                            <button class="btn btn-lg btn-danger">حذف</button>
                            <button class="btn btn-lg btn-info">ویرایش</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="btn-custome btn-custome__red col-10 mt-4"
                    data-bs-toggle="modal"
                    data-bs-target="#new-member"
                  >
                    افزودن فرد جدید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
