import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
} from "./class";

export interface GroopMapper<T> {
  showMessage(groop: EventCommandGroup_Message): T;
  showScrollingText(groop: EventCommandGroup_ScrollingText): T;
  comment(groop: EventCommandGroup_Comment): T;
  script(groop: EventCommandGroup_Script): T;
}
