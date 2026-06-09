import { createRootRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

function RouteComponent() {
  return <Outlet />
}

export const Route = createRootRoute({
  component: RouteComponent,
})
