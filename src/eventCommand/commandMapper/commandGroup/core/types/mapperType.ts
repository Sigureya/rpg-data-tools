import type {
  EventCommandGroup_Message,
  EventCommandGroup_ScrollingText,
  EventCommandGroup_Comment,
  EventCommandGroup_Script,
} from "./groopTypes";

export interface GroopMapper<T> {
  showMessage(groop: EventCommandGroup_Message): T;
  showScrollingText(groop: EventCommandGroup_ScrollingText): T;
  comment(groop: EventCommandGroup_Comment): T;
  script(groop: EventCommandGroup_Script): T;
}
