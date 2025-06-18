"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Home,
  Beaker,
  BarChart3,
  Settings,
  User,
  Search,
  Menu,
  ChevronDown,
  ChevronRight,
  FlaskConical,
  Microscope,
  Calculator,
  BookOpen,
  Copy,
  Check,
} from "lucide-react"

export default function NavigationPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Navigation</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Navigation components designed for Virtual Labs interfaces with clear hierarchy and scientific context.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        <Tabs defaultValue="examples" className="space-y-8">
          <TabsList>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-8">
            {/* Top Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Top Navigation</CardTitle>
                <CardDescription>Primary navigation for lab applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-white">
                  <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <FlaskConical className="h-6 w-6 text-blue-600" />
                        <span className="font-bold text-lg">Virtual Labs</span>
                      </div>
                      <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-sm font-medium text-blue-600">
                          Dashboard
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                          Experiments
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                          Results
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                          Library
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search experiments..." className="pl-10 w-64" />
                      </div>
                      <Button variant="ghost" size="sm">
                        <User className="h-4 w-4" />
                      </Button>
                    </div>
                  </nav>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<nav className="flex items-center justify-between p-4">
  <div className="flex items-center space-x-6">
    <div className="flex items-center space-x-2">
      <FlaskConical className="h-6 w-6 text-blue-600" />
      <span className="font-bold text-lg">Virtual Labs</span>
    </div>
    <div className="hidden md:flex items-center space-x-4">
      <a href="#" className="text-sm font-medium">Dashboard</a>
      <a href="#" className="text-sm font-medium">Experiments</a>
    </div>
  </div>
</nav>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<nav className="flex items-center justify-between p-4">
  <div className="flex items-center space-x-6">
    <div className="flex items-center space-x-2">
      <FlaskConical className="h-6 w-6 text-blue-600" />
      <span className="font-bold text-lg">Virtual Labs</span>
    </div>
    <div className="hidden md:flex items-center space-x-4">
      <a href="#" className="text-sm font-medium">Dashboard</a>
      <a href="#" className="text-sm font-medium">Experiments</a>
    </div>
  </div>
</nav>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Sidebar Navigation</CardTitle>
                <CardDescription>Secondary navigation for lab sections and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="border rounded-lg p-4 bg-white">
                    <nav className="space-y-2">
                      <div className="px-3 py-2 text-sm font-medium text-muted-foreground">EXPERIMENTS</div>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-md"
                      >
                        <Beaker className="mr-3 h-4 w-4" />
                        Chemistry Lab
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                      >
                        <Microscope className="mr-3 h-4 w-4" />
                        Biology Lab
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                      >
                        <Calculator className="mr-3 h-4 w-4" />
                        Physics Lab
                      </a>

                      <div className="px-3 py-2 text-sm font-medium text-muted-foreground mt-4">TOOLS</div>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                      >
                        <BarChart3 className="mr-3 h-4 w-4" />
                        Data Analysis
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                      >
                        <BookOpen className="mr-3 h-4 w-4" />
                        Lab Manual
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                      >
                        <Settings className="mr-3 h-4 w-4" />
                        Settings
                      </a>
                    </nav>
                  </div>

                  <div className="md:col-span-3">
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`<nav className="space-y-2">
  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
    EXPERIMENTS
  </div>
  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-md">
    <Beaker className="mr-3 h-4 w-4" />
    Chemistry Lab
  </a>
  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">
    <Microscope className="mr-3 h-4 w-4" />
    Biology Lab
  </a>
</nav>`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Breadcrumbs */}
            <Card>
              <CardHeader>
                <CardTitle>Breadcrumbs</CardTitle>
                <CardDescription>Show current location in lab hierarchy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-white">
                  <nav className="flex items-center space-x-2 text-sm">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Home
                    </a>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Chemistry Lab
                    </a>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Acid-Base Titration
                    </a>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Experiment Setup</span>
                  </nav>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <a href="#" className="text-blue-600 hover:text-blue-800">Chemistry Lab</a>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <span className="text-muted-foreground">Current Page</span>
