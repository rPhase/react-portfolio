export interface ISection {
  id: string;
  label: string;
  ref: React.RefObject<HTMLElement>;
  component: React.FC;
}
