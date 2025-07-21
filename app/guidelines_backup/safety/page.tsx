"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  AlertTriangle,
  Eye,
  Heart,
  Zap,
  Flame,
  Skull,
  CheckCircle,
  Phone,
  FileText,
  Users,
  Settings,
} from "lucide-react"

export default function SafetyGuidelinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Safety Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive safety protocols and risk management for virtual laboratory environments.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="hazards">Hazard Types</TabsTrigger>
          <TabsTrigger value="protocols">Protocols</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Safety Framework</span>
              </CardTitle>
              <CardDescription>Foundational principles for laboratory safety in virtual environments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <Eye className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                  <h3 className="font-medium mb-2">Prevention</h3>
                  <p className="text-sm text-muted-foreground">Identify and eliminate hazards before they cause harm</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <AlertTriangle className="h-8 w-8 mx-auto mb-3 text-yellow-500" />
                  <h3 className="font-medium mb-2">Preparation</h3>
                  <p className="text-sm text-muted-foreground">
                    Train users and establish emergency response procedures
                  </p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-red-500" />
                  <h3 className="font-medium mb-2">Protection</h3>
                  <p className="text-sm text-muted-foreground">Implement safeguards and protective measures</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Safety Hierarchy</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-red-800">Elimination</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Remove hazards entirely from the virtual environment
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-orange-800">Substitution</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Replace dangerous materials or procedures with safer alternatives
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-yellow-800">Engineering Controls</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Built-in safety features and automatic protective systems
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-800">Administrative Controls</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Policies, procedures, and training programs
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-purple-800">Personal Protective Equipment</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Individual protection as the last line of defense
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Virtual vs. Physical Safety</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Virtual Environment Advantages</h4>
                    <div className="space-y-1 text-sm text-green-700">
                      <div>• No physical exposure to hazardous materials</div>
                      <div>• Ability to simulate dangerous scenarios safely</div>
                      <div>• Unlimited practice opportunities</div>
                      <div>• Immediate reset after accidents</div>
                      <div>• Cost-effective safety training</div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">Unique Virtual Considerations</h4>
                    <div className="space-y-1 text-sm text-yellow-700">
                      <div>• Ergonomic risks from extended computer use</div>
                      <div>• Eye strain and visual fatigue</div>
                      <div>• Potential for developing unsafe habits</div>
                      <div>• Need for realistic consequence modeling</div>
                      <div>• Transfer of safety knowledge to real labs</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hazards" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Hazard Identification</span>
              </CardTitle>
              <CardDescription>Common laboratory hazards and their virtual representations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Flame className="h-6 w-6 text-red-500" />
                    <h3 className="font-medium">Fire Hazards</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Sources:</strong>
                    </div>
                    <div>• Bunsen burners and hot plates</div>
                    <div>• Flammable solvents</div>
                    <div>• Electrical equipment</div>
                    <div>• Heat-generating reactions</div>
                    <div>
                      <strong>Virtual Modeling:</strong>
                    </div>
                    <div>• Visual flame indicators</div>
                    <div>• Temperature warnings</div>
                    <div>• Fire spread simulation</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Skull className="h-6 w-6 text-purple-500" />
                    <h3 className="font-medium">Chemical Hazards</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Types:</strong>
                    </div>
                    <div>• Toxic substances</div>
                    <div>• Corrosive materials</div>
                    <div>• Carcinogens</div>
                    <div>• Reactive chemicals</div>
                    <div>
                      <strong>Virtual Modeling:</strong>
                    </div>
                    <div>• Safety Data Sheet integration</div>
                    <div>• Hazard symbol display</div>
                    <div>• Exposure effect simulation</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="h-6 w-6 text-yellow-500" />
                    <h3 className="font-medium">Electrical Hazards</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Risks:</strong>
                    </div>
                    <div>• Shock and electrocution</div>
                    <div>• Equipment malfunction</div>
                    <div>• Arc flash incidents</div>
                    <div>• Fire from short circuits</div>
                    <div>
                      <strong>Virtual Modeling:</strong>
                    </div>
                    <div>• Circuit safety indicators</div>
                    <div>• Ground fault simulation</div>
                    <div>• Lockout/tagout procedures</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye className="h-6 w-6 text-blue-500" />
                    <h3 className="font-medium">Physical Hazards</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Sources:</strong>
                    </div>
                    <div>• Sharp objects and glassware</div>
                    <div>• High pressure systems</div>
                    <div>• Moving machinery</div>
                    <div>• Extreme temperatures</div>
                    <div>
                      <strong>Virtual Modeling:</strong>
                    </div>
                    <div>• Injury consequence display</div>
                    <div>• Pressure gauge warnings</div>
                    <div>• Equipment safety interlocks</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Heart className="h-6 w-6 text-pink-500" />
                    <h3 className="font-medium">Biological Hazards</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Agents:</strong>
                    </div>
                    <div>• Pathogenic microorganisms</div>
                    <div>• Contaminated samples</div>
                    <div>• Allergens</div>
                    <div>• Biohazardous waste</div>
                    <div>
                      <strong>Virtual Modeling:</strong>
                    </div>
                    <div>• Contamination tracking</div>
                    <div>• Biosafety level indicators</div>
                    <div>• Decontamination procedures</div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Settings className="h-6 w-6 text-gray-500" />
                    <h3 className="font-medium">Ergonomic Hazards</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Virtual-Specific:</strong>
                    </div>
                    <div>• Prolonged computer use</div>
                    <div>• Poor posture</div>
                    <div>• Eye strain</div>
                    <div>• Repetitive motions</div>
                    <div>
                      <strong>Prevention:</strong>
                    </div>
                    <div>• Break reminders</div>
                    <div>• Posture guidance</div>
                    <div>• Screen adjustment tips</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Risk Assessment Matrix</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="grid grid-cols-6 gap-2 text-sm">
                    <div className="font-medium">Probability →</div>
                    <div className="text-center font-medium">Very Low</div>
                    <div className="text-center font-medium">Low</div>
                    <div className="text-center font-medium">Medium</div>
                    <div className="text-center font-medium">High</div>
                    <div className="text-center font-medium">Very High</div>

                    <div className="font-medium">Very High ↓</div>
                    <div className="bg-yellow-200 p-2 text-center rounded">Medium</div>
                    <div className="bg-orange-200 p-2 text-center rounded">High</div>
                    <div className="bg-red-200 p-2 text-center rounded">Very High</div>
                    <div className="bg-red-300 p-2 text-center rounded">Extreme</div>
                    <div className="bg-red-400 p-2 text-center rounded">Extreme</div>

                    <div className="font-medium">High</div>
                    <div className="bg-green-200 p-2 text-center rounded">Low</div>
                    <div className="bg-yellow-200 p-2 text-center rounded">Medium</div>
                    <div className="bg-orange-200 p-2 text-center rounded">High</div>
                    <div className="bg-red-200 p-2 text-center rounded">Very High</div>
                    <div className="bg-red-300 p-2 text-center rounded">Extreme</div>

                    <div className="font-medium">Medium</div>
                    <div className="bg-green-100 p-2 text-center rounded">Very Low</div>
                    <div className="bg-green-200 p-2 text-center rounded">Low</div>
                    <div className="bg-yellow-200 p-2 text-center rounded">Medium</div>
                    <div className="bg-orange-200 p-2 text-center rounded">High</div>
                    <div className="bg-red-200 p-2 text-center rounded">Very High</div>

                    <div className="font-medium">Low</div>
                    <div className="bg-green-100 p-2 text-center rounded">Very Low</div>
                    <div className="bg-green-100 p-2 text-center rounded">Very Low</div>
                    <div className="bg-green-200 p-2 text-center rounded">Low</div>
                    <div className="bg-yellow-200 p-2 text-center rounded">Medium</div>
                    <div className="bg-orange-200 p-2 text-center rounded">High</div>

                    <div className="font-medium">Very Low</div>
                    <div className="bg-green-100 p-2 text-center rounded">Very Low</div>
                    <div className="bg-green-100 p-2 text-center rounded">Very Low</div>
                    <div className="bg-green-100 p-2 text-center rounded">Very Low</div>
                    <div className="bg-green-200 p-2 text-center rounded">Low</div>
                    <div className="bg-yellow-200 p-2 text-center rounded">Medium</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocols" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Safety Protocols</span>
              </CardTitle>
              <CardDescription>Standard operating procedures for virtual laboratory safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Pre-Laboratory Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Safety Briefing Checklist</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Review experiment objectives and procedures</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Identify potential hazards and risks</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Explain safety equipment and procedures</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Review emergency response procedures</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Confirm understanding through questions</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Document safety briefing completion</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Equipment Inspection</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Virtual Equipment Checks:</strong>
                      </div>
                      <div>• Verify all safety systems are functional</div>
                      <div>• Check calibration status</div>
                      <div>• Confirm proper settings and configurations</div>
                      <div>• Test emergency shutdown procedures</div>
                      <div>
                        <strong>User Interface Checks:</strong>
                      </div>
                      <div>• Ensure all safety warnings are visible</div>
                      <div>• Verify help and emergency buttons work</div>
                      <div>• Test audio/visual alert systems</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">During Laboratory Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Continuous Monitoring</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Real-time safety parameter display</div>
                      <div>• Automated hazard detection</div>
                      <div>• User behavior monitoring</div>
                      <div>• Progress tracking with safety milestones</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Intervention Systems</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Automatic safety warnings</div>
                      <div>• Procedure correction prompts</div>
                      <div>• Emergency stop capabilities</div>
                      <div>• Instructor notification systems</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Documentation</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Safety incident logging</div>
                      <div>• Procedure compliance tracking</div>
                      <div>• Performance metrics recording</div>
                      <div>• Audit trail maintenance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Post-Laboratory Procedures</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium mb-3">Decontamination and Cleanup</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Virtual Environment:</strong>
                      </div>
                      <div>• Simulate proper cleanup procedures</div>
                      <div>• Practice waste disposal protocols</div>
                      <div>• Equipment shutdown sequences</div>
                      <div>• Area decontamination steps</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Real Environment:</strong>
                      </div>
                      <div>• Clean computer workstation</div>
                      <div>• Sanitize shared equipment</div>
                      <div>• Proper hand hygiene</div>
                      <div>• Report any technical issues</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Safety Communication Protocols</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Warning Systems</h4>
                    <div className="space-y-3">
                      <div className="p-2 bg-red-100 border border-red-200 rounded">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span className="font-medium text-red-800">DANGER</span>
                        </div>
                        <div className="text-sm text-red-700 mt-1">Immediate hazard to life or health</div>
                      </div>
                      <div className="p-2 bg-orange-100 border border-orange-200 rounded">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="font-medium text-orange-800">WARNING</span>
                        </div>
                        <div className="text-sm text-orange-700 mt-1">Could result in death or serious injury</div>
                      </div>
                      <div className="p-2 bg-yellow-100 border border-yellow-200 rounded">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium text-yellow-800">CAUTION</span>
                        </div>
                        <div className="text-sm text-yellow-700 mt-1">Could result in minor or moderate injury</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Information Hierarchy</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Critical Information:</strong>
                      </div>
                      <div>• Emergency procedures</div>
                      <div>• Immediate safety actions</div>
                      <div>• Life-threatening hazards</div>
                      <div>
                        <strong>Important Information:</strong>
                      </div>
                      <div>• Safety precautions</div>
                      <div>• Protective equipment requirements</div>
                      <div>• Procedure modifications</div>
                      <div>
                        <strong>General Information:</strong>
                      </div>
                      <div>• Best practices</div>
                      <div>• Background knowledge</div>
                      <div>• Additional resources</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Response</span>
              </CardTitle>
              <CardDescription>Emergency procedures and crisis management protocols</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Emergency Response Framework</h3>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-3">Immediate Response Protocol</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        1
                      </div>
                      <div className="font-medium text-sm">ASSESS</div>
                      <div className="text-sm text-muted-foreground">Evaluate the situation</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        2
                      </div>
                      <div className="font-medium text-sm">ALERT</div>
                      <div className="text-sm text-muted-foreground">Notify appropriate personnel</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        3
                      </div>
                      <div className="font-medium text-sm">ACT</div>
                      <div className="text-sm text-muted-foreground">Take immediate action</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        4
                      </div>
                      <div className="font-medium text-sm">ASSIST</div>
                      <div className="text-sm text-muted-foreground">Provide ongoing support</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Emergency Scenarios</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Virtual Environment Emergencies</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">System Failure</h5>
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Response:</strong>
                          </div>
                          <div>• Immediately save current work</div>
                          <div>• Document system state</div>
                          <div>• Switch to backup system</div>
                          <div>• Notify technical support</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Simulated Accident</h5>
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Response:</strong>
                          </div>
                          <div>• Activate emergency stop</div>
                          <div>• Follow virtual emergency procedures</div>
                          <div>• Document incident details</div>
                          <div>• Debrief with instructor</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Data Loss</h5>
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Response:</strong>
                          </div>
                          <div>• Check automatic backups</div>
                          <div>• Attempt data recovery</div>
                          <div>• Document lost work</div>
                          <div>• Plan recovery strategy</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Physical Environment Emergencies</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Medical Emergency</h5>
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Response:</strong>
                          </div>
                          <div>• Call emergency services (911)</div>
                          <div>• Provide first aid if trained</div>
                          <div>• Clear the area</div>
                          <div>• Notify facility management</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Fire/Evacuation</h5>
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Response:</strong>
                          </div>
                          <div>• Activate fire alarm</div>
                          <div>• Evacuate immediately</div>
                          <div>• Use designated exit routes</div>
                          <div>• Report to assembly point</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Power Outage</h5>
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Response:</strong>
                          </div>
                          <div>• Save work immediately</div>
                          <div>• Use emergency lighting</div>
                          <div>• Wait for power restoration</div>
                          <div>• Report extended outages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Emergency Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-100 border border-red-200 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">Life-Threatening Emergency</h4>
                    <div className="text-2xl font-bold text-red-600 mb-2">911</div>
                    <div className="text-sm text-red-700">Fire, Police, Medical Emergency</div>
                  </div>
                  <div className="p-4 bg-blue-100 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Campus Security</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">(555) 123-4567</div>
                    <div className="text-sm text-blue-700">Non-emergency security issues</div>
                  </div>
                  <div className="p-4 bg-green-100 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Technical Support</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">(555) 987-6543</div>
                    <div className="text-sm text-green-700">System failures, technical issues</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Incident Reporting</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <h4 className="font-medium mb-3">Required Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium mb-2">Basic Details:</div>
                      <div>• Date and time of incident</div>
                      <div>• Location (physical and virtual)</div>
                      <div>• People involved</div>
                      <div>• Type of incident</div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Incident Description:</div>
                      <div>• Sequence of events</div>
                      <div>• Contributing factors</div>
                      <div>• Immediate actions taken</div>
                      <div>• Outcome and consequences</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Safety Training</span>
              </CardTitle>
              <CardDescription>Comprehensive safety education and training programs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Training Program Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Foundation Level</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Target:</strong> All users
                      </div>
                      <div>
                        <strong>Duration:</strong> 2-4 hours
                      </div>
                      <div>
                        <strong>Content:</strong>
                      </div>
                      <div>• Basic safety principles</div>
                      <div>• Virtual lab orientation</div>
                      <div>• Emergency procedures</div>
                      <div>• Personal protective equipment</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Intermediate Level</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Target:</strong> Regular users
                      </div>
                      <div>
                        <strong>Duration:</strong> 4-8 hours
                      </div>
                      <div>
                        <strong>Content:</strong>
                      </div>
                      <div>• Hazard identification</div>
                      <div>• Risk assessment</div>
                      <div>• Specific lab procedures</div>
                      <div>• Incident response</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Advanced Level</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Target:</strong> Instructors, supervisors
                      </div>
                      <div>
                        <strong>Duration:</strong> 8-16 hours
                      </div>
                      <div>
                        <strong>Content:</strong>
                      </div>
                      <div>• Safety management</div>
                      <div>• Training delivery</div>
                      <div>• Compliance requirements</div>
                      <div>• Continuous improvement</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Training Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Interactive Learning</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Scenario-Based Training</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Realistic emergency simulations</div>
                          <div>• Decision-making exercises</div>
                          <div>• Consequence modeling</div>
                          <div>• Performance feedback</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Gamification</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Safety challenge games</div>
                          <div>• Achievement badges</div>
                          <div>• Leaderboards</div>
                          <div>• Progress tracking</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Assessment Methods</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Knowledge Testing</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Multiple choice questions</div>
                          <div>• Scenario analysis</div>
                          <div>• Case study evaluation</div>
                          <div>• Regulatory compliance</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Practical Assessment</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Procedure demonstration</div>
                          <div>• Emergency response drills</div>
                          <div>• Equipment operation</div>
                          <div>• Safety inspection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Competency Framework</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Core Competencies</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Hazard recognition and assessment</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Safe work practices</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Emergency response procedures</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Personal protective equipment use</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Incident reporting and documentation</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Specialized Competencies</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Chemical safety management</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Biological safety protocols</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Radiation safety procedures</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Electrical safety practices</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>Equipment-specific safety</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Certification and Renewal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Certification Requirements</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Complete required training modules</div>
                      <div>• Pass written examination (80% minimum)</div>
                      <div>• Demonstrate practical competencies</div>
                      <div>• Submit safety project or case study</div>
                      <div>• Receive supervisor endorsement</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Renewal Schedule</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Annual:</strong> Basic safety refresher
                      </div>
                      <div>
                        <strong>Bi-annual:</strong> Specialized training updates
                      </div>
                      <div>
                        <strong>As needed:</strong> New equipment/procedure training
                      </div>
                      <div>
                        <strong>Post-incident:</strong> Remedial training if required
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Regulatory Compliance</span>
              </CardTitle>
              <CardDescription>Meeting legal and institutional safety requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Regulatory Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Federal Regulations</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">OSHA Standards</h5>
                        <div className="space-y-1 text-sm">
                          <div>• General Duty Clause (Section 5(a)(1))</div>
                          <div>• Hazard Communication Standard</div>
                          <div>• Personal Protective Equipment</div>
                          <div>• Laboratory Standard (29 CFR 1910.1450)</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">EPA Regulations</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Resource Conservation and Recovery Act</div>
                          <div>• Clean Air Act</div>
                          <div>• Clean Water Act</div>
                          <div>• Toxic Substances Control Act</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">DOT Requirements</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Hazardous Materials Regulations</div>
                          <div>• Shipping and packaging standards</div>
                          <div>• Transportation safety</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Institutional Standards</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Accreditation Bodies</h5>
                        <div className="space-y-1 text-sm">
                          <div>• ABET (Engineering/Technology)</div>
                          <div>• ACS (Chemistry programs)</div>
                          <div>• LCME (Medical education)</div>
                          <div>• Regional accreditors</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Professional Organizations</h5>
                        <div className="space-y-1 text-sm">
                          <div>• American Chemical Society</div>
                          <div>• American Society for Engineering Education</div>
                          <div>• National Association of Biology Teachers</div>
                          <div>• Campus Safety, Health & Environmental Management Association</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Insurance Requirements</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Liability coverage standards</div>
                          <div>• Risk management protocols</div>
                          <div>• Claims prevention measures</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Compliance Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Documentation</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Safety policies and procedures</div>
                      <div>• Training records</div>
                      <div>• Incident reports</div>
                      <div>• Inspection records</div>
                      <div>• Audit findings</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Monitoring</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Regular safety inspections</div>
                      <div>• Compliance audits</div>
                      <div>• Performance metrics</div>
                      <div>• Trend analysis</div>
                      <div>• Corrective actions</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Reporting</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Regulatory submissions</div>
                      <div>• Management reports</div>
                      <div>• Public disclosures</div>
                      <div>• Insurance notifications</div>
                      <div>• Stakeholder updates</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Audit and Inspection Checklist</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Safety Management System</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Written safety policies in place</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Designated safety officer assigned</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Regular safety committee meetings</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Safety performance metrics tracked</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Continuous improvement process</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Training and Competency</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Comprehensive training program</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Training records maintained</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Competency assessments conducted</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Refresher training scheduled</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>Training effectiveness evaluated</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Non-Compliance Consequences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">Potential Penalties</h4>
                    <div className="space-y-1 text-sm text-red-700">
                      <div>• Monetary fines and penalties</div>
                      <div>• Legal liability and lawsuits</div>
                      <div>• Loss of accreditation</div>
                      <div>• Facility closure orders</div>
                      <div>• Criminal prosecution</div>
                      <div>• Increased insurance premiums</div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">Mitigation Strategies</h4>
                    <div className="space-y-1 text-sm text-yellow-700">
                      <div>• Proactive compliance monitoring</div>
                      <div>• Regular legal updates</div>
                      <div>• Professional consultation</div>
                      <div>• Industry best practices</div>
                      <div>• Voluntary self-audits</div>
                      <div>• Corrective action plans</div>
                    </div>
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
