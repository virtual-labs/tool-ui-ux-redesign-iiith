"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Check, TrendingUp, TrendingDown, Minus, Download, Filter, MoreHorizontal, Eye, Edit } from "lucide-react"

const experimentData = [
  {
    id: "EXP001",
    name: "pH Titration",
    status: "Completed",
    progress: 100,
    date: "2024-01-15",
    researcher: "Dr. Smith",
  },
  {
    id: "EXP002",
    name: "Cell Division",
    status: "Running",
    progress: 65,
    date: "2024-01-16",
    researcher: "Dr. Johnson",
  },
  {
    id: "EXP003",
    name: "Pendulum Motion",
    status: "Paused",
    progress: 30,
    date: "2024-01-14",
    researcher: "Dr. Brown",
  },
  { id: "EXP004", name: "Crystallization", status: "Failed", progress: 0, date: "2024-01-13", researcher: "Dr. Davis" },
]

const measurementData = [
  { time: "00:00", temperature: 25.0, pressure: 1.01, ph: 7.0 },
  { time: "00:30", temperature: 25.2, pressure: 1.02, ph: 7.1 },
  { time: "01:00", temperature: 25.5, pressure: 1.03, ph: 7.3 },
  { time: "01:30", temperature: 25.8, pressure: 1.04, ph: 7.5 },
  { time: "02:00", temperature: 26.0, pressure: 1.05, ph: 7.8 },
]

