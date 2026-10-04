// ── Mock Data ───────────────────────────────────────────────────────────────
// All data is static demo data. No backend calls are made.

import type { Topic, Problem, SubmissionRecord, ChartDataPoint } from '@/types'

// ── Topics ──────────────────────────────────────────────────────────────────
export const mockTopics: Topic[] = [
  { id: 'arrays',     name: 'Arrays',            mastery: 78, problemsTotal: 45, problemsSolved: 35, color: '#35C98B' },
  { id: 'strings',    name: 'Strings',           mastery: 65, problemsTotal: 38, problemsSolved: 25, color: '#F5B942' },
  { id: 'linked',     name: 'Linked Lists',      mastery: 52, problemsTotal: 30, problemsSolved: 16, color: '#7C5CFC' },
  { id: 'stack',      name: 'Stack & Queue',     mastery: 70, problemsTotal: 25, problemsSolved: 18, color: '#35C98B' },
  { id: 'bsearch',    name: 'Binary Search',     mastery: 38, problemsTotal: 28, problemsSolved: 11, color: '#F05D6C' },
  { id: 'trees',      name: 'Trees',             mastery: 45, problemsTotal: 42, problemsSolved: 19, color: '#F5B942' },
  { id: 'graphs',     name: 'Graphs',            mastery: 30, problemsTotal: 35, problemsSolved: 11, color: '#F05D6C' },
  { id: 'dp',         name: 'Dynamic Programming', mastery: 22, problemsTotal: 40, problemsSolved: 9, color: '#F05D6C' },
  { id: 'hashing',    name: 'Hashing',           mastery: 68, problemsTotal: 22, problemsSolved: 15, color: '#35C98B' },
  { id: 'recursion',  name: 'Recursion',         mastery: 55, problemsTotal: 20, problemsSolved: 11, color: '#F5B942' },
]

// ── Problems ────────────────────────────────────────────────────────────────
export const mockProblems: Problem[] = [
  {
    id: 'p1', title: 'Two Sum', topicId: 'arrays', topic: 'Arrays',
    difficulty: 'Easy', status: 'Solved', tags: ['hash-map', 'array'],
    reason: 'You solved similar problems fast. This variant tests edge cases you\'ve missed before.',
  },
  {
    id: 'p2', title: 'Binary Search on Rotated Array', topicId: 'bsearch', topic: 'Binary Search',
    difficulty: 'Medium', status: 'Attempted', tags: ['binary-search', 'array'],
    reason: 'You struggled with boundary conditions on your last 3 binary search attempts.',
  },
  {
    id: 'p3', title: 'LRU Cache', topicId: 'hashing', topic: 'Hashing',
    difficulty: 'Medium', status: 'Unsolved', tags: ['design', 'linked-list', 'hash-map'],
    reason: 'Combines hashing & linked lists — two areas where you have partial mastery.',
  },
  {
    id: 'p4', title: 'Maximum Depth of Binary Tree', topicId: 'trees', topic: 'Trees',
    difficulty: 'Easy', status: 'Solved', tags: ['dfs', 'recursion'],
    reason: 'Builds confidence in tree traversal before tackling harder tree problems.',
  },
  {
    id: 'p5', title: 'Merge Intervals', topicId: 'arrays', topic: 'Arrays',
    difficulty: 'Medium', status: 'Attempted', tags: ['sorting', 'greedy'],
    reason: 'Sorting-based problems are your weak spot this week.',
  },
  {
    id: 'p6', title: 'Valid Parentheses', topicId: 'stack', topic: 'Stack & Queue',
    difficulty: 'Easy', status: 'Solved', tags: ['stack', 'string'],
    reason: 'Stack fundamentals — reinforces your 70% mastery in this area.',
  },
  {
    id: 'p7', title: 'Longest Palindromic Substring', topicId: 'strings', topic: 'Strings',
    difficulty: 'Medium', status: 'Unsolved', tags: ['dp', 'string'],
    reason: 'String + DP combo targets two of your lower-mastery areas.',
  },
  {
    id: 'p8', title: 'Number of Islands', topicId: 'graphs', topic: 'Graphs',
    difficulty: 'Medium', status: 'Attempted', tags: ['bfs', 'dfs', 'matrix'],
    reason: 'Graph traversal is your biggest growth opportunity right now.',
  },
  {
    id: 'p9', title: 'Climbing Stairs', topicId: 'dp', topic: 'Dynamic Programming',
    difficulty: 'Easy', status: 'Solved', tags: ['dp', 'memoization'],
    reason: 'Entry-level DP to build intuition before harder DP problems.',
  },
  {
    id: 'p10', title: 'Reverse Linked List', topicId: 'linked', topic: 'Linked Lists',
    difficulty: 'Easy', status: 'Unsolved', tags: ['linked-list', 'pointer'],
    reason: 'You haven\'t practiced linked list manipulation yet this week.',
  },
  {
    id: 'p11', title: 'Find First and Last in Sorted Array', topicId: 'bsearch', topic: 'Binary Search',
    difficulty: 'Medium', status: 'Unsolved', tags: ['binary-search'],
    reason: 'Direct match to your weakness: binary search boundaries.',
  },
  {
    id: 'p12', title: 'Word Search', topicId: 'graphs', topic: 'Graphs',
    difficulty: 'Medium', status: 'Unsolved', tags: ['backtracking', 'dfs'],
    reason: 'Backtracking + graph skills you need to reinforce.',
  },
]

