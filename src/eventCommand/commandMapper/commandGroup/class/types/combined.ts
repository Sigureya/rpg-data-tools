import type { EventCommandGroup } from "./groopTypes";
import { joinHeaderAndBody } from "./join";
import type { TextCommandBody } from "./textCommandBody";

// 注釈やコメントなどの先頭とbodyが同じパラメータ型のパターン
export class CombinedEventCommandGroup<
  Header extends TextCommandBody,
  Body extends TextCommandBody
> implements EventCommandGroup<Header, Body>
{
  constructor(public readonly header: Header, public readonly bodies: Body[]) {}

  getBodyText(separator: string = "\n"): string {
    return [this.header, ...this.bodies]
      .map<string>((body) => body.parameters[0])
      .join(separator);
  }
  mergedBody(): Header {
    return {
      code: this.header.code,
      indent: this.header.indent,
      parameters: [this.getBodyText()],
    } as Header;
  }
  joinCommandBodies(): [Header, ...Body[]] {
    return joinHeaderAndBody(this);
  }

  normalizedCommands(): [Header] {
    return [this.mergedBody()];
  }
}
