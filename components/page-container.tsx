import { cn } from "@/lib/utils"

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: "6xl" | "7xl"
}

export function PageContainer({
  children,
  className,
  maxWidth = "6xl",
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "min-h-[calc(100vh-4rem)] bg-white",
        "bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:30px_30px]",
        className,
      )}
    >
      <div
        className={cn(
          "container mx-auto px-6 py-10",
          maxWidth === "7xl" ? "max-w-7xl" : "max-w-6xl",
        )}
      >
        {children}
      </div>
    </div>
  )
}