</nav>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Tab Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Tab Navigation</CardTitle>
                <CardDescription>Switch between different views or sections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-white">
                  <div className="border-b">
                    <nav className="flex space-x-8">
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "overview"
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                        }`}
                        onClick={() => setActiveTab("overview")}
                      >
                        Overview
                      </button>
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "procedure"
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                        }`}
                        onClick={() => setActiveTab("procedure")}
                      >
                        Procedure
                      </button>
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "results"
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                        }`}
                        onClick={() => setActiveTab("results")}
                      >
                        Results
                      </button>
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "analysis"
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                        }`}
                        onClick={() => setActiveTab("analysis")}
                      >
                        Analysis
                      </button>
                    </nav>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded">
                    <p className="text-sm text-muted-foreground">Content for {activeTab} tab would appear here.</p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<nav className="flex space-x-8 border-b">
  <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
    Overview
  </button>
  <button className="py-2 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm">
    Procedure
  </button>
</nav>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Dropdown Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Navigation</CardTitle>
                <CardDescription>Hierarchical navigation with submenus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-white">
                  <div className="relative inline-block">
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border rounded-md hover:bg-muted">
                      Select Lab
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Chemistry
                        </div>
                        <a href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-muted">
                          Acid-Base Titration
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-muted">
                          Redox Reactions
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-muted">
                          Crystallization
                        </a>
                        <div className="border-t my-1"></div>
                        <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Physics
                        </div>
                        <a href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-muted">
                          Pendulum Motion
                        </a>
                        <a href="#" className="block px-3 py-2 text-sm text-foreground hover:bg-muted">
                          Wave Interference
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg mt-4">
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<div className="relative">
  <button className="flex items-center px-4 py-2 text-sm font-medium border rounded-md">
    Select Lab
    <ChevronDown className="ml-2 h-4 w-4" />
  </button>
  <div className="absolute top-full left-0 mt-1 w-56 bg-white border rounded-md shadow-lg">
    <div className="py-1">
      <a href="#" className="block px-3 py-2 text-sm hover:bg-muted">
        Acid-Base Titration
      </a>
    </div>
  </div>
