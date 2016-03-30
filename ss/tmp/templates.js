angular.module('templates-main', ['tpls/collect.tpl.html', 'tpls/contact.tpl.html', 'tpls/contribute.tpl.html', 'tpls/detail.tpl.html', 'tpls/forgetPassword.tpl.html', 'tpls/index.tpl.html', 'tpls/login.tpl.html', 'tpls/messages.tpl.html', 'tpls/orderForSeller.tpl.html', 'tpls/paydeposit.tpl.html', 'tpls/preview.tpl.html', 'tpls/publish.tpl.html', 'tpls/register.tpl.html', 'tpls/setting.tpl.html', 'tpls/ui-wiget/forgetPasswordMobile.tpl.html', 'tpls/ui-wiget/forgetPasswordSendCode.tpl.html', 'tpls/ui-wiget/paydepositAddAddress.tpl.html', 'tpls/ui-wiget/paydepositAddressManger.tpl.html', 'tpls/ui-wiget/paydepositDetail.tpl.html', 'tpls/ui-wiget/paydepositInit.tpl.html', 'tpls/ui-wiget/registerUserAndPassword.tpl.html', 'tpls/ui-wiget/registerVerifyMobile.tpl.html', 'tpls/ui-wiget/userBuyer.tpl.html', 'tpls/ui-wiget/userSeller.tpl.html', 'tpls/user.tpl.html']);

angular.module("tpls/collect.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/collect.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>藏品心得</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "  </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-user\" toUser><span class=\"badge\">9</span><i class=\"fa\">&#xe61f;</i></a>\n" +
    "    </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-panel ui-item-panel\">\n" +
    "        <h3><a href=\"javascript:;\" class=\"ui-arrows\">“翡翠，纯天然的色彩艺术品”“翡翠，纯天然的色彩艺术品”</a></h3>\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <a href=\"javascript:;\"><img src=\"/images/temp/1.jpg\"></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"javascript:;\"><img src=\"/images/temp/2.jpg\"></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"javascript:;\"><img src=\"/images/temp/3.jpg\"></a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"ui-panel ui-item-panel\">\n" +
    "        <h3><a href=\"\" class=\"ui-arrows\">“翡翠，纯天然的色彩艺术品”</a></h3>\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <a href=\"javascript:;\"><img src=\"/images/temp/1.jpg\"></a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"javascript:;\"><img src=\"/images/temp/2.jpg\"></a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"ui-panel ui-item-panel\">\n" +
    "        <h3><a href=\"\" class=\"ui-arrows\">“翡翠，纯天然的色彩艺术品”</a></h3>\n" +
    "        <ul>\n" +
    "            <li>\n" +
    "                <a href=\"javascript:;\"><img src=\"/images/temp/3.jpg\"></a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/contact.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>我要投稿</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "  </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-contact\">\n" +
    "        <div class=\"ui-cont-main\">\n" +
    "            <h4><p><i>◆</i>意见建议<i>◆</i></p></h4>\n" +
    "            <p>如果你有任何意见和建议，\n" +
    "                <br>我们都非常欢迎您告诉我们。</p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-cont-main\">\n" +
    "            <h4><p><i>◆</i>投诉<i>◆</i></p></h4>\n" +
    "            <p>如果您对收到的宝贝不满意，\n" +
    "                <br>也请告诉我们，我们会进行及时处理。</p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-cont-main\">\n" +
    "            <h4><p><i>◆</i>加入我们<i>◆</i></p></h4>\n" +
    "            <p>如果您对我们赏时很感兴趣，\n" +
    "                <br>您也可以来加入我们，\n" +
    "                <br>参加我们某个分类的专题管理。</p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-cont-main ui-cont-email\">\n" +
    "            <p><a href=\"javascript:;\"><i class=\"fa\">&#xe631;</i></a></p>\n" +
    "            <a href=\"javascript:;\">contact@shangshi.com</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/contribute.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/contribute.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>我要投稿</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "  </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "    <a href=\"javascript:;\" fire class=\"icons-save\">提交</a>\n" +
    "  </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <ul class=\"ui-store-panel\">\n" +
    "        <li>\n" +
    "            <input type=\"email\" name=\"\" id=\"\" placeholder=\"邮箱地址\">\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <input type=\"text\" name=\"\" id=\"\" placeholder=\"昵称\">\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"详细内容\"></textarea>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/detail.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>详情</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "      </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-share\" share><i class=\"fa\">&#xe614;</i></a>\n" +
    "      </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-goods\">\n" +
    "        <article>\n" +
    "            <div class=\"ui-item-image\">\n" +
    "                <a href=\"javascript:;\"><img ng-src=\"{{product.srcs[0]}}\"></a>\n" +
    "                <span class=\"item-price\"><i>&yen;</i>{{product.curPrice}}</span>\n" +
    "                <p class=\"item-count-mask\"><span class=\"item-time\">距离结束<i>2</i><i>1</i>:<i>2</i><i>2</i></span></p>\n" +
    "                <p class=\"item-count-mask\"><span class=\"item-time\">开始时间<span>01月20日 22:00</span></span>\n" +
    "                </p>\n" +
    "                <p class=\"item-count-mask\"><span class=\"item-time\">开始时间<span>01月20日 22:00</span></span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </article>\n" +
    "        <h3 class=\"ui-title-detail\">{{product.title}}</h3>\n" +
    "        <p class=\"ui-price\">当前价<span>&yen;{{product.curPrice}}</span></p>\n" +
    "    </div>\n" +
    "    <ul class=\"ui-btn-line ui-data-meta\">\n" +
    "        <li>保证金\n" +
    "            <br><strong>&yen; {{product.margin}}</strong></li>\n" +
    "        <li>起拍价\n" +
    "            <br><strong>&yen; {{product.startPrice}}</strong></li>\n" +
    "        <li>加价幅度\n" +
    "            <br><strong>&yen; {{product.range}}</strong></li>\n" +
    "    </ul>\n" +
    "    <h3 class=\"ui-title\">出价记录<span>{{product.auctions.length}}条</span></h3>\n" +
    "    <div class=\"ui-roll-meta\">\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"auction in product.auctions\"><img ng-src=\"{{auction.avator}}\">\n" +
    "                <h3 ng-bind=\"{{auction.name}}\"></h3>\n" +
    "                <p>&yen;{{auction.price}}</p>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div ng-if=\"!product.auctions.length\" class=\"ui-alert\">暂无记录</div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">商品详情</h3>\n" +
    "    <div class=\"ui-detail-panel\">\n" +
    "        <p class=\"ui-description\">{{product.description}}</p>\n" +
    "        <img ng-repeat=\"src in product.srcs\" ng-src=\"{{src}}\">\n" +
    "        <div ng-if=\"noDescription\" class=\"ui-alert\">暂无详情</div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">评论<span>{{product.comments.length}}条</span></h3>\n" +
    "    <div class=\"ui-eval\">\n" +
    "        <ul class=\"ui-eval-detail\">\n" +
    "            <li ng-repeat=\"comment in product.comments\"><img ng-src=\"{{comment.avator}}\">\n" +
    "                <h3><a href=\"javascript:;\">回复</a>d*B</h3>\n" +
    "                <p>{{comment.conts}}</p><span class=\"ui-time\">刚刚</span></li>\n" +
    "            <li>\n" +
    "        </ul>\n" +
    "        <p class=\"ui-more-down\">点击加载更多评论</p>\n" +
    "        <div class=\"ui-alert\" ng-if=\"noComment\">暂无评论</div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">商家介绍</h3>\n" +
    "    <div class=\"ui-brand\">\n" +
    "        <h4 class=\"ui-arrows\"><a href=\"\">亿珍阁旗舰店 <i class=\"fa\">&#xe635;</i></a></h4>\n" +
    "        <ul class=\"ui-btn-line ui-data-meta\">\n" +
    "            <li>拍卖商品\n" +
    "                <br><strong>125件</strong></li>\n" +
    "            <li>关注数\n" +
    "                <br><strong>125</strong></li>\n" +
    "            <li>好评率\n" +
    "                <br><strong>125%</strong></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<footer class=\"ui-footer\">\n" +
    "    <div class=\"ui-footer-btn\">\n" +
    "        <a class=\"icons-home\" href=\"javascript:;\"><i class=\"fa\">&#xe618;</i></a>\n" +
    "        <a class=\"icons-coms active\" href=\"javascript:;\"><span class=\"ui-number-meta\"><i class=\"fa\">&#xe603;</i><!-- <span class=\"ui-number\">100+</span> --></span></a>\n" +
    "        <a class=\"icons-heart\" href=\"javascript:;\"><i class=\"fa\">&#xe607;</i></a>\n" +
    "        <a class=\"btn btn-warning btn-sm\" href=\"javascript:;\" ng-if=\"product.type === 1 && product.status === 0\" ui-sref=\"paydeposit({type:'init',id:product.id})\"><i class=\"fa\">&#xe622;</i>缴纳保证金</a>\n" +
    "        <a class=\"btn btn-warning btn-sm\" href=\"javascript:;\" ng-if=\"product.type === 1 && product.status === 1\">立即出价</a>\n" +
    "        <a class=\"btn btn-warning btn-sm\" href=\"javascript:;\" ng-if=\"product.type === 2 && product.status === 0\">尚未开始</a>\n" +
    "        <a class=\"btn btn-warning btn-sm\" href=\"javascript:;\" ng-if=\"product.type === 2 && product.status === 1\">已结束</a>\n" +
    "        <a class=\"btn btn-warning btn-sm\" href=\"javascript:;\" ng-if=\"product.type === 2 && product.status === 2\">已下架</a>\n" +
    "    </div>\n" +
    "    <div class=\"ui-blank\"></div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("tpls/forgetPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/forgetPassword.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>忘记密码</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "    </span> \n" +
    "</header>\n" +
    "<div ui-view=\"content\"></div>\n" +
    "");
}]);

