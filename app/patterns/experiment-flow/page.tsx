"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Circle,
  Clock,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Beaker,
  Thermometer,
  Timer,
  Plus,
} from "lucide-react"

const experimentSteps = [
  {
    id: 1,
    title: "Preparation",
    description: "Gather materials and set up equipment",
    status: "completed",
    duration: "5 min",
    safety: "low",
  },
  {
    id: 2,
    title: "Initial Measurements",
    description: "Record baseline temperature and pH",
    status: "completed",
    duration: "3 min",
    safety: "low",
  },
  {
    id: 3,
    title: "Add Reactants",
    description: "Slowly add catalyst while stirring",
    status: "active",
    duration: "10 min",
    safety: "medium",
  },
  {
    id: 4,
    title: "Monitor Reaction",
    description: "Observe color changes and temperature",
    status: "pending",
    duration: "15 min",
    safety: "medium",
  },
  {
    id: 5,
    title: "Final Analysis",
    description: "Record final measurements and observations",
    status: "pending",
    duration: "8 min",
    safety: "low",
  },
]

export default function ExperimentFlowPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Experiment Flow Patterns</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Structured workflows for guiding students through laboratory experiments with safety protocols.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stepper">Step Flow</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="controls">Controls</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Experiment Flow Components</CardTitle>
              <CardDescription>Guided workflow patterns for structured laboratory experiences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <CheckCircle className="h-8 w-8 mb-2 text-green-600" />
                  <h3 className="font-semibold mb-1">Step-by-Step Guide</h3>
                  <p className="text-sm text-muted-foreground">Sequential workflow with progress tracking</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <Clock className="h-8 w-8 mb-2 text-blue-600" />
                  <h3 className="font-semibold mb-1">Time Management</h3>
                  <p className="text-sm text-muted-foreground">Duration estimates and timing controls</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <AlertTriangle className="h-8 w-8 mb-2 text-orange-600" />
                  <h3 className="font-semibold mb-1">Safety Integration</h3>
                  <p className="text-sm text-muted-foreground">Built-in safety protocols and warnings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Experiment Progress</CardTitle>
              <CardDescription>Acid-Base Titration - Chemistry Lab</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Step 3 of 5: Add Reactants</h3>
                    <p className="text-sm text-muted-foreground">Slowly add catalyst while stirring</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                </div>
                <Progress value={60} className="w-full" />
                <div className="flex items-center justify-between text-sm">
                  <span>Overall Progress: 60%</span>
                  <span>Estimated Time Remaining: 25 min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stepper" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Step-by-Step Flow</CardTitle>
              <CardDescription>Interactive stepper component for experiment guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experimentSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                          step.status === "completed"
                            ? "bg-green-500 border-green-500 text-white"
                            : step.status === "active"
                              ? "bg-blue-500 border-blue-500 text-white"
                              : "bg-white border-gray-300 text-gray-400"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : step.status === "active" ? (
                          <Circle className="h-5 w-5 fill-current" />
                        ) : (
                          <Circle className="h-5 w-5" />
                        )}
                      </div>
                      {index < experimentSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-16 mt-2 ${step.status === "completed" ? "bg-green-500" : "bg-gray-300"}`}
                        />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-medium ${step.status === "active" ? "text-blue-600" : ""}`}>
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              step.safety === "high"
                                ? "destructive"
                                : step.safety === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {step.safety} risk
                          </Badge>
                          <span className="text-sm text-muted-foreground">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>

                      {step.status === "active" && (
                        <div className="flex items-center space-x-2">
                          <Button size="sm">
                            <Play className="h-4 w-4 mr-1" />
                            Continue
                          </Button>
                          <Button size="sm" variant="outline">
                            <Pause className="h-4 w-4 mr-1" />
                            Pause
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Experiment Timeline</CardTitle>
              <CardDescription>Visual timeline showing experiment progress and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Total Duration: 41 minutes</h3>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Started: 14:30</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        ✓
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Preparation Complete</h4>
                          <span className="text-sm text-muted-foreground">14:30 - 14:35</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Equipment setup and material preparation</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        ✓
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Initial Measurements</h4>
                          <span className="text-sm text-muted-foreground">14:35 - 14:38</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Baseline readings recorded</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-blue-600">Adding Reactants (Current)</h4>
                          <span className="text-sm text-muted-foreground">14:38 - 14:48</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Catalyst addition in progress</p>
                        <div className="mt-2">
                          <Progress value={40} className="w-full h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>4 min elapsed</span>
                            <span>6 min remaining</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 opacity-50">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Monitor Reaction</h4>
                          <span className="text-sm text-muted-foreground">14:48 - 15:03</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Observation and data collection phase</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 opacity-50">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Final Analysis</h4>
                          <span className="text-sm text-muted-foreground">15:03 - 15:11</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Results compilation and cleanup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <span>Safety Protocol Integration</span>
              </CardTitle>
              <CardDescription>Built-in safety checks and warnings throughout the experiment flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">High Risk Step Detected</h4>
                    <p className="text-sm text-red-700 mt-1">
                      Adding concentrated acid requires proper ventilation and protective equipment.
                    </p>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" id="safety1" className="rounded" />
                        <label htmlFor="safety1">Safety goggles are worn</label>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" id="safety2" className="rounded" />
                        <label htmlFor="safety2">Fume hood is operational</label>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" id="safety3" className="rounded" />
                        <label htmlFor="safety3">Lab coat is properly fastened</label>
                      </div>
                    </div>
                    <Button className="mt-3" size="sm">
                      Confirm Safety Measures
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-sm">Low Risk</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Standard lab procedures with minimal hazards</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-sm">Medium Risk</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Requires additional safety precautions</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-sm">High Risk</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Mandatory safety checks and supervision</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="controls" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Experiment Controls</CardTitle>
              <CardDescription>Interactive controls for managing experiment flow</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 rounded-lg">
                <Button size="lg" className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Start Step</span>
                </Button>
                <Button size="lg" variant="outline" className="flex items-center space-x-2">
                  <Pause className="h-5 w-5" />
                  <span>Pause</span>
                </Button>
                <Button size="lg" variant="outline" className="flex items-center space-x-2">
                  <RotateCcw className="h-5 w-5" />
                  <span>Reset</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Current Step Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Step Timer</span>
                      <div className="flex items-center space-x-2">
                        <Timer className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-sm">04:32</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Temperature</span>
                      <div className="flex items-center space-x-2">
                        <Thermometer className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-sm">78.5°C</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Stirring Speed</span>
                      <div className="flex items-center space-x-2">
                        <Beaker className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-sm">250 rpm</span>
                      </div>
                    </div>
                    <Button className="w-full" size="sm">
                      Record Observation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Navigation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-between">
                      <span>Previous Step</span>
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </Button>
                    <Button className="w-full justify-between">
                      <span>Next Step</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full">
                      Skip to Analysis
                    </Button>
                    <Button variant="destructive" className="w-full">
                      Emergency Stop
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Experiment Templates</CardTitle>
              <CardDescription>Pre-built flow templates for different types of experiments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Chemistry Titration</CardTitle>
                    <CardDescription>Acid-base titration workflow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>• Equipment setup (5 min)</div>
                      <div>• Baseline measurements (3 min)</div>
                      <div>• Titration process (15 min)</div>
                      <div>• Data analysis (10 min)</div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Use Template
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Physics Motion</CardTitle>
                    <CardDescription>Projectile motion analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>• Setup apparatus (8 min)</div>
                      <div>• Calibration (5 min)</div>
                      <div>• Data collection (20 min)</div>
                      <div>• Analysis & graphs (12 min)</div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Use Template
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Biology Microscopy</CardTitle>
                    <CardDescription>Cell observation protocol</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>• Sample preparation (10 min)</div>
                      <div>• Microscope setup (5 min)</div>
                      <div>• Observation & imaging (25 min)</div>
                      <div>• Documentation (8 min)</div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Flow Builder</h3>
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <div className="space-y-2">
                    <div className="text-muted-foreground">Create your own experiment flow</div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Build Custom Flow
                    </Button>
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
