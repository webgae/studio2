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
    const handler = () => {
        setIsDesktop(mediaQuery.matches);
        // Open by default on desktop, close on mobile
        setOpen(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handler);
    handler(); // Initial check
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const contextValue = { isMobile: !isDesktop, isDesktop, open, setOpen };

  // Mobile/Tablet sidebar
  if (!isDesktop) {
    return (
      <SidebarContext.Provider value={contextValue}>
        <Sheet open={open} onOpenChange={setOpen}>
           <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Abrir barra lateral"
                    className="bg-card border rounded-full"
                >
                    <List className="h-5 w-5" />
                </Button>
            </SheetTrigger>
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
          <div className={cn(
              "h-full relative transition-opacity duration-300 ease-in-out overflow-hidden",
               open ? 'opacity-100' : 'opacity-0'
              )}>
              <div className='bg-card border rounded-lg h-full overflow-y-auto w-[280px]'>
                  {children}
              </div>
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
