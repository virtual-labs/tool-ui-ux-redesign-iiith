"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Monitor, Smartphone, Tablet, Grid, Layers, Maximize2, Minimize2 } from "lucide-react"

export default function LayoutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Layout Components</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Structural components for organizing virtual lab interfaces with responsive design patterns.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="containers">Containers</TabsTrigger>
          <TabsTrigger value="grids">Grids</TabsTrigger>
          <TabsTrigger value="panels">Panels</TabsTrigger>
          <TabsTrigger value="responsive">Responsive</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Layout System Overview</CardTitle>
              <CardDescription>
                Flexible layout components designed for complex virtual laboratory interfaces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <Grid className="h-8 w-8 mb-2 text-blue-600" />
                  <h3 className="font-semibold mb-1">Container System</h3>
                  <p className="text-sm text-muted-foreground">Responsive containers for different content types</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <Layers className="h-8 w-8 mb-2 text-green-600" />
                  <h3 className="font-semibold mb-1">Grid Layouts</h3>
                  <p className="text-sm text-muted-foreground">Flexible grid systems for data organization</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <Monitor className="h-8 w-8 mb-2 text-purple-600" />
                  <h3 className="font-semibold mb-1">Panel System</h3>
                  <p className="text-sm text-muted-foreground">Collapsible panels for complex interfaces</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="containers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Container Components</CardTitle>
              <CardDescription>Responsive containers for different content layouts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Container */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Main Container</h3>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2">Lab Interface Container</h4>
                      <p className="text-sm text-muted-foreground">
                        Maximum width container with responsive padding for main lab content
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono">
                  {`<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="bg-white p-6 rounded-lg shadow-sm">
    {/* Lab content */}
  </div>
</div>`}
                </div>
              </div>

              {/* Experiment Container */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Experiment Container</h3>
                <div className="border rounded-lg p-4 bg-blue-50">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Chemistry Experiment #1</h4>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Focused container for individual experiments with clear boundaries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Container */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sidebar Container</h3>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex">
                    <div className="w-64 bg-white border-r p-4">
                      <h4 className="font-medium mb-2">Lab Tools</h4>
                      <div className="space-y-2">
                        <div className="p-2 bg-gray-100 rounded text-sm">Microscope</div>
                        <div className="p-2 bg-gray-100 rounded text-sm">Thermometer</div>
                        <div className="p-2 bg-gray-100 rounded text-sm">pH Meter</div>
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-muted-foreground">Main content area</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grids" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grid Systems</CardTitle>
              <CardDescription>Flexible grid layouts for organizing lab data and controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Equipment Grid */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Equipment Grid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Microscope A1</h4>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">High-resolution optical microscope</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-yellow-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Centrifuge B2</h4>
                      <Badge className="bg-yellow-100 text-yellow-800">In Use</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">High-speed laboratory centrifuge</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-red-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Spectrometer C3</h4>
                      <Badge className="bg-red-100 text-red-800">Maintenance</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">UV-Vis spectrophotometer</p>
                  </div>
                </div>
              </div>

              {/* Data Grid */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Display Grid</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">23.5°C</div>
                    <div className="text-sm text-muted-foreground">Temperature</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">7.2</div>
                    <div className="text-sm text-muted-foreground">pH Level</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">1.2 atm</div>
                    <div className="text-sm text-muted-foreground">Pressure</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">45%</div>
                    <div className="text-sm text-muted-foreground">Humidity</div>
                  </div>
                </div>
              </div>

              {/* Asymmetric Grid */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Asymmetric Layout</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 p-6 border rounded-lg">
                    <h4 className="font-medium mb-2">Experiment Workspace</h4>
                    <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-muted-foreground">Main experiment area</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Controls</h4>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full">
                          Start
                        </Button>
                        <Button size="sm" variant="outline" className="w-full">
                          Pause
                        </Button>
                        <Button size="sm" variant="destructive" className="w-full">
                          Stop
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Status</h4>
                      <div className="text-sm space-y-1">
                        <div>Duration: 00:15:32</div>
                        <div>Progress: 65%</div>
                        <div>Status: Running</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="panels" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Panel System</CardTitle>
              <CardDescription>Collapsible and resizable panels for complex interfaces</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Collapsible Panel */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Collapsible Panel</h3>
                <div className="border rounded-lg">
                  <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                    <h4 className="font-medium">Equipment Settings</h4>
                    <Button size="sm" variant="ghost">
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Temperature Control</span>
                      <Badge variant="outline">Auto</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Stirring Speed</span>
                      <span className="text-sm font-mono">250 rpm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Timer</span>
                      <span className="text-sm font-mono">15:30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Split Panel */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Split Panel Layout</h3>
                <div className="border rounded-lg h-64 flex">
                  <div className="w-1/2 p-4 border-r">
                    <h4 className="font-medium mb-2">Procedure</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Add 50ml distilled water</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Heat to 80°C</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Add catalyst slowly</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <span>Monitor for 10 minutes</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 p-4">
                    <h4 className="font-medium mb-2">Observations</h4>
                    <div className="h-full bg-gray-50 rounded p-3 text-sm">
                      <p>Solution turned light blue after adding catalyst...</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabbed Panel */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tabbed Panel</h3>
                <div className="border rounded-lg">
                  <Tabs defaultValue="data" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                      <TabsTrigger value="data">Data</TabsTrigger>
                      <TabsTrigger value="analysis">Analysis</TabsTrigger>
                      <TabsTrigger value="notes">Notes</TabsTrigger>
                    </TabsList>
                    <TabsContent value="data" className="p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Time: 00:05:00</span>
                          <span>Temp: 78.5°C</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Time: 00:10:00</span>
                          <span>Temp: 80.1°C</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Time: 00:15:00</span>
                          <span>Temp: 79.8°C</span>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="analysis" className="p-4">
                      <p className="text-sm text-muted-foreground">
                        Temperature remained stable within target range...
                      </p>
                    </TabsContent>
                    <TabsContent value="notes" className="p-4">
                      <p className="text-sm text-muted-foreground">Experiment notes and observations...</p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responsive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>Adaptive layouts for different screen sizes and devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Breakpoint Overview */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Breakpoint System</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <Smartphone className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="font-medium">Mobile</div>
                    <div className="text-sm text-muted-foreground">{"< 768px"}</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Tablet className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <div className="font-medium">Tablet</div>
                    <div className="text-sm text-muted-foreground">768px - 1024px</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Monitor className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <div className="font-medium">Desktop</div>
                    <div className="text-sm text-muted-foreground">1024px - 1440px</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Maximize2 className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <div className="font-medium">Large</div>
                    <div className="text-sm text-muted-foreground">{"1440px+"}</div>
                  </div>
                </div>
              </div>

              {/* Mobile-First Approach */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Mobile-First Lab Interface</h3>
                <div className="border rounded-lg p-4">
                  <div className="space-y-4">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-sm">Current Experiment</h4>
                          <p className="text-xs text-muted-foreground">Chemistry Lab #1</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 border rounded text-center text-sm">
                            <div className="font-bold">23.5°C</div>
                            <div className="text-xs text-muted-foreground">Temp</div>
                          </div>
                          <div className="p-2 border rounded text-center text-sm">
                            <div className="font-bold">7.2</div>
                            <div className="text-xs text-muted-foreground">pH</div>
                          </div>
                        </div>
                        <Button className="w-full">View Full Interface</Button>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className="flex space-x-4">
                        <div className="flex-1 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium mb-2">Current Experiment</h4>
                          <p className="text-sm text-muted-foreground">Chemistry Lab #1 - Acid-Base Titration</p>
                        </div>
                        <div className="w-64 space-y-2">
                          <div className="p-3 border rounded text-center">
                            <div className="text-xl font-bold">23.5°C</div>
                            <div className="text-sm text-muted-foreground">Temperature</div>
                          </div>
                          <div className="p-3 border rounded text-center">
                            <div className="text-xl font-bold">7.2</div>
                            <div className="text-sm text-muted-foreground">pH Level</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Best practices for implementing layout components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Layout Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-green-600">✓ Do</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Use consistent spacing throughout the interface</li>
                      <li>• Prioritize important lab data with larger containers</li>
                      <li>• Group related controls and information together</li>
                      <li>• Ensure touch targets are at least 44px on mobile</li>
                      <li>• Use collapsible panels for secondary information</li>
                      <li>• Maintain visual hierarchy with proper nesting</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-red-600">✗ Don't</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Overcrowd the interface with too many panels</li>
                      <li>• Use inconsistent grid systems across pages</li>
                      <li>• Hide critical safety information in collapsed panels</li>
                      <li>• Create layouts that don't work on mobile devices</li>
                      <li>• Use fixed widths that don't adapt to content</li>
                      <li>• Ignore accessibility requirements for focus order</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Implementation Examples</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono space-y-4">
                  <div>
                    <div className="text-green-400 mb-2">// Basic Lab Layout</div>
                    <div>{`<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <div className="lg:col-span-3">
      {/* Main experiment area */}
    </div>
    <div className="space-y-4">
      {/* Controls and status */}
    </div>
  </div>
</div>`}</div>
                  </div>

                  <div>
                    <div className="text-green-400 mb-2">// Responsive Equipment Grid</div>
                    <div>{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {equipment.map((item) => (
    <EquipmentCard key={item.id} {...item} />
  ))}
</div>`}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
