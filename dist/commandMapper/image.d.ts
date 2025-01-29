import { Command_ChangeActorImages } from '@sigureya/rpgtypes';
import { CallBackFunc } from './callbackFunction';
export interface ImageCommadnMapper<T> {
    changeActorImages: CallBackFunc<Command_ChangeActorImages, T>;
}
