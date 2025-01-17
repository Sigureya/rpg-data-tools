import type { EventCommandTypes } from "@sigureya/rpgtypes";
import type { EventParameterFactory } from "./mappingObjecToMZ";
import { ParameterFactory } from "./template";

import type * as CommandParam from "./paramTypes";
import { EventCommandFactory } from "./eventCommandFactory";

export const showMessage = new EventCommandFactory<
  CommandParam.ShowMessage,
  EventCommandTypes["SHOW_MESSAGE"]
>(101, {
  construct: (proto) => {
    return {
      facename: proto.facename ?? "",
      faceIndex: proto.faceIndex ?? 0,
      background: proto.background ?? 0,
      positionType: proto.positionType ?? 2,
      speakerName: proto.speakerName ?? "",
    };
  },
  array: (obj) => {
    return [
      obj.facename,
      obj.faceIndex,
      obj.background,
      obj.positionType,
      obj.speakerName,
    ];
  },

  fromArray: (arr) => {
    return {
      facename: arr[0],
      faceIndex: arr[1],
      background: arr[2],
      positionType: arr[3],
      speakerName: arr[4],
    };
  },
});

export const showMessageBody = new EventCommandFactory<
  CommandParam.ShowMessageBody,
  EventCommandTypes["SHOW_MESSAGE_BODY"]
>(401, {
  construct: (proto) => {
    return {
      content: proto.content ?? "",
    };
  },
  array: (obj) => {
    return [obj.content];
  },

  fromArray: (arr) => {
    return {
      content: arr[0],
    };
  },
});

export const showChoices = new EventCommandFactory<
  CommandParam.ShowChoices,
  EventCommandTypes["SHOW_CHOICES"]
>(102, {
  construct: (proto) => {
    return {
      choices: proto.choices ?? [],
      cancelType: proto.cancelType ?? 0,
      defaultType: proto.defaultType ?? 0,
      positionType: proto.positionType ?? 2,
      background: proto.background ?? 0,
    };
  },
  array: (obj) => {
    return [
      obj.choices,
      obj.cancelType,
      obj.defaultType,
      obj.positionType,
      obj.background,
    ];
  },

  fromArray: (arr) => {
    return {
      choices: arr[0],
      cancelType: arr[1],
      defaultType: arr[2],
      positionType: arr[3],
      background: arr[4],
    };
  },
});
export const inputNumber = new EventCommandFactory<
  CommandParam.InputNumber,
  EventCommandTypes["INPUT_NUMBER"]
>(103, {
  construct: (proto) => {
    return {
      variableId: proto.variableId ?? 1,
      maxDigits: proto.maxDigits ?? 1,
    };
  },
  array: (obj) => {
    return [obj.variableId, obj.maxDigits];
  },

  fromArray: (arr) => {
    return {
      variableId: arr[0],
      maxDigits: arr[1],
    };
  },
});

export const selectItem = new EventCommandFactory<
  CommandParam.SelectItem,
  EventCommandTypes["SELECT_ITEM"]
>(104, {
  construct: (proto) => {
    return {
      variableId: proto.variableId ?? 1,
      itemType: proto.itemType ?? 1,
    };
  },
  array: (obj) => {
    return [obj.variableId, obj.itemType];
  },

  fromArray: (arr) => {
    return {
      variableId: arr[0],
      itemType: arr[1],
    };
  },
});
