/* =========================================================================
   BUILD TRAILS — multi-tab data + interactivity
   Four tracks, each with its own progress saved separately:
     1) DSA + C++ (60 Days)
     2) DSA — Advanced / Rarely Used
     3) Projects (Speed Reading Helper → Typing Tutor → Tempitera)
     4) Spiritual (Devanagari ⇄ Telugu script toggle)
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
      { type: "concept", text: "Set up the 2D table, get the base row/column right, and practice reading the recurrence off a small example by hand before coding." },      { type: "problem", text: "LeetCode 62 — Unique Paths (Medium)" },
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
   TAB 4 — Spiritual (Devanagari ⇄ Telugu script toggle)
   Same mantras, same pronunciation — only the script changes.
   ========================================================================= */
const DATA_SPIRITUAL = [
  {
    id: "sp-dakshinamurthy",
    titleEn: "Sri Dakshinamurthy Stotram",
    subEn: "Adi Shankaracharya — 10 verses",
    devanagari:
`विश्वं दर्पणदृश्यमाननगरीतुल्यं निजान्तर्गतं
पश्यन्नात्मनि मायया बहिरिवोद्भूतं यथा निद्रया ।
यः साक्षात्कुरुते प्रबोधसमये स्वात्मानमेवाद्वयं
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ १ ॥

बीजस्यान्तरिवाङ्कुरो जगदिदं प्राङ्निर्विकल्पं पुनः
मायाकल्पितदेशकालकलनावैचित्र्यचित्रीकृतम् ।
मायावीव विजृम्भयत्यपि महायोगीव यः स्वेच्छया
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ २ ॥

यस्यैव स्फुरणं सदात्मकमसत्कल्पार्थकं भासते
साक्षात्तत्त्वमसीति वेदवचसा यो बोधयत्याश्रितान् ।
यत्साक्षात्करणाद्भवेन्न पुनरावृत्तिर्भवाम्भोनिधौ
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ३ ॥

नानाच्छिद्रघटोदरस्थितमहादीपप्रभाभास्वरं
ज्ञानं यस्य तु चक्षुरादिकरणद्वारा बहिः स्पन्दते ।
जानामीति तमेव भान्तमनुभात्येतत्समस्तं जगत्
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ४ ॥

देहं प्राणमपीन्द्रियाण्यपि चलां बुद्धिं च शून्यं विदुः
स्त्रीबालान्धजडोपमास्त्वहमिति भ्रान्ता भृशं वादिनः ।
मायाशक्तिविलासकल्पितमहाव्यामोहसंहारिणे
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ५ ॥

राहुग्रस्तदिवाकरेन्दुसदृशो मायासमाच्छादनात्
सन्मात्रः करणोपसंहरणतो योऽभूत्सुषुप्तः पुमान् ।
प्रागस्वाप्समिति प्रबोधसमये यः प्रत्यभिज्ञायते
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ६ ॥

बाल्यादिष्वपि जाग्रदादिषु तथा सर्वास्ववस्थास्वपि
व्यावृत्तास्वनुवर्तमानमहमित्यन्तः स्फुरन्तं सदा ।
स्वात्मानं प्रकटीकरोति भजतां यो मुद्रया भद्रया
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ७ ॥

विश्वं पश्यति कार्यकारणतया स्वस्वामिसम्बन्धतः
शिष्याचार्यतया तथैव पितृपुत्राद्यात्मना भेदतः ।
स्वप्ने जाग्रति वा य एष पुरुषो मायापरिभ्रामितः
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ८ ॥

भूरम्भांस्यनलोऽनिलोऽम्बरमहर्नाथो हिमांशुः पुमान्
इत्याभाति चराचरात्मकमिदं यस्यैव मूर्त्यष्टकम् ।
नान्यत्किञ्चन विद्यते विमृशतां यस्मात्परस्माद्विभोः
तस्मै श्रीगुरुमूर्तये नम इदं श्रीदक्षिणामूर्तये ॥ ९ ॥

सर्वात्मत्वमिति स्फुटीकृतमिदं यस्मादमुष्मिन् स्तवे
तेनास्य श्रवणात्तदर्थमननाद्ध्यानाच्च सङ्कीर्तनात् ।
सर्वात्मत्वमहाविभूतिसहितं स्यादीश्वरत्वं स्वतः
सिद्ध्येत्तत्पुनरष्टधा परिणतं चैश्वर्यमव्याहतम् ॥ १० ॥`,
    telugu:
`విశ్వం దర్పణదృశ్యమాననగరీ తుల్యం నిజాంతర్గతం
పశ్యన్నాత్మని మాయయా బహిరివోద్భూతం యథా నిద్రయా ।
యః సాక్షాత్కురుతే ప్రబోధసమయే స్వాత్మానమేవాద్వయం
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౧ ॥

బీజస్యాంతరివాంకురో జగదిదం ప్రాఙ్నిర్వికల్పం పునః
మాయాకల్పితదేశకాలకలనావైచిత్ర్యచిత్రీకృతమ్ ।
మాయావీవ విజృంభయత్యపి మహాయోగీవ యః స్వేచ్ఛయా
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౨ ॥

యస్యైవ స్ఫురణం సదాత్మకమసత్కల్పార్థకం భాసతే
సాక్షాత్తత్త్వమసీతి వేదవచసా యో బోధయత్యాశ్రితాన్ ।
యత్సాక్షాత్కరణాద్భవేన్న పురనావృత్తిర్భవాంభోనిధౌ
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౩ ॥

నానాచ్ఛిద్రఘటోదరస్థితమహాదీపప్రభాభాస్వరం
జ్ఞానం యస్య తు చక్షురాదికరణద్వారా బహిః స్పందతే ।
జానామీతి తమేవ భాంతమనుభాత్యేతత్సమస్తం జగత్
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౪ ॥

దేహం ప్రాణమపీంద్రియాణ్యపి చలాం బుద్ధిం చ శూన్యం విదుః
స్త్రీబాలాంధజడోపమాస్త్వహమితి భ్రాంతాభృశం వాదినః ।
మాయాశక్తివిలాసకల్పితమహావ్యామోహసంహారిణే
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౫ ॥

రాహుగ్రస్తదివాకరేందుసదృశో మాయా సమాచ్ఛాదనాత్
సన్మాత్రః కరణోపసంహరణతో యోఽభూత్సుషుప్తః పుమాన్ ।
ప్రాగస్వాప్సమితి ప్రబోధసమయే యః ప్రత్యభిజ్ఞాయతే
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౬ ॥

బాల్యాదిష్వపి జాగ్రదాదిషు తథా సర్వాస్వవస్థాస్వపి
వ్యావృత్తాస్వనువర్తమానమహమిత్యంతః స్ఫురంతం సదా ।
స్వాత్మానం ప్రకటీకరోతి భజతాం యో ముద్రయా భద్రయా
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౭ ॥

విశ్వం పశ్యతి కార్యకారణతయా స్వస్వామిసంబంధతః
శిష్యాచార్యతయా తథైవ పితృపుత్రాద్యాత్మనా భేదతః ।
స్వప్నే జాగ్రతి వా య ఏష పురుషో మాయాపరిభ్రామితః
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౮ ॥

భూరంభాంస్యనలోఽనిలోఽంబరమహర్నాథో హిమాంశుః పుమాన్
ఇత్యాభాతి చరాచరాత్మకమిదం యస్యైవ మూర్త్యష్టకం ।
నాన్యత్ కించన విద్యతే విమృశతాం యస్మాత్పరస్మాద్విభోః
తస్మై శ్రీగురుమూర్తయే నమ ఇదం శ్రీదక్షిణామూర్తయే ॥ ౯ ॥

సర్వాత్మత్వమితి స్ఫుటీకృతమిదం యస్మాదముష్మిన్ స్తవే
తేనాస్య శ్రవణాత్తదర్థమననాద్ధ్యానాచ్చ సంకీర్తనాత్ ।
సర్వాత్మత్వమహావిభూతిసహితం స్యాదీశ్వరత్వం స్వతః
సిద్ధ్యేత్తత్పునరష్టధా పరిణతం చైశ్వర్యమవ్యాహతమ్ ॥ ౧౦ ॥`,
  },
  {
    id: "sp-guru-dakshinamurthy",
    titleEn: "Guru Mantra — Dakshinamurthy",
    subEn: "Salutation + Dhyana Shloka",
    devanagari:
`निधये सर्वविद्यानां
भिषजे भवरोगिणाम् ।
गुरवे सर्वलोकानां
दक्षिणामूर्तये नमः ॥

मौनव्याख्या प्रकटितपरब्रह्मतत्त्वं युवानं
वर्षिष्ठान्तेवसदृषिगणैरावृतं ब्रह्मनिष्ठैः ।
आचार्येन्द्रं करकलितचिन्मुद्रमानन्दमूर्तिं
स्वात्मारामं मुदितवदनं दक्षिणामूर्तिमीडे ॥`,
    telugu:
`నిధయే సర్వవిద్యానాం
భిషజే భవరోగిణామ్ ।
గురవే సర్వలోకానాం
దక్షిణామూర్తయే నమః ॥

మౌనవ్యాఖ్యా ప్రకటిత పరబ్రహ్మతత్త్వం యువానం
వర్షిష్ఠాంతేవసదృషిగణైరావృతం బ్రహ్మనిష్ఠైః ।
ఆచార్యేంద్రం కరకలిత చిన్ముద్రమానందమూర్తిం
స్వాత్మారామం ముదితవదనం దక్షిణామూర్తిమీడే ॥`,
  },
  {
    id: "sp-kalabhairavashtakam",
    titleEn: "Sri Kalabhairavashtakam",
    subEn: "8 verses + phala-shruti",
    devanagari:
`देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं
व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।
नारदादियोगिवृन्दवन्दितं दिगम्बरं
काशिकापुराधिनाथकालभैरवं भजे ॥ १ ॥

भानुकोटिभास्वरं भवाब्धितारकं परं
नीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।
कालकालमम्बुजाक्षमक्षशूलमक्षरं
काशिकापुराधिनाथकालभैरवं भजे ॥ २ ॥

शूलटङ्कपाशदण्डपाणिमादिकारणं
श्यामकायमादिदेवमक्षरं निरामयम् ।
भीमविक्रमं प्रभुं विचित्रताण्डवप्रियं
काशिकापुराधिनाथकालभैरवं भजे ॥ ३ ॥

भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं
भक्तवत्सलं स्थितं समस्तलोकविग्रहम् ।
विनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं
काशिकापुराधिनाथकालभैरवं भजे ॥ ४ ॥

धर्मसेतुपालकं त्वधर्ममार्गनाशकं
कर्मपाशमोचकं सुशर्मदायकं विभुम् ।
स्वर्णवर्णकेशपाशशोभिताङ्गनिर्मलं
काशिकापुराधिनाथकालभैरवं भजे ॥ ५ ॥

रत्नपादुकाप्रभाभिरामपादयुग्मकं
नित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।
मृत्युदर्पनाशनं करालदंष्ट्रमोक्षणं
काशिकापुराधिनाथकालभैरवं भजे ॥ ६ ॥

अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं
दृष्टिपातनष्टपापजालमुग्रशासनम् ।
अष्टसिद्धिदायकं कपालमालिकाधरं
काशिकापुराधिनाथकालभैरवं भजे ॥ ७ ॥

भूतसङ्घनायकं विशालकीर्तिदायकं
काशिवासिलोकपुण्यपापशोधकं विभुम् ।
नीतिमार्गकोविदं पुरातनं जगत्पतिं
काशिकापुराधिनाथकालभैरवं भजे ॥ ८ ॥

कालभैरवाष्टकं पठन्ति ये मनोहरं
ज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।
शोकमोहदैन्यलोभकोपतापनाशनं
ते प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं ध्रुवम् ॥`,
    telugu:
`దేవరాజసేవ్యమానపావనాంఘ్రిపంకజం
వ్యాలయజ్ఞసూత్రమిందుశేఖరం కృపాకరం ।
నారదాదియోగివృందవందితం దిగంబరం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౧ ॥

భానుకోటిభాస్వరం భవాబ్ధితారకం పరం
నీలకంఠమీప్సితార్థదాయకం త్రిలోచనం ।
కాలకాలమంబుజాక్షమక్షశూలమక్షరం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౨ ॥

శూలటంకపాశదండపాణిమాదికారణం
శ్యామకాయమాదిదేవమక్షరం నిరామయం ।
భీమవిక్రమం ప్రభుం విచిత్రతాండవప్రియం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౩ ॥

భుక్తిముక్తిదాయకం ప్రశస్తచారువిగ్రహం
భక్తవత్సలం స్థితం సమస్తలోకవిగ్రహం ।
వినిక్వణన్మనోజ్ఞహేమకింకిణీలసత్కటిం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౪ ॥

ధర్మసేతుపాలకం త్వధర్మమార్గనాశకం
కర్మపాశమోచకం సుశర్మదాయకం విభుమ్ ।
స్వర్ణవర్ణకేశపాశశోభితాంగనిర్మలం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౫ ॥

రత్నపాదుకాప్రభాభిరామపాదయుగ్మకం
నిత్యమద్వితీయమిష్టదైవతం నిరంజనం ।
మృత్యుదర్పనాశనం కరాళదంష్ట్రమోక్షదం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౬ ॥

అట్టహాసభిన్నపద్మజాండకోశసంతతిం
దృష్టిపాతనష్టపాపజాలముగ్రశాసనం ।
అష్టసిద్ధిదాయకం కపాలమాలికాధరం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౭ ॥

భూతసంఘనాయకం విశాలకీర్తిదాయకం
కాశివాసిలోకపుణ్యపాపశోధకం విభుమ్ ।
నీతిమార్గకోవిదం పురాతనం జగత్పతిం
కాశికాపురాధినాథ కాలభైరవం భజే ॥ ౮ ॥

కాలభైరవాష్టకం పఠంతి యే మనోహరం
జ్ఞానముక్తిసాధనం విచిత్రపుణ్యవర్ధనం ।
శోకమోహదైన్యలోభకోపతాపనాశనం
తే ప్రయాంతి కాలభైరవాంఘ్రిసన్నిధిం ధ్రువమ్ ॥`,
  },
];

