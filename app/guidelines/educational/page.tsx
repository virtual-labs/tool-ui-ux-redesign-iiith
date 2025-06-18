"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, BookOpen, Users, Target, Lightbulb, TrendingUp } from "lucide-react"

export default function EducationalGuidelinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Educational Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Pedagogical principles and best practices for designing effective virtual laboratory learning experiences.
        </p>
      </div>

      <Tabs defaultValue="pedagogy" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="pedagogy">Pedagogy</TabsTrigger>
          <TabsTrigger value="learning">Learning Design</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="accessibility">Learning Access</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
        </TabsList>

        <TabsContent value="pedagogy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Pedagogical Foundations</span>
              </CardTitle>
              <CardDescription>Core educational theories and principles for virtual laboratory design</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Constructivist Learning</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Active Knowledge Construction</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Students build understanding through hands-on experimentation and discovery
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Provide manipulable virtual equipment</div>
                        <div>• Allow hypothesis testing</div>
                        <div>• Enable trial-and-error learning</div>
                        <div>• Support multiple solution paths</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Prior Knowledge Integration</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Connect new concepts to existing student knowledge
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Pre-lab knowledge checks</div>
                        <div>• Conceptual bridges</div>
                        <div>• Real-world connections</div>
                        <div>• Progressive complexity</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Experiential Learning</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Kolb's Learning Cycle</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                            1
                          </div>
                          <span>
                            <strong>Concrete Experience:</strong> Virtual lab activities
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                            2
                          </div>
                          <span>
                            <strong>Reflective Observation:</strong> Data analysis
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">
                            3
                          </div>
                          <span>
                            <strong>Abstract Conceptualization:</strong> Theory connection
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                            4
                          </div>
                          <span>
                            <strong>Active Experimentation:</strong> Apply learning
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Reflection Integration</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Built-in reflection prompts</div>
                        <div>• Lab journal features</div>
                        <div>• Peer discussion forums</div>
                        <div>• Self-assessment tools</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Cognitive Load Theory</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Intrinsic Load</h4>
                    <p className="text-sm text-muted-foreground mb-3">Essential complexity of the learning material</p>
                    <div className="space-y-1 text-sm">
                      <div>• Break complex procedures into steps</div>
                      <div>• Sequence from simple to complex</div>
                      <div>• Provide prerequisite knowledge</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Extraneous Load</h4>
                    <p className="text-sm text-muted-foreground mb-3">Unnecessary cognitive burden from poor design</p>
                    <div className="space-y-1 text-sm">
                      <div>• Minimize interface complexity</div>
                      <div>• Remove irrelevant information</div>
                      <div>• Use consistent navigation</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Germane Load</h4>
                    <p className="text-sm text-muted-foreground mb-3">Processing that contributes to learning</p>
                    <div className="space-y-1 text-sm">
                      <div>• Encourage schema construction</div>
                      <div>• Provide worked examples</div>
                      <div>• Support pattern recognition</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium mb-3">Laboratory-Specific Pedagogical Considerations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Scientific Method:</div>
                    <div>• Hypothesis formation support</div>
                    <div>• Variable identification tools</div>
                    <div>• Data collection guidance</div>
                    <div>• Conclusion drawing scaffolds</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Safety Learning:</div>
                    <div>• Consequence visualization</div>
                    <div>• Risk assessment practice</div>
                    <div>• Emergency procedure training</div>
                    <div>• Safety habit formation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Learning Experience Design</span>
              </CardTitle>
              <CardDescription>Structuring virtual laboratory experiences for optimal learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Learning Objectives Framework</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <h4 className="font-medium mb-3">Bloom's Taxonomy for Laboratory Learning</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="p-3 bg-red-100 border border-red-200 rounded">
                          <div className="font-medium text-sm text-red-800">Remember</div>
                          <div className="text-sm text-red-700">Recall safety procedures, equipment names</div>
                        </div>
                        <div className="p-3 bg-orange-100 border border-orange-200 rounded">
                          <div className="font-medium text-sm text-orange-800">Understand</div>
                          <div className="text-sm text-orange-700">Explain scientific principles, interpret data</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-yellow-100 border border-yellow-200 rounded">
                          <div className="font-medium text-sm text-yellow-800">Apply</div>
                          <div className="text-sm text-yellow-700">Use equipment, follow procedures</div>
                        </div>
                        <div className="p-3 bg-green-100 border border-green-200 rounded">
                          <div className="font-medium text-sm text-green-800">Analyze</div>
                          <div className="text-sm text-green-700">Compare results, identify patterns</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-100 border border-blue-200 rounded">
                          <div className="font-medium text-sm text-blue-800">Evaluate</div>
                          <div className="text-sm text-blue-700">Assess data quality, critique methods</div>
                        </div>
                        <div className="p-3 bg-purple-100 border border-purple-200 rounded">
                          <div className="font-medium text-sm text-purple-800">Create</div>
                          <div className="text-sm text-purple-700">Design experiments, propose solutions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Scaffolding Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Procedural Scaffolding</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Guided Practice</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Step-by-step tutorials</div>
                          <div>• Interactive demonstrations</div>
                          <div>• Worked examples</div>
                          <div>• Practice exercises</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Gradual Release</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Full guidance → Partial → Independent</div>
                          <div>• Adaptive hint systems</div>
                          <div>• Optional support tools</div>
                          <div>• Competency-based progression</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Conceptual Scaffolding</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Knowledge Building</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Concept maps</div>
                          <div>• Visual analogies</div>
                          <div>• Connecting questions</div>
                          <div>• Theory-practice links</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Metacognitive Support</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Reflection prompts</div>
                          <div>• Strategy suggestions</div>
                          <div>• Progress monitoring</div>
                          <div>• Self-regulation tools</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Adaptive Learning Pathways</h3>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium mb-3">Personalization Strategies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-white border rounded">
                        <h5 className="font-medium text-sm mb-2">Learning Style Accommodation</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Visual: Diagrams, animations</div>
                          <div>• Auditory: Narration, sound cues</div>
                          <div>• Kinesthetic: Interactive controls</div>
                          <div>• Reading/Writing: Text instructions</div>
                        </div>
                      </div>
                      <div className="p-3 bg-white border rounded">
                        <h5 className="font-medium text-sm mb-2">Pace Adaptation</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Self-paced progression</div>
                          <div>• Time extension options</div>
                          <div>• Checkpoint saves</div>
                          <div>• Review opportunities</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border rounded">
                        <h5 className="font-medium text-sm mb-2">Difficulty Adjustment</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Performance-based branching</div>
                          <div>• Additional practice for struggling learners</div>
                          <div>• Advanced challenges for quick learners</div>
                          <div>• Remediation pathways</div>
                        </div>
                      </div>
                      <div className="p-3 bg-white border rounded">
                        <h5 className="font-medium text-sm mb-2">Interest-Based Content</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Career-relevant examples</div>
                          <div>• Current event connections</div>
                          <div>• Student choice in topics</div>
                          <div>• Personal relevance emphasis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Assessment Design</span>
              </CardTitle>
              <CardDescription>Comprehensive assessment strategies for virtual laboratory learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Formative Assessment</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Real-time Feedback</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Immediate feedback during laboratory activities
                      </p>
                      <div className="space-y-1 text-sm">
                        <div>• Instant result validation</div>
                        <div>• Error correction guidance</div>
                        <div>• Progress indicators</div>
                        <div>• Hint systems</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Knowledge Checks</h4>
                      <p className="text-sm text-muted-foreground mb-2">Embedded questions throughout the experience</p>
                      <div className="space-y-1 text-sm">
                        <div>• Pre-lab readiness quizzes</div>
                        <div>• Mid-activity comprehension checks</div>
                        <div>• Prediction exercises</div>
                        <div>• Reflection questions</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Peer Assessment</h4>
                      <p className="text-sm text-muted-foreground mb-2">Collaborative evaluation and feedback</p>
                      <div className="space-y-1 text-sm">
                        <div>• Peer review of lab reports</div>
                        <div>• Group problem-solving</div>
                        <div>• Discussion forum participation</div>
                        <div>• Collaborative data analysis</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Summative Assessment</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Performance-Based</h4>
                      <p className="text-sm text-muted-foreground mb-2">Authentic tasks demonstrating competency</p>
                      <div className="space-y-1 text-sm">
                        <div>• Complete experiment execution</div>
                        <div>• Data analysis projects</div>
                        <div>• Lab report writing</div>
                        <div>• Problem-solving scenarios</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Portfolio Assessment</h4>
                      <p className="text-sm text-muted-foreground mb-2">Collection of work showing growth over time</p>
                      <div className="space-y-1 text-sm">
                        <div>• Lab journal entries</div>
                        <div>• Experiment designs</div>
                        <div>• Reflection essays</div>
                        <div>• Skill demonstration videos</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Adaptive Testing</h4>
                      <p className="text-sm text-muted-foreground mb-2">Computer-adaptive assessments</p>
                      <div className="space-y-1 text-sm">
                        <div>• Difficulty adjustment based on responses</div>
                        <div>• Efficient competency measurement</div>
                        <div>• Reduced test anxiety</div>
                        <div>• Personalized question selection</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Assessment Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Learning Analytics</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Time-on-task analysis</div>
                      <div>• Error pattern identification</div>
                      <div>• Learning pathway tracking</div>
                      <div>• Engagement metrics</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Predictive Modeling</h4>
                    <div className="space-y-2 text-sm">
                      <div>• At-risk student identification</div>
                      <div>• Performance prediction</div>
                      <div>• Intervention recommendations</div>
                      <div>• Success probability scoring</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Competency Mapping</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Skill mastery tracking</div>
                      <div>• Learning objective alignment</div>
                      <div>• Gap analysis</div>
                      <div>• Prerequisite validation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-medium mb-3">Laboratory-Specific Assessment Considerations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Safety Assessment:</div>
                    <div>• Safety protocol adherence</div>
                    <div>• Risk identification skills</div>
                    <div>• Emergency response knowledge</div>
                    <div>• Equipment handling competency</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Scientific Skills:</div>
                    <div>• Hypothesis formation</div>
                    <div>• Experimental design</div>
                    <div>• Data interpretation</div>
                    <div>• Scientific communication</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>Student Engagement</span>
              </CardTitle>
              <CardDescription>Strategies for maintaining motivation and active participation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Motivation Strategies</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Intrinsic Motivation</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Autonomy:</strong> Choice in experiments, self-paced learning
                        </div>
                        <div>
                          <strong>Mastery:</strong> Clear progression, skill building
                        </div>
                        <div>
                          <strong>Purpose:</strong> Real-world relevance, meaningful tasks
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Curiosity and Wonder</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Surprising experimental results</div>
                        <div>• Mystery scenarios to solve</div>
                        <div>• "What if" exploration tools</div>
                        <div>• Counter-intuitive demonstrations</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Social Connection</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Collaborative experiments</div>
                        <div>• Peer discussion forums</div>
                        <div>• Group problem-solving</div>
                        <div>• Shared discovery experiences</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Gamification Elements</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Achievement Systems</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Skill badges and certifications</div>
                        <div>• Progress tracking visualizations</div>
                        <div>• Milestone celebrations</div>
                        <div>• Competency levels</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Challenge and Competition</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Leaderboards (optional)</div>
                        <div>• Time-based challenges</div>
                        <div>• Accuracy competitions</div>
                        <div>• Team-based contests</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Narrative Elements</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Scientific storylines</div>
                        <div>• Character-based scenarios</div>
                        <div>• Mission-based learning</div>
                        <div>• Progressive plot development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Interactive Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Simulation Controls</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Variable manipulation</div>
                      <div>• Parameter adjustment</div>
                      <div>• Time control (pause, rewind)</div>
                      <div>• Multiple viewing angles</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Data Exploration</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Interactive graphs</div>
                      <div>• Data filtering tools</div>
                      <div>• Comparison features</div>
                      <div>• Export capabilities</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Collaboration Tools</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Shared workspaces</div>
                      <div>• Real-time collaboration</div>
                      <div>• Annotation systems</div>
                      <div>• Communication channels</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium mb-3">Engagement Monitoring</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Behavioral Indicators:</div>
                    <div>• Time spent on activities</div>
                    <div>• Interaction frequency</div>
                    <div>• Feature usage patterns</div>
                    <div>• Return visit frequency</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Emotional Indicators:</div>
                    <div>• Self-reported satisfaction</div>
                    <div>• Frustration detection</div>
                    <div>• Help-seeking behavior</div>
                    <div>• Completion rates</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Learning Accessibility</span>
              </CardTitle>
              <CardDescription>Ensuring equitable access to virtual laboratory learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Universal Design for Learning</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Multiple Means of Representation</h4>
                      <p className="text-sm text-muted-foreground mb-2">Present information in various formats</p>
                      <div className="space-y-1 text-sm">
                        <div>• Visual, auditory, and textual content</div>
                        <div>• Multiple languages support</div>
                        <div>• Adjustable display options</div>
                        <div>• Alternative format downloads</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Multiple Means of Engagement</h4>
                      <p className="text-sm text-muted-foreground mb-2">Provide various ways to motivate learners</p>
                      <div className="space-y-1 text-sm">
                        <div>• Choice in topics and tools</div>
                        <div>• Cultural relevance options</div>
                        <div>• Difficulty level adjustments</div>
                        <div>• Interest-based pathways</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Multiple Means of Action/Expression</h4>
                      <p className="text-sm text-muted-foreground mb-2">Offer various ways to demonstrate learning</p>
                      <div className="space-y-1 text-sm">
                        <div>• Multiple assessment formats</div>
                        <div>• Alternative input methods</div>
                        <div>• Flexible submission options</div>
                        <div>• Assistive technology support</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Specific Learning Needs</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Learning Disabilities</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Dyslexia:</strong> Text-to-speech, font options
                        </div>
                        <div>
                          <strong>ADHD:</strong> Focus aids, break reminders
                        </div>
                        <div>
                          <strong>Dyscalculia:</strong> Calculator tools, visual math
                        </div>
                        <div>
                          <strong>Processing:</strong> Extended time, simplified language
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Physical Disabilities</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Motor:</strong> Alternative input methods
                        </div>
                        <div>
                          <strong>Visual:</strong> Screen reader compatibility
                        </div>
                        <div>
                          <strong>Hearing:</strong> Visual alerts, captions
                        </div>
                        <div>
                          <strong>Cognitive:</strong> Memory aids, simplified navigation
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Language Barriers</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Multilingual interface options</div>
                        <div>• Translation tools integration</div>
                        <div>• Visual instruction emphasis</div>
                        <div>• Simplified language modes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Technology Access Considerations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Device Compatibility</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Mobile-responsive design</div>
                      <div>• Low-bandwidth options</div>
                      <div>• Offline capabilities</div>
                      <div>• Cross-platform support</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Internet Connectivity</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Progressive loading</div>
                      <div>• Downloadable content</div>
                      <div>• Sync when connected</div>
                      <div>• Reduced data usage modes</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Hardware Requirements</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Minimum system specifications</div>
                      <div>• Alternative hardware options</div>
                      <div>• Cloud-based processing</div>
                      <div>• Equipment lending programs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium mb-3">Inclusive Design Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Multiple content formats available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Keyboard navigation support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Screen reader compatibility</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Adjustable text size and contrast</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Captions for audio content</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Alternative assessment options</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Flexible time limits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Multiple language support</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outcomes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Learning Outcomes</span>
              </CardTitle>
              <CardDescription>Measuring and improving educational effectiveness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Learning Outcome Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Cognitive Outcomes</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Knowledge Acquisition</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Factual knowledge retention</div>
                          <div>• Conceptual understanding</div>
                          <div>• Procedural knowledge</div>
                          <div>• Metacognitive awareness</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Critical Thinking</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Problem-solving skills</div>
                          <div>• Analytical reasoning</div>
                          <div>• Hypothesis formation</div>
                          <div>• Evidence evaluation</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Practical Outcomes</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Technical Skills</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Equipment operation</div>
                          <div>• Data collection techniques</div>
                          <div>• Safety procedures</div>
                          <div>• Quality control methods</div>
                        </div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Professional Skills</h5>
                        <div className="space-y-1 text-sm">
                          <div>• Scientific communication</div>
                          <div>• Collaboration abilities</div>
                          <div>• Ethical reasoning</div>
                          <div>• Continuous learning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Measurement Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Pre/Post Assessment</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Knowledge tests</div>
                      <div>• Skill demonstrations</div>
                      <div>• Attitude surveys</div>
                      <div>• Confidence measures</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Performance Analytics</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Task completion rates</div>
                      <div>• Error pattern analysis</div>
                      <div>• Time-to-mastery tracking</div>
                      <div>• Learning curve analysis</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Long-term Follow-up</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Knowledge retention tests</div>
                      <div>• Transfer assessments</div>
                      <div>• Career impact surveys</div>
                      <div>• Longitudinal studies</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Effectiveness Metrics</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                      <div className="text-sm text-muted-foreground">Learning Objective Achievement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
                      <div className="text-sm text-muted-foreground">Student Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">78%</div>
                      <div className="text-sm text-muted-foreground">Knowledge Retention (3 months)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">Course Completion Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Continuous Improvement</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Data Collection</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Gather learning analytics, assessment results, and user feedback
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Analysis and Insights</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Identify patterns, gaps, and opportunities for improvement
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Design Iterations</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Implement evidence-based improvements to content and interface
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Validation</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Test changes and measure impact on learning outcomes
                        </div>
                      </div>
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
