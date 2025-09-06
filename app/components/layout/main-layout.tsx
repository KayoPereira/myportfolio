'use client'

import * as React from 'react'
import { Sidebar } from '@/app/components/ui/sidebar'
import { cn } from '@/app/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  // Listen for sidebar collapse state changes
  React.useEffect(() => {
    const handleSidebarToggle = (event: CustomEvent) => {
      setIsCollapsed(event.detail.isCollapsed)
    }

    window.addEventListener('sidebar-toggle', handleSidebarToggle as EventListener)
    return () => window.removeEventListener('sidebar-toggle', handleSidebarToggle as EventListener)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Sidebar onCollapseChange={setIsCollapsed} />

      {/* Main Content */}
      <main
        className={cn(
          'transition-all duration-300',
          isCollapsed ? 'md:ml-20' : 'md:ml-80',
          className
        )}
      >
        {children}
      </main>
    </div>
  )
}
