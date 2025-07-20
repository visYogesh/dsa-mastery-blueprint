import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  List, 
  TreePine, 
  Network, 
  ArrowUpDown, 
  Search, 
  Zap, 
  Database,
  ArrowRight 
} from "lucide-react";

const ProblemCategories = () => {
  const categories = [
    {
      icon: List,
      title: "Arrays & Strings",
      description: "Master fundamental data structures and string manipulation techniques",
      problems: 85,
      difficulty: "Beginner",
      color: "bg-blue-500/10 text-blue-400",
      topics: ["Two Pointers", "Sliding Window", "Hash Maps"]
    },
    {
      icon: TreePine,
      title: "Trees & Graphs",
      description: "Explore hierarchical data structures and graph algorithms",
      problems: 72,
      difficulty: "Intermediate",
      color: "bg-green-500/10 text-green-400",
      topics: ["DFS", "BFS", "Binary Trees"]
    },
    {
      icon: Network,
      title: "Dynamic Programming",
      description: "Solve complex problems with optimal substructure",
      problems: 58,
      difficulty: "Advanced",
      color: "bg-purple-500/10 text-purple-400",
      topics: ["Memoization", "Tabulation", "State Machines"]
    },
    {
      icon: ArrowUpDown,
      title: "Sorting & Searching",
      description: "Efficient algorithms for organizing and finding data",
      problems: 45,
      difficulty: "Beginner",
      color: "bg-orange-500/10 text-orange-400",
      topics: ["Quick Sort", "Binary Search", "Merge Sort"]
    },
    {
      icon: Search,
      title: "Backtracking",
      description: "Systematic search through solution spaces",
      problems: 34,
      difficulty: "Intermediate",
      color: "bg-red-500/10 text-red-400",
      topics: ["N-Queens", "Sudoku", "Permutations"]
    },
    {
      icon: Zap,
      title: "Greedy Algorithms",
      description: "Make locally optimal choices for global solutions",
      problems: 28,
      difficulty: "Intermediate",
      color: "bg-yellow-500/10 text-yellow-400",
      topics: ["Activity Selection", "Huffman Coding", "MST"]
    },
    {
      icon: Database,
      title: "System Design",
      description: "Design scalable distributed systems and architectures",
      problems: 22,
      difficulty: "Advanced",
      color: "bg-indigo-500/10 text-indigo-400",
      topics: ["Load Balancing", "Caching", "Microservices"]
    },
    {
      icon: Network,
      title: "Graph Algorithms",
      description: "Advanced graph traversal and shortest path algorithms",
      problems: 41,
      difficulty: "Advanced",
      color: "bg-pink-500/10 text-pink-400",
      topics: ["Dijkstra", "Floyd-Warshall", "Topological Sort"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/20 text-success";
      case "Intermediate": return "bg-warning/20 text-warning";
      case "Advanced": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Problem Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths covering all essential data structures and algorithms. 
            Progress from fundamentals to advanced concepts at your own pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <Badge className={getDifficultyColor(category.difficulty)}>
                  {category.difficulty}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {category.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  {category.problems} problems
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="flex flex-wrap gap-1">
                {category.topics.slice(0, 2).map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
                {category.topics.length > 2 && (
                  <Badge variant="secondary" className="text-xs">
                    +{category.topics.length - 2}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 transition-opacity"
          >
            View All Problems
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemCategories;