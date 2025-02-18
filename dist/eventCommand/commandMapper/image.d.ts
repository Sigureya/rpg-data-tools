import { Command_ChangeActorImages } from '@sigureya/rpgtypes';
import { CallBackFunc } from './commandMapper2';
export interface ImageCommadnMapper<T> {
    changeActorImages: CallBackFunc<Command_ChangeActorImages, T>;
}