angular.module("tpls/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/index.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>赏视</h2>\n" +
    "    <span class=\"hd-left\" slidemenutoggle>\n" +
    "        <a href=\"javascript:;\" class=\"icons-menu\"><i class=\"fa\">&#xe600;</i></a>        \n" +
    "    </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "        <a class=\"icons-user\" toUser><span class=\"badge\" ng-bind=\"dynamicCount\"></span><i class=\"fa\">&#xe61f;</i></a>\n" +
    "    </span>\n" +
    "</header>\n" +
    "<ul class=\"ui-tabs ui-navbar-nav\" ng-init=\"type = 1\" hookvar=\"type\" switch>\n" +
    "    <li ng-class=\"{active:type!=2&&type!=3}\">进行中</li>\n" +
    "    <li ng-class=\"{active:type==2}\">即将开始</li>\n" +
    "    <li ng-class=\"{active:type==3}\">关注中</li>\n" +
    "</ul>\n" +
    "<section class=\"ui-container\" productsScroll>\n" +
    "    <div class=\"ui-tabs-content\">\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:type!=2&&type!=3}\">\n" +
    "            <article ng-repeat=\"product in products.processing.showData\" data-id=\"{{product.id}}\">\n" +
    "                <div class=\"ui-item-image\" ui-sref=\"detail({id:product.id})\">\n" +
    "                    <a href=\"javascript:;\"><img ng-src=\"{{product.srcs[0]}}\">\n" +
    "                    </a>\n" +
    "                    <div class=\"item-title\">\n" +
    "                        <h3>{{product.title}}</h3>\n" +
    "                    </div>\n" +
    "                    <span class=\"item-price\"><i>&yen;</i>{{product.curPrice}}</span>\n" +
    "                    <span class=\"item-count\">距离结束<countDown id=\"{{product.id}}\" timestamp=\"{{product.endTime}}\"></countDown></span>\n" +
    "                </div>\n" +
    "                <div class=\"item-hd\">\n" +
    "                    <p class=\"item-head\"><img ng-src=\"{{product.owner.avatar}}\">{{product.owner.name}}<i class=\"fa\">&#xe607;</i>\n" +
    "                    </p>\n" +
    "                    <productInfo loginslidein=\"$parent.loginSlideIn\" product=\"product\"></productInfo>\n" +
    "                </div>\n" +
    "            </article>\n" +
    "            <p class=\"ui-line-tips\"><span>到底啦</span>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:type==2}\">\n" +
    "            <p class=\"hide ui-line-tips\"><span>以下商品尚未开售，你可以先收藏</span></p>\n" +
    "            <article ng-repeat=\"product in products.willBegin.showData\">\n" +
    "                <div class=\"ui-item-image\">\n" +
    "                    <a href=\"javascript:;\"><img ng-src=\"{{product.src}}\">\n" +
    "                    </a>\n" +
    "                    <div class=\"item-title item-none\">\n" +
    "                        <h3>{{product.title}}</h3>\n" +
    "                    </div>\n" +
    "                    <span class=\"item-heart\"><i class=\"fa\">&#xe606;</i></span>\n" +
    "                    <span class=\"item-count default\">距离结束<countDown id=\"{{product.id}}\" timestamp=\"{{product.endTime}}\"></countDown></span>\n" +
    "                </div>\n" +
    "            </article>\n" +
    "            <p class=\"ui-line-tips\"><span>到底啦</span>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:type==3}\">\n" +
    "            <div class=\"ui-login-tips\" ng-if=\"!isLogin\">\n" +
    "                <p class=\"ui-line-tips\"><span>哎呀，你还没登录呢！</span>\n" +
    "                </p>\n" +
    "                <a login class=\"btn btn-default btn-lgs btn-block\">快来登录</a>\n" +
    "                <p class=\"t\">登录后可以查看您所关注的商品哦。</p>\n" +
    "                <p class=\"t\">没有账号 快来<a register>申请一个</a>吧</p>\n" +
    "            </div>\n" +
    "            <article ng-repeat=\"product in products.interest.showData\">\n" +
    "                <div class=\"ui-item-image\">\n" +
    "                    <a href=\"javascript:;\"><img ng-src=\"{{product.src}}\">\n" +
    "                    </a>\n" +
    "                    <div class=\"item-title\">\n" +
    "                        <h3>{{product.title}}</h3>\n" +
    "                    </div>\n" +
    "                    <span class=\"item-price\"><i>&yen;</i>{{product.curPrice}}</span>\n" +
    "                    <span class=\"item-count\">距离结束<countDown id=\"{{product.id}}\" timeteam=\"{{product.endTime}}\"></countDown></span>\n" +
    "                </div>\n" +
    "                <div class=\"item-hd\">\n" +
    "                    <p class=\"item-head\"><img ng-src=\"{{product.owner.avatar}}\">{{product.owner.name}}<i class=\"fa\">&#xe607;</i>\n" +
    "                    </p>\n" +
    "                    <productInfo loginslidein=\"$parent.loginSlideIn\" product=\"product\"></productInfo>\n" +
    "                </div>\n" +
    "            </article>\n" +
    "            <p class=\"ui-line-tips\"><span>到底啦</span>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<div class=\"ui-sidemenu slideAnimated\" slidemenupanel>\n" +
    "    <div class=\"ui-sidemenu-mask\"></div>\n" +
    "    <div class=\"ui-sidemenu-main\">\n" +
    "        <div class=\"ui-sidemenu-user\" ng-if=\"!isLogin\">\n" +
    "            <div>\n" +
    "                <a href=\"javascript:;\"><img ng-src=\"/images/icons/thumbnail.png\"></a>\n" +
    "            </div>\n" +
    "            <p><a login>登录</a><a register>注册</a></p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-sidemenu-user\" ng-if=\"isLogin\">\n" +
    "            <div> <i setting class=\"fa\">&#xe60d;</i>\n" +
    "                <a><img ng-src=\"{{userInfo.avatar}}\"></a> <i messages class=\"fa\">&#xe60c;</i> </div>\n" +
    "            <p><span>{{userInfo.name}}</span></p>\n" +
    "        </div>\n" +
    "        <ul class=\"ui-sidemenu-nav\">\n" +
    "            <li class=\"ui-arrows\"><a href=\"javascript:;\" collect><i class=\"fa\">&#xe601;</i> 藏品心得</a></li>\n" +
    "            <li class=\"ui-arrows\"><a href=\"javascript:;\" contribute><i class=\"fa\">&#xe605;</i> 我要投稿</a></li>\n" +
    "            <li class=\"ui-arrows\"><a href=\"javascript:;\" contact><i class=\"fa\">&#xe60a;</i> 联系赏视</a></li>\n" +
    "            <li class=\"ui-arrows\"><a href=\"javascript:;\"><i class=\"fa\">&#xe62d;</i> 清除缓存</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"ui-loding\">\n" +
    "    <div class=\"ui-loding-info\">\n" +
    "        <img ng-src=\"/images/icons/loading.gif\">\n" +
    "        <h5>加载中...</h5>\n" +
    "        <p>最后更新时间：今天10:17</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"ui-loding ui-loding-white\">\n" +
    "    <div class=\"ui-loding-info\">\n" +
    "        <img ng-src=\"/images/icons/loading.gif\">\n" +
    "        <h5>加载更多...</h5>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"ui-login slideDownAnimated\" slideDownLogin>\n" +
    "    <p><span>哎呀，你还没登录呢！</span>\n" +
    "    </p>\n" +
    "    <a href=\"javascript:;\" class=\"btn btn-primary btn-lgs btn-block\" login>登录后更精彩</a>\n" +
    "    <p>登录后可以查看您所关注的商品哦。</p>\n" +
    "    <p>没有账号 快来<a register>申请一个</a>吧</p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("tpls/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/login.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>登录</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "    </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-user-head\">\n" +
    "        <h3><span class=\"ui-uesr-img\"><i class=\"fa ui-uesr-default\">&#xe623;</i><!-- <img src=\"static/temp/1s.jpg\"> --></span></h3>\n" +
    "    </div>\n" +
    "    <div class=\"ui-form-action\">\n" +
    "        <div class=\"ui-form ui-form-icon\">\n" +
    "            <form name=\"userForm\" id=\"form-action\">\n" +
    "                <mobile placeholder=\"输入手机号/用户名\"></mobile>\n" +
    "                <password placeholder=\"输入密码\"></password>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <p class=\"ui-pasw-tips\"><a forgetpassword>忘记密码？</a></p>\n" +
    "        <div class=\"ui-btn\">\n" +
    "            <button type=\"submit\" ng-disabled=\"userForm.$invalid\" form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\" loginRequest>快来登录</button>\n" +
    "            <button type=\"submit\" form=\"form-action\" class=\"btn btn-default btn-lgs btn-block\" register>创建新账号</button>\n" +
    "        </div>\n" +
    "        <div class=\"ui-form-party\">\n" +
    "            <a class=\"ui-alipay\" href=\"javascript:;\"><i class=\"fa\">&#xe611;</i></a>\n" +
    "            <a class=\"ui-weibo\" href=\"javascript:;\"><i class=\"fa\">&#xe616;</i></a>\n" +
    "            <a class=\"ui-weixin\" href=\"javascript:;\"><i class=\"fa\">&#xe615;</i></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/messages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/messages.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>消息评论</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "      </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-set\" setting><i class=\"fa\">&#xe60d;</i></a>\n" +
    "      </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-user-head\">\n" +
    "        <h3><span class=\"ui-uesr-img\"><img src=\"static/temp/1s.jpg\"></span></h3>\n" +
    "        <p class=\"ui-user-name\">xianzhiding <span class=\"icons-comments\"><i class=\"fa\">&#xe60c;</i><span class=\"badge\">9</span></span>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <ul class=\"ui-tabs ui-user-navbar-nav\"  ng-init=\"page = 1\"  hookvar=\"page\" switch>\n" +
    "        <li ng-class=\"{active:page == 1}\"><i class=\"fa\">&#xe61d;</i>消息提醒</li>\n" +
    "        <li ng-class=\"{active:page == 2}\"><i class=\"fa\">&#xe61e;</i>评论</li>\n" +
    "    </ul>\n" +
    "    <div class=\"ui-tabs-content\">\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:page == 1}\">\n" +
    "            <ul class=\"ui-message-info\">\n" +
    "                <li><i class=\"fa\">&#xe624;</i>\n" +
    "                    <h3>您的出价被超越</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>已被人出价超越，再次出价确保领先！</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe625;</i>\n" +
    "                    <h3>您的拍卖已成功</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入<span>已成功被您收入囊中，请及时付款，否则会作流拍处理，保证金将不退还。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe626;</i>\n" +
    "                    <h3>您参与的拍卖商品即将结束</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>目前您的出价没有领先，该商品即将结束，速度出价确保领先。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe627;</i>\n" +
    "                    <h3>您已成功购买</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>已成功被您收入囊中，请及时付款，24小时后，订单会被取消。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe626;</i>\n" +
    "                    <h3>您关注的拍卖商品即将开始</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>即将开始拍卖，请及时出价。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe628;</i>\n" +
    "                    <h3>您购买的商品已发货</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>已经发货，您可以去第三方物流公司查看物流状态。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe629;</i>\n" +
    "                    <h3>您出售的商品已付款</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>已经付款，请及时发货。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe62a;</i>\n" +
    "                    <h3>您拍卖的商品已成交</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>已经成交，成交价是￥1231。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe62b;</i>\n" +
    "                    <h3>您拍卖的商品已流拍</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>由于买家未及时付款，已流拍，您可以去已下架商品管理中重新上架。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe62c;</i>\n" +
    "                    <h3>您出售的商品已收货</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>买家已经确认收货，￥1231会于x个工作日后打入您的支付宝。</span></p>\n" +
    "                </li>\n" +
    "                <li><i class=\"fa\">&#xe62d;</i>\n" +
    "                    <h3>您出售的商品已取消</h3>\n" +
    "                    <p>那一抹绿沁入心底那一抹绿沁入心底沁入心底那一抹绿沁入 <span>买家已经取消购买，您可以去已下架商品管理中重新上架。</span></p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:page == 2}\">\n" +
    "            <div class=\"ui-message-meta\">\n" +
    "                <p class=\"ui-message-time\"><span>刚刚</span></p>\n" +
    "                <p class=\"ui-message-time\"><span>2015年06月25日 上午11:27</span></p>\n" +
    "                <ul>\n" +
    "                    <li class=\"ui-post ui-advocate\">\n" +
    "                        <img class=\"ui-avatar\" src=\"static/temp/1s.jpg\">\n" +
    "                        <div class=\"ui-post-content\">\n" +
    "                            <p>恩，这个东西质量没问题，我可以出a货证书给你，你可以完全放心。</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"ui-post ui-assistant\">\n" +
    "                        <img class=\"ui-avatar\" src=\"static/temp/1s.jpg\">\n" +
    "                        <div class=\"ui-post-content\">\n" +
    "                            <p>恩，这个东西质量没问题</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"ui-post ui-assistant\">\n" +
    "                        <img class=\"ui-avatar\" src=\"static/temp/1s.jpg\">\n" +
    "                        <div class=\"ui-post-content\">\n" +
    "                            <p>恩</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                    <li class=\"ui-post ui-advocate\">\n" +
    "                        <img class=\"ui-avatar\" src=\"static/temp/1s.jpg\">\n" +
    "                        <div class=\"ui-post-content\">\n" +
    "                            <p>恩，这个东西质量没问题</p>\n" +
    "                        </div>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <div class=\"ui-com-goods\">\n" +
    "                    <img src=\"static/temp/3.jpg\">\n" +
    "                    <p>碧玉尊珠宝 翡翠玉佛吊坠 玉观音玉坠a货 男女款情侣玉佩 老坑翡翠玉石玉器..</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <p class=\"ui-line-tips ui-line-tips-down\"><span>到底啦</span></p>\n" +
    "    <p class=\"ui-line-tips\"><span>目前您没有提醒</span></p>\n" +
    "    <p class=\"ui-line-tips\"><span>目前您没有评论</span></p>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/orderForSeller.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/orderForSeller.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>订单详情</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "  </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-cancel\">取消</a>\n" +
    "  </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <article class=\"ui-order-panel\">\n" +
    "        <div class=\"ui-order-hd\">\n" +
    "            <span class=\"ui-c-red\">待发货</span>\n" +
    "            <p class=\"ui-order-number\">订单号<strong>123456</strong></p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-order-bd\">\n" +
    "            <a href=\"javascript:;\">\n" +
    "                <span class=\"ui-img\"><img src=\"static/temp/4.jpg\"></span>\n" +
    "                <h3 class=\"ui-order-title ui-toe\">亿珍阁翡翠 玉石缅甸翡翠手镯 A货玉器 玉镯子 飘花玉手镯亿珍阁翡翠 玉石缅甸翡翠手镯 A货玉器 玉镯子 飘花玉手镯</h3>\n" +
    "                <p class=\"ui-price\"><i>&yen;</i>124.00</p>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "    <h3 class=\"ui-title\">物流信息</h3>\n" +
    "    <div class=\"ui-addr-panel\">\n" +
    "        <ul class=\"ui-store-panel\">\n" +
    "            <li class=\"ui-store-rich\"><a href=\"\">运营商</a></li>\n" +
    "            <li>\n" +
    "                <input type=\"text\" name=\"\" id=\"\" placeholder=\"运营商\">\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <input type=\"number\" name=\"\" id=\"\" placeholder=\"运单号\">\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"ui-btn-default-panel\">\n" +
    "        <a href=\"#\" class=\"btn btn-default btn-lgs btn-block\">确认发货</a>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">收货人地址</h3>\n" +
    "    <div class=\"ui-addr-panel\">\n" +
    "        <div class=\"ui-addr-info\">\n" +
    "            <p><strong>东方朔</strong></p>\n" +
    "            <p><strong>18888888888</strong></p>\n" +
    "            <p>上海 闸北</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">缴纳方式</h3>\n" +
    "    <div class=\"ui-addr-panel\">\n" +
    "        <div class=\"ui-addr-info\">\n" +
    "            <p class=\"ui-alipay\"><i class=\"fa\">&#xe611;</i>支付宝支付</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "<section class=\"ui-container\">\n" +
    "    <article class=\"ui-order-panel\">\n" +
    "        <div class=\"ui-order-hd\">\n" +
    "            <span class=\"ui-c-red\">已收货</span>\n" +
    "            <p class=\"ui-order-number\">订单号<strong>123456</strong></p>\n" +
    "        </div>\n" +
    "        <div class=\"ui-order-bd\">\n" +
    "            <a href=\"javascript:;\">\n" +
    "                <span class=\"ui-img\"><img src=\"static/temp/4.jpg\"></span>\n" +
    "                <h3 class=\"ui-order-title ui-toe\">亿珍阁翡翠 玉石缅甸翡翠手镯 A货玉器 玉镯子 飘花玉手镯亿珍阁翡翠 玉石缅甸翡翠手镯 A货玉器 玉镯子 飘花玉手镯</h3>\n" +
    "                <p class=\"ui-price\"><i>&yen;</i>124.00</p>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "    <h3 class=\"ui-title\">物流信息</h3>\n" +
    "    <div class=\"ui-addr-panel\">\n" +
    "        <ul class=\"ui-store-panel\">\n" +
    "            <li class=\"ui-store-rich\"><a href=\"\">运营商</a></li>\n" +
    "            <li>\n" +
    "                <input type=\"text\" name=\"\" id=\"\" placeholder=\"运营商\">\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <input type=\"number\" name=\"\" id=\"\" placeholder=\"运单号\">\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">收货人地址</h3>\n" +
    "    <div class=\"ui-addr-panel\">\n" +
    "        <div class=\"ui-addr-info\">\n" +
    "            <p><strong>东方朔</strong></p>\n" +
    "            <p><strong>18888888888</strong></p>\n" +
    "            <p>上海 闸北</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">缴纳方式</h3>\n" +
    "    <div class=\"ui-addr-panel\">\n" +
    "        <div class=\"ui-addr-info\">\n" +
    "            <p class=\"ui-alipay\"><i class=\"fa\">&#xe611;</i>支付宝支付</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/paydeposit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/paydeposit.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>缴纳保证金</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "  </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "    <span class=\"icons-save\" ng-if=\"showSave\" root=\"$parent\" saveAddress>保存</span>\n" +
    "    <span class=\"icons-save\" ng-if=\"showAdd\" root=\"$parent\" addAddress>新增</span>\n" +
    "  </span>\n" +
    "</header>\n" +
    "<div ui-view=\"content\"></div>\n" +
    "");
}]);

