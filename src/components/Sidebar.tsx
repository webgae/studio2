"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"

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

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        if (typeof window !== 'undefined') {
            checkDevice();
            window.addEventListener('resize', checkDevice);
            return () => window.removeEventListener('resize', checkDevice);
        }
    }, []);

    return isMobile;
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)
  
  const contextValue = React.useMemo(
    () => ({
      isMobile,
      openMobile,
      setOpenMobile,
    }),
    [isMobile, openMobile]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, ...props }, ref) => {
    const { isMobile, openMobile, setOpenMobile } = useSidebar()

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir Tabla de Contenidos</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className={cn("w-72 bg-card p-0 text-card-foreground border-r", className)}>
              {children}
            </SheetContent>
        </Sheet>
      );
    }

    return (
        <aside
            ref={ref}
            className={cn(
                "hidden lg:block sticky top-24 h-[calc(100vh-6rem)]",
                className
            )}
            {...props}
        >
            <div className={cn("h-full")}>
                <div className='bg-card border rounded-lg h-full overflow-y-auto'>
                    {children}
                </div>
            </div>
        </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"

// This trigger is now part of the Sidebar component for mobile view.
// You can remove the separate SidebarTrigger component if it's no longer used elsewhere.
export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  return (
      <Button
          ref={ref}
          variant="ghost"
          size="icon"
          className={cn(className, "lg:hidden")}
          {...props}
      >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
      </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
