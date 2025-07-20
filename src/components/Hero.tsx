import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Code2, Brain, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* Main Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Master{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Data Structures
              </span>
              <br />
              and{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Algorithms
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Interactive coding platform with visual learning, real-time practice, and AI-powered feedback. 
              From beginner basics to advanced interview preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow text-lg px-8 py-6"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 hover:bg-primary/5 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 mx-auto">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Coding</h3>
              <p className="text-muted-foreground">
                Code directly in the browser with real-time execution and instant feedback
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-info/10 rounded-lg mb-4 mx-auto">
                <Brain className="w-6 h-6 text-info" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Visual Learning</h3>
              <p className="text-muted-foreground">
                Understand algorithms through interactive visualizations and step-by-step breakdowns
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-lg mb-4 mx-auto">
                <Target className="w-6 h-6 text-warning" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Interview Prep</h3>
              <p className="text-muted-foreground">
                Practice with real interview questions from top tech companies
              </p>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-secondary/20 rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Problems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Algorithms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;