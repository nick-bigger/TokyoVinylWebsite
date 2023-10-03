import {cn} from "@/lib/utils"
import {Link} from "@tanstack/react-router";

export function MainNav({
                          className,
                          ...props
                        }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("p-4 mb-40 flex justify-between items-center", className)}
      {...props}
    >
      <div className="flex space-x-4">
        <Link
          activeProps={{
            className: 'text-primary',
          }}
          className="text-sm text-muted font-bold transition-colors"
          to="/"
        >
          Home
        </Link>
        <Link
          activeProps={{
            className: 'text-primary',
          }}
          className="text-sm text-muted font-bold transition-colors"
          to="/schedule"
        >
          Schedule
        </Link>
        <Link
          activeProps={{
            className: 'text-primary',
          }}
          className="text-sm text-muted font-bold transition-colors"
          to="/about"
        >
          About
        </Link>
      </div>
    </nav>
  )
}