import { Footer, Sidebar } from 'components'
import Navbar from 'components/Navbar'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { routes } from 'routes'

const MainLayout = (props) => {
  const { ...rest } = props
  const location = useLocation()
  const [open, setOpen] = useState(true)
  const [currentRoute, setCurrentRoute] = useState('Data Tables')

  useEffect(() => {
    function handleShowSidebar() {
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    }
    window.addEventListener('resize', handleShowSidebar)
    // Cleanup listener
    return () => {
      removeEventListener('resize', handleShowSidebar)
    }
  }, [])

  useEffect(() => {
    getActiveRoute(routes)
  }, [location.pathname])

  const getActiveRoute = (routes) => {
    let activeRoute = 'Data Tables'
    for (let i = 0; i < routes.length; i++) {
      // Check if route is exist
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        setCurrentRoute(routes[i].name)
      }
    }
    return activeRoute
  }
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={`/${prop.path}`} element={prop.component} key={key} />
    })
  }

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
          {/* Routes */}
          <div className="h-full">
            <Navbar onOpenSidenav={() => setOpen(true)} title={currentRoute} {...rest} />
            <div className="mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>{getRoutes(routes)}</Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
