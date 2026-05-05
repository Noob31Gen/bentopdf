
import type { NodeCategory } from './types';
import type { NodeRegistryEntry } from './nodes/registry';

export function translateCategory(category: NodeCategory): string {
  return category;
}

export function translateNodeLabel(
  _nodeType: string,
  entry: NodeRegistryEntry
): string {
  return entry.label;
}

export function translateNodeDescription(
  _nodeType: string,
  entry: NodeRegistryEntry
): string {
  return entry.description;
}
