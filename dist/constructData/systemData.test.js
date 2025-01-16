import { describe, it, expect } from "vitest";
import { createSystemData, createTerms, createAdvanced, createVehicle, createBasicTerms, createParamNamesArray, createCommandsArray, createMessages, createSystemSoundsArray, } from "./systemData";
import { createAudio } from "./audio";
const mockAudio = { name: "", volume: 90, pitch: 100, pan: 0 };
const mockVehicle = {
    bgm: mockAudio,
    characterIndex: 0,
    characterName: "",
    startMapId: 0,
    startX: 0,
    startY: 0,
};
const mockAdvanced = {
    gameId: 0,
    screenWidth: 0,
    screenHeight: 0,
    uiAreaWidth: 0,
    uiAreaHeight: 0,
    windowOpacity: 0,
    screenScale: 0,
    numberFontFilename: "",
    mainFontFilename: "",
    fallbackFonts: "",
    fontSize: 0,
};
describe("createSystemData", () => {
    it("should return default Data_System when no arguments are passed", () => {
        const result = createSystemData();
        expect(result).toEqual({
            local: "",
            gameTitle: "",
            currencyUnit: "",
            title1Name: "",
            terms: createTerms(),
            title2Name: "",
            optAutosave: false,
            attackMotions: [],
            startMapId: 0,
            startX: 0,
            startY: 0,
            switches: [],
            windowTone: [0, 0, 0, 0],
            editMapId: 0,
            testTroopId: 0,
            testBattlers: [],
            versionId: 0,
            advanced: createAdvanced(),
            armorTypes: [],
            elements: [],
            variables: [],
            equipTypes: [],
            sounds: createSystemSoundsArray(),
            titleBgm: mockAudio,
            gameoverMe: mockAudio,
            battleBgm: mockAudio,
            defeatMe: mockAudio,
            victoryMe: mockAudio,
            battleback1Name: "",
            battleback2Name: "",
            battlerName: "",
            weaponTypes: [],
            skillTypes: [],
            optDisplayTp: false,
            optDrawTitle: false,
            optExtraExp: false,
            optFloorDeath: false,
            optFollowers: false,
            optKeyItemsNumber: false,
            optSideView: false,
            optSlipDeath: false,
            optTransparent: false,
            boat: mockVehicle,
            ship: mockVehicle,
            airship: mockVehicle,
            tileSize: 0,
        });
    });
    it("should override default values with provided arguments", () => {
        const customData = {
            gameTitle: "My Game",
            optAutosave: true,
        };
        const result = createSystemData(customData);
        expect(result.gameTitle).toBe("My Game");
        expect(result.optAutosave).toBe(true);
        expect(result.local).toBe("");
    });
});
describe("createTerms", () => {
    it("should return default terms when no arguments are passed", () => {
        const result = createTerms();
        expect(result).toEqual({
            messages: createMessages({}),
            commands: createCommandsArray({}),
            params: createParamNamesArray({}),
            basic: createBasicTerms({}),
        });
        expect(result).toEqual({
            messages: createMessages(undefined),
            commands: createCommandsArray(undefined),
            params: createParamNamesArray(undefined),
            basic: createBasicTerms(undefined),
        });
    });
    it("should override default terms with provided arguments", () => {
        const customTerms = {
            messages: { alwaysDash: "Dash On" },
        };
        const result = createTerms(customTerms);
        expect(result.messages.alwaysDash).toBe("Dash On");
        expect(result.commands[0]).toBe("");
    });
});
describe("createAdvanced", () => {
    it("should return default advanced settings when no arguments are passed", () => {
        const result = createAdvanced();
        expect(result).toEqual(mockAdvanced);
    });
    it("should override default advanced settings with provided arguments", () => {
        const customAdvanced = { screenWidth: 1280 };
        const result = createAdvanced(customAdvanced);
        expect(result.screenWidth).toBe(1280);
        expect(result.screenHeight).toBe(0);
    });
});
describe("createVehicle", () => {
    it("should return default vehicle settings when no arguments are passed", () => {
        const result = createVehicle();
        expect(result).toEqual(mockVehicle);
    });
    it("should override default vehicle settings with provided arguments", () => {
        const customVehicle = { characterName: "Boat" };
        const result = createVehicle(customVehicle);
        expect(result.characterName).toBe("Boat");
        expect(result.startMapId).toBe(0);
    });
});
describe("createCommandsArray", () => {
    it("should return an array with default values", () => {
        const result = createCommandsArray();
        expect(result).toEqual([
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]);
    });
    it("should return an array with custom values for all members", () => {
        const proto = {
            fight: "Attack",
            escape: "Run",
            attack: "Strike",
            guard: "Defend",
            item: "Items",
            skill: "Skills",
            equip: "Equipment",
            status: "Status",
            formation: "Formation",
            save: "Save",
            gameEnd: "End Game",
            options: "Settings",
            weapon: "Weapons",
            armor: "Armors",
            keyItem: "Key Items",
            equip2: "Secondary Equip",
            optimize: "Optimize",
            clear: "Clear",
            newGame: "New Game",
            continue_: "Continue",
            notUsed20: "Unused 20",
            toTitle: "Return to Title",
            cancel: "Cancel",
            notUsed23: "Unused 23",
            buy: "Buy",
            sell: "Sell",
        };
        const result = createCommandsArray(proto);
        expect(result).toEqual([
            "Attack",
            "Run",
            "Strike",
            "Defend",
            "Items",
            "Skills",
            "Equipment",
            "Status",
            "Formation",
            "Save",
            "End Game",
            "Settings",
            "Weapons",
            "Armors",
            "Key Items",
            "Secondary Equip",
            "Optimize",
            "Clear",
            "New Game",
            "Continue",
            "Unused 20",
            "Return to Title",
            "Cancel",
            "Unused 23",
            "Buy",
            "Sell",
        ]);
    });
});
describe("createMessages", () => {
    it("should return an object with default values", () => {
        const result = createMessages();
        expect(result).toEqual({
            alwaysDash: "",
            commandRemember: "",
            touchUI: "",
            bgmVolume: "",
            bgsVolume: "",
            meVolume: "",
            seVolume: "",
            possession: "",
            expTotal: "",
            expNext: "",
            saveMessage: "",
            loadMessage: "",
            file: "",
            autosave: "",
            partyName: "",
            emerge: "",
            preemptive: "",
            surprise: "",
            escapeStart: "",
            escapeFailure: "",
            victory: "",
            defeat: "",
            obtainExp: "",
            obtainGold: "",
            obtainItem: "",
            levelUp: "",
            obtainSkill: "",
            useItem: "",
            criticalToEnemy: "",
            criticalToActor: "",
            actorDamage: "",
            actorRecovery: "",
            actorGain: "",
            actorLoss: "",
            actorDrain: "",
            actorNoDamage: "",
            actorNoHit: "",
            enemyDamage: "",
            enemyRecovery: "",
            enemyGain: "",
            enemyLoss: "",
            enemyDrain: "",
            enemyNoDamage: "",
            enemyNoHit: "",
            evasion: "",
            magicEvasion: "",
            magicReflection: "",
            counterAttack: "",
            substitute: "",
            buffAdd: "",
            debuffAdd: "",
            buffRemove: "",
            actionFailure: "",
        });
    });
    it("should return an object with custom values", () => {
        const proto = {
            victory: "Victory Achieved!",
            defeat: "Defeated!",
        };
        const result = createMessages(proto);
        expect(result.victory).toBe("Victory Achieved!");
        expect(result.defeat).toBe("Defeated!");
    });
});
describe("createSystemSoundsArray", () => {
    it("should return an array of default sound objects", () => {
        const result = createSystemSoundsArray();
        expect(result).toHaveLength(24);
        result.forEach((sound) => {
            expect(sound).toEqual(createAudio());
        });
    });
    it("should return an array with custom sound objects", () => {
        const customAudio = createAudio();
        const proto = { cursor: customAudio, ok: customAudio };
        const result = createSystemSoundsArray(proto);
        expect(result[0]).toBe(customAudio);
        expect(result[1]).toBe(customAudio);
    });
});
//# sourceMappingURL=systemData.test.js.map