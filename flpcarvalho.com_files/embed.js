(function(g){var window=this;'use strict';var w5a=function(a,b){var c=(b-a.j)/(a.u-a.j);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Co(a,c);var l=(g.Co(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Co(a,c);return c},x5a=function(){return{F:"svg",
X:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},W:[{F:"path",Ob:!0,N:"ytp-svg-fill",X:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
c6=function(a){g.L.call(this);
this.callback=a;this.j=new g.Bo(0,0,.4,0,.2,1,1,1);this.delay=new g.$n(this.next,window,this);this.startTime=this.duration=this.to=this.from=NaN;g.N(this,this.delay)},y5a=function(a){g.W.call(this,{F:"div",
N:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.D=this.j=0;this.C=new g.jE(this);this.B=[];this.suggestionData=[];this.containerWidth=0;this.title=new g.W({F:"h2",N:"ytp-related-title",oa:"{{title}}"});this.previous=new g.W({F:"button",Ga:["ytp-button","ytp-previous"],X:{"aria-label":"Mostrar v\u00eddeos sugeridos anteriores"},W:[g.tL()]});this.S=new c6(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.u=0;this.I=!0;this.next=new g.W({F:"button",Ga:["ytp-button","ytp-next"],X:{"aria-label":"Mostrar mais v\u00eddeos sugeridos"},W:[g.uL()]});g.N(this,this.C);a=a.V();this.J=a.B;g.N(this,this.title);this.title.Da(this.element);this.suggestions=new g.W({F:"div",N:"ytp-suggestions"});g.N(this,this.suggestions);this.suggestions.Da(this.element);g.N(this,this.previous);this.previous.Da(this.element);this.previous.Ra("click",this.XU,this);g.N(this,this.S);for(var c={wu:0};16>c.wu;c={wu:c.wu},
c.wu++){var d=new g.W({F:"a",N:"ytp-suggestion-link",X:{href:"{{link}}",target:a.S,"aria-label":"{{aria_label}}"},W:[{F:"div",N:"ytp-suggestion-image",W:[{F:"div",X:{"data-is-live":"{{is_live}}"},N:"ytp-suggestion-duration",oa:"{{duration}}"}]},{F:"div",N:"ytp-suggestion-title",X:{title:"{{hover_title}}"},oa:"{{title}}"},{F:"div",N:"ytp-suggestion-author",oa:"{{views_or_author}}"}]});g.N(this,d);d.Da(this.suggestions.element);var e=d.Ca("ytp-suggestion-link");g.El(e,"transitionDelay",c.wu/20+"s");
this.C.T(e,"click",function(f){return function(h){var l=b.suggestionData[f.wu],m=l.sessionData;g.ZO(h,b.api,b.J,m||void 0)&&b.api.Rl(l.videoId,m,l.playlistId)}}(c));
this.B.push(d)}g.N(this,this.next);this.next.Da(this.element);this.next.Ra("click",this.WU,this);this.C.T(this.api,"videodatachange",this.onVideoDataChange);this.resize(this.api.fb().getPlayerSize());this.onVideoDataChange();this.show()},z5a=function(a){a.next.element.style.bottom=a.D+"px";
a.previous.element.style.bottom=a.D+"px";var b=a.u,c=a.containerWidth-a.suggestionData.length*(a.tileWidth+a.j);g.oo(a.element,"ytp-scroll-min",0<=b);g.oo(a.element,"ytp-scroll-max",b<=c)},A5a=function(a){for(var b=0;b<a.suggestionData.length;b++){var c=a.suggestionData[b],d=a.B[b],e=c.shortViewCount?c.shortViewCount:c.author,f=c.Pm(),h=a.api.V();
if(g.$F(h)){var l={};h.ya&&g.wN(l,h.loaderUrl);f=g.yi(f,g.vN(l,"emb_rel_err"))}d.element.style.display="";h=d.Ca("ytp-suggestion-title");g.zo.test(c.title)?h.dir="rtl":g.VZa.test(c.title)&&(h.dir="ltr");h=d.Ca("ytp-suggestion-author");g.zo.test(e)?h.dir="rtl":g.VZa.test(e)&&(h.dir="ltr");d.update({views_or_author:e,duration:c.isLivePlayback?"Ao vivo":c.lengthSeconds?g.oM(c.lengthSeconds):"",link:f,hover_title:c.title,title:c.title,aria_label:c.ariaLabel||null,is_live:c.isLivePlayback});d=d.Ca("ytp-suggestion-image");
c=c.Mf();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";z5a(a)},d6=function(a){g.dP.call(this,a);
var b=this;this.j=null;var c=a.V(),d={F:"svg",X:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},W:[{F:"path",X:{d:"M0 0h24v24H0V0z",fill:"none"}},{F:"path",X:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]};g.kG(c)&&(d={F:"svg",X:{fill:"none",height:"100%",
viewBox:"0 0 25 25",width:"100%"},W:[{F:"g",X:{"clip-path":"url(#clip0)",fill:"#fff"},W:[{F:"path",X:{d:"M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"}},{F:"path",X:{d:"M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"}}]},
{F:"defs",W:[{F:"clipPath",X:{id:"clip0"},W:[{F:"path",X:{d:"M0 0h24v24H0z",fill:"#fff",transform:"translate(.57 .5)"}}]}]}]});var e={target:c.S},f=["ytp-small-redirect"];if(c.j)f.push("no-link");else{var h=g.KG(c);c.ya&&(h=B5a(h,c.loaderUrl));e.href=h;e["aria-label"]="Acesse o YouTube para pesquisar mais v\u00eddeos"}c=new g.W({F:"a",Ga:f,X:e,W:[d]});c.Da(this.element);g.N(this,c);a.V().j||(this.j=new y5a(a),this.j.Da(this.element),g.N(this,this.j));this.T(a,"videodatachange",function(){b.show()});
this.resize(this.api.fb().getPlayerSize())},C5a=function(a,b){a.Ca("ytp-error-content").style.paddingTop="0px";
var c=a.Ca("ytp-error-content"),d=c.clientHeight;a.j.resize(b,b.height-d);c.style.paddingTop=(b.height-a.j.element.clientHeight)/2-d/2+"px"},E5a=function(a,b){var c=a.api.V(),d;
b.reason&&(D5a(b.reason)?d=g.GA(b.reason):d=g.eP(g.FA(b.reason)),a.Od(d,"content"));var e;b.subreason&&(D5a(b.subreason)?e=g.GA(b.subreason):e=g.eP(g.FA(b.subreason)),a.Od(e,"subreason"));if(b.proceedButton&&b.proceedButton.buttonRenderer&&(a=a.Ca("ytp-error-content-wrap-subreason"),d=b.proceedButton.buttonRenderer,b=g.ih("A"),d.text&&d.text.simpleText)){e=d.text.simpleText;b.textContent=e;a:{for(var f=g.ah("A",a),h=0;h<f.length;h++)if(f[h].textContent===e){e=!0;break a}e=!1}if(!e&&(!c.j||c.embedsErrorLinks)){var l,
m;e=null==d?void 0:null==(l=d.navigationEndpoint)?void 0:null==(m=l.urlEndpoint)?void 0:m.url;var n,p;l=null==d?void 0:null==(n=d.navigationEndpoint)?void 0:null==(p=n.urlEndpoint)?void 0:p.target;e&&(c.ya&&(e=B5a(e,c.loaderUrl)),b.setAttribute("href",e));l&&b.setAttribute("target",l);c=g.ih("DIV");c.appendChild(b);a.appendChild(c)}}},D5a=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},B5a=function(a,b){var c={};
g.wN(c,b);return g.yi(a,c)},e6=function(a,b){g.W.call(this,{F:"a",
Ga:["ytp-impression-link"],X:{target:"{{target}}",href:"{{url}}","aria-label":"Assistir no YouTube"},W:[{F:"div",N:"ytp-impression-link-content",X:{"aria-hidden":"true"},W:[{F:"div",N:"ytp-impression-link-text",oa:"Assistir no"},{F:"div",N:"ytp-impression-link-logo",W:[x5a()]}]}]});this.api=a;this.u=b;this.Na("target",a.V().S);this.api.ub(this.element,this,96714);this.T(this.api,"presentingplayerstatechange",this.Eh);this.T(this.api,"videoplayerreset",this.j);this.T(this.element,"click",this.onClick);
this.j()},F5a=function(a){var b={};
a.api.V().ya&&g.wN(b,a.api.V().loaderUrl);return g.yi(a.api.getVideoUrl(),g.vN(b,"emb_imp_woyt"))},f6=function(a){g.W.call(this,{F:"div",
Ga:["ytp-mobile-a11y-hidden-seek-button"],W:[{F:"button",Ga:["ytp-mobile-a11y-hidden-seek-button-rewind","ytp-button"],X:{"aria-label":"Voltar 10 segundos","aria-hidden":"false"}},{F:"button",Ga:["ytp-mobile-a11y-hidden-seek-button-forward","ytp-button"],X:{"aria-label":"Avan\u00e7ar 10 segundos","aria-hidden":"false"}}]});this.api=a;this.j=this.Ca("ytp-mobile-a11y-hidden-seek-button-rewind");this.forwardButton=this.Ca("ytp-mobile-a11y-hidden-seek-button-forward");this.api.ub(this.j,this,141902);
this.api.ub(this.forwardButton,this,141903);this.T(this.api,"presentingplayerstatechange",this.Eh);this.T(this.j,"click",this.u);this.T(this.forwardButton,"click",this.B);this.Eh()},g6=function(a){g.W.call(this,{F:"div",
N:"ytp-muted-autoplay-endscreen-overlay",W:[{F:"div",N:"ytp-muted-autoplay-end-panel",W:[{F:"div",N:"ytp-muted-autoplay-end-text",oa:"{{text}}"}]}]});this.api=a;this.B=this.Ca("ytp-muted-autoplay-end-panel");this.j=new g.XO(this.api);g.N(this,this.j);this.j.Da(this.B,0);this.api.ub(this.element,this,52428);this.T(this.api,"presentingplayerstatechange",this.u);this.Ra("click",this.onClick);this.hide()},h6=function(a){g.W.call(this,{F:"div",
N:"ytp-muted-autoplay-overlay",W:[{F:"div",N:"ytp-muted-autoplay-bottom-buttons",W:[{F:"button",Ga:["ytp-muted-autoplay-equalizer","ytp-button"],W:[{F:"div",Ga:["ytp-muted-autoplay-equalizer-icon"],W:[{F:"svg",X:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},W:[{F:"g",X:{fill:"#fff"},W:[{F:"rect",N:"ytp-equalizer-bar-left",X:{height:"9",width:"4",x:"1",y:"7"}},{F:"rect",N:"ytp-equalizer-bar-middle",X:{height:"14",width:"4",x:"6",y:"2"}},{F:"rect",N:"ytp-equalizer-bar-right",X:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.Ca("ytp-muted-autoplay-bottom-buttons");this.Ca("ytp-muted-autoplay-equalizer");this.B=new g.bo(this.u,4E3,this);a.ub(this.element,this,39306);this.T(a,"presentingplayerstatechange",this.j);this.T(a,"onMutedAutoplayStarts",this.j);this.Ra("click",this.onClick);this.hide()},H5a=function(a,b){g.W.call(this,{F:"div",
N:"ytp-more-videos-view",X:{tabIndex:"-1"}});var c=this;this.api=a;this.C=b;this.u=!0;this.B=new g.jE(this);this.D=[];this.suggestionData=[];this.containerWidth=this.S=this.tileWidth=this.j=0;this.title=new g.W({F:"h2",N:"ytp-related-title",oa:"{{title}}"});this.previous=new g.W({F:"button",Ga:["ytp-button","ytp-previous"],X:{"aria-label":"Mostrar v\u00eddeos sugeridos anteriores"},W:[g.tL()]});this.J=new c6(function(d){c.suggestions.element.scrollLeft=-d});
this.next=new g.W({F:"button",Ga:["ytp-button","ytp-next"],X:{"aria-label":"Mostrar mais v\u00eddeos sugeridos"},W:[g.uL()]});g.N(this,this.B);this.I=a.V().B;g.N(this,this.title);this.title.Da(this.element);this.suggestions=new g.W({F:"div",N:"ytp-suggestions"});g.N(this,this.suggestions);this.suggestions.Da(this.element);g.N(this,this.previous);this.previous.Da(this.element);this.previous.Ra("click",this.ZU,this);g.N(this,this.J);G5a(this);g.N(this,this.next);this.next.Da(this.element);this.next.Ra("click",
this.YU,this);this.B.T(this.api,"appresize",this.Cb);this.B.T(this.api,"fullscreentoggled",this.No);this.B.T(this.api,"videodatachange",this.onVideoDataChange);this.Cb(this.api.fb().getPlayerSize());this.onVideoDataChange()},G5a=function(a){for(var b={xu:0};16>b.xu;b={xu:b.xu},++b.xu){var c=new g.W({F:"a",
N:"ytp-suggestion-link",X:{href:"{{link}}",target:a.api.V().S,"aria-label":"{{aria_label}}"},W:[{F:"div",N:"ytp-suggestion-image"},{F:"div",N:"ytp-suggestion-overlay",X:{style:"{{blink_rendering_hack}}","aria-hidden":"{{aria_hidden}}"},W:[{F:"div",N:"ytp-suggestion-title",oa:"{{title}}"},{F:"div",N:"ytp-suggestion-author",oa:"{{author_and_views}}"},{F:"div",X:{"data-is-live":"{{is_live}}"},N:"ytp-suggestion-duration",oa:"{{duration}}"}]}]});g.N(a,c);var d=c.Ca("ytp-suggestion-link");g.El(d,"transitionDelay",
b.xu/20+"s");a.B.T(d,"click",function(e){return function(f){if(a.u){var h=a.suggestionData[e.xu],l=h.sessionData;g.ZO(f,a.api,a.I,l||void 0)&&a.api.Rl(h.videoId,l,h.playlistId)}else g.Mx(f),document.activeElement.blur()}}(b));
c.Da(a.suggestions.element);a.D.push(c)}},i6=function(a){var b=a.C.Wf()?32:16;
b=a.S/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.j;var c=a.containerWidth-a.suggestionData.length*(a.tileWidth+8);g.oo(a.element,"ytp-scroll-min",0<=b);g.oo(a.element,"ytp-scroll-max",b<=c)},I5a=function(a){for(var b=a.suggestionData.length,c=0;c<b;++c){var d=void 0,e=void 0,f=a,h=f.suggestionData[c],l=f.D[c];
e=f.isShortsModeEnabled()?h.shortViewCount||"":h.shortViewCount?h.author+" \u2022 "+h.shortViewCount:h.author;l.element.style.display="";g.UZa.test(h.title)&&(l.Ca("ytp-suggestion-title").dir="rtl");g.UZa.test(e)&&(l.Ca("ytp-suggestion-author").dir="rtl");d=h.isLivePlayback?"Ao vivo":h.lengthSeconds?g.oM(h.lengthSeconds):"";var m=h.Pm();if(g.$F(f.api.V())){var n={};f.api.V().ya&&g.wN(n,f.api.V().loaderUrl);m=g.yi(m,g.vN(n,"emb_rel_pause"))}l.update({author_and_views:e,duration:d,link:m,title:h.title,
aria_label:h.ariaLabel||h.title,is_live:h.isLivePlayback,aria_hidden:!(!h.ariaLabel||f.api.V().K("embeds_rv_aria_hidden_killswitch")),blink_rendering_hack:g.mE||g.YF?"will-change: opacity":void 0});d=l.Ca("ytp-suggestion-image");h=h.Mf();d.style.backgroundImage=h?"url("+h+")":""}i6(a)},J5a=function(a,b){g.W.call(this,{F:"div",
N:"ytp-pause-overlay",X:{tabIndex:"-1"}});var c=this;this.api=a;this.D=b;this.C=new g.jE(this);this.u=new g.aM(this,1E3,!1,100,function(){c.j.u=!1},function(){c.j.u=!0});
this.B=!1;this.expandButton=new g.W({F:"button",Ga:["ytp-button","ytp-expand"],oa:this.isShortsModeEnabled()?"More shorts":"Mais v\u00eddeos"});"0"===a.V().controlsType&&g.ko(a.getRootNode(),"ytp-pause-overlay-controls-hidden");g.N(this,this.C);g.N(this,this.u);var d=new g.W({F:"button",Ga:["ytp-button","ytp-collapse"],X:{"aria-label":"Ocultar mais v\u00eddeos"},W:[g.qFa()]});g.N(this,d);d.Da(this.element);d.Ra("click",this.I1,this);g.N(this,this.expandButton);this.expandButton.Da(this.element);this.expandButton.Ra("click",
this.J1,this);this.j=new H5a(a,b);g.N(this,this.j);this.j.u=!1;this.j.Da(this.element);this.C.T(this.api,"presentingplayerstatechange",this.Tc);this.hide()},K5a=function(a){var b=a.V();
g.W.call(this,{F:"a",Ga:["ytp-watermark","yt-uix-sessionlink"],X:{target:b.S,href:"{{url}}","aria-label":g.UJ("Assista em $WEBSITE",{WEBSITE:g.wG(b)}),"data-sessionlink":"feature=player-watermark"},W:[x5a()]});this.api=a;this.j=null;this.u=!1;this.state=a.Eb();a.ub(this.element,this,76758);this.T(a,"videodatachange",this.VT);this.T(a,"videodatachange",this.onVideoDataChange);this.T(a,"presentingplayerstatechange",this.onStateChange);this.T(a,"appresize",this.Cb);this.Uc(this.state);this.onVideoDataChange();
this.Cb(a.fb().getPlayerSize())},j6=function(a){g.W.call(this,{F:"div",
Ga:["ytp-player-content","ytp-iv-player-content"],W:[{F:"div",N:"ytp-countdown-timer",W:[{F:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},W:[{F:"circle",N:"ytp-svg-countdown-timer-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"circle",N:"ytp-svg-countdown-timer-background",X:{cx:"-36",cy:"36",fill:"#000","fill-opacity":"0.3",r:"35",transform:"rotate(-90)"}}]},
{F:"span",N:"ytp-countdown-timer-time",oa:"{{duration}}"}]}]});this.api=a;this.I=this.Ca("ytp-svg-countdown-timer-ring");this.j=null;this.C=this.B=0;this.u=!1;this.D=0;this.api.ub(this.element,this,159628)},M5a=function(a){a.j||(a.B=5E3,a.C=(0,g.T)(),a.j=new g.$n(function(){L5a(a)},null),L5a(a))},L5a=function(a){if(!a.u){var b=Math.min((0,g.T)()-a.C,a.B);
var c=a.B-b;b=0===a.B?0:Math.max(c/a.B,0);c=Math.round(c/1E3);a.I.setAttribute("stroke-dashoffset",""+-211*(b+1));a.Na("duration",c);0>=b&&a.j?N5a(a):a.j&&a.j.start()}},N5a=function(a){a.j&&(a.j.dispose(),a.j=null,a.u=!1)},P5a=function(a){g.yO.call(this,a);
this.G=a;this.j=new g.jE(this);this.C=!1;this.countdownTimer=null;var b;this.Ew=null==(b=a.getVideoData())?void 0:b.videoId;O5a(this);g.N(this,this.j);this.load()},O5a=function(a){var b=a.G;
if(b.K("embeds_enable_shorts_branded_ui")){var c;a=!(null==(c=g.KN(b))||!c.Zh());g.oo(b.getRootNode(),"ytp-shorts-mode",a);if(c=b.getVideoData())c.lU=a}},k6=function(a,b){a={adSource:"EMBEDS_AD_SOURCE_YOUTUBE",
breakType:0===a.G.getCurrentTime()?"EMBEDS_AD_BREAK_TYPE_PRE_ROLL":0===a.G.getPlayerState()?"EMBEDS_AD_BREAK_TYPE_POST_ROLL":"EMBEDS_AD_BREAK_TYPE_MID_ROLL",embedUrl:g.Cea(a.G.V().loaderUrl),eventType:b,youtubeHost:g.si(a.G.V().xa)||""};g.Uv("embedsAdEvent",a)};
g.v(c6,g.L);c6.prototype.start=function(a,b,c){this.from=a;this.to=b;this.duration=c;this.startTime=(0,g.T)();this.next()};
c6.prototype.next=function(){var a=(0,g.T)()-this.startTime;var b=this.j;a=w5a(b,a/this.duration);if(0==a)b=b.J;else if(1==a)b=b.S;else{var c=g.Jg(b.J,b.D,a),d=g.Jg(b.D,b.I,a);b=g.Jg(b.I,b.S,a);c=g.Jg(c,d,a);d=g.Jg(d,b,a);b=g.Jg(c,d,a)}b=g.Hg(b,0,1);this.callback((this.to-this.from)*b+this.from);1>b&&this.delay.start()};g.v(y5a,g.W);g.k=y5a.prototype;g.k.hide=function(){this.I=!0;g.W.prototype.hide.call(this)};
g.k.show=function(){this.I=!1;g.W.prototype.show.call(this)};
g.k.isHidden=function(){return this.I};
g.k.WU=function(){this.scrollTo(this.u-this.containerWidth)};
g.k.XU=function(){this.scrollTo(this.u+this.containerWidth)};
g.k.resize=function(a,b){var c=this.api.V(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.suggestionData.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.Cc)this.hide();else{var l;if(e){var m=l=28;this.j=16}else this.j=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;a=a.width-(48+l+m);l=Math.ceil(a/150);l=Math.min(3,l);l=a/l-this.j;m=Math.floor(l/d);b&&m+100>b&&50<l&&(m=Math.max(b,50/d),l=Math.ceil(a/(d*(m-100)+this.j)),l=a/l-this.j,
m=Math.floor(l/d));50>l||g.RN(this.api)?this.hide():this.show();for(b=0;b<h;b++){d=this.B[b];var q=d.Ca("ytp-suggestion-image");q.style.width=l+"px";q.style.height=m+"px";d.Ca("ytp-suggestion-title").style.width=l+"px";d.Ca("ytp-suggestion-author").style.width=l+"px";d=d.Ca("ytp-suggestion-duration");d.style.display=d&&100>l?"none":""}h=e+n+p+4;this.D=h+c+(m-f)/2;this.suggestions.element.style.height=m+h+"px";this.tileWidth=l;this.containerWidth=a;this.u=0;this.suggestions.element.scrollLeft=-0;z5a(this)}};
g.k.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.J=a.D?!1:b.B;a.suggestions?this.suggestionData=g.Bm(a.suggestions,function(c){return c&&!c.playlistId}):this.suggestionData.length=0;
A5a(this);a.D?this.title.update({title:g.UJ("Mais v\u00eddeos de $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:a.author})}):this.title.update({title:"Mais v\u00eddeos no YouTube"})};
g.k.scrollTo=function(a){a=g.Hg(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+this.j),0);this.S.start(this.u,a,1E3);this.u=a;z5a(this)};g.v(d6,g.dP);d6.prototype.show=function(){g.dP.prototype.show.call(this);C5a(this,this.api.fb().getPlayerSize())};
d6.prototype.resize=function(a){g.dP.prototype.resize.call(this,a);this.j&&(C5a(this,a),g.oo(this.element,"related-on-error-overlay-visible",!this.j.isHidden()))};
d6.prototype.u=function(a){g.dP.prototype.u.call(this,a);var b=this.api.getVideoData();if(b.BF||b.playerErrorMessageRenderer)(a=b.BF)?E5a(this,a):b.playerErrorMessageRenderer&&E5a(this,b.playerErrorMessageRenderer);else{var c;a.ll&&(b.Ru?D5a(b.Ru)?c=g.GA(b.Ru):c=g.eP(g.FA(b.Ru)):c=g.eP(a.ll),this.Od(c,"subreason"))}};g.v(e6,g.W);e6.prototype.Eh=function(){this.api.Eb().isCued()||(this.hide(),this.api.Wa(this.element,!1))};
e6.prototype.j=function(){var a=this.api.getVideoData(),b=this.api.V(),c=this.api.getVideoData().D,d=b.Sc,e=!b.Cc,f=this.u,h=f.Zh()&&b.K("embeds_enable_shorts_branded_ui");f=f.Hg();var l=g.kG(b);b=b.j;d||f||c||e||l||b||h||!a.videoId?(this.hide(),this.api.Wa(this.element,!1)):(a=F5a(this),this.Na("url",a),this.show())};
e6.prototype.onClick=function(a){var b=F5a(this);g.$O(b,this.api,a);this.api.rb(this.element)};
e6.prototype.show=function(){this.api.Eb().isCued()&&(g.W.prototype.show.call(this),this.api.Um(this.element)&&this.api.Wa(this.element,!0))};g.v(f6,g.W);f6.prototype.Eh=function(){var a=this.api.Eb();!this.api.hg()||g.V(a,2)&&g.ON(this.api)||g.V(a,64)?(this.api.Wa(this.j,!1),this.api.Wa(this.forwardButton,!1),this.hide()):(this.show(),this.api.Wa(this.j,!0),this.api.Wa(this.forwardButton,!0))};
f6.prototype.u=function(){this.api.seekBy(-10*this.api.getPlaybackRate());this.api.rb(this.j)};
f6.prototype.B=function(){this.api.seekBy(10*this.api.getPlaybackRate());this.api.rb(this.forwardButton)};g.v(g6,g.W);g6.prototype.u=function(){var a=this.api.Eb(),b=this.api.getVideoData();this.api.V().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.V(a,2)&&!this.qb?(this.show(),this.j.show(),a=this.api.getVideoData(),this.Na("text",a.eO),g.oo(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Wa(this.element,this.qb),this.api.Pa("onMutedAutoplayEnds")):this.hide())};
g6.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.XH(a);this.api.loadVideoById(a.videoId,b);this.api.rb(this.element);this.hide()};g.v(h6,g.W);h6.prototype.j=function(){var a=this.api.Eb(),b=this.api.getVideoData();this.api.V().K("embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.V(a,2)?this.qb||(g.W.prototype.show.call(this),this.B.start(),this.api.Wa(this.element,this.qb)):this.hide()};
h6.prototype.u=function(){g.oo(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
h6.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.XH(a);this.api.loadVideoById(a.videoId,b);this.api.rb(this.element)};g.v(H5a,g.W);g.k=H5a.prototype;g.k.YU=function(){this.u&&this.scrollTo(this.j-this.containerWidth)};
g.k.ZU=function(){this.u&&this.scrollTo(this.j+this.containerWidth)};
g.k.No=function(){this.Cb(this.api.fb().getPlayerSize())};
g.k.isShortsModeEnabled=function(){return!!this.C.Zh()&&this.api.K("embeds_enable_shorts_branded_ui")};
g.k.Cb=function(a){var b=this.isShortsModeEnabled()?.5625:16/9,c=this.C.Wf();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=g.t(this.D),e=d.next();!e.done;e=d.next())e=e.value.Ca("ytp-suggestion-image"),e.style.width=c+"px",e.style.height=b+"px";this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.S=b;this.containerWidth=a;this.j=0;this.suggestions.element.scrollLeft=-0;i6(this)};
g.k.onVideoDataChange=function(){var a=this.api.V(),b=this.api.getVideoData();this.I=b.D?!1:a.B;this.suggestionData=b.suggestions?g.Bm(b.suggestions,function(c){return c&&!c.playlistId}):[];
I5a(this);b.D?this.title.update({title:g.UJ("Mais v\u00eddeos de $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:this.isShortsModeEnabled()?"More shorts":"Mais v\u00eddeos"})};
g.k.scrollTo=function(a){a=g.Hg(a,this.containerWidth-this.suggestionData.length*(this.tileWidth+8),0);this.J.start(this.j,a,1E3);this.j=a;i6(this)};g.v(J5a,g.W);g.k=J5a.prototype;g.k.hide=function(){g.mo(this.api.getRootNode(),"ytp-expand-pause-overlay");g.W.prototype.hide.call(this)};
g.k.I1=function(){this.B=!0;g.mo(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.J1=function(){this.B=!1;g.ko(this.api.getRootNode(),"ytp-expand-pause-overlay");this.focus()};
g.k.Tc=function(a){if(!(g.V(a.state,1)||g.V(a.state,16)||g.V(a.state,32))){var b=!this.api.V().K("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.V(a.state,1024);!g.V(a.state,4)||g.V(a.state,2)||b?this.u.hide():0<this.j.suggestionData.length&&(this.B||(g.ko(this.api.getRootNode(),"ytp-expand-pause-overlay"),i6(this.j)),this.u.show())}};
g.k.isShortsModeEnabled=function(){return!!this.D.Zh()&&this.api.K("embeds_enable_shorts_branded_ui")};g.v(K5a,g.W);g.k=K5a.prototype;g.k.VT=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).D,c=this.api.V();a=(a.mutedAutoplay||c.Sc&&!g.V(this.state,2))&&!(b&&c.pfpChazalUi);g.oL(this,a);this.api.Wa(this.element,a)};
g.k.onStateChange=function(a){this.Uc(a.state)};
g.k.Uc=function(a){this.state!==a&&(this.state=a);this.VT()};
g.k.onVideoDataChange=function(){var a=this.api.V();a.j&&g.ko(this.element,"ytp-no-hover");this.api.getVideoData().videoId&&!a.j?(a=this.api.getVideoUrl(!0,!1,!1,!0),this.Na("url",a),this.j||(this.j=this.Ra("click",this.onClick))):this.j&&(this.Na("url",null),this.xc(this.j),this.j=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.pM(a),!1,!0,!0);g.$O(b,this.api,a);this.api.rb(this.element)};
g.k.Cb=function(a){if((a=480>a.width)&&!this.u||!a&&this.u){var b=new g.W(x5a()),c=this.Ca("ytp-watermark");g.oo(c,"ytp-watermark-small",a);g.nh(c);b.Da(c);this.u=a}};g.v(j6,g.W);j6.prototype.show=function(){g.W.prototype.show.call(this);this.api.Wa(this.element,!0)};
j6.prototype.ra=function(){N5a(this);g.W.prototype.ra.call(this)};g.v(P5a,g.yO);g.k=P5a.prototype;g.k.Jj=function(){return!1};
g.k.create=function(){var a=this.G.V(),b=g.KN(this.G),c,d=null==(c=this.G.getVideoData())?void 0:c.clientPlaybackNonce;d&&g.hB("cpn",d);c=a.K("embeds_enable_shorts_branded_ui");c=!a.j&&(!b.Zh()||c);a.Cc&&c&&(this.B=new J5a(this.G,b),g.N(this,this.B),this.S=new g.W({F:"div",N:"ytp-pause-overlay-container",X:{tabIndex:"-1"},W:[this.B]}),g.N(this,this.S),g.UN(this.G,this.S.element,4));a.K("embeds_enable_muted_autoplay")&&(this.u=new h6(this.G),g.N(this,this.u),g.UN(this.G,this.u.element,4),this.J=new g6(this.G),
g.N(this,this.J),g.UN(this.G,this.J.element,4));if(a.Sc||this.u)this.watermark=new K5a(this.G),g.N(this,this.watermark),g.UN(this.G,this.watermark.element,8);this.D=new e6(this.G,b);g.N(this,this.D);g.UN(this.G,this.D.element,8);a.isMobile&&(this.I=new f6(this.G),g.N(this,this.I),g.UN(this.G,this.I.element,4));this.j.T(this.G,"appresize",this.Cb);this.j.T(this.G,"presentingplayerstatechange",this.Eh);this.j.T(this.G,"videodatachange",this.onVideoDataChange);this.j.T(this.G,"onMutedAutoplayStarts",
this.onMutedAutoplayStarts);this.j.T(this.G,"onAdStart",this.onAdStart);this.j.T(this.G,"onAdComplete",this.onAdComplete);this.j.T(this.G,"onAdSkip",this.onAdSkip);this.j.T(this.G,"onAdStateChange",this.onAdStateChange);if(this.C=g.tv(g.tG(a)))this.countdownTimer=new j6(this.G),g.N(this,this.countdownTimer),g.UN(this.G,this.countdownTimer.element,4),this.countdownTimer.hide(),this.j.T(this.G,g.AA("embeds"),this.onCueRangeEnter),this.j.T(this.G,g.BA("embeds"),this.onCueRangeExit);this.Wb(this.G.Eb());
this.player.zf("embed")};
g.k.onCueRangeEnter=function(a){"countdown timer"===a.getId()&&this.countdownTimer&&(this.countdownTimer.show(),M5a(this.countdownTimer))};
g.k.onCueRangeExit=function(a){"countdown timer"===a.getId()&&this.countdownTimer&&(N5a(this.countdownTimer),this.countdownTimer.hide())};
g.k.Cb=function(){var a=this.G.fb().getPlayerSize();this.Cf&&this.Cf.resize(a)};
g.k.Eh=function(a){this.Wb(a.state)};
g.k.Wb=function(a){g.V(a,128)?(this.Cf||(this.Cf=new d6(this.G),g.N(this,this.Cf),g.UN(this.G,this.Cf.element,4)),this.Cf.u(a.getData()),this.Cf.show(),g.ko(this.G.getRootNode(),"ytp-embed-error")):this.Cf&&(this.Cf.dispose(),this.Cf=null,g.mo(this.G.getRootNode(),"ytp-embed-error"));this.countdownTimer&&this.countdownTimer.j&&(g.sK(a)&&!this.countdownTimer.u?(a=this.countdownTimer,a.u||(a.u=!0,a.D=(0,g.T)())):a.Qc()&&this.countdownTimer.u&&(a=this.countdownTimer,a.u&&(a.C+=(0,g.T)()-a.D,a.u=!1,L5a(a))))};
g.k.onMutedAutoplayStarts=function(){this.G.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.Da(this.u.bottomButtons,0)};
g.k.onVideoDataChange=function(a,b){var c=this.Ew!==b.videoId;a=!c&&"newdata"===a;var d,e={isShortsModeEnabled:null==(d=g.KN(this.G))?void 0:d.Zh()};g.Uv("embedsVideoDataDidChange",{clientPlaybackNonce:b.clientPlaybackNonce,isReload:a,runtimeEnabledFeatures:e});c&&(this.Ew=b.videoId,this.WL(b),O5a(this));this.watermark&&this.u&&!b.mutedAutoplay&&g.rh(this.u.element,this.watermark.element)&&g.UN(this.G,this.watermark.element,8);this.G.V().j&&this.B&&this.B.detach()};
g.k.WL=function(a){!this.C||5>a.endSeconds||(this.G.yf("embeds"),a=Math.max(1E3*(a.endSeconds-5),0),a=new g.yA(a,a+5E3,{id:"countdown timer",namespace:"embeds"}),this.G.je([a]))};
g.k.onAdStart=function(){k6(this,"EMBEDS_AD_EVENT_TYPE_AD_STARTED")};
g.k.onAdComplete=function(){k6(this,"EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")};
g.k.onAdSkip=function(){k6(this,"EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")};
g.k.onAdStateChange=function(a){2===a&&k6(this,"EMBEDS_AD_EVENT_TYPE_AD_PAUSED")};g.xO("embed",P5a);})(_yt_player);
