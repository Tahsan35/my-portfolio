import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <div>
          <div>
            <Logo></Logo>
            <Nav
              containerStyles="flex flex-col items-center gap-y-6 pt-12"
              linkStyles="text-2xl"
            ></Nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
