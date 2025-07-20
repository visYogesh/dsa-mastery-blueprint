import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const problemsByTopic = {
  "sliding-window": [
    {
      title: "Longest Harmonious Subsequence",
      slug: "/longest-harmonious-subsequence",
      difficulty: "Easy",
    },
    {
      title: "Contains Duplicate II",
      slug: "ontains-duplicate-ii",
      difficulty: "Easy",
    },
    {
      title: "Maximum Sum of Distinct Subarrays With Length K",
      slug: "maximum-sum-of-distinct-subarrays-with-length-k",
      difficulty: "Medium",
    },
    {
      title: "Frequency of the Most Frequent Element",
      slug: "frequency-of-the-most-frequent-element",
      difficulty: "Medium",
    },
    {
      title: "Subarray Product Less Than K",
      slug: "subarray-product-less-than-k",
      difficulty: "Medium",
    },
    {
      title: "Minimum Size Subarray Sum",
      slug: "minimum-size-subarray-sum",
      difficulty: "Medium",
    },
    {
      title: "Sliding Window Maximum",
      slug: "sliding-window-maximum",
      difficulty: "Hard",
    },
  ],
  "two-pointers": [
    { title: "Remove Element", slug: "remove-element", difficulty: "Easy" },
    {
      title: "Remove Duplicates from Sorted Array",
      slug: "remove-duplicates-from-sorted-array",
      difficulty: "Easy",
    },
    {
      title: "Merge Sorted Array",
      slug: "merge-sorted-array",
      difficulty: "Easy",
    },
    {
      title: "Container With Most Water",
      slug: "container-with-most-water",
      difficulty: "Medium",
    },
    {
      title: "Boats to Save People",
      slug: "boats-to-save-people",
      difficulty: "Medium",
    },
    {
      title: "The k Strongest Values in an Array",
      slug: "the-k-strongest-values-in-an-array",
      difficulty: "Medium",
    },
    { title: "3Sum", slug: "3sum", difficulty: "Medium" },
    { title: "Sort Colors", slug: "sort-colors", difficulty: "Medium" },
    {
      title: "Trapping Rain Water",
      slug: "trapping-rain-water",
      difficulty: "Hard",
    },
  ],
  "binary-search": [
    { title: "Binary Search", slug: "binary-search", difficulty: "Easy" },
    {
      title: "Search Insert Position",
      slug: "search-insert-position",
      difficulty: "Easy",
    },
    {
      title: "Guess Number Higher or Lower",
      slug: "guess-number-higher-or-lower",
      difficulty: "Easy",
    },
    { title: "Sqrt(x)", slug: "sqrtx", difficulty: "Easy" },
    {
      title: "Find Smallest Letter Greater Than Target",
      slug: "find-smallest-letter-greater-than-target",
      difficulty: "Easy",
    },
    {
      title: "Koko Eating Bananas",
      slug: "koko-eating-bananas",
      difficulty: "Medium",
    },
    {
      title: "Minimum Days to Make m Bouquets",
      slug: "minimum-number-of-days-to-make-m-bouquets",
      difficulty: "Medium",
    },
    {
      title: "Magnetic Force Between Two Balls",
      slug: "magnetic-force-between-two-balls",
      difficulty: "Medium",
    },
    {
      title: "Capacity To Ship Packages Within D Days",
      slug: "capacity-to-ship-packages-within-d-days",
      difficulty: "Medium",
    },
    {
      title: "Minimum Limit of Balls in a Bag",
      slug: "minimum-limit-of-balls-in-a-bag",
      difficulty: "Medium",
    },
    {
      title: "Search in Rotated Sorted Array",
      slug: "search-in-rotated-sorted-array",
      difficulty: "Medium",
    },
    {
      title: "Search in Rotated Sorted Array 2",
      slug: "search-in-rotated-sorted-array-ii",
      difficulty: "Medium",
    },
    {
      title: "Find First and Last Position of Element in Sorted Array",
      slug: "find-first-and-last-position-of-element-in-sorted-array",
      difficulty: "Medium",
    },
    {
      title: "Find Peak Element",
      slug: "find-peak-element",
      difficulty: "Medium",
    },
    {
      title: "Median of Two Sorted Arrays",
      slug: "median-of-two-sorted-arrays",
      difficulty: "Hard",
    },
    {
      title: "Split Array Largest Sum",
      slug: "split-array-largest-sum",
      difficulty: "Hard",
    },
    {
      title: "Find in Mountain Array",
      slug: "find-in-mountain-array",
      difficulty: "Hard",
    },
  ],

  "hash-table": [
    { title: "Two Sum", slug: "two-sum", difficulty: "Easy" },
    { title: "Group Anagrams", slug: "group-anagrams", difficulty: "Medium" },
    { title: "Valid Anagram", slug: "valid-anagram", difficulty: "Easy" },
    {
      title: "Top K Frequent Elements",
      slug: "top-k-frequent-elements",
      difficulty: "Medium",
    },
    {
      title: "Subarray Sum Equals K",
      slug: "subarray-sum-equals-k",
      difficulty: "Medium",
    },
  ],
  "prefix-sum": [
    {
      title: "Range Sum Query - Immutable",
      slug: "range-sum-query-immutable",
      difficulty: "Easy",
    },
    {
      title: "Subarray Sum Equals K",
      slug: "subarray-sum-equals-k",
      difficulty: "Medium",
    },
    {
      title: "Continuous Subarray Sum",
      slug: "continuous-subarray-sum",
      difficulty: "Medium",
    },
    { title: "Find Pivot Index", slug: "find-pivot-index", difficulty: "Easy" },
    {
      title: "Maximum Size Subarray Sum Equals k",
      slug: "maximum-size-subarray-sum-equals-k",
      difficulty: "Medium",
    },
  ],
  "kadane-algorithm": [
    {
      title: "Maximum Subarray",
      slug: "maximum-subarray",
      difficulty: "Medium",
    },
    {
      title: "Best Time to Buy and Sell Stock",
      slug: "best-time-to-buy-and-sell-stock",
      difficulty: "Easy",
    },
    {
      title: "Maximum Product Subarray",
      slug: "maximum-product-subarray",
      difficulty: "Medium",
    },
    { title: "House Robber", slug: "house-robber", difficulty: "Medium" },
    { title: "Jump Game", slug: "jump-game", difficulty: "Medium" },
  ],
  "matrix-manipulation": [
    { title: "Rotate Image", slug: "rotate-image", difficulty: "Medium" },
    { title: "Spiral Matrix", slug: "spiral-matrix", difficulty: "Medium" },
    {
      title: "Set Matrix Zeroes",
      slug: "set-matrix-zeroes",
      difficulty: "Medium",
    },
    {
      title: "Search a 2D Matrix",
      slug: "search-a-2d-matrix",
      difficulty: "Medium",
    },
    { title: "Transpose Matrix", slug: "transpose-matrix", difficulty: "Easy" },
  ],
  partitioning: [
    {
      title: "Partition Equal Subset Sum",
      slug: "partition-equal-subset-sum",
      difficulty: "Medium",
    },
    {
      title: "Palindrome Partitioning",
      slug: "palindrome-partitioning",
      difficulty: "Medium",
    },
    {
      title: "Minimum Number of Arrows to Burst Balloons",
      slug: "minimum-number-of-arrows-to-burst-balloons",
      difficulty: "Medium",
    },
    {
      title: "Kth Largest Element in an Array",
      slug: "kth-largest-element-in-an-array",
      difficulty: "Medium",
    },
    { title: "Wiggle Sort II", slug: "wiggle-sort-ii", difficulty: "Medium" },
  ],
  "hashing-frequency": [
    { title: "Majority Element", slug: "majority-element", difficulty: "Easy" },
    {
      title: "First Unique Character in a String",
      slug: "first-unique-character-in-a-string",
      difficulty: "Easy",
    },
    {
      title: "Find All Anagrams in a String",
      slug: "find-all-anagrams-in-a-string",
      difficulty: "Medium",
    },
    {
      title: "Minimum Index Sum of Two Lists",
      slug: "minimum-index-sum-of-two-lists",
      difficulty: "Easy",
    },
    {
      title: "Longest Consecutive Sequence",
      slug: "longest-consecutive-sequence",
      difficulty: "Medium",
    },
  ],
  "dutch-national-flag": [
    { title: "Sort Colors", slug: "sort-colors", difficulty: "Medium" },
    {
      title: "Minimum Moves to Equal Array Elements II",
      slug: "minimum-moves-to-equal-array-elements-ii",
      difficulty: "Medium",
    },
    {
      title: "Relative Sort Array",
      slug: "relative-sort-array",
      difficulty: "Easy",
    },
    { title: "Wiggle Sort", slug: "wiggle-sort", difficulty: "Medium" },
    { title: "Sort an Array", slug: "sort-an-array", difficulty: "Medium" },
  ],
  "cyclic-sort": [
    {
      title: "Find All Numbers Disappeared in an Array",
      slug: "find-all-numbers-disappeared-in-an-array",
      difficulty: "Easy",
    },
    {
      title: "Find the Duplicate Number",
      slug: "find-the-duplicate-number",
      difficulty: "Medium",
    },
    {
      title: "First Missing Positive",
      slug: "first-missing-positive",
      difficulty: "Hard",
    },
    { title: "Set Mismatch", slug: "set-mismatch", difficulty: "Easy" },
    { title: "Missing Number", slug: "missing-number", difficulty: "Easy" },
  ],
  "subarray-sum-k": [
    {
      title: "Subarray Sum Equals K",
      slug: "subarray-sum-equals-k",
      difficulty: "Medium",
    },
    {
      title: "Minimum Size Subarray Sum",
      slug: "minimum-size-subarray-sum",
      difficulty: "Medium",
    },
    {
      title: "Maximum Size Subarray Sum Equals k",
      slug: "maximum-size-subarray-sum-equals-k",
      difficulty: "Medium",
    },
    {
      title: "Binary Subarrays With Sum",
      slug: "binary-subarrays-with-sum",
      difficulty: "Medium",
    },
    {
      title: "Count Number of Nice Subarrays",
      slug: "count-number-of-nice-subarrays",
      difficulty: "Medium",
    },
  ],
};

