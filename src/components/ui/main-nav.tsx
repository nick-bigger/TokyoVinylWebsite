import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {


  const navLinkClasses = ({ isActive } : { isActive : boolean }) => cn(
    "text-sm text-muted font-bold transition-colors",
    isActive && 'text-primary'
  )

  return (
    <nav
      className={cn("p-4 mb-40 flex justify-between items-center", className)}
      {...props}
    >
      <div className="flex space-x-4">
        <NavLink
          className={({ isActive }) => navLinkClasses({ isActive })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkClasses({ isActive })}
          to="/schedule"
        >
          Schedule
        </NavLink>
        <NavLink
          className={({ isActive }) => navLinkClasses({ isActive })}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
