"use client"

import * as React from "react"
import { List } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
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
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  if (isMobile === undefined) {
    return null; // Don't render until we know the screen size
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                  <List className="h-6 w-6" />
                  <span className="sr-only">Abrir Tabla de Contenidos</span>
              </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-card p-0 text-card-foreground border-r">
            <SidebarContext.Provider value={{ isMobile, openMobile, setOpenMobile }}>
                {children}
            </SidebarContext.Provider>
          </SheetContent>
      </Sheet>
    );
  }

  return (
      <aside
          className={cn(
              "hidden lg:block sticky top-24 h-[calc(100vh-6rem)]",
              className
          )}
      >
        <SidebarContext.Provider value={{ isMobile, openMobile, setOpenMobile }}>
            <div className={cn("h-full")}>
                <div className='bg-card border rounded-lg h-full overflow-y-auto'>
                    {children}
                </div>
            </div>
        </SidebarContext.Provider>
      </aside>
  )
}
Sidebar.displayName = "Sidebar"
