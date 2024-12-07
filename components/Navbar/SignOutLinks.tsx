"use client"
import { SignOutButton } from "@clerk/nextjs"
import { useToast } from "@/hooks/use-toast"


const SignOutLinks = () => {
    const { toast } = useToast();

    const handleLogout = () => {
        toast({description: "Successfully!!"});
    };

    
  return (

    <SignOutButton redirectUrl="/">
    <button className="w-full text-center text-red-600" onClick={handleLogout}>Logout</button>
    </SignOutButton>
  )
}
export default SignOutLinks