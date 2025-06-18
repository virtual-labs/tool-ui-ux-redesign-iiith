"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, FlaskRoundIcon as Flask, Github } from "lucide-react"

const navigation = [
  {
    title: "Foundations",
    href: "/foundations",
    items: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Layout", href: "/foundations/layout" },
    ],
  },
  {
    title: "Components",
    href: "/components",
    items: [
      { title: "Buttons", href: "/components/buttons" },
      { title: "Forms", href: "/components/forms" },
      { title: "Navigation", href: "/components/navigation" },
      { title: "Data Display", href: "/components/data-display" },
    ],
  },
  {
    title: "Patterns",
    href: "/patterns",
    items: [
      { title: "Lab Interface", href: "/patterns/lab-interface" },
      { title: "Data Visualization", href: "/patterns/data-viz" },
      { title: "Experiment Flow", href: "/patterns/experiment-flow" },
    ],
  },
  {
    title: "Guidelines",
    href: "/guidelines",
    items: [
      { title: "Content Design", href: "/guidelines/content" },
      { title: "Accessibility", href: "/guidelines/accessibility" },
      { title: "Implementation", href: "/guidelines/implementation" },
    ],
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Flask className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Virtual Labs DS</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith(item.href) ? "text-foreground" : "text-foreground/60",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/virtual-labs/design-system">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="flex items-center space-x-2">
        <Flask className="h-6 w-6" />
        <span className="font-bold">Virtual Labs DS</span>
      </Link>
      <div className="flex flex-col space-y-2">
        {navigation.map((item) => (
          <div key={item.href} className="flex flex-col space-y-3 pt-6">
            <h4 className="font-medium">{item.title}</h4>
            {item.items?.map((subItem) => (
              <Link key={subItem.href} href={subItem.href} className="text-muted-foreground">
                {subItem.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
