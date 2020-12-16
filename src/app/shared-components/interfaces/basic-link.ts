export interface BasicLink {
  label: string;
  url: string;
  external: boolean;
  icon?: string;
  description?: string;
  children?: BasicLink[];
}