DATA_SPIRITUAL.push(
  {
    id: "sp-mahakalabhairavashtakam",
    titleEn: "Tikshnadamshtra Kalabhairavashtakam",
    subEn: "Maha Kalabhairava Stotram — 11 verses (Rudrayamala tantric tradition)",
    devanagari:
`यं यं यं यक्षरूपं दशदिशिविदितं भूमिकम्पायमानं
सं सं संहारमूर्तिं शिरमुकुटजटा शेखरं चन्द्रबिम्बम् ।
दं दं दं दीर्घकायं विकृतनखमुखं चोर्ध्वरोमं करालं
पं पं पं पापनाशं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ १ ॥

रं रं रं रक्तवर्णं कटिकटिततनुं तीक्ष्णदंष्ट्राकरालं
घं घं घं घोष घोषं घघघघ घटितं घर्जरं घोरनादम् ।
कं कं कं कालपाशं धृक धृक धृकितं ज्वालितं कामदाहं
तं तं तं दिव्यदेहं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ २ ॥

लं लं लं लं वदन्तं लललल ललितं दीर्घजिह्वा करालं
धूं धूं धूं धूम्रवर्णं स्फुटविकटमुखं भास्करं भीमरूपम् ।
रुं रुं रुं रुण्डमालं रवितमनियतं ताम्रनेत्रं करालं
नं नं नं नग्नभूषं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ ३ ॥

वं वं वं वायुवेगं नतजनसदयं ब्रह्मसारं परन्तं
खं खं खं खड्गहस्तं त्रिभुवनविलयं भास्करं भीमरूपम् ।
चं चं चं चलित्वाऽचल चल चलिताच्चालितं भूमिचक्रं
मं मं मं मायिरूपं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ ४ ॥

शं शं शं शङ्खहस्तं शशिकरधवलं मोक्ष सम्पूर्ण तेजं
मं मं मं मं महान्तं कुलमकुलकुलं मन्त्रगुप्तं सुनित्यम् ।
यं यं यं भूतनाथं किलिकिलिकिलितं बालकेलिप्रधानं
अं अं अं अन्तरिक्षं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ ५ ॥

खं खं खं खड्गभेदं विषममृतमयं कालकालं करालं
क्षं क्षं क्षं क्षिप्रवेगं दहदहदहनं तप्तसन्दीप्यमानम् ।
हौं हौं हौङ्कारनादं प्रकटितगहनं गर्जितैर्भूमिकम्पं
वं वं वं बाललीलं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ ६ ॥

सं सं सं सिद्धियोगं सकलगुणमखं देवदेवं प्रसन्नं
पं पं पं पद्मनाभं हरिहरमयनं चन्द्रसूर्याग्निनेत्रम् ।
ऐं ऐं ऐं ऐश्वर्यनाथं सततभयहरं पूर्वदेवस्वरूपं
रौं रौं रौं रौद्ररूपं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ ७ ॥

हं हं हं हंसयानं हसितकलहकं मुक्तयोगाट्टहासं
नं नं नं नेत्ररूपं शिरमुकुटजटाबन्धबन्धाग्रहस्तम् ।
टं टं टं टङ्कारनादं त्रिदशलटलटं कामगर्वापहारं
भुं भुं भुं भूतनाथं प्रणमत सततं भैरवं क्षेत्रपालम् ॥ ८ ॥

इत्येवं कामयुक्तं प्रपठति नियतं भैरवस्याष्टकं यो
निर्विघ्नं दुःखनाशं सुरभयहरणं डाकिनीशाकिनीनाम् ।
नश्येद्धि व्याघ्रसर्पौ हुतवह सलिले राज्यशंसस्य शून्यं
सर्वा नश्यन्ति दूरं विपद इति भृशं चिन्तनात्सर्वसिद्धिम् ॥ ९ ॥

भैरवस्याष्टकमिदं षाण्मासं यः पठेन्नरः
स याति परमं स्थानं यत्र देवो महेश्वरः ॥ १० ॥

सिन्दूरारुणगात्रं च सर्वजन्मविनिर्मितम् ।
मुकुटाग्र्यधरं देवं भैरवं प्रणमाम्यहम् ॥ ११ ॥

नमो भूतनाथं नमो प्रेतनाथं
नमः कालकालं नमः रुद्रमालम् ।
नमः कालिकाप्रेमलोलं करालं
नमो भैरवं काशिकाक्षेत्रपालम् ॥
इति तीक्ष्णदंष्ट्र कालभैरवाष्टकम् ॥`,
    telugu:
`యం యం యం యక్షరూపం దశదిశివిదితం భూమికంపాయమానం
సం సం సంహారమూర్తిం శిరముకుటజటా శేఖరం చంద్రబింబమ్ ।
దం దం దం దీర్ఘకాయం వికృతనఖముఖం చోర్ధ్వరోమం కరాళం
పం పం పం పాపనాశం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౧ ॥

రం రం రం రక్తవర్ణం కటికటితతనుం తీక్ష్ణదంష్ట్రాకరాళం
ఘం ఘం ఘం ఘోష ఘోషం ఘఘఘఘ ఘటితం ఘర్జరం ఘోరనాదమ్ ।
కం కం కం కాలపాశం ధృక ధృక ధృకితం జ్వాలితం కామదాహం
తం తం తం దివ్యదేహం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౨ ॥

లం లం లం లం వదంతం లలలల లలితం దీర్ఘజిహ్వా కరాళం
ధూం ధూం ధూం ధూమ్రవర్ణం స్ఫుటవికటముఖం భాస్కరం భీమరూపమ్ ।
రుం రుం రుం రుండమాలం రవితమనియతం తామ్రనేత్రం కరాళం
నం నం నం నగ్నభూషం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౩ ॥

వం వం వం వాయువేగం నతజనసదయం బ్రహ్మసారం పరంతం
ఖం ఖం ఖం ఖడ్గహస్తం త్రిభువనవిలయం భాస్కరం భీమరూపమ్ ।
చం చం చం చలిత్వాఽచల చల చలితాచ్చాలితం భూమిచక్రం
మం మం మం మాయిరూపం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౪ ॥

శం శం శం శంఖహస్తం శశికరధవళం మోక్ష సంపూర్ణ తేజం
మం మం మం మం మహాంతం కులమకులకులం మంత్రగుప్తం సునిత్యమ్ ।
యం యం యం భూతనాథం కిలికిలికిలితం బాలకేళిప్రధానం
అం అం అం అంతరిక్షం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౫ ॥

ఖం ఖం ఖం ఖడ్గభేదం విషమమృతమయం కాలకాలం కరాళం
క్షం క్షం క్షం క్షిప్రవేగం దహదహదహనం తప్తసందీప్యమానమ్ ।
హౌం హౌం హౌంకారనాదం ప్రకటితగహనం గర్జితైర్భూమికంపం
వం వం వం బాలలీలం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౬ ॥

సం సం సం సిద్ధియోగం సకలగుణమఖం దేవదేవం ప్రసన్నం
పం పం పం పద్మనాభం హరిహరమయనం చంద్రసూర్యాగ్నినేత్రమ్ ।
ఐం ఐం ఐం ఐశ్వర్యనాథం సతతభయహరం పూర్వదేవస్వరూపం
రౌం రౌం రౌం రౌద్రరూపం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౭ ॥

హం హం హం హంసయానం హసితకలహకం ముక్తయోగాట్టహాసం
నం నం నం నేత్రరూపం శిరముకుటజటాబంధబంధాగ్రహస్తమ్ ।
టం టం టం టంకారనాదం త్రిదశలటలటం కామగర్వాపహారం
భుం భుం భుం భూతనాథం ప్రణమత సతతం భైరవం క్షేత్రపాలమ్ ॥ ౮ ॥

ఇత్యేవం కామయుక్తం ప్రపఠతి నియతం భైరవస్యాష్టకం యో
నిర్విఘ్నం దుఃఖనాశం సురభయహరణం డాకినీశాకినీనామ్ ।
నశ్యేద్ధి వ్యాఘ్రసర్పౌ హుతవహ సలిలే రాజ్యశంసస్య శూన్యం
సర్వా నశ్యంతి దూరం విపద ఇతి భృశం చింతనాత్సర్వసిద్ధిమ్ ॥ ౯ ॥

భైరవస్యాష్టకమిదం షాణ్మాసం యః పఠేన్నరః
స యాతి పరమం స్థానం యత్ర దేవో మహేశ్వరః ॥ ౧౦ ॥

సిందూరారుణగాత్రం చ సర్వజన్మవినిర్మితమ్ ।
ముకుటాగ్ర్యధరం దేవం భైరవం ప్రణమామ్యహమ్ ॥ ౧౧ ॥

నమో భూతనాథం నమో ప్రేతనాథం
నమః కాలకాలం నమః రుద్రమాలమ్ ।
నమః కాలికాప్రేమలోలం కరాళం
నమో భైరవం కాశికాక్షేత్రపాలమ్ ॥
ఇతి తీక్ష్ణదంష్ట్ర కాలభైరవాష్టకమ్ ॥`,
  },
  {
    id: "sp-gayatri",
    titleEn: "Gayatri Mantra",
    subEn: "Rigveda 3.62.10",
    devanagari:
`ॐ भूर्भुवः स्वः ।
तत्सवितुर्वरेण्यं
भर्गो देवस्य धीमहि ।
धियो यो नः प्रचोदयात् ॥`,
    telugu:
`ఓం భూర్భువః స్వః ।
తత్సవితుర్వరేణ్యం
భర్గో దేవస్య ధీమహి ।
ధియో యో నః ప్రచోదయాత్ ॥`,
  },
  {
    id: "sp-mahamrityunjaya",
    titleEn: "Mahamrityunjaya Mantra",
    subEn: "Rigveda 7.59.12",
    devanagari:
`ॐ त्र्यम्बकं यजामहे
सुगन्धिं पुष्टिवर्धनम् ।
उर्वारुकमिव बन्धनान्
मृत्योर्मुक्षीय माऽमृतात् ॥`,
    telugu:
`ఓం త్ర్యంబకం యజామహే
సుగంధిం పుష్టివర్ధనం ।
ఉర్వారుకమివ బంధనాన్
మృత్యోర్ముక్షీయ మామృతాత్ ॥`,
  },
  {
    id: "sp-panchakshari",
    titleEn: "Shiva Panchakshari Mantra",
    subEn: "The five-syllable mantra",
    devanagari:
`ॐ नमः शिवाय ॥
नमः शिवाय ॥`,
    telugu:
`ఓం నమః శివాయ ॥
నమః శివాయ ॥`,
  },
  {
    id: "sp-guru-mantras",
    titleEn: "Guru Mantras",
    subEn: "Moola Mantra · Guru Gayatri · Dakshinamurthy Mantra",
    devanagari:
`गुरु मूलमन्त्रः
ॐ गुरवे नमः ॥

गुरु गायत्री
ॐ गुरुदेवाय विद्महे
परब्रह्मणे धीमहि ।
तन्नो गुरुः प्रचोदयात् ॥

दक्षिणामूर्ति मन्त्रः
ॐ नमो भगवते दक्षिणामूर्तये
मह्यं मेधां प्रज्ञां प्रयच्छ स्वाहा ॥`,
    telugu:
`గురు మంత్రం
ఓం గురవే నమః ॥

గురు గాయత్రీ
ఓం గురుదేవాయ విద్మహే
పరబ్రహ్మణే ధీమహి ।
తన్నో గురుః ప్రచోదయాత్ ॥

దక్షిణామూర్తి మంత్రం
ఓం నమో భగవతే దక్షిణామూర్తయే
మహ్యం మేధాం ప్రజ్ఞాం ప్రయచ్ఛ స్వాహా ॥`,
  },
  {
    id: "sp-hanuman-mantras",
    titleEn: "Hanuman Mantras",
    subEn: "Moola Mantra · Hanuman Gayatri · Bija Mantra",
    devanagari:
`मूल मन्त्रः
ॐ हनुमते नमः ॥

हनुमद्गायत्री
ॐ आञ्जनेयाय विद्महे
वायुपुत्राय धीमहि ।
तन्नो हनुमत् प्रचोदयात् ॥

एक प्रसिद्ध मन्त्ररूपम्
ॐ ह्रीं हनुमते नमः ॥`,
    telugu:
`మూల మంత్రం
ఓం హనుమతే నమః ॥

హనుమత్ గాయత్రీ
ఓం ఆంజనేయాయ విద్మహే
వాయుపుత్రాయ ధీమహి ।
తన్నో హనుమత్ ప్రచోదయాత్ ॥

ప్రసిద్ధ బీజ మంత్రరూపం
ఓం హ్రీం హనుమతే నమః ॥`,
  },
);

