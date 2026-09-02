/* =========================================================================
   BUILD TRAILS — multi-tab data + interactivity
   Three tracks, each with its own progress saved separately:
     1) DSA + C++ (60 Days)
     2) DSA — Advanced / Rarely Used
     3) Projects (Speed Reading Helper → Typing Tutor → Tempitera)
   Edit any DATA array below to add/change/reorder checkpoints.
   ========================================================================= */

const BADGE_TYPES = {
    tool: { label: "TOOL", color: "#6b6b5f" },
    concept: { label: "CONCEPT", color: "#4c5f52" },
    page: { label: "PAGE", color: "#1b3b2c" },
    component: { label: "COMPONENT", color: "#1b3b2c" },
    card: { label: "CARD", color: "#c1602e" },
    button: { label: "BUTTON", color: "#d8a13b" },
    link: { label: "LINK", color: "#8a6d3b" },
    form: { label: "FORM", color: "#c1602e" },
    api: { label: "API", color: "#2f5d8a" },
    map: { label: "MAP", color: "#2f5d8a" },
    data: { label: "DATA", color: "#6b6b5f" },
    logic: { label: "LOGIC", color: "#8a3b3b" },
    design: { label: "DESIGN", color: "#c1602e" },
    hook: { label: "HOOK", color: "#2f5d8a" },
    deploy: { label: "DEPLOY", color: "#1b3b2c" },
    backend: { label: "BACKEND", color: "#2f5d8a" },
    testing: { label: "TESTING", color: "#6b6b5f" },
    practice: { label: "PRACTICE", color: "#8a6d3b" },
    deferred: { label: "LATER", color: "#9a9a90" },
    stretch: { label: "STRETCH", color: "#9a9a90" },
    research: { label: "RESEARCH", color: "#8a6d3b" },
    carousel: { label: "CAROUSEL", color: "#c1602e" },
    problem: { label: "PROBLEM", color: "#8a3b3b" },
};

function badgeHtml(type) {
    const b = BADGE_TYPES[type] || BADGE_TYPES.concept;
    return `<span class="badge" style="--badge-color:${b.color}">${b.label}</span>`;
}

/* =========================================================================
   TAB 1 — DSA + C++ (60 Days)
   ========================================================================= */
