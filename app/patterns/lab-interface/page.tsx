"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Square, RotateCcw, Settings, Beaker, AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function LabInterfacePage() {
  const [temperature, setTemperature] = useState([25])
  const [pressure, setPressure] = useState([1.2])
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Lab Interface Pattern</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Complete laboratory interface patterns with controls, monitoring, and data display for virtual experiments.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        <Tabs defaultValue="chemistry" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chemistry">Chemistry Lab</TabsTrigger>
            <TabsTrigger value="physics">Physics Simulator</TabsTrigger>
            <TabsTrigger value="biology">Biology Lab</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="chemistry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>pH Titration Laboratory</CardTitle>
                <CardDescription>
                  Interactive chemistry lab interface for acid-base titration experiments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-12 gap-6 min-h-[600px]">
                  {/* Control Panel */}
                  <div className="col-span-3 space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Settings className="h-5 w-5" />
                          Controls
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Temperature: {temperature[0]}°C</Label>
                          <Slider value={temperature} onValueChange={setTemperature} max={100} min={0} step={1} />
                        </div>

                        <div className="space-y-2">
                          <Label>Stirring Speed</Label>
                          <Slider defaultValue={[300]} max={1000} min={0} step={50} />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch id="auto-titration" />
                          <Label htmlFor="auto-titration">Auto Titration</Label>
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full" onClick={() => setIsRunning(!isRunning)}>
                            {isRunning ? (
                              <>
                                <Pause className="mr-2 h-4 w-4" />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Start
                              </>
                            )}
                          </Button>
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" size="sm">
                              <Square className="mr-2 h-4 w-4" />
                              Stop
                            </Button>
                            <Button variant="outline" size="sm">
                              <RotateCcw className="mr-2 h-4 w-4" />
                              Reset
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Safety</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-amber-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="text-sm">Wear safety goggles</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Experiment View */}
                  <div className="col-span-6">
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Beaker className="h-5 w-5" />
                          Titration Setup
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center">
                          {/* Simulated Lab Equipment */}
                          <div className="text-center">
                            <div className="w-32 h-40 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-4 relative overflow-hidden">
                              <div
                                className="absolute bottom-0 w-full bg-blue-300 transition-all duration-1000"
                                style={{ height: `${progress}%` }}
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-xs text-gray-600">Beaker</span>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              pH: {(7 + (progress / 100) * 7).toFixed(1)}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Data Panel */}
                  <div className="col-span-3 space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Measurements</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>pH Level</span>
                            <span className="font-mono">{(7 + (progress / 100) * 7).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Volume Added</span>
                            <span className="font-mono">{(progress * 0.5).toFixed(1)} mL</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Temperature</span>
                            <span className="font-mono">{temperature[0]}°C</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Progress</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Completion</span>
                            <span>{progress}%</span>
                          </div>
                          <Progress value={progress} className="w-full" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Status</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isRunning ? "bg-green-500" : "bg-gray-400"}`} />
                            <span className="text-sm">{isRunning ? "Running" : "Stopped"}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Last updated: {new Date().toLocaleTimeString()}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="physics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pendulum Motion Simulator</CardTitle>
                <CardDescription>
                  Physics simulation interface for studying pendulum motion and energy conservation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-12 gap-6 min-h-[600px]">
                  {/* Control Panel */}
                  <div className="col-span-3 space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Parameters</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Length: 1.5m</Label>
                          <Slider defaultValue={[150]} max={300} min={50} step={10} />
                        </div>

                        <div className="space-y-2">
                          <Label>Mass: 2.0kg</Label>
                          <Slider defaultValue={[20]} max={50} min={5} step={1} />
                        </div>

                        <div className="space-y-2">
                          <Label>Initial Angle: 30°</Label>
                          <Slider defaultValue={[30]} max={90} min={5} step={5} />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Switch id="air-resistance" />
                          <Label htmlFor="air-resistance">Air Resistance</Label>
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full">
                            <Play className="mr-2 h-4 w-4" />
                            Start Simulation
                          </Button>
                          <Button variant="outline" className="w-full">
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Simulation View */}
                  <div className="col-span-6">
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Pendulum Motion</CardTitle>
                      </CardHeader>
                      <CardContent className="h-full flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-square bg-gradient-to-b from-sky-50 to-sky-100 rounded-lg border-2 border-sky-200 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2" />
                            <div className="w-px h-32 bg-gray-800 mx-auto" />
                            <div className="w-8 h-8 bg-blue-600 rounded-full mx-auto" />
                            <div className="text-xs text-muted-foreground mt-4">Pendulum Simulation</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Data Panel */}
                  <div className="col-span-3 space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Real-time Data</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Angle</span>
                          <span className="font-mono">15.2°</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Velocity</span>
                          <span className="font-mono">0.85 m/s</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Period</span>
                          <span className="font-mono">2.45 s</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Energy</span>
                          <span className="font-mono">12.3 J</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Energy Graph</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-32 bg-muted rounded flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">Energy vs Time Graph</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="biology" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Microscopy Laboratory</CardTitle>
                <CardDescription>Digital microscopy interface for biological specimen examination</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-12 gap-6 min-h-[600px]">
                  {/* Control Panel */}
                  <div className="col-span-3 space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Microscope Controls</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Magnification</Label>
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" size="sm">
                              10x
                            </Button>
                            <Button variant="outline" size="sm">
                              40x
                            </Button>
                            <Button size="sm">100x</Button>
                            <Button variant="outline" size="sm">
                              400x
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Focus</Label>
                          <Slider defaultValue={[50]} max={100} min={0} step={1} />
                        </div>

                        <div className="space-y-2">
                          <Label>Brightness</Label>
                          <Slider defaultValue={[75]} max={100} min={0} step={1} />
                        </div>

                        <div className="space-y-2">
                          <Label>Contrast</Label>
                          <Slider defaultValue={[60]} max={100} min={0} step={1} />
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full">Capture Image</Button>
                          <Button variant="outline" className="w-full">
                            Record Video
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Microscope View */}
                  <div className="col-span-6">
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Specimen View</CardTitle>
                      </CardHeader>
                      <CardContent className="h-full flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-square bg-black rounded-full border-4 border-gray-800 flex items-center justify-center">
                          <div className="w-4/5 h-4/5 bg-gradient-radial from-gray-100 to-gray-300 rounded-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-xs text-gray-600 mb-2">Onion Cell Sample</div>
                              <div className="grid grid-cols-3 gap-1">
                                {Array.from({ length: 9 }, (_, i) => (
                                  <div key={i} className="w-8 h-6 border border-gray-400 rounded-sm bg-gray-50" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Analysis Panel */}
                  <div className="col-span-3 space-y-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Measurements</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Cell Length</span>
                          <span className="font-mono">45.2 μm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Cell Width</span>
                          <span className="font-mono">32.8 μm</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Area</span>
                          <span className="font-mono">1,483 μm²</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Count</span>
                          <span className="font-mono">12 cells</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Annotations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-xs space-y-1">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>Cell wall</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span>Nucleus</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span>Cytoplasm</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Tools</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Measure Distance
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Count Cells
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Add Annotation
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guidelines" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Lab Interface Design Guidelines</CardTitle>
                <CardDescription>Best practices for creating effective virtual laboratory interfaces</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Layout Principles</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Three-panel layout:</strong> Controls, experiment view, data display
                      </li>
                      <li>
                        • <strong>Consistent positioning:</strong> Controls on left, data on right
                      </li>
                      <li>
                        • <strong>Responsive design:</strong> Adapt to different screen sizes
                      </li>
                      <li>
                        • <strong>Visual hierarchy:</strong> Most important elements prominently placed
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Interaction Design</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        • <strong>Real-time feedback:</strong> Immediate response to user actions
                      </li>
                      <li>
                        • <strong>Progressive disclosure:</strong> Show advanced options when needed
                      </li>
                      <li>
                        • <strong>Error prevention:</strong> Validate inputs and prevent invalid states
                      </li>
                      <li>
                        • <strong>Undo/Reset:</strong> Allow users to recover from mistakes
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Scientific Accuracy</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Realistic Behavior</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Equipment and reactions should behave as they would in real laboratories.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Accurate Data</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Measurements and calculations must be scientifically correct and precise.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Safety Protocols</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Include safety warnings and proper laboratory procedures.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Implementation Checklist</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Control Panel Organization</div>
                        <div className="text-xs text-muted-foreground">
                          Group related controls, use clear labels, provide appropriate input types
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Visual Feedback</div>
                        <div className="text-xs text-muted-foreground">
                          Show system status, progress indicators, real-time updates
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Data Presentation</div>
                        <div className="text-xs text-muted-foreground">
                          Clear measurements, appropriate precision, export capabilities
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Accessibility</div>
                        <div className="text-xs text-muted-foreground">
                          Keyboard navigation, screen reader support, sufficient contrast
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
