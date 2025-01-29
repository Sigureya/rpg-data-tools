import type { Command_ChangeActorImages } from "@sigureya/rpgtypes";
import type { CallBackFunc } from "./types";

export interface ImageCommadnMapper<T> {
  changeActorImages: CallBackFunc<Command_ChangeActorImages, T>;
}
