import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Award, BookOpen } from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");

  const tabs = [
    { id: "discussions", label: "Discussions", icon: MessageSquare },
    { id: "doubts", label: "Doubt Rooms", icon: BookOpen },
    { id: "groups", label: "Study Groups", icon: Users },
    { id: "leaderboard", label: "Leaderboard", icon: Award },
  ];

  return (
    <section className="pt-4 pb-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Community</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {tabs.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === id
                ? "bg-gradient-hero text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-background shadow-lg rounded-xl p-4 max-w-3xl mx-auto">
        {activeTab === "discussions" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Latest Discussions</h2>
            <ul className="space-y-2">
              <li className="p-3 bg-gray-900 rounded-md hover:bg-gray-800 cursor-pointer">
                How to approach Graph DP problems?
              </li>
              <li className="p-3 bg-gray-900 rounded-md hover:bg-gray-800 cursor-pointer">
                Best resources for mastering Binary Search
              </li>
              <li className="p-3 bg-gray-900 rounded-md hover:bg-gray-800 cursor-pointer">
                Share your LeetCode streaks!
              </li>
            </ul>
          </div>
        )}

        {activeTab === "doubts" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Doubt Rooms</h2>
            <Button className="bg-gradient-hero w-full">Join a Room</Button>
          </div>
        )}

        {activeTab === "groups" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Study Groups</h2>
            <p className="text-gray-400">
              Join topic-based groups and learn with peers.
            </p>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Top Contributors</h2>
            <ol className="list-decimal ml-5 space-y-1 text-gray-300">
              <li>Aryan – 250 points</li>
              <li>Neha – 210 points</li>
              <li>Ravi – 180 points</li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default Community;
