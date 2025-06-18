"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Save,
  Download,
  Upload,
  Camera,
  Mic,
  FileText,
  Database,
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
} from "lucide-react"

export default function DataCollectionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Data Collection Patterns</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive data capture interfaces for scientific experiments with validation and storage.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="forms">Data Forms</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
          <TabsTrigger value="media">Media Capture</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection Components</CardTitle>
              <CardDescription>
                Structured interfaces for capturing experimental data with validation and storage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <FileText className="h-8 w-8 mb-2 text-blue-600" />
                  <h3 className="font-semibold mb-1">Structured Forms</h3>
                  <p className="text-sm text-muted-foreground">Organized data entry with field validation</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <Database className="h-8 w-8 mb-2 text-green-600" />
                  <h3 className="font-semibold mb-1">Real-time Capture</h3>
                  <p className="text-sm text-muted-foreground">Live sensor data and measurements</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <Camera className="h-8 w-8 mb-2 text-purple-600" />
                  <h3 className="font-semibold mb-1">Media Integration</h3>
                  <p className="text-sm text-muted-foreground">Photos, videos, and audio recordings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Data Collection Session</CardTitle>
              <CardDescription>Chemistry Lab - Acid-Base Titration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Data Points</span>
                    <Badge variant="secondary">15/20</Badge>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-muted-foreground">Measurements recorded</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Session Time</span>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">23:45</div>
                  <div className="text-sm text-muted-foreground">Minutes elapsed</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Media Files</span>
                    <Camera className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-muted-foreground">Photos captured</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Experiment Data Entry Form</CardTitle>
              <CardDescription>
                Structured form for recording experimental observations and measurements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experiment-id">Experiment ID</Label>
                    <Input id="experiment-id" value="CHEM-001-2024" disabled />
                  </div>
                  <div>
                    <Label htmlFor="student-name">Student Name</Label>
                    <Input id="student-name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="lab-partner">Lab Partner</Label>
                    <Input id="lab-partner" placeholder="Partner's name" />
                  </div>
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="temperature">Initial Temperature (°C)</Label>
                    <Input id="temperature" type="number" step="0.1" placeholder="25.0" />
                  </div>
                  <div>
                    <Label htmlFor="ph">Initial pH</Label>
                    <Input id="ph" type="number" step="0.1" placeholder="7.0" />
                  </div>
                  <div>
                    <Label htmlFor="volume">Solution Volume (mL)</Label>
                    <Input id="volume" type="number" step="0.1" placeholder="50.0" />
                  </div>
                  <div>
                    <Label htmlFor="concentration">Concentration (M)</Label>
                    <Input id="concentration" type="number" step="0.001" placeholder="0.100" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label htmlFor="observations">Observations</Label>
                <Textarea id="observations" placeholder="Record your observations here..." className="min-h-[100px]" />
              </div>

              <div className="flex items-center space-x-2">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Data
                </Button>
                <Button variant="outline">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Validate
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Data Entry</CardTitle>
              <CardDescription>Rapid data capture for time-sensitive measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-lg font-bold mb-2">25.3°C</div>
                  <div className="text-sm text-muted-foreground mb-2">Temperature</div>
                  <Button size="sm" className="w-full">
                    Record
                  </Button>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-lg font-bold mb-2">7.2</div>
                  <div className="text-sm text-muted-foreground mb-2">pH Level</div>
                  <Button size="sm" className="w-full">
                    Record
                  </Button>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-lg font-bold mb-2">1.2 atm</div>
                  <div className="text-sm text-muted-foreground mb-2">Pressure</div>
                  <Button size="sm" className="w-full">
                    Record
                  </Button>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-lg font-bold mb-2">45%</div>
                  <div className="text-sm text-muted-foreground mb-2">Humidity</div>
                  <Button size="sm" className="w-full">
                    Record
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="measurements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Measurement Data Table</CardTitle>
              <CardDescription>Tabular data entry for systematic measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-2 text-left">Time (min)</th>
                      <th className="border border-gray-300 p-2 text-left">Temperature (°C)</th>
                      <th className="border border-gray-300 p-2 text-left">pH</th>
                      <th className="border border-gray-300 p-2 text-left">Volume Added (mL)</th>
                      <th className="border border-gray-300 p-2 text-left">Observations</th>
                      <th className="border border-gray-300 p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">0</td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="25.0" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="7.0" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="0.0" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input placeholder="Initial state" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Button size="sm">Save</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">5</td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="25.2" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="6.8" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="2.5" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input placeholder="Slight color change" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Button size="sm">Save</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">10</td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="25.1" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="6.5" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input className="w-20" placeholder="5.0" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Input placeholder="Color intensifying" />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <Button size="sm">Save</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <Button size="sm">Add Row</Button>
                <Button size="sm" variant="outline">
                  Auto-fill Time
                </Button>
                <Button size="sm" variant="outline">
                  Import from Sensors
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Media Capture Interface</CardTitle>
              <CardDescription>Capture photos, videos, and audio recordings during experiments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Camera className="h-5 w-5" />
                      <span>Photo Capture</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <Camera className="h-12 w-12 text-gray-400" />
                    </div>
                    <Button className="w-full">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                    <div className="text-sm text-muted-foreground">8 photos captured</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Mic className="h-5 w-5" />
                      <span>Audio Notes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Mic className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Ready to record</div>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Mic className="h-4 w-4 mr-2" />
                      Start Recording
                    </Button>
                    <div className="text-sm text-muted-foreground">3 recordings saved</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Upload className="h-5 w-5" />
                      <span>File Upload</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground">Drop files here</div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Browse Files
                    </Button>
                    <div className="text-sm text-muted-foreground">2 files uploaded</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Media Gallery</CardTitle>
                  <CardDescription>View and manage captured media files</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gray-100 rounded-lg p-2">
                      <div className="w-full h-full bg-blue-200 rounded flex items-center justify-center">
                        <span className="text-xs">IMG_001</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg p-2">
                      <div className="w-full h-full bg-green-200 rounded flex items-center justify-center">
                        <span className="text-xs">IMG_002</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg p-2">
                      <div className="w-full h-full bg-purple-200 rounded flex items-center justify-center">
                        <span className="text-xs">AUD_001</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg p-2 border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Validation</CardTitle>
              <CardDescription>Real-time validation and error checking for experimental data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Data Validation Passed</h4>
                      <p className="text-sm text-green-700 mt-1">
                        All measurements are within expected ranges and properly formatted.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">Warning: Unusual Reading</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Temperature reading of 85°C is higher than typical range (20-30°C). Please verify.
                      </p>
                      <Button size="sm" className="mt-2">
                        Confirm Reading
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800">Validation Error</h4>
                      <p className="text-sm text-red-700 mt-1">
                        pH value of 15.2 is outside valid range (0-14). Please correct this entry.
                      </p>
                      <Button size="sm" variant="destructive" className="mt-2">
                        Fix Error
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Validation Rules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Range Validation</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Temperature: -273°C to 1000°C</li>
                      <li>• pH: 0 to 14</li>
                      <li>• Pressure: 0 to 10 atm</li>
                      <li>• Volume: 0 to 1000 mL</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Format Validation</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Numeric precision: 2 decimal places</li>
                      <li>• Required fields must be filled</li>
                      <li>• Date format: YYYY-MM-DD</li>
                      <li>• Time format: HH:MM:SS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Export Options</CardTitle>
              <CardDescription>Export collected data in various formats for analysis and reporting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">CSV Export</CardTitle>
                    <CardDescription>Spreadsheet-compatible format</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Export CSV
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">PDF Report</CardTitle>
                    <CardDescription>Formatted lab report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Generate PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">JSON Data</CardTitle>
                    <CardDescription>Raw data format</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Export JSON
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Export Summary</CardTitle>
                  <CardDescription>Current session data overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="font-medium">Data Points</div>
                      <div className="text-muted-foreground">15 measurements</div>
                    </div>
                    <div>
                      <div className="font-medium">Media Files</div>
                      <div className="text-muted-foreground">8 photos, 3 audio</div>
                    </div>
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-muted-foreground">45 minutes</div>
                    </div>
                    <div>
                      <div className="font-medium">File Size</div>
                      <div className="text-muted-foreground">~2.3 MB</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center space-x-2">
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Export All Data
                    </Button>
                    <Button variant="outline">Share with Instructor</Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
