(function(g){var window=this;var M5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.N().ha("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.W?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.Q.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.J=a;this.la("click",this.onClick,this);this.ma("title",g.GN(a,e,"i"));g.Ge(this,g.vN(b.eb(),this.element))},N5=function(a){g.Q.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.w=this.u=void 0;this.L(a,"minimized",this.BI);this.L(a,"onStateChange",this.vO)},O5=function(a){g.xL.call(this,a);
this.o=new N5(this.player);this.o.hide();g.kL(this.player,this.o.element,4);a.app.G.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.r(M5,g.Q);M5.prototype.onClick=function(){this.J.oa("onExpandMiniplayer")};g.r(N5,g.Q);g.h=N5.prototype;
g.h.show=function(){this.u=new g.rn(this.AI,null,this);this.u.start();if(!this.H){this.C=new g.$Q(this.player,this);g.A(this,this.C);g.kL(this.player,this.C.element,4);this.C.B=.6;this.T=new g.iQ(this.player);g.A(this,this.T);this.A=new g.Q({D:"div",I:"ytp-miniplayer-scrim"});g.A(this,this.A);this.A.ca(this.element);this.L(this.A.element,"click",this.QA);var a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.IM()]});g.A(this,a);a.ca(this.A.element);
this.L(a.element,"click",this.uz);a=new M5(this.player,this);g.A(this,a);a.ca(this.A.element);this.B=new g.Q({D:"div",I:"ytp-miniplayer-controls"});g.A(this,this.B);this.B.ca(this.A.element);this.L(this.B.element,"click",this.QA);var b=new g.Q({D:"div",I:"ytp-miniplayer-button-container"});g.A(this,b);b.ca(this.B.element);a=new g.Q({D:"div",I:"ytp-miniplayer-play-button-container"});g.A(this,a);a.ca(this.B.element);var c=new g.Q({D:"div",I:"ytp-miniplayer-button-container"});g.A(this,c);c.ca(this.B.element);
this.R=new g.IN(this.player,this,!1);g.A(this,this.R);this.R.ca(b.element);b=new g.ZO(this.player,this);g.A(this,b);b.ca(a.element);this.M=new g.IN(this.player,this,!0);g.A(this,this.M);this.M.ca(c.element);this.G=new g.IP(this.player,this);g.A(this,this.G);this.G.ca(this.A.element);this.w=new g.iP(this.player,this);g.A(this,this.w);g.kL(this.player,this.w.element,4);this.F=new g.Q({D:"div",I:"ytp-miniplayer-buttons"});g.A(this,this.F);g.kL(this.player,this.F.element,4);a=new g.Q({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],P:{"aria-label":"Close"},K:[g.IM()]});g.A(this,a);a.ca(this.F.element);this.L(a.element,"click",this.uz);a=new g.Q({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.XM()]});g.A(this,a);a.ca(this.F.element);this.L(a.element,"click",this.uM);this.L(this.player,"presentingplayerstatechange",this.CI);this.L(this.player,"appresize",this.wt);this.L(this.player,"fullscreentoggled",this.wt);this.wt();this.H=!0}0!=this.player.getPlayerState()&&g.Q.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.hide.call(this);this.player.app.G.o||(this.H&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.u&&(this.u.dispose(),this.u=void 0);g.Q.prototype.X.call(this)};
g.h.uz=function(){this.player.stopVideo();this.player.oa("onCloseMiniplayer")};
g.h.uM=function(){this.player.playVideo()};
g.h.QA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.O(this.player.N().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.DC(g.RK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.oa("onExpandMiniplayer")};
g.h.BI=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.G.o)};
g.h.AI=function(){g.mP(this.w);this.G.Ch();this.u&&this.u.start()};
g.h.CI=function(a){g.U(a.state,32)&&this.C.hide()};
g.h.wt=function(){g.BP(this.w,0,g.SK(this.player).getPlayerSize().width,!1);this.w.Nu()};
g.h.vO=function(a){this.player.app.G.o&&(0==a?this.hide():this.show())};
g.h.eb=function(){return this.C};
g.h.hc=function(){return!1};
g.h.Kd=function(){return!1};
g.h.Ni=function(){return!1};
g.h.Bu=function(){};
g.h.li=function(){};
g.h.jl=function(){};
g.h.Yl=function(){return null};
g.h.vt=function(){return new g.ph(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.pk=function(a,b,c,d,e){var f=0,k=d=0,l=g.Lh(a);if(b){c=g.Bn(b,"ytp-prev-button")||g.Bn(b,"ytp-next-button");var m=g.Bn(b,"ytp-play-button"),n=g.Bn(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Ih(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Bn(b,"ytp-miniplayer-button-top-left"),f=g.Ih(b,this.element),b=g.Lh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.SK(this.player).getPlayerSize().width;e=f+(e||0);l=g.Md(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.xt=function(){};
g.h.cg=function(){};g.r(O5,g.xL);O5.prototype.create=function(){};
O5.prototype.If=function(){return!1};
O5.prototype.load=function(){this.player.hideControls();this.o.show()};
O5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.ML.miniplayer=O5;})(_yt_player);
