import { Definition } from "./Definition";
import { Builder } from "./Builder";
import { TypedocKind } from "./TypedocSchema";

export class EnumProperty extends Definition {

  constructor(kind: TypedocKind, depth: number) {
    super(kind, depth);
  }

  build(builder: Builder): void {
    this.addComment(builder, this.kind.comment);
    builder.append(`${this.ident()}${this.kind.name} = ${this.kind.defaultValue},`).doubleLine()
  }
  
}