const DATA_DSA = [
  {
    id: "dsa-c1", phaseLabel: "Days 1–3",
    title: "Foundations — Complexity & C++ STL",
    subtitle: "Before patterns, get comfortable with your tools and how to reason about speed.",
    items: [
      { type: "concept", text: "Big-O — time & space complexity. Understand best/average/worst case, and why O(n log n) beats O(n²) at scale. Rank a few code snippets by growth rate on paper before touching any problems." },
      { type: "concept", text: "Master the core C++ STL — vector, pair, string, sort() with custom comparators, and the <algorithm> header (min, max, swap, reverse, accumulate). This is your daily toolkit from here on." },
      { type: "concept", text: "STL containers you'll reuse constantly — unordered_map, unordered_set, map, set, stack, queue, deque, priority_queue. Know the Big-O of insert/erase/find for each, not just the syntax." },
      { type: "problem", text: "LeetCode 1 — Two Sum (Easy)" },
      { type: "problem", text: "LeetCode 448 — Find All Numbers Disappeared in an Array (Easy)" },
      { type: "problem", text: "InterviewBit — 'Time Complexity' primer set (Easy)" },
    ],
  },
  {
    id: "dsa-c2", phaseLabel: "Days 4–7",
    title: "Arrays & Two Pointers",
    subtitle: "The pattern almost every array problem eventually reduces to.",
    items: [
      { type: "concept", text: "Two-pointer pattern — opposite-end pointers for sorted arrays, same-direction pointers for in-place compaction." },
      { type: "concept", text: "Prefix sums — precompute cumulative sums so range-sum queries become O(1)." },
      { type: "problem", text: "LeetCode 26 — Remove Duplicates from Sorted Array (Easy)" },
      { type: "problem", text: "LeetCode 283 — Move Zeroes (Easy)" },
      { type: "problem", text: "LeetCode 167 — Two Sum II, Sorted Array (Medium)" },
      { type: "problem", text: "LeetCode 15 — 3Sum (Medium)" },
      { type: "problem", text: "LeetCode 11 — Container With Most Water (Medium)" },
      { type: "problem", text: "LeetCode 42 — Trapping Rain Water (Hard, stretch if time-tight)" },
    ],
  },
  {
    id: "dsa-c3", phaseLabel: "Days 8–10",
    title: "Sliding Window",
    subtitle: "Two pointers' cousin — for 'longest/shortest subarray/substring that...' problems.",
    items: [
      { type: "concept", text: "Fixed-size vs variable-size windows — know when to grow, when to shrink, and what you're tracking inside the window (a set, a map, a running sum)." },
      { type: "problem", text: "LeetCode 3 — Longest Substring Without Repeating Characters (Medium)" },
      { type: "problem", text: "LeetCode 209 — Minimum Size Subarray Sum (Medium)" },
      { type: "problem", text: "LeetCode 424 — Longest Repeating Character Replacement (Medium)" },
      { type: "problem", text: "LeetCode 76 — Minimum Window Substring (Hard, stretch)" },
    ],
  },
  {
    id: "dsa-c4", phaseLabel: "Days 11–13",
    title: "Binary Search",
    subtitle: "Not just 'find X in a sorted array' — also 'binary search on the answer'.",
    items: [
      { type: "concept", text: "The binary search invariant — keep the loop condition and mid-update consistent so you never infinite-loop or off-by-one. Learn lower_bound/upper_bound from <algorithm>." },
      { type: "problem", text: "LeetCode 704 — Binary Search (Easy)" },
      { type: "problem", text: "LeetCode 33 — Search in Rotated Sorted Array (Medium)" },
      { type: "problem", text: "LeetCode 153 — Find Minimum in Rotated Sorted Array (Medium)" },
      { type: "problem", text: "LeetCode 74 — Search a 2D Matrix (Medium)" },
      { type: "problem", text: "LeetCode 875 — Koko Eating Bananas (Medium, binary search on the answer)" },
    ],
  },
  {
    id: "dsa-c5", phaseLabel: "Days 14–16",
    title: "Strings & Hashing",
    subtitle: "Hashing is the single highest-leverage tool in interview DSA.",
    items: [
      { type: "concept", text: "Hashing fundamentals — how unordered_map/unordered_set give O(1) average lookups, and when hashing beats sorting." },
      { type: "problem", text: "LeetCode 242 — Valid Anagram (Easy)" },
      { type: "problem", text: "LeetCode 49 — Group Anagrams (Medium)" },
      { type: "problem", text: "LeetCode 5 — Longest Palindromic Substring (Medium)" },
      { type: "problem", text: "InterviewBit — 'Hashing' problem set (Easy–Medium)" },
    ],
  },
  {
    id: "dsa-c6", phaseLabel: "Days 17–19",
    title: "Linked Lists",
    subtitle: "Pointer manipulation without an array's safety net.",
    items: [
      { type: "concept", text: "Singly vs doubly linked lists, the fast/slow pointer trick (Floyd's cycle detection), and the dummy-head-node trick for cleaner edge cases." },
      { type: "problem", text: "LeetCode 206 — Reverse Linked List (Easy)" },
      { type: "problem", text: "LeetCode 141 — Linked List Cycle (Easy)" },
      { type: "problem", text: "LeetCode 21 — Merge Two Sorted Lists (Easy)" },
      { type: "problem", text: "LeetCode 19 — Remove Nth Node From End of List (Medium)" },
      { type: "problem", text: "LeetCode 143 — Reorder List (Medium)" },
      { type: "problem", text: "LeetCode 138 — Copy List with Random Pointer (Medium)" },
    ],
  },
  {
    id: "dsa-c7", phaseLabel: "Days 20–22",
    title: "Stacks & Queues",
    subtitle: "LIFO/FIFO thinking, plus the monotonic stack pattern.",
    items: [
      { type: "concept", text: "The monotonic stack pattern — keep the stack increasing or decreasing to answer 'next greater/smaller element' style questions in O(n)." },
      { type: "problem", text: "LeetCode 20 — Valid Parentheses (Easy)" },
      { type: "problem", text: "LeetCode 232 — Implement Queue using Stacks (Easy)" },
      { type: "problem", text: "LeetCode 155 — Min Stack (Medium)" },
      { type: "problem", text: "LeetCode 739 — Daily Temperatures (Medium)" },
      { type: "problem", text: "LeetCode 224 — Basic Calculator (Hard, stretch)" },
    ],
  },
  {
    id: "dsa-c8", phaseLabel: "Days 23–26",
    title: "Recursion & Backtracking",
    subtitle: "The pattern behind most 'generate all...' interview questions.",
    items: [
      { type: "concept", text: "Think in terms of the recursion tree / state space — choose, explore, un-choose. Base-case discipline is the #1 source of bugs here." },
      { type: "problem", text: "LeetCode 78 — Subsets (Medium)" },
      { type: "problem", text: "LeetCode 46 — Permutations (Medium)" },
      { type: "problem", text: "LeetCode 39 — Combination Sum (Medium)" },
      { type: "problem", text: "LeetCode 22 — Generate Parentheses (Medium)" },
      { type: "problem", text: "LeetCode 79 — Word Search (Medium)" },
      { type: "problem", text: "LeetCode 51 — N-Queens (Hard, stretch)" },
    ],
  },
  {
    id: "dsa-c9", phaseLabel: "Days 27–31",
    title: "Trees",
    subtitle: "DFS and BFS on trees — the base every graph problem later builds on.",
    items: [
      { type: "concept", text: "Pre/in/post-order DFS (recursive and iterative), plus level-order BFS with a queue. Know when each is the natural fit." },
      { type: "problem", text: "LeetCode 104 — Maximum Depth of Binary Tree (Easy)" },
      { type: "problem", text: "LeetCode 226 — Invert Binary Tree (Easy)" },
      { type: "problem", text: "LeetCode 102 — Binary Tree Level Order Traversal (Medium)" },
      { type: "problem", text: "LeetCode 105 — Construct Binary Tree from Preorder & Inorder (Medium)" },
      { type: "problem", text: "LeetCode 236 — Lowest Common Ancestor of a Binary Tree (Medium)" },
      { type: "problem", text: "LeetCode 124 — Binary Tree Maximum Path Sum (Hard, stretch)" },
    ],
  },
  {
    id: "dsa-c10", phaseLabel: "Days 32–35",
    title: "BST & Heaps",
    subtitle: "Ordered trees, plus priority_queue for anything 'top-K' or 'kth'.",
    items: [
      { type: "concept", text: "BST invariant (left < node < right) and how it turns into O(log n) search/insert. Then priority_queue in C++ — how the max-heap default works and how to flip it to a min-heap." },
      { type: "problem", text: "LeetCode 98 — Validate Binary Search Tree (Medium)" },
      { type: "problem", text: "LeetCode 230 — Kth Smallest Element in a BST (Medium)" },
      { type: "problem", text: "LeetCode 215 — Kth Largest Element in an Array (Medium, heap)" },
      { type: "problem", text: "LeetCode 347 — Top K Frequent Elements (Medium)" },
      { type: "problem", text: "LeetCode 23 — Merge k Sorted Lists (Hard)" },
      { type: "problem", text: "LeetCode 295 — Find Median from Data Stream (Hard, stretch)" },
    ],
  },
  {
    id: "dsa-c11", phaseLabel: "Days 36–40",
    title: "Graphs — BFS/DFS",
    subtitle: "Adjacency lists, visited sets, and grids-as-graphs.",
    items: [
      { type: "concept", text: "Build an adjacency list from edges, track a visited set, and recognize when a grid problem is secretly a graph problem." },
      { type: "problem", text: "LeetCode 200 — Number of Islands (Medium)" },
      { type: "problem", text: "LeetCode 133 — Clone Graph (Medium)" },
      { type: "problem", text: "LeetCode 994 — Rotting Oranges (Medium)" },
      { type: "problem", text: "LeetCode 207 — Course Schedule (Medium, topological sort intro)" },
      { type: "problem", text: "LeetCode 417 — Pacific Atlantic Water Flow (Medium)" },
    ],
  },
  {
    id: "dsa-c12", phaseLabel: "Days 41–44",
    title: "Graphs — Union-Find, MST, Dijkstra",
    subtitle: "The graph toolkit that shows up in 'connect', 'shortest path', and 'minimum cost' problems.",
    items: [
      { type: "concept", text: "Union-Find / DSU with path compression and union by rank — near-O(1) 'are these connected' queries." },
      { type: "concept", text: "Minimum Spanning Tree intuition (Prim's/Kruskal's) and Dijkstra's shortest path with a min-heap." },
      { type: "problem", text: "LeetCode 323 — Number of Connected Components in an Undirected Graph (Medium)" },
      { type: "problem", text: "LeetCode 1584 — Min Cost to Connect All Points (Medium, MST)" },
      { type: "problem", text: "LeetCode 743 — Network Delay Time (Medium, Dijkstra)" },
      { type: "problem", text: "LeetCode 787 — Cheapest Flights Within K Stops (Medium)" },
    ],
  },
  {
    id: "dsa-c13", phaseLabel: "Days 45–48",
    title: "Dynamic Programming — 1D",
    subtitle: "Recognizing overlapping subproblems, then memoizing or tabulating them.",
    items: [
      { type: "concept", text: "Memoization (top-down, recursion + cache) vs tabulation (bottom-up, table). Start every DP problem by writing the brute-force recursion first." },
      { type: "problem", text: "LeetCode 70 — Climbing Stairs (Easy)" },
      { type: "problem", text: "LeetCode 198 — House Robber (Medium)" },
      { type: "problem", text: "LeetCode 322 — Coin Change (Medium)" },
      { type: "problem", text: "LeetCode 300 — Longest Increasing Subsequence (Medium)" },
      { type: "problem", text: "LeetCode 91 — Decode Ways (Medium)" },
    ],
  },
  {
    id: "dsa-c14", phaseLabel: "Days 49–53",
    title: "Dynamic Programming — 2D",
    subtitle: "Grid DP and DP across two strings — the interview favorites.",
    items: [
      { type: "concept", text: "Set up the 2D table, get the base row/column right, and practice reading the recurrence off a small example by hand before coding." },
      { type: "problem", text: "LeetCode 62 — Unique Paths (Medium)" },
      { type: "problem", text: "LeetCode 64 — Minimum Path Sum (Medium)" },
      { type: "problem", text: "LeetCode 1143 — Longest Common Subsequence (Medium)" },
      { type: "problem", text: "LeetCode 72 — Edit Distance (Medium)" },
      { type: "problem", text: "LeetCode 416 — Partition Equal Subset Sum (Medium, knapsack)" },
      { type: "problem", text: "LeetCode 312 — Burst Balloons (Hard, stretch)" },
    ],
  },
  {
    id: "dsa-c15", phaseLabel: "Days 54–56",
    title: "Greedy & Intervals",
    subtitle: "Knowing *why* greedy is provably correct here — not just that it works.",
    items: [
      { type: "concept", text: "The exchange-argument mental model for why a greedy choice is safe, plus the standard 'sort by end time' trick for interval problems." },
      { type: "problem", text: "LeetCode 56 — Merge Intervals (Medium)" },
      { type: "problem", text: "LeetCode 435 — Non-overlapping Intervals (Medium)" },
      { type: "problem", text: "LeetCode 55 — Jump Game (Medium)" },
      { type: "problem", text: "LeetCode 452 — Minimum Number of Arrows to Burst Balloons (Medium)" },
      { type: "problem", text: "LeetCode 621 — Task Scheduler (Medium)" },
    ],
  },
  {
    id: "dsa-c16", phaseLabel: "Days 57–58",
    title: "Bit Manipulation & Math",
    subtitle: "A small, high-ROI category — a handful of tricks cover most of it.",
    items: [
      { type: "concept", text: "XOR tricks (a^a=0, a^0=a), how to check/set/clear a bit, and why bit masks show up in subset/state-compression problems." },
      { type: "problem", text: "LeetCode 191 — Number of 1 Bits (Easy)" },
      { type: "problem", text: "LeetCode 136 — Single Number (Easy)" },
      { type: "problem", text: "LeetCode 371 — Sum of Two Integers (Medium)" },
      { type: "problem", text: "LeetCode 50 — Pow(x, n) (Medium)" },
      { type: "problem", text: "LeetCode 202 — Happy Number (Easy)" },
    ],
  },
  {
    id: "dsa-c17", phaseLabel: "Days 59–60",
    title: "Mock Interviews & Review",
    subtitle: "The point of the last two days is retrieval, not new material.",
    items: [
      { type: "practice", text: "Run 2 timed mock interviews (Pramp, or InterviewBit's mock system), 45 minutes each, mixed random topics." },
      { type: "practice", text: "Redo every problem you struggled with — from memory, no notes, no looking at your old solution first." },
      { type: "practice", text: "Write your own one-page cheat sheet covering all 16 patterns above — the act of writing it is the real review." },
      { type: "practice", text: "Pick your 5 hardest solved problems and explain the approach out loud in under 2 minutes each — this is what interview polish actually is." },
    ],
  },
];

