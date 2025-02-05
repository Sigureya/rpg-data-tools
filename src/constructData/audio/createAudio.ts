import type {
  AudioFileParams,
  ExtractCommandByParam,
} from "@sigureya/rpgtypes";

export const createAudio = (
  audio: Partial<AudioFileParams> = {}
): AudioFileParams => {
  return {
    name: audio.name ?? "",
    volume: audio.volume ?? 90,
    pitch: audio.pitch ?? 100,
    pan: audio.pan ?? 0,
  };
};

export const createAudioCommand = <
  Code extends ExtractCommandByParam<[AudioFileParams]>["code"]
>(
  code: Code,
  name: string,
  indent = 0
) => {
  return {
    code,
    parameters: [createAudio({ name })] as [AudioFileParams],
    indent,
  };
};
