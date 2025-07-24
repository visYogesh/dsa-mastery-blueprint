import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Layers,
  Move,
  Search,
  Table,
  PlusSquare,
  Shuffle,
  Grid,
  Filter,
  Hash,
  BarChart,
  RefreshCw,
} from "lucide-react";

const topicsByCategory = {
  arrays: [
    { name: "Sliding Window", slug: "sliding-window", description: "Optimize subarray problems with dynamic windows", icon: Layers },
    { name: "Two Pointers", slug: "two-pointers", description: "Solve problems efficiently with dual pointers", icon: Move },
    { name: "Binary Search", slug: "binary-search", description: "Fast searching on sorted data", icon: Search },
    { name: "Hash Table", slug: "hash-table", description: "Store and access data in O(1) average time", icon: Hash },
    { name: "Prefix Sum", slug: "prefix-sum", description: "Efficiently calculate sums over subarrays", icon: PlusSquare },
    { name: "Kadane’s Algorithm", slug: "kadane-algorithm", description: "Find maximum subarray sum in linear time", icon: BarChart },
    { name: "Matrix Manipulation", slug: "matrix-manipulation", description: "Handle 2D arrays, rotations, and traversals", icon: Grid },
    { name: "Partitioning", slug: "partitioning", description: "Divide arrays for quicksort and related problems", icon: Filter },
    { name: "Hashing & Frequency Count", slug: "hashing-frequency", description: "Count elements and detect duplicates efficiently", icon: Table },
    { name: "Dutch National Flag Problem", slug: "dutch-national-flag", description: "Sort arrays of 0s, 1s, and 2s in place", icon: Shuffle },
    { name: "Cyclic Sort", slug: "cyclic-sort", description: "Place elements in correct index with minimal swaps", icon: RefreshCw },
  ],
};

const CategoryTopics = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const topics = category ? topicsByCategory[category.toLowerCase()] : undefined;

  if (!topics) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-destructive">
          No topics found for {category}
        </h1>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg capitalize">
            {category} Topics
          </h1>
          <p className="text-base text-gray-400 max-w-2xl mx-auto py-2">
            Choose a topic under <span className="font-semibold capitalize">{category}</span> to dive deeper into DSA problems.
          </p>
        </motion.div>

        {/* Topics grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <Card
                onClick={() => navigate(`/problems/${category}/${topic.slug}`)}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-400 hover:shadow-purple-400/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <topic.icon className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
                  <h2 className="text-2xl font-bold text-white">{topic.name}</h2>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                  {topic.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CategoryTopics;