/* =========================================================================
   TAB 2 — DSA · Advanced / Rarely Used
   For after the 60-day core track. Not typical junior-interview material —
   this is "know it exists, can pick it up fast if asked" territory.
   ========================================================================= */
const DATA_DSA_ADVANCED = [
  {
    id: "adv-c1", phaseLabel: "Trees & Range Queries",
    title: "Advanced Trees — Segment Trees, BIT, Tries",
    subtitle: "For 'range query + updates' problems that a plain array can't handle fast enough.",
    items: [
      { type: "concept", text: "Segment Tree — build/update/query for range sum/min/max in O(log n) per operation." },
      { type: "concept", text: "Fenwick Tree / Binary Indexed Tree — a simpler, smaller alternative to segment trees for prefix-sum-style queries." },
      { type: "concept", text: "Lazy propagation — apply range updates on a segment tree without degrading to O(n) per update." },
      { type: "concept", text: "XOR Tries — trie over bit representations, used for 'maximum XOR pair/subarray' problems." },
      { type: "problem", text: "LeetCode 307 — Range Sum Query, Mutable (Medium, BIT/segment tree)" },
      { type: "problem", text: "LeetCode 315 — Count of Smaller Numbers After Self (Hard, BIT)" },
      { type: "problem", text: "LeetCode 1707 — Maximum XOR With an Element From Array (Hard, XOR trie)" },
    ],
  },
  {
    id: "adv-c2", phaseLabel: "Graph Theory",
    title: "Advanced Graphs",
    subtitle: "Beyond BFS/DFS/Dijkstra — the algorithms that show up when the basic ones don't apply.",
    items: [
      { type: "concept", text: "Bellman-Ford — handles negative edge weights and detects negative cycles, where Dijkstra can't." },
      { type: "concept", text: "Floyd-Warshall — all-pairs shortest paths in O(V³), simple to code, fine for small graphs." },
      { type: "concept", text: "Tarjan's & Kosaraju's algorithms — finding strongly connected components." },
      { type: "concept", text: "Articulation points & bridges — Tarjan's low-link technique for finding critical nodes/edges." },
      { type: "concept", text: "Max-Flow Min-Cut — Ford-Fulkerson / Edmonds-Karp, and bipartite matching framed as a flow problem." },
      { type: "concept", text: "Eulerian path/circuit — Hierholzer's algorithm." },
      { type: "problem", text: "LeetCode 1192 — Critical Connections in a Network (Hard, bridges)" },
      { type: "problem", text: "LeetCode 785 — Is Graph Bipartite? (Medium)" },
      { type: "problem", text: "LeetCode 787 — Cheapest Flights Within K Stops (redo through a Bellman-Ford lens)" },
    ],
  },
  {
    id: "adv-c3", phaseLabel: "Dynamic Programming",
    title: "Advanced DP",
    subtitle: "DP that goes beyond a simple 1D/2D table.",
    items: [
      { type: "concept", text: "Bitmask DP — DP over subsets, the classic technique behind Travelling-Salesman-style problems." },
      { type: "concept", text: "Digit DP — counting numbers with a digit-property within a range." },
      { type: "concept", text: "DP on Trees — subtree aggregation, plus the 'rerooting' technique for whole-tree answers." },
      { type: "concept", text: "Matrix exponentiation — compute the nth term of a linear recurrence in O(log n)." },
      { type: "problem", text: "LeetCode 464 — Can I Win (Medium, bitmask)" },
      { type: "problem", text: "LeetCode 1723 — Find Minimum Time to Finish All Jobs (Hard, bitmask)" },
      { type: "problem", text: "Codeforces — search 'digit DP' problem set and solve 3 (Medium–Hard)" },
    ],
  },
  {
    id: "adv-c4", phaseLabel: "Strings",
    title: "Advanced String Algorithms",
    subtitle: "Linear-time pattern matching, well past 'use .find()'.",
    items: [
      { type: "concept", text: "KMP (Knuth-Morris-Pratt) — O(n+m) pattern matching using a precomputed failure function." },
      { type: "concept", text: "Z-function — a linear-time alternative to KMP for string matching." },
      { type: "concept", text: "Manacher's Algorithm — find all palindromic substrings in O(n)." },
      { type: "concept", text: "Suffix Array & Suffix Automaton — substring queries at scale." },
      { type: "concept", text: "Aho-Corasick — multi-pattern matching in one pass (spam filters, word-block lists)." },
      { type: "problem", text: "LeetCode 28 — Find the Index of the First Occurrence (redo with KMP, Easy)" },
      { type: "problem", text: "LeetCode 214 — Shortest Palindrome (Hard, KMP/Manacher)" },
      { type: "problem", text: "LeetCode 1044 — Longest Duplicate Substring (Hard, suffix array)" },
    ],
  },
  {
    id: "adv-c5", phaseLabel: "Math & Number Theory",
    title: "Advanced Math",
    subtitle: "The competitive-math toolkit that occasionally leaks into 'hard' interview rounds.",
    items: [
      { type: "concept", text: "Modular exponentiation & modular inverse — fast power under a mod, used constantly in combinatorics-under-mod problems." },
      { type: "concept", text: "Sieve of Eratosthenes variants — segmented sieve, smallest-prime-factor sieve." },
      { type: "concept", text: "Extended Euclidean Algorithm — GCD plus Bezout coefficients." },
      { type: "concept", text: "Combinatorics under a mod — nCr via precomputed factorials + modular inverse." },
      { type: "problem", text: "LeetCode 204 — Count Primes (Medium, sieve)" },
      { type: "problem", text: "LeetCode 50 — Pow(x, n) (redo through a modular-exponentiation lens)" },
    ],
  },
  {
    id: "adv-c6", phaseLabel: "Rarely Asked",
    title: "Rare But Real — Sqrt Decomposition, Mo's, Persistence",
    subtitle: "Mostly competitive-programming territory. Know it exists; don't drill it daily.",
    items: [
      { type: "concept", text: "Sqrt Decomposition — bucket-based range queries when a segment tree feels like overkill." },
      { type: "concept", text: "Mo's Algorithm — offline query reordering for O((n+q)√n) range queries." },
      { type: "concept", text: "Heavy-Light Decomposition — path queries on trees in O(log² n)." },
      { type: "concept", text: "Persistent Data Structures — versioned segment trees/tries for 'time travel' queries." },
      { type: "concept", text: "Treaps & randomized BSTs — balanced trees via random priorities, useful for order-statistics." },
      { type: "practice", text: "These almost never show up outside FAANG-hard rounds or competitive programming — this camp is reference material, not a drilling target." },
    ],
  },
];

