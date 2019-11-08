"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var media_ui_1 = require("@atlaskit/media-ui");
var styled_1 = require("./styled");
var util_1 = require("../util");
exports.cropToDataURI = function (imageElement, imageRect, cropRect, scale, imageOrientation) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var top = cropRect.top, left = cropRect.left, width = cropRect.width, height = cropRect.height;
    var scaleWithDefault = scale || 1;
    var destinationWidth = Math.max(width - styled_1.CONTAINER_PADDING * 2, 0);
    var destinationHeight = Math.max(height - styled_1.CONTAINER_PADDING * 2, 0);
    var _k = util_1.getCanvas(destinationWidth, destinationHeight), canvas = _k.canvas, context = _k.context;
    if (!context) {
        return '';
    }
    //    ┏┅┅┅┅┅┅┅┅┅┅┅ ← Border of an original Image
    //    ┇  Not Visible part of an image
    //    ┇    ╔══════════════════════════════════════╗
    //    ┇    ║  Padded area (semi transparent)      ║
    //    ┇    ║    ┌────────────────────────────┐    ║
    //    ┇    ║    │                            │    ║
    //    ┇    ║    │  Cropped Part of an Image  │    ║
    //    ┇    ║    │                            │    ║
    //    ↑     ↑    ↑                            ↑    ↑
    //   (a)   (b)  (c)                          (d)  (e)
    //
    //  cropRect.left and cropRect.top are the coordinates of (c) with (b) as origin in mind
    //  sourceLeft and sourceTop are coordinates of (c) with (a) as origin in mind
    //
    //  cropRect.width is a distance from (b) to (e)
    //  sourceWidth is a distance between (c) and (d)
    //
    //  CONTAINER_PADDING is a distance from (b) to (c)
    //
    //  Example:
    //  if cropRect.left === -100 (100 px to the left from (b) and CONTAINER_PADDING == 10,
    //  then sourceLeft === 10 - (-100) = 10 + 100 = 110 (distance from (a) to (c)
    var sourceImageWidth = imageRect.width / scaleWithDefault;
    var sourceImageHeight = imageRect.height / scaleWithDefault;
    var sourceLeft = (styled_1.CONTAINER_PADDING - left) / scaleWithDefault;
    var sourceTop = (styled_1.CONTAINER_PADDING - top) / scaleWithDefault;
    var sourceWidth = destinationWidth / scaleWithDefault;
    var sourceHeight = destinationHeight / scaleWithDefault;
    var sourceRight = sourceImageWidth - sourceWidth - sourceLeft;
    var sourceBottom = sourceImageHeight - sourceHeight - sourceTop;
    var cw180 = Math.PI;
    var cw90 = Math.PI / 2;
    var ccw90 = -Math.PI / 2;
    // Here we solve two problems:
    // 1. At this point sourceLeft and sourceTop based on target orientation of an image.
    //    Those represent what user has chosen as a top left corner. We need to convert
    //    these into top and left corner of the same rect, but in original image. We will
    //    use these new coordinates when we read from original image.
    //
    // 2. Perform affine transformation for canvas to orientate extracted part of an original image.
    /*
      Example image that user sees and specifies crop for:
  
     ┌───────────────────┐
     │         T         |
     │   x               | <--- x - Crop's top left corner
     │                   |
     │       - . o       |
     │ L     \___/     R |
     │                   |
     │                   |
     │         B         |
     └───────────────────┘
     */
    switch (imageOrientation) {
        case 2:
            /*  Image is stored like this:
                               Original Image Left == User's Right
                               ↓
               ┌───────────────────┐
               │         T         |
               │               x   | <--- Top == User's Top
               │                   |
               │       o . -       |
               │ R     \___/     L |
               │                   |
               │                   |
               │         B         |
               └───────────────────┘
             */
            _a = tslib_1.__read([sourceRight, sourceTop], 2), sourceLeft = _a[0], sourceTop = _a[1];
            /*
            CX = Canvas Origin X
            FX = Final Origin X
      
            For details see this: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
      
            0) Starting point       1) translate              2) mirror horizontally
            ┌─────┬──────→ CX, FX   ┌─────┬─────┬─→ CX, FX       CX ⃪───┬─────┬───────→ FX
            │  T  │                 │     │  T  │                      │  T  │
            │R   L│                 │     │R   L│                      │L   R│
            │  B  │                 │     │  B  │                      │  B  │
            ├─────┘                 │     ├─────┘                      ├─────┤
            │                       │     │                            │     │
            ↓                       ↓     ↓                            ↓     ↓
            CY                      FY    CY                           FY    CY
            FY
      
             */
            context.translate(destinationWidth, 0);
            context.scale(-1, 1);
            break;
        case 3:
            /*                 Left = Source Right
                               ↓
               ┌───────────────────┐
               │         B         |
               │                   |
               │        ___        |
               │       /   \       |
               │ R     o . -     L |
               │                   |
               │               x   |  <--- Top = Source Bottom
               │         T         |
               └───────────────────┘
             */
            _b = tslib_1.__read([sourceRight, sourceBottom], 2), sourceLeft = _b[0], sourceTop = _b[1];
            /*
      
            0) Starting point       1) translate             2) rotate 180
            ┌─────┬──────→ CX, FX   ┌─────────────→ CX, FX                  CY
            │  B  │                 │                                       ↑
            │R   L│                 │                                 ┌─────┼───────→ FX
            │  T  │                 │                                 │  T  │
            ├─────┘                 │     ┌─────┬─→ CX                │L   R│
            │                       │     │  B  │                     │  B  │
            ↓                       │     │R   L│               CX ⃪───┼─────┘
            CY                      │     │  T  │                     │
            FY                      │     ├─────┘                     ↓
                                    │     │                           FY
                                    ↓     ↓
                                    FY    CY
      
             */
            context.translate(destinationWidth, destinationHeight);
            context.rotate(cw180);
            break;
        case 4:
            /*    Left = Source Left
                  ↓
               ┌───────────────────┐
               │         B         |
               │  x                | <--- Top = Source Bottom
               │        ___        |
               │       /   \       |
               │ L     - . o     R |
               │                   |
               │                   |
               │         T         |
               └───────────────────┘
             */
            _c = tslib_1.__read([sourceLeft, sourceBottom], 2), sourceLeft = _c[0], sourceTop = _c[1];
            /*
      
            0) Starting point        1) Translate    2) Mirror
            ┌─────┬──────→ CX, FX    ┌──────→ FX     CY
            │  B  │                  │               ↑
            │L   R│                  │               ├─────┬───→ FX
            │  T  │                  │               │  T  │
            ├─────┘                  ├─────┬─→ CX    │L   R│
            │                        │  B  │         │  B  │
            ↓                        │L   R│         ├─────┴─→ CX
            CY                       │  T  │         │
            FY                       ├─────┘         ↓
                                     │               FY
                                     ↓
                                     CY
                                     FY
            */
            context.translate(0, destinationHeight);
            context.scale(1, -1);
            break;
        case 5:
            /*    Left = Source Top
                  ↓
               ┌───────────────────┐
               │         L         |
               │  x                | <--- Top = Source Left
               │       |  \        |
               │        .  |       |
               │ T     o  /      B |
               │                   |
               │                   |
               │         R         |
               └───────────────────┘
             */
            _d = tslib_1.__read([sourceTop, sourceLeft], 2), sourceLeft = _d[0], sourceTop = _d[1];
            /*
      
            0) Starting point        1) Rotate Clock Wise 90     2) Mirror horizontally
            ┌─────┬──────→ CX, FX    CY ⃪───┬─────┬───────→ FX    ┌─────┬──────→ CY, FX
            │  L  │                        │  T  │               │  T  │
            │T   B│                        │R   L│               │L   R│
            │  R  │                        │  B  │               │  B  │
            ├─────┘                        └─────┤               ├─────┘
            │                                    │               │
            ↓                                    ↓               ↓
            CY                                   CX              CX
            FY                                   FY              FY
      
            */
            context.rotate(cw90);
            context.scale(1, -1);
            break;
        case 6:
            /*    Left = Source Top
                  ↓
               ┌───────────────────┐
               │         R         |
               │                   |
               │       o  \        |
               │        .  |       |
               │ T     |  /      B |
               │                   |
               │  x                | <--- Top = Source right
               │         L         |
               └───────────────────┘
             */
            _e = tslib_1.__read([sourceTop, sourceRight], 2), sourceLeft = _e[0], sourceTop = _e[1];
            /*
      
            0) Starting point        1) translate              2) Rotate 90 clock wise
            ┌─────┬──────→ CX, FX    ┌─────┬─────┬─→ CX, FX    CY ⃪───┬─────┬───────→ FX
            │  R  │                  │     │  R  │                   │  T  │
            │T   B│                  │     │T   B│                   │L   R│
            │  L  │                  │     │  L  │                   │  B  │
            ├─────┘                  │     ├─────┘                   ├─────┤
            │                        │     │                         │     │
            ↓                        ↓     ↓                         ↓     ↓
            CY                       FY    CY                        FY    CX
            FY
      
             */
            context.translate(destinationWidth, 0);
            context.rotate(cw90);
            break;
        case 7:
            /*                Left = Source Bottom
                              ↓
               ┌───────────────────┐
               │         R         |
               │                   |
               │      / o          |
               │     | .           |
               │ B    \ |        T |
               │                   |
               │              x    | <--- Top = Source right
               │         L         |
               └───────────────────┘
             */
            _f = tslib_1.__read([sourceBottom, sourceRight], 2), sourceLeft = _f[0], sourceTop = _f[1];
            /*
      
            0) Starting point       1) translate             2) Rotate            3) Mirror horizontally
            ┌─────┬──────→ CX, FX   ┌─────────────→ CX, FX         CX
            │  R  │                 │                              ↑                          CX
            │B   T│                 │                        ┌─────┼─────┬─→ FX               ↑
            │  L  │                 │                        │     │  T  │              ┌─────┼─→ FX
            ├─────┘                 │     ┌─────┬─→ CX       │     │R   L│              │  T  │
            │                       │     │  R  │            │     │  B  │              │L   R│
            ↓                       │     │B   T│            │     └─────┴─→ CY         │  B  │
            CY                      │     │  L  │            │                    CY ⃪───┼─────┘
            FY                      │     ├─────┘            ↓                          │
                                    │     │                  FY                         ↓
                                    ↓     ↓                                             FY
                                    FY    CY
            */
            context.translate(destinationWidth, destinationHeight);
            context.rotate(ccw90);
            context.scale(1, -1);
            break;
        case 8:
            /*                Left = Source Bottom
                              ↓
               ┌───────────────────┐
               │         L         |
               │                   |
               │      / |          |
               │     | .           |
               │ B    \ o        T |
               │                   |
               │              x    | <--- Top = Source Left
               │         R         |
               └───────────────────┘
             */
            _g = tslib_1.__read([sourceBottom, sourceLeft], 2), sourceLeft = _g[0], sourceTop = _g[1];
            /*
      
            0) Starting point       1) Translate   2) Rotate 90 Counter Clock Wise
            ┌─────┬──────→ CX, FX   ┌──────→ FX    CX
            │  L  │                 │              ↑
            │B   T│                 │              ├─────┬───→ FX
            │  R  │                 │              │  T  │
            ├─────┘                 ├─────┬─→ CX   │L   R│
            │                       │  L  │        │  B  │
            ↓                       │B   T│        ├─────┴─→ CY
            CY                      │  R  │        │
            FY                      ├─────┘        ↓
                                    │              FY
                                    ↓
                                    CY
                                    FY
            */
            context.translate(0, destinationHeight);
            context.rotate(ccw90);
            break;
    }
    if (media_ui_1.isRotated(imageOrientation)) {
        _h = tslib_1.__read([sourceHeight, sourceWidth], 2), sourceWidth = _h[0], sourceHeight = _h[1];
        _j = tslib_1.__read([
            destinationWidth,
            destinationHeight,
        ], 2), destinationHeight = _j[0], destinationWidth = _j[1];
    }
    context.drawImage(imageElement, sourceLeft, sourceTop, sourceWidth, sourceHeight, 0, 0, destinationWidth, destinationHeight);
    return canvas.toDataURL();
};
//# sourceMappingURL=crop-to-data-uri.js.map