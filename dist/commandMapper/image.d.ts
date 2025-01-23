import { EventCommandTable } from '@sigureya/rpgtypes';
import { CallBackFunc } from './callbackFunction';
export interface ImageCommadnMapper<T> {
    changeActorImages: CallBackFunc<EventCommandTable["CHANGE_ACTOR_IMAGES"], T>;
}
