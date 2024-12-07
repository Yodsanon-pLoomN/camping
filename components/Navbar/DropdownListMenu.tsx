import { AlignLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <AlignLeft />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/*  ล็อคเอ้าท์ */}
          <SignedOut>
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button>Sign up</button>
              </SignUpButton>
            </DropdownMenuItem>
            
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>
          </SignedOut>

           {/*  ล็อคอิน */}
          <SignedIn>
            {links.map((items, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <Link href={items.href}>{items.label}</Link>
                </DropdownMenuItem>
              );
            })}
          </SignedIn>
            <DropdownMenuItem>
          <SignOutLinks />
            </DropdownMenuItem>


        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default DropdownListMenu;
