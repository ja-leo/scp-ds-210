"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[9814],{9814:(x,u,a)=>{a.r(u),a.d(u,{NzDemoMessageModule:()=>v});var T=a(3238),f=a(4515),r=a(2720),m=a(4344),l=a(5760);const _=[r.gR,m.sL,l.PV];var d=a(1380),e=a(9724);let A=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message"]],viewQuery:function(n,s){if(1&n&&e.Gf(d.G,5),2&n){let i;e.iGM(i=e.CRH())&&(s.codeBoxes=i)}},decls:0,vars:0,template:function(n,s){},encapsulation:2}),o})();var U=a(3563),p=a(695),g=a(8918),Z=a(8741),z=a(5535),c=a(8238);let q=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){this.message.info("This is a normal message")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-info"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createBasicMessage()}),e._uU(1,"Display normal message"),e.qZA()),2&n&&e.Q6J("nzType","primary")},directives:[m.ix,c.dQ,g.w],encapsulation:2}),o})(),C=(()=>{class o{constructor(n){this.message=n}createMessage(n){this.message.create(n,`This is a message of ${n}`)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-other"]],decls:6,vars:0,consts:[["nz-button","",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createMessage("success")}),e._uU(1,"Success"),e.qZA(),e.TgZ(2,"button",0),e.NdJ("click",function(){return s.createMessage("error")}),e._uU(3,"Error"),e.qZA(),e.TgZ(4,"button",0),e.NdJ("click",function(){return s.createMessage("warning")}),e._uU(5,"Warning"),e.qZA())},directives:[m.ix,c.dQ,g.w],styles:["[nz-button][_ngcontent-%COMP%]{margin-right:8px}"]}),o})(),M=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){this.message.success("This is a prompt message for success, and it will disappear in 10 seconds",{nzDuration:1e4})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-duration"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createBasicMessage()}),e._uU(1,"Customized display duration"),e.qZA()),2&n&&e.Q6J("nzType","default")},directives:[m.ix,c.dQ,g.w],encapsulation:2}),o})(),D=(()=>{class o{constructor(n){this.message=n}createBasicMessage(){const n=this.message.loading("Action in progress..",{nzDuration:0}).messageId;setTimeout(()=>{this.message.remove(n)},2500)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-loading"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.createBasicMessage()}),e._uU(1,"Display a loading indicator"),e.qZA()),2&n&&e.Q6J("nzType","default")},directives:[m.ix,c.dQ,g.w],encapsulation:2}),o})();var h=a(4612);let N=(()=>{class o{constructor(n){this.message=n}startShowMessages(){this.message.loading("Action in progress",{nzDuration:2500}).onClose.pipe((0,h.b)(()=>this.message.success("Loading finished",{nzDuration:2500}).onClose),(0,h.b)(()=>this.message.info("Loading finished is finished",{nzDuration:2500}).onClose)).subscribe(()=>{console.log("All completed!")})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.dD))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message-close"]],decls:2,vars:1,consts:[["nz-button","",3,"nzType","click"]],template:function(n,s){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return s.startShowMessages()}),e._uU(1,"Display a sequence of messages"),e.qZA()),2&n&&e.Q6J("nzType","default")},directives:[m.ix,c.dQ,g.w],encapsulation:2}),o})(),b=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-message"]],viewQuery:function(n,s){if(1&n&&e.Gf(d.G,5),2&n){let i;e.iGM(i=e.CRH())&&(s.codeBoxes=i)}},decls:337,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-message-demo-info","nzTitle","Normal prompt"],["nzHref","#components-message-demo-other","nzTitle","Other types of message"],["nzHref","#components-message-demo-duration","nzTitle","Customize duration"],["nzHref","#components-message-demo-loading","nzTitle","Message of loading"],["nzHref","#components-message-demo-close","nzTitle","Customize duration"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//message/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Normal prompt","nzSelector","nz-demo-message-info","nzGenerateCommand","ng g ng-zorro-antd:message-info <name>","nzComponentName","NzDemoMessageInfoComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Other types of message","nzSelector","nz-demo-message-other","nzGenerateCommand","ng g ng-zorro-antd:message-other <name>","nzComponentName","NzDemoMessageOtherComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize duration","nzSelector","nz-demo-message-duration","nzGenerateCommand","ng g ng-zorro-antd:message-duration <name>","nzComponentName","NzDemoMessageDurationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Message of loading","nzSelector","nz-demo-message-loading","nzGenerateCommand","ng g ng-zorro-antd:message-loading <name>","nzComponentName","NzDemoMessageLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize duration","nzSelector","nz-demo-message-close","nzGenerateCommand","ng g ng-zorro-antd:message-close <name>","nzComponentName","NzDemoMessageCloseComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nzmessageservice"],[1,"api-type-label","service"],["onclick","window.location.hash = 'nzmessageservice'",1,"anchor"],["id","global-configuration"],["onclick","window.location.hash = 'global-configuration'",1,"anchor"],["href","/docs/global-config/en"],["id","nzmessageref"],["onclick","window.location.hash = 'nzmessageref'",1,"anchor"],[1,"token","class-name"],[1,"token","operator"],["spellcheck","true",1,"token","comment"]],template:function(n,s){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(y){return s.goLink(y)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Message"),e._UZ(12,"span",9)(13,"span",10),e.TgZ(14,"a",11),e._UZ(15,"i",12),e.qZA()(),e.TgZ(16,"section",8),e.IAx(),e.TgZ(17,"p"),e._uU(18,"Display global messages as feedback in response to user operations."),e.qZA(),e.TgZ(19,"h2",13)(20,"span"),e._uU(21,"When To Use"),e.qZA(),e.TgZ(22,"a",14),e._uU(23,"#"),e.qZA()(),e.TgZ(24,"ul")(25,"li"),e._uU(26," To provide feedback such as success, warning, error etc."),e.qZA(),e.TgZ(27,"li"),e._uU(28," A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt."),e.qZA()(),e.TgZ(29,"pre",15)(30,"code")(31,"span",16),e._uU(32,"import"),e.qZA(),e._uU(33," "),e.TgZ(34,"span",17),e._uU(35,"{"),e.qZA(),e._uU(36," NzMessageModule "),e.TgZ(37,"span",17),e._uU(38,"}"),e.qZA(),e._uU(39," "),e.TgZ(40,"span",16),e._uU(41,"from"),e.qZA(),e._uU(42," "),e.TgZ(43,"span",18),e._uU(44,"'ng-zorro-antd/message'"),e.qZA(),e.TgZ(45,"span",17),e._uU(46,";"),e.qZA()()(),e.fQ9(),e.qZA()(),e.TgZ(47,"nz-tabset",19)(48,"nz-tab",20)(49,"div",21)(50,"div",22)(51,"nz-code-box",23),e._UZ(52,"nz-demo-message-info",24),e.TgZ(53,"div",25),e.IAx(),e.TgZ(54,"p"),e._uU(55,"Normal messages as feedbacks."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(56,"nz-code-box",26),e._UZ(57,"nz-demo-message-other",24),e.TgZ(58,"div",25),e.IAx(),e.TgZ(59,"p"),e._uU(60,"Messages of success, error and warning types."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(61,"nz-code-box",27),e._UZ(62,"nz-demo-message-duration",24),e.TgZ(63,"div",25),e.IAx(),e.TgZ(64,"p"),e._uU(65,"Customize message display duration from default "),e.TgZ(66,"code"),e._uU(67,"3s"),e.qZA(),e._uU(68," to "),e.TgZ(69,"code"),e._uU(70,"10s"),e.qZA(),e._uU(71,"."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(72,"nz-code-box",28),e._UZ(73,"nz-demo-message-loading",24),e.TgZ(74,"div",25),e.IAx(),e.TgZ(75,"p"),e._uU(76,"Display a global loading indicator, which is dismissed by itself asynchronously."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(77,"nz-code-box",29),e._UZ(78,"nz-demo-message-close",24),e.TgZ(79,"div",25),e.IAx(),e.TgZ(80,"p"),e._uU(81,"You can subscribe to "),e.TgZ(82,"code"),e._uU(83,"onClose"),e.qZA(),e._uU(84," event to make some operations. This case would open three messages in sequence."),e.qZA(),e.fQ9(),e.qZA()()()()()(),e.TgZ(85,"section",30),e.IAx(),e.TgZ(86,"h2",31)(87,"span"),e._uU(88,"API"),e.qZA(),e.TgZ(89,"a",32),e._uU(90,"#"),e.qZA()(),e.TgZ(91,"h3",33)(92,"span"),e._uU(93,"NzMessageService"),e.qZA(),e.TgZ(94,"label",34),e._uU(95,"service"),e.qZA(),e.TgZ(96,"a",35),e._uU(97,"#"),e.qZA()(),e.TgZ(98,"p"),e._uU(99,"This components provides some service methods, with usage and arguments as following:"),e.qZA(),e.TgZ(100,"ul")(101,"li")(102,"code"),e._uU(103,"NzMessageService.success(content, [options])"),e.qZA()(),e.TgZ(104,"li")(105,"code"),e._uU(106,"NzMessageService.error(content, [options])"),e.qZA()(),e.TgZ(107,"li")(108,"code"),e._uU(109,"NzMessageService.info(content, [options])"),e.qZA()(),e.TgZ(110,"li")(111,"code"),e._uU(112,"NzMessageService.warning(content, [options])"),e.qZA()(),e.TgZ(113,"li")(114,"code"),e._uU(115,"NzMessageService.loading(content, [options])"),e.qZA()()(),e.TgZ(116,"table")(117,"thead")(118,"tr")(119,"th"),e._uU(120,"Argument"),e.qZA(),e.TgZ(121,"th"),e._uU(122,"Description"),e.qZA(),e.TgZ(123,"th"),e._uU(124,"Type"),e.qZA(),e.TgZ(125,"th"),e._uU(126,"Default"),e.qZA()()(),e.TgZ(127,"tbody")(128,"tr")(129,"td"),e._uU(130,"content"),e.qZA(),e.TgZ(131,"td"),e._uU(132,"The content of message"),e.qZA(),e.TgZ(133,"td")(134,"code"),e._uU(135,"string | TemplateRef<void>"),e.qZA()(),e.TgZ(136,"td"),e._uU(137,"-"),e.qZA()(),e.TgZ(138,"tr")(139,"td"),e._uU(140,"options"),e.qZA(),e.TgZ(141,"td"),e._uU(142,"Support setting the parameters for the current message box, see the table below"),e.qZA(),e.TgZ(143,"td")(144,"code"),e._uU(145,"object"),e.qZA()(),e.TgZ(146,"td"),e._uU(147,"-"),e.qZA()()()(),e.TgZ(148,"p"),e._uU(149,"The parameters that are set by the "),e.TgZ(150,"code"),e._uU(151,"options"),e.qZA(),e._uU(152," support are as follows:"),e.qZA(),e.TgZ(153,"table")(154,"thead")(155,"tr")(156,"th"),e._uU(157,"Argument"),e.qZA(),e.TgZ(158,"th"),e._uU(159,"Description"),e.qZA(),e.TgZ(160,"th"),e._uU(161,"Type"),e.qZA()()(),e.TgZ(162,"tbody")(163,"tr")(164,"td"),e._uU(165,"nzDuration"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"Duration (milliseconds), does not disappear when set to 0"),e.qZA(),e.TgZ(168,"td")(169,"code"),e._uU(170,"number"),e.qZA()()(),e.TgZ(171,"tr")(172,"td"),e._uU(173,"nzPauseOnHover"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"Do not remove automatically when mouse is over while setting to "),e.TgZ(176,"code"),e._uU(177,"true"),e.qZA()(),e.TgZ(178,"td")(179,"code"),e._uU(180,"boolean"),e.qZA()()(),e.TgZ(181,"tr")(182,"td"),e._uU(183,"nzAnimate"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"Whether to turn on animation"),e.qZA(),e.TgZ(186,"td")(187,"code"),e._uU(188,"boolean"),e.qZA()()()()(),e.TgZ(189,"p"),e._uU(190,"Methods for destruction are also provided:"),e.qZA(),e.TgZ(191,"ul")(192,"li")(193,"code"),e._uU(194,"message.remove(id)"),e.qZA(),e._uU(195," // Remove the message with the specified id. When the id is empty, remove all messages (the message id is returned by the above method)"),e.qZA()(),e.TgZ(196,"h3",36)(197,"span"),e._uU(198,"Global Configuration"),e.qZA(),e.TgZ(199,"a",37),e._uU(200,"#"),e.qZA()(),e.TgZ(201,"p"),e._uU(202,"You can use "),e.TgZ(203,"code"),e._uU(204,"NzConfigService"),e.qZA(),e._uU(205," to configure this component globally. Please check the "),e.TgZ(206,"a",38),e._uU(207,"Global Configuration"),e.qZA(),e._uU(208," chapter for more information."),e.qZA(),e.TgZ(209,"table")(210,"thead")(211,"tr")(212,"th"),e._uU(213,"Argument"),e.qZA(),e.TgZ(214,"th"),e._uU(215,"Description"),e.qZA(),e.TgZ(216,"th"),e._uU(217,"Type"),e.qZA(),e.TgZ(218,"th"),e._uU(219,"Default"),e.qZA()()(),e.TgZ(220,"tbody")(221,"tr")(222,"td"),e._uU(223,"nzDuration"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"Duration (milliseconds), does not disappear when set to 0"),e.qZA(),e.TgZ(226,"td")(227,"code"),e._uU(228,"number"),e.qZA()(),e.TgZ(229,"td")(230,"code"),e._uU(231,"3000"),e.qZA()()(),e.TgZ(232,"tr")(233,"td"),e._uU(234,"nzMaxStack"),e.qZA(),e.TgZ(235,"td"),e._uU(236,"The maximum number of messages that can be displayed at the same time"),e.qZA(),e.TgZ(237,"td")(238,"code"),e._uU(239,"number"),e.qZA()(),e.TgZ(240,"td")(241,"code"),e._uU(242,"7"),e.qZA()()(),e.TgZ(243,"tr")(244,"td"),e._uU(245,"nzPauseOnHover"),e.qZA(),e.TgZ(246,"td"),e._uU(247,"Do not remove automatically when mouse is over while setting to "),e.TgZ(248,"code"),e._uU(249,"true"),e.qZA()(),e.TgZ(250,"td")(251,"code"),e._uU(252,"boolean"),e.qZA()(),e.TgZ(253,"td")(254,"code"),e._uU(255,"true"),e.qZA()()(),e.TgZ(256,"tr")(257,"td"),e._uU(258,"nzAnimate"),e.qZA(),e.TgZ(259,"td"),e._uU(260,"Whether to turn on animation"),e.qZA(),e.TgZ(261,"td")(262,"code"),e._uU(263,"boolean"),e.qZA()(),e.TgZ(264,"td")(265,"code"),e._uU(266,"true"),e.qZA()()(),e.TgZ(267,"tr")(268,"td"),e._uU(269,"nzTop"),e.qZA(),e.TgZ(270,"td"),e._uU(271,"Distance from top"),e.qZA(),e.TgZ(272,"td")(273,"code"),e._uU(274,"number | string"),e.qZA()(),e.TgZ(275,"td")(276,"code"),e._uU(277,"24"),e.qZA()()(),e.TgZ(278,"tr")(279,"td"),e._uU(280,"nzDirection"),e.qZA(),e.TgZ(281,"td"),e._uU(282,"Direction of the text in the messages"),e.qZA(),e.TgZ(283,"td")(284,"code"),e._uU(285,"'ltr' | 'rtl'"),e.qZA()(),e.TgZ(286,"td"),e._uU(287,"-"),e.qZA()()()(),e.TgZ(288,"h3",39)(289,"span"),e._uU(290,"NzMessageRef"),e.qZA(),e.TgZ(291,"a",40),e._uU(292,"#"),e.qZA()(),e.TgZ(293,"p"),e._uU(294,"It's the object that returned when you call "),e.TgZ(295,"code"),e._uU(296,"NzMessageService.success"),e.qZA(),e._uU(297," and others."),e.qZA(),e.TgZ(298,"pre",15)(299,"code")(300,"span",16),e._uU(301,"export"),e.qZA(),e._uU(302," "),e.TgZ(303,"span",16),e._uU(304,"interface"),e.qZA(),e._uU(305," "),e.TgZ(306,"span",41),e._uU(307,"NzMessageRef"),e.qZA(),e._uU(308," "),e.TgZ(309,"span",17),e._uU(310,"{"),e.qZA(),e._uU(311,"\n  messageId"),e.TgZ(312,"span",17),e._uU(313,":"),e.qZA(),e._uU(314," "),e.TgZ(315,"span",16),e._uU(316,"string"),e.qZA(),e.TgZ(317,"span",17),e._uU(318,";"),e.qZA(),e._uU(319,"\n  onClose"),e.TgZ(320,"span",17),e._uU(321,":"),e.qZA(),e._uU(322," Subject"),e.TgZ(323,"span",42),e._uU(324,"<"),e.qZA(),e.TgZ(325,"span",16),e._uU(326,"false"),e.qZA(),e.TgZ(327,"span",42),e._uU(328,">"),e.qZA(),e.TgZ(329,"span",17),e._uU(330,";"),e.qZA(),e._uU(331," "),e.TgZ(332,"span",43),e._uU(333,"// It would emit an event when the message is closed"),e.qZA(),e._uU(334,"\n"),e.TgZ(335,"span",17),e._uU(336,"}"),e.qZA()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(47),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-message-demo-info")("nzLink","components-message-demo-info")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/info.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-other")("nzLink","components-message-demo-other")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/other.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-duration")("nzLink","components-message-demo-duration")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/duration.md"),e.xp6(11),e.Q6J("nzId","components-message-demo-loading")("nzLink","components-message-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/loading.md"),e.xp6(5),e.Q6J("nzId","components-message-demo-close")("nzLink","components-message-demo-close")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/message/demo/close.md"))},directives:[U.$,p.IT,p.Fp,l.Ls,g.w,Z.xH,Z.xw,z.SK,z.t3,d.G,q,C,M,D,N],encapsulation:2}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.G,..._,T.Bz.forChild([{path:"en",component:b},{path:"zh",component:A}])]]}),o})()}}]);