angular.module("tpls/preview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/preview.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>店铺</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "      </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-share\" share><i class=\"fa\">&#xe614;</i></a>\n" +
    "      </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-my-shop\">\n" +
    "        <div class=\"ui-hd-img\">\n" +
    "            <img class=\"ui-blur\" src=\"/images/temp/3.jpg\">\n" +
    "            <img src=\"/images/temp/3.jpg\">\n" +
    "        </div>\n" +
    "        <div class=\"ui-user-head\">\n" +
    "            <h3><span class=\"ui-uesr-img\"><img ng-src=\"{{user.avator}}\"></span></h3>\n" +
    "            <p class=\"ui-user-name\">{{user.name}} <i class=\"icons-heart fa\">&#xe606;</i></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui-thing-info\">\n" +
    "        <p class=\"ui-text-para\">{{store.storeInfo}}</p>\n" +
    "        <p class=\"ui-map\">实体店地址：<i class=\"fa\">&#xe630;</i><span>{{store.storeAddress}}</span></p>\n" +
    "        <div class=\"ui-photo\">\n" +
    "            <img src=\"static/temp/4.jpg\" alt=\"\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">店内所有商品</h3>\n" +
    "    <article>\n" +
    "        <div class=\"ui-item-image\">\n" +
    "            <a href=\"javascript:;\"><img src=\"static/temp/1.jpg\"></a>\n" +
    "            <div class=\"item-title\">\n" +
    "                <h3>石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件</h3></div>\n" +
    "            <span class=\"item-price\"><i>&yen;</i>124.00</span>\n" +
    "            <span class=\"item-count\">距离结束<i>2</i><i>1</i>:<i>2</i><i>2</i></span>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "    <article>\n" +
    "        <div class=\"ui-item-image\">\n" +
    "            <a href=\"javascript:;\"><img src=\"static/temp/2.jpg\"></a>\n" +
    "            <div class=\"item-title\">\n" +
    "                <h3>石守一生新疆和田玉蝉吊坠玉石一鸣惊人玉器挂件</h3></div>\n" +
    "            <span class=\"item-price my-price\"><i class=\"fa\">&#xe60e;</i><i>&yen;</i>124.00</span>\n" +
    "            <span class=\"item-count\">距离结束<i>2</i><i>1</i>:<i>2</i><i>2</i></span>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "    <p class=\"ui-line-tips\"><span>到底啦</span></p>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/publish.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/publish.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>发布</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "      </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-save\" preview>预览</a>\n" +
    "      </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <div class=\"PSD/1.fw.png\">\n" +
    "        <p class=\"ui-text\">第一次发布商品。请先填写支付宝账号，在买家确认收货后7天无投诉，我们将支付宝转账给您。</p>\n" +
    "        <div class=\"ui-form\">\n" +
    "            <div class=\"ui-form-item\">\n" +
    "                <input type=\"text\" placeholder=\"姓名\">\n" +
    "            </div>\n" +
    "            <div class=\"ui-form-item\">\n" +
    "                <input type=\"number\" placeholder=\"支付宝账号\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul class=\"ui-btn-line ui-tab-lg\" ng-init=\"sellModel = 1\" hookvar=\"sellModel\" switch>\n" +
    "        <li ng-class=\"{active:sellModel == 1}\">拍卖模式<i class=\"fa\">&#xe610;</i></li>\n" +
    "        <li ng-class=\"{active:sellModel == 2}\">一口价模式<i class=\"fa\">&#xe610;</i></li>\n" +
    "    </ul>\n" +
    "    <div class=\"ui-tabs-content\">\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:sellModel == 1}\">\n" +
    "            <form action=\"\" name=\"storeForm\">\n" +
    "                <div class=\"ui-form-action\">\n" +
    "                    <div class=\"ui-form\">\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <input ng-model=\"product.name\" type=\"text\" placeholder=\"商品名\">\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item ui-arrows\">\n" +
    "                            <p>类别</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item ui-arrows\">\n" +
    "                            <p>保证金</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <input type=\"number\" placeholder=\"起拍金额\">\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item ui-arrows\">\n" +
    "                            <p>加价幅度</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <input type=\"number\" placeholder=\"底价 非必填(拍卖如未达到底价，流拍处理)\">\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item-level\">\n" +
    "                            <div class=\"ui-form-item ui-arrows\">\n" +
    "                                <p>上架日期<span>非必选</span></p>\n" +
    "                            </div>\n" +
    "                            <div class=\"ui-form-item ui-arrows\">\n" +
    "                                <p>上架时间<span>非必选</span></p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"4\" placeholder=\"宝贝详情\"></textarea>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-file-panel\">\n" +
    "                        <ul class=\"ui-file-img\">\n" +
    "                            <li>\n" +
    "                                <input type=\"file\" ng-model=\"formData.img1\" name=\"img1\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                            <li>\n" +
    "                                <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                            <li>\n" +
    "                                <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        </ul>\n" +
    "                        <ul class=\"ui-btn-line\">\n" +
    "                            <li><a href=\"javascript:;\" class=\"btn btn-default btn-lgs btn-block\">预览</a></li>\n" +
    "                            <li><a href=\"javascript:;\" class=\"btn btn-primary btn-lgs btn-block\">确认设置</a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"ui-tabs-pane\" ng-class=\"{active:sellModel == 2}\">\n" +
    "            <div class=\"ui-form-action\">\n" +
    "                <div class=\"ui-form\">\n" +
    "                    <div class=\"ui-form-item\">\n" +
    "                        <input type=\"text\" placeholder=\"商品名\">\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-form-item ui-arrows\">\n" +
    "                        <p>类别</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-form-item\">\n" +
    "                        <input type=\"number\" placeholder=\"一口价金额\">\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-form-item ui-arrows\">\n" +
    "                        <p>加价幅度</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-form-item-level\">\n" +
    "                        <div class=\"ui-form-item ui-arrows\">\n" +
    "                            <p>上架日期<span>非必选</span></p>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item ui-arrows\">\n" +
    "                            <p>上架时间<span>非必选</span></p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"ui-form-item\">\n" +
    "                        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"4\" placeholder=\"宝贝详情\"></textarea>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"ui-file-panel\">\n" +
    "                    <ul class=\"ui-btn-line ui-file-img\">\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                    </ul>\n" +
    "                    <ul class=\"ui-btn-line\">\n" +
    "                        <li preview><a href=\"javascript:;\" class=\"btn btn-default btn-lgs btn-block\">预览</a></li>\n" +
    "                        <li><a href=\"javascript:;\" class=\"btn btn-primary btn-lgs btn-block\">确认设置</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/register.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>注册</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "    </span>\n" +
    "</header>\n" +
    "<div ui-view=\"content\"></div>\n" +
    "");
}]);

