import type { EventCode } from "@sigureya/rpgtypes";

export const codeInfoText = (code: EventCode) => {
  return `code:${code}`;
};
