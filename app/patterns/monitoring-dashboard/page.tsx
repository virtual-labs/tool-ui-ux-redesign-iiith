"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Thermometer,
  Zap,
  Beaker,
  Users,
  Settings,
  Bell,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

const realtimeData = [
  { time: "14:30", temperature: 23.5, ph: 7.2, pressure: 1.01 },
  { time: "14:31", temperature: 24.1, ph: 7.1, pressure: 1.02 },
  { time: "14:32", temperature: 24.8, ph: 7.0, pressure: 1.01 },
  { time: "14:33", temperature: 25.2, ph: 6.9, pressure: 1.03 },
  { time: "14:34", temperature: 25.1, ph: 6.8, pressure: 1.02 },
  { time: "14:35", temperature: 24.9, ph: 6.7, pressure: 1.01 },
]

export default function MonitoringDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Monitoring Dashboard Patterns</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Real-time monitoring interfaces for laboratory equipment, experiments, and environmental conditions.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="realtime">Real-time</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="controls">Controls</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Experiments</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <Activity className="h-8 w-8 text-blue-500" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+2 from yesterday</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Equipment Online</p>
                    <p className="text-2xl font-bold">28/32</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-muted-foreground">87.5% availability</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-yellow-600">2 warnings, 1 critical</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold">45</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-600">-5 from peak</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>System Status Overview</CardTitle>
              <CardDescription>Current status of all laboratory systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-green-600">✓ Operational</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>HVAC System</span>
                      <Badge className="bg-green-100 text-green-800">Normal</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Fire Safety</span>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Network</span>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-yellow-600">⚠ Warnings</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Fume Hood #3</span>
                      <Badge className="bg-yellow-100 text-yellow-800">Low Flow</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Storage Temp</span>
                      <Badge className="bg-yellow-100 text-yellow-800">High</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-red-600">✗ Critical</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Centrifuge B2</span>
                      <Badge className="bg-red-100 text-red-800">Offline</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="realtime" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Real-time Environmental Monitoring</span>
              </CardTitle>
              <CardDescription>Live sensor data from laboratory environment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={realtimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="temperature"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <span>Temperature</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">24.9°C</div>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-green-100 text-green-800">Normal</Badge>
                  <span className="text-sm text-muted-foreground">Target: 25°C ±2</span>
                </div>
                <Progress value={83} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>20°C</span>
                  <span>30°C</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Beaker className="h-5 w-5 text-blue-500" />
                  <span>pH Level</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">6.7</div>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800">Acidic</Badge>
                  <span className="text-sm text-muted-foreground">Target: 7.0 ±0.5</span>
                </div>
                <Progress value={48} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0</span>
                  <span>14</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Zap className="h-5 w-5 text-purple-500" />
                  <span>Pressure</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">1.01 atm</div>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-green-100 text-green-800">Stable</Badge>
                  <span className="text-sm text-muted-foreground">Standard conditions</span>
                </div>
                <Progress value={67} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0.5 atm</span>
                  <span>1.5 atm</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="equipment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Status Monitor</CardTitle>
              <CardDescription>Real-time status of all laboratory equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Microscope A1</CardTitle>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Usage Time</span>
                      <span className="font-mono">02:45:32</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Current User</span>
                      <span>Student #1234</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Magnification</span>
                      <span>400x</span>
                    </div>
                    <Button size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Centrifuge B2</CardTitle>
                      <Badge className="bg-red-100 text-red-800">Offline</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Status</span>
                      <span className="text-red-600">Maintenance Required</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Used</span>
                      <span>2 hours ago</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Next Service</span>
                      <span>Tomorrow</span>
                    </div>
                    <Button size="sm" variant="destructive" className="w-full">
                      Report Issue
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Spectrometer C3</CardTitle>
                      <Badge className="bg-yellow-100 text-yellow-800">Busy</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Current Scan</span>
                      <span>UV-Vis Analysis</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>65%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Est. Complete</span>
                      <span>5 min</span>
                    </div>
                    <Progress value={65} className="w-full" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Incubator D4</CardTitle>
                      <Badge className="bg-green-100 text-green-800">Available</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Temperature</span>
                      <span className="font-mono">37.0°C</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Humidity</span>
                      <span className="font-mono">65%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>CO₂ Level</span>
                      <span className="font-mono">5.0%</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Reserve
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Fume Hood #3</CardTitle>
                      <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Airflow</span>
                      <span className="text-yellow-600">85 fpm (Low)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sash Position</span>
                      <span>18 inches</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Filter Status</span>
                      <span>Replace Soon</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Check Status
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Balance E5</CardTitle>
                      <Badge className="bg-green-100 text-green-800">Ready</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Precision</span>
                      <span>±0.0001g</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Calibration</span>
                      <span>3 days ago</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Environment</span>
                      <span className="text-green-600">Stable</span>
                    </div>
                    <Button size="sm" className="w-full">
                      Start Weighing
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Alert Management</span>
              </CardTitle>
              <CardDescription>System alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-red-800">Critical: Equipment Failure</h4>
                        <span className="text-xs text-red-600">2 min ago</span>
                      </div>
                      <p className="text-sm text-red-700 mt-1">
                        Centrifuge B2 has stopped responding. Immediate attention required.
                      </p>
                      <div className="mt-3 flex items-center space-x-2">
                        <Button size="sm" variant="destructive">
                          Acknowledge
                        </Button>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-yellow-800">Warning: Low Airflow</h4>
                        <span className="text-xs text-yellow-600">15 min ago</span>
                      </div>
                      <p className="text-sm text-yellow-700 mt-1">
                        Fume Hood #3 airflow has dropped below safe operating levels.
                      </p>
                      <div className="mt-3 flex items-center space-x-2">
                        <Button size="sm">Acknowledge</Button>
                        <Button size="sm" variant="outline">
                          Inspect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-blue-800">Info: Scheduled Maintenance</h4>
                        <span className="text-xs text-blue-600">1 hour ago</span>
                      </div>
                      <p className="text-sm text-blue-700 mt-1">
                        Spectrometer C3 maintenance scheduled for tomorrow at 9:00 AM.
                      </p>
                      <div className="mt-3 flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          Schedule
                        </Button>
                        <Button size="sm" variant="outline">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-green-800">Success: Calibration Complete</h4>
                        <span className="text-xs text-green-600">2 hours ago</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Balance E5 calibration completed successfully. Ready for use.
                      </p>
                      <div className="mt-3">
                        <Button size="sm" variant="outline">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Statistics</CardTitle>
              <CardDescription>Alert frequency and response times</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-muted-foreground">Critical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">7</div>
                  <div className="text-sm text-muted-foreground">Warnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-muted-foreground">Info</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">45</div>
                  <div className="text-sm text-muted-foreground">Resolved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>Equipment utilization and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={realtimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Temperature (°C)"
                    />
                    <Line type="monotone" dataKey="ph" stroke="#10b981" strokeWidth={2} name="pH Level" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Equipment Utilization</CardTitle>
                <CardDescription>Usage statistics for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Microscopes</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="w-20" />
                      <span className="text-sm font-mono">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Centrifuges</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={62} className="w-20" />
                      <span className="text-sm font-mono">62%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Spectrometers</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={78} className="w-20" />
                      <span className="text-sm font-mono">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Incubators</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-20" />
                      <span className="text-sm font-mono">45%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>System performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System Uptime</span>
                    <span className="text-sm font-mono text-green-600">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Avg Response Time</span>
                    <span className="text-sm font-mono">1.2s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Accuracy</span>
                    <span className="text-sm font-mono text-green-600">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Alert Resolution</span>
                    <span className="text-sm font-mono">4.5 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="controls" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>System Controls</span>
              </CardTitle>
              <CardDescription>Monitor and control laboratory systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Environmental Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">HVAC System</span>
                      <Button size="sm" variant="outline">
                        Adjust
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Lighting</span>
                      <Button size="sm" variant="outline">
                        Control
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Emergency Systems</span>
                      <Button size="sm" variant="destructive">
                        Test
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Equipment Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Power Management</span>
                      <Button size="sm" variant="outline">
                        Manage
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Calibration</span>
                      <Button size="sm" variant="outline">
                        Schedule
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Maintenance</span>
                      <Button size="sm" variant="outline">
                        Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center">
                    <AlertTriangle className="h-6 w-6 mb-2" />
                    <span className="text-sm">Emergency Stop</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Settings className="h-6 w-6 mb-2" />
                    <span className="text-sm">System Reset</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Bell className="h-6 w-6 mb-2" />
                    <span className="text-sm">Test Alarms</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Activity className="h-6 w-6 mb-2" />
                    <span className="text-sm">Run Diagnostics</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
