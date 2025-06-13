export type CellType = 'Text' | 'Image' | 'Button' | 'Video' | 'Grid';
export type BorderStyle = 'None' | 'Outline' | 'All';
export type BorderColor = 'Black' | 'Grey' | 'None';

export type WidthMode = 'Auto' | 'Manual';
export type HeightMode = 'Auto' | 'Manual';

export interface CellData {
  id: string;
  type: CellType;
  content: string;
  borderOverride?: {
    style: 'Inherit' | 'None' | 'Solid';
    color: 'Black' | 'Grey';
  };
  nestedGridState?: GridState;
}

export interface ColumnData {
  id: string;
  widthMode: WidthMode;
  width?: number;
}

export interface RowData {
  id: string;
  heightMode: HeightMode;
  height?: number;
  cells: CellData[];
}

export interface GridState {
  columns: ColumnData[];
  rows: RowData[];
  borderStyle: BorderStyle;
  borderColor: BorderColor;
}
