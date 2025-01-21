import type { Toggle } from "@sigureya/rpgtypes";

type ReverseRecord<Table extends Record<PropertyKey, PropertyKey>> = {
  [K in Table[keyof Table]]: Table extends Record<infer Key, K> ? Key : never;
};

type ReverseToggle = ReverseRecord<Toggle>;

class XXXmap<R extends Record<PropertyKey, PropertyKey>> {}
