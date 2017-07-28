# e-circle-progress
a beautiful progress button components with vue


eg: 
[e-circle-progress](https://kisscode.oschina.io/learn/demos/e-circle-progress.html)
## Build Setup

``` bash
# install dependencies
npm install
# 如果npm 安装慢的话 可以采用 `npm install --registry=https://registry.npm.taobao.org` 推荐

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### examples
![imgs](https://raw.githubusercontent.com/kobezone/e-circle-progress/master/demo/e-circle-progress-demos.png)

### [demos](https://kobezone.github.io/e-circle-progress/demo/e-circle-progress.html)

### use 使用

```html
<e-circle-progress :during="20" :pv="pv1"  color="#f01250" ></e-circle-progress>
<e-circle-progress :during="10" :pv="pv2" color="#f00" :font-size="40" :width="100"  text-color="#68d7c6"></e-circle-progress>
<e-circle-progress :during="10" :pv="pv3"  :font-size="100" :width="200"  text-color="#898579" text-bg-color="#fff" :bold="20" color="#fd625e"></e-circle-progress>
<e-circle-progress :during="10" :pv="99"  :width="150"  text-color="#898579" text-bg-color="#fff" :bold="5" color="#f01250"></e-circle-progress>
```

```js
 <script src="https://unpkg.com/e-circle-progress"></script>
```

```js

  // vue单文件中 直接导入对应的组件就可以使用了
  import eCircleProgress from 'e-circle-progress';

  //components:{eCircleProgress}

```


