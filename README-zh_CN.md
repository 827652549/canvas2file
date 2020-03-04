# 🎨canvas2img
语言：[English](./README.MD)

将canvas转化为img的js库,转化为<img/>和下载img

## 安装canvas2img
1. 在body下引入`canvas2img.js`。
```html
<script src="canvas2img.js"></script>
```
2. 将你的JavaScript代码插入到canvas2img.js之下，以确保你在你的js文件内能正确地识别`Canvas2Img`
## 使用说明
当引入`canvas2img.js`的时候，你就能愉快地使用`Canvas2Img`对象了。

### insertImg(canvasId,elementId,quality) 将`<canvas/>`转化为`<img/>`插入到指定结点中
**参数**

- canvasId
> 被操作的canvas的id
- elementId
> 需要插入所转化`<img/>`的id
- quality (可选)
> 图片质量，仅供在'image/jpeg'类型时使用

### download(canvasId,fileName,type) 将`<canvas/>`转化为img下载到本地

**参数**

- canvasId
> 被操作的canvas的id
- fileName (可选)
> 下载到本地到图片文件。默认名`image.png`
- type (可选)
> 图片类型。默认`image/png`,可选`image/jpeg`|`image/webp`(webp仅在谷歌浏览器可使用)

Example:
```javascript
Canvas2Img.insertImg('canvas','box');
Canvas2Img.insertImg('canvas','box',1);
Canvas2Img.download('canvas');
Canvas2Img.download('canvas','imageName');
Canvas2Img.download('canvas','imageName','image/jpeg');
```

## 参与共建

希望你也能参与到这个js库的建设中，欢迎你的加入。




