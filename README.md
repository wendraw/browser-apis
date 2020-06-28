# Browser APIs
浏览器是我们前端写的代码主要运行的环境，也就是我们所有的代码其实都是用的浏览器提供的 API。浏览器的 API 数量非常多，一个个的把这些 API 都学会背下来是不可能的。我们这篇文章就是要将所有的 API 按照它们所在的标准来分类，从而对所有 API 有个印象，后面需要用到的时候直接定位的标准进行学习即可。

我们要在 Chrome 中输入 `about:blank` 打开一个空白页，这样会少很多自定义的全局对象。

```js
let names = Object.getOwnPropertyNames(window);
```
执行上面的代码，就得到所有的浏览器 API，我这里有 836 个，可能不同版本的 Chrome 会有一些差异。

![all apis](https://github.com/wendraw/browser-apis/blob/master/all-apis.png)

然后在执行 [api](https://github.com/wendraw/browser-apis/blob/master/api.js) 中的代码。

更详细的内容见[Browser APIs](https://www.yuque.com/wendraw/fe/browser-api)
