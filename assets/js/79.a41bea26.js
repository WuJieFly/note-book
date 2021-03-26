(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1296:function(t,s,a){t.exports=a.p+"assets/img/ee18ea7aab4fbee26cf23d7613801078.ee18ea7a.png"},1297:function(t,s,a){t.exports=a.p+"assets/img/140a4efb622e21b21fcc4ff57653a915.140a4efb.png"},1298:function(t,s,a){t.exports=a.p+"assets/img/e7b134686b9f2e824ffa8410e20f59f6.e7b13468.jpg"},1299:function(t,s,a){t.exports=a.p+"assets/img/a5175438e76411c808dd5e72d3d3dbb0.a5175438.png"},2077:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"如何安全、快速地接入-oauth-2-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何安全、快速地接入-oauth-2-0"}},[t._v("#")]),t._v(" 如何安全、快速地接入 OAuth 2.0？")]),t._v(" "),n("p",[t._v("在 "),n("RouterLink",{attrs:{to:"/oath2/01/03.html"}},[t._v("第 3 讲")]),t._v("，我已经讲了授权服务的流程，如果你还记得的话，当时我特意强调了一点，就是 "),n("strong",[t._v("授权服务将 OAuth 2.0 的复杂性都揽在了自己身上")]),t._v("，这也是授权服务为什么是 OAuth 2.0 体系的核心的原因之一。")],1),t._v(" "),n("p",[t._v("虽然授权服务做了大部分工作，但是呢，在 OAuth 2.0 的体系里面，"),n("strong",[t._v("除了资源拥有者是作为用户参与")]),t._v("，还有另外两个系统角色，也就是第三方软件和受保护资源服务。那么今天这一讲，我们就站在这两个角色的角度，看看它们应该做哪些工作，才能接入到 OAuth 2.0 的体系里面呢？")]),t._v(" "),n("p",[t._v("现在，就让我们来看看，作为第三方软件的小兔和京东的受保护资源服务，具体需要着重处理哪些工作吧。")]),t._v(" "),n("p",[t._v("注：另外说明一点，为了脱敏的需要，在下面的讲述中，我只是把京东商家开放平台作为一个角色使用，以便有场景感，来帮助你理解。")]),t._v(" "),n("h2",{attrs:{id:"构建第三方软件应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建第三方软件应用"}},[t._v("#")]),t._v(" 构建第三方软件应用")]),t._v(" "),n("p",[t._v("我们先来思考一下：如果要基于京东商家开放平台构建一个小兔打单软件的应用，小兔软件的研发人员应该做哪些工作？")]),t._v(" "),n("p",[t._v("是不是要到京东商家开放平台申请注册为开发者，在成为开发者以后再创建一个应用，之后我们就开始开发了，对吧？没错，一定是这样的流程。那么，开发第三方软件应用的过程中，我们需要重点关注哪些内容呢？")]),t._v(" "),n("p",[t._v("我先来和你总结下，这些内容包括 4 部分，分别是："),n("strong",[t._v("注册信息、引导授权、使用访问令牌、使用刷新令牌。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(1296),alt:"img"}})]),t._v(" "),n("h3",{attrs:{id:"第一点-注册信息。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一点-注册信息。"}},[t._v("#")]),t._v(" 第一点，注册信息。")]),t._v(" "),n("p",[t._v("首先，小兔软件只有先有了身份，才可以参与到 OAuth 2.0 的流程中去。也就是说，小兔软件需要先拥有自己的 app_id 和 app_serect 等信息，同时还要填写自己的回调地址 redirect_uri、申请权限等信息。")]),t._v(" "),n("p",[t._v("这种方式的注册呢，我们有时候也称它为 "),n("strong",[t._v("静态注册")]),t._v("，也就是小兔软件的研发人员提前登录到京东商家开放平台进行手动注册，以便后续使用这些注册的相关信息来请求访问令牌。")]),t._v(" "),n("h3",{attrs:{id:"第二点-引导授权。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二点-引导授权。"}},[t._v("#")]),t._v(" 第二点，引导授权。")]),t._v(" "),n("p",[t._v("当用户需要使用第三方软件，来操作其在受保护资源上的数据，就需要第三方软件来引导授权。比如，小明要使用小兔打单软件来对店铺里面的订单发货打印，那小明首先访问的一定是小兔软件（原则上是直接访问第三方软件，不过我们在后面讲到服务市场这种场景的时候，会有稍微不同），不会是授权服务，更不会是受保护资源服务。")]),t._v(" "),n("p",[t._v("但是呢，小兔软件需要小明的授权，只有授权服务才能允许小明这样做。所以呢，小兔软件需要 「配合」 小明做的第一件事儿，"),n("strong",[t._v("就是将小明引导至授权服务")]),t._v("，如下面代码所示。")]),t._v(" "),n("p",[t._v("那去做什么呢？其实就是让用户为第三方软件授权，得到了授权之后，第三方软件才可以代表用户去访问数据。也就是说，小兔打单软件获得授权之后，才能够代表小明处理其在京东店铺上的订单数据。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" oauthUrl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8081/ch03/oath?scope=today%20history&response_type=code&redirect_uri=http://localhost:8080/ch03/callback&app_id=APPID_RABBIT"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nresponse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendRedirect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toOauthUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"第三点-使用访问令牌。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三点-使用访问令牌。"}},[t._v("#")]),t._v(" 第三点，使用访问令牌。")]),t._v(" "),n("p",[n("strong",[t._v("拿到令牌后去使用令牌，才是第三方软件的最终目的")]),t._v("。然后我们看看如何使用令牌。目前 OAuth 2.0 的令牌只支持一种类型，那就是 bearer 令牌，也就是我之前讲到的可以是任意字符串格式的令牌。")]),t._v(" "),n("p",[t._v("官方规范给出的使用访问令牌请求的方式，有三种，分别是：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Form-Encoded Body Parameter（表单参数）")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("POST /resource HTTP/1.1\nHost: server.example.com\nContent-Type: application/x-www-form-urlencoded\n\naccess_token=b1a64d5c-5e0c-4a70-9711-7af6568a61fb\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])])]),t._v(" "),n("li",[n("p",[t._v("URI Query Parameter（URI 查询参数）")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET /resource?access_token=b1a64d5c-5e0c-4a70-9711-7af6568a61fb HTTP/1.1\nHost: server.example.com\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])])]),t._v(" "),n("li",[n("p",[t._v("Authorization Request Header Field（授权请求头部字段）")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET /resource HTTP/1.1\nHost: server.example.com\nAuthorization: Bearer b1a64d5c-5e0c-4a70-9711-7af6568a61fb\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])])]),t._v(" "),n("p",[t._v("也就是说，这三种方式都可以请求到受保护资源服务。那么，我们采用哪种方式最合适呢？")]),t._v(" "),n("p",[t._v("根据 OAuth 2.0 的官方建议，系统在接入 OAuth 2.0 之前信息传递的请求载体是 JSON 格式的，那么如果继续采用表单参数提交的方式，令牌就无法加入进去了，因为格式不符。如果这时采用参数传递的方式呢，整个 URI 会被整体复制，安全性是最差的。而请求头部字段的方式就没有上述的这些烦恼，"),n("strong",[t._v("因此官方的建议是采用 Authorization 的方式来传递令牌")]),t._v("。")]),t._v(" "),n("p",[t._v("但是，"),n("strong",[t._v("我建议你采用表单提交，也就是 POST 的方式来提交令牌，")]),t._v(" 类似如下代码所示。原因是这样的，从官方的建议中也可以看出，它指的是在接入 OAuth 2.0 之前，如果你已经采用了 JSON 数据格式请求体的情况下，不建议使用表单提交。但是，刚开始的时候，只要三方软件和平台之间约束好了，大家一致采用表单提交，就没有任何问题了。"),n("strong",[t._v("因为表单提交的方式在保证安全传输的同时，还不需要去额外处理 Authorization 头部信息")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"第四点-使用刷新令牌。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第四点-使用刷新令牌。"}},[t._v("#")]),t._v(" 第四点，使用刷新令牌。")]),t._v(" "),n("p",[t._v("我在讲授权服务的时候提到过，如果访问令牌过期了，小兔软件总不能立马提示并让小明重新授权一次，否则小明的体验将会非常不好。为了解决这个问题呢，就用到了刷新令牌。")]),t._v(" "),n("p",[t._v("使用刷新令牌的方式跟使用访问令牌是一样的，具体可以参照上面我们讲的访问令牌的方式。关于刷新令牌的使用，"),n("strong",[t._v("你最需要关心的是，什么时候你会来决定使用刷新令牌")]),t._v("。")]),t._v(" "),n("p",[t._v("在小兔打单软件收到访问令牌的同时，也会收到访问令牌的过期时间 "),n("code",[t._v("expires_in")]),t._v("。一个设计良好的第三方应用，"),n("strong",[t._v("应该将 expires_in 值保存下来并定时检测")]),t._v("；如果发现 expires_in 即将过期，则需要利用 refresh_token 去重新请求授权服务，以便获取新的、有效的访问令牌。")]),t._v(" "),n("p",[t._v("这种定时检测的方法可以提前发现访问令牌是否即将过期。此外，还有一种方法是「现场」发现。也就是说，比如小兔软件访问小明店铺订单的时候，突然收到一个访问令牌失效的响应，此时小兔软件立即使用 refresh_token 来请求一个访问令牌，以便继续代表小明使用他的数据。")]),t._v(" "),n("p",[t._v("综合来看的话，定时检测的方式，需要我们额外开发一个定时任务；而现场发现，就没有这种额外的工作量啦。具体采用哪一种方式，你可以结合自己的实际情况。不过呢，我还是建议你采用定时检测这种方式，因为它可以带来提前量，以便让我们有更好的主动性，而现场发现就有点被动了。")]),t._v(" "),n("p",[t._v("说到这里，我要再次提醒你注意的是，"),n("strong",[t._v("刷新令牌是一次性的，使用之后就会失效")]),t._v("，但是它的有效期会比访问令牌要长。这个时候我们可能会想到，如果刷新令牌也过期了怎么办？在这种情况下，我们就需要将刷新令牌和访问令牌都放弃，相当于回到了系统的初始状态，只能让用户小明重新授权了。")]),t._v(" "),n("p",[t._v("到这里，我们来总结下，在构建第三方应用时，你需要重点关注的就是 "),n("strong",[t._v("注册、授权、访问令牌、刷新令牌")]),t._v("。只要你掌握了这四部分内容，在类似京东这样的开放平台上开发小兔软件，就不再是什么困难的事情了。")]),t._v(" "),n("h2",{attrs:{id:"服务市场中的第三方应用软件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务市场中的第三方应用软件"}},[t._v("#")]),t._v(" 服务市场中的第三方应用软件")]),t._v(" "),n("p",[t._v("在构建第三方应用的引导授权时，我们说用户第一次「触摸」到的一定是第三方软件，但这并不是绝对的。这个不绝对，就发生在服务市场这样的场景里。")]),t._v(" "),n("p",[t._v("那什么是服务市场呢？说白了，就是你开发的软件，比如小兔打单软件、店铺装修软件等，都发布到这样一个 「市场」里面售卖。这样，当用户购买了这些软件之后，就可以在服务市场里面看到有个「立即使用」的按钮。点击这个按钮，用户就可以直接访问自己购买的第三方软件了。")]),t._v(" "),n("p",[t._v("比如，京东的京麦服务市场里有个「我的服务」目录，里面就存放了我购买的打单软件。小明就可以直接点击「立即使用」，继而进入小兔打单软件，如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1297),alt:"img"}})]),t._v(" "),n("p",[t._v("那么，这里需要注意的是，作为第三方开发者来构建第三方软件的时候，在授权码环节除了要接收授权码 code 值之外，还要接收用户的订购相关信息，比如服务的版本号、服务代码标识等信息。")]),t._v(" "),n("p",[t._v("好了，以上就是关于构建第三方软件时需要注意的一些细节问题了。接下来，我们再谈谈构建受保护资源服务的时候，又需要重点处理哪些工作呢。")]),t._v(" "),n("h2",{attrs:{id:"构建受保护资源服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建受保护资源服务"}},[t._v("#")]),t._v(" 构建受保护资源服务")]),t._v(" "),n("p",[t._v("你先想一想，实际上在整个开放授权的环境中，"),n("strong",[t._v("受保护资源最终指的还是 Web API")]),t._v("，比如说，访问头像的 API、访问昵称的 API。对应到我们的打单软件中，受保护资源就是订单查询 API、批量查询 API 等。")]),t._v(" "),n("p",[t._v("在互联网上的系统之间的通信，基本都是以 Web API 为载体的形式进行。因此呢，当我们说受保护资源被授权服务保护着时，实际上说的是授权服务最终保护的是这些 Web API。我们在构建受保护资源服务的时候，除了基本的要检查令牌的合法性，还需要做些什么呢？我认为 "),n("strong",[t._v("最重要的就是权限范围了。")])]),t._v(" "),n("p",[t._v("在我们处理受保护资源服务中的逻辑的时候，"),n("strong",[t._v("校验权限的处理会占据很大的比重")]),t._v("。你想啊，访问令牌递过来，你肯定要多看看令牌到底能操作哪些功能、又能访问哪些数据吧。现在，我们把这些权限的类别总结归纳下来，最常见的大概有以下几类。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1298),alt:"img"}})]),t._v(" "),n("p",[t._v("接下来，我和你具体说说这些权限是如何使用的。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("不同的权限对应不同的操作。")]),t._v(" "),n("p",[t._v("这里的操作，其实对应的是 Web API，比如目前京东商家开放平台提供有查询商品 API、新增商品 API、删除商品 API 这三种。如果小兔软件请求过来的一个访问令牌 access_token 的 scope 权限范围只对应了查询商品 API、新增商品 API，那么包含这个 access_token 值的请求，就不能执行删除商品 API 的操作。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不同的权限对应不同的操作")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" scope "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OauthServlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tokenScopeMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accessToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),t._v(" sbuf "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuffer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("scope"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sbuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scope"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sbuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryGoods")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sbuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGoods")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sbuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"del"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delGoods")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])])]),t._v(" "),n("li",[n("p",[t._v("不同的权限对应不同的数据。")]),t._v(" "),n("p",[t._v("这里的数据，就是指某一个 API 里包含的属性字段信息。比如，有一个查询小明信息的 API，返回的信息包括 Contact（email、phone、qq）、Like（Basketball、Swimming）、Personal Data（sex、age、nickname）。如果小兔软件请求过来的一个访问令牌 access_token 的 scope 权限范围只对应了 Personal Data，那么包含该 access_token 值的请求就不能获取到 Contact 和 Like 的信息，关于这部分的代码，实际跟不同权限对应不同操作的代码类似。")]),t._v(" "),n("p",[t._v("看到这里，你就明白了，这种 "),n("strong",[t._v("权限范围的粒度要比「不同的权限对应不同的操作」的粒度要小")]),t._v("。这正是遵循了最小权限范围原则。")])]),t._v(" "),n("li",[n("p",[t._v("不同的用户对应不同的数据。")]),t._v(" "),n("p",[t._v("这种权限是什么意思呢？其实，这种权限实际上只是换了一种维度，将其定位到了用户上面。")]),t._v(" "),n("p",[t._v("一些基础类信息，比如获取地理位置、获取天气预报等，不会带有用户归属属性，也就是说这些信息并不归属于某个用户，是一类公有信息。对于这样的信息，平台提供出去的 API 接口都是「中性」的，没有用户属性。")]),t._v(" "),n("p",[t._v("但是，更多的场景却是基于用户属性的。还是以小兔打单软件为例，商家每次打印物流面单的时候，小兔打单软件都要知道是哪个商家的订单。这种情况下，商家为小兔软件授权，小兔软件获取的 access_token 实际上就包含了商家这个用户属性。")]),t._v(" "),n("p",[t._v("京东商家开放平台的受保护资源服务每次接收到小兔软件的请求时，都会根据该请求中 access_token 的值找到对应的商家 ID，继而根据商家 ID 查询到商家的订单信息，也就是不同的商家对应不同的订单数据。")])])]),t._v(" "),n("p",[t._v("在上面讲三种权限的时候，我举的例子实际上都属于一个系统提供了查询、添加、删除这样的所有服务。此时你可能会想到，现在的系统不已经是分布式系统环境了么，如果有很多个受保护资源服务，比如提供用户信息查询的用户资源服务、提供商品查询的商品资源服务、提供订单查询的订单资源服务，"),n("strong",[t._v("那么每个受保护资源服务岂不是都要把上述的权限范围校验执行一遍吗，这样不就会有大量的重复工作产生么？")])]),t._v(" "),n("p",[t._v("在这里，我特别高兴你能想到这一点。为了应对这种情况，我们应该有一个 "),n("strong",[t._v("统一的网关层来处理这样的校验")]),t._v("，所有的请求都会经过 API GATEWAY 跳转到不同的受保护资源服务。这样呢，我们就不需要在每一个受保护资源服务上都做一遍权限校验的工作了，而只需要在 API GATEWAY 这一层做权限校验就可以了。系统结构如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1299),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("截止到这一讲呢，我们已经把 OAuth 2.0 中授权码相关的流程所涉及到的内容都讲完了。通过 02 到 05 这 4 讲，你可以很清晰地理解授权码流程的核心原理了，也可以弄清楚如何使用以及如何接入这一授权流程了。")]),t._v(" "),n("p",[t._v("我在本讲开始的时候，提到 OAuth 2.0 的复杂性实际上都给了授权服务来承担，接着我从第三方软件和受保护资源的角度，分别介绍了这两部分系统在接入 OAuth 2.0 的时候应该注意哪些方面。总结下来，我其实希望你能够记住以下两点。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("对于第三方软件，比如小兔打单软件来讲，"),n("strong",[t._v("它的主要目的就是获取访问令牌，使用访问令牌")]),t._v(" ，这当然也是整个 OAuth 2.0 的目的，就是让第三方软件来做这两件事。在这个过程中需要强调的是，第三方软件在使用访问令牌的时候有三种方式，我们建议在平台和第三方软件约定好的前提下，"),n("strong",[t._v("优先采用 Post 表单提交的方式")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("受保护资源系统，比如小兔软件要访问开放平台的订单数据服务，它需要注意的是权限的问题，这个权限范围主要包括，"),n("strong",[t._v("不同的权限会有不同的操作，不同的权限也会对应不同的数据，不同的用户也会对应不同的数据")]),t._v("。")])])]),t._v(" "),n("h2",{attrs:{id:"思考题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[t._v("#")]),t._v(" 思考题")]),t._v(" "),n("p",[t._v("如果使用刷新令牌 refresh_token 请求回来一个新的访问令牌 access_token，按照一般规则授权服务上旧的访问令牌应该要立即失效，但是如果在这之前已经有使用旧的访问令牌发出去的请求，不就受到影响了吗，这种情况下应该如何处理呢？")]),t._v(" "),n("p",[t._v("笔者就遇到过这样的问题：微信开发平台的做法是延迟失效，刷新 token 之后，之前的旧 token 在 1~2 分钟内还是有效的。唯一不清楚的时候，使用 spring security 如何实现这个功能。")])])}),[],!1,null,null,null);s.default=e.exports}}]);