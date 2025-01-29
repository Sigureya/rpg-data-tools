import { EventCommand } from '@sigureya/rpgtypes';
import { Command_TextBody as EventCommandBody, EventCommandPair } from './pickCommands';
import { EventCommandGroup } from './types';
export declare abstract class BaseEventCommandGroup<Header extends EventCommand, Body extends EventCommandBody> implements EventCommandGroup<Header, Body> {
    protected pair: EventCommandPair<Header, Body>;
    constructor(pair: EventCommandPair<Header, Body>);
    protected abstract getExpandedBodies(): EventCommandBody[];
    abstract normalizedCommands(): EventCommand[];
    getBodyText(separator?: string): string;
    joinCommandBodies(): EventCommandBody[];
    get header(): Header;
    get bodies(): Body[];
}
export declare class SimpleEventCommandGroup<Header extends EventCommand, Body extends EventCommandBody> extends BaseEventCommandGroup<Header, Body> {
    readonly bodyCode: Body["code"];
    constructor(pair: EventCommandPair<Header, Body>, bodyCode: Body["code"]);
    protected getExpandedBodies(): Body[];
    normalizedCommands(): ({
        parameters: [];
        code: 0;
        indent: number;
    } | {
        parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
        code: 101;
        indent: number;
    } | {
        parameters: [content: string];
        code: 401;
        indent: number;
    } | {
        parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
        code: 102;
        indent: number;
    } | {
        parameters: [index: number, name: string];
        code: 402;
        indent: number;
    } | {
        parameters: [variableId: number, maxDigits: number];
        code: 103;
        indent: number;
    } | {
        parameters: [variableId: number, itemType: number];
        code: 104;
        indent: number;
    } | {
        parameters: [speed: number, skip: boolean];
        code: 105;
        indent: number;
    } | {
        parameters: [content: string];
        code: 405;
        indent: number;
    } | {
        parameters: [content: string];
        code: 108;
        indent: number;
    } | {
        parameters: [content: string];
        code: 408;
        indent: number;
    } | {
        parameters: [];
        code: 109;
        indent: number;
    } | {
        parameters: [branchCode: 0, switchId: number, switchValue: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>] | [branchCode: 1, variableId: number, operand: number, value: number] | [branchCode: 2, selfSwitchId: string, value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>] | [branchCode: 3, time: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>] | [branchCode: 4, actorId: number, operand: number, value: number] | [branchCode: 5, enemyId: number] | [branchCode: 6, characterId: number] | [branchCode: 7, value: number, compair: 0 | 1 | 2] | [branchCode: 8, itemId: number] | [branchCode: 9, weaponId: number] | [branchCode: 10, armorId: number] | [branchCode: 11, buttonId: number] | [branchCode: 12, script: string] | [branchCode: 13, vehicleId: number];
        code: 111;
        indent: number;
    } | {
        parameters: [];
        code: 411;
        indent: number;
    } | {
        parameters: [];
        code: 112;
        indent: number;
    } | {
        parameters: [];
        code: 113;
        indent: number;
    } | {
        parameters: [];
        code: 115;
        indent: number;
    } | {
        parameters: [id: number];
        code: 117;
        indent: number;
    } | {
        parameters: [name: string];
        code: 118;
        indent: number;
    } | {
        parameters: [name: string];
        code: 119;
        indent: number;
    } | {
        parameters: [min: number, max: number, value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
        code: 121;
        indent: number;
    } | {
        parameters: [startId: number, endId: number, operationType: number, operand: 0, value: number] | [startId: number, endId: number, operationType: number, operand: 1, variableId: number] | [startId: number, endId: number, operationType: number, operand: 2, min: number, max: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 0 | 1 | 2, itemId: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 3 | 4, index: number, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').STATUS>] | [startId: number, endId: number, operationType: number, operand: 3, type: 5, id: number, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').CHARACTER>] | [startId: number, endId: number, operationType: number, operand: 3, type: 6, index: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 7, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').OTHER>] | [startId: number, endId: number, operationType: number, operand: 3, type: 8, param: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').LAST>] | [startId: number, endId: number, operationType: number, operand: 4, code: string];
        code: 122;
        indent: number;
    } | {
        parameters: [key: string, value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
        code: 123;
        indent: number;
    } | {
        parameters: [operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, time: number];
        code: 124;
        indent: number;
    } | {
        parameters: [operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number];
        code: 125;
        indent: number;
    } | {
        parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number];
        code: 126;
        indent: number;
    } | {
        parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
        code: 127;
        indent: number;
    } | {
        parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
        code: 128;
        indent: number;
    } | {
        parameters: [id: number, operation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, isInit: boolean];
        code: 129;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 132;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 140;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 133;
        indent: number;
    } | {
        parameters: [tileSetId: number];
        code: 282;
        indent: number;
    } | {
        parameters: [battleBack1Name: string, battleBack2name: string];
        code: 283;
        indent: number;
    } | {
        parameters: [directDesignation: 0, troopId: number, canEscape: boolean, canLose: boolean];
        code: 301;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
        code: 134;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
        code: 135;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
        code: 136;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Toggle>];
        code: 137;
        indent: number;
    } | {
        parameters: [color: import('@sigureya/rpgtypes').ColorRGBA];
        code: 138;
        indent: number;
    } | {
        parameters: [me: import('@sigureya/rpgtypes').AudioFileParams];
        code: 139;
        indent: number;
    } | {
        parameters: [type: string, power: number, duration: number, needsWait: boolean];
        code: 236;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 241;
        indent: number;
    } | {
        parameters: [duration: number];
        code: 242;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 245;
        indent: number;
    } | {
        parameters: [duration: number];
        code: 246;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 250;
        indent: number;
    } | {
        parameters: [];
        code: 251;
        indent: number;
    } | {
        parameters: [value: import('@sigureya/rpgtypes').AudioFileParams];
        code: 249;
        indent: number;
    } | {
        parameters: [filename: string];
        code: 261;
        indent: number;
    } | {
        parameters: [];
        code: 243;
        indent: number;
    } | {
        parameters: [];
        code: 244;
        indent: number;
    } | {
        parameters: import('@sigureya/rpgtypes').ShopProcessing;
        code: 302;
        indent: number;
    } | {
        parameters: import('@sigureya/rpgtypes').ShopGoods;
        code: 605;
        indent: number;
    } | {
        parameters: [actorId: number, name: string];
        code: 303;
        indent: number;
    } | {
        parameters: [targetSelect: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, index: number, oparation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, oprandType: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, VariableIdOrValue: number, allowDetah: boolean];
        code: 311;
        indent: number;
    } | {
        parameters: [targetSelect: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, index: number, oparation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, oprandType: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, VariableIdOrValue: number];
        code: 312;
        indent: number;
    } | {
        parameters: [targetSelect: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, index: number, oparation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Operation_PlusMinus>, oprandType: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, VariableIdOrValue: number];
        code: 313;
        indent: number;
    } | {
        parameters: [actorId: number, name: string];
        code: 320;
        indent: number;
    } | {
        parameters: [actorId: number, classId: number, keepExp: boolean];
        code: 321;
        indent: number;
    } | {
        parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
        code: 284;
        indent: number;
    } | {
        parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
        code: 322;
        indent: number;
    } | {
        parameters: [actorId: number, characterImage: string, characterIndex: number];
        code: 323;
        indent: number;
    } | {
        parameters: [designation: import('@sigureya/rpgtypes').ValueOf<import('@sigureya/rpgtypes').Designation>, mapId: number, x: number, y: number, direction: import('@sigureya/rpgtypes').Direction8, fadeType: number];
        code: 201;
        indent: number;
    } | {
        parameters: [];
        code: 202;
        indent: number;
    } | {
        parameters: [];
        code: 203;
        indent: number;
    } | {
        parameters: [];
        code: 204;
        indent: number;
    } | {
        parameters: [characterId: number, movement: import('@sigureya/rpgtypes').MoveRouteData];
        code: 205;
        indent: number;
    } | {
        parameters: [];
        code: 206;
        indent: number;
    } | {
        parameters: [];
        code: 211;
        indent: number;
    } | {
        parameters: [];
        code: 212;
        indent: number;
    } | {
        parameters: [];
        code: 213;
        indent: number;
    } | {
        parameters: [];
        code: 214;
        indent: number;
    } | {
        parameters: [];
        code: 216;
        indent: number;
    } | {
        parameters: [];
        code: 217;
        indent: number;
    } | {
        parameters: [];
        code: 221;
        indent: number;
    } | {
        parameters: [];
        code: 222;
        indent: number;
    } | {
        parameters: [];
        code: 223;
        indent: number;
    } | {
        parameters: [];
        code: 224;
        indent: number;
    } | {
        parameters: [];
        code: 225;
        indent: number;
    } | {
        parameters: [duration: number];
        code: 230;
        indent: number;
    } | {
        parameters: import('@sigureya/rpgtypes').ShowPicture;
        code: 231;
        indent: number;
    } | {
        parameters: [pictureId: number, filename: string, origin: 0 | 1, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: import('@sigureya/rpgtypes').PicutureBlendMode, wait: boolean, easingType: number];
        code: 232;
        indent: number;
    } | {
        parameters: [];
        code: 234;
        indent: number;
    } | {
        parameters: [];
        code: 233;
        indent: number;
    } | {
        parameters: [pictureId: number];
        code: 235;
        indent: number;
    } | {
        parameters: [actorId: number, name: string];
        code: 324;
        indent: number;
    } | {
        parameters: [actorId: number, name: string];
        code: 325;
        indent: number;
    } | {
        parameters: [];
        code: 352;
        indent: number;
    } | {
        parameters: [];
        code: 353;
        indent: number;
    } | {
        parameters: [];
        code: 354;
        indent: number;
    } | {
        parameters: [script: string];
        code: 355;
        indent: number;
    } | {
        parameters: [script: string];
        code: 655;
        indent: number;
    } | {
        parameters: [data: string];
        code: 356;
        indent: number;
    } | {
        parameters: [filename: string, commandName: string, anything: string, args: Record<string, string>];
        code: 357;
        indent: number;
    })[];
}
export declare class CombinedEventCommandGroup<Header extends EventCommandBody, Body extends EventCommandBody> extends BaseEventCommandGroup<Header, Body> {
    constructor(pair: EventCommandPair<Header, Body>);
    protected getExpandedBodies(): [Header, ...Body[]];
    normalizedCommands(): [Header];
}