angular.module("tpls/setting.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/setting.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>设置</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "      </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "        <a href=\"javascript:;\" class=\"icons-exit\">退出</a>\n" +
    "      </span>\n" +
    "</header>\n" +
    "<section class=\"ui-container\">\n" +
    "    <ul class=\"ui-btn-line ui-tab-lg\" ng-init=\"identityModel = 1\" hookvar=\"identityModel\" switch>\n" +
    "        <li ng-class=\"{active:identityModel == 1}\">买家模式<i class=\"fa\">&#xe610;</i></li>\n" +
    "        <li ng-class=\"{active:identityModel == 2}\">卖家模式<i class=\"fa\">&#xe610;</i></li>\n" +
    "    </ul>\n" +
    "    <ul class=\"set-tabs ui-user-navbar-nav\" ng-init=\"page = 1\" hookvar=\"page\" switch>\n" +
    "        <li ng-class=\"{active:page == 1}\"><i class=\"fa\">&#xe61f;</i>修改用户信息</li>\n" +
    "        <li ng-class=\"{active:page == 2}\"><i class=\"fa\">&#xe620;</i>修改密码</li>\n" +
    "    </ul>\n" +
    "    <div class=\"set-tabs-content\">\n" +
    "        <div class=\"set-tabs-pane\" ng-class=\"{active:page == 1}\">\n" +
    "            <div class=\"ui-form-action\">\n" +
    "                <div class=\"ui-form ui-form-icon\">\n" +
    "                    <form action=\"\" id=\"form-action\">\n" +
    "                        <div class=\"ui-user-head\">\n" +
    "                            <p class=\"\">xianzhiding</p>\n" +
    "                            <h3><span class=\"ui-uesr-img\"><img src=\"static/temp/1s.jpg\"><input type=\"file\" name=\"\" id=\"\"></span></h3>\n" +
    "                            <p class=\"ui-user-name\">更换</p>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item ui-form-radio\">\n" +
    "                            <label class=\"ui-radio\">\n" +
    "                                <input name=\"radio1\" type=\"radio\" value=\"radio1\"><i class=\"fa\"></i><span>女生</span>\n" +
    "                            </label>\n" +
    "                            <label class=\"ui-radio\">\n" +
    "                                <input name=\"radio1\" type=\"radio\" value=\"radio2\"><i class=\"fa\"></i><span>男生</span>\n" +
    "                            </label>\n" +
    "                            <span class=\"icons-info\"><i class=\"fa\"></i></span>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div class=\"ui-btn\">\n" +
    "                    <button type=\"submit\" form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\">完成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"set-tabs-pane\" ng-class=\"{active:page == 2}\">\n" +
    "            <div class=\"ui-form-action\">\n" +
    "                <div class=\"ui-form ui-form-icon\">\n" +
    "                    <form action=\"\" id=\"form-action\">\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <input type=\"password\" placeholder=\"现用密码\">\n" +
    "                            <span class=\"icons-info\"><i class=\"fa\">&#xe619;</i></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <input type=\"password\" placeholder=\"输入新密码\">\n" +
    "                            <span class=\"icons-info\"><i class=\"fa\">&#xe621;</i></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-form-item\">\n" +
    "                            <input type=\"password\" placeholder=\"输入新密码\">\n" +
    "                            <span class=\"icons-info\"><i class=\"fa\">&#xe621;</i></span>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div class=\"ui-btn\">\n" +
    "                    <button type=\"submit\" form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\">完成</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/forgetPasswordMobile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/forgetPasswordMobile.tpl.html",
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-user-head\">\n" +
    "        <h3><span class=\"ui-uesr-img\" back><i class=\"fa ui-uesr-default\">&#xe623;</i><!-- <img src=\"static/temp/1s.jpg\"> --></span></h3>\n" +
    "    </div>\n" +
    "    <div class=\"ui-form-action\">\n" +
    "        <div class=\"ui-form ui-form-icon\">\n" +
    "            <form action=\"\" id=\"form-action\">\n" +
    "                <mobile placeholder=\"输入手机号\"></mobile>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"ui-btn\">\n" +
    "            <button type=\"submit\" form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\" forgetPasswordSendCode>下一步</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/forgetPasswordSendCode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/forgetPasswordSendCode.tpl.html",
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-user-head\">\n" +
    "        <h3><span class=\"ui-uesr-img\"><i class=\"fa ui-uesr-default\">&#xe623;</i><!-- <img src=\"static/temp/1s.jpg\"> --></span></h3>\n" +
    "    </div>\n" +
    "    <p>已发送验证码至<strong>13681842931</strong></p>\n" +
    "    <div class=\"ui-form-action\">\n" +
    "        <div class=\"ui-form ui-form-icon\">\n" +
    "            <form action=\"\" id=\"form-action\">\n" +
    "                <checkcode placeholder=\"请输入短信验证码\"></checkcode>\n" +
    "                <password placeholder=\"输入密码\"></password>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"ui-btn\">\n" +
    "            <button type=\"submit\" form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\">下一步</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/paydepositAddAddress.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/paydepositAddAddress.tpl.html",
    "<section class=\"ui-container {{containerClass}}\">\n" +
    "    <div class=\"ui-form-action\">\n" +
    "        <form name=\"addAddress\">\n" +
    "            <div class=\"ui-form\">\n" +
    "                <div class=\"ui-form-item\">\n" +
    "                    <input name=\"name\" ng-model=\"newAddress.name\" type=\"text\" placeholder=\"用户名\" required>\n" +
    "                    <a ng-click=\"newAddress.name = ''\" ng-show=\"addAddress.name.$dirty\" class=\"ui-icon-close\"><i class=\"fa\">&#xe612;</i></a>\n" +
    "                </div>\n" +
    "                <div class=\"ui-form-item\">\n" +
    "                    <input name=\"mobile\" ng-model=\"newAddress.mobile\" type=\"number\" placeholder=\"输入手机号\" required>\n" +
    "                    <a ng-click=\"newAddress.mobile = ''\" ng-show=\"addAddress.mobile.$dirty\" class=\"ui-icon-close\"><i class=\"fa\">&#xe612;</i></a>\n" +
    "                </div>\n" +
    "                <div class=\"ui-form-item\">\n" +
    "                    <input name=\"postcode\" ng-model=\"newAddress.postcode\" type=\"number\" placeholder=\"邮政编码\" required>\n" +
    "                    <a ng-click=\"newAddress.postcode = ''\" ng-show=\"addAddress.postcode.$dirty\" class=\"ui-icon-close\"><i class=\"fa\">&#xe612;</i></a>\n" +
    "                </div>\n" +
    "                <div class=\"ui-form-item ui-arrows\">\n" +
    "                    <p>省，市，区</p>\n" +
    "                </div>\n" +
    "                <div class=\"ui-form-item\">\n" +
    "                    <textarea name=\"detail\" ng-model=\"newAddress.detail\" id=\"\" cols=\"30\" rows=\"4\" placeholder=\"详细地址\" required></textarea>\n" +
    "                </div>\n" +
    "                <div class=\"ui-form-item\">\n" +
    "                    <input name=\"isDefault\" ng-model=\"newAddress.isDefault\" type=\"checkbox\" placeholder=\"设置默认地址\" checked>                   \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/paydepositAddressManger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/paydepositAddressManger.tpl.html",
    "<section class=\"ui-container {{containerClass}}\">\n" +
    "    <div class=\"ui-info-panel\" ng-repeat=\"address in addresses\" addressId=\"{{address.id}}\" >\n" +
    "        <div class=\"ui-info-cent ui-arrows\" ng-class=\"{active:address.isDefault}\" modifyaddress>\n" +
    "            <p><span class=\"address-name\">{{address.name}}</span><span class=\"ui-\" ng-if=\"address.isDefault\">[默认]</span></p>\n" +
    "            <p><span class=\"address-mobile\">{{address.mobile}}</span></p>\n" +
    "            <p class=\"address-detail\">{{address.detail}}</p>\n" +
    "            <span class=\"ui-check\"><i class=\"fa\">&#xe610;</i></span>\n" +
    "            <div class=\"ui-handle\">\n" +
    "                <a href=\"javascript:;\" class=\"icons-edit\" root=\"$parent.$parent\" address=\"address\" editAddress><i class=\"fa\">&#xe60f;</i></a>\n" +
    "                <a href=\"javascript:;\" class=\"icons-delete\" root=\"$parent.$parent\" address=\"address\" deleteAddress><i class=\"fa\">&#xe62d;</i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/paydepositDetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/paydepositDetail.tpl.html",
    "<section class=\"ui-container {{containerClass}}\">\n" +
    "    <div class=\"ui-thumb\">\n" +
    "        <img ng-src=\"{{product.srcs[0]}}\">\n" +
    "        <p>一口价<span><i>&yen;</i>{{product.curPrice}}</span></p>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">收货地址</h3>\n" +
    "    <div class=\"ui-info-panel\">\n" +
    "        <div class=\"ui-info-cent ui-arrows active\" ui-sref=\"paydeposit({type:'AddressManger'})\">\n" +
    "            <p><span class=\"address-name\">{{defaultAddress.name}}</span><span class=\"ui-\">[默认]</span></p>\n" +
    "            <p><span class=\"address-mobile\">{{defaultAddress.mobile}}</span></p>\n" +
    "            <p class=\"address-detail\">{{defaultAddress.detail}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">缴纳方式</h3>\n" +
    "    <div class=\"ui-info-panel\">\n" +
    "        <div class=\"ui-info-cent pay-way\">\n" +
    "            <p class=\"ui-alipay\"><i class=\"fa\">&#xe611;</i>支付宝支付</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <p class=\"ui-pasw-deal\">请在<span>1小时</span>内完成付款，逾期订单将自动取消</p>\n" +
    "    <div class=\"ui-btn-panel\">\n" +
    "        <a href=\"javascript:;\" class=\"btn btn-primary btn-lgs btn-block\">同意并缴纳</a>\n" +
    "        <!-- <li><a href=\"javascript:;\" class=\"btn btn-primary btn-lg btn-block\">全部上架</a></li> -->\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/paydepositInit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/paydepositInit.tpl.html",
    "<section class=\"ui-container {{containerClass}}\">\n" +
    "    <div class=\"ui-text\">\n" +
    "        <p>拍卖是一诺千金的事，需先缴纳保证金，拍卖不成功，我们系数奉还！</p>\n" +
    "        <p class=\"ui-tpye\">冻结保证金：<span class=\"ui-c-green fs\"><i>&yen;</i>213</span></p>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">收货地址</h3>\n" +
    "    <div class=\"ui-info-panel\" ui-sref=\"paydeposit({type:'AddressManger'})\">\n" +
    "        <div class=\"ui-info-cent ui-arrows active\">\n" +
    "            <p><span class=\"address-name\">{{defaultAddress.name}}</span><span class=\"ui-\">[默认]</span></p>\n" +
    "            <p><span class=\"address-mobile\">{{defaultAddress.mobile}}</span></p>\n" +
    "            <p class=\"address-detail\">{{defaultAddress.detail}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"ui-info-panel\" ng-if=\"hasAddress\">\n" +
    "        <div class=\"ui-info-cent ui-arrows\">\n" +
    "            <a href=\"javascript:;\" ui-serf=\"paydeposit({type:'AddAddress'})\" class=\"ui-c-gray\">添加收货人信息</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h3 class=\"ui-title\">缴纳方式</h3>\n" +
    "    <div class=\"ui-info-panel\">\n" +
    "        <div class=\"ui-info-cent  pay-way\">\n" +
    "            <p class=\"ui-alipay\"><i class=\"fa\">&#xe611;</i>支付宝支付</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <p class=\"ui-pasw-deal\">我同意<a href=\"javascript:;\">赏时竞拍协议</a></p>\n" +
    "    <div class=\"ui-btn-panel\">\n" +
    "        <a class=\"btn btn-primary btn-lgs btn-block\" ui-sref=\"paydeposit({type:'detail'})\">同意并缴纳</a>\n" +
    "        <!-- <li><a href=\"javascript:;\" class=\"btn btn-primary btn-lg btn-block\">全部上架</a></li> -->\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("tpls/ui-wiget/registerUserAndPassword.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/registerUserAndPassword.tpl.html",
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-user-head\">\n" +
    "        <h3><span class=\"ui-uesr-img\"><i class=\"fa ui-uesr-default\">&#xe623;</i><!-- <img src=\"static/temp/1s.jpg\"> --></span></h3>\n" +
    "    </div>\n" +
    "    <div class=\"ui-form-action\">\n" +
    "        <div class=\"ui-form ui-form-icon\">\n" +
    "            <form name=\"registerForm\" id=\"form-action\">\n" +
    "                <mobile placeholder=\"输入手机号\"></mobile>\n" +
    "                <password placeholder=\"输入密码\"></password>\n" +
    "                <repassword placeholder=\"再次输入密码\"></repassword>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <p class=\"ui-pasw-deal\">我同意<a href=\"javascript:;\">用户协议</a></p>\n" +
    "        <div class=\"ui-btn\">\n" +
    "            <button ng-disabled=\"registerForm.$invalid\" registerVerifyMobile form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\">下一步验证手机</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/registerVerifyMobile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/registerVerifyMobile.tpl.html",
    "<section class=\"ui-container\">\n" +
    "    <div class=\"ui-user-head\">\n" +
    "        <h3><span class=\"ui-uesr-img\"><i class=\"fa ui-uesr-default\">&#xe623;</i><!-- <img src=\"static/temp/1s.jpg\"> --></span></h3>\n" +
    "    </div>\n" +
    "    <div class=\"ui-form-action\">\n" +
    "        <div class=\"ui-form ui-form-icon\">\n" +
    "            <form action=\"\" id=\"form-action\">\n" +
    "                <username placeholder=\"输入用户名\"></username>\n" +
    "                <checkcode placeholder=\"请输入验证码\"></checkcode>\n" +
    "                <div class=\"ui-form-item ui-form-radio\">\n" +
    "                    <label class=\"ui-radio\">\n" +
    "                        <input name=\"radio1\" type=\"radio\" value=\"radio1\"><i class=\"fa\">&#xe610;</i><span>女生</span>\n" +
    "                    </label>\n" +
    "                    <label class=\"ui-radio\">\n" +
    "                        <input name=\"radio1\" type=\"radio\" value=\"radio2\"><i class=\"fa\">&#xe610;</i><span>男生</span>\n" +
    "                    </label>\n" +
    "                    <span class=\"icons-info\"><i class=\"fa\">&#xe61c;</i></span>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"ui-btn\">\n" +
    "            <button type=\"submit\" form=\"form-action\" class=\"btn btn-primary btn-lgs btn-block\">完成</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/userBuyer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/userBuyer.tpl.html",
    "<section class=\"ui-container\">\n" +
    "    <ul class=\"user-tabs ui-user-navbar-nav\" ng-init=\"page = 1\" hookvar=\"page\" switch>\n" +
    "        <li ng-class=\"{active:page == 1}\"><i class=\"fa\">&#xe60c;</i>我的订单</li>\n" +
    "        <li ng-class=\"{active:page == 2}\"><i class=\"fa\">&#xe622;</i>拍卖中</li>\n" +
    "    </ul>\n" +
    "    <div class=\"user-tabs-content\" productsScroll>\n" +
    "        <p class=\"ui-line-tips\" ng-show=\"{{showorderTips}}\"><span>目前您还未下单，赶紧去下单吧</span></p>\n" +
    "        <p class=\"ui-line-tips\" ng-show=\"{{showpaimaiTips}}\"><span>目前没有您参与的拍卖，赶紧去参拍</span></p>\n" +
    "        <div class=\"user-tabs-pane\" ng-class=\"{active:page == 1}\">\n" +
    "            <article class=\"ui-order-panel\" ng-repeat=\"order in myorder\">\n" +
    "                <div class=\"ui-order-hd\">\n" +
    "                    <span class=\"ui-c-gray\">{{order.statusText}}</span>\n" +
    "                    <p class=\"ui-order-number\">订单号<strong>{{order.number}}</strong></p>\n" +
    "                </div>\n" +
    "                <div class=\"ui-order-bd\">\n" +
    "                    <a href=\"javascript:;\">\n" +
    "                        <span class=\"ui-img\"><img ng-src=\"{{order.product.srcs[0]}}\"></span>\n" +
    "                        <h3 class=\"ui-order-title ui-toe\">{{order.product.title}}</h3>\n" +
    "                        <p class=\"ui-price\"><i>&yen;</i>{{order.product.price}}</p>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </article>            \n" +
    "        </div>\n" +
    "        <div class=\"user-tabs-pane\" ng-class=\"{active:page == 2}\">\n" +
    "            <article class=\"ui-order-panel\" ng-repeat=\"order in auctionorder\">\n" +
    "                <div class=\"ui-order-hd\">\n" +
    "                    <span class=\"ui-c-gray\">{{order.statusText}}</span>\n" +
    "                    <span class=\"ui-count\">距离结束 <countDown timestamp=\"{{order.product.endTime}}\"></countDown></span>\n" +
    "                </div>\n" +
    "                <div class=\"ui-order-bd\">\n" +
    "                    <a href=\"javascript:;\">\n" +
    "                        <span class=\"ui-img\"><img ng-src=\"{{order.product.srcs[0]}}\"></span>\n" +
    "                        <h3 class=\"ui-order-title ui-toe\">{{order.product.title}}</h3>\n" +
    "                        <p class=\"ui-price\"><i>&yen;</i>{{order.product.price}}</p>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"ui-order-ft\">\n" +
    "                    <a href=\"javascript:;\" class=\"btn btn-default btn-lg\">立即出价</a>\n" +
    "                    <a href=\"javascript:;\" class=\"btn btn-default btn-lg\">代理出价</a>\n" +
    "                </div>\n" +
    "            </article>           \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/ui-wiget/userSeller.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/ui-wiget/userSeller.tpl.html",
    "<section class=\"ui-container\">\n" +
    "    <ul class=\"user-tabs ui-user-navbar-nav\" ng-init=\"page = 1\" hookvar=\"page\" switch>\n" +
    "        <li ng-class=\"{active:page == 1}\"><i class=\"fa\">&#xe60c;</i>我的订单</li>\n" +
    "        <li ng-class=\"{active:page == 2}\"><i class=\"fa\">&#xe633;</i>店铺设置</li>\n" +
    "        <li ng-class=\"{active:page == 3}\"><i class=\"fa\">&#xe634;</i>商品管理</li>\n" +
    "    </ul>\n" +
    "    <div class=\"user-tabs-content\">\n" +
    "        <div class=\"user-tabs-pane\" ng-class=\"{active:page == 1}\">\n" +
    "            <article class=\"ui-order-panel\" ng-repeat=\"order in myorder\">\n" +
    "                <div class=\"ui-order-hd\">\n" +
    "                    <span class=\"ui-c-gray\">{{order.statusText}}</span>\n" +
    "                    <p class=\"ui-order-number\">订单号<strong>{{order.number}}</strong></p>\n" +
    "                </div>\n" +
    "                <div class=\"ui-order-bd\">\n" +
    "                    <a href=\"javascript:;\">\n" +
    "                        <span class=\"ui-img\"><img ng-src=\"{{order.product.srcs[0]}}\"></span>\n" +
    "                        <h3 class=\"ui-order-title ui-toe\">{{order.product.title}}</h3>\n" +
    "                        <p class=\"ui-price\"><i>&yen;</i>{{order.product.price}}</p>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </article>\n" +
    "        </div>\n" +
    "        <div class=\"user-tabs-pane\" ng-class=\"{active:page == 2}\">\n" +
    "            <ul class=\"ui-store-panel\">\n" +
    "                <li>\n" +
    "                    <input type=\"text\" ng-model=\"storeName\" name=\"\" id=\"\" placeholder=\"店铺名称(一旦设置将无法修改,请谨慎)\">\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <textarea ng-model=\"storeInfo\" name=\"\" id=\"\" cols=\"30\" rows=\"4\" placeholder=\"店铺介绍\"></textarea>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <textarea ng-model=\"storeAddress\" name=\"\" id=\"\" cols=\"30\" rows=\"4\" placeholder=\"详细地址(非必填)\"></textarea>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <div class=\"ui-file-panel\">\n" +
    "                <form action=\"\"  name=\"uploadForm\" id=\"uploadProduct\" enctype=\"multipart/form-data\">\n" +
    "                    <ul class=\"ui-file-img\">\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img1\" name=\"img1\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img2\" name=\"img2\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img3\" name=\"img3\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img4\" name=\"img4\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                        <li>\n" +
    "                            <input type=\"file\" ng-model=\"formData.img5\" name=\"img5\" uploadimg /><img src=\"/images/temp/icons-plus.png\" alt=\"\" class=\"selected\"></li>\n" +
    "                    </ul>\n" +
    "                </form>\n" +
    "                <ul class=\"ui-btn-line\">\n" +
    "                    <li><a href=\"javascript:;\" class=\"btn btn-default btn-lgs btn-block\">预览</a></li>\n" +
    "                    <li><a href=\"javascript:;\" class=\"btn btn-primary btn-lgs btn-block\" savestore=\"savesetting()\">确认设置</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"user-tabs-pane\" ng-class=\"{active:page == 3}\">\n" +
    "            <ul class=\"ui-mini-tabs\" ng-init=\"inpage = 1\" hookvar=\"inpage\" switch>\n" +
    "                <li ng-class=\"{active:inpage == 1}\">在售中</li>\n" +
    "                <li ng-class=\"{active:inpage == 2}\">已下架</li>\n" +
    "            </ul>\n" +
    "            <div class=\"user-tabs-content\">\n" +
    "                <div class=\"ui-mini-tab-panel\" ng-class=\"{active:inpage == 1}\">\n" +
    "                    <article class=\"ui-order-panel\" ng-repeat=\"product in selling\">\n" +
    "                        <div class=\"ui-order-bd\">\n" +
    "                            <a href=\"javascript:;\">\n" +
    "                                <span class=\"ui-img\"><img ng-src=\"{{product.src}}\"></span>\n" +
    "                                <h3 class=\"ui-order-title ui-toe\">{{product.description}}</h3>\n" +
    "                                <p class=\"ui-price\"><span>一口价</span> <i>&yen;</i>{{product.curPrice}}</p>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-order-ft\">\n" +
    "                            <ul class=\"ui-btn-line\">\n" +
    "                                <li><a href=\"javascript:;\" class=\"btn btn-default btn-lg btn-block\">下架</a></li>\n" +
    "                                <li><a href=\"javascript:;\" class=\"btn btn-default btn-lg btn-block\">删除</a></li>\n" +
    "                                <li><a href=\"javascript:;\" class=\"btn btn-default btn-lg btn-block\">修改</a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </article>\n" +
    "                </div>\n" +
    "                <div class=\"ui-mini-tab-panel\" ng-class=\"{active:inpage == 2}\">\n" +
    "                    <article class=\"ui-order-panel\" ng-repeat=\"product in selling\">\n" +
    "                        <div class=\"ui-order-bd\">\n" +
    "                            <a href=\"javascript:;\">\n" +
    "                                <span class=\"ui-img\"><img ng-src=\"{{product.src}}\"></span>\n" +
    "                                <h3 class=\"ui-order-title ui-toe\">{{product.description}}</h3>\n" +
    "                                <p class=\"ui-price\"><span>一口价</span> <i>&yen;</i>{{product.curPrice}}</p>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"ui-order-ft\">\n" +
    "                            <ul class=\"ui-btn-line\">\n" +
    "                                <li><a href=\"javascript:;\" class=\"btn btn-default btn-lg btn-block\">下架</a></li>\n" +
    "                                <li><a href=\"javascript:;\" class=\"btn btn-default btn-lg btn-block\">删除</a></li>\n" +
    "                                <li><a href=\"javascript:;\" class=\"btn btn-default btn-lg btn-block\">修改</a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </article>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"btn-bottom-panel\">\n" +
    "            <ul class=\"ui-btn-line\">\n" +
    "                <li><a href=\"javascript:;\" class=\"btn btn-primary btn-lg btn-block\">全部上架</a></li>\n" +
    "                <li><a href=\"javascript:;\" class=\"btn btn-warning btn-lg btn-block\" publish>发布商品</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("tpls/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpls/user.tpl.html",
    "<header class=\"ui-header\">\n" +
    "    <h2>我的</h2>\n" +
    "    <span class=\"hd-left\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-back\" back><i class=\"fa\">&#xe632;</i></a>\n" +
    "  </span>\n" +
    "    <span class=\"hd-right\">\n" +
    "    <a href=\"javascript:;\" class=\"icons-set\" setting><i class=\"fa\">&#xe60d;</i></a>\n" +
    "  </span>\n" +
    "</header>\n" +
    "<div class=\"ui-user-head\">\n" +
    "    <h3><span class=\"ui-uesr-img\"><img ng-src=\"{{userInfo.avatar}}\"><span class=\"icons-haed\"><i class=\"fa\">&#xe635;</i></span></span></h3>\n" +
    "    <p class=\"ui-user-name\">{{userInfo.name}}<span class=\"icons-comments\" messages><i class=\"fa\">&#xe62e;</i><span class=\"badge\">{{userInfo.msgCounts}}</span></span>\n" +
    "    </p>\n" +
    "</div>\n" +
    "<div ui-view=\"content\"></div>\n" +
    "");
}]);
