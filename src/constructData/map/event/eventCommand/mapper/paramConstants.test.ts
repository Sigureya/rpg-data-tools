import { describe, test, expect } from "vitest";
import * as $ from "./paramConstants";
describe("paramConstants", () => {
  test("comment", () => {
    const cmd = $.comment.constructe({ content: "aaaa" });
    expect(cmd.parameters).toEqual(["aaaa"]);
  });
});
