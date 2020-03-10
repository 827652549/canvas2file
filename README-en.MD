# 🎨canvas2file
Language：[简体中文](./README.md)


A lib for saving or converting canvas as file like img.。

## Quick start
#### npm

```
npm i canvas2file
```

```javascript
import Canvas2File from 'canvas2file';
````

#### &lt;script&gt;

1⃣️  Insert `canvas2file.js` under the &lt;body&gt;

```html
<script src="canvas2file.js"></script>
```

2⃣️ Insert your JavaScript code under canvas2file.js so that the object named `Canvas2File` in your js file is correctly recognized.

## API

When you insert `canvas2file.js`, you can happily use the object named ` Canvas2File` .

[Online demo](https://827652549.github.io/canvas2file/example.html)

Example:

```javascript
Canvas2File.insertImg('canvas','box');
Canvas2File.insertImg('canvas','box',1);
Canvas2File.download('canvas');
Canvas2File.download('canvas','imageName');
Canvas2File.download('canvas','imageName','image/jpeg');
```

|Method Name|Introduction|
|:--|:--|
|insertImg(canvasId,elementId,quality)|Be converted to `<img>` and inserted into the specified node.|
|download(canvasId,fileName,type)|Download `<canvas>` as a picture.|

### insertImg(canvasId,elementId,quality) 

Convert `<canvas />` into `<img />` and insert it into the specified node.

**参数**

- canvasId

> The id of the canvas being used

- elementId

> Need to insert the id of the converted <img /> `

- quality (optional)

> Image quality, only for 'image / jpeg' type

### download(canvasId,fileName,type)

Convert `<canvas />` to img and download to local.

**参数**

- canvasId

> The id of the canvas being used

- fileName (可选)

> Download to local to image file. The default name is `image.png`

- type (可选)

> Picture type. The default `image / png`, optional` image / jpeg`, `image / webp` (webp is only available in Google Chrome)

### FAQ
##### **1、Why is the background of exported jpeg format pictures black?**

If you need to export a picture in jpeg format, please fill the background color with white at the beginning of canvas drawing, otherwise the background color of the picture in jpeg format will become black.

```javascript
    context.fillStyle = 'white';
    context.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
```


## Join Me

I hope you can also participate in the construction of this js library , welcome you!

## License

MIT
