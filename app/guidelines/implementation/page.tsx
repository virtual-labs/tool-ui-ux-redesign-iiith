"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Layers, Zap, Shield, Monitor, Smartphone, Tablet, CheckCircle, Database, Cloud } from "lucide-react"

export default function ImplementationGuidelinesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Implementation Guidelines</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Technical guidelines and best practices for implementing virtual laboratory interfaces.
        </p>
      </div>

      <Tabs defaultValue="architecture" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="h-5 w-5" />
                <span>System Architecture</span>
              </CardTitle>
              <CardDescription>Recommended architecture patterns for virtual laboratory systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Presentation Layer</h3>
                  <div className="space-y-2 text-sm">
                    <div>• React/Vue.js frontend</div>
                    <div>• Progressive Web App (PWA)</div>
                    <div>• Responsive design</div>
                    <div>• Component-based architecture</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Application Layer</h3>
                  <div className="space-y-2 text-sm">
                    <div>• RESTful APIs</div>
                    <div>• GraphQL endpoints</div>
                    <div>• WebSocket connections</div>
                    <div>• Microservices architecture</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Data Layer</h3>
                  <div className="space-y-2 text-sm">
                    <div>• PostgreSQL/MongoDB</div>
                    <div>• Redis caching</div>
                    <div>• Time-series databases</div>
                    <div>• File storage systems</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Recommended Tech Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Frontend Technologies</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-medium text-sm mb-1">React + TypeScript</div>
                        <div className="text-sm text-muted-foreground">
                          Type-safe component development with excellent ecosystem
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-sm mb-1">Next.js</div>
                        <div className="text-sm text-muted-foreground">
                          Full-stack framework with SSR/SSG capabilities
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="font-medium text-sm mb-1">Tailwind CSS</div>
                        <div className="text-sm text-muted-foreground">
                          Utility-first CSS framework for rapid UI development
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Backend Technologies</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="font-medium text-sm mb-1">Node.js + Express</div>
                        <div className="text-sm text-muted-foreground">
                          JavaScript runtime with robust web framework
                        </div>
                      </div>
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="font-medium text-sm mb-1">Python + FastAPI</div>
                        <div className="text-sm text-muted-foreground">
                          High-performance API framework with automatic docs
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="font-medium text-sm mb-1">Docker + Kubernetes</div>
                        <div className="text-sm text-muted-foreground">
                          Containerization and orchestration for scalability
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Design Patterns</CardTitle>
              <CardDescription>Recommended architectural patterns for laboratory applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Frontend Patterns</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Component Composition</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Build complex UIs from smaller, reusable components
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">State Management</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use Redux/Zustand for complex state, Context for simple state
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Error Boundaries</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Graceful error handling to prevent complete app crashes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Backend Patterns</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Repository Pattern</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Abstract data access logic for better testability
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Observer Pattern</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Real-time updates for sensor data and user interactions
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm">Circuit Breaker</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Prevent cascading failures in distributed systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="frontend" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Monitor className="h-5 w-5" />
                <span>Frontend Implementation</span>
              </CardTitle>
              <CardDescription>Best practices for building laboratory user interfaces</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Component Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Component Structure</h4>
                    <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                      <div>components/</div>
                      <div className="ml-2">├── ui/ (base components)</div>
                      <div className="ml-2">├── lab/ (lab-specific)</div>
                      <div className="ml-2">├── forms/ (form components)</div>
                      <div className="ml-2">└── charts/ (data viz)</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Naming Conventions</h4>
                    <div className="space-y-2 text-sm">
                      <div>• PascalCase for components</div>
                      <div>• camelCase for props/functions</div>
                      <div>• kebab-case for files</div>
                      <div>• UPPER_CASE for constants</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">State Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Local State</h4>
                    <p className="text-sm text-muted-foreground mb-3">Component-specific data</p>
                    <div className="space-y-1 text-sm">
                      <div>• Form inputs</div>
                      <div>• UI toggles</div>
                      <div>• Temporary data</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Global State</h4>
                    <p className="text-sm text-muted-foreground mb-3">Application-wide data</p>
                    <div className="space-y-1 text-sm">
                      <div>• User authentication</div>
                      <div>• Experiment data</div>
                      <div>• System settings</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Server State</h4>
                    <p className="text-sm text-muted-foreground mb-3">Remote data management</p>
                    <div className="space-y-1 text-sm">
                      <div>• API responses</div>
                      <div>• Real-time data</div>
                      <div>• Cached results</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Real-time Features</h3>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium mb-3">WebSocket Implementation</h4>
                  <div className="bg-white p-3 rounded text-sm font-mono mb-3">
                    <div className="text-gray-600">// WebSocket connection for real-time data</div>
                    <div>const useWebSocket = (url: string) =&gt; &lbrace;</div>
                    <div className="ml-2">const [socket, setSocket] = useState&lt;WebSocket | null&gt;(null);</div>
                    <div className="ml-2">const [data, setData] = useState(null);</div>
                    <div className="ml-2">// Connection logic...</div>
                    <div>&rbrace;</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium mb-2">Use Cases:</div>
                      <div>• Live sensor readings</div>
                      <div>• Collaborative editing</div>
                      <div>• System notifications</div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Best Practices:</div>
                      <div>• Automatic reconnection</div>
                      <div>• Message queuing</div>
                      <div>• Error handling</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>Multi-device support for laboratory interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                  <h3 className="font-medium mb-2">Mobile (320-768px)</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Single column layout</div>
                    <div>• Touch-friendly controls</div>
                    <div>• Simplified navigation</div>
                    <div>• Essential features only</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Tablet className="h-8 w-8 mx-auto mb-3 text-green-500" />
                  <h3 className="font-medium mb-2">Tablet (768-1024px)</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Two column layout</div>
                    <div>• Sidebar navigation</div>
                    <div>• Medium-sized controls</div>
                    <div>• More detailed views</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <Monitor className="h-8 w-8 mx-auto mb-3 text-purple-500" />
                  <h3 className="font-medium mb-2">Desktop (1024px+)</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Multi-column layout</div>
                    <div>• Full navigation</div>
                    <div>• Precise controls</div>
                    <div>• Complete feature set</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backend" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Backend Implementation</span>
              </CardTitle>
              <CardDescription>Server-side architecture and API design</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">API Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">RESTful Endpoints</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded text-sm font-mono">
                        <div className="text-green-600">GET</div>
                        <div>/api/experiments</div>
                        <div>/api/experiments/&lbrace;id&rbrace;</div>
                        <div>/api/experiments/&lbrace;id&rbrace;/data</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded text-sm font-mono">
                        <div className="text-blue-600">POST</div>
                        <div>/api/experiments</div>
                        <div>/api/experiments/&lbrace;id&rbrace;/start</div>
                        <div>/api/measurements</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded text-sm font-mono">
                        <div className="text-yellow-600">PUT/PATCH</div>
                        <div>/api/experiments/&lbrace;id&rbrace;</div>
                        <div>/api/settings/&lbrace;id&rbrace;</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Response Format</h4>
                    <div className="p-3 bg-gray-50 rounded text-sm font-mono">
                      <div>&lbrace;</div>
                      <div className="ml-2">"success": true,</div>
                      <div className="ml-2">"data": &lbrace;...&rbrace;,</div>
                      <div className="ml-2">"message": "Operation completed",</div>
                      <div className="ml-2">"timestamp": "2024-01-15T10:30:00Z",</div>
                      <div className="ml-2">"pagination": &lbrace;...&rbrace;</div>
                      <div>&rbrace;</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>• Consistent response structure</div>
                      <div>• Proper HTTP status codes</div>
                      <div>• Error message standardization</div>
                      <div>• Pagination for large datasets</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Data Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Relational Data</h4>
                    <p className="text-sm text-muted-foreground mb-3">Structured data with relationships</p>
                    <div className="space-y-1 text-sm">
                      <div>• User accounts</div>
                      <div>• Experiment metadata</div>
                      <div>• Equipment configurations</div>
                      <div>• Course structures</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Time-Series Data</h4>
                    <p className="text-sm text-muted-foreground mb-3">Sensor readings and measurements</p>
                    <div className="space-y-1 text-sm">
                      <div>• Temperature logs</div>
                      <div>• pH measurements</div>
                      <div>• Pressure readings</div>
                      <div>• Flow rates</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">File Storage</h4>
                    <p className="text-sm text-muted-foreground mb-3">Media and document storage</p>
                    <div className="space-y-1 text-sm">
                      <div>• Lab photos/videos</div>
                      <div>• Experiment reports</div>
                      <div>• Data exports</div>
                      <div>• User uploads</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Real-time Communication</h3>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium mb-3">WebSocket Server Implementation</h4>
                  <div className="bg-white p-3 rounded text-sm font-mono mb-3">
                    <div className="text-gray-600">// Socket.IO server setup</div>
                    <div>const io = new Server(server, &lbrace;</div>
                    <div className="ml-2">cors: &lbrace; origin: "*" &rbrace;,</div>
                    <div className="ml-2">transports: ['websocket', 'polling']</div>
                    <div>&rbrace;);</div>
                    <div></div>
                    <div>io.on('connection', (socket) =&gt; &lbrace;</div>
                    <div className="ml-2">// Handle real-time events</div>
                    <div>&rbrace;);</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium mb-2">Event Types:</div>
                      <div>• sensor-data</div>
                      <div>• experiment-update</div>
                      <div>• user-action</div>
                      <div>• system-alert</div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Features:</div>
                      <div>• Room-based messaging</div>
                      <div>• Authentication middleware</div>
                      <div>• Rate limiting</div>
                      <div>• Connection management</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Performance Optimization</span>
              </CardTitle>
              <CardDescription>Strategies for optimizing laboratory application performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Frontend Optimization</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Code Splitting</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Route-based splitting</div>
                        <div>• Component lazy loading</div>
                        <div>• Dynamic imports</div>
                        <div>• Bundle analysis</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Asset Optimization</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Image compression</div>
                        <div>• WebP format usage</div>
                        <div>• CSS/JS minification</div>
                        <div>• Tree shaking</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Caching Strategies</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Browser caching</div>
                        <div>• Service workers</div>
                        <div>• CDN utilization</div>
                        <div>• Cache invalidation</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Backend Optimization</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Database Optimization</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Query optimization</div>
                        <div>• Index management</div>
                        <div>• Connection pooling</div>
                        <div>• Read replicas</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">API Performance</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Response compression</div>
                        <div>• Pagination</div>
                        <div>• Field selection</div>
                        <div>• Rate limiting</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Caching Layers</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Redis caching</div>
                        <div>• Application cache</div>
                        <div>• Database query cache</div>
                        <div>• CDN edge caching</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">&lt; 2s</div>
                    <div className="text-sm text-muted-foreground">Initial Load Time</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">&lt; 100ms</div>
                    <div className="text-sm text-muted-foreground">API Response Time</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">&gt; 90</div>
                    <div className="text-sm text-muted-foreground">Lighthouse Score</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">&lt; 50ms</div>
                    <div className="text-sm text-muted-foreground">Real-time Latency</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium mb-3">Laboratory-Specific Considerations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Real-time Data:</div>
                    <div>• Optimize WebSocket connections</div>
                    <div>• Implement data throttling</div>
                    <div>• Use efficient serialization</div>
                    <div>• Buffer high-frequency updates</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Large Datasets:</div>
                    <div>• Implement virtual scrolling</div>
                    <div>• Use data pagination</div>
                    <div>• Compress data transfers</div>
                    <div>• Cache frequently accessed data</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security Implementation</span>
              </CardTitle>
              <CardDescription>Security best practices for virtual laboratory systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Authentication & Authorization</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Authentication Methods</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>JWT tokens with refresh</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>OAuth 2.0 / OpenID Connect</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Multi-factor authentication</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Session management</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Role-Based Access</h4>
                      <div className="space-y-2 text-sm">
                        <div>• Student: View-only access</div>
                        <div>• Instructor: Full lab control</div>
                        <div>• Admin: System management</div>
                        <div>• Guest: Limited demo access</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Data Protection</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Encryption</h4>
                      <div className="space-y-2 text-sm">
                        <div>• HTTPS/TLS 1.3 for transport</div>
                        <div>• AES-256 for data at rest</div>
                        <div>• Encrypted database fields</div>
                        <div>• Secure key management</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Privacy Compliance</h4>
                      <div className="space-y-2 text-sm">
                        <div>• GDPR compliance</div>
                        <div>• FERPA for educational data</div>
                        <div>• Data anonymization</div>
                        <div>• Consent management</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Security Vulnerabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-red-600">Common Threats</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="font-medium text-sm text-red-800">SQL Injection</div>
                        <div className="text-sm text-red-700 mt-1">Use parameterized queries and ORM frameworks</div>
                      </div>
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="font-medium text-sm text-red-800">XSS Attacks</div>
                        <div className="text-sm text-red-700 mt-1">Sanitize user input and use CSP headers</div>
                      </div>
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="font-medium text-sm text-red-800">CSRF</div>
                        <div className="text-sm text-red-700 mt-1">Implement CSRF tokens and SameSite cookies</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-green-600">Prevention Measures</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-sm text-green-800">Input Validation</div>
                        <div className="text-sm text-green-700 mt-1">
                          Validate all user inputs on both client and server
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-sm text-green-800">Security Headers</div>
                        <div className="text-sm text-green-700 mt-1">
                          Implement HSTS, CSP, and other security headers
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-medium text-sm text-green-800">Regular Audits</div>
                        <div className="text-sm text-green-700 mt-1">
                          Conduct security assessments and penetration testing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium mb-3">Laboratory-Specific Security</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium mb-2">Equipment Access:</div>
                    <div>• Secure equipment control APIs</div>
                    <div>• Time-based access tokens</div>
                    <div>• Equipment usage logging</div>
                    <div>• Emergency shutdown protocols</div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Data Integrity:</div>
                    <div>• Sensor data validation</div>
                    <div>• Tamper detection</div>
                    <div>• Audit trails</div>
                    <div>• Backup and recovery</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cloud className="h-5 w-5" />
                <span>Deployment & DevOps</span>
              </CardTitle>
              <CardDescription>Deployment strategies and operational best practices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Development</h3>
                  <div className="space-y-2 text-sm">
                    <div>• Local development setup</div>
                    <div>• Hot reloading</div>
                    <div>• Mock data services</div>
                    <div>• Development tools</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Staging</h3>
                  <div className="space-y-2 text-sm">
                    <div>• Production-like environment</div>
                    <div>• Integration testing</div>
                    <div>• Performance testing</div>
                    <div>• User acceptance testing</div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Production</h3>
                  <div className="space-y-2 text-sm">
                    <div>• High availability setup</div>
                    <div>• Load balancing</div>
                    <div>• Monitoring & alerting</div>
                    <div>• Backup strategies</div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">CI/CD Pipeline</h3>
                <div className="p-4 bg-gray-50 border rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-medium">Code Commit</div>
                        <div className="text-sm text-muted-foreground">Developer pushes code to repository</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Automated Testing</div>
                        <div className="text-sm text-muted-foreground">
                          Unit tests, integration tests, security scans
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-medium">Build & Package</div>
                        <div className="text-sm text-muted-foreground">Docker image creation and artifact storage</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-medium">Deployment</div>
                        <div className="text-sm text-muted-foreground">Automated deployment to staging/production</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Infrastructure as Code</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Container Orchestration</h4>
                    <div className="bg-gray-50 p-3 rounded text-sm font-mono mb-3">
                      <div># docker-compose.yml</div>
                      <div>version: '3.8'</div>
                      <div>services:</div>
                      <div className="ml-2">web:</div>
                      <div className="ml-4">build: .</div>
                      <div className="ml-4">ports: ["3000:3000"]</div>
                      <div className="ml-2">db:</div>
                      <div className="ml-4">image: postgres:13</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-3">Cloud Infrastructure</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Terraform for infrastructure</div>
                      <div>• Kubernetes for orchestration</div>
                      <div>• Helm charts for deployment</div>
                      <div>• GitOps workflows</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Monitoring & Observability</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Metrics</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Application performance</div>
                      <div>• Infrastructure health</div>
                      <div>• Business metrics</div>
                      <div>• Custom dashboards</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Logging</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Centralized log aggregation</div>
                      <div>• Structured logging</div>
                      <div>• Log analysis</div>
                      <div>• Error tracking</div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Tracing</h4>
                    <div className="space-y-1 text-sm">
                      <div>• Distributed tracing</div>
                      <div>• Request flow analysis</div>
                      <div>• Performance bottlenecks</div>
                      <div>• Service dependencies</div>
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