/* =========================================================================
   TAB 3 — Projects (in build order)
   Speed Reading Helper → Typing Tutor → Tempitera
   Each project is tiered MVP → V1 → Advanced. The Advanced tier of each
   is written so that checking off every item = the exact resume bullets.
   ========================================================================= */
const DATA_PROJECTS = [
  /* ---------------- PROJECT 1: Speed Reading Helper ---------------- */
  {
    id: "proj-a1", phaseLabel: "Project 1 · MVP",
    title: "Speed Reading Helper — MVP (Vanilla JS)",
    subtitle: "Build this right after your Promises/async-JS module — that's the whole point of this project.",
    items: [
      { type: "concept", text: "Understand RSVP (Rapid Serial Visual Presentation) — showing one word at a time is the entire mechanism behind speed-reading apps." },
      { type: "api", text: "fetch() a public-domain book — pull plaintext from the Project Gutenberg API and split it into a word array." },
      { type: "logic", text: "Build the word-display loop — a setInterval or Promise-based delay loop that advances one word at a time, timed from the chosen WPM." },
      { type: "form", text: "Add a WPM (words-per-minute) slider — recompute the per-word delay whenever it changes." },
      { type: "button", text: "Play / Pause / Restart controls." },
      { type: "practice", text: "Ship it as a single index.html + script.js — no build tools needed yet." },
    ],
  },
  {
    id: "proj-a2", phaseLabel: "Project 1 · V1",
    title: "Speed Reading Helper — V1 (React + Tailwind)",
    subtitle: "The resume-ready version: React.js, Tailwind CSS, Public Web APIs.",
    items: [
      { type: "component", text: "Rebuild the reader as a React component — word state via useState, timing via useEffect." },
      { type: "design", text: "Style with Tailwind CSS — a clean, minimal, reading-focused UI." },
      { type: "data", text: "Add a small library of books — a dropdown of a few pre-fetched Gutenberg titles instead of one hardcoded book." },
      { type: "component", text: "Build a reading-metrics dashboard — words read this session and estimated time saved vs. normal reading speed, in a simple responsive layout." },
      { type: "deploy", text: "Deploy to Vercel and drop the live link + resume bullet in: 'Architected an interactive speed-reading application... using the native fetch API to dynamically retrieve and parse classic literature files on the fly.'" },
    ],
  },
  {
    id: "proj-a3", phaseLabel: "Project 1 · Advanced",
    title: "Speed Reading Helper — Stretch Goals",
    subtitle: "Optional — only if you want to push this past resume-ready.",
    items: [
      { type: "stretch", text: "Persist reading history — localStorage (or a light backend) to remember books read and average WPM over time." },
      { type: "stretch", text: "Add a comprehension check — a 2-question quiz after each passage, proving RSVP isn't hurting retention." },
      { type: "stretch", text: "Support user-pasted text — not just Gutenberg books, so it works as a general read-faster tool." },
    ],
  },

  /* ---------------- PROJECT 2: Typing Tutor ---------------- */
  {
    id: "proj-b1", phaseLabel: "Project 2 · MVP",
    title: "Typing Tutor — MVP (React + Vite + LocalStorage)",
    subtitle: "Build once you hit the React section. This tier alone is already resume-ready.",
    items: [
      { type: "component", text: "Build the typing engine — track keystrokes with onKeyDown, compare against a target string character by character." },
      { type: "logic", text: "Calculate WPM & accuracy live — pure JS math, recalculated on every keystroke or a timer tick." },
      { type: "design", text: "Highlight correct/incorrect characters in real time — the core visual feedback loop of any typing test." },
      { type: "data", text: "Persist high scores with localStorage.setItem() / getItem() — no backend yet." },
      { type: "hook", text: "Use React hooks to prevent UI lag during high-frequency keystroke events — this is the 'optimized component rendering' line on your resume." },
      { type: "deploy", text: "Deploy to Vercel." },
    ],
  },
  {
    id: "proj-b2", phaseLabel: "Project 2 · V1",
    title: "Typing Tutor — V1 (Add a Real Backend, MERN)",
    subtitle: "Move high scores off the browser and onto a server you control.",
    items: [
      { type: "backend", text: "Stand up a Node.js/Express server — routes to save a score and fetch leaderboard/history." },
      { type: "data", text: "Add MongoDB — store scores, mistake history, and per-user progression as documents instead of localStorage." },
      { type: "api", text: "Wire the React frontend to your Express API — replace localStorage calls with fetch() calls to your own backend." },
      { type: "concept", text: "Handle loading/error states for every network call — same discipline as any real API integration." },
    ],
  },
  {
    id: "proj-b3", phaseLabel: "Project 2 · Advanced",
    title: "Typing Tutor — Advanced (Zero-Login Cross-Device Sync)",
    subtitle: "The exact final resume version: full MERN stack, zero-login signup via a personal sync code.",
    items: [
      { type: "logic", text: "Design a 'sync code' system — a short random code per user (no email/password) that maps to their saved data in MongoDB." },
      { type: "form", text: "Build the 'restore my progress' flow — enter your sync code on a new device and pull your history back down." },
      { type: "logic", text: "Add progressive difficulty — harder word sets / punctuation / numbers as WPM and accuracy improve." },
      { type: "deploy", text: "Deploy frontend on Vercel, backend on Railway — matches the final resume deploy line exactly." },
      { type: "practice", text: "Lock in the resume bullet: 'Built full MERN-stack typing-practice application with zero-login signup via personal sync code for cross-device state sync... Developed core typing engine: keyboard input handling, WPM/accuracy calculation, mistake tracking, progressive difficulty; deployed on Vercel (frontend) and Railway (backend).'" },
    ],
  },

  /* ---------------- PROJECT 3: Tempitera ---------------- */
  {
    id: "proj-c1", phaseLabel: "Project 3 · MVP",
    title: "Tempitera — MVP (Static Site, No Backend)",
    subtitle: "Every button, card, page and map marker, built in the order a real product team would — no backend yet.",
    items: [
      { type: "tool", text: "Set up tools — VS Code, Live Server, Git/GitHub, and a clean project folder structure." },
      { type: "page", text: "Build the HTML skeleton — head, hero, nav, first button, validated against the W3C validator." },
      { type: "design", text: "Style with CSS fundamentals — box model, CSS variables for your forest/cream/terracotta palette, Google Fonts, a Flexbox navbar, Grid card layout, mobile-first media queries." },
      { type: "component", text: "Build core components — Navbar, Hero with search bar, Destination Card, Footer." },
      { type: "concept", text: "Learn JS fundamentals — variables/arrays/objects/functions, DOM selection, events; wire up the mobile nav toggle and the search form." },
      { type: "data", text: "Model destinations as data — data/destinations.json for 15–20 real Indian destinations, loaded with fetch() and rendered with .map()." },
      { type: "api", text: "Integrate a free weather API (Open-Meteo) — with loading/error states, merged into destination cards." },
      { type: "logic", text: "Build the calendar-and-weather matching logic — a date-range-overlap function, a match-score badge, sorted results." },
      { type: "map", text: "Add a Leaflet map — centered on India, one marker per destination, popups styled to match your palette." },
      { type: "page", text: "Build the multi-page site — explore.html, destination.html, wired navigation, a scroll-snap carousel." },
      { type: "data", text: "Add light user-awareness with localStorage — remember search preferences across visits, no login yet." },
      { type: "testing", text: "Polish pass — loading/empty states, basic accessibility, real-phone testing, image compression." },
      { type: "deploy", text: "Ship it — GitHub → Vercel/Netlify, a full click-through test, share with 5 real people." },
    ],
  },
  {
    id: "proj-c2", phaseLabel: "Project 3 · V1",
    title: "Tempitera — V1 (React Migration + Real Accounts)",
    subtitle: "Only once the plain-JS version genuinely works end to end.",
    items: [
      { type: "concept", text: "Understand why a framework helps now — the repeated navbar/footer/card markup across files is exactly the pain React solves." },
      { type: "hook", text: "Learn hooks — useState and useEffect as the React version of your existing localStorage/fetch patterns." },
      { type: "component", text: "Migrate Navbar and Destination Card into real React components first — the most-repeated, best-understood pieces." },
      { type: "backend", text: "Stand up Node.js/Express — your first real backend, separate from the static frontend." },
      { type: "form", text: "Build sign-up / log-in — email + password to start." },
      { type: "data", text: "Move preferences & saved trips into a real database — replacing the MVP-tier localStorage version." },
      { type: "api", text: "Add real Google Calendar sync — OAuth into free/busy blocks, feeding your matching logic instead of manual date pickers." },
    ],
  },
  {
    id: "proj-c3", phaseLabel: "Project 3 · Advanced",
    title: "Tempitera — Advanced (Production Full-Stack)",
    subtitle: "The exact final resume version — every item below is one checkable engineering decision.",
    items: [
      { type: "design", text: "Rebuild the frontend on Vite + Tailwind CSS — keep Leaflet maps, add Recharts for data visualizations. (→ 'React + Vite + Tailwind CSS frontend with Leaflet maps and Recharts visualizations')" },
      { type: "data", text: "Move to PostgreSQL with a real relational schema — tables for destinations, users, and ratings with foreign keys and proper indexes." },
      { type: "logic", text: "Run EXPLAIN ANALYZE on your slow queries — find at least one query you can measurably speed up with an index. This is the step that makes 'optimized query performance' true, not just written." },
      { type: "logic", text: "Build custom JWT authentication — access + refresh token rotation, bcrypt password hashing, no third-party auth provider (no Auth0/Firebase Auth)." },
      { type: "backend", text: "Add a Redis caching layer — cache your highest-traffic endpoints (destination list, weather) with TTL-based invalidation." },
      { type: "backend", text: "Add centralized error-handling middleware — one Express error handler instead of scattered try/catch, plus structured request logging for observability." },
      { type: "logic", text: "Move business logic to the backend — the 'why this recommendation' matching/scoring logic moves server-side into a dedicated service; the frontend just displays results." },
      { type: "deploy", text: "Deploy frontend on Vercel, backend on Railway — with live traffic, matching your final resume deploy line exactly." },
      { type: "practice", text: "Lock in the final resume block — once every item above is checked, your Tempitera bullets are accurate word-for-word, not aspirational." },
    ],
  },
];

