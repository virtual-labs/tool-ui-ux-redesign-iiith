"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
  Copy,
  Check,
  Loader2,
  Bell,
  Zap,
  Shield,
  Clock,
} from "lucide-react"

export default function FeedbackPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const showToastMessage = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Feedback</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Feedback components for communicating system status, errors, and important information in Virtual Labs.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        <Tabs defaultValue="alerts" className="space-y-8">
          <TabsList>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="toasts">Toasts</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="loading">Loading</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-8">
            {/* Alert Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Components</CardTitle>
                <CardDescription>Display important messages and system notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This experiment requires calibration before starting. Please ensure all equipment is properly set
                    up.
                  </AlertDescription>
                </Alert>

                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Success</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Experiment completed successfully! Results have been saved to your lab notebook.
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-800">Warning</AlertTitle>
                  <AlertDescription className="text-yellow-700">
                    Temperature is approaching critical levels. Consider reducing heat or adding cooling.
                  </AlertDescription>
                </Alert>

                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-800">Error</AlertTitle>
                  <AlertDescription className="text-red-700">
                    Equipment malfunction detected. Please stop the experiment and contact technical support.
                  </AlertDescription>
                </Alert>

                <div className="bg-muted p-4 rounded-lg relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This experiment requires calibration before starting.
  </AlertDescription>
</Alert>

<Alert className="border-green-200 bg-green-50">
  <CheckCircle className="h-4 w-4 text-green-600" />
  <AlertTitle className="text-green-800">Success</AlertTitle>
  <AlertDescription className="text-green-700">
    Experiment completed successfully!
  </AlertDescription>
</Alert>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This experiment requires calibration before starting.
  </AlertDescription>
</Alert>

<Alert className="border-green-200 bg-green-50">
  <CheckCircle className="h-4 w-4 text-green-600" />
  <AlertTitle className="text-green-800">Success</AlertTitle>
  <AlertDescription className="text-green-700">
    Experiment completed successfully!
  </AlertDescription>
</Alert>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Safety Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Safety Alerts</CardTitle>
                <CardDescription>Critical safety notifications for laboratory procedures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-red-500 bg-red-50">
                  <Shield className="h-4 w-4 text-red-600" />
                  <AlertTitle className="text-red-800">Safety Warning</AlertTitle>
                  <AlertDescription className="text-red-700">
                    <strong>Personal Protective Equipment Required:</strong> Safety goggles and gloves must be worn
                    during this procedure.
                  </AlertDescription>
                </Alert>

                <Alert className="border-orange-500 bg-orange-50">
                  <Zap className="h-4 w-4 text-orange-600" />
                  <AlertTitle className="text-orange-800">High Voltage Warning</AlertTitle>
                  <AlertDescription className="text-orange-700">
                    This equipment operates at high voltage. Ensure proper grounding and avoid contact with exposed
                    conductors.
                  </AlertDescription>
                </Alert>

                <Alert className="border-purple-500 bg-purple-50">
                  <AlertTriangle className="h-4 w-4 text-purple-600" />
                  <AlertTitle className="text-purple-800">Chemical Hazard</AlertTitle>
                  <AlertDescription className="text-purple-700">
                    Working with corrosive substances. Ensure adequate ventilation and have neutralizing agents readily
                    available.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Dismissible Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Dismissible Alerts</CardTitle>
                <CardDescription>Alerts that can be closed by the user</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Lab Update Available</AlertTitle>
                  <AlertDescription>
                    A new version of the chemistry simulation is available with improved accuracy.
                  </AlertDescription>
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2">
                    <X className="h-4 w-4" />
                  </Button>
                </Alert>

                <Alert className="border-blue-200 bg-blue-50">
                  <Bell className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-800">Maintenance Scheduled</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    System maintenance is scheduled for tonight at 2:00 AM. Save your work before then.
                  </AlertDescription>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">
                      Remind Me Later
                    </Button>
                    <Button size="sm">Got It</Button>
                  </div>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="toasts" className="space-y-8">
            {/* Toast Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>Temporary notifications that appear and disappear automatically</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Button onClick={showToastMessage}>Show Success Toast</Button>
                  <Button variant="outline" onClick={() => setShowNotification(true)}>
                    Show Error Toast
                  </Button>
                  <Button variant="outline">Show Warning Toast</Button>
                  <Button variant="outline">Show Info Toast</Button>
                </div>

                {/* Toast Examples (Static for demonstration) */}
                <div className="space-y-3 border rounded-lg p-4 bg-gray-50">
                  <div className="text-sm font-medium mb-3">Toast Examples:</div>

                  <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Experiment Saved</div>
                      <div className="text-xs text-muted-foreground">
                        Your pH titration data has been saved successfully.
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Connection Lost</div>
                      <div className="text-xs text-muted-foreground">
                        Unable to sync data. Check your internet connection.
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Low Battery</div>
                      <div className="text-xs text-muted-foreground">
                        Sensor battery is low. Replace soon to avoid data loss.
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Toast component structure
<div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
  <CheckCircle className="h-4 w-4 text-green-600" />
  <div className="flex-1">
    <div className="text-sm font-medium">Experiment Saved</div>
    <div className="text-xs text-muted-foreground">
      Your pH titration data has been saved successfully.
    </div>
  </div>
  <Button variant="ghost" size="sm">
    <X className="h-4 w-4" />
  </Button>
