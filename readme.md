## questions
### 1. eslint typescript 配置不生效，无法import/resolve .ts 文件
安装 eslint typescript 及 import 插件

在 eslint 配置文件中 写入配置：

```js
setting: {
    "import/resolver": {
        node: {
            extensions: [".ts"]
        }
    }
}
```
