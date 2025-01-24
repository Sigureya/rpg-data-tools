import type {
  EventCommandTable,
  EventCommandTable as EventCommandTypes,
} from "@sigureya/rpgtypes";

import type * as CMD from "@sigureya/rpgtypes/";

import type * as CommandParam from "./paramTypes";
import { EventCommandFactory } from "./eventCommandFactory";

export const showMessage = new EventCommandFactory<
  CommandParam.ShowMessage,
  CMD.Command_ShowMessage
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
  CMD.Command_ShowMessageBody
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
  CMD.Command_ShowChoices
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
export const showChoicesItem = new EventCommandFactory<
  CommandParam.ShowChoicesItem,
  EventCommandTable["SHOW_CHOICES_ITEM"]
>(402, {
  construct: (proto) => {
    return {
      index: proto.index ?? 0,
      name: proto.name ?? "",
    };
  },
  array: (obj) => {
    return [obj.index, obj.name];
  },

  fromArray: (arr) => {
    return {
      index: arr[0],
      name: arr[1],
    };
  },
});

export const inputNumber = new EventCommandFactory<
  CommandParam.InputNumber,
  CMD.Command_InputNumber
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
  CMD.Command_SelectItem
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

export const showScrollingText = new EventCommandFactory<
  CommandParam.ShowScrollingText,
  EventCommandTypes["SHOW_SCROLLING_TEXT"]
>(105, {
  construct: (proto) => {
    return {
      speed: proto.speed ?? 2,
      skip: proto.skip ?? false,
    };
  },
  array: (obj) => {
    return [obj.speed, obj.skip];
  },

  fromArray: (arr) => {
    return {
      speed: arr[0],
      skip: arr[1],
    };
  },
});

export const showScrollingTextBody = new EventCommandFactory<
  CommandParam.ShowScrollingTextBody,
  EventCommandTypes["SHOW_SCROLLING_TEXT_BODY"]
>(405, {
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

export const comment = new EventCommandFactory<
  CommandParam.Comment,
  CMD.Command_Comment
>(108, {
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

export const commentBody = new EventCommandFactory<
  CommandParam.CommentBody,
  CMD.Command_CommentBody
>(408, {
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

export const commonEvent = new EventCommandFactory<
  CommandParam.CommonEvent,
  CMD.Command_CommonEvent
>(117, {
  construct: (proto) => {
    return {
      commonEventId: proto.commonEventId ?? 1,
    };
  },
  array: (obj) => {
    return [obj.commonEventId];
  },
  fromArray: (arr) => {
    return {
      commonEventId: arr[0],
    };
  },
});

export const showPicture = new EventCommandFactory<
  CommandParam.ShowPicture,
  EventCommandTable["SHOW_PICTURE"]
>(231, {
  array: (obj) => {
    return [
      obj.pictureId,
      obj.filename,
      obj.origin,
      obj.x,
      obj.y,
      obj.scaleX,
      obj.scaleY,
      obj.opacity,
      obj.blendMode,
    ];
  },
  construct: (proto) => {
    return {
      pictureId: proto.pictureId ?? 1,
      filename: proto.filename ?? "",
      origin: proto.origin ?? 0,
      x: proto.x ?? 0,
      y: proto.y ?? 0,
      scaleX: proto.scaleX ?? 100,
      scaleY: proto.scaleY ?? 100,
      opacity: proto.opacity ?? 255,
      blendMode: proto.blendMode ?? 0,
    };
  },
  fromArray: (arr) => {
    return {
      pictureId: arr[0],
      filename: arr[1],
      origin: arr[2],
      x: arr[3],
      y: arr[4],
      scaleX: arr[5],
      scaleY: arr[6],
      opacity: arr[7],
      blendMode: arr[8],
    };
  },
});

export const changeName = new EventCommandFactory<
  CommandParam.ChangeName,
  EventCommandTypes["CHANGE_NAME"]
>(320, {
  construct: (proto) => {
    return {
      actorId: proto.actorId ?? 1,
      name: proto.name ?? "",
    };
  },
  array: (obj) => {
    return [obj.actorId, obj.name];
  },
  fromArray: (arr) => {
    return {
      actorId: arr[0],
      name: arr[1],
    };
  },
});

export const changeNickname = new EventCommandFactory<
  CommandParam.ChangeNickname,
  CMD.Command_ChangeNickName
>(324, {
  construct: (proto) => {
    return {
      actorId: proto.actorId ?? 1,
      nickname: proto.nickname ?? "",
    };
  },
  array: (obj) => {
    return [obj.actorId, obj.nickname];
  },
  fromArray: (arr) => {
    return {
      actorId: arr[0],
      nickname: arr[1],
    };
  },
});

export const changeProfile = new EventCommandFactory<
  CommandParam.ChangeProfile,
  CMD.Command_ChangeProfile
>(325, {
  construct: (proto) => {
    return {
      actorId: proto.actorId ?? 1,
      profile: proto.profile ?? "",
    };
  },
  array: (obj) => {
    return [obj.actorId, obj.profile];
  },
  fromArray: (arr) => {
    return {
      actorId: arr[0],
      profile: arr[1],
    };
  },
});
