import type { EventCommandTypes } from "@sigureya/rpgtypes";
import type { Mapper } from "./mapper";
import type { ShowMessageBody } from "./paramTypes";
const xxx: Mapper<
  EventCommandTypes["SHOW_MESSAGE_BODY"]["parameters"],
  ShowMessageBody,
  { content: 1 }
> = {};
