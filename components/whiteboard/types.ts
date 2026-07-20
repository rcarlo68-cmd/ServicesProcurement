// components/whiteboard/types.ts

import { ReactNode } from "react";

export type StickyColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green";

export type TapeColor =
  | "beige"
  | "white";

export type MarkerColor =
  | "red"
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "black";

export interface PositionProps {
  x: number;
  y: number;
  rotate?: number;
  zIndex?: number;
  size?: number;
}

export interface StickyProps extends PositionProps {
  title?: string;
  children?: ReactNode;
  color?: StickyColor;
  className?: string;
}

export interface TapeProps extends PositionProps {
  width?: number;
  color?: TapeColor;
  opacity?: number;
  className?: string;
}

export interface PinProps extends PositionProps {
  color?: string;
  className?: string;
}

export interface ArrowProps {
  from: {
    x: number;
    y: number;
  };
  to: {
    x: number;
    y: number;
  };
  color?: MarkerColor;
  dashed?: boolean;
  curved?: boolean;
  animated?: boolean;
  zIndex?: number;
}

export interface MarkerProps extends PositionProps {
  width: number;
  height?: number;
  color?: MarkerColor;
  type?: "circle" | "underline" | "highlight";
  className?: string;
}

export interface SketchProps extends PositionProps {
  variant?:
    | "scribble"
    | "cloud"
    | "cross"
    | "spiral"
    | "zigzag";
  color?: MarkerColor;
  className?: string;
}

export interface NoteProps extends PositionProps {
  title?: string;
  children?: ReactNode;
  pinned?: boolean;
  taped?: boolean;
  className?: string;
}

export interface WhiteboardItem {
  id: string;
  x: number;
  y: number;
  rotate?: number;
  zIndex?: number;
}

export interface WhiteboardConnection {
  id: string;
  from: string;
  to: string;
  color?: MarkerColor;
  curved?: boolean;
}

export interface WhiteboardProps {
  className?: string;
}