import type { Data_NamedItem } from "@sigureya/rpgtypes";

export interface NamedItemList {
  label: string;
  key: string;
  items: Data_NamedItem[];
}
