import type { EventCommandTable } from "@sigureya/rpgtypes";
import type { CallBackFunc } from "./callbackFunction";

export interface ImageCommadnMapper<T> {
  changeActorImages: CallBackFunc<EventCommandTable["CHANGE_ACTOR_IMAGES"], T>;
}
