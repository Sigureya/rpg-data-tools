import type { EventCommand } from "@sigureya/rpgtypes";
import type { TextCommandBody } from "./textCommandBody";
import type { EventCommandGroup } from "./groopTypes";

//　メッセージとかscrollテキスト。ヘッダとbodyが異なるパターン
export class SimpleEventCommandGroup<
  Header extends EventCommand,
  Body extends TextCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(
    public readonly bodyCode: Body["code"],
    public readonly header: Header,
    public readonly bodies: Body[]
  ) {}
  normalizedCommands(): [Header, Body] | [Header] {
    const header: Header = {
      ...this.header,
      code: this.header.code,
      indent: this.header.indent,
      parameters: [...this.header.parameters],
    };
    if (this.bodies.length === 0) {
      return [header];
    }
    return [header, this.mergedBody()];
  }

  getBodyText(separator?: string): string {
    return this.bodies
      .map<string>((body) => body.parameters[0])
      .join(separator ?? "\n");
  }
  joinCommandBodies(): Body[] {
    return this.bodies;
  }
  mergedBody(): Body {
    return {
      code: this.bodyCode,
      indent: this.header.indent,
      parameters: [this.getBodyText()],
    } as Body;
  }
}
