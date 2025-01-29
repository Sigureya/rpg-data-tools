import { EventCommand } from '@sigureya/rpgtypes';
export interface commandProxy3 {
    join(sepadrator?: string): string;
}
export type CallBackFunc<Command extends {
    code: number;
    parameters: readonly unknown[];
    indent: number;
}, Reulst = void> = (command: Readonly<Command>, index: number, list: ReadonlyArray<Readonly<EventCommand>>) => Reulst;
