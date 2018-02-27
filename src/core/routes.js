import Dashboard from './dashboard'

const routes = [
  {
    path: "/",
    component: Dashboard,
    routes: [
      {
        path: "/bio",
        component: Dashboard
      },
      {
        path: "/projects",
        component: Dashboard
      },
      {
        path: "/design",
        component: Dashboard
      },
      {
        path: "/resume",
        component: Dashboard
      }
    ]
  }
]

export default routes