export default function DataDisplayPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Running":
        return "bg-blue-100 text-blue-800"
      case "Paused":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Data Display</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Components for displaying scientific data, measurements, and experimental results in Virtual Labs.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        <Tabs defaultValue="tables" className="space-y-8">
          <TabsList>
            <TabsTrigger value="tables">Tables</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="lists">Lists</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="tables" className="space-y-8">
            {/* Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Data Tables</CardTitle>
                <CardDescription>Display experimental data and measurements in tabular format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Experiment Results</h3>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Experiment ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Researcher</TableHead>
                          <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {experimentData.map((experiment) => (
                          <TableRow key={experiment.id}>
                            <TableCell className="font-mono text-sm">{experiment.id}</TableCell>
                            <TableCell className="font-medium">{experiment.name}</TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(experiment.status)}>{experiment.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Progress value={experiment.progress} className="w-16" />
                                <span className="text-sm text-muted-foreground">{experiment.progress}%</span>
                              </div>
                            </TableCell>
                            <TableCell className="font-mono text-sm">{experiment.date}</TableCell>
                            <TableCell>{experiment.researcher}</TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-1">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Experiment ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-mono">EXP001</TableCell>
      <TableCell>pH Titration</TableCell>
      <TableCell>
        <Badge className="bg-green-100 text-green-800">
          Completed
        </Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Experiment ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-mono">EXP001</TableCell>
      <TableCell>pH Titration</TableCell>
      <TableCell>
        <Badge className="bg-green-100 text-green-800">
          Completed
        </Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Measurement Table */}
            <Card>
              <CardHeader>
                <CardTitle>Measurement Data Table</CardTitle>
                <CardDescription>Real-time measurement data with scientific notation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time</TableHead>
                        <TableHead>Temperature (°C)</TableHead>
                        <TableHead>Pressure (atm)</TableHead>
                        <TableHead>pH Level</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {measurementData.map((measurement, index) => (
                        <TableRow key={measurement.time}>
                          <TableCell className="font-mono">{measurement.time}</TableCell>
                          <TableCell className="font-mono">{measurement.temperature.toFixed(1)}</TableCell>
                          <TableCell className="font-mono">{measurement.pressure.toFixed(2)}</TableCell>
                          <TableCell className="font-mono">{measurement.ph.toFixed(1)}</TableCell>
                          <TableCell>
                            {index > 0 && (
                              <div className="flex items-center">
                                {measurement.temperature > measurementData[index - 1].temperature ? (
                                  <TrendingUp className="h-4 w-4 text-green-600" />
                                ) : measurement.temperature < measurementData[index - 1].temperature ? (
                                  <TrendingDown className="h-4 w-4 text-red-600" />
                                ) : (
                                  <Minus className="h-4 w-4 text-gray-400" />
                                )}
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards" className="space-y-8">
            {/* Experiment Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Experiment Cards</CardTitle>
                <CardDescription>Card-based display for experiment overview and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {experimentData.map((experiment) => (
                    <Card key={experiment.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className={getStatusColor(experiment.status)}>{experiment.status}</Badge>
                          <span className="text-xs text-muted-foreground font-mono">{experiment.id}</span>
                        </div>
                        <CardTitle className="text-lg">{experiment.name}</CardTitle>
                        <CardDescription>By {experiment.researcher}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{experiment.progress}%</span>
                            </div>
                            <Progress value={experiment.progress} />
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Date</span>
                            <span className="font-mono">{experiment.date}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<Card className="hover:shadow-md transition-shadow">
  <CardHeader className="pb-3">
    <div className="flex items-center justify-between">
      <Badge className="bg-green-100 text-green-800">Completed</Badge>
      <span className="text-xs text-muted-foreground font-mono">EXP001</span>
    </div>
    <CardTitle className="text-lg">pH Titration</CardTitle>
    <CardDescription>By Dr. Smith</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  </CardContent>
</Card>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Metric Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Metric Cards</CardTitle>
                <CardDescription>Display key measurements and statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground">Temperature</p>
                          <p className="text-2xl font-bold font-mono">25.4°C</p>
                        </div>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">+0.2°C from last reading</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground">Pressure</p>
                          <p className="text-2xl font-bold font-mono">1.05 atm</p>
                        </div>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">+0.01 atm from last reading</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground">pH Level</p>
                          <p className="text-2xl font-bold font-mono">7.8</p>
                        </div>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">+0.3 from last reading</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground">Volume</p>
                          <p className="text-2xl font-bold font-mono">50.0 mL</p>
                        </div>
                        <Minus className="h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">No change</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lists" className="space-y-8">
            {/* Activity List */}
            <Card>
              <CardHeader>
                <CardTitle>Activity Lists</CardTitle>
                <CardDescription>Display recent activities and experiment logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">Dr. Smith completed pH Titration experiment</p>
                      <p className="text-xs text-muted-foreground">2 hours ago • EXP001</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarFallback>DJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">Dr. Johnson started Cell Division observation</p>
                      <p className="text-xs text-muted-foreground">4 hours ago • EXP002</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Running</Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarFallback>DB</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">Dr. Brown paused Pendulum Motion simulation</p>
                      <p className="text-xs text-muted-foreground">6 hours ago • EXP003</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Paused</Badge>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <Avatar>
                      <AvatarFallback>DD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">Dr. Davis encountered error in Crystallization</p>
                      <p className="text-xs text-muted-foreground">8 hours ago • EXP004</p>
                    </div>
                    <Badge className="bg-red-100 text-red-800">Failed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment Status List */}
            <Card>
              <CardHeader>
                <CardTitle>Equipment Status</CardTitle>
                <CardDescription>Monitor laboratory equipment status and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Microscope #1</p>
                        <p className="text-xs text-muted-foreground">Available • Last used 2h ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Reserve
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Spectrometer #2</p>
                        <p className="text-xs text-muted-foreground">In use • Dr. Johnson until 3:00 PM</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      In Use
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Centrifuge #3</p>
                        <p className="text-xs text-muted-foreground">Maintenance • Available tomorrow</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      Maintenance
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">pH Meter #4</p>
                        <p className="text-xs text-muted-foreground">Available • Calibrated this morning</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Reserve
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-8">
            {/* Key Metrics Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Metrics</CardTitle>
                <CardDescription>Key performance indicators and statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24</div>
                    <div className="text-sm text-muted-foreground">Active Experiments</div>
                    <div className="text-xs text-green-600 mt-1">+3 from last week</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">156</div>
                    <div className="text-sm text-muted-foreground">Completed This Month</div>
                    <div className="text-xs text-green-600 mt-1">+12% from last month</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">89%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                    <div className="text-xs text-green-600 mt-1">+2% improvement</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">42</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                    <div className="text-xs text-blue-600 mt-1">5 online now</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Measurements */}
            <Card>
              <CardHeader>
                <CardTitle>Real-time Measurements</CardTitle>
                <CardDescription>Live data from active experiments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Chemistry Lab #1</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Temperature</span>
                        <span className="font-mono font-medium">25.4°C</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">pH Level</span>
                        <span className="font-mono font-medium">7.2</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Pressure</span>
                        <span className="font-mono font-medium">1.01 atm</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Physics Lab #2</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Velocity</span>
                        <span className="font-mono font-medium">2.4 m/s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Acceleration</span>
                        <span className="font-mono font-medium">9.8 m/s²</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Frequency</span>
                        <span className="font-mono font-medium">0.5 Hz</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Biology Lab #3</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Cell Count</span>
                        <span className="font-mono font-medium">1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Viability</span>
                        <span className="font-mono font-medium">94.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Growth Rate</span>
                        <span className="font-mono font-medium">0.3/hr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Indicators */}
            <Card>
              <CardHeader>
                <CardTitle>Experiment Progress</CardTitle>
                <CardDescription>Track progress of ongoing experiments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>pH Titration Analysis</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">Estimated completion: 15 minutes</div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Cell Division Observation</span>
                      <span>42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">Estimated completion: 2 hours</div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Pendulum Motion Study</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">Estimated completion: 45 minutes</div>
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
