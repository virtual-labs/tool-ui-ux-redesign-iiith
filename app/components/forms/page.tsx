"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, AlertCircle, Info } from "lucide-react"

export default function FormsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [sliderValue, setSliderValue] = useState([50])

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Forms</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Form components designed for data collection and parameter input in Virtual Labs.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        <Tabs defaultValue="examples" className="space-y-8">
          <TabsList>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
            <TabsTrigger value="layouts">Layouts</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-8">
            {/* Basic Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Inputs</CardTitle>
                <CardDescription>Standard form inputs for data collection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="text-input">Text Input</Label>
                    <Input id="text-input" placeholder="Enter sample name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number-input">Number Input</Label>
                    <Input id="number-input" type="number" placeholder="25.4" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-input">Email Input</Label>
                    <Input id="email-input" type="email" placeholder="researcher@lab.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-input">Password Input</Label>
                    <Input id="password-input" type="password" placeholder="••••••••" />
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<div className="space-y-2">
  <Label htmlFor="text-input">Text Input</Label>
  <Input id="text-input" placeholder="Enter sample name" />
</div>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="text-input">Text Input</Label>
  <Input id="text-input" placeholder="Enter sample name" />
</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Selection Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Selection Controls</CardTitle>
                <CardDescription>Dropdowns, checkboxes, and radio buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Equipment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select equipment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="microscope">Microscope</SelectItem>
                        <SelectItem value="spectrometer">Spectrometer</SelectItem>
                        <SelectItem value="centrifuge">Centrifuge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Measurement Units</Label>
                    <RadioGroup defaultValue="celsius">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="celsius" id="celsius" />
                        <Label htmlFor="celsius">Celsius (°C)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fahrenheit" id="fahrenheit" />
                        <Label htmlFor="fahrenheit">Fahrenheit (°F)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="kelvin" id="kelvin" />
                        <Label htmlFor="kelvin">Kelvin (K)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Safety Protocols</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="safety-goggles" />
                      <Label htmlFor="safety-goggles">Safety goggles required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="gloves" />
                      <Label htmlFor="gloves">Protective gloves required</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ventilation" />
                      <Label htmlFor="ventilation">Proper ventilation required</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Advanced Controls</CardTitle>
                <CardDescription>Sliders, switches, and text areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Temperature Control: {sliderValue[0]}°C</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0°C</span>
                    <span>100°C</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="auto-mode" />
                  <Label htmlFor="auto-mode">Enable automatic mode</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observations">Observations</Label>
                  <Textarea id="observations" placeholder="Record your experimental observations here..." rows={4} />
                </div>
              </CardContent>
            </Card>

            {/* Lab-Specific Form */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Lab Form</CardTitle>
                <CardDescription>Example of a comprehensive experiment setup form</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experiment-name">Experiment Name</Label>
                      <Input id="experiment-name" placeholder="pH Titration Analysis" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="researcher">Researcher</Label>
                      <Input id="researcher" placeholder="Dr. Smith" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Solution Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select solution" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hcl">Hydrochloric Acid</SelectItem>
                          <SelectItem value="naoh">Sodium Hydroxide</SelectItem>
                          <SelectItem value="h2so4">Sulfuric Acid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="concentration">Concentration (M)</Label>
                      <Input id="concentration" type="number" step="0.01" placeholder="0.1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volume">Volume (mL)</Label>
                      <Input id="volume" type="number" placeholder="50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Target pH: 7.0</Label>
                    <Slider defaultValue={[7]} max={14} min={0} step={0.1} />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="auto-titration" />
                    <Label htmlFor="auto-titration">Enable automatic titration</Label>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit">Start Experiment</Button>
                    <Button type="button" variant="outline">
                      Save as Template
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="validation" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Form Validation</CardTitle>
                <CardDescription>Error states and validation patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="required-field">Required Field</Label>
                  <Input
                    id="required-field"
                    placeholder="This field is required"
                    className="border-red-500 focus:border-red-500 focus:ring-red-500"
                  />
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    This field is required
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="invalid-number">Invalid Number</Label>
                  <Input
                    id="invalid-number"
                    type="number"
                    placeholder="Enter a valid number"
                    className="border-red-500 focus:border-red-500 focus:ring-red-500"
                  />
                  <div className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    Please enter a number between 0 and 100
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="valid-field">Valid Field</Label>
                  <Input
                    id="valid-field"
                    placeholder="This field is valid"
                    className="border-green-500 focus:border-green-500 focus:ring-green-500"
                  />
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Check className="h-4 w-4" />
                    Valid input
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="info-field">Field with Info</Label>
                  <Input id="info-field" placeholder="Enter temperature" />
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <Info className="h-4 w-4" />
                    Temperature should be between 20-30°C for optimal results
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Validation Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`// Error state
<Input className="border-red-500 focus:border-red-500 focus:ring-red-500" />
<div className="flex items-center gap-2 text-sm text-red-600">
  <AlertCircle className="h-4 w-4" />
  Error message
</div>

// Success state  
<Input className="border-green-500 focus:border-green-500 focus:ring-green-500" />
<div className="flex items-center gap-2 text-sm text-green-600">
  <Check className="h-4 w-4" />
  Success message
</div>

// Info state
<div className="flex items-center gap-2 text-sm text-blue-600">
  <Info className="h-4 w-4" />
  Helpful information
</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layouts" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Form Layouts</CardTitle>
                <CardDescription>Different layout patterns for various use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Single Column Layout</h3>
                  <div className="max-w-md space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="single-name">Sample Name</Label>
                      <Input id="single-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="single-type">Sample Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="liquid">Liquid</SelectItem>
                          <SelectItem value="solid">Solid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="single-notes">Notes</Label>
                      <Textarea id="single-notes" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Two Column Layout</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="two-col-1">Temperature (°C)</Label>
                      <Input id="two-col-1" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="two-col-2">Pressure (atm)</Label>
                      <Input id="two-col-2" type="number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="two-col-3">pH Level</Label>
                      <Input id="two-col-3" type="number" step="0.1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="two-col-4">Volume (mL)</Label>
                      <Input id="two-col-4" type="number" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Grouped Fields</h3>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3">Sample Information</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="group-name">Sample ID</Label>
                          <Input id="group-name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="group-date">Collection Date</Label>
                          <Input id="group-date" type="date" />
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-3">Experimental Conditions</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="group-temp">Temperature</Label>
                          <Input id="group-temp" type="number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="group-pressure">Pressure</Label>
                          <Input id="group-pressure" type="number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="group-humidity">Humidity</Label>
                          <Input id="group-humidity" type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Keyboard Navigation</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    All form controls are keyboard accessible with proper tab order and focus management.
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>Tab:</strong> Move to next field
                    <br />
                    <strong>Shift + Tab:</strong> Move to previous field
                    <br />
                    <strong>Space:</strong> Toggle checkboxes and switches
                    <br />
                    <strong>Enter:</strong> Submit forms or activate buttons
                    <br />
                    <strong>Arrow keys:</strong> Navigate radio groups and sliders
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Screen Reader Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Proper labeling and ARIA attributes for screen reader compatibility.
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sr-input">Temperature Reading</Label>
                      <Input id="sr-input" aria-describedby="sr-help" placeholder="25.4" />
                      <div id="sr-help" className="text-sm text-muted-foreground">
                        Enter temperature in Celsius (0-100°C)
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Error Handling</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Clear error messages with proper ARIA attributes for screen readers.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="error-input">Required Field</Label>
                    <Input
                      id="error-input"
                      aria-invalid="true"
                      aria-describedby="error-message"
                      className="border-red-500"
                    />
                    <div id="error-message" role="alert" className="text-sm text-red-600">
                      This field is required for the experiment to proceed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Label Association</h4>
                  <p className="text-sm text-muted-foreground">
                    Always associate labels with form controls using the `htmlFor` attribute or by wrapping the control.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Required Fields</h4>
                  <p className="text-sm text-muted-foreground">
                    Mark required fields clearly and use the `required` attribute for validation.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Error Messages</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide clear, specific error messages that help users understand how to fix the problem.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Focus Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure focus moves logically through the form and is clearly visible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
