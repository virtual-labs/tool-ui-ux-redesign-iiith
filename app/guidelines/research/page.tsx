"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Search, Users, BarChart3, FileText, Target, Eye, CheckCircle } from "lucide-react"

export default function ResearchGuidelinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Research Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Guidelines for conducting user research and usability studies in virtual laboratory environments.
        </p>
      </div>

      <Tabs defaultValue="methodology" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="planning">Planning</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
        </TabsList>

        <TabsContent value="methodology" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Research Methodologies</span>
              </CardTitle>
              <CardDescription>Different approaches to studying virtual laboratory interfaces</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Quantitative Methods</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Usability Testing</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Measure task completion rates, error rates, and time-on-task
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Task success rates</div>
                        <div>• Time to completion</div>
                        <div>• Error frequency</div>
                        <div>• Learning curve analysis</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">A/B Testing</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Compare different interface designs or features
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Interface variations</div>
                        <div>• Feature comparisons</div>
                        <div>• Conversion metrics</div>
                        <div>• Statistical significance</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Analytics</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Track user behavior and system usage patterns
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• User flow analysis</div>
                        <div>• Feature usage statistics</div>
                        <div>• Session duration</div>
                        <div>• Drop-off points</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Qualitative Methods</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">User Interviews</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        In-depth conversations about user needs and experiences
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Semi-structured interviews</div>
                        <div>• User journey mapping</div>
                        <div>• Pain point identification</div>
                        <div>• Feature prioritization</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Think-Aloud Protocol</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Users verbalize their thoughts while using the system
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Cognitive processes</div>
                        <div>• Decision-making patterns</div>
                        <div>• Confusion points</div>
                        <div>• Mental models</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Contextual Inquiry</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Observe users in their natural learning environment
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Natural behavior observation</div>
                        <div>• Environmental factors</div>
                        <div>• Workflow integration</div>
                        <div>• Social interactions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mixed Methods Approach</CardTitle>
              <CardDescription>
                Combining quantitative and qualitative research for comprehensive insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium mb-3">Sequential Explanatory Design</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        1
                      </div>
                      <div className="font-medium text-sm">Quantitative Phase</div>
                      <div className="text-sm text-muted-foreground">Collect numerical data</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        2
                      </div>
                      <div className="font-medium text-sm">Qualitative Phase</div>
                      <div className="text-sm text-muted-foreground">Explain the numbers</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                        3
                      </div>
                      <div className="font-medium text-sm">Integration</div>
                      <div className="text-sm text-muted-foreground">Combine insights</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Benefits</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Comprehensive understanding</div>
                      <div>• Validation of findings</div>
                      <div>• Rich contextual data</div>
                      <div>• Actionable insights</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Considerations</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Increased time and resources</div>
                      <div>• Complex data integration</div>
                      <div>• Researcher skill requirements</div>
                      <div>• Participant burden</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Research Planning</span>
              </CardTitle>
              <CardDescription>Structured approach to planning user research studies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Research Questions Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Exploratory</h4>
                    <p className="text-sm text-muted-foreground mb-3">Understanding user needs and behaviors</p>
                    <div className="space-y-1 text-sm">
                      <div>• "How do students approach..."</div>
                      <div>• "What challenges do users face..."</div>
                      <div>• "Why do instructors prefer..."</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Descriptive</h4>
                    <p className="text-sm text-muted-foreground mb-3">Characterizing current state and patterns</p>
                    <div className="space-y-1 text-sm">
                      <div>• "What is the current usage..."</div>
                      <div>• "How often do users..."</div>
                      <div>• "Which features are most..."</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Causal</h4>
                    <p className="text-sm text-muted-foreground mb-3">Testing relationships and effects</p>
                    <div className="space-y-1 text-sm">
                      <div>• "Does feature X improve..."</div>
                      <div>• "Will changing Y reduce..."</div>
                      <div>• "Can intervention Z increase..."</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Study Design Template</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Research Objectives</h4>
                        <div className="text-sm text-muted-foreground">
                          • Primary research question
                          <br />• Secondary questions
                          <br />• Success metrics
                          <br />• Hypotheses (if applicable)
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Target Participants</h4>
                        <div className="text-sm text-muted-foreground">
                          • User personas
                          <br />• Inclusion criteria
                          <br />• Exclusion criteria
                          <br />• Sample size calculation
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Methodology</h4>
                        <div className="text-sm text-muted-foreground">
                          • Research methods
                          <br />• Data collection tools
                          <br />• Study duration
                          <br />• Location/environment
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Resources</h4>
                        <div className="text-sm text-muted-foreground">
                          • Team members
                          <br />• Equipment needed
                          <br />• Budget requirements
                          <br />• Timeline
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Ethical Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Required Elements</h4>
                    <div className="space-y-2 text-sm text-green-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Informed consent process</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Data privacy protection</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Right to withdraw</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>IRB approval (if required)</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">Special Considerations</h4>
                    <div className="space-y-2 text-sm text-yellow-700">
                      <div>• Student participants (FERPA)</div>
                      <div>• Minor participants (parental consent)</div>
                      <div>• International participants</div>
                      <div>• Sensitive data collection</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recruitment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Participant Recruitment</span>
              </CardTitle>
              <CardDescription>Strategies for recruiting representative participants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Target Audiences</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Students</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Undergraduate:</strong> Intro to advanced courses
                        </div>
                        <div>
                          <strong>Graduate:</strong> Research and specialized labs
                        </div>
                        <div>
                          <strong>Demographics:</strong> Age, major, experience level
                        </div>
                        <div>
                          <strong>Recruitment:</strong> Course announcements, student organizations
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Instructors</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Faculty:</strong> Professors, lecturers
                        </div>
                        <div>
                          <strong>TAs:</strong> Graduate teaching assistants
                        </div>
                        <div>
                          <strong>Demographics:</strong> Teaching experience, tech comfort
                        </div>
                        <div>
                          <strong>Recruitment:</strong> Academic conferences, professional networks
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Lab Technicians</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Staff:</strong> Lab managers, technicians
                        </div>
                        <div>
                          <strong>Experience:</strong> Equipment operation, safety
                        </div>
                        <div>
                          <strong>Demographics:</strong> Years of experience, lab type
                        </div>
                        <div>
                          <strong>Recruitment:</strong> Professional associations, direct contact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Recruitment Strategies</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Academic Channels</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Course announcements</div>
                        <div>• Student research participation systems</div>
                        <div>• Academic department partnerships</div>
                        <div>• Conference presentations</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Online Recruitment</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Social media campaigns</div>
                        <div>• Professional networks (LinkedIn)</div>
                        <div>• Educational forums and communities</div>
                        <div>• Email lists and newsletters</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Incentives</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Course credit (with instructor approval)</div>
                        <div>• Monetary compensation</div>
                        <div>• Gift cards or prizes</div>
                        <div>• Early access to features</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Screening and Selection</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium mb-3">Screening Questionnaire Template</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium mb-2">Demographics:</div>
                      <div>• Age range</div>
                      <div>• Educational level</div>
                      <div>• Field of study/work</div>
                      <div>• Geographic location</div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Experience:</div>
                      <div>• Laboratory experience</div>
                      <div>• Technology comfort level</div>
                      <div>• Virtual lab usage</div>
                      <div>• Specific tool experience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Sample Size Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Qualitative Studies</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>User Interviews:</strong> 5-12 per user group
                      </div>
                      <div>
                        <strong>Usability Testing:</strong> 5-8 participants
                      </div>
                      <div>
                        <strong>Focus Groups:</strong> 6-10 per group, 2-4 groups
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Quantitative Studies</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Surveys:</strong> 100+ for statistical power
                      </div>
                      <div>
                        <strong>A/B Testing:</strong> 50+ per condition
                      </div>
                      <div>
                        <strong>Analytics:</strong> Existing user base
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Mixed Methods</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Sequential:</strong> Quant first, then qual
                      </div>
                      <div>
                        <strong>Concurrent:</strong> Both simultaneously
                      </div>
                      <div>
                        <strong>Sample sizes:</strong> Combine guidelines above
                      </div>
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
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>User Testing</span>
              </CardTitle>
              <CardDescription>Conducting effective user testing sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Testing Environment Setup</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">In-Person Testing</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Equipment Checklist</h5>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Computer/laptop for participant</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Screen recording software</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Audio recording device</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Webcam for facial expressions</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span>Backup recording method</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Room Setup</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Quiet, private space</div>
                          <div>• Comfortable seating</div>
                          <div>• Good lighting</div>
                          <div>• Minimal distractions</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Remote Testing</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Technology Requirements</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Video conferencing platform</div>
                          <div>• Screen sharing capability</div>
                          <div>• Recording permissions</div>
                          <div>• Stable internet connection</div>
                          <div>• Backup communication method</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Preparation</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Tech check before session</div>
                          <div>• Clear instructions sent ahead</div>
                          <div>• Backup moderator available</div>
                          <div>• Time zone coordination</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Session Structure</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Introduction (5-10 minutes)</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Welcome, consent, overview of session, set expectations
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Background Questions (5-10 minutes)</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          User background, experience, current practices
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Tasks (30-45 minutes)</div>
                        <div className="text-sm text-muted-foreground mt-1">Guided tasks with think-aloud protocol</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Post-Task Interview (10-15 minutes)</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Reflection, feedback, suggestions for improvement
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Wrap-up (5 minutes)</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Thank participant, next steps, compensation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Task Design for Laboratory Interfaces</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Realistic Scenarios</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Chemistry Lab:</strong>
                      </div>
                      <div>
                        "You need to prepare a 0.1M NaCl solution. Use the virtual lab to measure and mix the
                        appropriate amounts."
                      </div>
                      <div>
                        <strong>Physics Lab:</strong>
                      </div>
                      <div>
                        "Set up an experiment to measure the acceleration due to gravity using the pendulum apparatus."
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Task Characteristics</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Realistic and relevant</div>
                      <div>• Clear success criteria</div>
                      <div>• Appropriate difficulty level</div>
                      <div>• Multiple solution paths</div>
                      <div>• Observable behaviors</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Data Analysis</span>
              </CardTitle>
              <CardDescription>Methods for analyzing user research data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Quantitative Analysis</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Descriptive Statistics</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Task completion rates</div>
                        <div>• Average time on task</div>
                        <div>• Error frequencies</div>
                        <div>• User satisfaction scores</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Inferential Statistics</h4>
                      <div className="space-y-2 text-sm">
                        <div>• T-tests for group comparisons</div>
                        <div>• ANOVA for multiple groups</div>
                        <div>• Chi-square for categorical data</div>
                        <div>• Correlation analysis</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Usability Metrics</h4>
                      <div className="space-y-2 text-sm">
                        <div>• System Usability Scale (SUS)</div>
                        <div>• Task success rate</div>
                        <div>• Time-based efficiency</div>
                        <div>• Error recovery rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Qualitative Analysis</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Thematic Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Code identification</div>
                        <div>• Pattern recognition</div>
                        <div>• Theme development</div>
                        <div>• Narrative construction</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Content Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Frequency counting</div>
                        <div>• Category development</div>
                        <div>• Sentiment analysis</div>
                        <div>• Keyword extraction</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Behavioral Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div>• User journey mapping</div>
                        <div>• Interaction patterns</div>
                        <div>• Error categorization</div>
                        <div>• Mental model identification</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Analysis Tools and Techniques</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Statistical Software</h4>
                    <div className="space-y-1 text-sm">
                      <div>• R / RStudio</div>
                      <div>• SPSS</div>
                      <div>• Python (pandas, scipy)</div>
                      <div>• Excel for basic analysis</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Qualitative Tools</h4>
                    <div className="space-y-1 text-sm">
                      <div>• NVivo</div>
                      <div>• Atlas.ti</div>
                      <div>• Dedoose</div>
                      <div>• Manual coding sheets</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Visualization</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Tableau</div>
                      <div>• D3.js</div>
                      <div>• ggplot2 (R)</div>
                      <div>• Matplotlib (Python)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-medium mb-3">Laboratory-Specific Analysis Considerations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Learning Outcomes:</div>
                    <div>• Pre/post knowledge assessments</div>
                    <div>• Skill acquisition measures</div>
                    <div>• Conceptual understanding</div>
                    <div>• Transfer to real labs</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Safety Behaviors:</div>
                    <div>• Safety protocol adherence</div>
                    <div>• Risk awareness indicators</div>
                    <div>• Emergency response</div>
                    <div>• Equipment handling</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Research Reporting</span>
              </CardTitle>
              <CardDescription>Communicating research findings effectively</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Report Structure</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Executive Summary</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Key findings overview</div>
                          <div>• Main recommendations</div>
                          <div>• Business impact</div>
                          <div>• Next steps</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Methodology</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Research questions</div>
                          <div>• Study design</div>
                          <div>• Participant details</div>
                          <div>• Data collection methods</div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Findings</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Quantitative results</div>
                          <div>• Qualitative insights</div>
                          <div>• User quotes</div>
                          <div>• Supporting evidence</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Recommendations</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Prioritized actions</div>
                          <div>• Implementation guidance</div>
                          <div>• Resource requirements</div>
                          <div>• Success metrics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Visualization Best Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Quantitative Data</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Charts and Graphs</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Bar charts for comparisons</div>
                          <div>• Line graphs for trends</div>
                          <div>• Scatter plots for correlations</div>
                          <div>• Heat maps for complex data</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Design Principles</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Clear axis labels</div>
                          <div>• Appropriate scale</div>
                          <div>• Color accessibility</div>
                          <div>• Minimal clutter</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Qualitative Data</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Visual Representations</h5>
                        <div className="space-y-1 text-sm">
                          <div>• User journey maps</div>
                          <div>• Affinity diagrams</div>
                          <div>• Persona profiles</div>
                          <div>• Process flows</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Supporting Elements</h5>
                        <div className="space-y-1 text-sm">
                          <div>• User quotes</div>
                          <div>• Screenshots</div>
                          <div>• Video clips</div>
                          <div>• Behavioral examples</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Stakeholder Communication</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Executives</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Focus:</strong> Business impact
                      </div>
                      <div>
                        <strong>Format:</strong> Executive summary
                      </div>
                      <div>
                        <strong>Length:</strong> 1-2 pages
                      </div>
                      <div>
                        <strong>Visuals:</strong> High-level charts
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Product Team</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Focus:</strong> Design implications
                      </div>
                      <div>
                        <strong>Format:</strong> Detailed findings
                      </div>
                      <div>
                        <strong>Length:</strong> 10-20 pages
                      </div>
                      <div>
                        <strong>Visuals:</strong> User flows, wireframes
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Developers</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Focus:</strong> Technical requirements
                      </div>
                      <div>
                        <strong>Format:</strong> User stories
                      </div>
                      <div>
                        <strong>Length:</strong> Varies
                      </div>
                      <div>
                        <strong>Visuals:</strong> Interaction specs
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium mb-3">Research Repository</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Maintain a centralized repository of research findings for future reference and team knowledge
                  sharing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Organization:</div>
                    <div>• Study date and type</div>
                    <div>• Research questions</div>
                    <div>• Key findings</div>
                    <div>• Participant demographics</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Accessibility:</div>
                    <div>• Searchable database</div>
                    <div>• Tagged content</div>
                    <div>• Version control</div>
                    <div>• Team permissions</div>
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