DATA_SPIRITUAL.push(
  {
    id: "sp-hanuman-chalisa",
    titleEn: "Hanuman Chalisa",
    subEn: "Goswami Tulsidas — Doha, Chaupai, closing Doha",
    devanagari:
`दोहा
श्रीगुरु चरन सरोज रज
निज मनु मुकुरु सुधारि ।
बरनऊँ रघुबर बिमल जसु
जो दायकु फल चारि ॥

बुद्धिहीन तनु जानिके
सुमिरौं पवनकुमार ।
बल बुधि बिद्या देहु मोहिं
हरहु कलेस बिकार ॥

चौपाई
जय हनुमान ज्ञान गुन सागर ।
जय कपीस तिहुँ लोक उजागर ॥
राम दूत अतुलित बल धामा ।
अंजनि-पुत्र पवनसुत नामा ॥
महाबीर बिक्रम बजरंगी ।
कुमति निवार सुमति के संगी ॥
कंचन बरन बिराज सुबेसा ।
कानन कुण्डल कुंचित केसा ॥
हाथ बज्र औ ध्वजा बिराजै ।
काँधे मूँज जनेऊ साजै ॥
शंकर सुवन केसरी नंदन ।
तेज प्रताप महा जग बंदन ॥
विद्यावान गुनी अति चातुर ।
राम काज करिबे को आतुर ॥
प्रभु चरित्र सुनिबे को रसिया ।
राम लखन सीता मन बसिया ॥
सूक्ष्म रूप धरि सियहिं दिखावा ।
बिकट रूप धरि लंक जरावा ॥
भीम रूप धरि असुर संहारे ।
रामचंद्र के काज सँवारे ॥
लाय सजीवन लखन जियाए ।
श्रीरघुबीर हरषि उर लाए ॥
रघुपति कीन्ही बहुत बड़ाई ।
तुम मम प्रिय भरतहि सम भाई ॥
सहस बदन तुम्हरो जस गावैं ।
अस कहि श्रीपति कंठ लगावैं ॥
सनकादिक ब्रह्मादि मुनीसा ।
नारद सारद सहित अहीसा ॥
जम कुबेर दिगपाल जहाँ ते ।
कबि कोबिद कहि सके कहाँ ते ॥
तुम उपकार सुग्रीवहिं कीन्हा ।
राम मिलाय राज पद दीन्हा ॥
तुम्हरो मंत्र बिभीषण माना ।
लंकेश्वर भए सब जग जाना ॥
जुग सहस्र योजन पर भानू ।
लील्यो ताहि मधुर फल जानू ॥
प्रभु मुद्रिका मेलि मुख माहीं ।
जलधि लाँघि गए अचरज नाहीं ॥
दुर्गम काज जगत के जेते ।
सुगम अनुग्रह तुम्हरे तेते ॥
राम दुआरे तुम रखवारे ।
होत न आज्ञा बिनु पैसारे ॥
सब सुख लहै तुम्हारी सरना ।
तुम रक्षक काहू को डरना ॥
आपन तेज सँहारो आपै ।
तीनों लोक हाँक तें काँपै ॥
भूत पिशाच निकट नहिं आवै ।
महाबीर जब नाम सुनावै ॥
नासै रोग हरै सब पीरा ।
जपत निरंतर हनुमत बीरा ॥
संकट तें हनुमान छुड़ावै ।
मन क्रम वचन ध्यान जो लावै ॥
सब पर राम तपस्वी राजा ।
तिन के काज सकल तुम साजा ॥
और मनोरथ जो कोई लावै ।
सोइ अमित जीवन फल पावै ॥
चारों जुग परताप तुम्हारा ।
है परसिद्ध जगत उजियारा ॥
साधु संत के तुम रखवारे ।
असुर निकंदन राम दुलारे ॥
अष्ट सिद्धि नौ निधि के दाता ।
अस बर दीन जानकी माता ॥
राम रसायन तुम्हरे पासा ।
सदा रहो रघुपति के दासा ॥
तुम्हरे भजन राम को पावै ।
जनम जनम के दुख बिसरावै ॥
अंतकाल रघुबर पुर जाई ।
जहाँ जन्म हरिभक्त कहाई ॥
और देवता चित्त न धरई ।
हनुमत सेइ सर्व सुख करई ॥
संकट कटै मिटै सब पीरा ।
जो सुमिरै हनुमत बलबीरा ॥
जय जय जय हनुमान गोसाईं ।
कृपा करहु गुरुदेव की नाईं ॥
जो सत बार पाठ कर कोई ।
छूटहि बंदि महा सुख होई ॥
जो यह पढ़ै हनुमान चालीसा ।
होय सिद्धि साखी गौरीसा ॥
तुलसीदास सदा हरि चेरा ।
कीजै नाथ हृदय महँ डेरा ॥

दोहा
पवनतनय संकट हरण
मंगल मूरति रूप ।
राम लखन सीता सहित
हृदय बसहु सुर भूप ॥`,
    telugu:
`దోహా
శ్రీగురుచరణ సరోజరజ నిజమన ముకుర సుధారి ।
బరనఊం రఘుబర బిమల జసు జో దాయక ఫల చారి ॥

బుద్ధిహీన తనుజానికే సుమిరౌం పవనకుమార ।
బల బుద్ధి విద్యా దేహు మోహిం హరహు కలేస బికార ॥

చౌపాయీ
జయ హనుమాన జ్ఞాన గుణ సాగర ।
జయ కపీశ తిహుఁ లోక ఉజాగర ॥
రామదూత అతులిత బల ధామా ।
అంజని పుత్ర పవనసుత నామా ॥
మహాబీర బిక్రమ బజరంగీ ।
కుమతి నివార సుమతి కే సంగీ ॥
కంచన బరణ బిరాజ సుబేసా ।
కానన కుండల కుంచిత కేసా ॥
హాథ బజ్ర ఔ ధ్వజా బిరాజై ।
కాంధే మూంజ జనేఊ సాజై ॥
శంకర సువన కేసరీ నందన ।
తేజ ప్రతాప మహా జగ వందన ॥
విద్యావాన గునీ అతి చాతుర ।
రామ కాజ కరిబే కో ఆతుర ॥
ప్రభు చరిత్ర సునిబే కో రసియా ।
రామ లఖన సీతా మన బసియా ॥
సూక్ష్మ రూప ధరి సియహిం దిఖావా ।
బికట రూప ధరి లంక జరావా ॥
భీమ రూప ధరి అసుర సంహారే ।
రామచంద్ర కే కాజ సంవారే ॥
లాయ సజీవన లఖన జియాయే ।
శ్రీరఘుబీర హరషి ఉర లాయే ॥
రఘుపతి కీంహీ బహుత బడాయీ ।
తుమ మమ ప్రియ భరతహి సమ భాయీ ॥
సహస బదన తుమ్హరో జస గావైం ।
అస కహి శ్రీపతి కంఠ లగావైం ॥
సనకాదిక బ్రహ్మాది మునీసా ।
నారద సారద సహిత అహీసా ॥
జమ కుబేర దిగపాల జహాం తే ।
కబి కోబిద కహి సకే కహాం తే ॥
తుమ ఉపకార సుగ్రీవహిం కీంహా ।
రామ మిలాయ రాజ పద దీంహా ॥
తుమ్హరో మంత్ర బిభీషణ మానా ।
లంకేశ్వర భయే సబ జగ జానా ॥
జుగ సహస్ర యోజన పర భానూ ।
లీల్యో తాహి మధుర ఫల జానూ ॥
ప్రభు ముద్రికా మేలి ముఖ మాహీం ।
జలధి లాంఘి గయే అచరజ నాహీం ॥
దుర్గమ కాజ జగత కే జేతే ।
సుగమ అనుగ్రహ తుమ్హరే తేతే ॥
రామ దుఆరే తుమ రఖవారే ।
హోత న ఆజ్ఞా బిను పైసారే ॥
సబ సుఖ లహై తుమ్హారీ సరనా ।
తుమ రక్షక కాహూ కో డరనా ॥
ఆపన తేజ సంహారో ఆపై ।
తీనోం లోక హాంక తేం కాంపై ॥
భూత పిశాచ నికట నహిం ఆవై ।
మహాబీర జబ నామ సునావై ॥
నాసై రోగ హరై సబ పీరా ।
జపత నిరంతర హనుమత బీరా ॥
సంకట తేం హనుమాన ఛుడావై ।
మన క్రమ వచన ధ్యాన జో లావై ॥
సబ పర రామ తపస్వీ రాజా ।
తిన కే కాజ సకల తుమ సాజా ॥
ఔర మనోరథ జో కోయి లావై ।
సోయి అమిత జీవన ఫల పావై ॥
చారోం జుగ పరతాప తుమ్హారా ।
హై పరసిద్ధ జగత ఉజియారా ॥
సాధు సంత కే తుమ రఖవారే ।
అసుర నికందన రామ దులారే ॥
అష్ట సిద్ధి నౌ నిధి కే దాతా ।
అస బర దీన జానకీ మాతా ॥
రామ రసాయన తుమ్హరే పాసా ।
సదా రహో రఘుపతి కే దాసా ॥
తుమ్హరే భజన రామ కో పావై ।
జనమ జనమ కే దుఖ బిసరావై ॥
అంతకాల రఘుబర పుర జాయీ ।
జహాం జన్మ హరి భక్త కహాయీ ॥
ఔర దేవతా చిత్త న ధరయీ ।
హనుమత సేయి సర్వ సుఖ కరయీ ॥
సంకట కటై మిటై సబ పీరా ।
జో సుమిరై హనుమత బలబీరా ॥
జై జై జై హనుమాన గోసాయీ ।
కృపా కరహు గురుదేవ కీ నాయీ ॥
జో సత బార పాఠ కర కోయీ ।
ఛూటహి బంది మహా సుఖ హోయీ ॥
జో యహ పఢై హనుమాన్ చాలీసా ।
హోయ సిద్ధి సాఖీ గౌరీశా ॥
తులసీదాస సదా హరి చేరా ।
కీజై నాథ హృదయ మహ డేరా ॥

దోహా
పవనతనయ సంకట హరణ మంగళ మూరతి రూప్ ।
రామ లఖన సీతా సహిత హృదయ బసహు సుర భూప్ ॥`,
  },
  {
    id: "sp-shanti-mantras",
    titleEn: "Shanti Mantras",
    subEn: "Sarve Bhavantu Sukhinah · Saha Nau Avatu",
    devanagari:
`सर्वे भवन्तु सुखिनः
सर्वे भवन्तु सुखिनः
सर्वे सन्तु निरामयाः ।
सर्वे भद्राणि पश्यन्तु
मा कश्चिद्दुःखभाग्भवेत् ॥
ॐ शान्तिः शान्तिः शान्तिः ॥

सह नाववतु
ॐ सह नाववतु ।
सह नौ भुनक्तु ।
सह वीर्यं करवावहै ।
तेजस्विनावधीतमस्तु
मा विद्विषावहै ॥
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    telugu:
`సర్వే భవంతు సుఖినః
సర్వే భవంతు సుఖినః
సర్వే సంతు నిరామయాః ।
సర్వే భద్రాణి పశ్యంతు
మా కశ్చిద్దుఃఖభాగ్భవేత్ ॥
ఓం శాంతిః శాంతిః శాంతిః ॥

గురు–శాంతి మంత్రం
ఓం సహనావవతు ।
సహ నౌ భునక్తు ।
సహ వీర్యం కరవావహై ।
తేజస్వినావధీతమస్తు
మా విద్విషావహై ॥
ఓం శాంతిః శాంతిః శాంతిః ॥`,
  },
  {
    id: "sp-closing",
    titleEn: "Closing Invocations",
    subEn: "Samapanam",
    devanagari:
`ॐ नमः शिवाय ।
ॐ दक्षिणामूर्तये नमः ।
ॐ गुरवे नमः ।
ॐ कालभैरवाय नमः ।
ॐ महाकालभैरवाय नमः ।
ॐ हनुमते नमः ।
ॐ शान्तिः शान्तिः शान्तिः ॥`,
    telugu:
`ఓం నమః శివాయ ।
ఓం దక్షిణామూర్తయే నమః ।
ఓం గురవే నమః ।
ఓం కాలభైరవాయ నమః ।
ఓం మహాకాలభైరవాయ నమః ।
ఓం హనుమతే నమః ।
ఓం శాంతిః శాంతిః శాంతిః ॥`,
  },
);

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
  {
    id: "spiritual",
    navLabel: "Spiritual",
    icon: "🕉️",
    kind: "reference",
    data: DATA_SPIRITUAL,
    hero: {
      eyebrow: "Track 4 · Reference",
      title: "Spiritual — Stotras & Mantras",
      lede: "The same mantras, the same pronunciation — only the script changes. Use the अ / తె switch on this tab to toggle every text on the page between Devanagari and Telugu.",
    },
  },
];

const STATE = {
  activeTabId: TABS.some((t) => t.id === localStorage.getItem("active-tab-v1"))
    ? localStorage.getItem("active-tab-v1")
    : TABS[0].id,
  checked: {}, // tabId -> Set of "campId::itemIndex"
  scriptLang: "devanagari", // "devanagari" | "telugu" — for the Spiritual tab
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
  if (tab.kind === "reference") return { done: tab.data.length, total: tab.data.length };
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
    const rightHtml = tab.kind === "reference"
      ? `<span class="lang-switch" data-lang-switch="${tab.id}">
           <button class="lang-seg ${STATE.scriptLang === "devanagari" ? "active" : ""}" data-lang="devanagari">अ</button>
           <button class="lang-seg ${STATE.scriptLang === "telugu" ? "active" : ""}" data-lang="telugu">తె</button>
         </span>`
      : `<span class="tab-btn-pct">${pct}%</span>`;
    return `
      <button class="tab-btn ${active}" data-tab="${tab.id}">
        <span class="tab-btn-icon">${tab.icon}</span>
        <span>${tab.navLabel}</span>
        ${rightHtml}
      </button>`;
  }).join("");
  el.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      STATE.activeTabId = btn.dataset.tab;
      localStorage.setItem("active-tab-v1", STATE.activeTabId);
      renderAll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  el.querySelectorAll(".lang-seg").forEach((seg) => {
    seg.addEventListener("click", (e) => {
      e.stopPropagation();
      STATE.scriptLang = seg.dataset.lang;
      renderAll();
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
  const el = document.getElementById("trailNav");

  if (tab.kind === "reference") {
    el.innerHTML = tab.data.map((item, i) => `
      <a href="#${item.id}" class="trail-stop" data-camp="${item.id}">
        <span class="trail-dot">${i + 1}</span>
        <span class="trail-stop-label">
          <span class="trail-stop-title">${item.titleEn}</span>
          <span class="trail-stop-count">${item.subEn}</span>
        </span>
      </a>`).join("");
    return;
  }

  const checked = STATE.checked[tab.id];
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
  if (tab.kind === "reference") { renderSpiritualCards(tab); return; }
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


/* ---------------- render: spiritual cards (script toggle lives in the tab button) ---------------- */
function renderSpiritualCards(tab) {
  const el = document.getElementById("camps");
  const lang = STATE.scriptLang;

  const cardsHtml = tab.data.map((item, i) => `
    <section class="camp mantra-card" id="${item.id}">
      <div class="camp-header">
        <div class="camp-marker">${i + 1}</div>
        <div class="camp-titles">
          <p class="camp-phase-tag">${item.subEn}</p>
          <h2>${item.titleEn}</h2>
        </div>
      </div>
      <pre class="mantra-text ${lang === "telugu" ? "lang-telugu" : "lang-devanagari"}">${item[lang]}</pre>
    </section>`).join("");

  el.innerHTML = `<div class="mantra-grid">${cardsHtml}</div>`;
}

/* ---------------- render: global progress bar ---------------- */
function renderGlobalProgress() {
  const tab = activeTab();
  if (tab.kind === "reference") {
    document.getElementById("globalProgressFill").style.width = "100%";
    document.getElementById("globalProgressText").textContent =
      `${tab.data.length} mantras · script: ${STATE.scriptLang === "telugu" ? "తెలుగు" : "देवनागरी"}`;
    return;
  }
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
  if (tab.kind === "reference") return;
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
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.style.display = activeTab().kind === "reference" ? "none" : "";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme-v1", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  document.getElementById("resetBtn").addEventListener("click", resetCurrentTrack);
  applyTheme(localStorage.getItem("theme-v1") || "light");
  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
});
