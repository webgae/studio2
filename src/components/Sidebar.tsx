"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger as RadixSheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet"

type SidebarContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  isMobile: boolean
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
  const [isOpen, setIsOpen] = React.useState(!isMobile)
  const [openMobile, setOpenMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOpen(!isMobile);
    }
  }, [isMobile]);

  React.useEffect(() => {
    if (!isMobile) {
      setOpenMobile(false);
    }
  }, [isMobile]);

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

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger?: React.ReactNode;
  children: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, trigger, ...props }, ref) => {
    const { isMobile, openMobile, setOpenMobile } = useSidebar()

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
            {trigger}
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
                <div className='bg-card border rounded-lg h-full'>
                    {children}
                </div>
            </div>
        </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"


export const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
    const { isMobile } = useSidebar();

    if(isMobile) {
        return(
            <RadixSheetTrigger asChild>
                <Button
                    ref={ref}
                    variant="ghost"
                    size="icon"
                    className={className}
                    {...props}
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Sidebar</span>
                </Button>
            </RadixSheetTrigger>
        )
    }

    // No trigger for desktop in this design
    return null;
})
SidebarTrigger.displayName = "SidebarTrigger"
