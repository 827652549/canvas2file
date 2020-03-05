let Canvas2File={
    /**
     * 将canvas转化为img标签插入到插入到节点之中
     * @param canvasId canvas的id
     * @param elementId 所插入的容器的id
     * @param quality 图片质量(0-1)
     */
    insertImg: (canvasId,elementId,quality)=>{
        let canvas = document.getElementById(canvasId);
        let src = canvas.toDataURL('image/png',quality);
        document.getElementById(elementId).innerHTML=`<img src=${src} />`;
    },
    /**
     * 下载对应canvas的图像，保存为png格式
     * @param canvasId
     * @param {Boolean} canvasId
     */
    download:(canvasId,fileName,type)=>{
        let canvas = document.getElementById(canvasId);
        canvas.toBlob(
            (blob)=> {
                _downloadFileByBlob(blob, fileName?fileName:'image');
            },type
        );
    }
};

/**
 * 下载文件通过Blob对象的Url
 * @param blobUrl
 * @param filename
 * @private
 */
function _downloadFileByBlob(blob, filename) {
    const blobUrl = window.URL.createObjectURL(blob);
    const eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    eleLink.href = blobUrl;
    // add the clicker
    document.body.appendChild(eleLink);
    eleLink.click();
    // remove the clicker
    document.body.removeChild(eleLink);
}

//可直接引入该文件，也可作为npm包被import引入
if (typeof module != 'undefined'){
    module.exports = Canvas2File;
}
