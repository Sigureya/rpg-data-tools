import {
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockedObject,
} from "vitest";
import type { TextCommandMapper } from "./textCommandMapper";
import type {
  Command_ChangeName,
  Command_ChangeNickName,
  Command_ChangeProfile,
  Command_ShowChoices,
  EventCommand,
} from "@sigureya/rpgtypes";
import { handlerDispatch } from "./text";

const createMockMapper = (): MockedObject<TextCommandMapper<void>> => ({
  showMessage: vi.fn(),
  showScrollingText: vi.fn(),
  comment: vi.fn(),

  script: vi.fn(),
  showChoices: vi.fn(),
  choiceWhen: vi.fn(),
  changeName: vi.fn(),
  changeProfile: vi.fn(),
  changeNickname: vi.fn(),
  commentBody: vi.fn(),
  other: vi.fn(),
});
describe("handlerDispatch", () => {
  let mapper: MockedObject<TextCommandMapper<void>>;
  beforeEach(() => (mapper = createMockMapper()));

  test("ShowChoices", () => {
    const command: Command_ShowChoices = {
      code: 102,
      parameters: [[], 0, 0, 0, 0],
      indent: 0,
    };
    handlerDispatch([command], 0, mapper);
    expect(mapper.showChoices).toHaveBeenCalledWith(command, 0, [command]);
  });
  test("ChangeName", () => {
    const command: Command_ChangeName = {
      code: 320,
      parameters: [1, "name"],
      indent: 0,
    };
    mapper.changeName.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.changeName).toHaveBeenCalledWith(command, 0, [command]);
  });

  test("ChangeProfile", () => {
    const command: Command_ChangeProfile = {
      code: 325,
      parameters: [1, "profile"],
      indent: 0,
    };
    mapper.changeProfile.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.changeProfile).toHaveBeenCalledWith(command, 0, [command]);
  });

  test("changeNickname", () => {
    const command: Command_ChangeNickName = {
      code: 324,
      parameters: [1, "nickname"],
      indent: 0,
    };
    mapper.changeNickname.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.changeNickname).toHaveBeenCalledWith(command, 0, [command]);
  });

  test("other", () => {
    const command: EventCommand = { code: 0, parameters: [], indent: 0 };
    mapper.other.mockReturnValue(undefined);
    handlerDispatch([command], 0, mapper);
    expect(mapper.other).toHaveBeenCalledWith(command, 0, [command]);
  });
});
