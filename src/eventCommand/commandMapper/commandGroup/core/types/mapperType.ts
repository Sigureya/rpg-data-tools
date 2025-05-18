import type { EventCommand } from "@sigureya/rpgtypes";
import type {
  EventCommandGroup_Message,
  EventCommandGroup_ScrollingText,
  EventCommandGroup_Comment,
  EventCommandGroup_Script,
} from "./groopTypes";

export interface GroopMapper<T> {
  showMessage(
    groop: EventCommandGroup_Message,
    index: number,
    array: EventCommand[]
  ): T;
  showScrollingText(
    groop: EventCommandGroup_ScrollingText,
    index: number,
    array: EventCommand[]
  ): T;
  comment(
    groop: EventCommandGroup_Comment,
    index: number,
    array: EventCommand[]
  ): T;
  script(
    groop: EventCommandGroup_Script,
    index: number,
    array: EventCommand[]
  ): T;
}
