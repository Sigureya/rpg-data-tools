export interface ControlChar {
    char: string;
    id: number;
}
export declare const getControlChars: (text: string, validChars?: ReadonlySet<Lowercase<string>>) => ControlChar[];
