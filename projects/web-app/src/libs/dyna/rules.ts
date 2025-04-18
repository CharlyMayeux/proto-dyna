export function mapOutputs<T>(
  component: unknown,
  handler: (componentId: string, eventName: string, value: T) => void
): Record<string, (...args: T[]) => void> {
  const handlers: Record<string, (...args: T[]) => void> = {};
  return handlers;
}
