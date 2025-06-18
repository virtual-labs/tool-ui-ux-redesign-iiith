"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, BarChart3, PieChartIcon, Activity, Zap, Thermometer } from "lucide-react"

const temperatureData = [
  { time: "00:00", temperature: 20.5, target: 25.0 },
  { time: "00:05", temperature: 22.1, target: 25.0 },
  { time: "00:10", temperature: 24.8, target: 25.0 },
  { time: "00:15", temperature: 25.2, target: 25.0 },
  { time: "00:20", temperature: 24.9, target: 25.0 },
  { time: "00:25", temperature: 25.1, target: 25.0 },
]

const experimentResults = [
  { sample: "A1", concentration: 0.25, ph: 7.2 },
  { sample: "A2", concentration: 0.31, ph: 7.4 },
  { sample: "B1", concentration: 0.18, ph: 6.9 },
  { sample: "B2", concentration: 0.42, ph: 7.8 },
  { sample: "C1", concentration: 0.35, ph: 7.1 },
  { sample: "C2", concentration: 0.28, ph: 7.3 },
]

const equipmentUsage = [
  { name: "Microscopes", value: 35, color: "#3b82f6" },
  { name: "Centrifuges", value: 25, color: "#10b981" },
  { name: "Spectrometers", value: 20, color: "#f59e0b" },
  { name: "Incubators", value: 15, color: "#ef4444" },
  { name: "Other", value: 5, color: "#6b7280" },
]

export default function DataVisualizationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Data Visualization Patterns</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Interactive charts and graphs for scientific data analysis and real-time monitoring.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="realtime">Real-time</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visualization Types</CardTitle>
              <CardDescription>Chart types optimized for scientific data presentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <TrendingUp className="h-8 w-8 mb-2 text-blue-600" />
                  <h3 className="font-semibold mb-1">Time Series</h3>
                  <p className="text-sm text-muted-foreground">Temperature, pressure, and continuous measurements</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <BarChart3 className="h-8 w-8 mb-2 text-green-600" />
                  <h3 className="font-semibold mb-1">Comparative</h3>
                  <p className="text-sm text-muted-foreground">Sample comparisons and experimental results</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <PieChartIcon className="h-8 w-8 mb-2 text-purple-600" />
                  <h3 className="font-semibold mb-1">Distribution</h3>
                  <p className="text-sm text-muted-foreground">Equipment usage and resource allocation</p>
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
                <span>Real-time Temperature Monitoring</span>
              </CardTitle>
              <CardDescription>Live temperature data with target range visualization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
                    <Tooltip
                      formatter={(value, name) => [`${value}°C`, name === "temperature" ? "Actual" : "Target"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#ef4444"
                      strokeDasharray="5 5"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Actual Temperature</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-0.5 bg-red-500"></div>
                    <span className="text-sm">Target Temperature</span>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Within Range</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Sensor Dashboard</CardTitle>
              <CardDescription>Multiple sensor readings in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Thermometer className="h-5 w-5 text-red-500" />
                    <Badge variant="outline">Normal</Badge>
                  </div>
                  <div className="text-2xl font-bold">25.1°C</div>
                  <div className="text-sm text-muted-foreground">Temperature</div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <Badge variant="outline">Stable</Badge>
                  </div>
                  <div className="text-2xl font-bold">7.2</div>
                  <div className="text-sm text-muted-foreground">pH Level</div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="text-2xl font-bold">1.2 atm</div>
                  <div className="text-sm text-muted-foreground">Pressure</div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Experimental Results Analysis</CardTitle>
              <CardDescription>Scatter plot showing concentration vs pH correlation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={experimentResults}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      type="number"
                      dataKey="concentration"
                      name="Concentration"
                      domain={["dataMin - 0.05", "dataMax + 0.05"]}
                    />
                    <YAxis type="number" dataKey="ph" name="pH" domain={["dataMin - 0.2", "dataMax + 0.2"]} />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "concentration" ? `${value} M` : value,
                        name === "concentration" ? "Concentration" : "pH Level",
                      ]}
                      labelFormatter={(label) => `Sample: ${label}`}
                    />
                    <Scatter dataKey="ph" fill="#3b82f6" name="pH vs Concentration" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Correlation coefficient: r = 0.73 (Strong positive correlation)
                  </div>
                  <Button size="sm" variant="outline">
                    Export Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Concentration Comparison</CardTitle>
              <CardDescription>Bar chart comparing concentration levels across different samples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={experimentResults}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sample" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} M`, "Concentration"]} />
                    <Bar dataKey="concentration" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium">Highest</div>
                  <div className="text-muted-foreground">Sample B2: 0.42 M</div>
                </div>
                <div>
                  <div className="font-medium">Lowest</div>
                  <div className="text-muted-foreground">Sample B1: 0.18 M</div>
                </div>
                <div>
                  <div className="font-medium">Average</div>
                  <div className="text-muted-foreground">0.30 M</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Usage Distribution</CardTitle>
              <CardDescription>Current allocation of laboratory equipment across experiments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="h-80 w-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={equipmentUsage}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {equipmentUsage.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Usage"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {equipmentUsage.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.value}% utilization</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visualization Guidelines</CardTitle>
              <CardDescription>Best practices for scientific data visualization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Chart Selection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-green-600">✓ Best Practices</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Use line charts for time-series data</li>
                      <li>• Choose bar charts for categorical comparisons</li>
                      <li>• Apply scatter plots for correlation analysis</li>
                      <li>• Include error bars for experimental data</li>
                      <li>• Use consistent color schemes across charts</li>
                      <li>• Provide clear axis labels and units</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-red-600">✗ Avoid</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 3D charts that distort data perception</li>
                      <li>• Too many colors that confuse interpretation</li>
                      <li>• Missing units or scale information</li>
                      <li>• Truncated axes that mislead viewers</li>
                      <li>• Overloaded charts with too much data</li>
                      <li>• Inconsistent styling across dashboards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Color Guidelines</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-3 border rounded-lg">
                    <div className="w-full h-8 bg-blue-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Primary Data</div>
                    <div className="text-xs text-muted-foreground">#3b82f6</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="w-full h-8 bg-green-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Success/Normal</div>
                    <div className="text-xs text-muted-foreground">#10b981</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="w-full h-8 bg-yellow-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Warning</div>
                    <div className="text-xs text-muted-foreground">#f59e0b</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="w-full h-8 bg-red-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Critical/Error</div>
                    <div className="text-xs text-muted-foreground">#ef4444</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Accessibility</h3>
                <div className="space-y-2 text-sm">
                  <p>• Ensure sufficient color contrast (minimum 4.5:1 ratio)</p>
                  <p>• Don't rely solely on color to convey information</p>
                  <p>• Provide alternative text descriptions for charts</p>
                  <p>• Include data tables as alternatives to visual charts</p>
                  <p>• Use patterns or textures in addition to colors</p>
                  <p>• Test with screen readers and keyboard navigation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
