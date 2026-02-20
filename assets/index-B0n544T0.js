function hp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},po={},cc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),gp=Symbol.for("react.portal"),vp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),wp=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Ep=Symbol.for("react.suspense"),Cp=Symbol.for("react.memo"),Pp=Symbol.for("react.lazy"),Cs=Symbol.iterator;function jp(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var fc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,pc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hc(){}hc.prototype=Qn.prototype;function Sa(e,t,n){this.props=e,this.context=t,this.refs=pc,this.updater=n||fc}var ka=Sa.prototype=new hc;ka.constructor=Sa;dc(ka,Qn.prototype);ka.isPureReactComponent=!0;var Ps=Array.isArray,mc=Object.prototype.hasOwnProperty,Ea={current:null},gc={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)mc.call(t,r)&&!gc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hr,type:e,key:o,ref:l,props:i,_owner:Ea.current}}function _p(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ca(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function zp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var js=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zp(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hr:case gp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Do(l,0):r,Ps(i)?(n="",e!=null&&(n=e.replace(js,"$&/")+"/"),vi(i,t,n,"",function(u){return u})):i!=null&&(Ca(i)&&(i=_p(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(js,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ps(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+Do(o,a);l+=vi(o,t,n,s,i)}else if(s=jp(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+Do(o,a++),l+=vi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zr(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},yi={transition:null},Tp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:yi,ReactCurrentOwner:Ea};function yc(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Ca(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Qn;$.Fragment=vp;$.Profiler=xp;$.PureComponent=Sa;$.StrictMode=yp;$.Suspense=Ep;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;$.act=yc;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ea.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)mc.call(t,s)&&!gc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hr,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:Sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wp,_context:e},e.Consumer=e};$.createElement=vc;$.createFactory=function(e){var t=vc.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:kp,render:e}};$.isValidElement=Ca;$.lazy=function(e){return{$$typeof:Pp,_payload:{_status:-1,_result:e},_init:Np}};$.memo=function(e,t){return{$$typeof:Cp,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=yi.transition;yi.transition={};try{e()}finally{yi.transition=t}};$.unstable_act=yc;$.useCallback=function(e,t){return ve.current.useCallback(e,t)};$.useContext=function(e){return ve.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};$.useEffect=function(e,t){return ve.current.useEffect(e,t)};$.useId=function(){return ve.current.useId()};$.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ve.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};$.useRef=function(e){return ve.current.useRef(e)};$.useState=function(e){return ve.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ve.current.useTransition()};$.version="18.3.1";cc.exports=$;var _=cc.exports;const ne=mp(_),Rp=hp({__proto__:null,default:ne},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=_,Lp=Symbol.for("react.element"),Ip=Symbol.for("react.fragment"),$p=Object.prototype.hasOwnProperty,Ap=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mp={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$p.call(t,r)&&!Mp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lp,type:e,key:o,ref:l,props:i,_owner:Ap.current}}po.Fragment=Ip;po.jsx=xc;po.jsxs=xc;uc.exports=po;var h=uc.exports,wc={exports:{}},Re={},Sc={exports:{}},kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var O=z.length;z.push(R);e:for(;0<O;){var F=O-1>>>1,B=z[F];if(0<i(B,R))z[F]=R,z[O]=B,O=F;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],O=z.pop();if(O!==R){z[0]=O;e:for(var F=0,B=z.length,Ht=B>>>1;F<Ht;){var Be=2*(F+1)-1,ht=z[Be],Pe=Be+1,tt=z[Pe];if(0>i(ht,O))Pe<B&&0>i(tt,ht)?(z[F]=tt,z[Pe]=O,F=Pe):(z[F]=ht,z[Be]=O,F=Be);else if(Pe<B&&0>i(tt,O))z[F]=tt,z[Pe]=O,F=Pe;else break e}}return R}function i(z,R){var O=z.sortIndex-R.sortIndex;return O!==0?O:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,d=null,g=3,v=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=z)r(u),R.sortIndex=R.expirationTime,t(s,R);else break;R=n(u)}}function y(z){if(w=!1,p(z),!x)if(n(s)!==null)x=!0,Xn(E);else{var R=n(u);R!==null&&Wt(y,R.startTime-z)}}function E(z,R){x=!1,w&&(w=!1,f(T),T=-1),v=!0;var O=g;try{for(p(R),d=n(s);d!==null&&(!(d.expirationTime>R)||z&&!Ce());){var F=d.callback;if(typeof F=="function"){d.callback=null,g=d.priorityLevel;var B=F(d.expirationTime<=R);R=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(s)&&r(s),p(R)}else r(s);d=n(s)}if(d!==null)var Ht=!0;else{var Be=n(u);Be!==null&&Wt(y,Be.startTime-R),Ht=!1}return Ht}finally{d=null,g=O,v=!1}}var C=!1,S=null,T=-1,U=5,I=-1;function Ce(){return!(e.unstable_now()-I<U)}function Ut(){if(S!==null){var z=e.unstable_now();I=z;var R=!0;try{R=S(!0,z)}finally{R?Vt():(C=!1,S=null)}}else C=!1}var Vt;if(typeof c=="function")Vt=function(){c(Ut)};else if(typeof MessageChannel<"u"){var Xr=new MessageChannel,Ao=Xr.port2;Xr.port1.onmessage=Ut,Vt=function(){Ao.postMessage(null)}}else Vt=function(){j(Ut,0)};function Xn(z){S=z,C||(C=!0,Vt())}function Wt(z,R){T=j(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Xn(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var O=g;g=R;try{return z()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var O=g;g=z;try{return R()}finally{g=O}},e.unstable_scheduleCallback=function(z,R,O){var F=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?F+O:F):O=F,z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,z={id:m++,callback:R,priorityLevel:z,startTime:O,expirationTime:B,sortIndex:-1},O>F?(z.sortIndex=O,t(u,z),n(s)===null&&z===n(u)&&(w?(f(T),T=-1):w=!0,Wt(y,O-F))):(z.sortIndex=B,t(s,z),x||v||(x=!0,Xn(E))),z},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(z){var R=g;return function(){var O=g;g=R;try{return z.apply(this,arguments)}finally{g=O}}}})(kc);Sc.exports=kc;var Dp=Sc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=_,Te=Dp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ec=new Set,kr={};function un(e,t){In(e,t),In(e+"Capture",t)}function In(e,t){for(kr[e]=t,e=0;e<t.length;e++)Ec.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gl=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_s={},zs={};function Up(e){return gl.call(zs,e)?!0:gl.call(_s,e)?!1:Bp.test(e)?zs[e]=!0:(_s[e]=!0,!1)}function Vp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wp(e,t,n,r){if(t===null||typeof t>"u"||Vp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pa,ja);ce[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pa,ja);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pa,ja);ce[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wp(t,n,i,r)&&(n=null),r||i===null?Up(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qr=Symbol.for("react.element"),mn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),Cc=Symbol.for("react.provider"),Pc=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),Ta=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),jc=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function Zn(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,Fo;function lr(e){if(Fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fo=t&&t[1]||""}return`
`+Fo+e}var Bo=!1;function Uo(e,t){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function Hp(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case mn:return"Portal";case vl:return"Profiler";case za:return"StrictMode";case yl:return"Suspense";case xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pc:return(e.displayName||"Context")+".Consumer";case Cc:return(e._context.displayName||"Context")+".Provider";case Na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ta:return t=e.displayName||null,t!==null?t:wl(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return wl(e(t))}catch{}}return null}function Qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wl(t);case 8:return t===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gp(e){var t=_c(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=Gp(e))}function zc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_c(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ts(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nc(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function kl(e,t){Nc(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?El(e,t.type,n):t.hasOwnProperty("defaultValue")&&El(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function El(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(ar(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Tc(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,Oc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kp=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function Lc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function Ic(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yp=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(Yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,Nn=null,Tn=null;function Is(e){if(e=Kr(e)){if(typeof Nl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=yo(t),Nl(e.stateNode,e.type,t))}}function $c(e){Nn?Tn?Tn.push(e):Tn=[e]:Nn=e}function Ac(){if(Nn){var e=Nn,t=Tn;if(Tn=Nn=null,Is(e),t)for(e=0;e<t.length;e++)Is(t[e])}}function Mc(e,t){return e(t)}function Dc(){}var Vo=!1;function Fc(e,t,n){if(Vo)return e(t,n);Vo=!0;try{return Mc(e,t,n)}finally{Vo=!1,(Nn!==null||Tn!==null)&&(Dc(),Ac())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Tl=!1;if(st)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{Tl=!1}function bp(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var pr=!1,$i=null,Ai=!1,Rl=null,Xp={onError:function(e){pr=!0,$i=e}};function Jp(e,t,n,r,i,o,l,a,s){pr=!1,$i=null,bp.apply(Xp,arguments)}function Zp(e,t,n,r,i,o,l,a,s){if(Jp.apply(this,arguments),pr){if(pr){var u=$i;pr=!1,$i=null}else throw Error(k(198));Ai||(Ai=!0,Rl=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(cn(e)!==e)throw Error(k(188))}function qp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return $s(i),e;if(o===r)return $s(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Uc(e){return e=qp(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Wc=Te.unstable_scheduleCallback,As=Te.unstable_cancelCallback,eh=Te.unstable_shouldYield,th=Te.unstable_requestPaint,J=Te.unstable_now,nh=Te.unstable_getCurrentPriorityLevel,Oa=Te.unstable_ImmediatePriority,Hc=Te.unstable_UserBlockingPriority,Mi=Te.unstable_NormalPriority,rh=Te.unstable_LowPriority,Qc=Te.unstable_IdlePriority,ho=null,qe=null;function ih(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:ah,oh=Math.log,lh=Math.LN2;function ah(e){return e>>>=0,e===0?32:31-(oh(e)/lh|0)|0}var ni=64,ri=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=sr(a):(o&=l,o!==0&&(r=sr(o)))}else l=n&~i,l!==0?r=sr(l):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function sh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=sh(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gc(){var e=ni;return ni<<=1,!(ni&4194240)&&(ni=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function ch(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function La(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Kc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yc,Ia,bc,Xc,Jc,Ll=!1,ii=[],Pt=null,jt=null,_t=null,Pr=new Map,jr=new Map,wt=[],fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ms(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function er(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Kr(t),t!==null&&Ia(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dh(e,t,n,r,i){switch(t){case"focusin":return Pt=er(Pt,e,t,n,r,i),!0;case"dragenter":return jt=er(jt,e,t,n,r,i),!0;case"mouseover":return _t=er(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pr.set(o,er(Pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,jr.set(o,er(jr.get(o)||null,e,t,n,r,i)),!0}return!1}function Zc(e){var t=Yt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Bc(n),t!==null){e.blockedOn=t,Jc(e.priority,function(){bc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=Kr(n),t!==null&&Ia(t),e.blockedOn=n,!1;t.shift()}return!0}function Ds(e,t,n){xi(e)&&n.delete(t)}function ph(){Ll=!1,Pt!==null&&xi(Pt)&&(Pt=null),jt!==null&&xi(jt)&&(jt=null),_t!==null&&xi(_t)&&(_t=null),Pr.forEach(Ds),jr.forEach(Ds)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,ph)))}function _r(e){function t(i){return tr(i,e)}if(0<ii.length){tr(ii[0],e);for(var n=1;n<ii.length;n++){var r=ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&tr(Pt,e),jt!==null&&tr(jt,e),_t!==null&&tr(_t,e),Pr.forEach(t),jr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Zc(n),n.blockedOn===null&&wt.shift()}var Rn=dt.ReactCurrentBatchConfig,Fi=!0;function hh(e,t,n,r){var i=D,o=Rn.transition;Rn.transition=null;try{D=1,$a(e,t,n,r)}finally{D=i,Rn.transition=o}}function mh(e,t,n,r){var i=D,o=Rn.transition;Rn.transition=null;try{D=4,$a(e,t,n,r)}finally{D=i,Rn.transition=o}}function $a(e,t,n,r){if(Fi){var i=Il(e,t,n,r);if(i===null)qo(e,t,r,Bi,n),Ms(e,r);else if(dh(i,e,t,n,r))r.stopPropagation();else if(Ms(e,r),t&4&&-1<fh.indexOf(e)){for(;i!==null;){var o=Kr(i);if(o!==null&&Yc(o),o=Il(e,t,n,r),o===null&&qo(e,t,r,Bi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qo(e,t,r,null,n)}}var Bi=null;function Il(e,t,n,r){if(Bi=null,e=Ra(r),e=Yt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nh()){case Oa:return 1;case Hc:return 4;case Mi:case rh:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var kt=null,Aa=null,wi=null;function ef(){if(wi)return wi;var e,t=Aa,n=t.length,r,i="value"in kt?kt.value:kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return wi=i.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function Fs(){return!1}function Oe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oi:Fs,this.isPropagationStopped=Fs,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=Oe(Gn),Gr=b({},Gn,{view:0,detail:0}),gh=Oe(Gr),Ho,Qo,nr,mo=b({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Ho=e.screenX-nr.screenX,Qo=e.screenY-nr.screenY):Qo=Ho=0,nr=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),Bs=Oe(mo),vh=b({},mo,{dataTransfer:0}),yh=Oe(vh),xh=b({},Gr,{relatedTarget:0}),Go=Oe(xh),wh=b({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=Oe(wh),kh=b({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eh=Oe(kh),Ch=b({},Gn,{data:0}),Us=Oe(Ch),Ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_h[e])?!!t[e]:!1}function Da(){return zh}var Nh=b({},Gr,{key:function(e){if(e.key){var t=Ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Th=Oe(Nh),Rh=b({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=Oe(Rh),Oh=b({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Lh=Oe(Oh),Ih=b({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$h=Oe(Ih),Ah=b({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=Oe(Ah),Dh=[9,13,27,32],Fa=st&&"CompositionEvent"in window,hr=null;st&&"documentMode"in document&&(hr=document.documentMode);var Fh=st&&"TextEvent"in window&&!hr,tf=st&&(!Fa||hr&&8<hr&&11>=hr),Ws=" ",Hs=!1;function nf(e,t){switch(e){case"keyup":return Dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Bh(e,t){switch(e){case"compositionend":return rf(t);case"keypress":return t.which!==32?null:(Hs=!0,Ws);case"textInput":return e=t.data,e===Ws&&Hs?null:e;default:return null}}function Uh(e,t){if(vn)return e==="compositionend"||!Fa&&nf(e,t)?(e=ef(),wi=Aa=kt=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tf&&t.locale!=="ko"?null:t.data;default:return null}}var Vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vh[e.type]:t==="textarea"}function of(e,t,n,r){$c(r),t=Ui(t,"onChange"),0<t.length&&(n=new Ma("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,zr=null;function Wh(e){gf(e,0)}function go(e){var t=wn(e);if(zc(t))return e}function Hh(e,t){if(e==="change")return t}var lf=!1;if(st){var Ko;if(st){var Yo="oninput"in document;if(!Yo){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),Yo=typeof Gs.oninput=="function"}Ko=Yo}else Ko=!1;lf=Ko&&(!document.documentMode||9<document.documentMode)}function Ks(){mr&&(mr.detachEvent("onpropertychange",af),zr=mr=null)}function af(e){if(e.propertyName==="value"&&go(zr)){var t=[];of(t,zr,e,Ra(e)),Fc(Wh,t)}}function Qh(e,t,n){e==="focusin"?(Ks(),mr=t,zr=n,mr.attachEvent("onpropertychange",af)):e==="focusout"&&Ks()}function Gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(zr)}function Kh(e,t){if(e==="click")return go(t)}function Yh(e,t){if(e==="input"||e==="change")return go(t)}function bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:bh;function Nr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gl.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bs(e,t){var n=Ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ys(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uf(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xh(e){var t=uf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sf(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bs(n,o);var l=bs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jh=st&&"documentMode"in document&&11>=document.documentMode,yn=null,$l=null,gr=null,Al=!1;function Xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Al||yn==null||yn!==Ii(r)||(r=yn,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&Nr(gr,r)||(gr=r,r=Ui($l,"onSelect"),0<r.length&&(t=new Ma("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},bo={},cf={};st&&(cf=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function vo(e){if(bo[e])return bo[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cf)return bo[e]=t[n];return e}var ff=vo("animationend"),df=vo("animationiteration"),pf=vo("animationstart"),hf=vo("transitionend"),mf=new Map,Js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){mf.set(e,t),un(t,[e])}for(var Xo=0;Xo<Js.length;Xo++){var Jo=Js[Xo],Zh=Jo.toLowerCase(),qh=Jo[0].toUpperCase()+Jo.slice(1);Mt(Zh,"on"+qh)}Mt(ff,"onAnimationEnd");Mt(df,"onAnimationIteration");Mt(pf,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(hf,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Zs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zp(r,t,void 0,e),e.currentTarget=null}function gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Zs(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Zs(i,a,u),o=s}}}if(Ai)throw e=Rl,Ai=!1,Rl=null,e}function W(e,t){var n=t[Ul];n===void 0&&(n=t[Ul]=new Set);var r=e+"__bubble";n.has(r)||(vf(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),vf(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[ai]){e[ai]=!0,Ec.forEach(function(n){n!=="selectionchange"&&(em.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,Zo("selectionchange",!1,t))}}function vf(e,t,n,r){switch(qc(t)){case 1:var i=hh;break;case 4:i=mh;break;default:i=$a}n=i.bind(null,t,n,e),i=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Yt(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Fc(function(){var u=o,m=Ra(n),d=[];e:{var g=mf.get(e);if(g!==void 0){var v=Ma,x=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":v=Th;break;case"focusin":x="focus",v=Go;break;case"focusout":x="blur",v=Go;break;case"beforeblur":case"afterblur":v=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Lh;break;case ff:case df:case pf:v=Sh;break;case hf:v=$h;break;case"scroll":v=gh;break;case"wheel":v=Mh;break;case"copy":case"cut":case"paste":v=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vs}var w=(t&4)!==0,j=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Cr(c,f),y!=null&&w.push(Rr(c,y,p)))),j)break;c=c.return}0<w.length&&(g=new v(g,x,null,n,m),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==zl&&(x=n.relatedTarget||n.fromElement)&&(Yt(x)||x[ut]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?Yt(x):null,x!==null&&(j=cn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=Bs,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Vs,y="onPointerLeave",f="onPointerEnter",c="pointer"),j=v==null?g:wn(v),p=x==null?g:wn(x),g=new w(y,c+"leave",v,n,m),g.target=j,g.relatedTarget=p,y=null,Yt(m)===u&&(w=new w(f,c+"enter",x,n,m),w.target=p,w.relatedTarget=j,y=w),j=y,v&&x)t:{for(w=v,f=x,c=0,p=w;p;p=pn(p))c++;for(p=0,y=f;y;y=pn(y))p++;for(;0<c-p;)w=pn(w),c--;for(;0<p-c;)f=pn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=pn(w),f=pn(f)}w=null}else w=null;v!==null&&qs(d,g,v,w,!1),x!==null&&j!==null&&qs(d,j,x,w,!0)}}e:{if(g=u?wn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var E=Hh;else if(Qs(g))if(lf)E=Yh;else{E=Gh;var C=Qh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Kh);if(E&&(E=E(e,u))){of(d,E,n,m);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&El(g,"number",g.value)}switch(C=u?wn(u):window,e){case"focusin":(Qs(C)||C.contentEditable==="true")&&(yn=C,$l=u,gr=null);break;case"focusout":gr=$l=yn=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Xs(d,n,m);break;case"selectionchange":if(Jh)break;case"keydown":case"keyup":Xs(d,n,m)}var S;if(Fa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else vn?nf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(tf&&n.locale!=="ko"&&(vn||T!=="onCompositionStart"?T==="onCompositionEnd"&&vn&&(S=ef()):(kt=m,Aa="value"in kt?kt.value:kt.textContent,vn=!0)),C=Ui(u,T),0<C.length&&(T=new Us(T,e,null,n,m),d.push({event:T,listeners:C}),S?T.data=S:(S=rf(n),S!==null&&(T.data=S)))),(S=Fh?Bh(e,n):Uh(e,n))&&(u=Ui(u,"onBeforeInput"),0<u.length&&(m=new Us("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:u}),m.data=S))}gf(d,t)})}function Rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Cr(e,n),o!=null&&r.unshift(Rr(e,o,i)),o=Cr(e,t),o!=null&&r.push(Rr(e,o,i))),e=e.return}return r}function pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Cr(n,o),s!=null&&l.unshift(Rr(n,s,a))):i||(s=Cr(n,o),s!=null&&l.push(Rr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var tm=/\r\n?/g,nm=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(tm,`
`).replace(nm,"")}function si(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(k(425))}function Vi(){}var Ml=null,Dl=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,rm=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(om)}:Bl;function om(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_r(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Kn,Or="__reactProps$"+Kn,ut="__reactContainer$"+Kn,Ul="__reactEvents$"+Kn,lm="__reactListeners$"+Kn,am="__reactHandles$"+Kn;function Yt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[Ze])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[Ze]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function yo(e){return e[Or]||null}var Vl=[],Sn=-1;function Dt(e){return{current:e}}function Q(e){0>Sn||(e.current=Vl[Sn],Vl[Sn]=null,Sn--)}function V(e,t){Sn++,Vl[Sn]=e.current,e.current=t}var At={},he=Dt(At),Se=Dt(!1),tn=At;function $n(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Wi(){Q(Se),Q(he)}function ru(e,t,n){if(he.current!==At)throw Error(k(168));V(he,t),V(Se,n)}function yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Qp(e)||"Unknown",i));return b({},n,r)}function Hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,tn=he.current,V(he,e),V(Se,Se.current),!0}function iu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=yf(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,Q(Se),Q(he),V(he,e)):Q(Se),V(Se,n)}var it=null,xo=!1,tl=!1;function xf(e){it===null?it=[e]:it.push(e)}function sm(e){xo=!0,xf(e)}function Ft(){if(!tl&&it!==null){tl=!0;var e=0,t=D;try{var n=it;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,xo=!1}catch(i){throw it!==null&&(it=it.slice(e+1)),Wc(Oa,Ft),i}finally{D=t,tl=!1}}return null}var kn=[],En=0,Qi=null,Gi=0,Le=[],Ie=0,nn=null,ot=1,lt="";function Gt(e,t){kn[En++]=Gi,kn[En++]=Qi,Qi=e,Gi=t}function wf(e,t,n){Le[Ie++]=ot,Le[Ie++]=lt,Le[Ie++]=nn,nn=e;var r=ot;e=lt;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ot=1<<32-Qe(t)+i|n<<i|r,lt=o+e}else ot=1<<o|n<<i|r,lt=e}function Ua(e){e.return!==null&&(Gt(e,1),wf(e,1,0))}function Va(e){for(;e===Qi;)Qi=kn[--En],kn[En]=null,Gi=kn[--En],kn[En]=null;for(;e===nn;)nn=Le[--Ie],Le[Ie]=null,lt=Le[--Ie],Le[Ie]=null,ot=Le[--Ie],Le[Ie]=null}var Ne=null,ze=null,G=!1,He=null;function Sf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ze=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ze=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(G){var t=ze;if(t){var n=t;if(!ou(e,t)){if(Wl(e))throw Error(k(418));t=zt(n.nextSibling);var r=Ne;t&&ou(e,t)?Sf(r,n):(e.flags=e.flags&-4097|2,G=!1,Ne=e)}}else{if(Wl(e))throw Error(k(418));e.flags=e.flags&-4097|2,G=!1,Ne=e}}}function lu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function ui(e){if(e!==Ne)return!1;if(!G)return lu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=ze)){if(Wl(e))throw kf(),Error(k(418));for(;t;)Sf(e,t),t=zt(t.nextSibling)}if(lu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ne?zt(e.stateNode.nextSibling):null;return!0}function kf(){for(var e=ze;e;)e=zt(e.nextSibling)}function An(){ze=Ne=null,G=!1}function Wa(e){He===null?He=[e]:He.push(e)}var um=dt.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function au(e){var t=e._init;return t(e._payload)}function Ef(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Ot(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=sl(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function s(f,c,p,y){var E=p.type;return E===gn?m(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&au(E)===c.type)?(y=i(c,p.props),y.ref=rr(f,c,p),y.return=f,y):(y=zi(p.type,p.key,p.props,null,f.mode,y),y.ref=rr(f,c,p),y.return=f,y)}function u(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ul(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function m(f,c,p,y,E){return c===null||c.tag!==7?(c=qt(p,f.mode,y,E),c.return=f,c):(c=i(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case qr:return p=zi(c.type,c.key,c.props,null,f.mode,p),p.ref=rr(f,null,c),p.return=f,p;case mn:return c=ul(c,f.mode,p),c.return=f,c;case yt:var y=c._init;return d(f,y(c._payload),p)}if(ar(c)||Zn(c))return c=qt(c,f.mode,p,null),c.return=f,c;ci(f,c)}return null}function g(f,c,p,y){var E=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qr:return p.key===E?s(f,c,p,y):null;case mn:return p.key===E?u(f,c,p,y):null;case yt:return E=p._init,g(f,c,E(p._payload),y)}if(ar(p)||Zn(p))return E!==null?null:m(f,c,p,y,null);ci(f,p)}return null}function v(f,c,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qr:return f=f.get(y.key===null?p:y.key)||null,s(c,f,y,E);case mn:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,E);case yt:var C=y._init;return v(f,c,p,C(y._payload),E)}if(ar(y)||Zn(y))return f=f.get(p)||null,m(c,f,y,E,null);ci(c,y)}return null}function x(f,c,p,y){for(var E=null,C=null,S=c,T=c=0,U=null;S!==null&&T<p.length;T++){S.index>T?(U=S,S=null):U=S.sibling;var I=g(f,S,p[T],y);if(I===null){S===null&&(S=U);break}e&&S&&I.alternate===null&&t(f,S),c=o(I,c,T),C===null?E=I:C.sibling=I,C=I,S=U}if(T===p.length)return n(f,S),G&&Gt(f,T),E;if(S===null){for(;T<p.length;T++)S=d(f,p[T],y),S!==null&&(c=o(S,c,T),C===null?E=S:C.sibling=S,C=S);return G&&Gt(f,T),E}for(S=r(f,S);T<p.length;T++)U=v(S,f,T,p[T],y),U!==null&&(e&&U.alternate!==null&&S.delete(U.key===null?T:U.key),c=o(U,c,T),C===null?E=U:C.sibling=U,C=U);return e&&S.forEach(function(Ce){return t(f,Ce)}),G&&Gt(f,T),E}function w(f,c,p,y){var E=Zn(p);if(typeof E!="function")throw Error(k(150));if(p=E.call(p),p==null)throw Error(k(151));for(var C=E=null,S=c,T=c=0,U=null,I=p.next();S!==null&&!I.done;T++,I=p.next()){S.index>T?(U=S,S=null):U=S.sibling;var Ce=g(f,S,I.value,y);if(Ce===null){S===null&&(S=U);break}e&&S&&Ce.alternate===null&&t(f,S),c=o(Ce,c,T),C===null?E=Ce:C.sibling=Ce,C=Ce,S=U}if(I.done)return n(f,S),G&&Gt(f,T),E;if(S===null){for(;!I.done;T++,I=p.next())I=d(f,I.value,y),I!==null&&(c=o(I,c,T),C===null?E=I:C.sibling=I,C=I);return G&&Gt(f,T),E}for(S=r(f,S);!I.done;T++,I=p.next())I=v(S,f,T,I.value,y),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?T:I.key),c=o(I,c,T),C===null?E=I:C.sibling=I,C=I);return e&&S.forEach(function(Ut){return t(f,Ut)}),G&&Gt(f,T),E}function j(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===gn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case qr:e:{for(var E=p.key,C=c;C!==null;){if(C.key===E){if(E=p.type,E===gn){if(C.tag===7){n(f,C.sibling),c=i(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&au(E)===C.type){n(f,C.sibling),c=i(C,p.props),c.ref=rr(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===gn?(c=qt(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=zi(p.type,p.key,p.props,null,f.mode,y),y.ref=rr(f,c,p),y.return=f,f=y)}return l(f);case mn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ul(p,f.mode,y),c.return=f,f=c}return l(f);case yt:return C=p._init,j(f,c,C(p._payload),y)}if(ar(p))return x(f,c,p,y);if(Zn(p))return w(f,c,p,y);ci(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=sl(p,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return j}var Mn=Ef(!0),Cf=Ef(!1),Ki=Dt(null),Yi=null,Cn=null,Ha=null;function Qa(){Ha=Cn=Yi=null}function Ga(e){var t=Ki.current;Q(Ki),e._currentValue=t}function Ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Yi=e,Ha=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Yi===null)throw Error(k(308));Cn=e,Yi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var bt=null;function Ka(e){bt===null?bt=[e]:bt.push(e)}function Pf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ka(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xt=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Ka(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,La(e,n)}}function su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bi(e,t,n,r){var i=e.updateQueue;xt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;l=0,m=u=s=null,a=o;do{var g=a.lane,v=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){d=x.call(v,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,d,g):x,g==null)break e;d=b({},d,g);break e;case 2:xt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=v,s=d):m=m.next=v,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);on|=l,e.lanes=l,e.memoizedState=d}}function uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Yr={},et=Dt(Yr),Lr=Dt(Yr),Ir=Dt(Yr);function Xt(e){if(e===Yr)throw Error(k(174));return e}function ba(e,t){switch(V(Ir,t),V(Lr,e),V(et,Yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pl(t,e)}Q(et),V(et,t)}function Dn(){Q(et),Q(Lr),Q(Ir)}function _f(e){Xt(Ir.current);var t=Xt(et.current),n=Pl(t,e.type);t!==n&&(V(Lr,e),V(et,n))}function Xa(e){Lr.current===e&&(Q(et),Q(Lr))}var K=Dt(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function Ja(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var Ei=dt.ReactCurrentDispatcher,rl=dt.ReactCurrentBatchConfig,rn=0,Y=null,te=null,ie=null,Ji=!1,vr=!1,$r=0,cm=0;function fe(){throw Error(k(321))}function Za(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function qa(e,t,n,r,i,o){if(rn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ei.current=e===null||e.memoizedState===null?hm:mm,e=n(r,i),vr){o=0;do{if(vr=!1,$r=0,25<=o)throw Error(k(301));o+=1,ie=te=null,t.updateQueue=null,Ei.current=gm,e=n(r,i)}while(vr)}if(Ei.current=Zi,t=te!==null&&te.next!==null,rn=0,ie=te=Y=null,Ji=!1,t)throw Error(k(300));return e}function es(){var e=$r!==0;return $r=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function De(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Ar(e,t){return typeof t=="function"?t(e):t}function il(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var m=u.lane;if((rn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,Y.lanes|=m,on|=m}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Ye(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,on|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ye(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zf(){}function Nf(e,t){var n=Y,r=De(),i=t(),o=!Ye(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,ts(Of.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Mr(9,Rf.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(k(349));rn&30||Tf(n,t,i)}return i}function Tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rf(e,t,n,r){t.value=n,t.getSnapshot=r,Lf(t)&&If(e)}function Of(e,t,n){return n(function(){Lf(t)&&If(e)})}function Lf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function If(e){var t=ct(e,1);t!==null&&Ge(t,e,1,-1)}function cu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,Y,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $f(){return De().memoizedState}function Ci(e,t,n,r){var i=Xe();Y.flags|=e,i.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function wo(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&Za(r,l.deps)){i.memoizedState=Mr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Mr(1|t,n,o,r)}function fu(e,t){return Ci(8390656,8,e,t)}function ts(e,t){return wo(2048,8,e,t)}function Af(e,t){return wo(4,2,e,t)}function Mf(e,t){return wo(4,4,e,t)}function Df(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,n){return n=n!=null?n.concat([e]):null,wo(4,4,Df.bind(null,t,e),n)}function ns(){}function Bf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Za(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vf(e,t,n){return rn&21?(Ye(n,t)||(n=Gc(),Y.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function fm(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{D=n,rl.transition=r}}function Wf(){return De().memoizedState}function dm(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(e))Qf(t,n);else if(n=Pf(e,t,n,r),n!==null){var i=ge();Ge(n,e,r,i),Gf(n,t,r)}}function pm(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(e))Qf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ye(a,l)){var s=t.interleaved;s===null?(i.next=i,Ka(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Pf(e,t,i,r),n!==null&&(i=ge(),Ge(n,e,r,i),Gf(n,t,r))}}function Hf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Qf(e,t){vr=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,La(e,n)}}var Zi={readContext:Me,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},hm={readContext:Me,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4194308,4,Df.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ci(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:cu,useDebugValue:ns,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=cu(!1),t=e[0];return e=fm.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Xe();if(G){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ae===null)throw Error(k(349));rn&30||Tf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fu(Of.bind(null,r,o,e),[e]),r.flags|=2048,Mr(9,Rf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ae.identifierPrefix;if(G){var n=lt,r=ot;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mm={readContext:Me,useCallback:Bf,useContext:Me,useEffect:ts,useImperativeHandle:Ff,useInsertionEffect:Af,useLayoutEffect:Mf,useMemo:Uf,useReducer:il,useRef:$f,useState:function(){return il(Ar)},useDebugValue:ns,useDeferredValue:function(e){var t=De();return Vf(t,te.memoizedState,e)},useTransition:function(){var e=il(Ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:Nf,useId:Wf,unstable_isNewReconciler:!1},gm={readContext:Me,useCallback:Bf,useContext:Me,useEffect:ts,useImperativeHandle:Ff,useInsertionEffect:Af,useLayoutEffect:Mf,useMemo:Uf,useReducer:ol,useRef:$f,useState:function(){return ol(Ar)},useDebugValue:ns,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:Vf(t,te.memoizedState,e)},useTransition:function(){var e=ol(Ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:Nf,useId:Wf,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Rt(e),o=at(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(Ge(t,e,i,r),ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Rt(e),o=at(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(Ge(t,e,i,r),ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Rt(e),i=at(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Ge(t,e,r,n),ki(t,e,r))}};function du(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,o):!0}function Kf(e,t,n){var r=!1,i=At,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=ke(t)?tn:he.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):At),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function Kl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ya(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=ke(t)?tn:he.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Gl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fn(e,t){try{var n="",r=t;do n+=Hp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vm=typeof WeakMap=="function"?WeakMap:Map;function Yf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){eo||(eo=!0,ia=r),Yl(e,t)},n}function bf(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yl(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rm.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var ym=dt.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?Cf(t,null,n,r):Mn(t,e.child,n,r)}function vu(e,t,n,r,i){n=n.render;var o=t.ref;return On(t,i),r=qa(e,t,n,r,o,i),n=es(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(G&&n&&Ua(t),t.flags|=1,me(e,t,r,i),t.child)}function yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xf(e,t,o,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(l,r)&&e.ref===t.ref)return ft(e,t,i)}return t.flags|=1,e=Ot(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Nr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ft(e,t,i)}return bl(e,t,n,r,i)}function Jf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(jn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(jn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(jn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(jn,_e),_e|=r;return me(e,t,i,n),t.child}function Zf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bl(e,t,n,r,i){var o=ke(n)?tn:he.current;return o=$n(t,o),On(t,i),n=qa(e,t,n,r,o,i),r=es(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ft(e,t,i)):(G&&r&&Ua(t),t.flags|=1,me(e,t,n,i),t.child)}function xu(e,t,n,r,i){if(ke(n)){var o=!0;Hi(t)}else o=!1;if(On(t,i),t.stateNode===null)Pi(e,t),Kf(t,n,r),Kl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=ke(n)?tn:he.current,u=$n(t,u));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&pu(t,l,r,u),xt=!1;var g=t.memoizedState;l.state=g,bi(t,r,l,i),s=t.memoizedState,a!==r||g!==s||Se.current||xt?(typeof m=="function"&&(Gl(t,n,m,r),s=t.memoizedState),(a=xt||du(t,n,a,r,g,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ve(t.type,a),l.props=u,d=t.pendingProps,g=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=ke(n)?tn:he.current,s=$n(t,s));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==s)&&pu(t,l,r,s),xt=!1,g=t.memoizedState,l.state=g,bi(t,r,l,i);var x=t.memoizedState;a!==d||g!==x||Se.current||xt?(typeof v=="function"&&(Gl(t,n,v,r),x=t.memoizedState),(u=xt||du(t,n,u,r,g,x,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){Zf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&iu(t,n,!1),ft(e,t,o);r=t.stateNode,ym.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mn(t,e.child,null,o),t.child=Mn(t,null,a,o)):me(e,t,a,o),t.memoizedState=r.state,i&&iu(t,n,!0),t.child}function qf(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),ba(e,t.containerInfo)}function wu(e,t,n,r,i){return An(),Wa(i),t.flags|=256,me(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ed(e,t,n){var r=t.pendingProps,i=K.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(K,i&1),e===null)return Hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Co(l,r,0,null),e=qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zl(n),t.memoizedState=Jl,e):rs(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return xm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ot(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ot(a,o):(o=qt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Zl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return o=e.child,e=o.sibling,r=Ot(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rs(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Wa(r),Mn(t,e.child,null,n),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ll(Error(k(422))),fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),o=qt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Mn(t,e.child,null,l),t.child.memoizedState=Zl(l),t.memoizedState=Jl,o);if(!(t.mode&1))return fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=ll(o,r,void 0),fi(e,t,l,r)}if(a=(l&e.childLanes)!==0,we||a){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),Ge(r,e,i,-1))}return us(),r=ll(Error(k(421))),fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=zt(i.nextSibling),Ne=t,G=!0,He=null,e!==null&&(Le[Ie++]=ot,Le[Ie++]=lt,Le[Ie++]=nn,ot=e.id,lt=e.overflow,nn=t),t=rs(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ql(e.return,t,n)}function al(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function td(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,o);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wm(e,t,n){switch(t.tag){case 3:qf(t),An();break;case 5:_f(t);break;case 1:ke(t.type)&&Hi(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ki,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?ed(e,t,n):(V(K,K.current&1),e=ft(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return td(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Jf(e,t,n)}return ft(e,t,n)}var nd,ql,rd,id;nd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};rd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(et.current);var o=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),o=[];break;case"select":i=b({},i,{value:void 0}),r=b({},r,{value:void 0}),o=[];break;case"textarea":i=Cl(e,i),r=Cl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vi)}jl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(kr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};id=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sm(e,t,n){var r=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Wi(),de(t),null;case 3:return r=t.stateNode,Dn(),Q(Se),Q(he),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(aa(He),He=null))),ql(e,t),de(t),null;case 5:Xa(t);var i=Xt(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)rd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return de(t),null}if(e=Xt(et.current),ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ze]=t,r[Or]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)W(ur[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ts(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Os(r,o),W("invalid",r)}jl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&si(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&si(r.textContent,a,e),i=["children",""+a]):kr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":ei(r),Rs(r,o,!0);break;case"textarea":ei(r),Ls(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ze]=t,e[Or]=r,nd(e,t,!1,!1),t.stateNode=e;e:{switch(l=_l(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)W(ur[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Ts(e,r),i=Sl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=b({},r,{value:void 0}),W("invalid",e);break;case"textarea":Os(e,r),i=Cl(e,r),W("invalid",e);break;default:i=r}jl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Ic(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Oc(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Er(e,s):typeof s=="number"&&Er(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(kr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&W("scroll",e):s!=null&&_a(e,o,s,l))}switch(n){case"input":ei(e),Rs(e,r,!1);break;case"textarea":ei(e),Ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zn(e,!!r.multiple,o,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)id(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Xt(Ir.current),Xt(et.current),ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&si(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return de(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&t.mode&1&&!(t.flags&128))kf(),An(),t.flags|=98560,o=!1;else if(o=ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ze]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else He!==null&&(aa(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?re===0&&(re=3):us())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Dn(),ql(e,t),e===null&&Tr(t.stateNode.containerInfo),de(t),null;case 10:return Ga(t.type._context),de(t),null;case 17:return ke(t.type)&&Wi(),de(t),null;case 19:if(Q(K),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)ir(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xi(e),l!==null){for(t.flags|=128,ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Bn&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return de(t),null}else 2*J()-o.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function km(e,t){switch(Va(t),t.tag){case 1:return ke(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),Q(Se),Q(he),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xa(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return Dn(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return ss(),null;case 24:return null;default:return null}}var di=!1,pe=!1,Em=typeof WeakSet=="function"?WeakSet:Set,N=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function ea(e,t,n){try{n()}catch(r){X(e,t,r)}}var ku=!1;function Cm(e,t){if(Ml=Fi,e=uf(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,d=e,g=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)g=d,d=v;for(;;){if(d===e)break t;if(g===n&&++u===i&&(a=l),g===o&&++m===r&&(s=l),(v=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},Fi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),j);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=ku,ku=!1,x}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ea(t,n,o)}i=i.next}while(i!==r)}}function ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function od(e){var t=e.alternate;t!==null&&(e.alternate=null,od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[Or],delete t[Ul],delete t[lm],delete t[am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ld(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}var se=null,We=!1;function gt(e,t,n){for(n=n.child;n!==null;)ad(e,t,n),n=n.sibling}function ad(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 5:pe||Pn(n,t);case 6:var r=se,i=We;se=null,gt(e,t,n),se=r,We=i,se!==null&&(We?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(We?(e=se,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),_r(e)):el(se,n.stateNode));break;case 4:r=se,i=We,se=n.stateNode.containerInfo,We=!0,gt(e,t,n),se=r,We=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ea(n,t,l),i=i.next}while(i!==r)}gt(e,t,n);break;case 1:if(!pe&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,gt(e,t,n),pe=r):gt(e,t,n);break;default:gt(e,t,n)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Em),t.forEach(function(r){var i=Lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,We=!1;break e;case 3:se=a.stateNode.containerInfo,We=!0;break e;case 4:se=a.stateNode.containerInfo,We=!0;break e}a=a.return}if(se===null)throw Error(k(160));ad(o,l,i),se=null,We=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}function sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),be(e),r&4){try{yr(3,e,e.return),ko(3,e)}catch(w){X(e,e.return,w)}try{yr(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Ue(t,e),be(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Ue(t,e),be(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Er(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Nc(i,o),_l(a,l);var u=_l(a,o);for(l=0;l<s.length;l+=2){var m=s[l],d=s[l+1];m==="style"?Ic(i,d):m==="dangerouslySetInnerHTML"?Oc(i,d):m==="children"?Er(i,d):_a(i,m,d,u)}switch(a){case"input":kl(i,o);break;case"textarea":Tc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?zn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?zn(i,!!o.multiple,o.defaultValue,!0):zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Or]=o}catch(w){X(e,e.return,w)}}break;case 6:if(Ue(t,e),be(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(Ue(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Ue(t,e),be(e);break;case 13:Ue(t,e),be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ls=J())),r&4&&Cu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||m,Ue(t,e),pe=u):Ue(t,e),be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(d=N=m;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:yr(4,g,g.return);break;case 1:Pn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:Pn(g,g.return);break;case 22:if(g.memoizedState!==null){ju(d);continue}}v!==null?(v.return=g,N=v):ju(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Lc("display",l))}catch(w){X(e,e.return,w)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){X(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ue(t,e),be(e),r&4&&Cu(e);break;case 21:break;default:Ue(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ld(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Er(i,""),r.flags&=-33);var o=Eu(e);ra(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Eu(e);na(e,a,l);break;default:throw Error(k(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pm(e,t,n){N=e,ud(e)}function ud(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||di;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||pe;a=di;var u=pe;if(di=l,(pe=s)&&!u)for(N=i;N!==null;)l=N,s=l.child,l.tag===22&&l.memoizedState!==null?_u(i):s!==null?(s.return=l,N=s):_u(i);for(;o!==null;)N=o,ud(o),o=o.sibling;N=i,di=a,pe=u}Pu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Pu(e)}}function Pu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&uu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}uu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&_r(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}pe||t.flags&512&&ta(t)}catch(g){X(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ju(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function _u(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ko(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){X(t,i,s)}}var o=t.return;try{ta(t)}catch(s){X(t,o,s)}break;case 5:var l=t.return;try{ta(t)}catch(s){X(t,l,s)}}}catch(s){X(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var jm=Math.ceil,qi=dt.ReactCurrentDispatcher,is=dt.ReactCurrentOwner,Ae=dt.ReactCurrentBatchConfig,A=0,ae=null,q=null,ue=0,_e=0,jn=Dt(0),re=0,Dr=null,on=0,Eo=0,os=0,xr=null,xe=null,ls=0,Bn=1/0,nt=null,eo=!1,ia=null,Tt=null,pi=!1,Et=null,to=0,wr=0,oa=null,ji=-1,_i=0;function ge(){return A&6?J():ji!==-1?ji:ji=J()}function Rt(e){return e.mode&1?A&2&&ue!==0?ue&-ue:um.transition!==null?(_i===0&&(_i=Gc()),_i):(e=D,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function Ge(e,t,n,r){if(50<wr)throw wr=0,oa=null,Error(k(185));Qr(e,n,r),(!(A&2)||e!==ae)&&(e===ae&&(!(A&2)&&(Eo|=n),re===4&&St(e,ue)),Ee(e,r),n===1&&A===0&&!(t.mode&1)&&(Bn=J()+500,xo&&Ft()))}function Ee(e,t){var n=e.callbackNode;uh(e,t);var r=Di(e,e===ae?ue:0);if(r===0)n!==null&&As(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&As(n),t===1)e.tag===0?sm(zu.bind(null,e)):xf(zu.bind(null,e)),im(function(){!(A&6)&&Ft()}),n=null;else{switch(Kc(r)){case 1:n=Oa;break;case 4:n=Hc;break;case 16:n=Mi;break;case 536870912:n=Qc;break;default:n=Mi}n=vd(n,cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cd(e,t){if(ji=-1,_i=0,A&6)throw Error(k(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Di(e,e===ae?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=no(e,r);else{t=r;var i=A;A|=2;var o=dd();(ae!==e||ue!==t)&&(nt=null,Bn=J()+500,Zt(e,t));do try{Nm();break}catch(a){fd(e,a)}while(!0);Qa(),qi.current=o,A=i,q!==null?t=0:(ae=null,ue=0,t=re)}if(t!==0){if(t===2&&(i=Ol(e),i!==0&&(r=i,t=la(e,i))),t===1)throw n=Dr,Zt(e,0),St(e,r),Ee(e,J()),n;if(t===6)St(e,r);else{if(i=e.current.alternate,!(r&30)&&!_m(i)&&(t=no(e,r),t===2&&(o=Ol(e),o!==0&&(r=o,t=la(e,o))),t===1))throw n=Dr,Zt(e,0),St(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Kt(e,xe,nt);break;case 3:if(St(e,r),(r&130023424)===r&&(t=ls+500-J(),10<t)){if(Di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(Kt.bind(null,e,xe,nt),t);break}Kt(e,xe,nt);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jm(r/1960))-r,10<r){e.timeoutHandle=Bl(Kt.bind(null,e,xe,nt),r);break}Kt(e,xe,nt);break;case 5:Kt(e,xe,nt);break;default:throw Error(k(329))}}}return Ee(e,J()),e.callbackNode===n?cd.bind(null,e):null}function la(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=no(e,t),e!==2&&(t=xe,xe=n,t!==null&&aa(t)),e}function aa(e){xe===null?xe=e:xe.push.apply(xe,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ye(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~os,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function zu(e){if(A&6)throw Error(k(327));Ln();var t=Di(e,0);if(!(t&1))return Ee(e,J()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=Ol(e);r!==0&&(t=r,n=la(e,r))}if(n===1)throw n=Dr,Zt(e,0),St(e,t),Ee(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,xe,nt),Ee(e,J()),null}function as(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Bn=J()+500,xo&&Ft())}}function ln(e){Et!==null&&Et.tag===0&&!(A&6)&&Ln();var t=A;A|=1;var n=Ae.transition,r=D;try{if(Ae.transition=null,D=1,e)return e()}finally{D=r,Ae.transition=n,A=t,!(A&6)&&Ft()}}function ss(){_e=jn.current,Q(jn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rm(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Va(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wi();break;case 3:Dn(),Q(Se),Q(he),Ja();break;case 5:Xa(r);break;case 4:Dn();break;case 13:Q(K);break;case 19:Q(K);break;case 10:Ga(r.type._context);break;case 22:case 23:ss()}n=n.return}if(ae=e,q=e=Ot(e.current,null),ue=_e=t,re=0,Dr=null,os=Eo=on=0,xe=xr=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}bt=null}return e}function fd(e,t){do{var n=q;try{if(Qa(),Ei.current=Zi,Ji){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ji=!1}if(rn=0,ie=te=Y=null,vr=!1,$r=0,is.current=null,n===null||n.return===null){re=1,Dr=t,q=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=mu(l);if(v!==null){v.flags&=-257,gu(v,l,a,o,t),v.mode&1&&hu(o,u,t),t=v,s=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){hu(o,u,t),us();break e}s=Error(k(426))}}else if(G&&a.mode&1){var j=mu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),gu(j,l,a,o,t),Wa(Fn(s,a));break e}}o=s=Fn(s,a),re!==4&&(re=2),xr===null?xr=[o]:xr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Yf(o,s,t);su(o,f);break e;case 1:a=s;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tt===null||!Tt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=bf(o,a,t);su(o,y);break e}}o=o.return}while(o!==null)}hd(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function dd(){var e=qi.current;return qi.current=Zi,e===null?Zi:e}function us(){(re===0||re===3||re===2)&&(re=4),ae===null||!(on&268435455)&&!(Eo&268435455)||St(ae,ue)}function no(e,t){var n=A;A|=2;var r=dd();(ae!==e||ue!==t)&&(nt=null,Zt(e,t));do try{zm();break}catch(i){fd(e,i)}while(!0);if(Qa(),A=n,qi.current=r,q!==null)throw Error(k(261));return ae=null,ue=0,re}function zm(){for(;q!==null;)pd(q)}function Nm(){for(;q!==null&&!eh();)pd(q)}function pd(e){var t=gd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?hd(e):q=t,is.current=null}function hd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=km(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,q=null;return}}else if(n=Sm(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);re===0&&(re=5)}function Kt(e,t,n){var r=D,i=Ae.transition;try{Ae.transition=null,D=1,Tm(e,t,n,r)}finally{Ae.transition=i,D=r}return null}function Tm(e,t,n,r){do Ln();while(Et!==null);if(A&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ch(e,o),e===ae&&(q=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pi||(pi=!0,vd(Mi,function(){return Ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var l=D;D=1;var a=A;A|=4,is.current=null,Cm(e,n),sd(n,e),Xh(Dl),Fi=!!Ml,Dl=Ml=null,e.current=n,Pm(n),th(),A=a,D=l,Ae.transition=o}else e.current=n;if(pi&&(pi=!1,Et=e,to=i),o=e.pendingLanes,o===0&&(Tt=null),ih(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=ia,ia=null,e;return to&1&&e.tag!==0&&Ln(),o=e.pendingLanes,o&1?e===oa?wr++:(wr=0,oa=e):wr=0,Ft(),null}function Ln(){if(Et!==null){var e=Kc(to),t=Ae.transition,n=D;try{if(Ae.transition=null,D=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,to=0,A&6)throw Error(k(331));var i=A;for(A|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:yr(8,m,o)}var d=m.child;if(d!==null)d.return=m,N=d;else for(;N!==null;){m=N;var g=m.sibling,v=m.return;if(od(m),m===u){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var c=e.current;for(N=c;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ko(9,a)}}catch(E){X(a,a.return,E)}if(a===l){N=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,N=y;break e}N=a.return}}if(A=i,Ft(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(ho,e)}catch{}r=!0}return r}finally{D=n,Ae.transition=t}}return!1}function Nu(e,t,n){t=Fn(n,t),t=Yf(e,t,1),e=Nt(e,t,1),t=ge(),e!==null&&(Qr(e,1,t),Ee(e,t))}function X(e,t,n){if(e.tag===3)Nu(e,e,n);else for(;t!==null;){if(t.tag===3){Nu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=Fn(n,e),e=bf(t,e,1),t=Nt(t,e,1),e=ge(),t!==null&&(Qr(t,1,e),Ee(t,e));break}}t=t.return}}function Rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>J()-ls?Zt(e,0):os|=n),Ee(e,t)}function md(e,t){t===0&&(e.mode&1?(t=ri,ri<<=1,!(ri&130023424)&&(ri=4194304)):t=1);var n=ge();e=ct(e,t),e!==null&&(Qr(e,t,n),Ee(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),md(e,n)}function Lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),md(e,n)}var gd;gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,wm(e,t,n);we=!!(e.flags&131072)}else we=!1,G&&t.flags&1048576&&wf(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var i=$n(t,he.current);On(t,n),i=qa(null,t,r,e,i,n);var o=es();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Hi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ya(t),i.updater=So,t.stateNode=i,i._reactInternals=t,Kl(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Ua(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$m(r),e=Ve(r,e),i){case 0:t=bl(null,t,r,e,n);break e;case 1:t=xu(null,t,r,e,n);break e;case 11:t=vu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,Ve(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),bl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),xu(e,t,r,i,n);case 3:e:{if(qf(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jf(e,t),bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fn(Error(k(423)),t),t=wu(e,t,r,n,i);break e}else if(r!==i){i=Fn(Error(k(424)),t),t=wu(e,t,r,n,i);break e}else for(ze=zt(t.stateNode.containerInfo.firstChild),Ne=t,G=!0,He=null,n=Cf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===i){t=ft(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return _f(t),e===null&&Hl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Fl(r,i)?l=null:o!==null&&Fl(r,o)&&(t.flags|=32),Zf(e,t),me(e,t,l,n),t.child;case 6:return e===null&&Hl(t),null;case 13:return ed(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),vu(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(Ki,r._currentValue),r._currentValue=l,o!==null)if(Ye(o.value,l)){if(o.children===i.children&&!Se.current){t=ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=at(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ql(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ql(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=Me(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Ve(r,t.pendingProps),i=Ve(r.type,i),yu(e,t,r,i,n);case 15:return Xf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ve(r,i),Pi(e,t),t.tag=1,ke(r)?(e=!0,Hi(t)):e=!1,On(t,n),Kf(t,r,i),Kl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return td(e,t,n);case 22:return Jf(e,t,n)}throw Error(k(156,t.tag))};function vd(e,t){return Wc(e,t)}function Im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Im(e,t,n,r)}function cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $m(e){if(typeof e=="function")return cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Na)return 11;if(e===Ta)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")cs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return qt(n.children,i,o,t);case za:l=8,i|=8;break;case vl:return e=$e(12,n,t,i|2),e.elementType=vl,e.lanes=o,e;case yl:return e=$e(13,n,t,i),e.elementType=yl,e.lanes=o,e;case xl:return e=$e(19,n,t,i),e.elementType=xl,e.lanes=o,e;case jc:return Co(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cc:l=10;break e;case Pc:l=9;break e;case Na:l=11;break e;case Ta:l=14;break e;case yt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=$e(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=$e(22,e,r,t),e.elementType=jc,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Am(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,i,o,l,a,s){return e=new Am(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(o),e}function Mm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yd(e){if(!e)return At;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return yf(e,n,t)}return t}function xd(e,t,n,r,i,o,l,a,s){return e=fs(n,r,!0,e,i,o,l,a,s),e.context=yd(null),n=e.current,r=ge(),i=Rt(n),o=at(r,i),o.callback=t??null,Nt(n,o,i),e.current.lanes=i,Qr(e,i,r),Ee(e,r),e}function Po(e,t,n,r){var i=t.current,o=ge(),l=Rt(i);return n=yd(n),t.context===null?t.context=n:t.pendingContext=n,t=at(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,l),e!==null&&(Ge(e,i,l,o),ki(e,i,l)),l}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ds(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}function Dm(){return null}var wd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ps(e){this._internalRoot=e}jo.prototype.render=ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Po(e,t,null,null)};jo.prototype.unmount=ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Po(null,e,null,null)}),t[ut]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Zc(e)}};function hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Fm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ro(l);o.call(u)}}var l=xd(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=l,e[ut]=l.current,Tr(e.nodeType===8?e.parentNode:e),ln(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ro(s);a.call(u)}}var s=fs(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=s,e[ut]=s.current,Tr(e.nodeType===8?e.parentNode:e),ln(function(){Po(t,s,n,r)}),s}function zo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ro(l);a.call(s)}}Po(t,l,e,i)}else l=Fm(n,t,e,i,r);return ro(l)}Yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(La(t,n|1),Ee(t,J()),!(A&6)&&(Bn=J()+500,Ft()))}break;case 13:ln(function(){var r=ct(e,1);if(r!==null){var i=ge();Ge(r,e,1,i)}}),ds(e,1)}};Ia=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=ge();Ge(t,e,134217728,n)}ds(e,134217728)}};bc=function(e){if(e.tag===13){var t=Rt(e),n=ct(e,t);if(n!==null){var r=ge();Ge(n,e,t,r)}ds(e,t)}};Xc=function(){return D};Jc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Nl=function(e,t,n){switch(t){case"input":if(kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yo(r);if(!i)throw Error(k(90));zc(r),kl(r,i)}}}break;case"textarea":Tc(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Mc=as;Dc=ln;var Bm={usingClientEntryPoint:!1,Events:[Kr,wn,yo,$c,Ac,as]},or={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Um={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{ho=hi.inject(Um),qe=hi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hs(t))throw Error(k(200));return Mm(e,t,null,n)};Re.createRoot=function(e,t){if(!hs(e))throw Error(k(299));var n=!1,r="",i=wd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,Tr(e.nodeType===8?e.parentNode:e),new ps(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return ln(e)};Re.hydrate=function(e,t,n){if(!_o(t))throw Error(k(200));return zo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!hs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=wd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xd(t,null,e,1,n??null,i,!1,o,l),e[ut]=t.current,Tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};Re.render=function(e,t,n){if(!_o(t))throw Error(k(200));return zo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!_o(e))throw Error(k(40));return e._reactRootContainer?(ln(function(){zo(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};Re.unstable_batchedUpdates=as;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return zo(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Sd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sd)}catch(e){console.error(e)}}Sd(),wc.exports=Re;var Vm=wc.exports,kd,Ou=Vm;kd=Ou.createRoot,Ou.hydrateRoot;var le=function(){return le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},le.apply(this,arguments)};function Fr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",Sr="-moz-",M="-webkit-",Ed="comm",No="rule",ms="decl",Wm="@import",Cd="@keyframes",Hm="@layer",Pd=Math.abs,gs=String.fromCharCode,sa=Object.assign;function Qm(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function jd(e){return e.trim()}function rt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Ni(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Un(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function _d(e){return e.length}function cr(e,t){return t.push(e),e}function Gm(e,t){return e.map(t).join("")}function Lu(e,t){return e.filter(function(n){return!rt(n,t)})}var To=1,Vn=1,zd=0,Fe=0,Z=0,Yn="";function Ro(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:To,column:Vn,length:l,return:"",siblings:a}}function vt(e,t){return sa(Ro("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function hn(e){for(;e.root;)e=vt(e.root,{children:[e]});cr(e,e.siblings)}function Km(){return Z}function Ym(){return Z=Fe>0?oe(Yn,--Fe):0,Vn--,Z===10&&(Vn=1,To--),Z}function Ke(){return Z=Fe<zd?oe(Yn,Fe++):0,Vn++,Z===10&&(Vn=1,To++),Z}function en(){return oe(Yn,Fe)}function Ti(){return Fe}function Oo(e,t){return Un(Yn,e,t)}function ua(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bm(e){return To=Vn=1,zd=Je(Yn=e),Fe=0,[]}function Xm(e){return Yn="",e}function cl(e){return jd(Oo(Fe-1,ca(e===91?e+2:e===40?e+1:e)))}function Jm(e){for(;(Z=en())&&Z<33;)Ke();return ua(e)>2||ua(Z)>3?"":" "}function Zm(e,t){for(;--t&&Ke()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return Oo(e,Ti()+(t<6&&en()==32&&Ke()==32))}function ca(e){for(;Ke();)switch(Z){case e:return Fe;case 34:case 39:e!==34&&e!==39&&ca(Z);break;case 40:e===41&&ca(e);break;case 92:Ke();break}return Fe}function qm(e,t){for(;Ke()&&e+Z!==57;)if(e+Z===84&&en()===47)break;return"/*"+Oo(t,Fe-1)+"*"+gs(e===47?e:Ke())}function e0(e){for(;!ua(en());)Ke();return Oo(e,Fe)}function t0(e){return Xm(Ri("",null,null,null,[""],e=bm(e),0,[0],e))}function Ri(e,t,n,r,i,o,l,a,s){for(var u=0,m=0,d=l,g=0,v=0,x=0,w=1,j=1,f=1,c=0,p="",y=i,E=o,C=r,S=p;j;)switch(x=c,c=Ke()){case 40:if(x!=108&&oe(S,d-1)==58){Ni(S+=L(cl(c),"&","&\f"),"&\f",Pd(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=cl(c);break;case 9:case 10:case 13:case 32:S+=Jm(x);break;case 92:S+=Zm(Ti()-1,7);continue;case 47:switch(en()){case 42:case 47:cr(n0(qm(Ke(),Ti()),t,n,s),s);break;default:S+="/"}break;case 123*w:a[u++]=Je(S)*f;case 125*w:case 59:case 0:switch(c){case 0:case 125:j=0;case 59+m:f==-1&&(S=L(S,/\f/g,"")),v>0&&Je(S)-d&&cr(v>32?$u(S+";",r,n,d-1,s):$u(L(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(cr(C=Iu(S,t,n,u,m,i,a,p,y=[],E=[],d,o),o),c===123)if(m===0)Ri(S,t,C,C,y,o,d,a,E);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Ri(e,C,C,r&&cr(Iu(e,C,C,0,0,i,a,p,i,y=[],d,E),E),i,E,d,a,r?y:E);break;default:Ri(S,C,C,C,[""],E,0,a,E)}}u=m=v=0,w=f=1,p=S="",d=l;break;case 58:d=1+Je(S),v=x;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&Ym()==125)continue}switch(S+=gs(c),c*w){case 38:f=m>0?1:(S+="\f",-1);break;case 44:a[u++]=(Je(S)-1)*f,f=1;break;case 64:en()===45&&(S+=cl(Ke())),g=en(),m=d=Je(p=S+=e0(Ti())),c++;break;case 45:x===45&&Je(S)==2&&(w=0)}}return o}function Iu(e,t,n,r,i,o,l,a,s,u,m,d){for(var g=i-1,v=i===0?o:[""],x=_d(v),w=0,j=0,f=0;w<r;++w)for(var c=0,p=Un(e,g+1,g=Pd(j=l[w])),y=e;c<x;++c)(y=jd(j>0?v[c]+" "+p:L(p,/&\f/g,v[c])))&&(s[f++]=y);return Ro(e,t,n,i===0?No:a,s,u,m,d)}function n0(e,t,n,r){return Ro(e,t,n,Ed,gs(Km()),Un(e,2,-2),0,r)}function $u(e,t,n,r,i){return Ro(e,t,n,ms,Un(e,0,r),Un(e,r+1,-1),r,i)}function Nd(e,t,n){switch(Qm(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return Sr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+Sr+e+H+e+e;case 5936:switch(oe(e,t+11)){case 114:return M+e+H+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+H+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+H+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+H+e+e;case 6165:return M+e+H+"flex-"+e+e;case 5187:return M+e+L(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return M+e+H+"flex-item-"+L(e,/flex-|-self/g,"")+(rt(e,/flex-|baseline/)?"":H+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return M+e+H+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+H+L(e,"shrink","negative")+e;case 5292:return M+e+H+L(e,"basis","preferred-size")+e;case 6060:return M+"box-"+L(e,"-grow","")+M+e+H+L(e,"grow","positive")+e;case 4554:return M+L(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!rt(e,/flex-|baseline/))return H+"grid-column-align"+Un(e,t)+e;break;case 2592:case 3360:return H+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,rt(r.props,/grid-\w+-end/)})?~Ni(e+(n=n[t].value),"span",0)?e:H+L(e,"-start","")+e+H+"grid-row-span:"+(~Ni(n,"span",0)?rt(n,/\d+/):+rt(n,/\d+/)-+rt(e,/\d+/))+";":H+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rt(r.props,/grid-\w+-start/)})?e:H+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Sr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ni(e,"stretch",0)?Nd(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return H+i+":"+o+u+(l?H+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(oe(e,t+6)===121)return L(e,":",":"+M)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(oe(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+H+"$2box$3")+e;case 100:return L(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function io(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function r0(e,t,n,r){switch(e.type){case Hm:if(e.children.length)break;case Wm:case ms:return e.return=e.return||e.value;case Ed:return"";case Cd:return e.return=e.value+"{"+io(e.children,r)+"}";case No:if(!Je(e.value=e.props.join(",")))return""}return Je(n=io(e.children,r))?e.return=e.value+"{"+n+"}":""}function i0(e){var t=_d(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function o0(e){return function(t){t.root||(t=t.return)&&e(t)}}function l0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ms:e.return=Nd(e.value,e.length,n);return;case Cd:return io([vt(e,{value:L(e.value,"@","@"+M)})],r);case No:if(e.length)return Gm(n=e.props,function(i){switch(rt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hn(vt(e,{props:[L(i,/:(read-\w+)/,":"+Sr+"$1")]})),hn(vt(e,{props:[i]})),sa(e,{props:Lu(n,r)});break;case"::placeholder":hn(vt(e,{props:[L(i,/:(plac\w+)/,":"+M+"input-$1")]})),hn(vt(e,{props:[L(i,/:(plac\w+)/,":"+Sr+"$1")]})),hn(vt(e,{props:[L(i,/:(plac\w+)/,H+"input-$1")]})),hn(vt(e,{props:[i]})),sa(e,{props:Lu(n,r)});break}return""})}}var a0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Wn=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",Td="active",Rd="data-styled-version",Lo="6.1.19",vs=`/*!sc*/
`,oo=typeof window<"u"&&typeof document<"u",s0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),u0={},Io=Object.freeze([]),Hn=Object.freeze({});function Od(e,t,n){return n===void 0&&(n=Hn),e.theme!==n.theme&&e.theme||t||n.theme}var Ld=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),c0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,f0=/(^-|-$)/g;function Au(e){return e.replace(c0,"-").replace(f0,"")}var d0=/(a)(d)/gi,mi=52,Mu=function(e){return String.fromCharCode(e+(e>25?39:97))};function fa(e){var t,n="";for(t=Math.abs(e);t>mi;t=t/mi|0)n=Mu(t%mi)+n;return(Mu(t%mi)+n).replace(d0,"$1-$2")}var fl,Id=5381,_n=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$d=function(e){return _n(Id,e)};function Ad(e){return fa($d(e)>>>0)}function p0(e){return e.displayName||e.name||"Component"}function dl(e){return typeof e=="string"&&!0}var Md=typeof Symbol=="function"&&Symbol.for,Dd=Md?Symbol.for("react.memo"):60115,h0=Md?Symbol.for("react.forward_ref"):60112,m0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v0=((fl={})[h0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fl[Dd]=Fd,fl);function Du(e){return("type"in(t=e)&&t.type.$$typeof)===Dd?Fd:"$$typeof"in e?v0[e.$$typeof]:m0;var t}var y0=Object.defineProperty,x0=Object.getOwnPropertyNames,Fu=Object.getOwnPropertySymbols,w0=Object.getOwnPropertyDescriptor,S0=Object.getPrototypeOf,Bu=Object.prototype;function Bd(e,t,n){if(typeof t!="string"){if(Bu){var r=S0(t);r&&r!==Bu&&Bd(e,r,n)}var i=x0(t);Fu&&(i=i.concat(Fu(t)));for(var o=Du(e),l=Du(t),a=0;a<i.length;++a){var s=i[a];if(!(s in g0||n&&n[s]||l&&s in l||o&&s in o)){var u=w0(t,s);try{y0(e,s,u)}catch{}}}}return e}function an(e){return typeof e=="function"}function ys(e){return typeof e=="object"&&"styledComponentId"in e}function Jt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function da(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Br(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pa(e,t,n){if(n===void 0&&(n=!1),!n&&!Br(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pa(e[r],t[r]);else if(Br(t))for(var r in t)e[r]=pa(e[r],t[r]);return e}function xs(e,t){Object.defineProperty(e,"toString",{value:t})}function sn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var k0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw sn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(vs);return n},e}(),Oi=new Map,lo=new Map,Li=1,gi=function(e){if(Oi.has(e))return Oi.get(e);for(;lo.has(Li);)Li++;var t=Li++;return Oi.set(e,t),lo.set(t,e),t},E0=function(e,t){Li=t+1,Oi.set(e,t),lo.set(t,e)},C0="style[".concat(Wn,"][").concat(Rd,'="').concat(Lo,'"]'),P0=new RegExp("^".concat(Wn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),j0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},_0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(vs),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(P0);if(s){var u=0|parseInt(s[1],10),m=s[2];u!==0&&(E0(m,u),j0(e,m,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Uu=function(e){for(var t=document.querySelectorAll(C0),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Wn)!==Td&&(_0(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function z0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ud=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Wn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wn,Td),r.setAttribute(Rd,Lo);var l=z0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},N0=function(){function e(t){this.element=Ud(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw sn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),T0=function(){function e(t){this.element=Ud(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),R0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vu=oo,O0={isServer:!oo,useCSSOMInjection:!s0},ao=function(){function e(t,n,r){t===void 0&&(t=Hn),n===void 0&&(n={});var i=this;this.options=le(le({},O0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oo&&Vu&&(Vu=!1,Uu(this)),xs(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(d){var g=function(f){return lo.get(f)}(d);if(g===void 0)return"continue";var v=o.names.get(g),x=l.getGroup(d);if(v===void 0||!v.size||x.length===0)return"continue";var w="".concat(Wn,".g").concat(d,'[id="').concat(g,'"]'),j="";v!==void 0&&v.forEach(function(f){f.length>0&&(j+="".concat(f,","))}),s+="".concat(x).concat(w,'{content:"').concat(j,'"}').concat(vs)},m=0;m<a;m++)u(m);return s}(i)})}return e.registerId=function(t){return gi(t)},e.prototype.rehydrate=function(){!this.server&&oo&&Uu(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(le(le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new R0(i):r?new N0(i):new T0(i)}(this.options),new k0(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(gi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(gi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),L0=/&/g,I0=/^\s*\/\/.*$/gm;function Vd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Vd(n.children,t)),n})}function $0(e){var t,n,r,i=Hn,o=i.options,l=o===void 0?Hn:o,a=i.plugins,s=a===void 0?Io:a,u=function(g,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},m=s.slice();m.push(function(g){g.type===No&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(L0,n).replace(r,u))}),l.prefix&&m.push(l0),m.push(r0);var d=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(I0,""),f=t0(x||v?"".concat(x," ").concat(v," { ").concat(j," }"):j);l.namespace&&(f=Vd(f,l.namespace));var c=[];return io(f,i0(m.concat(o0(function(p){return c.push(p)})))),c};return d.hash=s.length?s.reduce(function(g,v){return v.name||sn(15),_n(g,v.name)},Id).toString():"",d}var A0=new ao,ha=$0(),Wd=ne.createContext({shouldForwardProp:void 0,styleSheet:A0,stylis:ha});Wd.Consumer;ne.createContext(void 0);function ma(){return _.useContext(Wd)}var M0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ha);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xs(this,function(){throw sn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ha),this.name+t.hash},e}(),D0=function(e){return e>="A"&&e<="Z"};function Wu(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;D0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hd=function(e){return e==null||e===!1||e===""},Qd=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Hd(o)&&(Array.isArray(o)&&o.isCss||an(o)?r.push("".concat(Wu(i),":"),o,";"):Br(o)?r.push.apply(r,Fr(Fr(["".concat(i," {")],Qd(o),!1),["}"],!1)):r.push("".concat(Wu(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in a0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Lt(e,t,n,r){if(Hd(e))return[];if(ys(e))return[".".concat(e.styledComponentId)];if(an(e)){if(!an(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Lt(i,t,n,r)}var o;return e instanceof M0?n?(e.inject(n,r),[e.getName(r)]):[e]:Br(e)?Qd(e):Array.isArray(e)?Array.prototype.concat.apply(Io,e.map(function(l){return Lt(l,t,n,r)})):[e.toString()]}function Gd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(an(n)&&!ys(n))return!1}return!0}var F0=$d(Lo),B0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gd(t),this.componentId=n,this.baseHash=_n(F0,n),this.baseStyle=r,ao.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Jt(i,this.staticRulesId);else{var o=da(Lt(this.rules,t,n,r)),l=fa(_n(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Jt(i,l),this.staticRulesId=l}else{for(var s=_n(this.baseHash,r.hash),u="",m=0;m<this.rules.length;m++){var d=this.rules[m];if(typeof d=="string")u+=d;else if(d){var g=da(Lt(d,t,n,r));s=_n(s,g+m),u+=g}}if(u){var v=fa(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Jt(i,v)}}return i},e}(),Ur=ne.createContext(void 0);Ur.Consumer;function U0(e){var t=ne.useContext(Ur),n=_.useMemo(function(){return function(r,i){if(!r)throw sn(14);if(an(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw sn(8);return i?le(le({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ne.createElement(Ur.Provider,{value:n},e.children):null}var pl={};function V0(e,t,n){var r=ys(e),i=e,o=!dl(e),l=t.attrs,a=l===void 0?Io:l,s=t.componentId,u=s===void 0?function(y,E){var C=typeof y!="string"?"sc":Au(y);pl[C]=(pl[C]||0)+1;var S="".concat(C,"-").concat(Ad(Lo+C+pl[C]));return E?"".concat(E,"-").concat(S):S}(t.displayName,t.parentComponentId):s,m=t.displayName,d=m===void 0?function(y){return dl(y)?"styled.".concat(y):"Styled(".concat(p0(y),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Au(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;x=function(y,E){return w(y,E)&&j(y,E)}}else x=w}var f=new B0(n,g,r?i.componentStyle:void 0);function c(y,E){return function(C,S,T){var U=C.attrs,I=C.componentStyle,Ce=C.defaultProps,Ut=C.foldedComponentIds,Vt=C.styledComponentId,Xr=C.target,Ao=ne.useContext(Ur),Xn=ma(),Wt=C.shouldForwardProp||Xn.shouldForwardProp,z=Od(S,Ao,Ce)||Hn,R=function(ht,Pe,tt){for(var Jn,Qt=le(le({},Pe),{className:void 0,theme:tt}),Mo=0;Mo<ht.length;Mo+=1){var Jr=an(Jn=ht[Mo])?Jn(Qt):Jn;for(var mt in Jr)Qt[mt]=mt==="className"?Jt(Qt[mt],Jr[mt]):mt==="style"?le(le({},Qt[mt]),Jr[mt]):Jr[mt]}return Pe.className&&(Qt.className=Jt(Qt.className,Pe.className)),Qt}(U,S,z),O=R.as||Xr,F={};for(var B in R)R[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&R.theme===z||(B==="forwardedAs"?F.as=R.forwardedAs:Wt&&!Wt(B,O)||(F[B]=R[B]));var Ht=function(ht,Pe){var tt=ma(),Jn=ht.generateAndInjectStyles(Pe,tt.styleSheet,tt.stylis);return Jn}(I,R),Be=Jt(Ut,Vt);return Ht&&(Be+=" "+Ht),R.className&&(Be+=" "+R.className),F[dl(O)&&!Ld.has(O)?"class":"className"]=Be,T&&(F.ref=T),_.createElement(O,F)}(p,y,E)}c.displayName=d;var p=ne.forwardRef(c);return p.attrs=v,p.componentStyle=f,p.displayName=d,p.shouldForwardProp=x,p.foldedComponentIds=r?Jt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=g,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(E){for(var C=[],S=1;S<arguments.length;S++)C[S-1]=arguments[S];for(var T=0,U=C;T<U.length;T++)pa(E,U[T],!0);return E}({},i.defaultProps,y):y}}),xs(p,function(){return".".concat(p.styledComponentId)}),o&&Bd(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Hu(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Qu=function(e){return Object.assign(e,{isCss:!0})};function Kd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(an(e)||Br(e))return Qu(Lt(Hu(Io,Fr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Lt(r):Qu(Lt(Hu(r,t)))}function ga(e,t,n){if(n===void 0&&(n=Hn),!t)throw sn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Kd.apply(void 0,Fr([i],o,!1)))};return r.attrs=function(i){return ga(e,t,le(le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ga(e,t,le(le({},n),i))},r}var Yd=function(e){return ga(V0,e)},P=Yd;Ld.forEach(function(e){P[e]=Yd(e)});var W0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gd(t),ao.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(da(Lt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ao.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function H0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Kd.apply(void 0,Fr([e],t,!1)),i="sc-global-".concat(Ad(JSON.stringify(r))),o=new W0(r,i),l=function(s){var u=ma(),m=ne.useContext(Ur),d=ne.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,s,u.styleSheet,m,u.stylis),ne.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,s,u.styleSheet,m,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,m,u.stylis]),null};function a(s,u,m,d,g){if(o.isStatic)o.renderStyles(s,u0,m,g);else{var v=le(le({},u),{theme:Od(u,d,l.defaultProps)});o.renderStyles(s,v,m,g)}}return ne.memo(l)}/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const Gu="popstate";function Q0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return va("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:so(i)}return K0(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function G0(){return Math.random().toString(36).substr(2,8)}function Ku(e,t){return{usr:e.state,key:e.key,idx:t}}function va(e,t,n,r){return n===void 0&&(n=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bn(t):t,{state:n,key:t&&t.key||r||G0()})}function so(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function K0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ct.Pop,s=null,u=m();u==null&&(u=0,l.replaceState(Vr({},l.state,{idx:u}),""));function m(){return(l.state||{idx:null}).idx}function d(){a=Ct.Pop;let j=m(),f=j==null?null:j-u;u=j,s&&s({action:a,location:w.location,delta:f})}function g(j,f){a=Ct.Push;let c=va(w.location,j,f);u=m()+1;let p=Ku(c,u),y=w.createHref(c);try{l.pushState(p,"",y)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(y)}o&&s&&s({action:a,location:w.location,delta:1})}function v(j,f){a=Ct.Replace;let c=va(w.location,j,f);u=m();let p=Ku(c,u),y=w.createHref(c);l.replaceState(p,"",y),o&&s&&s({action:a,location:w.location,delta:0})}function x(j){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof j=="string"?j:so(j);return c=c.replace(/ $/,"%20"),ee(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,l)},listen(j){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Gu,d),s=j,()=>{i.removeEventListener(Gu,d),s=null}},createHref(j){return t(i,j)},createURL:x,encodeLocation(j){let f=x(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(j){return l.go(j)}};return w}var Yu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yu||(Yu={}));function Y0(e,t,n){return n===void 0&&(n="/"),b0(e,t,n,!1)}function b0(e,t,n,r){let i=typeof t=="string"?bn(t):t,o=ws(i.pathname||"/",n);if(o==null)return null;let l=Xd(e);X0(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=ag(o);a=og(l[s],u,r)}return a}function Xd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(ee(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=It([r,s.relativePath]),m=n.concat(s);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xd(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rg(u,o.index),routesMeta:m})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of Jd(o.path))i(o,l,s)}),t}function Jd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Jd(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function X0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ig(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J0=/^:[\w-]+$/,Z0=3,q0=2,eg=1,tg=10,ng=-2,bu=e=>e==="*";function rg(e,t){let n=e.split("/"),r=n.length;return n.some(bu)&&(r+=ng),t&&(r+=q0),n.filter(i=>!bu(i)).reduce((i,o)=>i+(J0.test(o)?Z0:o===""?eg:tg),r)}function ig(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function og(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",d=Xu({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},m),g=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Xu({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},m)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:It([o,d.pathname]),pathnameBase:fg(It([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=It([o,d.pathnameBase]))}return l}function Xu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,m,d)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let w=a[d]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[d];return v&&!x?u[g]=void 0:u[g]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function lg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ag(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ws(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function sg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?bn(e):e;return{pathname:n?n.startsWith("/")?n:ug(n,t):t,search:dg(r),hash:pg(i)}}function ug(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zd(e,t){let n=cg(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=bn(e):(i=Vr({},e),ee(!i.pathname||!i.pathname.includes("?"),hl("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),hl("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),hl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let d=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}a=d>=0?t[d]:"/"}let s=sg(i,a),u=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||m)&&(s.pathname+="/"),s}const It=e=>e.join("/").replace(/\/\/+/g,"/"),fg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ep=["post","put","patch","delete"];new Set(ep);const mg=["get",...ep];new Set(mg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(this,arguments)}const Ss=_.createContext(null),gg=_.createContext(null),fn=_.createContext(null),$o=_.createContext(null),dn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),tp=_.createContext(null);function vg(e,t){let{relative:n}=t===void 0?{}:t;br()||ee(!1);let{basename:r,navigator:i}=_.useContext(fn),{hash:o,pathname:l,search:a}=ip(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:It([r,l])),i.createHref({pathname:s,search:a,hash:o})}function br(){return _.useContext($o)!=null}function pt(){return br()||ee(!1),_.useContext($o).location}function np(e){_.useContext(fn).static||_.useLayoutEffect(e)}function rp(){let{isDataRoute:e}=_.useContext(dn);return e?Tg():yg()}function yg(){br()||ee(!1);let e=_.useContext(Ss),{basename:t,future:n,navigator:r}=_.useContext(fn),{matches:i}=_.useContext(dn),{pathname:o}=pt(),l=JSON.stringify(Zd(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return np(()=>{a.current=!0}),_.useCallback(function(u,m){if(m===void 0&&(m={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=qd(u,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:It([t,d.pathname])),(m.replace?r.replace:r.push)(d,m.state,m)},[t,r,l,o,e])}function ip(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(fn),{matches:i}=_.useContext(dn),{pathname:o}=pt(),l=JSON.stringify(Zd(i,r.v7_relativeSplatPath));return _.useMemo(()=>qd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function xg(e,t){return wg(e,t)}function wg(e,t,n,r){br()||ee(!1);let{navigator:i}=_.useContext(fn),{matches:o}=_.useContext(dn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=pt(),m;if(t){var d;let j=typeof t=="string"?bn(t):t;s==="/"||(d=j.pathname)!=null&&d.startsWith(s)||ee(!1),m=j}else m=u;let g=m.pathname||"/",v=g;if(s!=="/"){let j=s.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=Y0(e,{pathname:v}),w=Pg(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:It([s,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?s:It([s,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&w?_.createElement($o.Provider,{value:{location:Wr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ct.Pop}},w):w}function Sg(){let e=Ng(),t=hg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const kg=_.createElement(Sg,null);class Eg extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(dn.Provider,{value:this.props.routeContext},_.createElement(tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cg(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Ss);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(dn.Provider,{value:t},r)}function Pg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=l.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);m>=0||ee(!1),l=l.slice(0,Math.min(l.length,m+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let d=l[m];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=m),d.route.id){let{loaderData:g,errors:v}=n,x=d.route.loader&&g[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||x){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((m,d,g)=>{let v,x=!1,w=null,j=null;n&&(v=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||kg,s&&(u<0&&g===0?(x=!0,j=null):u===g&&(x=!0,j=d.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),c=()=>{let p;return v?p=w:x?p=j:d.route.Component?p=_.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=m,_.createElement(Cg,{match:d,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?_.createElement(Eg,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(op||{}),uo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(uo||{});function jg(e){let t=_.useContext(Ss);return t||ee(!1),t}function _g(e){let t=_.useContext(gg);return t||ee(!1),t}function zg(e){let t=_.useContext(dn);return t||ee(!1),t}function lp(e){let t=zg(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function Ng(){var e;let t=_.useContext(tp),n=_g(uo.UseRouteError),r=lp(uo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Tg(){let{router:e}=jg(op.UseNavigateStable),t=lp(uo.UseNavigateStable),n=_.useRef(!1);return np(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wr({fromRouteId:t},o)))},[e,t])}function Rg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function fr(e){ee(!1)}function Og(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:o,static:l=!1,future:a}=e;br()&&ee(!1);let s=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:s,navigator:o,static:l,future:Wr({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=bn(r));let{pathname:m="/",search:d="",hash:g="",state:v=null,key:x="default"}=r,w=_.useMemo(()=>{let j=ws(m,s);return j==null?null:{location:{pathname:j,search:d,hash:g,state:v,key:x},navigationType:i}},[s,m,d,g,v,x,i]);return w==null?null:_.createElement(fn.Provider,{value:u},_.createElement($o.Provider,{children:n,value:w}))}function Lg(e){let{children:t,location:n}=e;return xg(ya(t),n)}new Promise(()=>{});function ya(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,ya(r.props.children,o));return}r.type!==fr&&ee(!1),!r.props.index||!r.props.children||ee(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ya(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}function Ig(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function $g(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ag(e,t){return e.button===0&&(!t||t==="_self")&&!$g(e)}const Mg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dg="6";try{window.__reactRouterVersion=Dg}catch{}const Fg="startTransition",Ju=Rp[Fg];function Bg(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=Q0({window:i,v5Compat:!0}));let l=o.current,[a,s]=_.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},m=_.useCallback(d=>{u&&Ju?Ju(()=>s(d)):s(d)},[s,u]);return _.useLayoutEffect(()=>l.listen(m),[l,m]),_.useEffect(()=>Rg(r),[r]),_.createElement(Og,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Ug=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ks=_.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:m,viewTransition:d}=t,g=Ig(t,Mg),{basename:v}=_.useContext(fn),x,w=!1;if(typeof u=="string"&&Vg.test(u)&&(x=u,Ug))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=ws(y.pathname,v);y.origin===p.origin&&E!=null?u=E+y.search+y.hash:w=!0}catch{}let j=vg(u,{relative:i}),f=Wg(u,{replace:l,state:a,target:s,preventScrollReset:m,relative:i,viewTransition:d});function c(p){r&&r(p),p.defaultPrevented||f(p)}return _.createElement("a",xa({},g,{href:x||j,onClick:w||o?r:c,ref:n,target:s}))});var Zu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zu||(Zu={}));var qu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qu||(qu={}));function Wg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=rp(),u=pt(),m=ip(e,{relative:l});return _.useCallback(d=>{if(Ag(d,n)){d.preventDefault();let g=r!==void 0?r:so(u)===so(m);s(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,m,r,i,n,e,o,l,a])}const Hg={colors:{primary:"#1a365d",primaryLight:"#2c5282",secondary:"#38b2ac",secondaryLight:"#4fd1c5",accent:"#48bb78",background:"#f7fafc",backgroundDark:"#0d1b2a",text:"#2d3748",textLight:"#718096",white:"#ffffff",gray:{100:"#f7fafc",200:"#edf2f7",300:"#e2e8f0",400:"#cbd5e0",500:"#a0aec0",600:"#718096",700:"#4a5568",800:"#2d3748",900:"#1a202c"}},fonts:{primary:"'Poppins', sans-serif",secondary:"'Inter', sans-serif"},breakpoints:{mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1280px"},shadows:{small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 12px rgba(0, 0, 0, 0.15)",large:"0 8px 24px rgba(0, 0, 0, 0.2)"},transitions:{fast:"0.2s ease",medium:"0.3s ease",slow:"0.5s ease"}},Qg=H0`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
    touch-action: pan-y;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.text};
    background-color: ${({theme:e})=>e.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }
`;function Gg(){return h.jsxs(Kg,{children:[h.jsx(Yg,{src:"/Vídeo inicial.mp4",muted:!0,autoPlay:!0,loop:!0,playsInline:!0}),h.jsx(bg,{children:h.jsxs(Xg,{children:["Conectando você ",h.jsx("br",{}),h.jsx("span",{children:"a mais de 20 anos"})]})})]})}const Kg=P.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
`,Yg=P.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center; /* desktop padrão */

  @media (max-width: 768px) {
    object-position: 30% center; /* 👈 joga o foco pra esquerda */
  }

  @media (max-width: 480px) {
    object-position: 75% center; /* 👈 ainda mais foco nas pessoas */
  }
`,bg=P.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  padding-left: 6rem;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.2),
    transparent
  );

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`,Xg=P.h1`
  color: #ffffff;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.2;
  max-width: 520px;

span {
  background: linear-gradient(
    to right,        /* vindo da direita */
    #00ff66 0%,     /* verde do site */
    #00ff66 60%,
    rgba(0, 0, 0, 0.8) 130% /* preto suave */
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-weight: bold;
}



  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ap=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=_.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:l,...a},s)=>_.createElement("svg",{ref:s,...Zg,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ap("lucide",i),...a},[...l.map(([u,m])=>_.createElement(u,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(e,t)=>{const n=_.forwardRef(({className:r,...i},o)=>_.createElement(qg,{ref:o,iconNode:t,className:ap(`lucide-${Jg(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=Bt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=Bt("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=Bt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=Bt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Bt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Bt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Bt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function i1(){const e=["Bananal","Arapeí","Vassouras","São José do Barreiro","Resende","Cachoeira Paulista","Valença","Visconde de Mauá"],t=e.slice(0,5),n=e.slice(5,8);return h.jsx(h.Fragment,{children:h.jsx(o1,{id:"cobertura",children:h.jsxs(l1,{children:[h.jsx("h2",{children:"Nossas Lojas"}),h.jsx(ec,{children:t.map(r=>h.jsxs(tc,{to:"/cobertura",children:[h.jsx(wa,{size:18}),r]},r))}),h.jsx(ec,{children:n.map(r=>h.jsxs(tc,{to:"/cobertura",children:[h.jsx(wa,{size:18}),r]},r))})]})})})}const o1=P.section`
  padding: 5rem 2rem;

  @media (max-width: 1024px) {
    height: 400px;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    height: auto; /* 🔥 IMPORTANTE */
  }
`,ec=P.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  /* 📱 MOBILE */
  @media (max-width: 480px) {
   flex-wrap: wrap;
  justify-content: center;
  }
`,l1=P.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem; /* Desktop */
    margin-bottom: 1rem;
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* 📱 Mobile/Tablet */
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem; /* Alterado de 2rem para 1.7rem */
      line-height: 1.2; /* Adicionado para evitar que as linhas fiquem grudadas */
      
    }
  }
`,tc=P(ks)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  padding: 0.7rem 1.4rem;
  border-radius: 0.5rem;

  font-size: 0.95rem;
  font-weight: bolder;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }

  svg {
    color: #ffffff;
  }
  @media (max-width: 1024px) {
    min-width: 200px; /* 🔥 PADRONIZA TAMANHO */
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
      font-size: 1rem;
  min-width: 45%; 
  }
`;function a1(){return h.jsx(h.Fragment,{children:h.jsxs(s1,{children:[h.jsx(u1,{children:h.jsxs(f1,{children:[h.jsx("h2",{children:"Explore nossas opções de conectividade empresarial"}),h.jsx("p",{children:"Descubra como nossos planos de internet podem impulssionar sua empresa para um futuro digital"})]})}),h.jsxs(c1,{children:[h.jsxs(d1,{href:"https://pulsetelecom.conecte.ai/?cupom=site",target:"_blank",rel:"noopener noreferrer",children:["Soluções corporativas",h.jsx("span",{className:"arrow",children:h.jsx(sp,{size:18})})]}),h.jsx(p1,{children:h.jsx("video",{src:"Soluções Corporativas.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]})]})})}const s1=P.section.attrs({id:"solucoes-corporativas"})`
  scroll-margin-top: 130px;
  padding: 5rem 0; /* 🔥 remove padding lateral */
  background: ${({theme:e})=>e.colors.gray[100]};
`,u1=P.div`
  width: 100%;
`,c1=P.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  /* TABLET + MOBILE */
@media (max-width: 1024px) {
  min-height: auto;
  padding-bottom: 2rem; /* controla o espaço sem quebrar layout */
  flex-direction: column;
  text-align: center;
}

`,f1=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;
 max-width: 100%;

  /* ===== DESKTOP ===== */
  h2 {
    font-size: 2.9rem; /* 🖥 desktop (INALTERADO) */
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 500;
    font-size: 18px; /* 🖥 desktop (INALTERADO) */
    text-align: center;
    white-space: nowrap;
    display: block;
  }

  /* ===== TABLET REAL ===== */
  @media (min-width: 769px) and (max-width: 1024px) {
    h2 {
      font-size: 3rem;
    }

    p {
      white-space: normal;
      font-size: 2.3rem;
    }
  }

  /* ===== MOBILE ===== */
  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    padding: 0 20px;

    h2 {
      font-size: 2rem;
      line-height: 1.1;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.4;
      max-width: 100%;
      white-space: normal;
    }
  }
`,d1=P.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  width: 38%; /* 🖥 desktop INALTERADO */
  height: 80px; /* 🖥 desktop INALTERADO */

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  color: #ffffff;
  font-size: 20px; /* 🖥 desktop INALTERADO */
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    order: 2;
     .arrow {
      display: none;
    }
  }

  /* 📱 Mobile */
  @media (max-width: 768px) {
   width: 82%;
    height: 58px;
    font-size: 1.1rem;

    .arrow {
      display: none;
    }
  }
`,p1=P.div`
  width: 100%;
  max-width: 520px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    width: 85%;
  }

  /* 📱 Mobile */
  @media (max-width: 600px) {
    width: 95%;
    border-radius: 14px;
  }

  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;function h1(){return h.jsx(h.Fragment,{children:h.jsxs(m1,{children:[h.jsxs(g1,{children:[h.jsx(v1,{children:h.jsxs("h1",{children:["Descubra o poder ",h.jsx("br",{}),"de uma conexão perfeita ",h.jsx("br",{}),h.jsx("span",{children:"e transforme o seu jeito"})," ",h.jsx("br",{}),h.jsx("span",{children:"de aproveitar a internet."})]})}),h.jsx(y1,{children:h.jsxs("p",{children:["Escolha a ",h.jsx("strong",{children:"Pulse"})," e tenha uma experiência incomparável de internet e entretenimento. Junte-se a milhares de clientes satisfeitos que confiam em nossa infraestrutura de última geração."]})})]}),h.jsx(x1,{children:h.jsx(w1,{href:"https://api.whatsapp.com/send?phone=551231165043",target:"_blank",rel:"noopener noreferrer",children:"Chamar no WhatsApp agora"})})]})})}const m1=P.section`
  width: 95%;
  padding: 4.5rem 2rem;
  border-radius: 32px;
  background: linear-gradient(135deg, #0b1a6e, #2d2df5);
  color: #ffffff;
  @media (max-width: 1024px) {
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 480px) {
    height: 700px;
    padding: 2rem 1rem;
  }
`,g1=P.div`
  max-width: 1280px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: end; /* 🖥 PC OK */

  /* 📱 TABLET + MOBILE */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    align-items: flex-start; /* 🔥 sobe o conteúdo */
    text-align: center;
  }
`,v1=P.div`
  width: 100%;
  margin-bottom: 0.8rem; /* 🔥 separação bonita */

  h1 {
    font-size: 2.8rem;
    line-height: 1.2;
    font-weight: 700;
    text-align: right;

    span {
      color: #02f711;
    }

    /* 📱 TABLET */
    @media (max-width: 900px) {
      font-size: 3.3rem;
      text-align: center;
      max-width: 100%;
      word-break: normal;
      overflow-wrap: break-word;
    }

    /* 📱 MOBILE */
    @media (max-width: 480px) {
      font-size: 1.6rem;
      line-height: 1.25;
  
      white-space: normal;
      word-break: keep-all;
  
      /* 🔥 REMOVE SOMENTE O PRIMEIRO <br> */
      br:first-of-type {
        display: none;
      }
    }
  }
`,y1=P.div`
  width: 100%;
  margin-top: 0.5rem;
  p {
    font-size: 1.5rem; /* 🖥 PC INALTERADO */
    line-height: 1.4;
    opacity: 0.95;
    font-weight: 300;

    strong {
      color: #19ff28;
    }

    /* 📱 TABLET */
    @media (max-width: 1024px) {
      font-size: 2.3rem;
    }

    /* 📱 MOBILE */
    @media (max-width: 480px) {
      font-size: 1.3rem;
      line-height: 1.6;
    
    }
  }
`,x1=P.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`,w1=P.a`
  background: #ffffff;
  color: #2241ef;
  padding: 0.5rem 2.4rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px; /* 🖥 PC INALTERADO */
  text-decoration: none;
  transition: all 0.25s ease;

  width: 30%; /* 🖥 PC INALTERADO */
  height: 70px; /* 🖥 PC INALTERADO */

  display: inline-flex;
  justify-content: center;
  align-items: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
  }

  /* 📱 TABLET */
   @media (max-width: 1024px) {
    width: 80%;
    height: 80px;
    font-size: 2rem;
    order: 2;
  }

  /* 📱 MOBILE */
  @media (max-width: 480px) {
    width: 100%;
    height: 58px;
    font-size: 1.1rem;
  }
`;var fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},nc=ne.createContext&&ne.createContext(fp),S1=["attr","size","title"];function k1(e,t){if(e==null)return{};var n=E1(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E1(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}function rc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rc(Object(n),!0).forEach(function(r){C1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function C1(e,t,n){return t=P1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P1(e){var t=j1(e,"string");return typeof t=="symbol"?t:t+""}function j1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dp(e){return e&&e.map((t,n)=>ne.createElement(t.tag,fo({key:n},t.attr),dp(t.child)))}function _1(e){return t=>ne.createElement(z1,co({attr:fo({},e.attr)},t),dp(e.child))}function z1(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=k1(e,S1),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ne.createElement("svg",co({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:fo(fo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ne.createElement("title",null,o),e.children)};return nc!==void 0?ne.createElement(nc.Consumer,null,n=>t(n)):t(fp)}function pp(e){return _1({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}const N1=()=>{const[e,t]=_.useState(!1),n=pt(),r=rp(),i=()=>{t(!1);const s=()=>{const u=document.getElementById("residencial");u==null||u.scrollIntoView({behavior:"smooth",block:"start"})};n.pathname==="/"?setTimeout(s,300):(r("/"),setTimeout(s,600))},o=()=>{t(!1),r("/#solucoes-corporativas")},a=[{label:"Sobre nós",action:()=>r("/sobre")},{label:"Soluções residenciais",action:i},{label:"Soluções corporativas",action:o},{label:"Cobertura",action:()=>{t(!1);const s=()=>{const u=document.getElementById("cobertura");u==null||u.scrollIntoView({behavior:"smooth",block:"start"})};n.pathname==="/"?setTimeout(s,300):(r("/"),setTimeout(s,500))}}];return h.jsxs(R1,{children:[h.jsxs(O1,{children:[h.jsx(L1,{to:"/",children:h.jsx("img",{src:"/Logo Pulse.png",alt:"Pulse Telecom"})}),h.jsxs(I1,{children:[h.jsx(oc,{to:"/sobre",$active:n.pathname==="/sobre",children:"Sobre nós"}),h.jsx(ic,{onClick:i,children:"Soluções residenciais"}),h.jsx(ic,{onClick:o,children:"Soluções corporativas"}),h.jsx(oc,{to:"/cobertura",$active:n.pathname==="/cobertura",children:"Cobertura"})]}),h.jsxs($1,{children:[h.jsxs(A1,{children:[h.jsxs(D1,{target:"_blank",rel:"noopener noreferrer",href:" https://erp.brasil-ip.net/central_assinante_web/login",children:[h.jsx(n1,{size:14})," Área do cliente"]}),h.jsx(ml,{target:"_blank",rel:"noopener noreferrer",href:"https://api.whatsapp.com/send?phone=551231165043",children:h.jsx(pp,{size:18})}),h.jsx(ml,{target:"_blank",rel:"noopener noreferrer",href:" https://www.facebook.com/pulsetelecom.sp",children:h.jsx(up,{size:16})}),h.jsx(ml,{target:"_blank",rel:"noopener noreferrer",href:" https://www.instagram.com/pulse_telecom_/",children:h.jsx(cp,{size:16})})]}),h.jsx(lc,{href:" https://pulsetelecom.conecte.ai/?cupom=site-novo-2026",target:"_blank",rel:"noopener noreferrer",children:"Assine já!"})]}),h.jsx(F1,{onClick:()=>t(!e),$open:e,children:e?h.jsx(r1,{size:28}):h.jsx(e1,{size:28})})]}),h.jsxs(B1,{$open:e,children:[a.map(s=>h.jsx(T1,{onClick:()=>{t(!1),s.action()},children:s.label},s.label)),h.jsx(M1,{target:"_blank",rel:"noopener noreferrer",href:" https://erp.brasil-ip.net/central_assinante_web/login",children:"Área do cliente"}),h.jsx(lc,{href:" https://pulsetelecom.conecte.ai/?cupom=site-novo-2026",target:"_blank",rel:"noopener noreferrer",children:"Assine já!"})]})]})},T1=P.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #00ff66;
  }

  /* ✅ MOBILE REAL */
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
    @media (min-width: 800px) and (max-width: 1024px) {
    font-size: 1.7rem;
  }
`,ic=P.button`
  background: none;
  border: none;
  cursor: pointer;

  color: #fff;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #00ff66;
  }
`,R1=P.nav`
  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  height: 110px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`,O1=P.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`,L1=P(ks)`
  img {
    width: 180px;
  }
`,I1=P.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`,oc=P(ks)`
  color: ${({$active:e})=>e?"#00ff66":"#fff"};
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: #00ff66;
  }

`,$1=P.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;

  @media (max-width: 1024px) {
    display: none;
    
  }
`,A1=P.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #fff;
  font-size: 0.85rem;
`,M1=P.a`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
 @media (max-width: 1024PX) {
    font-size: 1.7rem;
  }
  /* ✅ MOBILE REAL */
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,D1=P.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #fff;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,ml=P.a`
  color: #fff;
  display: flex;
`,lc=P.a`
  background: linear-gradient(
    to right,
    #00ff3b 0%,
    #00ff3b 70%,
    rgba(0, 0, 0, 0.25) 150%
  );

  color: #ffffff;
  font-weight: 700;
  padding: 0.6rem 1.4rem;
  border-radius: 0.7rem;
  text-decoration: none;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.95);
  }

  /* 📱 Tablet (INALTERADO) */
  @media (max-width: 1024px) {
    margin-top: 1rem;
    width: 35%;
    height: 60px;
     font-size: 1.9rem;
  }
  
  @media (max-width: 768px) {
  font-size: 0.85rem;   /* 🔽 tamanho ideal */
width:50%;
height: 50px;
}
`,F1=P.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  transition: transform 0.4s ease;

  transform: rotate(${({$open:e})=>e?"90deg":"0deg"});

  @media (max-width: 1024px) {
    display: block;
  }
`,B1=P.div`
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;

  background: linear-gradient(180deg, #0b1a6e, #1f2fbf);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding: 2rem 1rem;

  opacity: ${({$open:e})=>e?1:0};
  transform: ${({$open:e})=>e?"translateY(0)":"translateY(-20px)"};

  pointer-events: ${({$open:e})=>e?"auto":"none"};

  transition: all 0.4s ease;

  z-index: 999; /* 🔥 CORREÇÃO SOBREPOSIÇÃO */

  /* ✅ MOBILE REAL */
  @media (max-width: 768px) {
    button,
    a {
      font-size: 1.3rem;
    }
  }
`,U1=()=>{const t=pt().pathname==="/sobre";return h.jsx(V1,{children:h.jsxs(W1,{children:[h.jsxs(H1,{children:[!t&&h.jsxs(h.Fragment,{children:[h.jsx("h2",{children:"Sobre nós"}),h.jsx("p",{children:"Nascemos para levar conectividade de qualidade a todos. Somos uma equipe comprometida em oferecer uma experiência positiva, unindo tecnologia de ponta a um atendimento ético, transparente e profissional."}),h.jsx("br",{})]}),h.jsx("h3",{children:h.jsx("a",{href:"/contrato.pdf",target:"_blank",rel:"noopener noreferrer",children:"Contrato de prestação de serviços"})}),h.jsx("p",{className:"cnpj",children:"PULSE GESTÃO DE DADOS LTDA 07.054.431/0001-80"})]}),h.jsx(Q1,{children:h.jsxs(K1,{children:[h.jsx("img",{src:"/Logo Pulse.png",alt:"Logo Pulse"}),h.jsxs(G1,{children:[h.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://api.whatsapp.com/send?phone=551231165043",children:h.jsx(pp,{size:24})}),h.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/pulse_telecom_/",children:h.jsx(cp,{size:22})}),h.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/pulsetelecom.sp",children:h.jsx(up,{size:22})})]})]})}),h.jsxs(Y1,{children:[h.jsx("h2",{children:"Nossos contatos"}),h.jsxs(ac,{children:[h.jsx(t1,{size:20}),h.jsx("span",{children:"(12) 3003 - 5640"})]}),h.jsx(ac,{children:h.jsx("span",{children:"(12) 3116 - 5043"})})]})]})})},V1=P.section`
  background: linear-gradient(90deg, #0b1a6e 0%, #1f2fbf 50%, #1225c7 100%);
  padding: 4rem 2rem;
  color: #ffffff;
`,W1=P.div`
  max-width: 100%px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`,H1=P.div`
  h2 {
    font-size: 50px;
    margin-bottom: 1rem;
    font-weight: bolder;
  }

  p {
    line-height: 1.5;
    max-width: 340px;
    color: #e5e7eb;
    font-weight: 500;
  }

  p.cnpj {
    margin-top: 5px;
    font-size: 10px;
  }

  /* ===== TABLET (somente) ===== */
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      font-size: 25px;
    }

    p {
      text-align: center;
    }

    p.cnpj {
      text-align: center;
      font-size: 15px;
      max-width: 100%;
    }
  }

  /* ===== MOBILE (mantido) ===== */
  @media (max-width: 900px) {
    p:first-of-type {
      margin: 0 auto;
      text-align: center;
      font-size: 1.2rem;
      max-width: 90%;
    }
  }
`,Q1=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`,G1=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`,K1=P.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 👈 CENTRALIZA TUDO */
  justify-content: center;
  gap: 1rem;

  a {
    color: #ffffff;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #00ff66;
  }

  img {
    width: 400px;
    max-width: 100%;
    margin-bottom: 0.5rem;

    @media (max-width: 900px) {
      width: 280px;
    }

    @media (max-width: 480px) {
      width: 220px;
    }
  }
`,Y1=P.div`
  text-align: right;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`,ac=P.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`,b1=P.main`
  min-height: 100vh;
  padding-top: 80px;
`,Es=({children:e})=>h.jsxs(h.Fragment,{children:[h.jsx(N1,{}),h.jsx(b1,{children:e}),h.jsx(U1,{})]});function X1(){return h.jsx(h.Fragment,{children:h.jsx(J1,{id:"residencial",children:h.jsxs(Z1,{children:[h.jsxs(q1,{children:[h.jsx("h1",{children:"A melhor experiência ao seu alcance com o Wi-Fi 6"}),h.jsxs("p",{children:["Experimente a velocidade incomparável de até ",h.jsx("strong",{children:"1 GIGA"}),"  com a nossa rede Wi-Fi 6. Navegue, transmita e jogue online de forma mais rápida e eficiente. Tenha a melhor internet do mercado ao seu alcance."]}),h.jsxs(ev,{href:"https://pulsetelecom.conecte.ai/?cupom=site",target:"_blank",rel:"noopener noreferrer",children:["Soluções residenciais ",h.jsx(sp,{size:18})]})]}),h.jsxs(tv,{children:[h.jsx(nv,{children:h.jsx("video",{src:"/Home Office.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})}),h.jsx(rv,{children:h.jsx("video",{src:" /Videogame.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})})]})]})})})}const J1=P.section`
  padding: 5rem 2rem;
  background: ${({theme:e})=>e.colors.white};
  scroll-margin-top: 120px;
 @media (max-width: 1024px) {
  height: 900px;
  display: flex;
  align-items: center;
  }
  @media (max-width: 768px) {
    height: 700px;
    }
`,Z1=P.div`
max-width:90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,q1=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   max-width: 100%;
  /* NÃO mexemos no desktop */

  h1 {
 
    font-size: 3rem;
    margin-bottom: 1.2rem;
    font-weight: bold;

    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* TABLET */
    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 3rem;
      max-width: 90%;
      text-align: center;
    }

    /* MOBILE */
    @media (max-width: 768px) {
      font-size: 38px;
      line-height: 1.1;
      max-width: 96%;
      text-align: center;
    }
  }

  && p {
    font-size: 1.5rem;
    max-width: 100%;
    margin-bottom: 2rem;

    /* TABLET */
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.3rem;
      max-width: 80%;
      text-align: center;
    }

    /* MOBILE */
    @media (max-width: 767px) {
      height: 200px;
      font-size: 1.1rem;
      max-width: 100%;
      text-align: center;
    }
  }
`,ev=P.a`
 display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  width: 50%; /* 🖥 desktop INALTERADO */
  height: 80px; /* 🖥 desktop INALTERADO */

  background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
  color: #ffffff;
  font-size: 20px; /* 🖥 desktop INALTERADO */
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  /* ===== TABLET ===== */
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 2rem;
    height: 80px;
    svg {
      display: none; /* 🔥 some a seta */
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 58px;
    font-size: 1.1rem;

    svg {
      display: none; /* 🔥 some a seta */
    }
  }
  /* ===== MOBILE ===== */
`,tv=P.div`
  position: relative;
  width: 420px;
  height: 420px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    display: none;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 300px;
    display: none;
  }
`,nv=P.div`
  position: relative;
  z-index: 3;
  left: 130px;
  video {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 40px;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      
    }
  }
    @media (max-width: 1024px) {
    display: none;
  }
`,rv=P.div`
  position: absolute;
  bottom: -50px;
  left: 40px;
  z-index: 2;

  video {
    width: 250px;
    height: 220px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    left: 23%;
    bottom: 10%;
    transform: translateX(-50%);

    video {
      width: 180px;
      height: 120px;
    }
  }
`,iv="/Elemento%20Gr%C3%A1fico%20Chip%20Pulse.png",ov="/Elemento%20Gr%C3%A1fico%20Telefone%20Fixo.png";function lv(){return h.jsx(h.Fragment,{children:h.jsxs(av,{children:[h.jsx(sv,{}),h.jsxs(uv,{children:[h.jsxs(cv,{children:[h.jsx(fv,{src:iv,alt:"Chip Pulse"}),h.jsx(dv,{src:ov,alt:"Telefone Fixo Pulse"})]}),h.jsxs(pv,{children:[h.jsx("h2",{children:"Tenha uma conexão completa"}),h.jsx("p",{children:"Conectividade completa para o seu dia a dia. Oferecemos telefonia fixa com chamadas nítidas e rede móvel 5G com ultravelocidade para você ficar sempre online. A solução ideal para casa, escritório e onde mais você for."}),h.jsx(hv,{href:"https://pulsetelecom.conecte.ai/?cupom=site",children:"Soluções para comunicação"})]})]})]})})}const av=P.section`
  position: relative;
  overflow: hidden;

  background: linear-gradient(90deg, #0b1a6e 0%, #1f2fbf 50%, #1225c7 100%);
  padding: 6rem 2rem;

  @media (max-width: 1024px) {
    height: 900px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    height: 700px;
    display: flex;
  }
  `,sv=P.div`
  position: absolute;
  inset: 0;

  background-image: url("/Elemento Gráfico Pulse.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 180%;
  opacity: 0.8;
  z-index: 1;
  @media (max-width: 728px) {
    background-size: 300%; /* aumenta bastante */
    opacity: 0.5;
  }
  @media (min-width: 728px) and (max-width: 1024px) {
    background-size: 240%;
    opacity: 0.5;
  }
`,uv=P.div`
  position: relative;
  z-index: 2;

width: 90%;
  margin: 0 auto;
  width: 100%;

  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (min-width: 728px) and (max-width: 1024px) {
  grid-template-columns: 1fr;
    gap: 0.1rem; /* 👈 bem menor no mobile */
    text-align: center;
  }
  @media (max-width: 728px) {
  grid-template-columns: 1fr;
  justify-items: center; /* 🔥 centraliza tudo dentro do grid */
}

`,cv=P.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

    @media (max-width: 900px) {
    display: none;
  }
`,fv=P.img`
  width: 500px;
  position: absolute;
  top: -100px;
  transform: rotate(-8deg);

  @media (max-width: 900px) {
    position: static;
    width: 280px;
    transform: none;
    transform: rotate(-8deg);
  }
    @media (min-width: 728px) and (max-width: 1024px) {
 display: none;
}
`,dv=P.img`
  width: 500px;
  position: relative;
  top: 80px;

  @media (max-width: 728px) {
    width: 320px;
    top: -60px;
  }
  @media (min-width: 728px) and (max-width: 1024px) {
 display: none;
}

`,pv=P.div`
  width: 100%;
  color: #ffffff;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }

    @media (min-width: 728px) and (max-width: 1024px) {
      font-size: 3.5rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.7;
    max-width: 520px;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
      margin: 0 auto 2rem;
      text-align: center;
      font-size: 1.3rem;
    }

    @media (min-width: 728px) and (max-width: 1024px) {
      max-width: 90%;
      margin: 0 auto 2rem;
      font-size: 2.3rem;
      text-align: center;
    }
  }

  /* 🔥 ISSO CENTRALIZA O BOTÃO DE VERDADE */
  @media (max-width: 900px) {
    align-items: center;
  }

  @media (min-width: 728px) and (max-width: 1024px) {
    align-items: center;
  }
`,hv=P.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 63%; /* 🖥 desktop INALTERADO */
  height: 80px; /* 🖥 desktop INALTERADO */
  background: #ffffff;
  color: #1f2fbf;
  font-weight: 600;
font-size: 20px;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.3s ease;
   white-space: nowrap;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  
  /* ✅ TABLET */
  @media (min-width: 820px) and (max-width: 1024px) {
    width: 75%;
    font-size: 2rem;
    height: 80px;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 58px;
    font-size: 1rem;

    white-space: nowrap; /* 🔥 impede quebrar linha */
  }
`,mv=()=>{const e=pt();return _.useEffect(()=>{if(e.hash){const t=e.hash.replace("#",""),n=document.getElementById(t);n==null||n.scrollIntoView({behavior:"smooth",block:"start"})}},[e]),h.jsxs(Es,{children:[h.jsx(vv,{children:h.jsx(Gg,{})}),h.jsx(X1,{}),h.jsx(lv,{}),h.jsxs(gv,{children:[h.jsx(a1,{}),h.jsx(h1,{}),h.jsx(i1,{})]})]})},gv=P.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,vv=P.div`
  @media (max-width: 1024px) {
    img {
      width: 500px; /* celular / tablet */
      height: 180px;
    }
  }
`,yv=()=>h.jsx(Es,{children:h.jsx(xv,{children:h.jsx(wv,{children:h.jsx(Sv,{children:h.jsxs(kv,{children:[h.jsxs("h2",{children:["Quem somos ",h.jsx("span",{children:"nós ?"})]}),h.jsxs(Pv,{children:[h.jsx(sc,{children:h.jsx("img",{src:"/PulseLogoNatal.jpg",alt:"Imagem institucional Pulse Telecom"})}),h.jsx("p",{children:"Nascemos para levar conectividade de qualidade a todos. Somos uma equipe comprometida em oferecer uma experiência positiva, unindo tecnologia de ponta a um atendimento ético, transparente e profissional. Buscamos ser a referência em telecom na sua região, garantindo um serviço de excelência, com preço justo e o respeito que você merece em cada conexão."})]}),h.jsx(Ev,{children:"Unimos tecnologia de ponta, infraestrutura moderna e soluções inovadoras a um atendimento ético, transparente e humano, sempre focado nas reais necessidades de nossos clientes. Trabalhamos diariamente para garantir desempenho, segurança e confiabilidade, porque entendemos que estar conectado é estar presente no mundo. Nosso compromisso vai além da instalação, buscamos construir relações duradouras, baseadas na confiança, no respeito e na excelência. É assim que transformamos tecnologia em qualidade de vida e conexão em resultados reais"}),h.jsxs(Cv,{children:[h.jsx("p",{children:"Nosso compromisso vai além da instalação: buscamos construir relações duradouras, baseadas na confiança, no respeito e na excelência. É assim que transformamos tecnologia em qualidade de vida e conexão em resultados reais."}),h.jsx(sc,{children:h.jsx("img",{src:"/mulher-celular.PNG",alt:"Mulher usando celular"})})]})]})})})})}),xv=P.section`

  padding: 5rem 2rem;
  background: ${({theme:e})=>e.colors.white};
`,wv=P.div`
width: 100%;
  margin: 0 auto;
`,Sv=P.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,kv=P.div`
  h2 {
    font-size: 2.8rem;
    text-align: center; /* 👈 centraliza */
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  p {
    color: #0b1a6e;

    margin-bottom: 1rem;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.8rem;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    h2 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobile}) {
    h2 {
      font-size: 2rem;
    }
  }
`,Ev=P.p`
  && {
    font-size: 20px;
    flex: 1;
    margin: 0;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    color: #fff;
    @media (max-width: 480px) {
  font-size: 1.3rem;

  text-align: center;   /* ← TROQUE justify por left */
  line-height: 1.7;

  word-spacing: normal;
  letter-spacing: normal;
}
  }
`,Cv=P.div`
  display: flex;
  align-items: center; /* 👈 topo */
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 20px;
    flex: 1;
    margin: 0;
    
@media (max-width: 480px) {
  font-size: 1.3rem;

   text-align: center;   /* ← TROQUE justify por left */
  line-height: 1.7;

  word-spacing: normal;
  letter-spacing: normal;
}
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    
  }
`,Pv=P.div`
  display: flex;
  align-items: center; /* 👈 topo */
  justify-content: center;
  gap: 2rem;

p {
  font-size: 20px;
  flex: 1;
  margin: 0;
  line-height: 1.6;

@media (max-width: 480px) {
  font-size: 1.3rem;

  text-align: center;  /* ← TROQUE justify por left */
  line-height: 1.7;

  word-spacing: normal;
  letter-spacing: normal;
}
}



  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`,sc=P.div`
  width: 250px; /* controla o tamanho */
  flex-shrink: 0; /* impede de esmagar */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 2rem;
    object-fit: contain;
    margin: 20px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 230px;
    display: none;
  }
`,jv=()=>{const[e,t]=_.useState(null),n=[{name:"Bananal",state:"São Paulo",address:"Rua Manoel de Aguiar, 181, Centro, Bananal - SP"},{name:"Arapeí",state:"São Paulo",address:"Avenida Sebastião Angelo da Costa, 435 - Centro - Arapeí/SP"},{name:"Vassouras",state:"Rio de Janeiro",address:"Praça Martinho Nóbrega, 10, loja 7 - Centro, Vassouras - RJ"},{name:"São José do Barreiro",state:"São Paulo",address:"Rua Doutor Olimpio Alves Magalhães, 07, Centro, São José do Barreiro - SP",extraSpace:!0},{name:"Resende",state:"Rio de Janeiro",address:"Avenida Perimetral Norte, 1012, Nova Alegria, Resende - RJ"},{name:"Cachoeira Paulista",state:"São Paulo",address:"Av. Sarah Kubitschek, 37, Cachoeira Paulista - SP, 12630-000",extraSpace:!0},{name:"Valença",state:"Rio de Janeiro",address:"Praça Martinho Nóbrega, 10, loja 7 - Centro, Vassouras - RJ"},{name:"Visconde de Mauá",state:"Rio de Janeiro",address:"RJ-151, Itatiaia - RJ, 27580-000 - Maringá RJ em frente ao bar do Ted"}];return h.jsxs(Es,{children:[h.jsx(_v,{children:h.jsxs(zv,{children:[h.jsxs(Nv,{children:[h.jsx("h2",{children:"Cidades Atendidas"}),h.jsx("p",{children:"Estamos presentes em 6 cidades da região"})]}),h.jsx(Tv,{children:n.map((r,i)=>h.jsxs(Rv,{onClick:()=>t(e===i?null:i),children:[h.jsx(Lv,{children:h.jsx(wa,{size:36})}),h.jsx(Iv,{children:r.name}),h.jsx($v,{children:r.state}),e===i&&h.jsx(Ov,{$extra:r.extraSpace,children:r.address})]},i))})]})}),h.jsxs(Av,{children:[h.jsx("h2",{children:"Quer saber se atendemos sua região?"}),h.jsx("p",{children:"Entre em contato conosco e descubra se podemos levar internet de qualidade até você!"}),h.jsx(Mv,{children:h.jsx(Dv,{href:"https://api.whatsapp.com/send?phone=551231165043&text=Olá%21%20Gostaria%20de%20saber%20se%20voc%C3%AAs%20atendem%20minha%20regi%C3%A3o.",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"})})]})]})},_v=P.section`
  padding: 5rem 2rem;
  background: ${({theme:e})=>e.colors.gray[100]};
`,zv=P.div`
  max-width: 1280px;
  margin: 0 auto;
`,Nv=P.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
  }

  p {
    color: ${({theme:e})=>e.colors.textLight};
    font-size: 1.125rem;
  }
`,Tv=P.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas */
  gap: 2rem;
  align-items: start;

  /* tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }

  /* mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 coluna */
  }
`,Rv=P.div`
  position: relative;
  background: ${({$active:e})=>e?"#1f2fbf":"#0b1a6e"};
  border-radius: 1.25rem;
  padding: 2.5rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  overflow: visible; /* IMPORTANTE */
  min-height: 275px;
  &:hover {
    background: #1f2fbf;
    transform: translateY(-4px);
  }
  @media (max-width: 480px) {


}
`,Ov=P.div`
  position: absolute;
  left: 1rem;
top: ${({$extra:e})=>e?"13.6rem":"12.6rem"};
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  width: 90%;
  font-size: 0.7rem;
  line-height: 1.4;
  color: #ffffff;
  padding: 10px;
  animation: fadeUp 0.3s ease;
  z-index: 5;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Lv=P.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 1.25rem;

  border-radius: 50%;
  background: ${({$active:e})=>e?"#00ff66":"#ffffff"};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({$active:e})=>e?"#0b1a6e":"#1f2fbf"};
  }

  transition: all 0.3s ease;
`,Iv=P.h3`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
`,$v=P.p`
  color: #c7d2fe;
  margin-bottom: 1rem;
`,Av=P.section`
  padding: 5rem 2rem;
  background: ${({theme:e})=>e.colors.gray[100]};
  text-align: center;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    font-weight: bold;
    background: linear-gradient(90deg, #0b1a6e, #1f2fbf, #3b4cff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${({theme:e})=>e.colors.primary};
    font-size: 1.15rem;
    opacity: 0.9;
    margin-bottom: 2.5rem;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }
`,Mv=P.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`,Dv=P.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  background: #0dff00; /* verde Pulse */
  color: #0b1a6e; /* azul escuro para contraste */

  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 255, 102, 0.35);
  }
`,Fv=()=>{const e=pt();return _.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),h.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:h.jsxs("div",{className:"text-center",children:[h.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),h.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),h.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})};function Bv(){const{pathname:e}=pt();return _.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),null}const Uv=()=>h.jsxs(U0,{theme:Hg,children:[h.jsx(Qg,{}),h.jsxs(Bg,{children:[h.jsx(Bv,{}),h.jsxs(Lg,{children:[h.jsx(fr,{path:"/",element:h.jsx(mv,{})}),h.jsx(fr,{path:"/sobre",element:h.jsx(yv,{})}),h.jsx(fr,{path:"/cobertura",element:h.jsx(jv,{})}),h.jsx(fr,{path:"*",element:h.jsx(Fv,{})})]})]})]});kd(document.getElementById("root")).render(h.jsx(Uv,{}));
