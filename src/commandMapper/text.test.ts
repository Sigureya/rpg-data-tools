import { vi, type MockedObject } from "vitest";
import type { TextCommandMapper } from "./textCommandMapper";

const mockMapper: MockedObject<TextCommandMapper<void>> = {
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
};
