# 第五章_JavaScript DOM文档对象模型
>  文本文档对象模型 __Document Object Model__ 简称 `DOM`。

### 代码一开始从上往下加载，一般使用事件来调用 
> #### `HTML`和`CSS`在浏览器读取和渲染时是自上而下加载的。`DOM（文档对象模型）`也遵循这个规则，浏览器在解析完HTML后，会自动构建一棵节点树，我们可以通过`JavaScript的事件`来对这些节点进行操作。比如，我们可以在文档加载完成后使用`DOMContentLoaded`事件，或者在某个元素被点击后使用`click`事件来`操作DOM节`点。

### `DOMContentLoaded` 事件。
> 事件是在DOM树构建完成后触发的一个事件，表示页面的html已经被完全加载并且解析完成，但是不包括图片、音频和视频等外部资源。
### document 添加此事件
``` js
document.addEventListener("DOMContentLoaded", (e) =>
{
    console.log(e);
})
```
### 一些特殊类型
#### `undefined`
> 表示未定义、未赋值或不存在，是一个未定义的值（函数没有写返回值，也会返回 undefined）
``` js
var person = undefined; /// undefined
// 或
var person; // undefined
```
#### `null` 
> 表示没有值或空对象指针，是一个空对象的引用。不能调用里面的属性变量。指向 null 时，使用 `点 .` 访问会报错
``` js
person = null; // null
```
#### Object
> 表示对象类型，在JavaScript中所有的对象都是Object类型的实例。先创建了一个空对象 `new Object()` 。使用`点 .` 访问不存在的属性时，返回 `undefined`。

``` js
person = new Object();
// 创建属性变量
person.name = "hello";
console.log(person.name);
```

### __1. 获取HTML元素的基本方式__
> 使用 `document` 对象来获取文档对象模型
#### `getElementById("id")`
- `id` 字符串
- 通过元素的 `id` 属性获取 dom 元素 
- 返回一个 `HTMLElement` 实例对象
- 然后就可以访问里面的属性成员了  
``` js
// 获取 id = one 的 dom 元素
var divforId = document.getElementById("one");
```
---
#### `getElementsByTagName("h1")`
- 通过标签名称获取
- 返回一个集合（数组）`HTMLCollection []`、里面的每一项都是一个 `HTMLElement`
- 可以通过一个标签对象调用（搜索所有子标签）
``` js
// 查找到文档中所有的 div
var divforTarget = document.getElementsByTagName("div");
var divforId = document.getElementById("one");
// 查找所有的子元素 是 span
divforId.getElementsByTagName("span");
```
---

#### `getElementsByClassName("class")`
- 通过元素的类名称获取元素
- 和上面的 `getElementsByTagName` 一样，这不过这里是通类名获取
- 可以通过一个标签对象调用（搜索所有子标签）
``` js
var forClass = document.getElementsByClassName("two");
forClass[0].getElementsByClassName("the")
```
---
#### `getElementsByName("last")`
- 使用标签的 `name` 属性查找
- 返回一个列表（数组）`NodeList []`、里面的每一项都是一个 `HTMLElement`
- 可以通过一个标签对象调用（搜索所有子标签）
``` js
var forName = document.getElementsByName("last");
```
---
### __2. 操作HTML标签__
#### 操作内容、通过方法
- `innerText`  一般只用于添加文本
- `innerHTML`  能添加文本，但是一般是用来添加HTML元素标签，（可以将符合的字符串解析成html标签，会覆盖掉原有的所有标签和内容）
``` js
var p_el = document.getElementById("one");
p_el.innerText = "Hello World";
p_el.innerHTML = "hello.com";
// 添加其他HTML标签
p_el.innerHTML = "<font color='red'>hello</font>";
```
---

