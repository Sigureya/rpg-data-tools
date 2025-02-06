import { Command_ChangeActorImages } from '@sigureya/rpgtypes';
import { CallBackFunc } from './types';
export interface ImageCommadnMapper<T> {
    changeActorImages: CallBackFunc<Command_ChangeActorImages, T>;
}
