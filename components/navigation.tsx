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
      { title: "Border Radius", href: "/foundations/border-radius" },
      { title: "Elevation", href: "/foundations/elevation" },
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
      { title: "Feedback", href: "/components/feedback" },
      { title: "Layout", href: "/components/layout" },
    ],
  },
  {
    title: "Patterns",
    href: "/patterns",
    items: [
      { title: "Lab Interface", href: "/patterns/lab-interface" },
      { title: "Data Visualization", href: "/patterns/data-visualization" },
      { title: "Experiment Flow", href: "/patterns/experiment-flow" },
      { title: "Data Collection", href: "/patterns/data-collection" },
      { title: "Monitoring Dashboard", href: "/patterns/monitoring-dashboard" },
      { title: "Collaborative Lab", href: "/patterns/collaborative-lab" },
    ],
  },
  {
    title: "Guidelines",
    href: "/guidelines",
    items: [
      { title: "Content Design", href: "/guidelines/content" },
      { title: "Accessibility", href: "/guidelines/accessibility" },
      { title: "Implementation", href: "/guidelines/implementation" },
      { title: "Research", href: "/guidelines/research" },
      { title: "Educational", href: "/guidelines/educational" },
      { title: "Safety & Ethics", href: "/guidelines/safety" },
    ],
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center shadow-sm shadow-blue-500/10">
              <Flask className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 tracking-tight text-base">Virtual Labs DS</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold">
            {navigation.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors py-1 hover:text-slate-900",
                    isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-500"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-base hover:bg-slate-50 md:hidden"
              >
                <Menu className="h-5 w-5 text-slate-700" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-white border-r border-slate-100">
              <MobileNav />
            </SheetContent>
          </Sheet>
          
          <div className="flex items-center">
            <Button variant="ghost" size="sm" asChild className="hover:bg-slate-50 hover:text-slate-900 text-slate-500">
              <Link href="https://github.com/virtual-labs/tool-ui-ux-redesign-iiith">
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
              <Link
                key={subItem.href}
                href={subItem.href}
                className="pl-2 text-sm text-slate-500 transition-colors hover:text-blue-600"
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
