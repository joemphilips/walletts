export * from "./iconType";
export declare enum Size {
    Mini = 0,
    Tiny = 1,
    Small = 2,
    Medium = 3,
    Large = 4,
    Big = 5,
    Huge = 6,
    Massive = 7,
    Fluid = 8,
}
export declare namespace Size {
    function ToEnum(sizeOrString: Size | string): Size;
    function ToClassname(size: Size | string): "" | " mini" | " tiny" | " small" | " medium" | " large" | " big" | " huge" | " massive" | " fluid";
}
export declare enum VerticalAlignment {
    Top = 0,
    Middle = 1,
    Bottom = 2,
}
export declare namespace VerticalAlignment {
    function ToEnum(vAlignmentOrString: VerticalAlignment | string): VerticalAlignment;
    function ToClassname(alignment: VerticalAlignment | string): string;
}
export declare enum TextAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
    Justified = 3,
}
export declare namespace TextAlignment {
    function ToEnum(tAlignmentOrString: TextAlignment | string): TextAlignment;
    function ToClassname(alignment: TextAlignment | string): string;
}
export declare enum Float {
    None = 0,
    Right = 1,
    Left = 2,
}
export declare namespace Float {
    function ToEnum(floatOrString: Float | string): Float;
    function ToClassname(float: Float | string): string;
}
export declare enum Attachment {
    None = 0,
    Top = 1,
    Bottom = 2,
}
export declare namespace Attachment {
    function ToEnum(attachmentOrString: Attachment | string): Attachment;
    function ToClassname(attachment: Attachment | string): string;
}
export declare enum Color {
    None = 0,
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Info = 4,
    Warning = 5,
    Error = 6,
}
export declare namespace Color {
    function ToEnum(colorOrString: Color | string): Color;
    function ToClassname(color: Color | string): string;
}
export declare enum Animation {
    Browse = 0,
    Drop = 1,
    Fade = 2,
    Flip = 3,
    Scale = 4,
    Fly = 5,
    Slide = 6,
    Swing = 7,
    Flash = 8,
    Shake = 9,
    Bounce = 10,
    Tada = 11,
    Pulse = 12,
    Jiggle = 13,
    None = 14,
}
export declare namespace Animation {
    function ToEnum(animationOrString: Animation | string): Animation;
    function ToClassname(anim: Animation | string): string;
    function isStatic(anim: Animation | string): Boolean;
    function isDirectional(anim: Animation | string): Boolean;
}
export declare enum Direction {
    In = 0,
    Out = 1,
    None = 2,
}
export declare namespace Direction {
    function ToEnum(directionOrString: Direction | string): Direction;
    function ToClassname(direction: Direction | string): " in" | " out";
}
export declare enum AnimationDirection {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3,
}
export declare namespace AnimationDirection {
    function ToEnum(animationDirectionOrString: AnimationDirection | string): AnimationDirection;
    function ToClassname(dir: AnimationDirection | string): string;
}
