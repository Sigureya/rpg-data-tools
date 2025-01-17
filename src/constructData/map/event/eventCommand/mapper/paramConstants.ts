import type { EventCommandTypes } from "@sigureya/rpgtypes";
import type { EventParameterFactory } from "./mappingObjecToMZ";
import type { ChangeName, ShowMessage, ShowMessageBody } from "./paramTypes";

export const showMessage: EventParameterFactory<
  ShowMessage,
  EventCommandTypes["SHOW_MESSAGE"]
> = {
  constructParamArray(proto) {
    return [
      proto?.facename ?? "",
      proto?.faceIndex ?? 0,
      proto?.background ?? 0,
      proto?.positionType ?? 2,
      proto?.speakerName ?? "",
    ];
  },

  constructMappedParamObject(proto) {
    return {
      facename: proto?.facename ?? "",
      faceIndex: proto?.faceIndex ?? 0,
      background: proto?.background ?? 0,
      positionType: proto?.positionType ?? 2,
      speakerName: proto?.speakerName ?? "",
    };
  },
  toArray(parameters) {
    return [
      parameters.facename,
      parameters.faceIndex,
      parameters.background,
      parameters.positionType,
      parameters.speakerName,
    ];
  },
  fromArray(parameters) {
    return {
      facename: parameters[0],
      faceIndex: parameters[1],
      background: parameters[2],
      positionType: parameters[3],
      speakerName: parameters[4],
    };
  },
};

export const showMessageBody: EventParameterFactory<
  ShowMessageBody,
  EventCommandTypes["SHOW_MESSAGE_BODY"]
> = {
  constructParamArray(proto) {
    return [proto?.content ?? ""];
  },
  constructMappedParamObject(proto) {
    return { content: proto?.content ?? "" };
  },
  toArray(parameters) {
    return [parameters.content];
  },
  fromArray(parameters) {
    return { content: parameters[0] };
  },
};

export const changeName: EventParameterFactory<
  ChangeName,
  EventCommandTypes["CHANGE_NAME"]
> = {
  constructParamArray(proto) {
    return [proto?.actorId ?? 0, proto?.name ?? ""];
  },
  constructMappedParamObject(proto) {
    return { actorId: proto?.actorId ?? 0, name: proto?.name ?? "" };
  },
  toArray(parameters) {
    return [parameters.actorId, parameters.name];
  },
  fromArray(parameters) {
    return { actorId: parameters[0], name: parameters[1] };
  },
};
