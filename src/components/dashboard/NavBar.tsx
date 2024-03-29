import {
  Bell,
  BriefcaseBusiness,
  CircleUser,
  FileSearch2,
  Home,
  LineChart,
  Menu,
  Sparkles,
  ToyBrick,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="hidden border-r md:block min-h-screen h-full">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b  px-4 lg:h-[60px] lg:px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <img
                  alt="Kazifi"
                  loading="lazy"
                  src="/assets/img/logo.png"
                  className="w-24"
                />
                {/* <span className="">Kazifi</span> */}
              </Link>

              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <ModeToggle />
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid gap-1  items-start px-2 text-sm font-medium lg:px-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-all hover:bg-primary/90"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  transition-all hover:bg-accent hover:text-accent-foreground h-9"
                  }
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/resume-builder"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-all hover:bg-primary/90"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  transition-all hover:bg-accent hover:text-accent-foreground h-9"
                  }
                >
                  <Sparkles className="h-4 w-4" />
                  Resume Builder
                </NavLink>
                <NavLink
                  to="/resume-scanner"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-all hover:bg-primary/90"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  transition-all hover:bg-accent hover:text-accent-foreground h-9"
                  }
                >
                  <FileSearch2 className="h-4 w-4" />
                  Scanner
                </NavLink>
                <NavLink
                  to="/job-tracker"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-all hover:bg-primary/90"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  transition-all hover:bg-accent hover:text-accent-foreground h-9"
                  }
                >
                  <LineChart className="h-4 w-4" />
                  Job Tracker
                </NavLink>
                <NavLink
                  to="/interview"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-all hover:bg-primary/90"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  transition-all hover:bg-accent hover:text-accent-foreground h-9"
                  }
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  Interview
                </NavLink>
                <NavLink
                  to="/chrome-extension"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground transition-all hover:bg-primary/90"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium  transition-all hover:bg-accent hover:text-accent-foreground h-9"
                  }
                >
                  <ToyBrick className="h-4 w-4" />
                  Chrome Extension
                </NavLink>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <img
                    alt="Kazifi"
                    loading="lazy"
                    src="/assets/img/logo.png"
                    className="w-24"
                  />
                </Link>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-primary px-3 py-2 text-primary-foreground hover:text-foreground"
                      : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/resume-builder"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-primary px-3 py-2 text-primary-foreground hover:text-foreground"
                      : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  <Sparkles className="h-4 w-4" />
                  Resume Builder
                </NavLink>
                <NavLink
                  to="/resume-scanner"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-primary px-3 py-2 text-primary-foreground hover:text-foreground"
                      : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  <FileSearch2 className="h-4 w-4" />
                  Scanner
                </NavLink>
                <NavLink
                  to="/job-tracker"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-primary px-3 py-2 text-primary-foreground hover:text-foreground"
                      : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  <LineChart className="h-4 w-4" />
                  Job Tracker
                </NavLink>
                <NavLink
                  to="/interview"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-primary px-3 py-2 text-primary-foreground hover:text-foreground"
                      : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  <BriefcaseBusiness className="h-4 w-4" />
                  Interview
                </NavLink>
                <NavLink
                  to="/chrome-extension"
                  className={({ isActive }) =>
                    isActive
                      ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-primary px-3 py-2 text-primary-foreground hover:text-foreground"
                      : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  }
                >
                  <ToyBrick className="h-4 w-4" />
                  Chrome Extension
                </NavLink>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
    </>
  );
};

export default Navbar;
