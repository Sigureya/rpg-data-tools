import type {
  EventCode,
  EventCommand,
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

const create = <BodyCode extends EventCode, HeadCode extends EventCode>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  bodyCode: BodyCode,
  headCode: HeadCode
) => {
  const top = array[index];
  if (!top) {
    return [];
  }
  if (array[index].code !== headCode) {
    return [];
  }
  const body: EventCommand[] = [];
  for (let i = index + 1; i < array.length; i++) {
    const command = array[i];
    if (command.code === bodyCode) {
      body.push(command);
    } else {
      break;
    }
  }
  return body;
};
