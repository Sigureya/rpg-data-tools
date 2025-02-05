import { AudioFileParams, ExtractCommandByParam } from '@sigureya/rpgtypes';
export declare const createAudio: (audio?: Partial<AudioFileParams>) => AudioFileParams;
export declare const createAudioCommand: <Code extends ExtractCommandByParam<[AudioFileParams]>["code"]>(code: Code, name: string, indent?: number) => {
    code: Code;
    parameters: [AudioFileParams];
    indent: number;
};
