import { EventCommandFactory } from "./eventCommandFactory";
export const showMessage = new EventCommandFactory(101, {
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
export const showMessageBody = new EventCommandFactory(401, {
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
export const showChoices = new EventCommandFactory(102, {
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
export const inputNumber = new EventCommandFactory(103, {
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
export const selectItem = new EventCommandFactory(104, {
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
export const showScrollingText = new EventCommandFactory(105, {
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
export const showScrollingTextBody = new EventCommandFactory(405, {
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
export const comment = new EventCommandFactory(108, {
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
export const commentBody = new EventCommandFactory(408, {
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
export const showPicture = new EventCommandFactory(231, {
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
//# sourceMappingURL=paramConstants.js.map