/* =========================================================================
   TAB CONFIG
   ========================================================================= */
const TABS = [
  {
    id: "dsa",
    navLabel: "DSA + C++",
    icon: "🧮",
    storageKey: "dsa-60-day-v1",
    data: DATA_DSA,
    hero: {
      eyebrow: "Track 1 · 60 Days",
      title: "DSA + C++ — Beginner to Interview-Ready",
      lede: "You know C++ syntax but haven't really done DSA yet — so this starts from complexity analysis and the STL, and moves pattern by pattern through everything a junior-role interview will realistically ask. Each camp below is a <em>pattern</em> — finish every checkpoint in it and it's marked complete on the trail.",
    },
  },
  {
    id: "dsa-adv",
    navLabel: "DSA — Advanced",
    icon: "🚀",
    storageKey: "dsa-advanced-v1",
    data: DATA_DSA_ADVANCED,
    hero: {
      eyebrow: "Track 2 · After the 60 Days",
      title: "DSA — Advanced & Rarely Used",
      lede: "Segment trees, advanced graph algorithms, bitmask/digit DP, string algorithms, number theory, and the genuinely rare stuff. Most junior interviews never touch this — treat it as a reference shelf you can pull from fast, not a daily grind.",
    },
  },
  {
    id: "projects",
    navLabel: "Projects",
    icon: "🛠️",
    storageKey: "projects-track-v1",
    data: DATA_PROJECTS,
    hero: {
      eyebrow: "Track 3 · Build Order",
      title: "Projects — Speed Reading Helper → Typing Tutor → Tempitera",
      lede: "Each project is tiered <strong>MVP → V1 → Advanced</strong>. The Advanced tier of each is written so that checking off every item gets you to the exact resume bullet next to it — build in order, don't skip tiers.",
    },
  },
];

