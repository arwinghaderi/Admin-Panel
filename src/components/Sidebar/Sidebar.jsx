import React from 'react'

export default function Sidebar() {
  return (
    <div class="col-10 col-md-3 sidebar mx-auto mx-md-0 px-0">
      <div class="sidebar-content">
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title sidebar__top-name"> آروین قادری </h4>
            <p class="card-text sidebar__top-email" lang="en">
              توسعه دهنده ری اکت
            </p>
            <ul class="list px-0">
              <li class="list__item">
                <span class="fa fa-text-height"></span>
                <p class="list__text mb-0">
                  <span class="">نام </span>
                  <span class="list__firstname">آروین</span>
                </p>
              </li>
              <li class="list__item">
                <span class="fa fa-text-width"></span>

                <p class="list__text mb-0">
                  <span class="">نام خانوادگی</span>
                  <span class="list__lastname"> قادری</span>
                </p>
              </li>
              <li class="list__item">
                <span class="fa fa-wallet"></span>
                <p class="list__text mb-0">
                  <span class=""> سن</span>
                  <span class="list__lastname"> 22</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