// ── Submission History ───────────────────────────────────────────────────────
export const mockSubmissions: SubmissionRecord[] = [
  { id: 's1',  problem: 'Two Sum',                          topic: 'Arrays',           result: 'Accepted',            attempts: 1, timeTaken: '8m 12s',  date: '2026-10-04' },
  { id: 's2',  problem: 'Binary Search on Rotated Array',   topic: 'Binary Search',    result: 'Wrong Answer',        attempts: 3, timeTaken: '22m 45s', date: '2026-10-04' },
  { id: 's3',  problem: 'Valid Parentheses',                topic: 'Stack & Queue',    result: 'Accepted',            attempts: 1, timeTaken: '6m 30s',  date: '2026-10-03' },
  { id: 's4',  problem: 'Maximum Depth of Binary Tree',     topic: 'Trees',            result: 'Accepted',            attempts: 2, timeTaken: '11m 05s', date: '2026-10-03' },
  { id: 's5',  problem: 'Merge Intervals',                  topic: 'Arrays',           result: 'Time Limit Exceeded', attempts: 2, timeTaken: '18m 22s', date: '2026-10-02' },
  { id: 's6',  problem: 'Climbing Stairs',                  topic: 'Dynamic Programming', result: 'Accepted',         attempts: 1, timeTaken: '5m 17s',  date: '2026-10-02' },
  { id: 's7',  problem: 'Number of Islands',                topic: 'Graphs',           result: 'Wrong Answer',        attempts: 4, timeTaken: '31m 00s', date: '2026-10-01' },
  { id: 's8',  problem: 'LRU Cache',                        topic: 'Hashing',          result: 'Runtime Error',       attempts: 2, timeTaken: '27m 40s', date: '2026-09-30' },
  { id: 's9',  problem: 'Longest Palindromic Substring',    topic: 'Strings',          result: 'Wrong Answer',        attempts: 3, timeTaken: '25m 11s', date: '2026-09-29' },
  { id: 's10', problem: 'Reverse Linked List',              topic: 'Linked Lists',     result: 'Accepted',            attempts: 1, timeTaken: '4m 55s',  date: '2026-09-28' },
  { id: 's11', problem: 'Word Search',                      topic: 'Graphs',           result: 'Wrong Answer',        attempts: 2, timeTaken: '20m 33s', date: '2026-09-28' },
  { id: 's12', problem: 'Find First and Last in Sorted Array', topic: 'Binary Search', result: 'Wrong Answer',        attempts: 3, timeTaken: '19m 45s', date: '2026-09-27' },
]

// ── Chart Data ───────────────────────────────────────────────────────────────
export const problemsSolvedOverTime: ChartDataPoint[] = [
  { label: 'Sep 24', value: 3 },
  { label: 'Sep 25', value: 5 },
  { label: 'Sep 26', value: 2 },
  { label: 'Sep 27', value: 6 },
  { label: 'Sep 28', value: 4 },
  { label: 'Sep 29', value: 7 },
  { label: 'Sep 30', value: 3 },
  { label: 'Oct 01', value: 5 },
  { label: 'Oct 02', value: 8 },
  { label: 'Oct 03', value: 6 },
  { label: 'Oct 04', value: 4 },
]

export const accuracyTrend: ChartDataPoint[] = [
  { label: 'Sep 24', value: 55 },
  { label: 'Sep 25', value: 60 },
  { label: 'Sep 26', value: 50 },
  { label: 'Sep 27', value: 65 },
  { label: 'Sep 28', value: 62 },
  { label: 'Sep 29', value: 70 },
  { label: 'Sep 30', value: 68 },
  { label: 'Oct 01', value: 72 },
  { label: 'Oct 02', value: 75 },
  { label: 'Oct 03', value: 71 },
  { label: 'Oct 04', value: 73 },
]

export const topicRadarData = mockTopics.map(t => ({
  topic: t.name.split(' ')[0],
  mastery: t.mastery,
}))

// ── Dashboard Stats ───────────────────────────────────────────────────────────
export const dashboardStats = {
  skillScore: 67,
  problemsSolved: 154,
  accuracy: 73,
  streak: 11,
  avgSolveTime: '14m 20s',
}