const TopicProblems = () => {
  const { topic } = useParams();
  const problems = topic ? problemsByTopic[topic] : undefined;

  const [solved, setSolved] = useState<{ [key: string]: boolean }>({});
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const saved = localStorage.getItem(`solved-${topic}`);
    if (saved) setSolved(JSON.parse(saved));
  }, [topic]);

  const toggleSolved = (slug: string) => {
    const updated = { ...solved, [slug]: !solved[slug] };
    setSolved(updated);
    localStorage.setItem(`solved-${topic}`, JSON.stringify(updated));
  };

  if (!problems) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-destructive">
          No problems found for topic: {topic}
        </h1>
      </div>
    );
  }

  // Apply status filter
  let filteredProblems = problems.filter(({ slug }) => {
    if (filterStatus === "solved") return solved[slug];
    if (filterStatus === "unsolved") return !solved[slug];
    return true;
  });

  // Apply difficulty filter
  if (filterDifficulty !== "All") {
    filteredProblems = filteredProblems.filter(
      (p) => p.difficulty === filterDifficulty
    );
  }

  // Apply sorting
  if (sortOrder === "difficulty") {
    const difficultyRank = { Easy: 1, Medium: 2, Hard: 3 };
    filteredProblems = [...filteredProblems].sort(
      (a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent capitalize">
          {topic.replace("-", " ")} Problems
        </h1>
        <p className="text-muted-foreground mt-2 text-base">
          Mark problems as solved and filter by difficulty or status.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <Select
          onValueChange={(value) => setFilterStatus(value)}
          defaultValue="all"
        >
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="solved">Solved</SelectItem>
            <SelectItem value="unsolved">Unsolved</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => setFilterDifficulty(value)}
          defaultValue="All"
        >
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Filter by difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Problems List */}
      <div className="space-y-3">
        {filteredProblems.map(({ title, slug, difficulty }, index) => (
          <motion.div
            key={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 flex items-center justify-between hover:shadow-md transition-shadow bg-card">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={!!solved[slug]}
                  onCheckedChange={() => toggleSolved(slug)}
                />
                <span
                  className={`text-base sm:text-lg ${
                    solved[slug] ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {title}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                    difficulty === "Easy"
                      ? "text-green-500 border-green-500"
                      : difficulty === "Medium"
                      ? "text-orange-400 border-orange-400"
                      : "text-red-500 border-red-500"
                  }`}
                >
                  {difficulty}
                </span>
              </div>
              <a
                href={`https://leetcode.com/problems/${slug}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-10 h-10 hover:scale-110 transition-transform rounded p-1 "
                />
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopicProblems;
