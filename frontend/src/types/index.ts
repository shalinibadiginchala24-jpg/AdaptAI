// ── Shared Types ────────────────────────────────────────────────────────────

export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type ProblemStatus = 'Solved' | 'Attempted' | 'Unsolved'
export type SubmissionResult = 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Runtime Error'

export interface Topic {
  id: string
  name: string
  mastery: number        // 0–100
  problemsTotal: number
  problemsSolved: number
  color: string          // CSS color for accent
}

export interface Problem {
  id: string
  title: string
  topicId: string
  topic: string
  difficulty: Difficulty
  status: ProblemStatus
  tags: string[]
  reason?: string        // "Why this problem?" explanation
}

export interface SubmissionRecord {
  id: string
  problem: string
  topic: string
  result: SubmissionResult
  attempts: number
  timeTaken: string      // e.g. "14m 32s"
  date: string           // ISO date string
}

export interface StatItem {
  label: string
  value: string | number
  delta?: string         // e.g. "+5 this week"
  positive?: boolean
}

export interface ChartDataPoint {
  label: string
  value: number
  [key: string]: string | number
}
