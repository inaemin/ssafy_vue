import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const isAuth = true;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/user/:id", // 동적라우팅
      name: "user",
      component: () => import("../views/UserView.vue"),
      beforeEnter: (to, from) => {
        console.log(to);
        console.log(from);
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      beforeEnter: (to, from) => {
        if (isAuth) {
          console.log("이미 로그인이 된 상태");
          return { name: "home" };
        }
      },
    },
    {
      path: "/board",
      name: "board",
      component: () => import("../views/BoardView.vue"),
      children: [
        {
          path: "",
          name: "boardList",
          component: () => import("../components/board/BoardList.vue"),
        },
        {
          path: "create",
          name: "boardCreate",
          component: () => import("../components/board/BoardCreate.vue"),
        },
      ],
    },
  ],
});

/**
 * Navigation Guard (전역가드)
 * - 어플리케이션 전역에서 동작
 * - index.js 에서 정의
 *
 * Per-route (라우터 가드)
 * - 특정 route 에서만 동작
 * - index.js의 각 routes에 정의
 *
 * In-component (컴포넌트 가드)
 * - 특정 컴포넌트 내에서만 동작
 * - 컴포넌트 script에 정의
 */

router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
  // const isAuth = false; // false: 로그인이 안되었음
  if (!isAuth && to.name !== "login") {
    console.log("로그인이 필요해~");
    return { name: "login" };
  }
});

export default router;
