import { PickByType } from '@sigureya/rpgtypes';
export type DatePicker<Result, Data, Prop, With = {}> = (data: PickByType<Data, Prop> & With) => Result;
