export type Edge = [number, number];

export interface GraphNode {
  label: string;
  position: Edge;
  edges: Edge[];
}
