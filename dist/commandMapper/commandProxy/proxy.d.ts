import { EventCode, EventCommand } from '@sigureya/rpgtypes';
export declare const create: <BodyCode extends EventCode, HeadCode extends EventCode>(array: ReadonlyArray<EventCommand>, index: number, headCode: HeadCode, bodyCode: BodyCode) => ({
    code: 0;
    parameters: [];
    indent: number;
} | {
    code: 101;
    parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
    indent: number;
} | {
    code: 401;
    parameters: [content: string];
    indent: number;
} | {
    code: 102;
    parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
    indent: number;
} | {
    code: 402;
    parameters: [index: number, name: string];
    indent: number;
} | {
    code: 103;
    parameters: [variableId: number, maxDigits: number];
    indent: number;
} | {
    code: 104;
    parameters: [variableId: number, itemType: number];
    indent: number;
} | {
    code: 105;
    parameters: [speed: number, skip: boolean];
    indent: number;
} | {
    code: 405;
    parameters: [content: string];
    indent: number;
} | {
    code: 108;
    parameters: [content: string];
    indent: number;
} | {
    code: 408;
    parameters: [content: string];
    indent: number;
} | {
    code: 109;
    parameters: [];
    indent: number;
} | {
    code: 111;
    parameters: [branchCode: 0, switchId: number, switchValue: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>] | [branchCode: 1, variableId: number, operand: number, value: number] | [branchCode: 2, selfSwitchId: string, value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>] | [branchCode: 3, time: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>] | [branchCode: 4, actorId: number, operand: number, value: number] | [branchCode: 5, enemyId: number] | [branchCode: 6, characterId: number] | [branchCode: 7, value: number, compair: 0 | 1 | 2] | [branchCode: 8, itemId: number] | [branchCode: 9, weaponId: number] | [branchCode: 10, armorId: number] | [branchCode: 11, buttonId: number] | [branchCode: 12, script: string] | [branchCode: 13, vehicleId: number];
    indent: number;
} | {
    code: 411;
    parameters: [];
    indent: number;
} | {
    code: 112;
    parameters: [];
    indent: number;
} | {
    code: 113;
    parameters: [];
    indent: number;
} | {
    code: 115;
    parameters: [];
    indent: number;
} | {
    code: 117;
    parameters: [id: number];
    indent: number;
} | {
    code: 118;
    parameters: [name: string];
    indent: number;
} | {
    code: 119;
    parameters: [name: string];
    indent: number;
} | {
    code: 121;
    parameters: [min: number, max: number, value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
    indent: number;
} | {
    code: 122;
    parameters: [startId: number, endId: number, operationType: number, operand: 0, value: number] | [startId: number, endId: number, operationType: number, operand: 1, variableId: number] | [startId: number, endId: number, operationType: number, operand: 2, min: number, max: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 0 | 1 | 2, itemId: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 3 | 4, index: number, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').STATUS>] | [startId: number, endId: number, operationType: number, operand: 3, type: 5, id: number, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').CHARACTER>] | [startId: number, endId: number, operationType: number, operand: 3, type: 6, index: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 7, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').OTHER>] | [startId: number, endId: number, operationType: number, operand: 3, type: 8, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').LAST>] | [startId: number, endId: number, operationType: number, operand: 4, code: string];
    indent: number;
} | {
    code: 123;
    parameters: [key: string, value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
    indent: number;
} | {
    code: 124;
    parameters: [operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, time: number];
    indent: number;
} | {
    code: 125;
    parameters: [operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number];
    indent: number;
} | {
    code: 126;
    parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number];
    indent: number;
} | {
    code: 127;
    parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
    indent: number;
} | {
    code: 128;
    parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
    indent: number;
} | {
    code: 129;
    parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, isInit: boolean];
    indent: number;
} | {
    code: 132;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 140;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 133;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 282;
    parameters: [tileSetId: number];
    indent: number;
} | {
    code: 283;
    parameters: [battleBack1Name: string, battleBack2name: string];
    indent: number;
} | {
    code: 301;
    parameters: [directDesignation: 0, troopId: number, canEscape: boolean, canLose: boolean];
    indent: number;
} | {
    code: 134;
    parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
    indent: number;
} | {
    code: 135;
    parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
    indent: number;
} | {
    code: 136;
    parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
    indent: number;
} | {
    code: 137;
    parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
    indent: number;
} | {
    code: 138;
    parameters: [color: import('@sigureya/rpgtypes').ColorRGBA];
    indent: number;
} | {
    code: 139;
    parameters: [me: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 236;
    parameters: [type: string, power: number, duration: number, needsWait: boolean];
    indent: number;
} | {
    code: 241;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 242;
    parameters: [duration: number];
    indent: number;
} | {
    code: 245;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 246;
    parameters: [duration: number];
    indent: number;
} | {
    code: 250;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 251;
    parameters: [];
    indent: number;
} | {
    code: 249;
    parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
    indent: number;
} | {
    code: 261;
    parameters: [filename: string];
    indent: number;
} | {
    code: 243;
    parameters: [];
    indent: number;
} | {
    code: 244;
    parameters: [];
    indent: number;
} | {
    code: 302;
    parameters: import('@sigureya/rpgtypes').ShopProcessing;
    indent: number;
} | {
    code: 605;
    parameters: import('@sigureya/rpgtypes').ShopGoods;
    indent: number;
} | {
    code: 303;
    parameters: [actorId: number, name: string];
    indent: number;
} | {
    code: 311;
    parameters: [targetSelect: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, index: number, oparation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, oprandType: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, VariableIdOrValue: number, allowDetah: boolean];
    indent: number;
} | {
    code: 312;
    parameters: [targetSelect: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, index: number, oparation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, oprandType: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, VariableIdOrValue: number];
    indent: number;
} | {
    code: 313;
    parameters: [targetSelect: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, index: number, oparation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, oprandType: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, VariableIdOrValue: number];
    indent: number;
} | {
    code: 320;
    parameters: [actorId: number, name: string];
    indent: number;
} | {
    code: 321;
    parameters: [actorId: number, classId: number, keepExp: boolean];
    indent: number;
} | {
    code: 284;
    parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
    indent: number;
} | {
    code: 322;
    parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
    indent: number;
} | {
    code: 323;
    parameters: [actorId: number, characterImage: string, characterIndex: number];
    indent: number;
} | {
    code: 201;
    parameters: [designation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, mapId: number, x: number, y: number, direction: import('@sigureya/rpgtypes').Direction8, fadeType: number];
    indent: number;
} | {
    code: 202;
    parameters: [];
    indent: number;
} | {
    code: 203;
    parameters: [];
    indent: number;
} | {
    code: 204;
    parameters: [];
    indent: number;
} | {
    code: 205;
    parameters: [characterId: number, movement: import('@sigureya/rpgtypes').MoveRouteData];
    indent: number;
} | {
    code: 206;
    parameters: [];
    indent: number;
} | {
    code: 211;
    parameters: [];
    indent: number;
} | {
    code: 212;
    parameters: [];
    indent: number;
} | {
    code: 213;
    parameters: [];
    indent: number;
} | {
    code: 214;
    parameters: [];
    indent: number;
} | {
    code: 216;
    parameters: [];
    indent: number;
} | {
    code: 217;
    parameters: [];
    indent: number;
} | {
    code: 221;
    parameters: [];
    indent: number;
} | {
    code: 222;
    parameters: [];
    indent: number;
} | {
    code: 223;
    parameters: [];
    indent: number;
} | {
    code: 224;
    parameters: [];
    indent: number;
} | {
    code: 225;
    parameters: [];
    indent: number;
} | {
    code: 230;
    parameters: [duration: number];
    indent: number;
} | {
    code: 231;
    parameters: import('@sigureya/rpgtypes').ShowPicture;
    indent: number;
} | {
    code: 232;
    parameters: [pictureId: number, filename: string, origin: 0 | 1, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: import('@sigureya/rpgtypes').PicutureBlendMode, wait: boolean, easingType: number];
    indent: number;
} | {
    code: 234;
    parameters: [];
    indent: number;
} | {
    code: 233;
    parameters: [];
    indent: number;
} | {
    code: 235;
    parameters: [pictureId: number];
    indent: number;
} | {
    code: 324;
    parameters: [actorId: number, name: string];
    indent: number;
} | {
    code: 325;
    parameters: [actorId: number, name: string];
    indent: number;
} | {
    code: 352;
    parameters: [];
    indent: number;
} | {
    code: 353;
    parameters: [];
    indent: number;
} | {
    code: 354;
    parameters: [];
    indent: number;
} | {
    code: 355;
    parameters: [script: string];
    indent: number;
} | {
    code: 655;
    parameters: [script: string];
    indent: number;
} | {
    code: 356;
    parameters: [data: string];
    indent: number;
} | {
    code: 357;
    parameters: [filename: string, commandName: string, anything: string, args: Record<string, string>];
    indent: number;
})[];
