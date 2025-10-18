"use client"

import * as React from "react"
import { List, PanelLeftClose, PanelRightClose } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type SidebarContextType = {
  isMobile: boolean
  isDesktop: boolean
  open: boolean
  setOpen: (open: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar component.")
  }
  return context
}

export const Sidebar = ({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) => {
  const [open, setOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mediaQuery.matches);
    const handler = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  React.useEffect(() => {
      // Open sidebar by default on desktop
      if(isDesktop) {
          setOpen(true)
      } else {
          setOpen(false)
      }
  }, [isDesktop])

  const contextValue = { isMobile: !isDesktop, isDesktop, open, setOpen };

  // Mobile/Tablet sidebar
  if (!isDesktop) {
    return (
      <SidebarContext.Provider value={contextValue}>
        <Sheet open={open} onOpenChange={setOpen}>
          <div className="lg:hidden absolute top-20 left-4 z-20">
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Abrir barra lateral"
                    className="bg-card border rounded-full"
                >
                    <PanelRightClose className="h-5 w-5" />
                </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="left" className="w-72 bg-card p-0 text-card-foreground border-r">
            {children}
          </SheetContent>
        </Sheet>
      </SidebarContext.Provider>
    );
  }

  // Desktop sidebar
  return (
    <SidebarContext.Provider value={contextValue}>
      <aside
          className={cn(
              "hidden lg:block sticky top-24 h-[calc(100vh-6rem)] transition-[width] duration-300 ease-in-out",
              open ? 'w-[280px]' : 'w-0',
              className
          )}
      >
          <div className={cn("h-full relative transition-transform duration-300 ease-in-out", open ? 'translate-x-0' : '-translate-x-full')}>
              <div className='bg-card border rounded-lg h-full overflow-y-auto w-[280px]'>
                  {children}
              </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="absolute top-2 -right-12 z-10 bg-card border rounded-full"
                  aria-label="Cerrar barra lateral"
              >
                  <PanelLeftClose className="h-5 w-5" />
              </Button>
          </div>
      </aside>
       {!open && isDesktop && (
        <div className="hidden lg:block fixed top-24 left-4 z-20">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(true)}
                aria-label="Abrir barra lateral"
                className="bg-card border rounded-full"
            >
                <PanelRightClose className="h-5 w-5" />
            </Button>
        </div>
      )}
    </SidebarContext.Provider>
  );
}
Sidebar.displayName = "Sidebar"
