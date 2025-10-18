"use client"

import * as React from "react"
import { List, PanelLeftClose, PanelRightClose } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type SidebarContextType = {
  isMobile: boolean
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
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
  const [openMobile, setOpenMobile] = React.useState(false);
  const [desktopOpen, setDesktopOpen] = React.useState(true);
  const isMediumScreen = useIsMediumScreen();

  React.useEffect(() => {
    // Collapse sidebar by default on medium screens
    if(isMediumScreen) {
        setDesktopOpen(false);
    }
  }, [isMediumScreen]);

  // For mobile screens
  const MobileSidebar = () => (
    <div className="lg:hidden">
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                  <List className="h-6 w-6" />
                  <span className="sr-only">Abrir Tabla de Contenidos</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-card p-0 text-card-foreground border-r">
            <SidebarContext.Provider value={{ isMobile: true, openMobile, setOpenMobile }}>
                {children}
            </SidebarContext.Provider>
          </SheetContent>
      </Sheet>
    </div>
  );

  // For large screens
  const DesktopSidebar = () => (
     <aside
          className={cn(
              "hidden lg:block sticky top-24 h-[calc(100vh-6rem)] transition-[width] duration-300 ease-in-out",
              desktopOpen ? 'w-[280px]' : 'w-0',
              className
          )}
      >
        <SidebarContext.Provider value={{ isMobile: false, openMobile: false, setOpenMobile: () => {} }}>
            <div className={cn("h-full relative transition-transform duration-300 ease-in-out", desktopOpen ? 'translate-x-0' : '-translate-x-full')}>
                <div className='bg-card border rounded-lg h-full overflow-y-auto w-[280px]'>
                    {children}
                </div>
                 <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDesktopOpen(false)}
                    className="absolute top-2 -right-12 z-10 bg-card border rounded-full"
                    aria-label="Cerrar barra lateral"
                >
                    <PanelLeftClose className="h-5 w-5" />
                </Button>
            </div>
        </SidebarContext.Provider>
      </aside>
  );

  if (!desktopOpen) {
     return (
        <div className="hidden lg:block fixed top-24 left-4 z-20">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setDesktopOpen(true)}
                aria-label="Abrir barra lateral"
                className="bg-card border rounded-full"
            >
                <PanelRightClose className="h-5 w-5" />
            </Button>
        </div>
    )
  }

  return (
    <>
      <MobileSidebar />
      <DesktopSidebar />
    </>
  );
}
Sidebar.displayName = "Sidebar"

// Hook to detect if it's a medium screen (like a tablet in portrait)
function useIsMediumScreen() {
    const [isMedium, setIsMedium] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px) and (max-width: 1279px)');
        
        const handleResize = (e: MediaQueryListEvent) => {
            setIsMedium(e.matches);
        };

        // Set initial state
        setIsMedium(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleResize);
        
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return isMedium;
}
