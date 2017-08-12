在完成1.0.0中遇到的问题总结：
1.react-router-dom 
v4里BrowserRouter/HashRouter代替了Router，BrowserRouter/HashRouter不需要带props，无routes和history。其children需包含一个外层tag。v4中可使用Switch，但是使用Switch只能命中"/"且第一个路由需使用exact（精确命中），其他的"/XXX"无法找到页面，浏览器报404的错误。
    HashRouter有一个问题是连续多次点击同一个链接，会提示不能push相同的hash到history中,url中有#。
    BrowserRouter的问题是兼容性，因为其是以h5为基础的,url中无#。

2.Route
Route不再支持包含children、IndexRoute的形式了，即Route只能单独使用。若有children的需求，可在其component的内部进行相关配置。

3.webpack.config.js
babel-loader中如果带query字段，其loader不能是数组，且不能是多个loader串联。当前最新版本的webpack配置文件中所有的路径不能为相对路径，必须为绝对路径，此时可使用path