</div>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Navigation Patterns</CardTitle>
                <CardDescription>Common navigation patterns for Virtual Labs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Lab Dashboard Navigation</h3>
                  <div className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">My Experiments</h4>
                      <Button size="sm">New Experiment</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <div className="flex items-center mb-2">
                          <Beaker className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium">pH Titration</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Last modified: 2 hours ago</p>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <div className="flex items-center mb-2">
                          <Microscope className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium">Cell Division</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Last modified: 1 day ago</p>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <div className="flex items-center mb-2">
                          <Calculator className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="font-medium">Pendulum</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Last modified: 3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Experiment Navigation</h3>
                  <div className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          ← Back to Labs
                        </Button>
                        <div className="text-sm text-muted-foreground">|</div>
                        <h4 className="font-medium">Acid-Base Titration</h4>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Save
                        </Button>
                        <Button size="sm">Run Experiment</Button>
                      </div>
                    </div>
                    <div className="flex space-x-6 border-b">
                      <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
                        Setup
                      </button>
                      <button className="py-2 px-1 border-b-2 border-transparent text-muted-foreground font-medium text-sm">
                        Procedure
                      </button>
                      <button className="py-2 px-1 border-b-2 border-transparent text-muted-foreground font-medium text-sm">
                        Results
                      </button>
                      <button className="py-2 px-1 border-b-2 border-transparent text-muted-foreground font-medium text-sm">
                        Analysis
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Multi-level Navigation</h3>
                  <div className="border rounded-lg p-4 bg-white">
                    <nav className="space-y-1">
                      <div className="flex items-center px-2 py-1 text-sm font-medium text-muted-foreground">
                        <ChevronDown className="h-4 w-4 mr-1" />
                        Chemistry Labs
                      </div>
                      <div className="ml-4 space-y-1">
                        <a href="#" className="block px-2 py-1 text-sm text-blue-600 bg-blue-50 rounded">
                          Acid-Base Titration
                        </a>
                        <a href="#" className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground">
                          Redox Reactions
                        </a>
                        <a href="#" className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground">
                          Crystallization
                        </a>
                      </div>
                      <div className="flex items-center px-2 py-1 text-sm font-medium text-muted-foreground">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Physics Labs
                      </div>
                      <div className="flex items-center px-2 py-1 text-sm font-medium text-muted-foreground">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Biology Labs
                      </div>
                    </nav>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Navigation</CardTitle>
                <CardDescription>Responsive navigation patterns for mobile devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Mobile Header</h3>
                  <div className="border rounded-lg p-4 bg-white max-w-sm mx-auto">
                    <div className="flex items-center justify-between">
                      <Button variant="ghost" size="sm">
                        <Menu className="h-5 w-5" />
                      </Button>
                      <div className="flex items-center space-x-2">
                        <FlaskConical className="h-5 w-5 text-blue-600" />
                        <span className="font-bold">Virtual Labs</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Search className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Mobile Menu</h3>
                  <div className="border rounded-lg p-4 bg-white max-w-sm mx-auto">
                    <div className="space-y-1">
                      <a
                        href="#"
                        className="flex items-center px-3 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-md"
                      >
                        <Home className="mr-3 h-5 w-5" />
                        Dashboard
                      </a>
                      <a href="#" className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground">
                        <Beaker className="mr-3 h-5 w-5" />
                        Experiments
                      </a>
                      <a href="#" className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground">
                        <BarChart3 className="mr-3 h-5 w-5" />
                        Results
                      </a>
                      <a href="#" className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground">
                        <BookOpen className="mr-3 h-5 w-5" />
                        Library
                      </a>
                      <div className="border-t my-2"></div>
                      <a href="#" className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground">
                        <Settings className="mr-3 h-5 w-5" />
                        Settings
                      </a>
                      <a href="#" className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground">
                        <User className="mr-3 h-5 w-5" />
                        Profile
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Bottom Navigation</h3>
                  <div className="border rounded-lg p-4 bg-white max-w-sm mx-auto">
                    <div className="flex justify-around items-center py-2">
                      <button className="flex flex-col items-center space-y-1 text-blue-600">
                        <Home className="h-5 w-5" />
                        <span className="text-xs font-medium">Home</span>
                      </button>
                      <button className="flex flex-col items-center space-y-1 text-muted-foreground">
                        <Beaker className="h-5 w-5" />
                        <span className="text-xs font-medium">Labs</span>
                      </button>
                      <button className="flex flex-col items-center space-y-1 text-muted-foreground">
                        <BarChart3 className="h-5 w-5" />
                        <span className="text-xs font-medium">Results</span>
                      </button>
                      <button className="flex flex-col items-center space-y-1 text-muted-foreground">
                        <User className="h-5 w-5" />
                        <span className="text-xs font-medium">Profile</span>
                      </button>
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
                <CardDescription>Making navigation accessible to all users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Keyboard Navigation</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <strong>Tab:</strong> Move to next focusable element
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Shift + Tab:</strong> Move to previous focusable element
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Enter/Space:</strong> Activate links and buttons
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Arrow Keys:</strong> Navigate within menus and tab lists
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Escape:</strong> Close dropdowns and modals
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">ARIA Labels and Roles</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`<!-- Navigation landmark -->
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="#" role="menuitem" aria-current="page">Dashboard</a>
    </li>
    <li role="none">
      <button role="menuitem" aria-expanded="false" aria-haspopup="true">
        Experiments
      </button>
    </li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Chemistry</a></li>
    <li aria-current="page">Titration</li>
  </ol>
</nav>`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Focus Management</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Visible focus indicators on all interactive elements</li>
                    <li>• Logical tab order following visual layout</li>
                    <li>• Focus trapping in modal dialogs and dropdowns</li>
                    <li>• Skip links for keyboard users to bypass navigation</li>
                    <li>• Focus restoration when closing overlays</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Screen Reader Support</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Descriptive link text (avoid "click here")</li>
                    <li>• Current page indication in navigation</li>
                    <li>• Landmark roles for navigation sections</li>
                    <li>• Proper heading hierarchy for page structure</li>
                    <li>• Alternative text for icon-only buttons</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
