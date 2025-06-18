"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  MessageCircle,
  Share2,
  Video,
  Mic,
  Settings,
  UserPlus,
  Clock,
  CheckCircle,
  AlertCircle,
  Beaker,
  FileText,
  Database,
  Camera,
  Upload,
  Monitor,
  X,
  Download,
} from "lucide-react"

const collaborators = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Researcher",
    status: "online",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  { id: 2, name: "Bob Smith", role: "Lab Assistant", status: "online", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Carol Davis", role: "Student", status: "away", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "David Wilson", role: "Student", status: "offline", avatar: "/placeholder.svg?height=32&width=32" },
]

const chatMessages = [
  { id: 1, user: "Alice Johnson", message: "Starting the titration experiment now", time: "14:30", type: "message" },
  { id: 2, user: "Bob Smith", message: "pH readings look good so far", time: "14:32", type: "message" },
  { id: 3, user: "System", message: "Temperature alert: 85°C detected", time: "14:33", type: "alert" },
  { id: 4, user: "Carol Davis", message: "Should we adjust the heating?", time: "14:34", type: "message" },
  { id: 5, user: "Alice Johnson", message: "Yes, reducing to 75°C", time: "14:35", type: "message" },
]

export default function CollaborativeLabPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Collaborative Lab Patterns</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Multi-user collaboration interfaces for shared virtual laboratory experiences and remote learning.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="participants">Participants</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="sharing">Sharing</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="session">Session</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Collaboration Session</CardTitle>
              <CardDescription>Chemistry Lab - Acid-Base Titration Experiment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Active Participants</span>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-muted-foreground">2 online, 1 away, 1 offline</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Session Duration</span>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">45:32</div>
                  <div className="text-sm text-muted-foreground">Started at 14:00</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Shared Resources</span>
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-muted-foreground">Files, data, and notes</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Shared Experiment Workspace</CardTitle>
                  <CardDescription>Real-time collaborative experiment interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Beaker className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                      <div className="text-lg font-medium">Virtual Lab Interface</div>
                      <div className="text-sm text-muted-foreground">Shared experiment in progress</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Experiment Active</Badge>
                      <span className="text-sm text-muted-foreground">Step 3 of 5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share Screen
                      </Button>
                      <Button size="sm">Take Control</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Participants</CardTitle>
                  <CardDescription>Current session members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {collaborators.map((user) => (
                      <div key={user.id} className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                              user.status === "online"
                                ? "bg-green-500"
                                : user.status === "away"
                                  ? "bg-yellow-500"
                                  : "bg-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.role}</div>
                        </div>
                        {user.status === "online" && (
                          <Badge variant="outline" className="text-xs">
                            Active
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <Button size="sm" className="w-full mt-4">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite Others
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="participants" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Participant Management</CardTitle>
              <CardDescription>Manage users in the collaborative session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collaborators.map((user) => (
                  <Card key={user.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                              user.status === "online"
                                ? "bg-green-500"
                                : user.status === "away"
                                  ? "bg-yellow-500"
                                  : "bg-gray-400"
                            }`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.role}</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Status</span>
                          <Badge variant={user.status === "online" ? "default" : "secondary"} className="capitalize">
                            {user.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Permissions</span>
                          <span className="text-muted-foreground">
                            {user.role === "Lead Researcher" ? "Full Access" : "Limited"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Join Time</span>
                          <span className="text-muted-foreground">14:00</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Invite New Participants</h3>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Enter email address" className="flex-1" />
                  <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Send Invite
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Invited users will receive an email with a link to join this session.
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Team Chat</span>
                  </CardTitle>
                  <CardDescription>Real-time communication during experiments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 h-80 overflow-y-auto mb-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex items-start space-x-3 ${
                          msg.type === "alert" ? "bg-yellow-50 p-2 rounded-lg" : ""
                        }`}
                      >
                        {msg.type === "alert" ? (
                          <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        ) : (
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {msg.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{msg.user}</span>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <div className="text-sm mt-1">{msg.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Type your message..." className="flex-1" />
                    <Button size="sm">Send</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Video className="h-5 w-5" />
                    <span>Video Call</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Video className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-sm">Video call active</div>
                      <div className="text-xs text-gray-300">3 participants</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive">
                      End Call
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Voice Notes</CardTitle>
                  <CardDescription>Quick audio messages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">AJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">Alice Johnson</div>
                      <div className="text-xs text-muted-foreground">0:45</div>
                    </div>
                    <Button size="sm" variant="ghost">
                      ▶
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs">BS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-sm">Bob Smith</div>
                      <div className="text-xs text-muted-foreground">0:23</div>
                    </div>
                    <Button size="sm" variant="ghost">
                      ▶
                    </Button>
                  </div>
                  <Button size="sm" className="w-full">
                    <Mic className="h-4 w-4 mr-2" />
                    Record Note
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sharing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Share2 className="h-5 w-5" />
                <span>Resource Sharing</span>
              </CardTitle>
              <CardDescription>Share files, data, and experiment results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Shared Files</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">Experiment Protocol.pdf</div>
                          <div className="text-xs text-muted-foreground">Shared by Alice Johnson</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Database className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="text-sm font-medium">Measurement Data.csv</div>
                          <div className="text-xs text-muted-foreground">Shared by Bob Smith</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Camera className="h-5 w-5 text-purple-500" />
                        <div>
                          <div className="text-sm font-medium">Lab Photos.zip</div>
                          <div className="text-xs text-muted-foreground">Shared by Carol Davis</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Share New File
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Live Data Sharing</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Temperature Sensor</span>
                        <Badge className="bg-green-100 text-green-800">Live</Badge>
                      </div>
                      <div className="text-lg font-bold">25.3°C</div>
                      <div className="text-xs text-muted-foreground">Updated 2 seconds ago</div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">pH Meter</span>
                        <Badge className="bg-green-100 text-green-800">Live</Badge>
                      </div>
                      <div className="text-lg font-bold">6.8</div>
                      <div className="text-xs text-muted-foreground">Updated 1 second ago</div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Pressure Gauge</span>
                        <Badge variant="secondary">Paused</Badge>
                      </div>
                      <div className="text-lg font-bold">1.01 atm</div>
                      <div className="text-xs text-muted-foreground">Last update: 5 min ago</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Screen Sharing</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm font-medium">Alice Johnson is sharing their screen</div>
                      <div className="text-xs text-muted-foreground">Virtual Lab Interface - Chemistry Experiment</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      Request Control
                    </Button>
                    <Button size="sm">View Fullscreen</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Access Control & Permissions</CardTitle>
              <CardDescription>Manage user roles and access levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Lead Researcher</CardTitle>
                    <CardDescription>Full administrative access</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Control all equipment</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Modify experiment parameters</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Manage participants</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Export all data</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Lab Assistant</CardTitle>
                    <CardDescription>Supervised access with monitoring</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Control assigned equipment</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Record measurements</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span>Limited parameter changes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <X className="h-4 w-4 text-red-500" />
                      <span>Cannot manage participants</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Student</CardTitle>
                    <CardDescription>Guided learning access</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>View experiment progress</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Take notes and observations</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span>Request equipment control</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <X className="h-4 w-4 text-red-500" />
                      <span>Cannot modify parameters</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Permission Management</h3>
                <div className="space-y-3">
                  {collaborators.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select className="text-sm border rounded px-2 py-1">
                          <option value="full">Full Access</option>
                          <option value="limited">Limited Access</option>
                          <option value="view">View Only</option>
                        </select>
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="session" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Session Management</CardTitle>
              <CardDescription>Control and monitor the collaborative session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Session Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Session ID</span>
                      <span className="text-sm font-mono">LAB-2024-001</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Started</span>
                      <span className="text-sm">14:00 (45 min ago)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Experiment</span>
                      <span className="text-sm">Acid-Base Titration</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Recording</span>
                      <Badge className="bg-red-100 text-red-800">Active</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Session Controls</h3>
                  <div className="space-y-2">
                    <Button className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Session Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Session Link
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Session Data
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      End Session
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Session Activity Log</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  <div className="flex items-center space-x-3 text-sm p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">14:45</span>
                    <span>Alice Johnson started screen sharing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">14:42</span>
                    <span>Bob Smith uploaded measurement data</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">14:38</span>
                    <span>Carol Davis joined the session</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">14:35</span>
                    <span>Temperature alert triggered</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm p-2 bg-gray-50 rounded">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">14:30</span>
                    <span>Experiment phase 3 started</span>
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