#### 设置、获取属性
- `setAttribute(属性名，值)`、设置属性、比如：class = "name"
``` js
var myfont = document.getElementById("myfont");
myfont.setAttribute("color", "blue");
```
- `getAttribute(属性名称)`、获取属性。返回的是字符串
``` js
var fontSize = myfont.getAttribute("size");
console.log(typeof (fontSize) + " : " + fontSize); // string
```
- 通过设置属性，<font color="#05ccaa">设置样式 ( css )</font>
``` js
myfont.setAttribute("style", "color:#05ccaa;");
```
---
#### 方式二，直接 `点 .` 属性
- 设置 `a` 标签的 `href` 属性
``` js
var mya = document.getElementById("mya");
mya.href = "https://www.hello.com/";
```
- 设置图片 `img` 标签的 `src` 属性
``` js
var myimg_1 = document.getElementById("myimg-1");
myimg_1.setAttribute("src", "../img/a.png");
```
- 复选框，设置为选中状态
- `removeAttribute(属性名称)` 移除属性
``` js
var mycheckbox = document.getElementById("mycheckbox");
mycheckbox.setAttribute("checked", "true");
// 取消选中
mycheckbox.removeAttribute("checked")
```
-  <font color="#abdfff">css 样式</font>  使用 `style.`
``` js
var mydiv = document.getElementById("mydiv");
mydiv.style.color = "#abdfff";
```
---

### __3. DOM节点基本操作__
> 之前的方式添加节点 `innerHTML` 会清空覆盖掉原有的所有子节点
#### `createElement( 节点名称 )`
- 创建一个节点标签，返回一个 `HTMLElement` 实例对象
- `createElement("span")` 返回一个 ` HTMLSpanElement 实例` instanceof  `HTMLElement 实例` = `true`，所有是说就是一个 `HTMLElement 实例`
``` js
var newSpan = document.createElement("span");
```
- 添加文本 innerText 或 `createTextNode(文本内容)`
- 使用 `createTextNode()` 需要配合使用 `appendChild()` 将文本节点添加到 dom 元素上
``` js
newSpan.innerText = "我是第5个span"; // innerText
// createTextNode
var textNode = document.createTextNode("我是第5个span 使用单独的文本节点");
newSpan.appendChild(textNode);
```
- `appendChild( dom节点 )` 将节点添加到，指定标签的子节点（之后）
``` js
var myDiv = document.getElementById("mydiv");
myDiv.appendChild(newSpan);
```
- `removeChild ( dom节点 )` 删除节点
``` js
var myDiv = document.getElementById("mydiv");
var myP = document.getElementById("myp");
myDiv.removeChild(myP);
```
---

### __4. DOM添加事件__
#### 通过 dom 元素的属性添加事件
- 比如：通过 `onclick` 属性添加事件
``` html
<!-- 直接写 js 代码、表达式 -->
<div onclick="console.log('点击了div');">DOM 事件div</div>
<!-- 调用 自定义方法-->
<div onclick="myClick();">DOM 事件div</div>
<script>
    // 自定义方法
    function myClick()
    {
        console.log("function click!");
    }
</script>
```
#### 通过 赋值绑定事件
- `onclick` = 匿名函数，使用 js 代码添加
``` js
var mySpan = document.getElementById("myspan");
mySpan.onclick = function ()
{
    console.log("span 被点击了");;
}
```
#### 通过方法添加 `addEventListener('click' , (event) = > {})`
- 参数：事件名称、事件回调（要绑定、添加的方法）、`event` 传入一个对应的事件对象，可供使用
``` js
var mySpan = document.getElementById("myspan");
mySpan.addEventListener("click", spanClick);
function spanClick()
{
    console.log("function span click");
}
```
### __5. DOM 常见的事件__
+ #### `onload`              页面加载完成时
+ #### `onunload`            网页被卸载时
+ #### `onbeforeunload`      网页被卸载时，弹窗，返回值
+ #### `onchange`            数据改变时，数据检测（比如输入框里的内容发生改变时）
+ #### `onmouseover`         鼠标进入时
+ #### `onmouseout`          鼠标划出时
``` html
<body onload="init()" onunload="unload()" onbeforeunload="return unbeforeunload()">
    <input type="text" onchange="dataChang(this)">
</body>
```
``` js
function init()
{
    console.log("网页加载完成！");
}
function unload()
{
    console.log("网页被卸载了！");
}
function unbeforeunload(input)
{
    console.log("离开此网页，进入Hello学院");
    return "离开此网页，进入Hello学院";
}
function dataChang(input)
{
    console.log("你修改了数据：" + input.value);
}
```

---