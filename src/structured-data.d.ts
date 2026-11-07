export function homeStructuredData(): Record<string, unknown>
export function wordStructuredData(word: string, entry: { description: string; opposite: string }): Record<string, unknown>
export function serializeStructuredData(data: Record<string, unknown>): string

