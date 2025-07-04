import React from "react";

import Users from "./pages/Users/Users";
import Courses from "./pages/Courses/Courses";
import Articles from "./pages/Articles/Articles";

export default [
  { path: "/", element: <Users /> },
  { path: "/users", element: <Users /> },
  { path: "/courses", element: <Courses /> },
  { path: "/articles", element: <Articles /> },
];