const STATE = {
  activeTabId: TABS[0].id,
  checked: {}, // tabId -> Set of "campId::itemIndex"
};

TABS.forEach((tab) => {
  STATE.checked[tab.id] = loadChecked(tab.storageKey);
});

function loadChecked(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (e) {
    return new Set();
  }
}
function saveChecked(storageKey, set) {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...set]));
  } catch (e) {
    /* storage unavailable — progress just won't persist */
  }
}
function itemKey(campId, idx) {
  return `${campId}::${idx}`;
}
function activeTab() {
  return TABS.find((t) => t.id === STATE.activeTabId);
}
function tabProgress(tab) {
  let total = 0, done = 0;
  const checked = STATE.checked[tab.id];
  tab.data.forEach((camp) => {
    camp.items.forEach((_, idx) => {
      total++;
      if (checked.has(itemKey(camp.id, idx))) done++;
    });
  });
  return { done, total };
}

/* ---------------- render: tab switcher ---------------- */
function renderTabSwitcher() {
  const el = document.getElementById("tabSwitcher");
  el.innerHTML = TABS.map((tab) => {
    const { done, total } = tabProgress(tab);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const active = tab.id === STATE.activeTabId ? "active" : "";
    return `
      <button class="tab-btn ${active}" data-tab="${tab.id}">
        <span class="tab-btn-icon">${tab.icon}</span>
        <span>${tab.navLabel}</span>
        <span class="tab-btn-pct">${pct}%</span>
      </button>`;
  }).join("");
  el.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      STATE.activeTabId = btn.dataset.tab;
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* ---------------- render: hero ---------------- */
function renderHero() {
  const tab = activeTab();
  document.getElementById("hero").innerHTML = `
    <p class="eyebrow">${tab.hero.eyebrow}</p>
    <h1>${tab.hero.title}</h1>
    <p class="hero-lede">${tab.hero.lede}</p>
  `;
  document.getElementById("trailSub").textContent = tab.navLabel;
}

/* ---------------- render: sidebar nav ---------------- */
function renderTrailNav() {
  const tab = activeTab();
  const checked = STATE.checked[tab.id];
  const el = document.getElementById("trailNav");
  el.innerHTML = tab.data.map((camp, i) => {
    const total = camp.items.length;
    const done = camp.items.filter((_, idx) => checked.has(itemKey(camp.id, idx))).length;
    const complete = done === total;
    return `
      <a href="#${camp.id}" class="trail-stop ${complete ? "complete" : ""}" data-camp="${camp.id}">
        <span class="trail-dot">${complete ? "✓" : i + 1}</span>
        <span class="trail-stop-label">
          <span class="trail-stop-title">${camp.title}</span>
          <span class="trail-stop-count">${camp.phaseLabel} · ${done}/${total}</span>
        </span>
      </a>`;
  }).join("");
}

/* ---------------- render: camps + items ---------------- */
function renderCamps() {
  const tab = activeTab();
  const checked = STATE.checked[tab.id];
  const el = document.getElementById("camps");
  el.innerHTML = tab.data.map((camp, i) => {
    const total = camp.items.length;
    const done = camp.items.filter((_, idx) => checked.has(itemKey(camp.id, idx))).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const itemsHtml = camp.items.map((item, idx) => {
      const key = itemKey(camp.id, idx);
      const isChecked = checked.has(key);
      return `
        <div class="task ${isChecked ? "done" : ""}" data-key="${key}">
          <span class="task-box"></span>
          <div class="task-body">
            <span class="task-text">${badgeHtml(item.type)}${item.text}</span>
          </div>
        </div>`;
    }).join("");
    return `
      <section class="camp" id="${camp.id}">
        <div class="camp-header">
          <div class="camp-marker">${done === total ? "✓" : i + 1}</div>
          <div class="camp-titles">
            <p class="camp-phase-tag">${camp.phaseLabel}</p>
            <h2>${camp.title}</h2>
            <p class="camp-subtitle">${camp.subtitle}</p>
          </div>
          <div class="camp-progress">
            <div class="camp-progress-count">${done}/${total}</div>
            <div class="camp-progress-bar"><div class="camp-progress-fill" style="width:${pct}%"></div></div>
          </div>
        </div>
        <div class="camp-items">${itemsHtml}</div>
      </section>`;
  }).join("");

  el.querySelectorAll(".task").forEach((row) => {
    row.addEventListener("click", () => toggleItem(row.dataset.key));
  });
}

/* ---------------- render: global progress bar ---------------- */
function renderGlobalProgress() {
  const tab = activeTab();
  const { done, total } = tabProgress(tab);
  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("globalProgressFill").style.width = pct + "%";
  document.getElementById("globalProgressText").textContent = `${done} / ${total} checkpoints · ${tab.navLabel}`;
}

/* ---------------- interactions ---------------- */
function toggleItem(key) {
  const tab = activeTab();
  const checked = STATE.checked[tab.id];
  if (checked.has(key)) checked.delete(key);
  else checked.add(key);
  saveChecked(tab.storageKey, checked);
  renderAll();
}

function resetCurrentTrack() {
  const tab = activeTab();
  if (!confirm(`Reset all progress on "${tab.navLabel}"? This can't be undone.`)) return;
  STATE.checked[tab.id] = new Set();
  saveChecked(tab.storageKey, STATE.checked[tab.id]);
  renderAll();
}

function renderAll() {
  renderTabSwitcher();
  renderHero();
  renderTrailNav();
  renderCamps();
  renderGlobalProgress();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  document.getElementById("resetBtn").addEventListener("click", resetCurrentTrack);
});
