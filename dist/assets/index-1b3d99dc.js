import{_ as Be,a as Me,w as we,c as Xe,B as $e}from"./index-97987e5f.js";import{F as je,_ as We}from"./index-dbfdc15a.js";import{u as Ye,o as Le,U as Pe,I as Ke,a as Je}from"./user-4d6ce6e2.js";import{i as Qe,D as Ze,S as et,_ as tt}from"./index-2ab3627a.js";import{_ as nt}from"./index-d970ba4c.js";import"./index-85da8ab9.js";import{e as s,A as at,l as h,i as be,r as k,v as Re,x as U,m as _,F as rt,G as it,k as le,H as ut,s as J,I as Fe,z as lt,u as ot,P as ve,_ as st,J as ct,o as dt,b as ft,d as me,w as x,f as oe}from"./index-efff4e2c.js";import{K as se}from"./Overflow-18123a28.js";var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};const mt=vt;function Ee(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),l.forEach(function(i){pt(n,i,t[i])})}return n}function pt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Se=function(e,t){var l=Ee({},e,t.attrs);return s(at,Ee({},l,{icon:mt}),null)};Se.displayName="UpOutlined";Se.inheritAttrs=!1;const gt=Se;function ye(){return typeof BigInt=="function"}function Q(n){var e=n.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var l=e||"0",i=l.split("."),d=i[0]||"0",g=i[1]||"0";d==="0"&&g==="0"&&(t=!1);var c=t?"-":"";return{negative:t,negativeStr:c,trimStr:l,integerStr:d,decimalStr:g,fullStr:"".concat(c).concat(l)}}function Ne(n){var e=String(n);return!Number.isNaN(Number(e))&&e.includes("e")}function Z(n){var e=String(n);if(Ne(n)){var t=Number(e.slice(e.indexOf("e-")+2)),l=e.match(/\.(\d+)/);return l!=null&&l[1]&&(t+=l[1].length),t}return e.includes(".")&&Ie(e)?e.length-e.indexOf(".")-1:0}function _e(n){var e=String(n);if(Ne(n)){if(n>Number.MAX_SAFE_INTEGER)return String(ye()?BigInt(n).toString():Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return String(ye()?BigInt(n).toString():Number.MIN_SAFE_INTEGER);e=n.toFixed(Z(e))}return Q(e).fullStr}function Ie(n){return typeof n=="number"?!Number.isNaN(n):n?/^\s*-?\d+(\.\d+)?\s*$/.test(n)||/^\s*-?\d+\.\s*$/.test(n)||/^\s*-?\.\d+\s*$/.test(n):!1}function Ve(n){return!n&&n!==0&&!Number.isNaN(n)||!String(n).trim()}var yt=function(){function n(e){if(Me(this,n),h(this,"origin",""),Ve(e)){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Be(n,[{key:"negate",value:function(){return new n(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var l=Number(t);if(Number.isNaN(l))return this;var i=this.number+l;if(i>Number.MAX_SAFE_INTEGER)return new n(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new n(Number.MIN_SAFE_INTEGER);var d=Math.max(Z(this.number),Z(l));return new n(i.toFixed(d))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":_e(this.number):this.origin}}]),n}(),ht=function(){function n(e){if(Me(this,n),h(this,"origin",""),Ve(e)){this.empty=!0;return}if(this.origin=String(e),e==="-"||Number.isNaN(e)){this.nan=!0;return}var t=e;if(Ne(t)&&(t=Number(t)),t=typeof t=="string"?t:_e(t),Ie(t)){var l=Q(t);this.negative=l.negative;var i=l.trimStr.split(".");this.integer=BigInt(i[0]);var d=i[1]||"0";this.decimal=BigInt(d),this.decimalLen=d.length}else this.nan=!0}return Be(n,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var l="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(l)}},{key:"negate",value:function(){var t=new n(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var l=new n(t);if(l.isInvalidate())return this;var i=Math.max(this.getDecimalStr().length,l.getDecimalStr().length),d=this.alignDecimal(i),g=l.alignDecimal(i),c=(d+g).toString(),v=Q(c),y=v.negativeStr,p=v.trimStr,u="".concat(y).concat(p.padStart(i+1,"0"));return new n("".concat(u.slice(0,-i),".").concat(u.slice(-i)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Q("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),n}();function R(n){return ye()?new ht(n):new yt(n)}function he(n,e,t){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(n==="")return"";var i=Q(n),d=i.negativeStr,g=i.integerStr,c=i.decimalStr,v="".concat(e).concat(c),y="".concat(d).concat(g);if(t>=0){var p=Number(c[t]);if(p>=5&&!l){var u=R(n).add("".concat(d,"0.").concat("0".repeat(t)).concat(10-p));return he(u.toString(),e,t,l)}return t===0?y:"".concat(y).concat(e).concat(c.padEnd(t,"0").slice(0,t))}return v===".0"?y:"".concat(y).concat(v)}var bt=200,St=600;const Nt=be({compatConfig:{MODE:3},name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var l=t.slots,i=t.emit,d=k(),g=function(y,p){y.preventDefault(),i("step",p);function u(){i("step",p),d.value=setTimeout(u,bt)}d.value=setTimeout(u,St)},c=function(){clearTimeout(d.value)};return Re(function(){c()}),function(){if(Qe())return null;var v=e.prefixCls,y=e.upDisabled,p=e.downDisabled,u="".concat(v,"-handler"),E=U(u,"".concat(u,"-up"),h({},"".concat(u,"-up-disabled"),y)),C=U(u,"".concat(u,"-down"),h({},"".concat(u,"-down-disabled"),p)),w={unselectable:"on",role:"button",onMouseup:c,onMouseleave:c},m=l.upNode,V=l.downNode;return s("div",{class:"".concat(u,"-wrap")},[s("span",_(_({},w),{},{onMousedown:function(B){g(B,!0)},"aria-label":"Increase Value","aria-disabled":y,class:E}),[(m==null?void 0:m())||s("span",{unselectable:"on",class:"".concat(v,"-handler-up-inner")},null)]),s("span",_(_({},w),{},{onMousedown:function(B){g(B,!1)},"aria-label":"Decrease Value","aria-disabled":p,class:C}),[(V==null?void 0:V())||s("span",{unselectable:"on",class:"".concat(v,"-handler-down-inner")},null)])])}}});function _t(n,e){var t=k(null);function l(){try{var d=n.value,g=d.selectionStart,c=d.selectionEnd,v=d.value,y=v.substring(0,g),p=v.substring(c);t.value={start:g,end:c,value:v,beforeTxt:y,afterTxt:p}}catch(u){}}function i(){if(n.value&&t.value&&e.value)try{var d=n.value.value,g=t.value,c=g.beforeTxt,v=g.afterTxt,y=g.start,p=d.length;if(d.endsWith(v))p=d.length-t.value.afterTxt.length;else if(d.startsWith(c))p=c.length;else{var u=c[y-1],E=d.indexOf(u,y-1);E!==-1&&(p=E+1)}n.value.setSelectionRange(p,p)}catch(C){rt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(C.message))}}return[l,i]}const It=function(){var n=k(0),e=function(){we.cancel(n.value)};return Re(function(){e()}),function(t){e(),n.value=we(function(){t()})}};var xt=["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"],Ce=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},De=function(e){var t=R(e);return t.isInvalidate()?null:t},Ae=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}};const wt=be({compatConfig:{MODE:3},name:"InnerInputNumber",inheritAttrs:!1,props:_(_({},Ae()),{},{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var l=t.attrs,i=t.slots,d=t.emit,g=t.expose,c=k(),v=k(!1),y=k(!1),p=k(!1),u=k(R(e.value));function E(o){e.value===void 0&&(u.value=o)}var C=function(a,f){if(!f)return e.precision>=0?e.precision:Math.max(Z(a),Z(e.step))},w=function(a){var f=String(a);if(e.parser)return e.parser(f);var r=f;return e.decimalSeparator&&(r=r.replace(e.decimalSeparator,".")),r.replace(/[^\w.-]+/g,"")},m=k(""),V=function(a,f){if(e.formatter)return e.formatter(a,{userTyping:f,input:String(m.value)});var r=typeof a=="number"?_e(a):a;if(!f){var I=C(r,f);if(Ie(r)&&(e.decimalSeparator||I>=0)){var N=e.decimalSeparator||".";r=he(r,N,I)}}return r},$=function(){var o=e.value;return u.value.isInvalidate()&&["string","number"].includes(it(o))?Number.isNaN(o)?"":o:V(u.value.toString(),!1)}();m.value=$;function B(o,a){m.value=V(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var O=le(function(){return De(e.max)}),P=le(function(){return De(e.min)}),S=le(function(){return!O.value||!u.value||u.value.isInvalidate()?!1:O.value.lessEquals(u.value)}),T=le(function(){return!P.value||!u.value||u.value.isInvalidate()?!1:u.value.lessEquals(P.value)}),F=_t(c,v),D=ut(F,2),H=D[0],ee=D[1],q=function(a){return O.value&&!a.lessEquals(O.value)?O.value:P.value&&!P.value.lessEquals(a)?P.value:null},G=function(a){return!q(a)},z=function(a,f){var r=a,I=G(r)||r.isEmpty();if(!r.isEmpty()&&!f&&(r=q(r)||r,I=!0),!e.readonly&&!e.disabled&&I){var N=r.toString(),M=C(N,f);if(M>=0&&(r=R(he(N,".",M))),!r.equals(u.value)){var A;E(r),(A=e.onChange)===null||A===void 0||A.call(e,r.isEmpty()?null:Ce(e.stringMode,r)),e.value===void 0&&B(r,f)}return r}return u.value},j=It(),W=function o(a){var f;if(H(),m.value=a,!p.value){var r=w(a),I=R(r);I.isNaN()||z(I,!0)}(f=e.onInput)===null||f===void 0||f.call(e,a),j(function(){var N=a;e.parser||(N=a.replace(/。/g,".")),N!==a&&o(N)})},Y=function(){p.value=!0},te=function(){p.value=!1,W(c.value.value)},L=function(a){W(a.target.value)},K=function(a){var f,r;if(!(a&&S.value||!a&&T.value)){y.value=!1;var I=R(e.step);a||(I=I.negate());var N=(u.value||R(0)).add(I.toString()),M=z(N,!1);(f=e.onStep)===null||f===void 0||f.call(e,Ce(e.stringMode,M),{offset:e.step,type:a?"up":"down"}),(r=c.value)===null||r===void 0||r.focus()}},ne=function(a){var f=R(w(m.value)),r=f;f.isNaN()?r=u.value:r=z(f,a),e.value!==void 0?B(u.value,!1):r.isNaN()||B(r,!1)},ce=function(a){var f=a.which;if(y.value=!0,f===se.ENTER){var r;p.value||(y.value=!1),ne(!1),(r=e.onPressEnter)===null||r===void 0||r.call(e,a)}e.keyboard!==!1&&!p.value&&[se.UP,se.DOWN].includes(f)&&(K(se.UP===f),a.preventDefault())},b=function(){y.value=!1},X=function(a){ne(!1),v.value=!1,y.value=!1,d("blur",a)};return J(function(){return e.precision},function(){u.value.isInvalidate()||B(u.value,!1)},{flush:"post"}),J(function(){return e.value},function(){var o=R(e.value);u.value=o;var a=R(w(m.value));(!o.equals(a)||!y.value||e.formatter)&&B(o,y.value)},{flush:"post"}),J(m,function(){e.formatter&&ee()},{flush:"post"}),J(function(){return e.disabled},function(o){o&&(v.value=!1)}),g({focus:function(){var a;(a=c.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=c.value)===null||a===void 0||a.blur()}}),function(){var o,a=_(_({},l),e),f=a.prefixCls,r=f===void 0?"rc-input-number":f,I=a.min,N=a.max,M=a.step,A=M===void 0?1:M;a.defaultValue,a.value;var ae=a.disabled,re=a.readonly;a.keyboard;var ie=a.controls,de=ie===void 0?!0:ie,ue=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var Oe=a.lazy,Ue=a.class,Te=a.style,He=Fe(a,xt),qe=i.upHandler,Ge=i.downHandler,xe="".concat(r,"-input"),fe={};return Oe?fe.onChange=L:fe.onInput=L,s("div",{class:U(r,Ue,(o={},h(o,"".concat(r,"-focused"),v.value),h(o,"".concat(r,"-disabled"),ae),h(o,"".concat(r,"-readonly"),re),h(o,"".concat(r,"-not-a-number"),u.value.isNaN()),h(o,"".concat(r,"-out-of-range"),!u.value.isInvalidate()&&!G(u.value)),o)),style:Te,onKeydown:ce,onKeyup:b},[de&&s(Nt,{prefixCls:r,upDisabled:S.value,downDisabled:T.value,onStep:K},{upNode:qe,downNode:Ge}),s("div",{class:"".concat(xe,"-wrap")},[s("input",_(_(_({autofocus:ue,autocomplete:"off",role:"spinbutton","aria-valuemin":I,"aria-valuemax":N,"aria-valuenow":u.value.isInvalidate()?null:u.value.toString(),step:A},He),{},{ref:c,class:xe,value:m.value,disabled:ae,readonly:re,onFocus:function(ze){v.value=!0,d("focus",ze)}},fe),{},{onBlur:X,onCompositionstart:Y,onCompositionend:te}),null)])])}}});function pe(n){return n!=null}var Pt=["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"],ke=Ae(),Et=function(){return _(_({},ke),{},{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:ve.any,addonAfter:ve.any,prefix:ve.any,"onUpdate:value":ke.onChange,valueModifiers:Object})},ge=be({compatConfig:{MODE:3},name:"AInputNumber",inheritAttrs:!1,props:Et(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var l=t.emit,i=t.expose,d=t.attrs,g=t.slots,c=Ye(),v=ot("input-number",e),y=v.prefixCls,p=v.size,u=v.direction,E=k(e.value===void 0?e.defaultValue:e.value),C=k(!1);J(function(){return e.value},function(){E.value=e.value});var w=k(null),m=function(){var S;(S=w.value)===null||S===void 0||S.focus()},V=function(){var S;(S=w.value)===null||S===void 0||S.blur()};i({focus:m,blur:V});var $=function(S){e.value===void 0&&(E.value=S),l("update:value",S),l("change",S),c.onFieldChange()},B=function(S){C.value=!1,l("blur",S),c.onFieldBlur()},O=function(S){C.value=!0,l("focus",S)};return function(){var P,S,T,F,D=_(_({},d),e),H=D.class,ee=D.bordered,q=D.readonly,G=D.style,z=D.addonBefore,j=z===void 0?(P=g.addonBefore)===null||P===void 0?void 0:P.call(g):z,W=D.addonAfter,Y=W===void 0?(S=g.addonAfter)===null||S===void 0?void 0:S.call(g):W,te=D.prefix,L=te===void 0?(T=g.prefix)===null||T===void 0?void 0:T.call(g):te,K=D.valueModifiers,ne=K===void 0?{}:K,ce=Fe(D,Pt),b=y.value,X=p.value,o=U((F={},h(F,"".concat(b,"-lg"),X==="large"),h(F,"".concat(b,"-sm"),X==="small"),h(F,"".concat(b,"-rtl"),u.value==="rtl"),h(F,"".concat(b,"-readonly"),q),h(F,"".concat(b,"-borderless"),!ee),F),H),a=s(wt,_(_({},Le(ce,["size","defaultValue"])),{},{ref:w,lazy:!!ne.lazy,value:E.value,class:o,prefixCls:b,readonly:q,onChange:$,onBlur:B,onFocus:O}),{upHandler:function(){return s(gt,{class:"".concat(b,"-handler-up-inner")},null)},downHandler:function(){return s(Ze,{class:"".concat(b,"-handler-down-inner")},null)}}),f=pe(j)||pe(Y);if(pe(L)){var r,I=U("".concat(b,"-affix-wrapper"),(r={},h(r,"".concat(b,"-affix-wrapper-focused"),C.value),h(r,"".concat(b,"-affix-wrapper-disabled"),e.disabled),h(r,"".concat(b,"-affix-wrapper-rtl"),u.value==="rtl"),h(r,"".concat(b,"-affix-wrapper-readonly"),q),h(r,"".concat(b,"-affix-wrapper-borderless"),!ee),h(r,"".concat(H),!f&&H),r));a=s("div",{class:I,style:G,onMouseup:function(){return w.value.focus()}},[s("span",{class:"".concat(b,"-prefix")},[L]),a])}if(f){var N,M="".concat(b,"-group"),A="".concat(M,"-addon"),ae=j?s("div",{class:A},[j]):null,re=Y?s("div",{class:A},[Y]):null,ie=U("".concat(b,"-wrapper"),M,h({},"".concat(M,"-rtl"),u.value==="rtl")),de=U("".concat(b,"-group-wrapper"),(N={},h(N,"".concat(b,"-group-wrapper-sm"),X==="small"),h(N,"".concat(b,"-group-wrapper-lg"),X==="large"),h(N,"".concat(b,"-group-wrapper-rtl"),u.value==="rtl"),N),H);a=s("div",{class:de,style:G},[s("div",{class:ie},[ae,a,re])])}return Xe(a,{style:G})}}});const Ct=lt(ge,{install:function(e){return e.component(ge.name,ge),e}});const Dt={components:{},data(){return{resXY:"",systemParam:{AudioMixer:!1,PORT:"",RenderOffScreen:!1,ResX:"",ResY:"",Unattended:!1,SignalIp:"",WebRTCFps:"",auth:!1,exeUeCoolTime:"",iceServers:"",idleReleaseTime:"",preloadReleaseTime:""}}},methods:{authChange(n){},btnReset(){this.GetSystemParam()},btnSave(){console.log(this.systemParam),this.systemParam.ResX=this.resXY.split("*")[0],this.systemParam.ResY=this.resXY.split("*")[1],console.log(this.systemParam.iceServers);var n=JSON.parse(this.systemParam.iceServers);this.systemParam.iceServers=n,Pe.UpdateSystemParam(this.systemParam).then(e=>{console.log(e),e.data.status=="0"&&(ct.success(e.data.message),this.GetSystemParam())})},GetSystemParam(){Pe.GetSystemParam().then(n=>{n.data.status=="0"&&(this.systemParam=n.data,this.systemParam.iceServers=JSON.stringify(n.data.iceServers,null,2),this.resXY=n.data.ResX+"*"+n.data.ResY,console.log(this.systemParam))})}},mounted(){this.GetSystemParam()}},kt={class:"container",style:{height:"100%"}},Bt={class:"maincontainer",style:{}},Mt={style:{width:"60%"}},Rt={style:{float:"right"}};function Ft(n,e,t,l,i,d){const g=Ke,c=We,v=nt,y=Ct,p=et,u=tt,E=Je,C=je,w=$e;return dt(),ft("div",kt,[me("div",Bt,[me("div",Mt,[s(C,{model:i.systemParam,"label-col":{span:6},"wrapper-col":{span:24}},{default:x(()=>[s(c,{"label-style":"color: black;",label:"端口"},{default:x(()=>[s(g,{value:i.systemParam.PORT,"onUpdate:value":e[0]||(e[0]=m=>i.systemParam.PORT=m)},null,8,["value"])]),_:1}),s(c,{label:"用户认证"},{default:x(()=>[s(v,{checked:i.systemParam.auth,"onUpdate:checked":e[1]||(e[1]=m=>i.systemParam.auth=m),onChange:d.authChange},null,8,["checked","onChange"])]),_:1}),s(c,{label:"服务IP地址"},{default:x(()=>[s(g,{value:i.systemParam.SignalIp,"onUpdate:value":e[2]||(e[2]=m=>i.systemParam.SignalIp=m)},null,8,["value"])]),_:1}),s(c,{label:"发送帧率"},{default:x(()=>[s(y,{value:i.systemParam.WebRTCFps,"onUpdate:value":e[3]||(e[3]=m=>i.systemParam.WebRTCFps=m)},null,8,["value"])]),_:1}),s(c,{label:"分辨率"},{default:x(()=>[s(u,{value:i.resXY,"onUpdate:value":e[4]||(e[4]=m=>i.resXY=m),class:"custom-select"},{default:x(()=>[s(p,{key:"",value:"1920*1080"},{default:x(()=>[oe("1920*1080")]),_:1}),s(p,{key:"",value:"1280*960"},{default:x(()=>[oe("1280*960")]),_:1})]),_:1},8,["value"])]),_:1}),s(c,{label:"异常忽略"},{default:x(()=>[s(v,{checked:i.systemParam.Unattended,"onUpdate:checked":e[5]||(e[5]=m=>i.systemParam.Unattended=m)},null,8,["checked"])]),_:1}),s(c,{label:"渲染程序后台运行"},{default:x(()=>[s(v,{checked:i.systemParam.RenderOffScreen,"onUpdate:checked":e[6]||(e[6]=m=>i.systemParam.RenderOffScreen=m)},null,8,["checked"])]),_:1}),s(c,{label:"音频发送"},{default:x(()=>[s(v,{checked:i.systemParam.AudioMixer,"onUpdate:checked":e[7]||(e[7]=m=>i.systemParam.AudioMixer=m)},null,8,["checked"])]),_:1}),s(c,{label:"iceServers"},{default:x(()=>[s(E,{value:i.systemParam.iceServers,"onUpdate:value":e[8]||(e[8]=m=>i.systemParam.iceServers=m),style:{minHeight:"250px"}},null,8,["value"])]),_:1})]),_:1},8,["model"]),me("div",Rt,[s(w,{type:"primary",ghost:"",onClick:d.btnReset},{default:x(()=>[oe("重置")]),_:1},8,["onClick"]),s(w,{type:"primary",style:{"margin-left":"10px"},onClick:d.btnSave},{default:x(()=>[oe("保存")]),_:1},8,["onClick"])])])])])}const Xt=st(Dt,[["render",Ft],["__scopeId","data-v-2f7e2276"]]);export{Xt as default};