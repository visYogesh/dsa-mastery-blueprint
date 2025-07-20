import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Eye, 
  Users, 
  Trophy, 
  BookOpen, 
  Timer,
  CheckCircle,
  BarChart3 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Interactive Code Editor",
      description: "Write, run, and debug code in multiple programming languages with syntax highlighting and auto-completion.",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      icon: Eye,
      title: "Algorithm Visualizations",
      description: "Watch algorithms come to life with step-by-step animations that make complex concepts easy to understand.",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join study groups, share solutions, and learn from a community of passionate developers.",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      icon: Trophy,
      title: "Coding Competitions",
      description: "Participate in weekly challenges and tournaments to test your skills against other programmers.",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  const highlights = [
    { icon: BookOpen, label: "Structured Learning Paths", value: "15+" },
    { icon: Timer, label: "Real-time Execution", value: "<100ms" },
    { icon: CheckCircle, label: "Success Rate", value: "95%" },
    { icon: BarChart3, label: "Progress Tracking", value: "Detailed" }
  ];

  return (
    <section id="learn" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Excel
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and features designed to accelerate your learning journey 
            from beginner to interview-ready professional.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-3">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {highlight.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 transition-opacity"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;