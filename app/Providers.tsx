import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"


export const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
    {children}
    <Toaster />
    </ThemeProvider>
    
    </>
  )
}