"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Globe, MessageSquare, AlertTriangle, CheckCircle, Target, Eye } from "lucide-react"

export default function ContentGuidelinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Content Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Standards for creating clear, accessible, and educational content in virtual laboratory interfaces.
        </p>
      </div>

      <Tabs defaultValue="writing" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="writing">Writing Style</TabsTrigger>
          <TabsTrigger value="terminology">Terminology</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="localization">Localization</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="writing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Writing Style Principles</span>
              </CardTitle>
              <CardDescription>Core principles for writing effective laboratory content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-600">✓ Do</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium mb-2">Be Clear and Concise</h4>
                      <p className="text-sm text-muted-foreground">
                        Use simple, direct language. Avoid unnecessary jargon or complex sentence structures.
                      </p>
                      <div className="mt-2 p-2 bg-white rounded text-sm">
                        <strong>Good:</strong> "Add 10ml of solution to the beaker."
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium mb-2">Use Active Voice</h4>
                      <p className="text-sm text-muted-foreground">
                        Active voice makes instructions clearer and more engaging.
                      </p>
                      <div className="mt-2 p-2 bg-white rounded text-sm">
                        <strong>Good:</strong> "Heat the mixture to 80°C."
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium mb-2">Be Specific</h4>
                      <p className="text-sm text-muted-foreground">
                        Provide exact measurements, times, and conditions.
                      </p>
                      <div className="mt-2 p-2 bg-white rounded text-sm">
                        <strong>Good:</strong> "Wait 5 minutes for the reaction to complete."
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600">✗ Don't</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-medium mb-2">Use Vague Language</h4>
                      <p className="text-sm text-muted-foreground">
                        Avoid ambiguous terms that could lead to confusion.
                      </p>
                      <div className="mt-2 p-2 bg-white rounded text-sm">
                        <strong>Bad:</strong> "Add some solution until it looks right."
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-medium mb-2">Use Passive Voice</h4>
                      <p className="text-sm text-muted-foreground">
                        Passive voice can make instructions unclear about who does what.
                      </p>
                      <div className="mt-2 p-2 bg-white rounded text-sm">
                        <strong>Bad:</strong> "The mixture should be heated to 80°C."
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <h4 className="font-medium mb-2">Assume Knowledge</h4>
                      <p className="text-sm text-muted-foreground">
                        Don't assume users know complex procedures without explanation.
                      </p>
                      <div className="mt-2 p-2 bg-white rounded text-sm">
                        <strong>Bad:</strong> "Perform standard titration procedure."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tone and Voice</CardTitle>
              <CardDescription>Establishing the right tone for educational content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Professional</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Maintain scientific accuracy and credibility while being approachable.
                  </p>
                  <Badge variant="outline">Authoritative yet friendly</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Encouraging</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Support learning with positive, constructive language.
                  </p>
                  <Badge variant="outline">Supportive and motivating</Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Inclusive</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use language that welcomes all learners regardless of background.
                  </p>
                  <Badge variant="outline">Accessible to all</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terminology" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scientific Terminology Standards</CardTitle>
              <CardDescription>Consistent use of scientific terms and definitions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Chemistry Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Molarity</div>
                      <div className="text-sm text-muted-foreground">
                        Always use "M" as the unit symbol. Define as "moles of solute per liter of solution."
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">pH</div>
                      <div className="text-sm text-muted-foreground">
                        Always lowercase "p", uppercase "H". Define as "measure of hydrogen ion concentration."
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Titration</div>
                      <div className="text-sm text-muted-foreground">
                        Define as "analytical technique to determine concentration of an unknown solution."
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Equivalence Point</div>
                      <div className="text-sm text-muted-foreground">
                        "Point where moles of titrant equal moles of analyte." Distinguish from endpoint.
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Buffer</div>
                      <div className="text-sm text-muted-foreground">
                        "Solution that resists changes in pH when small amounts of acid or base are added."
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Catalyst</div>
                      <div className="text-sm text-muted-foreground">
                        "Substance that increases reaction rate without being consumed in the reaction."
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Physics Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Force</div>
                      <div className="text-sm text-muted-foreground">
                        Use "N" for Newtons. Define as "push or pull that can change an object's motion."
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Acceleration</div>
                      <div className="text-sm text-muted-foreground">
                        Use "m/s²" for units. Define as "rate of change of velocity."
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Energy</div>
                      <div className="text-sm text-muted-foreground">
                        Use "J" for Joules. Define as "capacity to do work or cause change."
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium">Wavelength</div>
                      <div className="text-sm text-muted-foreground">
                        Use "λ" (lambda) symbol. Define as "distance between consecutive wave peaks."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Abbreviations and Symbols</CardTitle>
              <CardDescription>Standard abbreviations and when to use them</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-3">Always Spell Out</h4>
                  <div className="space-y-2 text-sm">
                    <div>First use of technical terms</div>
                    <div>In headings and titles</div>
                    <div>When clarity is essential</div>
                    <div>For accessibility</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Acceptable Abbreviations</h4>
                  <div className="space-y-2 text-sm">
                    <div>Standard SI units (m, kg, s)</div>
                    <div>Common chemical symbols (H₂O, NaCl)</div>
                    <div>Established scientific terms (DNA, RNA)</div>
                    <div>After first definition</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Avoid Abbreviating</h4>
                  <div className="space-y-2 text-sm">
                    <div>Equipment names</div>
                    <div>Safety procedures</div>
                    <div>Critical instructions</div>
                    <div>Error messages</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Instruction Writing</span>
              </CardTitle>
              <CardDescription>Guidelines for writing clear, actionable instructions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Structure</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">1. Start with Action Verb</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Begin each instruction with a clear action word.
                      </p>
                      <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                        "Click the Start button to begin the experiment."
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">2. One Action Per Step</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Break complex procedures into individual steps.
                      </p>
                      <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                        "1. Measure 50ml of water
                        <br />
                        2. Add to the beaker
                        <br />
                        3. Record the volume"
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">3. Include Expected Results</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tell users what should happen after each action.
                      </p>
                      <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                        "Heat the solution. The color should change to blue."
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Formatting</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Numbered Lists</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use for sequential procedures that must be followed in order.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Bullet Points</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use for lists where order doesn't matter or for features.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Bold for UI Elements</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Make buttons, menus, and interface elements stand out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Safety Instructions</CardTitle>
              <CardDescription>Special considerations for safety-related content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800 mb-2">Critical Safety Information</h4>
                      <div className="space-y-2 text-sm text-red-700">
                        <div>• Always place safety warnings before procedures</div>
                        <div>• Use clear, direct language for hazards</div>
                        <div>• Include specific consequences of unsafe actions</div>
                        <div>• Provide emergency procedures</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">Warning Language</h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <strong>DANGER:</strong> Immediate hazard, death/serious injury
                      </div>
                      <div>
                        <strong>WARNING:</strong> Could result in death/serious injury
                      </div>
                      <div>
                        <strong>CAUTION:</strong> Could result in minor injury
                      </div>
                      <div>
                        <strong>NOTICE:</strong> Property damage possible
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">Safety Reminders</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Wear appropriate PPE</div>
                      <div>• Work in well-ventilated areas</div>
                      <div>• Keep emergency contacts accessible</div>
                      <div>• Know location of safety equipment</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>User Feedback Messages</span>
              </CardTitle>
              <CardDescription>Guidelines for providing helpful feedback to users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-green-600">Success Messages</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-sm">Experiment Completed</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Great work! You've successfully completed the titration. Your results show excellent precision.
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-sm">Measurement Recorded</span>
                      </div>
                      <p className="text-sm text-green-700">
                        Data saved successfully. pH value of 7.2 recorded at 14:35.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-red-600">Error Messages</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <span className="font-medium text-sm">Temperature Too High</span>
                      </div>
                      <p className="text-sm text-red-700">
                        Current temperature (95°C) exceeds safe limit. Reduce heat to continue safely.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <span className="font-medium text-sm">Invalid Measurement</span>
                      </div>
                      <p className="text-sm text-red-700">
                        Please enter a value between 0-14 for pH. Current value (15.2) is outside valid range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Feedback Principles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Be Specific</h4>
                    <p className="text-sm text-muted-foreground">
                      Explain exactly what happened and why, not just that something went wrong.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Provide Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Always include next steps or how to fix the issue when possible.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Use Positive Language</h4>
                    <p className="text-sm text-muted-foreground">
                      Frame feedback constructively, focusing on learning opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="localization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Localization Guidelines</span>
              </CardTitle>
              <CardDescription>Preparing content for international audiences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Text Considerations</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Allow for Text Expansion</h4>
                      <p className="text-sm text-muted-foreground">
                        Some languages require 30-50% more space than English.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Avoid Cultural References</h4>
                      <p className="text-sm text-muted-foreground">
                        Use universal examples and avoid region-specific idioms.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Use Simple Sentence Structure</h4>
                      <p className="text-sm text-muted-foreground">
                        Complex grammar can be difficult to translate accurately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Technical Considerations</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Number Formats</h4>
                      <p className="text-sm text-muted-foreground">
                        Consider different decimal separators (. vs ,) and digit grouping.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Date and Time</h4>
                      <p className="text-sm text-muted-foreground">
                        Use ISO 8601 format or allow for local preferences.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Units of Measurement</h4>
                      <p className="text-sm text-muted-foreground">
                        Provide both metric and imperial units where relevant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Scientific Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Universal Standards</h4>
                    <div className="space-y-1 text-sm">
                      <div>• SI units (meters, kilograms, seconds)</div>
                      <div>• Chemical symbols (H₂O, NaCl)</div>
                      <div>• Mathematical notation</div>
                      <div>• Scientific constants</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Regional Variations</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Temperature scales (°C vs °F)</div>
                      <div>• Pressure units (atm, bar, psi)</div>
                      <div>• Volume measurements (L vs gal)</div>
                      <div>• Educational terminology</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>Content Examples</span>
              </CardTitle>
              <CardDescription>Real examples of well-written laboratory content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Experiment Introduction</h3>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-2">Acid-Base Titration</h4>
                    <p className="text-sm mb-3">
                      In this experiment, you'll determine the concentration of an unknown acid solution using a
                      standard base solution. This technique is fundamental in analytical chemistry and quality control.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Objective:</strong> Calculate the molarity of an unknown HCl solution
                      </div>
                      <div>
                        <strong>Time Required:</strong> 45 minutes
                      </div>
                      <div>
                        <strong>Safety Level:</strong> Moderate - requires eye protection and gloves
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Step-by-Step Procedure</h3>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-medium mb-3">Preparing the Titration Setup</h4>
                    <ol className="space-y-2 text-sm">
                      <li>
                        <strong>1.</strong> Rinse the burette with distilled water, then with a small amount of 0.1 M
                        NaOH solution.
                      </li>
                      <li>
                        <strong>2.</strong> Fill the burette with 0.1 M NaOH solution to above the 0.00 mL mark.
                      </li>
                      <li>
                        <strong>3.</strong> Remove air bubbles by opening the stopcock briefly. Record the initial
                        volume to the nearest 0.01 mL.
                      </li>
                      <li>
                        <strong>4.</strong> Pipette 25.0 mL of unknown HCl solution into a clean conical flask.
                      </li>
                      <li>
                        <strong>5.</strong> Add 2-3 drops of phenolphthalein indicator. The solution should remain
                        colorless.
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Error Messages</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="font-medium text-red-800 mb-1">Equipment Error</div>
                      <p className="text-sm text-red-700">
                        The pH meter is not calibrated. Please calibrate using buffer solutions (pH 4.0, 7.0, and 10.0)
                        before continuing.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="font-medium text-yellow-800 mb-1">Measurement Warning</div>
                      <p className="text-sm text-yellow-700">
                        Your titration volume (45.2 mL) is unusually high. Check your calculations and consider
                        repeating the titration.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Success Feedback</h3>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium text-green-800">Excellent Results!</span>
                    </div>
                    <p className="text-sm text-green-700 mb-3">
                      Your calculated concentration of 0.098 M is within 2% of the expected value. This demonstrates
                      excellent technique and precision.
                    </p>
                    <div className="text-sm text-green-600">
                      <div>• Average titre: 24.85 mL</div>
                      <div>• Standard deviation: 0.12 mL</div>
                      <div>• Relative error: 1.8%</div>
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
