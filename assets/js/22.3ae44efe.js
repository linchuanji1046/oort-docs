(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{780:function(t,a,s){t.exports=s.p+"assets/img/pin1.421ccac6.png"},781:function(t,a,s){t.exports=s.p+"assets/img/pin2.548d420d.png"},782:function(t,a,s){t.exports=s.p+"assets/img/pin3.61bfb3c2.png"},783:function(t,a,s){t.exports=s.p+"assets/img/pin4.b7c0f31e.png"},784:function(t,a,s){t.exports=s.p+"assets/img/pin5.2ccc711b.png"},785:function(t,a,s){t.exports=s.p+"assets/img/pin6.346f3eae.png"},786:function(t,a,s){t.exports=s.p+"assets/img/pin7.3c9882f2.png"},787:function(t,a,s){t.exports=s.p+"assets/img/pin8.3558a726.png"},886:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"奥尔特云服务开发文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#奥尔特云服务开发文档"}},[t._v("#")]),t._v(" 奥尔特云服务开发文档")]),t._v(" "),r("p",[t._v("本文档以开发一个go语言后台web服务为示例进行介绍。")]),t._v(" "),r("h3",{attrs:{id:"搭建开发环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搭建开发环境"}},[t._v("#")]),t._v(" 搭建开发环境")]),t._v(" "),r("h4",{attrs:{id:"一、安装go环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、安装go环境"}},[t._v("#")]),t._v(" 一、\t安装go环境")]),t._v(" "),r("h6",{attrs:{id:"_1、在linux下安装go"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、在linux下安装go"}},[t._v("#")]),t._v(" 1、在linux下安装go")]),t._v(" "),r("p",[r("code",[t._v("$ wget https://studygolang.com/dl/golang/go1.13.1.linux-amd64.tar.gz")]),r("br"),t._v(" "),r("code",[t._v("$ tar -zxvf go1.13.1.linux-amd64.tar.gz")]),r("br"),t._v(" "),r("code",[t._v("$ mv go/ /usr/local/")])]),t._v(" "),r("h6",{attrs:{id:"_2、添加环境变量goroot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加环境变量goroot"}},[t._v("#")]),t._v(" 2、添加环境变量GOROOT")]),t._v(" "),r("p",[r("code",[t._v("$ export GOROOT=/usr/local/go")]),r("br"),t._v(" "),r("code",[t._v("$ export PATH=$PATH:$GOROOT/bin")])]),t._v(" "),r("h6",{attrs:{id:"_3、查看当前go的环境配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看当前go的环境配置"}},[t._v("#")]),t._v(" 3、查看当前go的环境配置")]),t._v(" "),r("p",[r("code",[t._v("$go env")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(780),alt:"An image"}})]),t._v(" "),r("h4",{attrs:{id:"二、了解go-mod"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、了解go-mod"}},[t._v("#")]),t._v(" 二、\t了解go mod")]),t._v(" "),r("p",[t._v("Go mod是对go的依赖包进行管理，通过mod文件我可以很好的管理项目对每一个依赖包的进行管理。在服务开发前，必须开启mod，可以使用以下命令开启"),r("br"),t._v(" "),r("code",[t._v("$ go env -w GO111MODULE=on")])]),t._v(" "),r("h4",{attrs:{id:"三、了解gin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、了解gin"}},[t._v("#")]),t._v(" 三、\t了解gin")]),t._v(" "),r("p",[t._v("Gin 是用 Go 开发的一个微框架，类似 Martinier 的 API，重点是小巧、易用、性能好很多，也因为 httprouter 的性能提高了 40 倍。")]),t._v(" "),r("h3",{attrs:{id:"项目结构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目结构设计"}},[t._v("#")]),t._v(" 项目结构设计")]),t._v(" "),r("p",[r("code",[t._v("$ tree -L 1 go")]),r("br"),t._v("\n├── conf    \t\t--- 配置文件"),r("br"),t._v("\n├── docs\t\t\t---swagger目录"),r("br"),t._v("\n├── middleware   ---应用中间件"),r("br"),t._v("\n├── models\t\t---model层"),r("br"),t._v("\n├── pkg \t\t\t---开发工具包"),r("br"),t._v("\n├── routers\t\t---路由层"),r("br"),t._v("\n├── service\t\t---服务层"),r("br"),t._v("\n├── vendor       ---本地第三方包"),r("br"),t._v("\n└── ...")]),t._v(" "),r("h3",{attrs:{id:"数据库设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库设计"}},[t._v("#")]),t._v(" 数据库设计")]),t._v(" "),r("p",[t._v("一、\t作为一个后台web服务，数据库的使用缺少不了，我们可以不用在数据库中设计表结构，直接在代码中就可以操作。\n在models目录下面创建sql_web.go文件，然后根据实际情况来设计表结构。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(781),alt:"An image"}})]),t._v(" "),r("p",[t._v("二、\t表结构创建完毕后，我们在model.go中用代码进行自动创建表，这样程序启动就会自动根据我们设计的结构体进行表的创建。以后想要增加新的字段，直接结构体中添加完，重启服务就可以自动添加新的字段。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(782),alt:"An image"}})]),t._v(" "),r("h3",{attrs:{id:"路由设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由设计"}},[t._v("#")]),t._v(" 路由设计")]),t._v(" "),r("p",[t._v("一、\t在routers下router.go创建基本的CRUD接口，也就是增删改查接口。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(783),alt:"An image"}})]),t._v(" "),r("h3",{attrs:{id:"restful风格的api开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restful风格的api开发"}},[t._v("#")]),t._v(" Restful风格的API开发")]),t._v(" "),r("h4",{attrs:{id:"一、restful的风格"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、restful的风格"}},[t._v("#")]),t._v(" 一、\tRestful的风格")]),t._v(" "),r("p",[t._v("路由设计\n参数校验\n响应信息")]),t._v(" "),r("h4",{attrs:{id:"二、参数输入并校验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、参数输入并校验"}},[t._v("#")]),t._v(" 二、\t参数输入并校验")]),t._v(" "),r("p",[t._v("我们可以通过gin的ShouldBindJSON可以很方便地将HTTP请求报文中JSON格式的Body数据解析到结构体Struct或字典Map数据结构中，进而对传入的参数进行校验。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(784),alt:"An image"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(785),alt:"An image"}})]),t._v(" "),r("h3",{attrs:{id:"swagger设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swagger设计"}},[t._v("#")]),t._v(" Swagger设计")]),t._v(" "),r("h4",{attrs:{id:"一、什么是swagger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是swagger"}},[t._v("#")]),t._v(" 一、\t什么是swagger?")]),t._v(" "),r("p",[t._v("Swagger 是一个规范且完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。一个好的 API's，必然离不开一个好的API文档，如果要开发纯手写 API 文档，不存在的（很难持续维护），因此我们要自动生成接口文档。")]),t._v(" "),r("h4",{attrs:{id:"二、安装swag"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、安装swag"}},[t._v("#")]),t._v(" 二、安装swag")]),t._v(" "),r("p",[r("code",[t._v("$ go get -u github.com/swaggo/swag/cmd/swag@v1.6.5")]),r("br"),t._v("\n若 "),r("code",[t._v("$GOROOT/bin")]),t._v(" 没有加入"),r("code",[t._v("$PATH")]),t._v("中，你需要执行将其可执行文件移动到"),r("code",[t._v("$GOBIN")]),t._v("下\n"),r("code",[t._v("$ swag -v")]),r("br"),t._v(" "),r("code",[t._v("swag version v1.6.5")])]),t._v(" "),r("h4",{attrs:{id:"三、安装gin-swagger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、安装gin-swagger"}},[t._v("#")]),t._v(" 三、\t安装gin-swagger")]),t._v(" "),r("p",[r("code",[t._v("$ go get -u github.com/swaggo/gin-swagger@v1.2.0")]),r("br"),t._v(" "),r("code",[t._v("$ go get -u github.com/swaggo/files")]),r("br"),t._v(" "),r("code",[t._v("$ go get -u github.com/alecthomas/template")])]),t._v(" "),r("h4",{attrs:{id:"四、编写api注释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、编写api注释"}},[t._v("#")]),t._v(" 四、\t编写API注释")]),t._v(" "),r("p",[t._v("Swagger 中需要将相应的注释或注解编写到方法上，再利用生成器自动生成说明文件。\ngin-swagger 给出的范例：")]),t._v(" "),r("p",[r("img",{attrs:{src:s(786),alt:"An image"}})]),t._v(" "),r("h4",{attrs:{id:"五、生成swagger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、生成swagger"}},[t._v("#")]),t._v(" 五、\t生成swagger")]),t._v(" "),r("p",[t._v("我们进入到项目根目录中，执行初始化命令 swag init\n"),r("code",[t._v("$ swag init")]),r("br"),t._v(" "),r("code",[t._v("Generate swagger docs....")]),r("br"),t._v(" "),r("code",[t._v("Generate general API Info")]),r("br"),t._v(" "),r("code",[t._v("create docs.go at docs/docs.go")]),r("br"),t._v("\n完毕后会在项目根目录下生成docs"),r("br"),t._v(" "),r("code",[t._v("docs/")]),r("br"),t._v(" "),r("code",[t._v("├── docs.go")]),r("br"),t._v(" "),r("code",[t._v("└── swagger")]),r("br"),t._v(" "),r("code",[t._v("├── swagger.json")])]),t._v(" "),r("h4",{attrs:{id:"六、验证swagger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、验证swagger"}},[t._v("#")]),t._v(" 六、\t验证swagger")]),t._v(" "),r("p",[t._v("访问一下 "),r("code",[t._v("http://127.0.0.1:8000/swagger/index.html")]),t._v("， 查看 API 文档生成是否正确")]),t._v(" "),r("p",[r("img",{attrs:{src:s(787),alt:"An image"}})]),t._v(" "),r("h3",{attrs:{id:"编译成二进制包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译成二进制包"}},[t._v("#")]),t._v(" 编译成二进制包")]),t._v(" "),r("p",[t._v("在我们将所有的接口都写完并生成了相应的swagger接口后，就可以对程序进行编译，编译成可以用于部署的包。\n我们进入到项目根目录中，执行build命令即可生成二进制的包。"),r("br"),t._v(" "),r("code",[t._v("$ go build –o oortcloud-web")]),r("br"),t._v(" "),r("code",[t._v("$ oortcloud-web")])]),t._v(" "),r("h3",{attrs:{id:"end"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" End")])])}),[],!1,null,null,null);a.default=e.exports}}]);