export type DirectoryEntry = { word: string; opposite: string }
export type DirectoryGroup = { letter: string; slug: string; entries: DirectoryEntry[] }
export const alphabet: string[]
export function letterSlug(letter: string): string
export function letterUrl(letter: string): string
export function directoryTitle(letter?: string): string
export function directoryDescription(letter?: string): string
export function groupDirectory(words: Record<string, { opposite: string }>): DirectoryGroup[]

