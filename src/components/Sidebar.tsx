"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

type SidebarContext = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isMobile: boolean
  setOpenMobile: (open: boolean) => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

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
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return isMobile;
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = React.useState(!isMobile)
  const [openMobile, setOpenMobile] = React.useState(false)

  const contextValue = React.useMemo(
    () => ({
      isOpen: isMobile ? openMobile : isOpen,
      setIsOpen: isMobile ? setOpenMobile : setIsOpen,
      isMobile,
      setOpenMobile: setOpenMobile
    }),
    [isOpen, isMobile, openMobile, setIsOpen, setOpenMobile]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  )
}

export const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen, isMobile } = useSidebar()

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => useSidebar().setIsOpen(open)}>
        <SheetContent
          side="left"
          className={cn("w-72 bg-card p-0 text-card-foreground border-r", className)}
        >
          {children}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <aside
      ref={ref}
      className={cn(
        "hidden lg:block sticky top-0 h-screen transition-all duration-300 ease-in-out",
        isOpen ? "w-72" : "w-0",
        className
      )}
      {...props}
    >
      <div className={cn("h-full transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
         {isOpen && children}
      </div>
    </aside>
  )
})
Sidebar.displayName = "Sidebar"


export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(!isOpen)}
      className={className}
      {...props}
    >
      <Menu className="h-6 w-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"
