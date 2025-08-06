import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Users, Brain, Shield, BarChart3 } from "lucide-react";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    title: "",
    duration: 30,
    questions: []
  });

  const sampleQuestions = [
    { id: 1, type: "coding", question: "Implement a binary search algorithm", difficulty: "Medium" },
    { id: 2, type: "multiple-choice", question: "What is the time complexity of quicksort?", difficulty: "Easy" },
    { id: 3, type: "coding", question: "Design a REST API for user management", difficulty: "Hard" },
    { id: 4, type: "multiple-choice", question: "Which design pattern is best for creating objects?", difficulty: "Medium" }
  ];

  const sampleCandidates = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", score: 85, status: "completed", time: "28 min" },
    { id: 2, name: "Sarah Chen", email: "sarah@example.com", score: 92, status: "completed", time: "35 min" },
    { id: 3, name: "Mike Rodriguez", email: "mike@example.com", score: 78, status: "completed", time: "42 min" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", score: 88, status: "in-progress", time: "15 min" }
  ];

  const handleStepComplete = (step: number) => {
    if (step < 3) {
      setCurrentStep(step + 1);
    }
  };

  const handleCreateAssessment = () => {
    setAssessmentData({
      title: "Senior Frontend Developer Assessment",
      duration: 45,
      questions: sampleQuestions.slice(0, 3)
    });
    handleStepComplete(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Equip Demo
              </h1>
              <Badge variant="secondary">Interactive Demo</Badge>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Main
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-muted/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm text-muted-foreground">
              Step {currentStep} of 3: {
                currentStep === 1 ? "Create Assessment" :
                currentStep === 2 ? "Candidates Attempt" :
                "Review Results"
              }
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Step 1: Create Assessment */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Create & Share Assessment</h2>
              <p className="text-xl text-muted-foreground">
                Build your assessment using our question bank or add custom questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Assessment Details
                  </CardTitle>
                  <CardDescription>Configure your assessment settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Assessment Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Senior Frontend Developer Assessment"
                      value={assessmentData.title}
                      onChange={(e) => setAssessmentData({...assessmentData, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={assessmentData.duration}
                      onChange={(e) => setAssessmentData({...assessmentData, duration: parseInt(e.target.value)})}
                    />
                  </div>
                  <Button onClick={handleCreateAssessment} className="w-full" size="lg">
                    Create Assessment
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Question Bank</CardTitle>
                  <CardDescription>Select from our curated questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sampleQuestions.map((question) => (
                      <div key={question.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium">{question.question}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {question.type}
                              </Badge>
                              <Badge variant={question.difficulty === 'Easy' ? 'secondary' : question.difficulty === 'Medium' ? 'default' : 'destructive'} className="text-xs">
                                {question.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Step 2: Candidates Attempt */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Candidates Attempt Remotely</h2>
              <p className="text-xl text-muted-foreground">
                Monitor live progress with anti-cheating measures
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Live Monitoring
                  </CardTitle>
                  <CardDescription>Real-time candidate progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sampleCandidates.map((candidate) => (
                      <div key={candidate.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{candidate.name}</h4>
                          <Badge variant={candidate.status === 'completed' ? 'default' : 'secondary'}>
                            {candidate.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{candidate.email}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{candidate.time}</span>
                        </div>
                        {candidate.status === 'in-progress' && (
                          <Progress value={65} className="mt-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security Features
                  </CardTitle>
                  <CardDescription>Anti-cheating measures in action</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Screen Recording</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Tab Switch Detection</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Monitoring</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Copy-Paste Prevention</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Enabled</Badge>
                    </div>
                  </div>
                  <Button onClick={() => handleStepComplete(2)} className="w-full" size="lg">
                    View Results
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Step 3: Review Results */}
        {currentStep === 3 && (
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Shortlist Only the Best</h2>
              <p className="text-xl text-muted-foreground">
                AI-powered evaluation and ranking of candidates
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Candidate Rankings
                  </CardTitle>
                  <CardDescription>Sorted by overall performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sampleCandidates
                      .filter(c => c.status === 'completed')
                      .sort((a, b) => b.score - a.score)
                      .map((candidate, index) => (
                        <div key={candidate.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-medium">{candidate.name}</h4>
                                <p className="text-sm text-muted-foreground">{candidate.email}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">{candidate.score}%</div>
                              <p className="text-sm text-muted-foreground">Completed in {candidate.time}</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Progress value={candidate.score} className="h-2" />
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Badge variant={candidate.score >= 90 ? 'default' : candidate.score >= 80 ? 'secondary' : 'outline'}>
                              {candidate.score >= 90 ? 'Excellent' : candidate.score >= 80 ? 'Good' : 'Average'}
                            </Badge>
                            {index === 0 && <Badge className="bg-green-100 text-green-700">Recommended</Badge>}
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assessment Summary</CardTitle>
                  <CardDescription>Key metrics and insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">4</div>
                    <p className="text-sm text-muted-foreground">Total Candidates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">86%</div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">35 min</div>
                    <p className="text-sm text-muted-foreground">Average Time</p>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Top Skills Assessed</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>JavaScript</span>
                        <span className="text-muted-foreground">85%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>React</span>
                        <span className="text-muted-foreground">78%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Problem Solving</span>
                        <span className="text-muted-foreground">92%</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Export Results
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button onClick={() => setCurrentStep(1)} size="lg" variant="outline">
                Start New Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;