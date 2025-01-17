import type { EventCommandTypes } from "@sigureya/rpgtypes";
import type { ChangeName, ShowMessage } from "./paramTypes";
import type { ArrayToObjectMapper } from "./arrayToObjectMapper";
const can: ArrayToObjectMapper<
  EventCommandTypes["CHANGE_NAME"]["parameters"],
  ChangeName
> = {
  actorId: 0,
  name: 1,
};

const showMessage2: ArrayToObjectMapper<
  EventCommandTypes["SHOW_MESSAGE"]["parameters"],
  ShowMessage
> = {
  faceIndex: 1,
  facename: 0,
  background: 1,
  positionType: 2,
  speakerName: 4,
};
