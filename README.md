# 🎨canvas2file
**Language**：[English](./README-en.MD)

将`<canvas>`转化为`<img>`的Javascript库，轻而易举地转化和下载。

## 快速开始
#### npm引入

```
npm i canvas2file
```

```javascript
import Canvas2File from 'canvas2file';
````

#### 直接引入

1⃣️  在body下引入`canvas2file.js`。

```html
<script src="canvas2file.js"></script>
```

2⃣️ 将你的JavaScript代码插入到canvas2file.js之下，以确保你在你的js文件内`Canvas2File`能被正确地识别。

## 使用说明

当引入`canvas2file.js`的时候，你就能愉快地使用`Canvas2File`对象了。

[查看演示](https://827652549.github.io/canvas2file/example.html)

Example:

```javascript
Canvas2File.insertImg('canvas','box');
Canvas2File.insertImg('canvas','box',1);
Canvas2File.download('canvas');
Canvas2File.download('canvas','imageName');
Canvas2File.download('canvas','imageName','image/jpeg');
```

|方法名|简介|
|:--|:--|
|insertImg(canvasId,elementId,quality)|转化为`<img>`并插入到指定结点中。|
|download(canvasId,fileName,type)|以图片格式下载`<canvas>`。|

### insertImg(canvasId,elementId,quality) 

将`<canvas/>`转化为`<img/>`插入到指定结点中。

**参数**

- canvasId

> 被操作的canvas的id

- elementId

> 需要插入所转化`<img/>`的id

- quality (可选)

> 图片质量，仅供在'image/jpeg'类型时使用

### download(canvasId,fileName,type)

将`<canvas/>`转化为img下载到本地。

**参数**

- canvasId

> 被操作的canvas的id

- fileName (可选)

> 下载到本地到图片文件。默认名`image.png`

- type (可选)

> 图片类型。默认`image/png`,可选`image/jpeg`、`image/webp`(webp仅在谷歌浏览器可使用)

### 常见问题
##### **1、为什么导出的jpeg格式的图片背景是黑色？**

如果你需要导出jpeg格式的图片，请在canvas绘制之初将背景色填充成白色，否则jpeg格式的图片背景色会变成黑色。
```javascript
    context.fillStyle = 'white';
    context.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
```


## 参与共建

希望你也能参与到这个js库的建设中，欢迎你的加入。

## License

MIT
