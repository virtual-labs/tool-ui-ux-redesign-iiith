"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Eye,
  Ear,
  Hand,
  Brain,
  Monitor,
  Keyboard,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Users,
  Settings,
} from "lucide-react"

export default function AccessibilityGuidelinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Accessibility Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Ensuring virtual laboratory interfaces are accessible to all users, including those with disabilities.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visual">Visual</TabsTrigger>
          <TabsTrigger value="auditory">Auditory</TabsTrigger>
          <TabsTrigger value="motor">Motor</TabsTrigger>
          <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Accessibility Principles</span>
              </CardTitle>
              <CardDescription>Core principles for creating inclusive virtual laboratory experiences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <Eye className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                  <h3 className="font-medium mb-2">Perceivable</h3>
                  <p className="text-sm text-muted-foreground">
                    Information must be presentable in ways users can perceive
                  </p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Hand className="h-8 w-8 mx-auto mb-3 text-green-500" />
                  <h3 className="font-medium mb-2">Operable</h3>
                  <p className="text-sm text-muted-foreground">Interface components must be operable by all users</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Brain className="h-8 w-8 mx-auto mb-3 text-purple-500" />
                  <h3 className="font-medium mb-2">Understandable</h3>
                  <p className="text-sm text-muted-foreground">Information and UI operation must be understandable</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Settings className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                  <h3 className="font-medium mb-2">Robust</h3>
                  <p className="text-sm text-muted-foreground">Content must work with various assistive technologies</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>WCAG 2.1 Compliance Levels</CardTitle>
              <CardDescription>Web Content Accessibility Guidelines compliance targets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">Level A</Badge>
                    <span className="font-medium">Minimum</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Basic accessibility features that remove major barriers
                  </p>
                  <div className="space-y-1 text-sm">
                    <div>• Alt text for images</div>
                    <div>• Keyboard navigation</div>
                    <div>• Proper heading structure</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-blue-50">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className="bg-blue-100 text-blue-800">Level AA</Badge>
                    <span className="font-medium">Target</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Standard level for most web content and legal compliance
                  </p>
                  <div className="space-y-1 text-sm">
                    <div>• Color contrast ratios</div>
                    <div>• Resizable text</div>
                    <div>• Focus indicators</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">Level AAA</Badge>
                    <span className="font-medium">Enhanced</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Highest level, providing enhanced accessibility</p>
                  <div className="space-y-1 text-sm">
                    <div>• Higher contrast ratios</div>
                    <div>• Sign language interpretation</div>
                    <div>• Context-sensitive help</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Laboratory-Specific Considerations</CardTitle>
              <CardDescription>Unique accessibility challenges in virtual laboratory environments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-2">Complex Visual Information</h4>
                      <p className="text-sm text-yellow-700">
                        Laboratory interfaces often contain complex diagrams, charts, and visual data that require
                        alternative representations for users with visual impairments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Monitor className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Real-time Data</h4>
                      <p className="text-sm text-blue-700">
                        Live sensor readings and dynamic content need to be accessible to screen readers and other
                        assistive technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Hand className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Precise Interactions</h4>
                      <p className="text-sm text-green-700">
                        Laboratory equipment often requires precise control, which must be achievable through
                        alternative input methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>Visual Accessibility</span>
              </CardTitle>
              <CardDescription>Guidelines for users with visual impairments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Color and Contrast</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Minimum Contrast Ratios</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Normal text:</span>
                          <Badge variant="outline">4.5:1</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Large text (18pt+):</span>
                          <Badge variant="outline">3:1</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>UI components:</span>
                          <Badge variant="outline">3:1</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Color Usage</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Use color plus text/icons</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Provide pattern alternatives</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span>Never rely on color alone</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Text and Typography</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Font Requirements</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Minimum 16px for body text</div>
                        <div>• Sans-serif fonts preferred</div>
                        <div>• Avoid decorative fonts</div>
                        <div>• Adequate line spacing (1.5x)</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Scalability</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Support 200% zoom minimum</div>
                        <div>• Maintain functionality at all sizes</div>
                        <div>• Use relative units (rem, em)</div>
                        <div>• Test with browser zoom</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Alternative Text and Descriptions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Images and Diagrams</h4>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm mb-2">
                        <strong>Equipment Photo:</strong>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        "Digital pH meter displaying 7.2 on LCD screen, with glass electrode immersed in clear solution
                        in beaker"
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm mb-2">
                        <strong>Chart/Graph:</strong>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        "Line graph showing temperature increase from 20°C to 85°C over 10 minutes, with steepest rise
                        between minutes 3-6"
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Complex Data</h4>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm mb-2">
                        <strong>Data Table:</strong>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Provide table summaries and use proper headers. Consider sonification for trends.
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm mb-2">
                        <strong>3D Models:</strong>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Describe spatial relationships and provide tactile alternatives when possible.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="auditory" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Ear className="h-5 w-5" />
                <span>Auditory Accessibility</span>
              </CardTitle>
              <CardDescription>Guidelines for users with hearing impairments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Audio Content</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Captions and Transcripts</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Provide captions for all videos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Include speaker identification</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Describe important sounds</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Provide full transcripts</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Audio Descriptions</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Describe visual actions</div>
                        <div>• Explain equipment changes</div>
                        <div>• Narrate experimental procedures</div>
                        <div>• Include safety observations</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Visual Alternatives</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Alert Systems</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Visual notifications for audio alerts</div>
                        <div>• Flashing indicators for warnings</div>
                        <div>• Status lights for equipment states</div>
                        <div>• Progress bars for timed processes</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Communication</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Text-based chat systems</div>
                        <div>• Written instructions</div>
                        <div>• Visual feedback for interactions</div>
                        <div>• Sign language interpretation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Laboratory-Specific Audio Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Equipment Sounds</h4>
                    <p className="text-sm text-muted-foreground mb-3">Many lab instruments produce audio feedback</p>
                    <div className="space-y-1 text-sm">
                      <div>• Beeping timers → Visual countdown</div>
                      <div>• Pump sounds → Flow indicators</div>
                      <div>• Alarm sounds → Flashing alerts</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Instructor Audio</h4>
                    <p className="text-sm text-muted-foreground mb-3">Spoken instructions and explanations</p>
                    <div className="space-y-1 text-sm">
                      <div>• Live captions</div>
                      <div>• Written summaries</div>
                      <div>• Slide presentations</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Safety Audio</h4>
                    <p className="text-sm text-muted-foreground mb-3">Critical safety announcements</p>
                    <div className="space-y-1 text-sm">
                      <div>• Emergency alerts</div>
                      <div>• Warning notifications</div>
                      <div>• Evacuation procedures</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="motor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Hand className="h-5 w-5" />
                <span>Motor Accessibility</span>
              </CardTitle>
              <CardDescription>Guidelines for users with motor impairments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Keyboard Navigation</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Essential Requirements</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>All functions accessible via keyboard</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Logical tab order</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Visible focus indicators</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Skip navigation links</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Keyboard Shortcuts</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Tab</kbd> - Navigate forward
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Shift+Tab</kbd> - Navigate backward
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> - Activate buttons
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> - Toggle checkboxes
                        </div>
                        <div>
                          <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Esc</kbd> - Close dialogs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Target Sizes and Spacing</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Minimum Sizes</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Touch targets:</span>
                          <Badge variant="outline">44×44px</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Click targets:</span>
                          <Badge variant="outline">24×24px</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Spacing between:</span>
                          <Badge variant="outline">8px min</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Interaction Design</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Avoid drag-and-drop only interfaces</div>
                        <div>• Provide click alternatives</div>
                        <div>• Allow customizable timing</div>
                        <div>• Support sticky keys</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Alternative Input Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Keyboard className="h-5 w-5 text-blue-500" />
                      <h4 className="font-medium">Voice Control</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>• Voice commands for common actions</div>
                      <div>• Dictation for text input</div>
                      <div>• Custom voice shortcuts</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Eye className="h-5 w-5 text-green-500" />
                      <h4 className="font-medium">Eye Tracking</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>• Gaze-based navigation</div>
                      <div>• Dwell clicking</div>
                      <div>• Eye gesture controls</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Smartphone className="h-5 w-5 text-purple-500" />
                      <h4 className="font-medium">Switch Control</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>• Single switch scanning</div>
                      <div>• Multiple switch input</div>
                      <div>• Customizable switch functions</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Laboratory Equipment Adaptations</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium mb-3">Virtual Equipment Controls</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Precise Controls:</strong>
                      </div>
                      <div>• Increment/decrement buttons</div>
                      <div>• Keyboard input for exact values</div>
                      <div>• Slider alternatives</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Complex Interactions:</strong>
                      </div>
                      <div>• Step-by-step wizards</div>
                      <div>• Confirmation dialogs</div>
                      <div>• Undo/redo functionality</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cognitive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5" />
                <span>Cognitive Accessibility</span>
              </CardTitle>
              <CardDescription>Guidelines for users with cognitive and learning disabilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Clear Communication</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Language Simplification</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Use plain language</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Define technical terms</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Use active voice</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Keep sentences short</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Content Structure</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Use clear headings and subheadings</div>
                        <div>• Break content into chunks</div>
                        <div>• Provide summaries</div>
                        <div>• Use bullet points and lists</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Navigation and Orientation</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Wayfinding</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Consistent navigation patterns</div>
                        <div>• Breadcrumb navigation</div>
                        <div>• Clear page titles</div>
                        <div>• Progress indicators</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Error Prevention</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Input validation</div>
                        <div>• Confirmation dialogs</div>
                        <div>• Undo functionality</div>
                        <div>• Clear error messages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Learning Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Multiple Formats</h4>
                    <p className="text-sm text-muted-foreground mb-3">Present information in various ways</p>
                    <div className="space-y-1 text-sm">
                      <div>• Text instructions</div>
                      <div>• Visual diagrams</div>
                      <div>• Audio explanations</div>
                      <div>• Interactive tutorials</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Pacing Control</h4>
                    <p className="text-sm text-muted-foreground mb-3">Allow users to control timing</p>
                    <div className="space-y-1 text-sm">
                      <div>• Pause/resume functionality</div>
                      <div>• Adjustable time limits</div>
                      <div>• Self-paced learning</div>
                      <div>• Repeat options</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Memory Aids</h4>
                    <p className="text-sm text-muted-foreground mb-3">Support working memory</p>
                    <div className="space-y-1 text-sm">
                      <div>• Step-by-step guides</div>
                      <div>• Checklists</div>
                      <div>• Progress saving</div>
                      <div>• Reference materials</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Laboratory-Specific Cognitive Support</h3>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-medium mb-3">Complex Procedures</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Procedure Breakdown:</strong>
                      </div>
                      <div>• Step-by-step wizards</div>
                      <div>• Visual progress tracking</div>
                      <div>• Checkpoint saves</div>
                      <div>• Review summaries</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Safety Reminders:</strong>
                      </div>
                      <div>• Contextual safety tips</div>
                      <div>• Visual safety indicators</div>
                      <div>• Automatic safety checks</div>
                      <div>• Emergency procedures</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Testing</CardTitle>
              <CardDescription>Methods and tools for testing accessibility compliance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Automated Testing Tools</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Browser Extensions</h4>
                      <div className="space-y-2 text-sm">
                        <div>• axe DevTools</div>
                        <div>• WAVE Web Accessibility Evaluator</div>
                        <div>• Lighthouse Accessibility Audit</div>
                        <div>• Colour Contrast Analyser</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Command Line Tools</h4>
                      <div className="space-y-2 text-sm">
                        <div>• axe-core CLI</div>
                        <div>• Pa11y</div>
                        <div>• AccessLint</div>
                        <div>• Tenon.io API</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Manual Testing</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Keyboard Testing</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Navigate using only keyboard</div>
                        <div>• Test all interactive elements</div>
                        <div>• Verify focus indicators</div>
                        <div>• Check tab order</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Screen Reader Testing</h4>
                      <div className="space-y-2 text-sm">
                        <div>• NVDA (Windows)</div>
                        <div>• JAWS (Windows)</div>
                        <div>• VoiceOver (macOS/iOS)</div>
                        <div>• TalkBack (Android)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Testing Checklist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Visual Testing</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Color contrast meets WCAG standards</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Text scales to 200% without loss of function</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Focus indicators are visible</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Information not conveyed by color alone</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Interaction Testing</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>All functions accessible via keyboard</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Touch targets meet minimum size</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Time limits can be extended</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Error messages are clear and helpful</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium mb-3">User Testing with Disabilities</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The most valuable accessibility testing involves real users with disabilities. Consider:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Recruitment</div>
                    <div>• Partner with disability organizations</div>
                    <div>• Compensate participants fairly</div>
                    <div>• Provide accessible testing environments</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Testing Focus</div>
                    <div>• Task completion rates</div>
                    <div>• Error recovery</div>
                    <div>• User satisfaction</div>
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
