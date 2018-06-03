"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
__export(require("./iconType"));
var Size;
(function (Size) {
    Size[Size["Mini"] = 0] = "Mini";
    Size[Size["Tiny"] = 1] = "Tiny";
    Size[Size["Small"] = 2] = "Small";
    Size[Size["Medium"] = 3] = "Medium";
    Size[Size["Large"] = 4] = "Large";
    Size[Size["Big"] = 5] = "Big";
    Size[Size["Huge"] = 6] = "Huge";
    Size[Size["Massive"] = 7] = "Massive";
    Size[Size["Fluid"] = 8] = "Fluid";
})(Size = exports.Size || (exports.Size = {}));
(function (Size) {
    function ToEnum(sizeOrString) {
        return typeof (sizeOrString) === "number"
            ? sizeOrString
            : Size[utils_1.capitalize(sizeOrString)];
    }
    Size.ToEnum = ToEnum;
    function ToClassname(size) {
        size = ToEnum(size);
        switch (size) {
            case Size.Mini: return " mini";
            case Size.Tiny: return " tiny";
            case Size.Small: return " small";
            case Size.Medium: return " medium";
            case Size.Large: return " large";
            case Size.Big: return " big";
            case Size.Huge: return " huge";
            case Size.Massive: return " massive";
            case Size.Fluid: return " fluid";
            default: return "";
        }
    }
    Size.ToClassname = ToClassname;
})(Size = exports.Size || (exports.Size = {}));
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Middle"] = 1] = "Middle";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
(function (VerticalAlignment) {
    function ToEnum(vAlignmentOrString) {
        return typeof (vAlignmentOrString) === "number"
            ? vAlignmentOrString
            : VerticalAlignment[utils_1.capitalize(vAlignmentOrString)];
    }
    VerticalAlignment.ToEnum = ToEnum;
    function ToClassname(alignment) {
        alignment = VerticalAlignment.ToEnum(alignment);
        switch (alignment) {
            case VerticalAlignment.Top: return " top aligned";
            case VerticalAlignment.Middle: return " middle aligned";
            case VerticalAlignment.Bottom: return " bottom aligned";
            default: return "";
        }
    }
    VerticalAlignment.ToClassname = ToClassname;
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
var TextAlignment;
(function (TextAlignment) {
    TextAlignment[TextAlignment["Left"] = 0] = "Left";
    TextAlignment[TextAlignment["Right"] = 1] = "Right";
    TextAlignment[TextAlignment["Center"] = 2] = "Center";
    TextAlignment[TextAlignment["Justified"] = 3] = "Justified";
})(TextAlignment = exports.TextAlignment || (exports.TextAlignment = {}));
(function (TextAlignment) {
    function ToEnum(tAlignmentOrString) {
        return typeof (tAlignmentOrString) === "number"
            ? tAlignmentOrString
            : TextAlignment[utils_1.capitalize(tAlignmentOrString)];
    }
    TextAlignment.ToEnum = ToEnum;
    function ToClassname(alignment) {
        alignment = TextAlignment.ToEnum(alignment);
        switch (alignment) {
            case TextAlignment.Left: return " left aligned";
            case TextAlignment.Right: return " right aligned";
            case TextAlignment.Center: return " center aligned";
            case TextAlignment.Justified: return " justified";
            default: return "";
        }
    }
    TextAlignment.ToClassname = ToClassname;
})(TextAlignment = exports.TextAlignment || (exports.TextAlignment = {}));
var Float;
(function (Float) {
    Float[Float["None"] = 0] = "None";
    Float[Float["Right"] = 1] = "Right";
    Float[Float["Left"] = 2] = "Left";
})(Float = exports.Float || (exports.Float = {}));
(function (Float) {
    function ToEnum(floatOrString) {
        return typeof (floatOrString) === "number"
            ? floatOrString
            : Float[utils_1.capitalize(floatOrString)];
    }
    Float.ToEnum = ToEnum;
    function ToClassname(float) {
        float = Float.ToEnum(float);
        switch (float) {
            case Float.Left: return " left floated";
            case Float.Right: return " right floated";
            default: return "";
        }
    }
    Float.ToClassname = ToClassname;
})(Float = exports.Float || (exports.Float = {}));
var Attachment;
(function (Attachment) {
    Attachment[Attachment["None"] = 0] = "None";
    Attachment[Attachment["Top"] = 1] = "Top";
    Attachment[Attachment["Bottom"] = 2] = "Bottom";
})(Attachment = exports.Attachment || (exports.Attachment = {}));
(function (Attachment) {
    function ToEnum(attachmentOrString) {
        return typeof (attachmentOrString) === "number"
            ? attachmentOrString
            : Attachment[utils_1.capitalize(attachmentOrString)];
    }
    Attachment.ToEnum = ToEnum;
    function ToClassname(attachment) {
        attachment = Attachment.ToEnum(attachment);
        switch (attachment) {
            case Attachment.None: return " attached";
            case Attachment.Top: return " top attached";
            case Attachment.Bottom: return " bottom attached";
            default: return "";
        }
    }
    Attachment.ToClassname = ToClassname;
})(Attachment = exports.Attachment || (exports.Attachment = {}));
var Color;
(function (Color) {
    Color[Color["None"] = 0] = "None";
    Color[Color["Primary"] = 1] = "Primary";
    Color[Color["Secondary"] = 2] = "Secondary";
    Color[Color["Success"] = 3] = "Success";
    Color[Color["Info"] = 4] = "Info";
    Color[Color["Warning"] = 5] = "Warning";
    Color[Color["Error"] = 6] = "Error";
})(Color = exports.Color || (exports.Color = {}));
(function (Color) {
    function ToEnum(colorOrString) {
        return typeof (colorOrString) === "number"
            ? colorOrString
            : Color[utils_1.capitalize(colorOrString)];
    }
    Color.ToEnum = ToEnum;
    function ToClassname(color) {
        color = Color.ToEnum(color);
        switch (color) {
            case Color.Primary: return " primaryColored";
            case Color.Secondary: return " secondaryColored";
            case Color.Success: return " successColored";
            case Color.Info: return " infoColored";
            case Color.Warning: return " warningColored";
            case Color.Error: return " errorColored ";
            default: return "";
        }
    }
    Color.ToClassname = ToClassname;
})(Color = exports.Color || (exports.Color = {}));
var Animation;
(function (Animation) {
    Animation[Animation["Browse"] = 0] = "Browse";
    Animation[Animation["Drop"] = 1] = "Drop";
    Animation[Animation["Fade"] = 2] = "Fade";
    Animation[Animation["Flip"] = 3] = "Flip";
    Animation[Animation["Scale"] = 4] = "Scale";
    Animation[Animation["Fly"] = 5] = "Fly";
    Animation[Animation["Slide"] = 6] = "Slide";
    Animation[Animation["Swing"] = 7] = "Swing";
    Animation[Animation["Flash"] = 8] = "Flash";
    Animation[Animation["Shake"] = 9] = "Shake";
    Animation[Animation["Bounce"] = 10] = "Bounce";
    Animation[Animation["Tada"] = 11] = "Tada";
    Animation[Animation["Pulse"] = 12] = "Pulse";
    Animation[Animation["Jiggle"] = 13] = "Jiggle";
    Animation[Animation["None"] = 14] = "None";
})(Animation = exports.Animation || (exports.Animation = {}));
(function (Animation) {
    function ToEnum(animationOrString) {
        return typeof (animationOrString) === "number"
            ? animationOrString
            : Animation[utils_1.capitalize(animationOrString)];
    }
    Animation.ToEnum = ToEnum;
    function ToClassname(anim) {
        anim = Animation.ToEnum(anim);
        switch (anim) {
            case Animation.Browse: return " browse";
            case Animation.Drop: return " drop";
            case Animation.Fade: return " fade";
            case Animation.Flip: return " flip";
            case Animation.Scale: return " scale";
            case Animation.Fly: return " fly";
            case Animation.Slide: return " slide";
            case Animation.Swing: return " swing";
            case Animation.Flash: return " flash";
            case Animation.Shake: return " shake";
            case Animation.Bounce: return " bounce";
            case Animation.Tada: return " tada";
            case Animation.Pulse: return " pulse";
            case Animation.Jiggle: return " jiggle";
        }
    }
    Animation.ToClassname = ToClassname;
    var staticAnimations = [Animation.Flash, Animation.Shake,
        Animation.Bounce, Animation.Tada, Animation.Pulse, Animation.Jiggle];
    function isStatic(anim) {
        return staticAnimations.indexOf(Animation.ToEnum(anim)) !== -1;
    }
    Animation.isStatic = isStatic;
    var directionAnimations = [Animation.Browse, Animation.Fade,
        Animation.Fly, Animation.Slide, Animation.Swing];
    function isDirectional(anim) {
        return directionAnimations.indexOf(Animation.ToEnum(anim)) !== -1;
    }
    Animation.isDirectional = isDirectional;
})(Animation = exports.Animation || (exports.Animation = {}));
var Direction;
(function (Direction) {
    Direction[Direction["In"] = 0] = "In";
    Direction[Direction["Out"] = 1] = "Out";
    Direction[Direction["None"] = 2] = "None";
})(Direction = exports.Direction || (exports.Direction = {}));
(function (Direction) {
    function ToEnum(directionOrString) {
        return typeof (directionOrString) === "number"
            ? directionOrString
            : Direction[utils_1.capitalize(directionOrString)];
    }
    Direction.ToEnum = ToEnum;
    function ToClassname(direction) {
        direction = Direction.ToEnum(direction);
        return direction === Direction.In ? " in" : " out";
    }
    Direction.ToClassname = ToClassname;
})(Direction = exports.Direction || (exports.Direction = {}));
var AnimationDirection;
(function (AnimationDirection) {
    AnimationDirection[AnimationDirection["Up"] = 0] = "Up";
    AnimationDirection[AnimationDirection["Down"] = 1] = "Down";
    AnimationDirection[AnimationDirection["Left"] = 2] = "Left";
    AnimationDirection[AnimationDirection["Right"] = 3] = "Right";
})(AnimationDirection = exports.AnimationDirection || (exports.AnimationDirection = {}));
(function (AnimationDirection) {
    function ToEnum(animationDirectionOrString) {
        return typeof (animationDirectionOrString) === "number"
            ? animationDirectionOrString
            : AnimationDirection[utils_1.capitalize(animationDirectionOrString)];
    }
    AnimationDirection.ToEnum = ToEnum;
    function ToClassname(dir) {
        dir = AnimationDirection.ToEnum(dir);
        switch (dir) {
            case AnimationDirection.Up: return " up";
            case AnimationDirection.Down: return " down";
            case AnimationDirection.Left: return " left";
            case AnimationDirection.Right: return " right";
            default: return "";
        }
    }
    AnimationDirection.ToClassname = ToClassname;
})(AnimationDirection = exports.AnimationDirection || (exports.AnimationDirection = {}));
//# sourceMappingURL=index.js.map