</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Toast with Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Toasts</CardTitle>
                <CardDescription>Toasts with action buttons for user interaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start gap-3 p-3 bg-white border rounded-lg shadow-sm">
                    <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Data Export Ready</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        Your experiment results are ready for download.
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                        <Button size="sm" variant="ghost">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white border rounded-lg shadow-sm">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Unsaved Changes</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        You have unsaved changes in your experiment setup.
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Save Now</Button>
                        <Button size="sm" variant="outline">
                          Discard
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-8">
            {/* Status Indicators */}
            <Card>
              <CardHeader>
                <CardTitle>Status Indicators</CardTitle>
                <CardDescription>Visual indicators for system and experiment status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Equipment Status</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Microscope #1</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-medium">Spectrometer #2</span>
                      </div>
                      <Badge className="bg-red-100 text-red-800">Offline</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium">Centrifuge #3</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Maintenance</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">pH Meter #4</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Calibrating</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Experiment Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">pH Titration Analysis</div>
                          <div className="text-xs text-muted-foreground">Running for 45 minutes</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">85%</div>
                        <div className="text-xs text-muted-foreground">15 min remaining</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Cell Division Observation</div>
                          <div className="text-xs text-muted-foreground">Paused at 42%</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Resume
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Crystallization Study</div>
                          <div className="text-xs text-muted-foreground">Completed 2 hours ago</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View Results
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Indicators */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Indicators</CardTitle>
                <CardDescription>Show progress of ongoing processes and experiments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Data Collection Progress</span>
                    <span>73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    Collecting measurements... 2 minutes remaining
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Analysis Processing</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    Processing statistical analysis... 5 minutes remaining
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Report Generation</span>
                    <span>100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <div className="text-xs text-green-600 mt-1">✓ Report generated successfully</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="loading" className="space-y-8">
            {/* Loading States */}
            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
                <CardDescription>Indicate when the system is processing or loading data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Button Loading States</h3>
                  <div className="flex gap-4 flex-wrap">
                    <Button disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Starting Experiment
                    </Button>
                    <Button variant="outline" disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving Data
                    </Button>
                    <Button variant="secondary" disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Content Loading</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-center h-32">
                        <div className="text-center">
                          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                          <div className="text-sm text-muted-foreground">Loading experiment data...</div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <div>
                          <div className="text-sm font-medium">Calibrating Equipment</div>
                          <div className="text-xs text-muted-foreground">This may take a few moments...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Skeleton Loading</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-muted rounded-full animate-pulse"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-4 bg-muted rounded animate-pulse"></div>
                        <div className="h-3 bg-muted rounded w-2/3 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Timed Loading</h3>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium">Equipment Warm-up</div>
                        <div className="text-xs text-muted-foreground">Estimated time: 2 minutes</div>
                      </div>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">1 minute 12 seconds remaining</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Error States */}
            <Card>
              <CardHeader>
                <CardTitle>Error States</CardTitle>
                <CardDescription>Handle and display error conditions gracefully</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-6 text-center">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Connection Failed</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Unable to connect to the laboratory equipment. Please check your connection and try again.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline">Contact Support</Button>
                    <Button>Try Again</Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6 text-center">
                  <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Equipment Unavailable</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The requested equipment is currently in use. You can wait or try a different setup.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline">Find Alternative</Button>
                    <Button>Join Queue</Button>
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
