import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LayoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Layout Grid</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Flexible grid systems for organizing Virtual Labs interfaces across all device sizes.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        {/* Grid Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Grid Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsive First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grids adapt seamlessly from mobile to desktop, ensuring lab interfaces work on all devices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grid layouts prioritize content hierarchy and scientific data presentation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Flexible Columns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Support for 12-column, 8-column, and custom grid configurations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Breakpoints */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Breakpoints</h2>
          <Card>
            <CardHeader>
              <CardTitle>Responsive Breakpoints</CardTitle>
              <CardDescription>Screen size breakpoints optimized for lab interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Breakpoint</th>
                      <th className="text-left p-3">Min Width</th>
                      <th className="text-left p-3">Columns</th>
                      <th className="text-left p-3">Margins</th>
                      <th className="text-left p-3">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-mono">xs</td>
                      <td className="p-3">0px</td>
                      <td className="p-3">4</td>
                      <td className="p-3">16px</td>
                      <td className="p-3">Mobile phones</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">sm</td>
                      <td className="p-3">640px</td>
                      <td className="p-3">8</td>
                      <td className="p-3">24px</td>
                      <td className="p-3">Large phones, small tablets</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">md</td>
                      <td className="p-3">768px</td>
                      <td className="p-3">12</td>
                      <td className="p-3">32px</td>
                      <td className="p-3">Tablets, small laptops</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">lg</td>
                      <td className="p-3">1024px</td>
                      <td className="p-3">12</td>
                      <td className="p-3">40px</td>
                      <td className="p-3">Laptops, desktops</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono">xl</td>
                      <td className="p-3">1280px</td>
                      <td className="p-3">12</td>
                      <td className="p-3">48px</td>
                      <td className="p-3">Large desktops</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">2xl</td>
                      <td className="p-3">1536px</td>
                      <td className="p-3">12</td>
                      <td className="p-3">64px</td>
                      <td className="p-3">Ultra-wide displays</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Grid Examples</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>12-Column Grid</CardTitle>
                <CardDescription>Standard grid for most lab interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-12 gap-2 mb-4">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="bg-blue-100 border border-blue-300 p-2 text-center text-xs">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    {`<div className="grid grid-cols-12 gap-4">
  <div className="col-span-8">Main Content</div>
  <div className="col-span-4">Sidebar</div>
</div>`}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lab Interface Layout</CardTitle>
                <CardDescription>Common layout pattern for virtual labs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-12 gap-4 mb-4 min-h-[200px]">
                  <div className="col-span-3 bg-green-100 border border-green-300 p-4 rounded">
                    <div className="text-sm font-medium">Controls Panel</div>
                    <div className="text-xs text-muted-foreground mt-1">Equipment controls, parameters</div>
                  </div>
                  <div className="col-span-6 bg-blue-100 border border-blue-300 p-4 rounded">
                    <div className="text-sm font-medium">Experiment View</div>
                    <div className="text-xs text-muted-foreground mt-1">3D visualization, simulation</div>
                  </div>
                  <div className="col-span-3 bg-purple-100 border border-purple-300 p-4 rounded">
                    <div className="text-sm font-medium">Data Panel</div>
                    <div className="text-xs text-muted-foreground mt-1">Results, measurements</div>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    {`<div className="grid grid-cols-12 gap-6">
  <div className="col-span-3">Controls Panel</div>
  <div className="col-span-6">Experiment View</div>
  <div className="col-span-3">Data Panel</div>
</div>`}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsive Grid</CardTitle>
                <CardDescription>Grid that adapts to different screen sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="bg-orange-100 border border-orange-300 p-4 rounded text-center">
                    <div className="text-sm font-medium">Card 1</div>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 p-4 rounded text-center">
                    <div className="text-sm font-medium">Card 2</div>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 p-4 rounded text-center">
                    <div className="text-sm font-medium">Card 3</div>
                  </div>
                  <div className="bg-orange-100 border border-orange-300 p-4 rounded text-center">
                    <div className="text-sm font-medium">Card 4</div>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Container Sizes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Container Sizes</h2>
          <Card>
            <CardHeader>
              <CardTitle>Max Width Containers</CardTitle>
              <CardDescription>Predefined container sizes for different content types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="font-medium">container-sm (640px)</div>
                  <div className="text-sm text-muted-foreground">Forms, simple interfaces</div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="font-medium">container-md (768px)</div>
                  <div className="text-sm text-muted-foreground">Documentation, content pages</div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="font-medium">container-lg (1024px)</div>
                  <div className="text-sm text-muted-foreground">Lab interfaces, dashboards</div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <div className="font-medium">container-xl (1280px)</div>
                  <div className="text-sm text-muted-foreground">Complex lab simulations</div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <div className="font-medium">container-2xl (1536px)</div>
                  <div className="text-sm text-muted-foreground">Full-screen lab environments</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Implementation</h2>

          <Card>
            <CardHeader>
              <CardTitle>CSS Grid Classes</CardTitle>
              <CardDescription>Tailwind CSS classes for grid layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`/* Grid Container */
.grid                    /* display: grid */
.grid-cols-12           /* 12 equal columns */
.grid-cols-[1fr_2fr]    /* Custom column sizes */

/* Grid Items */
.col-span-6             /* Span 6 columns */
.col-start-2            /* Start at column 2 */
.col-end-8              /* End at column 8 */

/* Responsive Grid */
.grid-cols-1            /* 1 column on mobile */
.md:grid-cols-2         /* 2 columns on tablet */
.lg:grid-cols-4         /* 4 columns on desktop */

/* Gap */
.gap-4                  /* 16px gap */
.gap-x-6                /* 24px horizontal gap */
.gap-y-4                /* 16px vertical gap */`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
