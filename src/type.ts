export interface Prop {
  [key: string]: any;
  onChange: (event: React.ChangeEvent) => void;
  onClick: (event: React.MouseEvent) => void;
}
