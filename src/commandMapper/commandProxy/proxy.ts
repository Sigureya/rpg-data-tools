import type {
  EventCode,
  EventCommand,
  EventCommandByCode,
  EventCommandLike,
} from "@sigureya/rpgtypes";

class MessageProxy2 {
  constructor(
    public readonly hedderCode: number,
    public readonly bodyCode: number,
    private _array: ReadonlyArray<EventCommand>,
    private index: number
  ) {}
}

// interface PP<Head extends EventCommandLike, Body extends EventCommandLike> {
//   head?: Head;
//   body: Body[];
// }
export const create = <BodyCode extends EventCode, HeadCode extends EventCode>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  headCode: HeadCode,
  bodyCode: BodyCode
): (EventCommandByCode[HeadCode] | EventCommandByCode[BodyCode])[] => {
  const top: EventCommand = array[index];
  if (!top || top.code !== headCode) {
    return [];
  }
  type Head = EventCommandByCode[HeadCode];
  type Body = EventCommandByCode[BodyCode];
  const body: Array<Head | Body> = [top as EventCommandByCode[HeadCode]];
  for (let i = index + 1; i < array.length; i++) {
    const command = array[i];
    if (command.code === bodyCode) {
      body.push(command as Body);
    } else {
      break;
    }
  }
  return body;
};
