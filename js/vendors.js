
/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.4-beta.32
 */
!function webpackUniversalModuleDefinition(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory();else if("function"==typeof define&&define.amd)define([],factory);else{var a=factory();for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(window,function(){return modules=[function(module){module.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}')},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,generateMaskSet=__webpack_require__(4).generateMaskSet,analyseMask=__webpack_require__(4).analyseMask,maskScope=__webpack_require__(8);function Inputmask(alias,options,internal){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.el=void 0,this.events={},this.maskset=void 0,!0!==internal&&($.isPlainObject(alias)?options=alias:(options=options||{},alias&&(options.alias=alias)),this.opts=$.extend(!0,{},this.defaults,options),this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},resolveAlias(this.opts.alias,options,this.opts),this.isRTL=this.opts.numericInput),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0}function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),$.extend(!0,opts,aliasDefinition),$.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1)}function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){var attrOption=""===dataAttribute?option:dataAttribute+"-"+option;optionData=void 0!==optionData?optionData:npt.getAttribute(attrOption),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=window[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData)}if(!0===opts.importDataAttributes){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(/'/g,'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions)for(p in optionData=void 0,dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break}for(option in importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts),opts){if(dataoptions)for(p in optionData=void 0,dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}importOption(option,optionData)}}return $.extend(!0,opts,userOptions),"rtl"!==npt.dir&&!opts.rightAlign||(npt.style.textAlign="right"),"rtl"!==npt.dir&&!opts.numericInput||(npt.dir="ltr",npt.removeAttribute("dir"),opts.isRTL=!0),Object.keys(userOptions).length}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:{_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:$.noop,onincomplete:$.noop,oncleared:$.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:$.noop,onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return $.isFunction(opts.onBeforeMask)?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:$.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0},definitions:{9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}},aliases:{},masksCache:{},mask:function mask(elems){var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){var scopedOpts=$.extend(!0,{},that.opts);if(importAttributeOptions(el,scopedOpts,$.extend(!0,{},that.userOptions),that.dataAttribute)){var maskset=generateMaskSet(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&(el.inputmask.opts.autoUnmask=!0,el.inputmask.remove()),el.inputmask=new Inputmask(void 0,void 0,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=$.extend(!0,{},that.userOptions),el.inputmask.isRTL=scopedOpts.isRTL||scopedOpts.numericInput,el.inputmask.el=el,el.inputmask.$el=$(el),el.inputmask.maskset=maskset,$.data(el,"_inputmask_opts",that.userOptions),maskScope.call(el.inputmask,{action:"mask"}))}}),elems&&elems[0]&&elems[0].inputmask||this},option:function option(options,noremask){return"string"==typeof options?this.opts[options]:"object"===_typeof(options)?($.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"unmaskedvalue",value:value})},remove:function remove(){return maskScope.call(this,{action:"remove"})},getemptymask:function getemptymask(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getemptymask"})},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isComplete"})},getmetadata:function getmetadata(){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"getmetadata"})},isValid:function isValid(value){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"isValid",value:value})},format:function format(value,metadata){return this.maskset=this.maskset||generateMaskSet(this.opts,this.noMasksCache),maskScope.call(this,{action:"format",value:value,metadata:metadata})},setValue:function setValue(value){this.el&&$(this.el).trigger("setvalue",[value])},analyseMask:analyseMask},Inputmask.extendDefaults=function(options){$.extend(!0,Inputmask.prototype.defaults,options)},Inputmask.extendDefinitions=function(definition){$.extend(!0,Inputmask.prototype.definitions,definition)},Inputmask.extendAliases=function(alias){$.extend(!0,Inputmask.prototype.aliases,alias)},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)},Inputmask.remove=function(elems){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask&&el.inputmask.remove()})},Inputmask.setValue=function(elems,value){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,$.each(elems,function(ndx,el){el.inputmask?el.inputmask.setValue(value):$(el).trigger("setvalue",[value])})},Inputmask.dependencyLib=$,window.Inputmask=Inputmask,module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__WEBPACK_AMD_DEFINE_RESULT__=function(){return"undefined"!=typeof window?window:new(eval("require('jsdom').JSDOM"))("").window}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var window=__webpack_require__(2),document=window.document;function indexOf(list,elem){for(var i=0,len=list.length;i<len;i++)if(list[i]===elem)return i;return-1}function isWindow(obj){return null!=obj&&obj===obj.window}function isArraylike(obj){var length="length"in obj&&obj.length,ltype=_typeof(obj);return"function"!==ltype&&!isWindow(obj)&&(!(1!==obj.nodeType||!length)||("array"===ltype||0===length||"number"==typeof length&&0<length&&length-1 in obj))}function isValidElement(elem){return elem instanceof Element}function DependencyLib(elem){return elem instanceof DependencyLib?elem:this instanceof DependencyLib?void(null!=elem&&elem!==window&&(this[0]=elem.nodeName?elem:void 0!==elem[0]&&elem[0].nodeName?elem[0]:document.querySelector(elem),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new DependencyLib(elem)}DependencyLib.prototype={on:function on(events,handler){function addEvent(ev,namespace){elem.addEventListener?elem.addEventListener(ev,handler,!1):elem.attachEvent&&elem.attachEvent("on"+ev,handler),eventRegistry[ev]=eventRegistry[ev]||{},eventRegistry[ev][namespace]=eventRegistry[ev][namespace]||[],eventRegistry[ev][namespace].push(handler)}if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events=events.split(" "),endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";addEvent(ev,namespace)}return this},off:function off(events,handler){var eventRegistry,elem;function removeEvent(ev,namespace,handler){if(ev in eventRegistry==!0)if(elem.removeEventListener?elem.removeEventListener(ev,handler,!1):elem.detachEvent&&elem.detachEvent("on"+ev,handler),"global"===namespace)for(var nmsp in eventRegistry[ev])eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler),1);else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler),1)}function resolveNamespace(ev,namespace){var evts=[],hndx,hndL;if(0<ev.length)if(void 0===handler)for(hndx=0,hndL=eventRegistry[ev][namespace].length;hndx<hndL;hndx++)evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:eventRegistry[ev][namespace][hndx]});else evts.push({ev:ev,namespace:namespace&&0<namespace.length?namespace:"global",handler:handler});else if(0<namespace.length)for(var evNdx in eventRegistry)for(var nmsp in eventRegistry[evNdx])if(nmsp===namespace)if(void 0===handler)for(hndx=0,hndL=eventRegistry[evNdx][nmsp].length;hndx<hndL;hndx++)evts.push({ev:evNdx,namespace:nmsp,handler:eventRegistry[evNdx][nmsp][hndx]});else evts.push({ev:evNdx,namespace:nmsp,handler:handler});return evts}if(isValidElement(this[0])){eventRegistry=this[0].eventRegistry,elem=this[0];for(var _events=events.split(" "),endx=0;endx<_events.length;endx++)for(var nsEvent=_events[endx].split("."),offEvents=resolveNamespace(nsEvent[0],nsEvent[1]),i=0,offEventsL=offEvents.length;i<offEventsL;i++)removeEvent(offEvents[i].ev,offEvents[i].namespace,offEvents[i].handler)}return this},trigger:function trigger(events,argument_1){if(isValidElement(this[0]))for(var eventRegistry=this[0].eventRegistry,elem=this[0],_events="string"==typeof events?events.split(" "):[events.type],endx=0;endx<_events.length;endx++){var nsEvent=_events[endx].split("."),ev=nsEvent[0],namespace=nsEvent[1]||"global";if(void 0!==document&&"global"===namespace){var evnt,i,params={bubbles:!0,cancelable:!0,detail:argument_1};if(document.createEvent){try{evnt=new CustomEvent(ev,params)}catch(e){evnt=document.createEvent("CustomEvent"),evnt.initCustomEvent(ev,params.bubbles,params.cancelable,params.detail)}events.type&&DependencyLib.extend(evnt,events),elem.dispatchEvent(evnt)}else evnt=document.createEventObject(),evnt.eventType=ev,evnt.detail=argument_1,events.type&&DependencyLib.extend(evnt,events),elem.fireEvent("on"+evnt.eventType,evnt)}else if(void 0!==eventRegistry[ev])if(events=events.type?events:DependencyLib.Event(events),events.detail=arguments.slice(1),"global"===namespace)for(var nmsp in eventRegistry[ev])for(i=0;i<eventRegistry[ev][nmsp].length;i++)eventRegistry[ev][nmsp][i].apply(elem,arguments);else for(i=0;i<eventRegistry[ev][namespace].length;i++)eventRegistry[ev][namespace][i].apply(elem,arguments)}return this}},DependencyLib.isFunction=function(obj){return"function"==typeof obj},DependencyLib.noop=function(){},DependencyLib.isArray=Array.isArray,DependencyLib.inArray=function(elem,arr,i){return null==arr?-1:indexOf(arr,elem,i)},DependencyLib.valHooks=void 0,DependencyLib.isPlainObject=function(obj){return"object"===_typeof(obj)&&!obj.nodeType&&!isWindow(obj)&&!(obj.constructor&&!Object.hasOwnProperty.call(obj.constructor.prototype,"isPrototypeOf"))},DependencyLib.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=!1;for("boolean"==typeof target&&(deep=target,target=arguments[i]||{},i++),"object"===_typeof(target)||DependencyLib.isFunction(target)||(target={}),i===length&&(target=this,i--);i<length;i++)if(null!=(options=arguments[i]))for(name in options)src=target[name],copy=options[name],target!==copy&&(deep&&copy&&(DependencyLib.isPlainObject(copy)||(copyIsArray=DependencyLib.isArray(copy)))?(clone=copyIsArray?(copyIsArray=!1,src&&DependencyLib.isArray(src)?src:[]):src&&DependencyLib.isPlainObject(src)?src:{},target[name]=DependencyLib.extend(deep,clone,copy)):void 0!==copy&&(target[name]=copy));return target},DependencyLib.each=function(obj,callback){var value,i=0;if(isArraylike(obj))for(var length=obj.length;i<length&&(value=callback.call(obj[i],i,obj[i]),!1!==value);i++);else for(i in obj)if(value=callback.call(obj[i],i,obj[i]),!1===value)break;return obj},DependencyLib.data=function(owner,key,value){if(void 0===value)return owner.__data?owner.__data[key]:null;owner.__data=owner.__data||{},owner.__data[key]=value},"function"==typeof window.CustomEvent?DependencyLib.Event=window.CustomEvent:(DependencyLib.Event=function(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0};var evt=document.createEvent("CustomEvent");return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt},DependencyLib.Event.prototype=window.Event.prototype),module.exports=DependencyLib},function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(3);function generateMaskSet(opts,nocache){var ms;function generateMask(mask,metadata,opts){var regexMask=!1,masksetDefinition,maskdefKey;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,mask=regexMask?(mask=opts.regex,mask.replace(/^(\^)(.*)(\$)$/,"$2")):(regexMask=!0,".*")),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),0<opts.repeat||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}return maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask,!1!==opts.keepStatic&&(maskdefKey="ks_"+maskdefKey),void 0===Inputmask.prototype.masksCache[maskdefKey]||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:metadata,maskLength:void 0,jitOffset:{}},!0!==nocache&&(Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition,masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]))):masksetDefinition=$.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]),masksetDefinition}if($.isFunction(opts.mask)&&(opts.mask=opts.mask(opts)),$.isArray(opts.mask)){if(1<opts.mask.length){null===opts.keepStatic&&(opts.keepStatic=!0);var altMask=opts.groupmarker[0];return $.each(opts.isRTL?opts.mask.reverse():opts.mask,function(ndx,msk){1<altMask.length&&(altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]),void 0===msk.mask||$.isFunction(msk.mask)?altMask+=msk:altMask+=msk.mask}),altMask+=opts.groupmarker[1],generateMask(altMask,opts.mask,opts)}opts.mask=opts.mask.pop()}return null===opts.keepStatic&&(opts.keepStatic=!1),ms=opts.mask&&void 0!==opts.mask.mask&&!$.isFunction(opts.mask.mask)?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts),ms}function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,closeRegexGroup=!1;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.alternatorGroup=!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask)0===element.indexOf("[")||escaped&&/\\d|\\s|\\w]/i.test(element)||"."===element?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element,casing:null,def:element,placeholder:void 0,nativeDef:element}):(escaped&&(element=element[element.length-1]),$.each(element.split(""),function(ndx,lmnt){prevMatch=mtoken.matches[position-1],mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||lmnt)?new RegExp("["+(opts.staticDefinitionSymbol||lmnt)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==lmnt&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:void 0!==opts.staticDefinitionSymbol?lmnt:void 0,nativeDef:(escaped?"'":"")+lmnt})})),escaped=!1;else{var maskdef=(opts.definitions?opts.definitions[element]:void 0)||Inputmask.prototype.definitions[element];maskdef&&!escaped?mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),static:maskdef.static||!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element,generated:maskdef.generated}):(mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||element)?new RegExp("["+(opts.staticDefinitionSymbol||element)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:(escaped?"'":"")+element}),escaped=!1)}}function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&$.each(maskToken.matches,function(ndx,token){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker[0],0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker[1]))),verifyGroupMarker(token)})}function defaultCase(){if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup&&(alternator.matches[mndx].isGroup=!1);0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else insertTestDefinition(currentToken,m)}function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker[0]?st=opts.optionalmarker[1]:st===opts.optionalmarker[1]?st=opts.optionalmarker[0]:st===opts.groupmarker[0]?st=opts.groupmarker[1]:st===opts.groupmarker[1]&&(st=opts.groupmarker[0]),st}for(var match in maskToken.matches=maskToken.matches.reverse(),maskToken.matches)if(Object.prototype.hasOwnProperty.call(maskToken.matches,match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt)}void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match])}return maskToken}function groupify(matches){var groupToken=new MaskToken(!0);return groupToken.openGroup=!1,groupToken.matches=matches,groupToken}function closeGroup(){if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1,alternator.matches[mndx].alternatorGroup=!1;0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else currentToken.matches.push(openingToken);else defaultCase()}function groupQuantifier(matches){var lastMatch=matches.pop();return lastMatch.isQuantifier&&(lastMatch=groupify([matches.pop(),lastMatch])),lastMatch}for(regexMask&&(opts.optionalmarker[0]=void 0,opts.optionalmarker[1]=void 0);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break;case"|":if(0===openenings.length){var altRegexGroup=groupify(currentToken.matches);altRegexGroup.openGroup=!0,openenings.push(altRegexGroup),currentToken.matches=[],closeRegexGroup=!0}break}if(escaped)defaultCase();else switch(m.charAt(0)){case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker[1]:case opts.groupmarker[1]:closeGroup();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker[0]:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);"*"!==mq0&&"+"!==mq0||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=0<openenings.length?openenings[openenings.length-1].matches:currentToken.matches;if(match=matches.pop(),match.isAlternator){matches.push(match),matches=match.matches;var groupToken=new MaskToken(!0),tmpMatch=matches.pop();matches.push(groupToken),matches=groupToken.matches,match=tmpMatch}match.isGroup||(match=groupify([match])),matches.push(match),matches.push(quantifier);break;case opts.alternatormarker:if(0<openenings.length){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];lastMatch=currentOpeningToken.openGroup&&(void 0===subToken.matches||!1===subToken.isGroup&&!1===subToken.isAlternator)?openenings.pop():groupQuantifier(currentOpeningToken.matches)}else lastMatch=groupQuantifier(currentToken.matches);if(lastMatch.isAlternator)openenings.push(lastMatch);else if(lastMatch.alternatorGroup?(alternator=openenings.pop(),lastMatch.alternatorGroup=!1):alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator),lastMatch.openGroup){lastMatch.openGroup=!1;var alternatorGroup=new MaskToken(!0);alternatorGroup.alternatorGroup=!0,openenings.push(alternatorGroup)}break;default:defaultCase()}}for(closeRegexGroup&&closeGroup();0<openenings.length;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return 0<currentToken.matches.length&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),(opts.numericInput||opts.isRTL)&&reverseTokens(maskTokens[0]),maskTokens}module.exports={generateMaskSet:generateMaskSet,analyseMask:analyseMask}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var escapeRegexRegex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");function _default(str){return str.replace(escapeRegexRegex,"\\$1")}},function(module,exports,__webpack_require__){"use strict";__webpack_require__(7),__webpack_require__(10),__webpack_require__(11),__webpack_require__(12),module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1);Inputmask.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var ipValidatorRegex=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function ipValidator(chrs,maskset,pos,strict,opts){return chrs=-1<pos-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,-1<pos-2&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):"00"+chrs,ipValidatorRegex.test(chrs)}Inputmask.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)//.*",autoUnmask:!1},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:ipValidator},j:{validator:ipValidator},k:{validator:ipValidator},l:{validator:ipValidator}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(""))}}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";__webpack_require__(9);var $=__webpack_require__(3),window=__webpack_require__(2),document=window.document,ua=window.navigator&&window.navigator.userAgent||"",ie=0<ua.indexOf("MSIE ")||0<ua.indexOf("Trident/"),mobile="ontouchstart"in window,iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile,keyCode=__webpack_require__(0);module.exports=function maskScope(actionObj){var inputmask=this,maskset=inputmask.maskset,opts=inputmask.opts,el=inputmask.el,isRTL=inputmask.isRTL||(inputmask.isRTL=opts.numericInput);function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var greedy=opts.greedy;clearOptionalTail&&(opts.greedy=!1),minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,jitRenderStatic;do{if(!0===baseOnInput&&maskset.validPositions[pos])testPos=clearOptionalTail&&!0===maskset.validPositions[pos].match.optionality&&void 0===maskset.validPositions[pos+1]&&(!0===maskset.validPositions[pos].generatedInput||maskset.validPositions[pos].input==opts.skipOptionalPartCharacter&&0<pos)?determineTestTemplate(pos,getTests(pos,ndxIntlzr,pos-1)):maskset.validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder(pos,test));else{testPos=getTestTemplate(pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice();var jitMasking=!0!==noJit&&(!1!==opts.jitMasking?opts.jitMasking:test.jit);jitRenderStatic=jitRenderStatic&&test.static&&test.def!==opts.groupSeparator&&null===test.fn||maskset.validPositions[pos-1]&&test.static&&test.def!==opts.groupSeparator&&null===test.fn,jitRenderStatic||!1===jitMasking||void 0===jitMasking||"number"==typeof jitMasking&&isFinite(jitMasking)&&pos<jitMasking?maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder(pos,test)):jitRenderStatic=!1}pos++}while((void 0===inputmask.maxLength||pos<inputmask.maxLength)&&(!0!==test.static||""!==test.def)||pos<minimalPos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),!1===includeMode&&void 0!==maskset.maskLength||(maskset.maskLength=pos-1),opts.greedy=greedy,maskTemplate}function resetMaskSet(soft){maskset.buffer=void 0,!0!==soft&&(maskset.validPositions={},maskset.p=0)}function getLastValidPosition(closestTo,strict,validPositions){var before=-1,after=-1,valids=validPositions||maskset.validPositions;for(var posNdx in void 0===closestTo&&(closestTo=-1),valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),closestTo<=psNdx&&(after=psNdx))}return-1===before||before==closestTo?after:-1==after?before:closestTo-before<after-closestTo?before:after}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];return"string"==typeof decisionTaker&&0<decisionTaker.length&&(decisionTaker=decisionTaker.split(",")[0]),void 0!==decisionTaker?decisionTaker.toString():""}function getLocator(tst,align){var locator=(null!=tst.alternation?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(""!==locator)for(;locator.length<align;)locator+="0";return locator}function determineTestTemplate(pos,tests){pos=0<pos?pos-1:0;for(var altTest=getTest(pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch,ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);(void 0===closest||""!==tstLocator&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&"master"===bestMatch.match.newBlockMarker&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier)&&(closest=distance,bestMatch=tst)}return bestMatch}function getTestTemplate(pos,ndxIntlzr,tstPs){return maskset.validPositions[pos]||determineTestTemplate(pos,getTests(pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function getTest(pos,tests){return maskset.validPositions[pos]?maskset.validPositions[pos]:(tests||getTests(pos))[0]}function positionCanMatchDefinition(pos,testDefinition,opts){for(var valid=!1,tests=getTests(pos),tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&(!(tests[tndx].match.nativeDef!==testDefinition.match[opts.shiftPositions?"def":"nativeDef"]||opts.shiftPositions&&testDefinition.match.static)||tests[tndx].match.nativeDef===testDefinition.match.nativeDef)){valid=!0;break}if(tests[tndx].match&&tests[tndx].match.def===testDefinition.match.nativeDef){valid=void 0;break}}return!1===valid&&void 0!==maskset.jitOffset[pos]&&(valid=positionCanMatchDefinition(pos+maskset.jitOffset[pos],testDefinition,opts)),valid}function getTests(pos,ndxIntlzr,tstPs){var maskTokens=maskset.maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===$.inArray(latestMatch,tokenGroup.matches);return firstMatch||$.each(tokenGroup.matches,function(ndx,match){if(!0===match.isQuantifier?firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]):Object.prototype.hasOwnProperty.call(match,"matches")&&(firstMatch=isFirstMatch(latestMatch,match)),firstMatch)return!1}),firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if((maskset.tests[pos]||maskset.validPositions[pos])&&$.each(maskset.tests[pos]||[maskset.validPositions[pos]],function(ndx,lmnt){if(lmnt.mloc[alternateNdx])return bestMatch=lmnt,!1;var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;(void 0===indexPos||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos)}),bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation],locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1)}return void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0}function isSubsetOf(source,target){function expand(pattern){for(var expanded=[],start=-1,end,i=0,l=pattern.length;i<l;i++)if("-"===pattern.charAt(i))for(end=pattern.charCodeAt(i+1);++start<end;)expanded.push(String.fromCharCode(start));else start=pattern.charCodeAt(i),expanded.push(pattern.charAt(i));return expanded.join("")}return source.match.def===target.match.nativeDef||!(!(opts.regex||source.match.fn instanceof RegExp&&target.match.fn instanceof RegExp)||!0===source.match.static||!0===target.match.static)&&-1!==expand(target.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g,"")))}function staticCanMatchDefinition(source,target){return!0===source.match.static&&!0!==target.match.static&&target.match.fn.test(source.match.def,maskset,pos,!1,opts,!1)}function setMergeLocators(targetMatch,altMatch){var alternationNdx=targetMatch.alternation,shouldMerge=void 0===altMatch||alternationNdx===altMatch.alternation&&-1===targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);if(!shouldMerge&&alternationNdx>altMatch.alternation)for(var i=altMatch.alternation;i<alternationNdx;i++)if(targetMatch.locator[i]!==altMatch.locator[i]){alternationNdx=i,shouldMerge=!0;break}if(shouldMerge){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[alternationNdx];if(void 0!==locNdx){if("string"==typeof locNdx&&(locNdx=locNdx.split(",")[0]),void 0===targetMatch.mloc[locNdx]&&(targetMatch.mloc[locNdx]=targetMatch.locator.slice()),void 0!==altMatch){for(var ndx in altMatch.mloc)"string"==typeof ndx&&(ndx=ndx.split(",")[0]),void 0===targetMatch.mloc[ndx]&&(targetMatch.mloc[ndx]=altMatch.mloc[ndx]);targetMatch.locator[alternationNdx]=Object.keys(targetMatch.mloc).join(",")}return!0}targetMatch.alternation=void 0}return!1}function isSameLevel(targetMatch,altMatch){if(targetMatch.locator.length!==altMatch.locator.length)return!1;for(var locNdx=targetMatch.alternation+1;locNdx<targetMatch.locator.length;locNdx++)if(targetMatch.locator[locNdx]!==altMatch.locator[locNdx])return!1;return!0}if(testPos>pos+opts._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+maskset.mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[$.inArray(match,maskToken.matches)+1],loopNdx,quantifierRecurse),match)return!0}else if(match.isOptional){var optionalToken=match,mtchsNdx=matches.length;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match){if($.each(matches,function(ndx,mtch){mtchsNdx<=ndx&&(mtch.match.optionality=!0)}),latestMatch=matches[matches.length-1].match,void 0!==quantifierRecurse||!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,altIndex=0<ndxInitializer.length?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx.toString());if(void 0!==maskset.excludes[pos]){for(var altIndexArrClone=altIndexArr.slice(),i=0,exl=maskset.excludes[pos].length;i<exl;i++){var excludeSet=maskset.excludes[pos][i].toString().split(":");loopNdx.length==excludeSet[1]&&altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]),1)}0===altIndexArr.length&&(delete maskset.excludes[pos],altIndexArr=altIndexArrClone)}(!0===opts.keepStatic||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)&&(altIndexArr=altIndexArr.slice(0,1));for(var unMatchedAlternation=!1,ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer="string"==typeof altIndex&&resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice(),alternateToken.matches[amndx]&&handleMatch(alternateToken.matches[amndx],[amndx].concat(loopNdx),quantifierRecurse)?match=!0:0===ndx&&(unMatchedAlternation=!0),maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation,altMatch.alternation=altMatch.alternation||loopNdxCnt,setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||void 0!==altMatch.alternation&&-1!==$.inArray(altMatch.locator[altMatch.alternation].toString(),altIndexArr)){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=!0,setMergeLocators(altMatch2,altMatch);break}if(isSubsetOf(altMatch,altMatch2)){setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break}if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}if(staticCanMatchDefinition(altMatch,altMatch2)){isSameLevel(altMatch,altMatch2)||void 0!==el.inputmask.userOptions.keepStatic?setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)):opts.keepStatic=!0;break}}}dropMatch||malternateMatches.push(altMatch)}}matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=0<matches.length,match=0<malternateMatches.length,ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[$.inArray(match,maskToken.matches)-1])for(var qt=match,qndx=0<ndxInitializer.length?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[$.inArray(qt,maskToken.matches)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup),match){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>=qt.quantifier.min,latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit,latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=!0,testPos=pos;break}return latestMatch.jit&&(maskset.jitOffset[pos]=tokenGroup.matches.length-tokenGroup.matches.indexOf(latestMatch)),!0}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match)return!0}else testPos++}for(var tndx=0<ndxInitializer.length?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(pos<testPos)break}}function mergeLocators(pos,tests){var locator=[];return $.isArray(tests)||(tests=[tests]),0<tests.length&&(void 0===tests[0].alternation||!0===opts.keepStatic?(locator=determineTestTemplate(pos,tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):$.each(tests,function(ndx,tst){if(""!==tst.def)if(0===locator.length)locator=tst.locator.slice();else for(var i=0;i<locator.length;i++)tst.locator[i]&&-1===locator[i].toString().indexOf(tst.locator[i])&&(locator[i]+=","+tst.locator[i])})),locator}if(-1<pos&&(void 0===inputmask.maxLength||pos<inputmask.maxLength)){if(void 0===ndxIntlzr){for(var previousPos=pos-1,test;void 0===(test=maskset.validPositions[previousPos]||maskset.tests[previousPos])&&-1<previousPos;)previousPos--;void 0!==test&&-1<previousPos&&(ndxInitializer=mergeLocators(previousPos,test),cacheDependency=ndxInitializer.join(""),testPos=previousPos)}if(maskset.tests[pos]&&maskset.tests[pos][0].cd===cacheDependency)return maskset.tests[pos];for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||pos<testPos)break}}return 0!==matches.length&&!insertStop||matches.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency}),void 0!==ndxIntlzr&&maskset.tests[pos]?$.extend(!0,[],matches):(maskset.tests[pos]=$.extend(!0,[],matches),maskset.tests[pos])}function getBufferTemplate(){return void 0===maskset._buffer&&(maskset._buffer=getMaskTemplate(!1,1),void 0===maskset.buffer&&(maskset.buffer=maskset._buffer.slice())),maskset._buffer}function getBuffer(noCache){return void 0!==maskset.buffer&&!0!==noCache||(maskset.buffer=getMaskTemplate(!0,getLastValidPosition(),!0),void 0===maskset._buffer&&(maskset._buffer=maskset.buffer.slice())),maskset.buffer}function refreshFromBuffer(start,end,buffer){var i,p,skipOptionalPartCharacter=opts.skipOptionalPartCharacter,bffr=isRTL?buffer.slice().reverse():buffer;if(opts.skipOptionalPartCharacter="",!0===start)resetMaskSet(),maskset.tests={},start=0,end=buffer.length,p=determineNewCaretPosition({begin:0,end:0},!1).begin;else{for(i=start;i<end;i++)delete maskset.validPositions[i];p=start}var keypress=new $.Event("keypress");for(i=start;i<end;i++){keypress.which=bffr[i].toString().charCodeAt(0),inputmask.ignorable=!1;var valResult=EventHandlers.keypressEvent.call(el,keypress,!0,!1,!1,p);!1!==valResult&&(p=valResult.forwardPosition)}opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function casing(elem,test,pos){switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=maskset.validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(keyCode.SPACE)?elem.toUpperCase():elem.toLowerCase();break;default:if($.isFunction(opts.casing)){var args=Array.prototype.slice.call(arguments);args.push(maskset.validPositions),elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){for(var altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=void 0!==na?na.split(","):[],naNdx,i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(-1!==$.inArray(altArr1[alndx],altArrC)){isMatch=!0;break}return isMatch}function alternate(maskPos,c,strict,fromIsValid,rAltPos,selection){var validPsClone=$.extend(!0,{},maskset.validPositions),tstClone=$.extend(!0,{},maskset.tests),lastAlt,alternation,isValidRslt=!1,returnRslt=!1,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=void 0!==rAltPos?rAltPos:getLastValidPosition(),nextPos,input,begin,end;if(selection&&(begin=selection.begin,end=selection.end,selection.begin>selection.end&&(begin=selection.end,end=selection.begin)),-1===lAltPos&&void 0===rAltPos)lastAlt=0,prevAltPos=getTest(lastAlt),alternation=prevAltPos.alternation;else for(;0<=lAltPos;lAltPos--)if(altPos=maskset.validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;lastAlt=lAltPos,alternation=maskset.validPositions[lastAlt].alternation,prevAltPos=altPos}if(void 0!==alternation){decisionPos=parseInt(lastAlt),maskset.excludes[decisionPos]=maskset.excludes[decisionPos]||[],!0!==maskPos&&maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos)+":"+prevAltPos.alternation);var validInputs=[],resultPos=-1;for(i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)-1===resultPos&&maskPos<=i&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1),validPos=maskset.validPositions[i],validPos&&!0!==validPos.generatedInput&&(void 0===selection||i<begin||end<=i)&&validInputs.push(validPos.input),delete maskset.validPositions[i];for(-1===resultPos&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1);void 0!==maskset.excludes[decisionPos]&&maskset.excludes[decisionPos].length<10;){for(maskset.tests={},resetMaskSet(!0),isValidRslt=!0,i=0;i<validInputs.length&&(nextPos=isValidRslt.caret||getLastValidPosition(void 0,!0)+1,input=validInputs[i],isValidRslt=isValid(nextPos,input,!1,fromIsValid,!0));i++)i===resultPos&&(returnRslt=isValidRslt),1==maskPos&&isValidRslt&&(returnRslt={caretPos:i});if(isValidRslt)break;if(resetMaskSet(),prevAltPos=getTest(decisionPos),maskset.validPositions=$.extend(!0,{},validPsClone),maskset.tests=$.extend(!0,{},tstClone),!maskset.excludes[decisionPos]){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}var decisionTaker=getDecisionTaker(prevAltPos);if(-1!==maskset.excludes[decisionPos].indexOf(decisionTaker+":"+prevAltPos.alternation)){returnRslt=alternate(maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}for(maskset.excludes[decisionPos].push(decisionTaker+":"+prevAltPos.alternation),i=decisionPos;i<getLastValidPosition(void 0,!0)+1;i++)delete maskset.validPositions[i]}}return returnRslt&&!1===opts.keepStatic||delete maskset.excludes[decisionPos],returnRslt}function isValid(pos,c,strict,fromIsValid,fromAlternate,validateOnly,fromCheckval){function isSelection(posObj){return isRTL?1<posObj.begin-posObj.end||posObj.begin-posObj.end==1:1<posObj.end-posObj.begin||posObj.end-posObj.begin==1}strict=!0===strict;var maskPos=pos;function processCommandObject(commandObj){if(void 0!==commandObj){if(void 0!==commandObj.remove&&($.isArray(commandObj.remove)||(commandObj.remove=[commandObj.remove]),$.each(commandObj.remove.sort(function(a,b){return b.pos-a.pos}),function(ndx,lmnt){revalidateMask({begin:lmnt,end:lmnt+1})}),commandObj.remove=void 0),void 0!==commandObj.insert&&($.isArray(commandObj.insert)||(commandObj.insert=[commandObj.insert]),$.each(commandObj.insert.sort(function(a,b){return a.pos-b.pos}),function(ndx,lmnt){""!==lmnt.c&&isValid(lmnt.pos,lmnt.c,void 0===lmnt.strict||lmnt.strict,void 0!==lmnt.fromIsValid?lmnt.fromIsValid:fromIsValid)}),commandObj.insert=void 0),commandObj.refreshFromBuffer&&commandObj.buffer){var refresh=commandObj.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,commandObj.buffer),commandObj.refreshFromBuffer=void 0}void 0!==commandObj.rewritePosition&&(maskPos=commandObj.rewritePosition,commandObj=!0)}return commandObj}function _isValid(position,c,strict){var rslt=!1;return $.each(getTests(position),function(ndx,tst){var test=tst.match;if(getBuffer(!0),rslt=null!=test.fn?test.fn.test(c,maskset,position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:getPlaceholder(position,test,!0)||test.def,pos:position},!1!==rslt){var elem=void 0!==rslt.c?rslt.c:c,validatedPos=position;return elem=elem===opts.skipOptionalPartCharacter&&!0===test.static?getPlaceholder(position,test,!0)||test.def:elem,rslt=processCommandObject(rslt),!0!==rslt&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos),!0!==rslt&&void 0===rslt.pos&&void 0===rslt.c?!1:(!1===revalidateMask(pos,$.extend({},tst,{input:casing(elem,test,validatedPos)}),fromIsValid,validatedPos)&&(rslt=!1),!1)}}),rslt}void 0!==pos.begin&&(maskPos=isRTL?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},maskset.validPositions);if(!1===opts.keepStatic&&void 0!==maskset.excludes[maskPos]&&!0!==fromAlternate&&!0!==fromIsValid)for(var i=maskPos;i<(isRTL?pos.begin:pos.end);i++)void 0!==maskset.excludes[i]&&(maskset.excludes[i]=void 0,delete maskset.tests[i]);if($.isFunction(opts.preValidation)&&!0!==fromIsValid&&!0!==validateOnly&&(result=opts.preValidation.call(el,getBuffer(),maskPos,c,isSelection(pos),opts,maskset,pos,strict||fromAlternate),result=processCommandObject(result)),!0===result){if(void 0===inputmask.maxLength||maskPos<inputmask.maxLength){if(result=_isValid(maskPos,c,strict),(!strict||!0===fromIsValid)&&!1===result&&!0!==validateOnly){var currentPosValid=maskset.validPositions[maskPos];if(!currentPosValid||!0!==currentPosValid.match.static||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if(opts.insertMode||void 0===maskset.validPositions[seekNext(maskPos)]||pos.end>maskPos){var skip=!1;if(maskset.jitOffset[maskPos]&&void 0===maskset.validPositions[seekNext(maskPos)]&&(result=isValid(maskPos+maskset.jitOffset[maskPos],c,!0),!1!==result&&(!0!==fromAlternate&&(result.caret=maskPos),skip=!0)),pos.end>maskPos&&(maskset.validPositions[maskPos]=void 0),!skip&&!isMask(maskPos,opts.keepStatic))for(var nPos=maskPos+1,snPos=seekNext(maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),!1!==result){result=trackbackPositions(maskPos,void 0!==result.pos?result.pos:nPos)||result,maskPos=nPos;break}}}else result={caret:seekNext(maskPos)}}}else result=!1;!1!==result||!opts.keepStatic||!isComplete(getBuffer())&&0!==maskPos||strict||!0===fromAlternate?isSelection(pos)&&maskset.tests[maskPos]&&1<maskset.tests[maskPos].length&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=alternate(!0)):result=alternate(maskPos,c,strict,fromIsValid,void 0,pos),!0===result&&(result={pos:maskPos})}if($.isFunction(opts.postValidation)&&!0!==fromIsValid&&!0!==validateOnly){var postResult=opts.postValidation.call(el,getBuffer(!0),void 0!==pos.begin?isRTL?pos.end:pos.begin:pos,c,result,opts,maskset,strict,fromCheckval);void 0!==postResult&&(result=!0===postResult?result:postResult)}result&&void 0===result.pos&&(result.pos=maskPos),!1===result||!0===validateOnly?(resetMaskSet(!0),maskset.validPositions=$.extend(!0,{},positionsClone)):trackbackPositions(void 0,maskPos,!0);var endResult=processCommandObject(result);return endResult}function trackbackPositions(originalPos,newPos,fillOnly){if(void 0===originalPos)for(originalPos=newPos-1;0<originalPos&&!maskset.validPositions[originalPos];originalPos--);for(var ps=originalPos;ps<newPos;ps++)if(void 0===maskset.validPositions[ps]&&!isMask(ps,!0)){var vp=0==ps?getTest(ps):maskset.validPositions[ps-1];if(vp){var tests=getTests(ps).slice();""===tests[tests.length-1].match.def&&tests.pop();var bestMatch=determineTestTemplate(ps,tests),np;if(bestMatch&&(!0!==bestMatch.match.jit||"master"===bestMatch.match.newBlockMarker&&(np=maskset.validPositions[ps+1])&&!0===np.match.optionalQuantifier)&&(bestMatch=$.extend({},bestMatch,{input:getPlaceholder(ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,revalidateMask(ps,bestMatch,!0),!0!==fillOnly)){var cvpInput=maskset.validPositions[newPos].input;return maskset.validPositions[newPos]=void 0,isValid(newPos,cvpInput,!0,!0)}}}}function revalidateMask(pos,validTest,fromIsValid,validatedPos){function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(void 0===posMatch||!0!==posMatch.match.static||!0===posMatch.match.optionality||void 0!==valids[0]&&void 0!==valids[0].alternation)return!1;var prevMatch=selection.begin<=pos-1?valids[pos-1]&&!0===valids[pos-1].match.static&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&!0===valids[pos+1].match.static&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}var offset=0,begin=void 0!==pos.begin?pos.begin:pos,end=void 0!==pos.end?pos.end:pos;if(pos.begin>pos.end&&(begin=pos.end,end=pos.begin),validatedPos=void 0!==validatedPos?validatedPos:begin,begin!==end||opts.insertMode&&void 0!==maskset.validPositions[validatedPos]&&void 0===fromIsValid||void 0===validTest){var positionsClone=$.extend(!0,{},maskset.validPositions),lvp=getLastValidPosition(void 0,!0),i;for(maskset.p=begin,i=lvp;begin<=i;i--)delete maskset.validPositions[i],void 0===validTest&&delete maskset.tests[i+1];var valid=!0,j=validatedPos,posMatch=j,t,canMatch;for(validTest&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest),posMatch++,j++),i=validTest?end:end-1;i<=lvp;i++){if(void 0!==(t=positionsClone[i])&&!0!==t.generatedInput&&(end<=i||begin<=i&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){for(;""!==getTest(posMatch).match.def;){if(!1!==(canMatch=positionCanMatchDefinition(posMatch,t,opts))||"+"===t.match.def){"+"===t.match.def&&getBuffer(!0);var result=isValid(posMatch,t.input,"+"!==t.match.def,"+"!==t.match.def);if(valid=!1!==result,j=(result.pos||posMatch)+1,!valid&&canMatch)break}else valid=!1;if(valid){void 0===validTest&&t.match.static&&i===pos.begin&&offset++;break}if(!valid&&posMatch>maskset.maskLength)break;posMatch++}""==getTest(posMatch).match.def&&(valid=!1),posMatch=j}if(!valid)break}if(!valid)return maskset.validPositions=$.extend(!0,{},positionsClone),resetMaskSet(!0),!1}else validTest&&getTest(validatedPos).match.cd===validTest.match.cd&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest));return resetMaskSet(!0),offset}function isMask(pos,strict,fuzzy){var test=getTestTemplate(pos).match;if(""===test.def&&(test=getTest(pos).match),!0!==test.static)return test.fn;if(!0===fuzzy&&void 0!==maskset.validPositions[pos]&&!0!==maskset.validPositions[pos].generatedInput)return!0;if(!0!==strict&&-1<pos){if(fuzzy){var tests=getTests(pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0)}var testTemplate=determineTestTemplate(pos,getTests(pos)),testPlaceHolder=getPlaceholder(pos,testTemplate.match);return testTemplate.match.def!==testPlaceHolder}return!1}function seekNext(pos,newBlock,fuzzy){void 0===fuzzy&&(fuzzy=!0);for(var position=pos+1;""!==getTest(position).match.def&&(!0===newBlock&&(!0!==getTest(position).match.newBlockMarker||!isMask(position,void 0,!0))||!0!==newBlock&&!isMask(position,void 0,fuzzy));)position++;return position}function seekPrevious(pos,newBlock){var position=pos,tests;if(position<=0)return 0;for(;0<--position&&(!0===newBlock&&!0!==getTest(position).match.newBlockMarker||!0!==newBlock&&!isMask(position,void 0,!0)&&(tests=getTests(position),tests.length<2||2===tests.length&&""===tests[1].match.def)););return position}function writeBuffer(input,buffer,caretPos,event,triggerEvents){if(event&&$.isFunction(opts.onBeforeWrite)){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;refreshFromBuffer(!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=getBuffer(!0)}void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos)}}if(void 0!==input&&(input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type||caret(input,caretPos,void 0,void 0,void 0!==event&&"keydown"===event.type&&(event.keyCode===keyCode.DELETE||event.keyCode===keyCode.BACKSPACE)),!0===triggerEvents)){var $input=$(input),nptVal=input.inputmask._valueGet();input.inputmask.skipInputEvent=!0,$input.trigger("input"),setTimeout(function(){nptVal===getBufferTemplate().join("")?$input.trigger("cleared"):!0===isComplete(buffer)&&$input.trigger("complete")},0)}}function getPlaceholder(pos,test,returnPL){if(test=test||getTest(pos).match,void 0!==test.placeholder||!0===returnPL)return $.isFunction(test.placeholder)?test.placeholder(opts):test.placeholder;if(!0!==test.static)return opts.placeholder.charAt(pos%opts.placeholder.length);if(-1<pos&&void 0===maskset.validPositions[pos]){var tests=getTests(pos),staticAlternations=[],prevTest;if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(""!==tests[i].match.def&&!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(!0===tests[i].match.static||void 0===prevTest||!1!==tests[i].match.fn.test(prevTest.match.def,maskset,pos,!0,opts))&&(staticAlternations.push(tests[i]),!0===tests[i].match.static&&(prevTest=tests[i]),1<staticAlternations.length&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length)}return test.def}function HandleNativePlaceholder(npt,value){if(ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||""===npt.placeholder)){var buffer=getBuffer().slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=getLastValidPosition();-1===lvp&&nptValue===getBufferTemplate().join("")?buffer=[]:-1!==lvp&&clearOptionalTail(buffer),writeBuffer(npt,buffer)}}}else npt.placeholder!==value&&(npt.placeholder=value,""===npt.placeholder&&npt.removeAttribute("placeholder"))}function determineNewCaretPosition(selectedCaret,tabbed){function doRadixFocus(clickPos){if(""!==opts.radixPoint&&0!==opts.digits){var vps=maskset.validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===getPlaceholder(clickPos)){if(clickPos<seekNext(-1))return!0;var radixPos=$.inArray(opts.radixPoint,getBuffer());if(-1!==radixPos){for(var vp in vps)if(vps[vp]&&radixPos<vp&&vps[vp].input!==getPlaceholder(vp))return!1;return!0}}}return!1}if(tabbed&&(isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":selectedCaret={begin:0,end:getBuffer().length};break;case"ignore":selectedCaret.end=selectedCaret.begin=seekNext(getLastValidPosition());break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer().join("").indexOf(opts.radixPoint);selectedCaret.end=selectedCaret.begin=opts.numericInput?seekNext(radixPos):radixPos;break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition(clickPosition,!0),lastPosition=seekNext(-1!==lvclickPosition||isMask(0)?lvclickPosition:0);if(clickPosition<lastPosition)selectedCaret.end=selectedCaret.begin=isMask(clickPosition,!0)||isMask(clickPosition-1,!0)?clickPosition:seekNext(clickPosition);else{var lvp=maskset.validPositions[lvclickPosition],tt=getTestTemplate(lastPosition,lvp?lvp.match.locator:void 0,lvp),placeholder=getPlaceholder(lastPosition,tt.match);if(""!==placeholder&&getBuffer()[lastPosition]!==placeholder&&!0!==tt.match.optionalQuantifier&&!0!==tt.match.newBlockMarker||!isMask(lastPosition,opts.keepStatic)&&tt.match.def===placeholder){var newPos=seekNext(lastPosition);(newPos<=clickPosition||clickPosition===lastPosition)&&(lastPosition=newPos)}selectedCaret.end=selectedCaret.begin=lastPosition}}return selectedCaret}}var EventRuler={on:function on(input,eventName,eventHandler){var ev=function ev(e){e.originalEvent&&(e=e.originalEvent||e,arguments[0]=e);var that=this,args,inputmask=that.inputmask;if(void 0===inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(that,"_inputmask_opts");$(that).off(),imOpts&&new Inputmask(imOpts).mask(that)}else{if("setvalue"===e.type||"FORM"===this.nodeName||!(that.disabled||that.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===keyCode.TAB))){switch(e.type){case"input":if(!0===inputmask.skipInputEvent||e.inputType&&"insertCompositionText"===e.inputType)return inputmask.skipInputEvent=!1,e.preventDefault();break;case"keydown":inputmask.skipKeyPressEvent=!1,inputmask.skipInputEvent=!1;break;case"keypress":if(!0===inputmask.skipKeyPressEvent)return e.preventDefault();inputmask.skipKeyPressEvent=!0;break;case"click":case"focus":return inputmask.validationEvent?(inputmask.validationEvent=!1,input.blur(),HandleNativePlaceholder(input,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")),setTimeout(function(){input.focus()},3e3)):(args=arguments,setTimeout(function(){input.inputmask&&eventHandler.apply(that,args)},0)),!1}var returnVal=eventHandler.apply(that,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal}e.preventDefault()}};input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev),-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).on(eventName,ev):$(input).on(eventName,ev)},off:function off(input,event){var events;input.inputmask&&input.inputmask.events&&(event?(events=[],events[event]=input.inputmask.events[event]):events=input.inputmask.events,$.each(events,function(eventName,evArr){for(;0<evArr.length;){var ev=evArr.pop();-1!==$.inArray(eventName,["submit","reset"])?null!==input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev)}delete input.inputmask.events[eventName]}))}},EventHandlers={keydownEvent:function keydownEvent(e){var input=this,$input=$(input),k=e.keyCode,pos=caret(input),kdResult=opts.onKeyDown.call(this,e,getBuffer(),pos,opts);if(void 0!==kdResult)return kdResult;if(k===keyCode.BACKSPACE||k===keyCode.DELETE||iphone&&k===keyCode.BACKSPACE_SAFARI||e.ctrlKey&&k===keyCode.X&&!("oncut"in input))e.preventDefault(),handleRemove(input,k,pos),writeBuffer(input,getBuffer(!0),maskset.p,e,input.inputmask._valueGet()!==getBuffer().join(""));else if(k===keyCode.END||k===keyCode.PAGE_DOWN){e.preventDefault();var caretPos=seekNext(getLastValidPosition());caret(input,e.shiftKey?pos.begin:caretPos,caretPos,!0)}else k===keyCode.HOME&&!e.shiftKey||k===keyCode.PAGE_UP?(e.preventDefault(),caret(input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===keyCode.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?(checkVal(input,!0,!1,inputmask.undoValue.split("")),$input.trigger("click")):!0===opts.tabThrough&&k===keyCode.TAB?(!0===e.shiftKey?(!0===getTest(pos.begin).match.static&&(pos.begin=seekNext(pos.begin)),pos.end=seekPrevious(pos.begin,!0),pos.begin=seekPrevious(pos.end,!0)):(pos.begin=seekNext(pos.begin,!0),pos.end=seekNext(pos.begin,!0),pos.end<maskset.maskLength&&pos.end--),pos.begin<maskset.maskLength&&(e.preventDefault(),caret(input,pos.begin,pos.end))):e.shiftKey||opts.insertModeVisual&&!1===opts.insertMode&&(k===keyCode.RIGHT?setTimeout(function(){var caretPos=caret(input);caret(input,caretPos.begin)},0):k===keyCode.LEFT&&setTimeout(function(){var caretPos_begin=translatePosition(input.inputmask.caretPos.begin),caretPos_end=translatePosition(input.inputmask.caretPos.end);caret(input,isRTL?caretPos_begin+(caretPos_begin===maskset.maskLength?0:1):caretPos_begin-(0===caretPos_begin?0:1))},0));inputmask.ignorable=-1!==$.inArray(k,opts.ignorables)},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var input=this,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||inputmask.ignorable))return k===keyCode.ENTER&&inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),setTimeout(function(){$input.trigger("change")},0)),inputmask.skipInputEvent=!0,!0;if(k){44!==k&&46!==k||3!==e.location||""===opts.radixPoint||(k=opts.radixPoint.charCodeAt(0));var pos=checkval?{begin:ndx,end:ndx}:caret(input),forwardPosition,c=String.fromCharCode(k);maskset.writeOutBuffer=!0;var valResult=isValid(pos,c,strict,void 0,void 0,void 0,checkval);if(!1!==valResult&&(resetMaskSet(!0),forwardPosition=void 0!==valResult.caret?valResult.caret:seekNext(valResult.pos.begin?valResult.pos.begin:valResult.pos),maskset.p=forwardPosition),forwardPosition=opts.numericInput&&void 0===valResult.caret?seekPrevious(forwardPosition):forwardPosition,!1!==writeOut&&(setTimeout(function(){opts.onKeyValidation.call(input,k,valResult)},0),maskset.writeOutBuffer&&!1!==valResult)){var buffer=getBuffer();writeBuffer(input,buffer,forwardPosition,e,!0!==checkval)}if(e.preventDefault(),checkval)return!1!==valResult&&(valResult.forwardPosition=forwardPosition),valResult}},pasteEvent:function pasteEvent(e){var input=this,inputValue=this.inputmask._valueGet(!0),caretPos=caret(this),tempValue;isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret==(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).slice(caretPos.end).join("")&&(valueAfterCaret=""),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;inputValue=valueBeforeCaret+e.clipboardData.getData("text/plain")+valueAfterCaret}var pasteValue=inputValue;if($.isFunction(opts.onBeforePaste)){if(pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts),!1===pasteValue)return e.preventDefault();pasteValue=pasteValue||inputValue}return checkVal(this,!0,!1,pasteValue.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){function ieMobileHandler(input,inputValue,caretPos){if(iemobile){var inputChar=inputValue.replace(getBuffer().join(""),"");if(1===inputChar.length){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar),inputValue=iv.join("")}}return inputValue}function analyseChanges(inputValue,buffer,caretPos){for(var frontPart=inputValue.substr(0,caretPos.begin).split(""),backPart=inputValue.substr(caretPos.begin).split(""),frontBufferPart=buffer.substr(0,caretPos.begin).split(""),backBufferPart=buffer.substr(caretPos.begin).split(""),fpl=frontPart.length>=frontBufferPart.length?frontPart.length:frontBufferPart.length,bpl=backPart.length>=backBufferPart.length?backPart.length:backBufferPart.length,bl,i,action="",data=[],marker="~",placeholder;frontPart.length<fpl;)frontPart.push("~");for(;frontBufferPart.length<fpl;)frontBufferPart.push("~");for(;backPart.length<bpl;)backPart.unshift("~");for(;backBufferPart.length<bpl;)backBufferPart.unshift("~");var newBuffer=frontPart.concat(backPart),oldBuffer=frontBufferPart.concat(backBufferPart);for(i=0,bl=newBuffer.length;i<bl;i++)switch(placeholder=getPlaceholder(translatePosition(i)),action){case"insertText":oldBuffer[i-1]===newBuffer[i]&&caretPos.begin==newBuffer.length-1&&data.push(newBuffer[i]),i=bl;break;case"insertReplacementText":"~"===newBuffer[i]?caretPos.end++:i=bl;break;case"deleteContentBackward":"~"===newBuffer[i]?caretPos.end++:i=bl;break;default:newBuffer[i]!==oldBuffer[i]&&("~"!==newBuffer[i+1]&&newBuffer[i+1]!==placeholder&&void 0!==newBuffer[i+1]||(oldBuffer[i]!==placeholder||"~"!==oldBuffer[i+1])&&"~"!==oldBuffer[i]?"~"===oldBuffer[i+1]&&oldBuffer[i]===newBuffer[i+1]?(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--):newBuffer[i]!==placeholder&&"~"!==newBuffer[i]&&("~"===newBuffer[i+1]||oldBuffer[i]!==newBuffer[i]&&oldBuffer[i+1]===newBuffer[i+1])?(action="insertReplacementText",data.push(newBuffer[i]),caretPos.begin--):"~"===newBuffer[i]?(action="deleteContentBackward",!isMask(translatePosition(i),!0)&&oldBuffer[i]!==opts.radixPoint||caretPos.end++):i=bl:(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--));break}return{action:action,data:data,caret:caretPos}}var input=this,inputValue=input.inputmask._valueGet(!0),buffer=(isRTL?getBuffer().slice().reverse():getBuffer()).join(""),caretPos=caret(input,void 0,void 0,!0);if(buffer!==inputValue){inputValue=ieMobileHandler(input,inputValue,caretPos);var changes=analyseChanges(inputValue,buffer,caretPos);switch((input.inputmask.shadowRoot||document).activeElement!==input&&input.focus(),writeBuffer(input,getBuffer()),caret(input,caretPos.begin,caretPos.end,!0),changes.action){case"insertText":case"insertReplacementText":$.each(changes.data,function(ndx,entry){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0),inputmask.ignorable=!1,EventHandlers.keypressEvent.call(input,keypress)}),setTimeout(function(){inputmask.$el.trigger("keyup")},0);break;case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=keyCode.BACKSPACE,EventHandlers.keydownEvent.call(input,keydown);break;default:applyInputValue(input,inputValue);break}e.preventDefault()}},compositionendEvent:function compositionendEvent(e){inputmask.$el.trigger("input")},setValueEvent:function setValueEvent(e,argument_1,argument_2){var input=this,value=e&&e.detail?e.detail[0]:argument_1;void 0===value&&(value=this.inputmask._valueGet(!0)),applyInputValue(this,value),(e.detail&&void 0!==e.detail[1]||void 0!==argument_2)&&caret(this,e.detail?e.detail[1]:argument_2)},focusEvent:function focusEvent(e){var input=this,nptValue=this.inputmask._valueGet();opts.showMaskOnFocus&&nptValue!==getBuffer().join("")&&writeBuffer(this,getBuffer(),seekNext(getLastValidPosition())),!0!==opts.positionCaretOnTab||!1!==inputmask.mouseEnter||isComplete(getBuffer())&&-1!==getLastValidPosition()||EventHandlers.clickEvent.apply(this,[e,!0]),inputmask.undoValue=getBuffer().join("")},invalidEvent:function invalidEvent(e){inputmask.validationEvent=!0},mouseleaveEvent:function mouseleaveEvent(){var input=this;inputmask.mouseEnter=!1,opts.clearMaskOnLostFocus&&(this.inputmask.shadowRoot||document).activeElement!==this&&HandleNativePlaceholder(this,inputmask.originalPlaceholder)},clickEvent:function clickEvent(e,tabbed){var input=this;if((this.inputmask.shadowRoot||document).activeElement===this){var newCaretPosition=determineNewCaretPosition(caret(this),tabbed);void 0!==newCaretPosition&&caret(this,newCaretPosition)}},cutEvent:function cutEvent(e){var input=this,pos=caret(this),clipboardData=window.clipboardData||e.clipboardData,clipData=isRTL?getBuffer().slice(pos.end,pos.begin):getBuffer().slice(pos.begin,pos.end);clipboardData.setData("text",isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),handleRemove(this,keyCode.DELETE,pos),writeBuffer(this,getBuffer(),maskset.p,e,inputmask.undoValue!==getBuffer().join(""))},blurEvent:function blurEvent(e){var $input=$(this),input=this;if(this.inputmask){HandleNativePlaceholder(this,inputmask.originalPlaceholder);var nptValue=this.inputmask._valueGet(),buffer=getBuffer().slice();""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===getLastValidPosition()&&nptValue===getBufferTemplate().join("")?buffer=[]:clearOptionalTail(buffer)),!1===isComplete(buffer)&&(setTimeout(function(){$input.trigger("incomplete")},0),opts.clearIncomplete&&(resetMaskSet(),buffer=opts.clearMaskOnLostFocus?[]:getBufferTemplate().slice())),writeBuffer(this,buffer,void 0,e)),inputmask.undoValue!==getBuffer().join("")&&(inputmask.undoValue=getBuffer().join(""),$input.trigger("change"))}},mouseenterEvent:function mouseenterEvent(){var input=this;inputmask.mouseEnter=!0,(this.inputmask.shadowRoot||document).activeElement!==this&&(null==inputmask.originalPlaceholder&&this.placeholder!==inputmask.originalPlaceholder&&(inputmask.originalPlaceholder=this.placeholder),opts.showMaskOnHover&&HandleNativePlaceholder(this,(isRTL?getBufferTemplate().slice().reverse():getBufferTemplate()).join("")))},submitEvent:function submitEvent(){inputmask.undoValue!==getBuffer().join("")&&inputmask.$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===getLastValidPosition()&&el.inputmask._valueGet&&el.inputmask._valueGet()===getBufferTemplate().join("")&&el.inputmask._valueSet(""),opts.clearIncomplete&&!1===isComplete(getBuffer())&&el.inputmask._valueSet(""),opts.removeMaskOnSubmit&&(el.inputmask._valueSet(el.inputmask.unmaskedvalue(),!0),setTimeout(function(){writeBuffer(el,getBuffer())},0))},resetEvent:function resetEvent(){el.inputmask.refreshValue=!0,setTimeout(function(){applyInputValue(el,el.inputmask._valueGet(!0))},0)}},valueBuffer;function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=this||input.inputmask,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=void 0;function isTemplateMatch(ndx,charCodes){for(var targetTemplate=getMaskTemplate(!0,0).slice(ndx,seekNext(ndx)).join("").replace(/'/g,""),charCodeNdx=targetTemplate.indexOf(charCodes);0<charCodeNdx&&" "===targetTemplate[charCodeNdx-1];)charCodeNdx--;var match=0===charCodeNdx&&!isMask(ndx)&&(getTest(ndx).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx).match.static&&getTest(ndx).match.nativeDef==="'"+charCodes.charAt(0)||" "===getTest(ndx).match.nativeDef&&(getTest(ndx+1).match.nativeDef===charCodes.charAt(0)||!0===getTest(ndx+1).match.static&&getTest(ndx+1).match.nativeDef==="'"+charCodes.charAt(0)));if(!match&&0<charCodeNdx&&!isMask(ndx,!1,!0)){var nextPos=seekNext(ndx);inputmask.caretPos.begin<nextPos&&(inputmask.caretPos={begin:nextPos})}return match}resetMaskSet(),maskset.tests={},initialNdx=opts.radixPoint?determineNewCaretPosition({begin:0,end:0}).begin:0,maskset.p=initialNdx,inputmask.caretPos={begin:initialNdx};var staticMatches=[],prevCaretPos=inputmask.caretPos;if($.each(inputValue,function(ndx,charCode){if(void 0!==charCode)if(void 0===maskset.validPositions[ndx]&&inputValue[ndx]===getPlaceholder(ndx)&&isMask(ndx,!0)&&!1===isValid(ndx,inputValue[ndx],!0,void 0,void 0,!0))maskset.p++;else{var keypress=new $.Event("_checkval");keypress.which=charCode.toString().charCodeAt(0),charCodes+=charCode;var lvp=getLastValidPosition(void 0,!0);isTemplateMatch(initialNdx,charCodes)?result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,lvp+1):(result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,inputmask.caretPos.begin),result&&(initialNdx=inputmask.caretPos.begin+1,charCodes="")),result?(void 0!==result.pos&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static&&void 0===maskset.validPositions[result.pos].alternation&&(staticMatches.push(result.pos),isRTL||(result.forwardPosition=result.pos+1)),writeBuffer(void 0,getBuffer(),result.forwardPosition,keypress,!1),inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition},prevCaretPos=inputmask.caretPos):inputmask.caretPos=prevCaretPos}}),0<staticMatches.length){var sndx,validPos,nextValid=seekNext(-1,void 0,!1);if(!isComplete(getBuffer())&&staticMatches.length<=nextValid||isComplete(getBuffer())&&0<staticMatches.length&&staticMatches.length!==nextValid&&0===staticMatches[0])for(var nextSndx=nextValid;void 0!==(sndx=staticMatches.shift());){var keypress=new $.Event("_checkval");if(validPos=maskset.validPositions[sndx],validPos.generatedInput=!0,keypress.which=validPos.input.charCodeAt(0),result=EventHandlers.keypressEvent.call(input,keypress,!0,!1,strict,nextSndx),result&&void 0!==result.pos&&result.pos!==sndx&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static)staticMatches.push(result.pos);else if(!result)break;nextSndx++}}writeOut&&writeBuffer(input,getBuffer(),result?result.forwardPosition:inputmask.caretPos.begin,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type&&inputmask.undoValue!==getBuffer().join(""))}function unmaskedvalue(input){if(input){if(void 0===input.inputmask)return input.value;input.inputmask&&input.inputmask.refreshValue&&applyInputValue(input,input.inputmask._valueGet(!0))}var umValue=[],vps=maskset.validPositions;for(var pndx in vps)vps[pndx]&&vps[pndx].match&&(1!=vps[pndx].match.static||!0!==vps[pndx].generatedInput)&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(isRTL?umValue.reverse():umValue).join("");if($.isFunction(opts.onUnMask)){var bufferValue=(isRTL?getBuffer().slice().reverse():getBuffer()).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function translatePosition(pos){return!isRTL||"number"!=typeof pos||opts.greedy&&""===opts.placeholder||!el||(pos=el.inputmask._valueGet().length-pos),pos}function caret(input,begin,end,notranslate,isDelete){var range;if(void 0===begin)return"selectionStart"in input&&"selectionEnd"in input?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:notranslate?begin:translatePosition(begin),end:notranslate?end:translatePosition(end)};if($.isArray(begin)&&(end=isRTL?begin[0]:begin[1],begin=isRTL?begin[1]:begin[0]),void 0!==begin.begin&&(end=isRTL?begin.begin:begin.end,begin=isRTL?begin.end:begin.begin),"number"==typeof begin){begin=notranslate?begin:translatePosition(begin),end=notranslate?end:translatePosition(end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,input.inputmask.caretPos={begin:begin,end:end},opts.insertModeVisual&&!1===opts.insertMode&&begin===end&&(isDelete||end++),input===(input.inputmask.shadowRoot||document).activeElement)if("setSelectionRange"in input)input.setSelectionRange(begin,end);else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range)}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select())}}function determineLastRequiredPosition(returnDefinition){var buffer=getMaskTemplate(!0,getLastValidPosition(),!0,!0),bl=buffer.length,pos,lvp=getLastValidPosition(),positions={},lvTest=maskset.validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0,testPos;for(pos=lvp+1;pos<buffer.length;pos++)testPos=getTestTemplate(pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;lvp<pos&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&1!=testPos.match.static||!0===testPos.match.static&&testPos.locator[lvTest.alternation]&&checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==getTests(pos)[0].def))&&buffer[pos]===getPlaceholder(pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl}function clearOptionalTail(buffer){buffer.length=0;for(var template=getMaskTemplate(!0,0,!0,void 0,!0),lmnt;void 0!==(lmnt=template.shift());)buffer.push(lmnt);return buffer}function isComplete(buffer){if($.isFunction(opts.isComplete))return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=determineLastRequiredPosition(!0),aml=seekPrevious(lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=getTestTemplate(i).match;if(!0!==test.static&&void 0===maskset.validPositions[i]&&!0!==test.optionality&&!0!==test.optionalQuantifier||!0===test.static&&buffer[i]!==getPlaceholder(i,test)){complete=!1;break}}}return complete}}function handleRemove(input,k,pos,strict,fromIsValid){if((opts.numericInput||isRTL)&&(k===keyCode.BACKSPACE?k=keyCode.DELETE:k===keyCode.DELETE&&(k=keyCode.BACKSPACE),isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend}var lvp=getLastValidPosition(void 0,!0),offset;if(pos.end>=getBuffer().length&&lvp>=pos.end&&(pos.end=lvp+1),k===keyCode.BACKSPACE?pos.end-pos.begin<1&&(pos.begin=seekPrevious(pos.begin)):k===keyCode.DELETE&&pos.begin===pos.end&&(pos.end=isMask(pos.end,!0,!0)?pos.end+1:seekNext(pos.end)+1),!1!==(offset=revalidateMask(pos))){if(!0!==strict&&!1!==opts.keepStatic||null!==opts.regex&&-1!==getTest(pos.begin).match.def.indexOf("|")){var result=alternate(!0);if(result){var newPos=void 0!==result.caret?result.caret:result.pos?seekNext(result.pos.begin?result.pos.begin:result.pos):getLastValidPosition(-1,!0);(k!==keyCode.DELETE||pos.begin>newPos)&&pos.begin}}!0!==strict&&(maskset.p=k===keyCode.DELETE?pos.begin+offset:pos.begin)}}function applyInputValue(input,value){input.inputmask.refreshValue=!1,$.isFunction(opts.onBeforeMask)&&(value=opts.onBeforeMask.call(inputmask,value,opts)||value),value=value.toString().split(""),checkVal(input,!0,!1,value),inputmask.undoValue=getBuffer().join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===getBufferTemplate().join("")&&-1===getLastValidPosition()&&input.inputmask._valueSet("")}function mask(){function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet,valueSet;function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==getLastValidPosition(void 0,void 0,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:""}return valhookGet(elem)},set:function set(elem,value){var result=valhookSet(elem,value);return elem.inputmask&&applyInputValue(elem,value),result},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==getLastValidPosition()||!0!==opts.nullable?(this.inputmask.shadowRoot||document.activeElement)===this&&opts.clearMaskOnLostFocus?(isRTL?clearOptionalTail(getBuffer().slice()).reverse():clearOptionalTail(getBuffer().slice())).join(""):valueGet.call(this):"":valueGet.call(this)}function setter(value){valueSet.call(this,value),this.inputmask&&applyInputValue(this,value)}function installNativeValueSetFallback(npt){EventRuler.on(npt,"mouseenter",function(){var input=this,value=this.inputmask._valueGet(!0);value!==(isRTL?getBuffer().reverse():getBuffer()).join("")&&applyInputValue(this,value)})}if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"input"!==npt.tagName.toLowerCase()&&(valueGet=function valueGet(){return this.textContent},valueSet=function valueSet(value){this.textContent=value},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}))}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null==value?"":!0!==overruleRTL&&isRTL?value.split("").reverse().join(""):value)},void 0===valueGet&&(valueGet=function valueGet(){return this.value},valueSet=function valueSet(value){this.value=value},patchValhook(npt.type),installNativeValueSetFallback(npt))}}"textarea"!==input.tagName.toLowerCase()&&opts.ignorables.push(keyCode.ENTER);var elementType=input.getAttribute("type"),isSupported="input"===input.tagName.toLowerCase()&&-1!==$.inArray(elementType,opts.supportsInputType)||input.isContentEditable||"textarea"===input.tagName.toLowerCase();if(!isSupported)if("input"===input.tagName.toLowerCase()){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null}else isSupported="partial";return!1!==isSupported?patchValueProperty(input):input.inputmask=void 0,isSupported}EventRuler.off(el);var isSupported=isElementTypeSupported(el,opts);if(!1!==isSupported){inputmask.originalPlaceholder=el.placeholder,inputmask.maxLength=void 0!==el?el.maxLength:void 0,-1===inputmask.maxLength&&(inputmask.maxLength=void 0),"inputMode"in el&&null===el.getAttribute("inputmode")&&(el.inputMode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),!0===isSupported&&(opts.showMaskOnFocus=opts.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(el.autocomplete),iphone&&(opts.insertModeVisual=!1),EventRuler.on(el,"submit",EventHandlers.submitEvent),EventRuler.on(el,"reset",EventHandlers.resetEvent),EventRuler.on(el,"blur",EventHandlers.blurEvent),EventRuler.on(el,"focus",EventHandlers.focusEvent),EventRuler.on(el,"invalid",EventHandlers.invalidEvent),EventRuler.on(el,"click",EventHandlers.clickEvent),EventRuler.on(el,"mouseleave",EventHandlers.mouseleaveEvent),EventRuler.on(el,"mouseenter",EventHandlers.mouseenterEvent),EventRuler.on(el,"paste",EventHandlers.pasteEvent),EventRuler.on(el,"cut",EventHandlers.cutEvent),EventRuler.on(el,"complete",opts.oncomplete),EventRuler.on(el,"incomplete",opts.onincomplete),EventRuler.on(el,"cleared",opts.oncleared),mobile||!0===opts.inputEventOnly?el.removeAttribute("maxLength"):(EventRuler.on(el,"keydown",EventHandlers.keydownEvent),EventRuler.on(el,"keypress",EventHandlers.keypressEvent)),EventRuler.on(el,"input",EventHandlers.inputFallBackEvent),EventRuler.on(el,"compositionend",EventHandlers.compositionendEvent)),EventRuler.on(el,"setvalue",EventHandlers.setValueEvent),inputmask.undoValue=getBufferTemplate().join("");var activeElement=(el.inputmask.shadowRoot||document).activeElement;if(""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||activeElement===el){applyInputValue(el,el.inputmask._valueGet(!0),opts);var buffer=getBuffer().slice();!1===isComplete(buffer)&&opts.clearIncomplete&&resetMaskSet(),opts.clearMaskOnLostFocus&&activeElement!==el&&(-1===getLastValidPosition()?buffer=[]:clearOptionalTail(buffer)),(!1===opts.clearMaskOnLostFocus||opts.showMaskOnFocus&&activeElement===el||""!==el.inputmask._valueGet(!0))&&writeBuffer(el,buffer),activeElement===el&&caret(el,seekNext(getLastValidPosition()))}}}if(void 0!==actionObj)switch(actionObj.action){case"isComplete":return el=actionObj.el,isComplete(getBuffer());case"unmaskedvalue":return void 0!==el&&void 0===actionObj.value||(valueBuffer=actionObj.value,valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,valueBuffer,opts)||valueBuffer).split(""),checkVal.call(this,void 0,!1,!1,valueBuffer),$.isFunction(opts.onBeforeWrite)&&opts.onBeforeWrite.call(inputmask,void 0,getBuffer(),0,opts)),unmaskedvalue(el);case"mask":mask();break;case"format":return valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer),actionObj.metadata?{value:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""),metadata:maskScope.call(this,{action:"getmetadata"},maskset,opts)}:isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");case"isValid":actionObj.value?(valueBuffer=($.isFunction(opts.onBeforeMask)&&opts.onBeforeMask.call(inputmask,actionObj.value,opts)||actionObj.value).split(""),checkVal.call(this,void 0,!0,!1,valueBuffer)):actionObj.value=isRTL?getBuffer().slice().reverse().join(""):getBuffer().join("");for(var buffer=getBuffer(),rl=determineLastRequiredPosition(),lmib=buffer.length-1;rl<lmib&&!isMask(lmib);lmib--);return buffer.splice(rl,lmib+1-rl),isComplete(buffer)&&actionObj.value===(isRTL?getBuffer().slice().reverse().join(""):getBuffer().join(""));case"getemptymask":return getBufferTemplate().join("");case"remove":if(el&&el.inputmask){$.data(el,"_inputmask_opts",null);var cv=opts.autoUnmask?unmaskedvalue(el):el.inputmask._valueGet(opts.autoUnmask),valueProperty;cv!==getBufferTemplate().join("")?el.inputmask._valueSet(cv,opts.autoUnmask):el.inputmask._valueSet(""),EventRuler.off(el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),"value"),valueProperty&&el.inputmask.__valueGet&&Object.defineProperty(el,"value",{get:el.inputmask.__valueGet,set:el.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&el.__lookupGetter__("value")&&el.inputmask.__valueGet&&(el.__defineGetter__("value",el.inputmask.__valueGet),el.__defineSetter__("value",el.inputmask.__valueSet)),el.inputmask=void 0}return el;case"getmetadata":if($.isArray(maskset.metadata)){var maskTarget=getMaskTemplate(!0,0,!1).join("");return $.each(maskset.metadata,function(ndx,mtdt){if(mtdt.mask===maskTarget)return maskTarget=mtdt,!1}),maskTarget}return maskset.metadata}}},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(object){return object.__proto__}:function(object){return object.constructor.prototype})},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),currentYear=(new Date).getFullYear(),escapeRegex=__webpack_require__(5).default,formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],Hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return function(){return pad(Date.prototype.getHours.call(this),x)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function formatcode(match){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(dynMatches&&void 0!==dynMatches[0]){var fcode=formatCode[match[0][0]+"x"].slice("");return fcode[0]=fcode[0](dynMatches[0]),fcode[3]=fcode[3](dynMatches[0]),fcode}if(formatCode[match[0]])return formatCode[match[0]]}function getTokenizer(opts){if(!opts.tokenizer){var tokens=[],dyntokens=[];for(var ndx in formatCode)if(/\.*x$/.test(ndx)){var dynToken=ndx[0]+"\\d+";-1===dyntokens.indexOf(dynToken)&&dyntokens.push(dynToken)}else-1===tokens.indexOf(ndx[0])&&tokens.push(ndx[0]);opts.tokenizer="("+(0<dyntokens.length?dyntokens.join("|")+"|":"")+tokens.join("+|")+")+?|.",opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function prefillYear(dateParts,currentResult,opts){if(dateParts.year!==dateParts.rawyear){var crrntyear=currentYear.toString(),enteredPart=dateParts.rawyear.replace(/[^0-9]/g,""),currentYearPart=crrntyear.slice(0,enteredPart.length),currentYearNextPart=crrntyear.slice(enteredPart.length);if(2===enteredPart.length&&enteredPart===currentYearPart){var entryCurrentYear=new Date(currentYear,dateParts.month-1,dateParts.day);dateParts.day===entryCurrentYear.getDay()&&(!opts.max||opts.max.date.getTime()>=entryCurrentYear.getTime())&&(dateParts.date.setFullYear(currentYear),dateParts.year=crrntyear,currentResult.insert=[{pos:currentResult.pos+1,c:currentYearNextPart[0]},{pos:currentResult.pos+2,c:currentYearNextPart[1]}])}}return currentResult}function isValidDate(dateParts,currentResult,opts){if(!isFinite(dateParts.rawday)||"29"==dateParts.day&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day)return currentResult;if("29"==dateParts.day){var tokenMatch=getTokenMatch(currentResult.pos,opts);if("yyyy"===tokenMatch.targetMatch[0]&&currentResult.pos-tokenMatch.targetMatchIndex==2)return currentResult.remove=currentResult.pos+1,currentResult}return!1}function isDateInRange(dateParts,result,opts,maskset,fromCheckval){if(!result)return result;if(opts.min){if(dateParts.rawyear){var rawYear=dateParts.rawyear.replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length),maxYear;if(rawYear<minYear){var tokenMatch=getTokenMatch(result.pos,opts);if(rawYear=dateParts.rawyear.substr(0,result.pos-tokenMatch.targetMatchIndex+1),minYear=opts.min.year.substr(0,rawYear.length),minYear<=rawYear)return result.remove=tokenMatch.targetMatchIndex+rawYear.length,result;if(rawYear="yyyy"===tokenMatch.targetMatch[0]?dateParts.rawyear.substr(1,1):dateParts.rawyear.substr(0,1),minYear=opts.min.year.substr(2,1),maxYear=opts.max?opts.max.year.substr(2,1):rawYear,1===rawYear.length&&minYear<=rawYear<=maxYear&&!0!==fromCheckval)return"yyyy"===tokenMatch.targetMatch[0]?(result.insert=[{pos:result.pos+1,c:rawYear,strict:!0}],result.caret=result.pos+2,maskset.validPositions[result.pos].input=opts.min.year[1]):(result.insert=[{pos:result.pos+1,c:opts.min.year[1],strict:!0},{pos:result.pos+2,c:rawYear,strict:!0}],result.caret=result.pos+3,maskset.validPositions[result.pos].input=opts.min.year[0]),result;result=!1}}result&&dateParts.year&&dateParts.year===dateParts.rawyear&&opts.min.date.getTime()==opts.min.date.getTime()&&(result=opts.min.date.getTime()<=dateParts.date.getTime())}return result&&opts.max&&opts.max.date.getTime()==opts.max.date.getTime()&&(result=opts.max.date.getTime()>=dateParts.date.getTime()),result}function parse(format,dateObjValue,opts,raw){var mask="",match,fcode;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);)if(void 0===dateObjValue)if(fcode=formatcode(match))mask+="("+fcode[0]+")";else switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=escapeRegex(match[0])}else if(fcode=formatcode(match))if(!0!==raw&&fcode[3]){var getFn=fcode[3];mask+=getFn.call(dateObjValue.date)}else fcode[2]?mask+=dateObjValue["raw"+fcode[2]]:mask+=match[0];else mask+=match[0];return mask}function pad(val,len){for(val=String(val),len=len||2;val.length<len;)val="0"+val;return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation;function setValue(dateObj,value,opts){dateObj[targetProp]=value.replace(/[^0-9]/g,"0"),dateObj["raw"+targetProp]=value,void 0!==dateOperation&&dateOperation.call(dateObj.date,"month"==targetProp?parseInt(dateObj[targetProp])-1:dateObj[targetProp])}if("string"==typeof mask){for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);){var dynMatches=new RegExp("\\d+$").exec(match[0]),fcode=dynMatches?match[0][0]+"x":match[0],value=void 0;if(dynMatches){var lastIndex=getTokenizer(opts).lastIndex,tokanMatch=getTokenMatch(match.index,opts);getTokenizer(opts).lastIndex=lastIndex,value=mask.slice(0,mask.indexOf(tokanMatch.nextMatch[0]))}else value=mask.slice(0,fcode.length);Object.prototype.hasOwnProperty.call(formatCode,fcode)&&(targetProp=formatCode[fcode][2],dateOperation=formatCode[fcode][1],setValue(dateObj,value,opts)),mask=mask.slice(value.length)}return dateObj}if(mask&&"object"===_typeof(mask)&&Object.prototype.hasOwnProperty.call(mask,"date"))return mask}function importDate(dateObj,opts){return parse(opts.inputFormat,{date:dateObj},opts)}function getTokenMatch(pos,opts){var calcPos=0,targetMatch,match,matchLength=0;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(opts.inputFormat);){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(matchLength=dynMatches?parseInt(dynMatches[0]):match[0].length,calcPos+=matchLength,pos<=calcPos){targetMatch=match,match=getTokenizer(opts).exec(opts.inputFormat);break}}return{targetMatchIndex:calcPos-matchLength,nextMatch:match,targetMatch:targetMatch}}Inputmask.extendAliases({datetime:{mask:function mask(opts){return opts.numericInput=!1,formatCode.S=opts.i18n.ordinalSuffix.join("|"),opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat,opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat,opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat,opts.placeholder=""!==opts.placeholder?opts.placeholder:opts.inputFormat.replace(/[[\]]/,""),opts.regex=parse(opts.inputFormat,void 0,opts),opts.min=analyseMask(opts.min,opts.inputFormat,opts),opts.max=analyseMask(opts.max,opts.inputFormat,opts),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(strict)return!0;if(isNaN(c)&&buffer[pos]!==c){var tokenMatch=getTokenMatch(pos,opts);if(tokenMatch.nextMatch&&tokenMatch.nextMatch[0]===c&&1<tokenMatch.targetMatch[0].length){var validator=formatCode[tokenMatch.targetMatch[0]][0];if(new RegExp(validator).test("0"+buffer[pos-1]))return buffer[pos]=buffer[pos-1],buffer[pos-1]="0",{fuzzy:!0,buffer:buffer,refreshFromBuffer:{start:pos-1,end:pos+1},pos:pos+1}}}return!0},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){if(strict)return!0;var tokenMatch,validator;if(!1===currentResult)return tokenMatch=getTokenMatch(pos+1,opts),tokenMatch.targetMatch&&tokenMatch.targetMatchIndex===pos&&1<tokenMatch.targetMatch[0].length&&void 0!==formatCode[tokenMatch.targetMatch[0]]&&(validator=formatCode[tokenMatch.targetMatch[0]][0],new RegExp(validator).test("0"+c))?{insert:[{pos:pos,c:"0"},{pos:pos+1,c:c}],pos:pos+1}:currentResult;if(currentResult.fuzzy&&(buffer=currentResult.buffer,pos=currentResult.pos),tokenMatch=getTokenMatch(pos,opts),tokenMatch.targetMatch&&tokenMatch.targetMatch[0]&&void 0!==formatCode[tokenMatch.targetMatch[0]]){validator=formatCode[tokenMatch.targetMatch[0]][0];var part=buffer.slice(tokenMatch.targetMatchIndex,tokenMatch.targetMatchIndex+tokenMatch.targetMatch[0].length);!1===new RegExp(validator).test(part.join(""))&&2===tokenMatch.targetMatch[0].length&&maskset.validPositions[tokenMatch.targetMatchIndex]&&maskset.validPositions[tokenMatch.targetMatchIndex+1]&&(maskset.validPositions[tokenMatch.targetMatchIndex+1].input="0")}var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);return result&&dateParts.date.getTime()==dateParts.date.getTime()&&(result=prefillYear(dateParts,result,opts),result=isValidDate(dateParts,result,opts),result=isDateInRange(dateParts,result,opts,maskset,fromCheckval)),pos&&result&&currentResult.pos!==pos?{buffer:parse(opts.inputFormat,dateParts,opts).split(""),refreshFromBuffer:{start:pos,end:currentResult.pos}}:result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;e.ctrlKey&&e.keyCode===keyCode.RIGHT&&(this.inputmask._valueSet(importDate(new Date,opts)),$(this).trigger("setvalue"))},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return unmaskedValue?parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,!0):unmaskedValue},casing:function casing(elem,test,pos,validPositions){return 0==test.nativeDef.indexOf("[ap]")?elem.toLowerCase():0==test.nativeDef.indexOf("[AP]")?elem.toUpperCase():elem},onBeforeMask:function onBeforeMask(initialValue,opts){return"[object Date]"===Object.prototype.toString.call(initialValue)&&(initialValue=importDate(initialValue,opts)),initialValue},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric"}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var Inputmask=__webpack_require__(1),$=Inputmask.dependencyLib,keyCode=__webpack_require__(0),escapeRegex=__webpack_require__(5).default;function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)Inputmask.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker[0]===txt.charAt(i)||opts.optionalmarker[1]===txt.charAt(i)||opts.quantifiermarker[0]===txt.charAt(i)||opts.quantifiermarker[1]===txt.charAt(i)||opts.groupmarker[0]===txt.charAt(i)||opts.groupmarker[1]===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt}function alignDigits(buffer,digits,opts,force){if(0<buffer.length&&0<digits&&(!opts.digitsOptional||force)){var radixPosition=$.inArray(opts.radixPoint,buffer);-1===radixPosition&&(buffer.push(opts.radixPoint),radixPosition=buffer.length-1);for(var i=1;i<=digits;i++)isFinite(buffer[radixPosition+i])||(buffer[radixPosition+i]="0")}return buffer}function findValidator(symbol,maskset){var posNdx=0;if("+"===symbol){for(posNdx in maskset.validPositions);posNdx=parseInt(posNdx)}for(var tstNdx in maskset.tests)if(tstNdx=parseInt(tstNdx),posNdx<=tstNdx)for(var ndx=0,ndxl=maskset.tests[tstNdx].length;ndx<ndxl;ndx++)if((void 0===maskset.validPositions[tstNdx]||"-"===symbol)&&maskset.tests[tstNdx][ndx].match.def===symbol)return tstNdx+(void 0!==maskset.validPositions[tstNdx]&&"-"!==symbol?1:0);return posNdx}function findValid(symbol,maskset){var ret=-1;return $.each(maskset.validPositions,function(ndx,tst){if(tst&&tst.match.def===symbol)return ret=parseInt(ndx),!1}),ret}function parseMinMaxOptions(opts){void 0===opts.parseMinMaxOptions&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done")}function genMask(opts){opts.repeat=0,opts.groupSeparator===opts.radixPoint&&opts.digits&&"0"!==opts.digits&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),1<opts.placeholder.length&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&(opts.positionCaretOnClick="lvp");var decimalDef="0",radixPointDef=opts.radixPoint;!0===opts.numericInput&&void 0===opts.__financeInput?(decimalDef="1",opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts._radixDance=!1,radixPointDef=","===opts.radixPoint?"?":"!",""!==opts.radixPoint&&void 0===opts.definitions[radixPointDef]&&(opts.definitions[radixPointDef]={},opts.definitions[radixPointDef].validator="["+opts.radixPoint+"]",opts.definitions[radixPointDef].placeholder=opts.radixPoint,opts.definitions[radixPointDef].static=!0,opts.definitions[radixPointDef].generated=!0)):(opts.__financeInput=!1,opts.numericInput=!0);var mask="[+]",altMask;if(mask+=autoEscape(opts.prefix,opts),""!==opts.groupSeparator?(void 0===opts.definitions[opts.groupSeparator]&&(opts.definitions[opts.groupSeparator]={},opts.definitions[opts.groupSeparator].validator="["+opts.groupSeparator+"]",opts.definitions[opts.groupSeparator].placeholder=opts.groupSeparator,opts.definitions[opts.groupSeparator].static=!0,opts.definitions[opts.groupSeparator].generated=!0),mask+=opts._mask(opts)):mask+="9{+}",void 0!==opts.digits&&0!==opts.digits){var dq=opts.digits.toString().split(",");isFinite(dq[0])&&dq[1]&&isFinite(dq[1])?mask+=radixPointDef+decimalDef+"{"+opts.digits+"}":(isNaN(opts.digits)||0<parseInt(opts.digits))&&(opts.digitsOptional?(altMask=mask+radixPointDef+decimalDef+"{0,"+opts.digits+"}",opts.keepStatic=!0):mask+=radixPointDef+decimalDef+"{"+opts.digits+"}")}return mask+=autoEscape(opts.suffix,opts),mask+="[-]",altMask&&(mask=[altMask+autoEscape(opts.suffix,opts)+"[-]",mask]),opts.greedy=!1,parseMinMaxOptions(opts),mask}function hanndleRadixDance(pos,c,radixPos,maskset,opts){return opts._radixDance&&opts.numericInput&&c!==opts.negationSymbol.back&&pos<=radixPos&&(0<radixPos||c==opts.radixPoint)&&(void 0===maskset.validPositions[pos-1]||maskset.validPositions[pos-1].input!==opts.negationSymbol.back)&&(pos-=1),pos}function decimalValidator(chrs,maskset,pos,strict,opts){var radixPos=maskset.buffer?maskset.buffer.indexOf(opts.radixPoint):-1,result=-1!==radixPos&&new RegExp("[0-9\uff11-\uff19]").test(chrs);return opts._radixDance&&result&&null==maskset.validPositions[radixPos]?{insert:{pos:radixPos===pos?radixPos+1:radixPos,c:opts.radixPoint},pos:pos}:result}function checkForLeadingZeroes(buffer,opts){var numberMatches=new RegExp("(^"+(""!==opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(buffer.slice().reverse().join("")),number=numberMatches?numberMatches[2]:"",leadingzeroes=!1;return number&&(number=number.split(opts.radixPoint.charAt(0))[0],leadingzeroes=new RegExp("^[0"+opts.groupSeparator+"]*").exec(number)),!(!leadingzeroes||!(1<leadingzeroes[0].length||0<leadingzeroes[0].length&&leadingzeroes[0].length<number.length))&&leadingzeroes}Inputmask.extendAliases({numeric:{mask:genMask,_mask:function _mask(opts){return"("+opts.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"numeric",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",definitions:{0:{validator:decimalValidator},1:{validator:decimalValidator,definitionSymbol:"9"},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front)}},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back}}},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(!1!==opts.__financeInput&&c===opts.radixPoint)return!1;var pattern;if(pattern=opts.shortcuts&&opts.shortcuts[c]){if(1<pattern.length)for(var inserts=[],i=0;i<pattern.length;i++)inserts.push({pos:pos+i,c:pattern[i],strict:!1});return{insert:inserts}}var radixPos=$.inArray(opts.radixPoint,buffer),initPos=pos;if(pos=hanndleRadixDance(pos,c,radixPos,maskset,opts),"-"===c||c===opts.negationSymbol.front){if(!0!==opts.allowMinus)return!1;var isNegative=!1,front=findValid("+",maskset),back=findValid("-",maskset);return-1!==front&&(isNegative=[front,back]),!1!==isNegative?{remove:isNegative,caret:initPos}:{insert:[{pos:findValidator("+",maskset),c:opts.negationSymbol.front,fromIsValid:!0},{pos:findValidator("-",maskset),c:opts.negationSymbol.back,fromIsValid:void 0}],caret:initPos+opts.negationSymbol.back.length}}if(strict)return!0;if(-1!==radixPos&&!0===opts._radixDance&&!1===isSelection&&c===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||0<parseInt(opts.digits))&&radixPos!==pos)return{caret:opts._radixDance&&pos===radixPos-1?radixPos+1:radixPos};if(!1===opts.__financeInput)if(isSelection){if(opts.digitsOptional)return{rewritePosition:caretPos.end};if(!opts.digitsOptional){if(caretPos.begin>radixPos&&caretPos.end<=radixPos)return c===opts.radixPoint?{insert:{pos:radixPos+1,c:"0",fromIsValid:!0},rewritePosition:radixPos}:{rewritePosition:radixPos+1};if(caretPos.begin<radixPos)return{rewritePosition:caretPos.begin-1}}}else if(!opts.showMaskOnHover&&!opts.showMaskOnFocus&&!opts.digitsOptional&&0<opts.digits&&""===this.inputmask.__valueGet.call(this))return{rewritePosition:radixPos};return{rewritePosition:pos}},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){if(!1===currentResult)return currentResult;if(strict)return!0;if(null!==opts.min||null!==opts.max){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min&&(unmasked.toString().length>opts.min.toString().length||unmasked<0))return!1;if(null!==opts.max&&unmasked>opts.max)return!!opts.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:alignDigits(opts.max.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}return currentResult},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp(escapeRegex(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(escapeRegex.call(this,opts.radixPoint),".")),processValue=processValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),processValue=processValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),Number(processValue)):processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");return maskedValue=maskedValue.replace(new RegExp("^"+escapeRegex(opts.negationSymbol.front)),"-"),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.negationSymbol.back)+"$"),""),maskedValue=maskedValue.replace(opts.prefix,""),maskedValue=maskedValue.replace(opts.suffix,""),maskedValue=maskedValue.replace(new RegExp(escapeRegex(opts.groupSeparator)+"([0-9]{3})","g"),"$1"),","===opts.radixPoint&&(maskedValue=maskedValue.replace(escapeRegex(opts.radixPoint),".")),isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){var radixPoint=opts.radixPoint||",";isFinite(opts.digits)&&(opts.digits=parseInt(opts.digits)),"number"!=typeof initialValue&&"number"!==opts.inputType||""===radixPoint||(initialValue=initialValue.toString().replace(".",radixPoint));var valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=1<valueParts.length?valueParts[1].replace(/[^0-9]/g,""):"",forceDigits=1<valueParts.length;initialValue=integerPart+(""!==decimalPart?radixPoint+decimalPart:decimalPart);var digits=0;if(""!==radixPoint&&(digits=opts.digitsOptional?opts.digits<decimalPart.length?opts.digits:decimalPart.length:opts.digits,""!==decimalPart||!opts.digitsOptional)){var digitsFactor=Math.pow(10,digits||1);initialValue=initialValue.replace(escapeRegex(radixPoint),"."),isNaN(parseFloat(initialValue))||(initialValue=(opts.roundingFN(parseFloat(initialValue)*digitsFactor)/digitsFactor).toFixed(digits)),initialValue=initialValue.toString().replace(".",radixPoint)}if(0===opts.digits&&-1!==initialValue.indexOf(radixPoint)&&(initialValue=initialValue.substring(0,initialValue.indexOf(radixPoint))),null!==opts.min||null!==opts.max){var numberValue=initialValue.toString().replace(radixPoint,".");null!==opts.min&&numberValue<opts.min?initialValue=opts.min.toString().replace(".",radixPoint):null!==opts.max&&numberValue>opts.max&&(initialValue=opts.max.toString().replace(".",radixPoint))}return alignDigits(initialValue.toString().split(""),digits,opts,forceDigits).join("")},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function stripBuffer(buffer,stripRadix){if(!1!==opts.__financeInput||stripRadix){var position=$.inArray(opts.radixPoint,buffer);-1!==position&&buffer.splice(position,1)}if(""!==opts.groupSeparator)for(;-1!==(position=buffer.indexOf(opts.groupSeparator));)buffer.splice(position,1);return buffer}var result,leadingzeroes=checkForLeadingZeroes(buffer,opts);if(leadingzeroes)for(var caretNdx=buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join(""))-(leadingzeroes[0]==leadingzeroes.input?0:1),offset=leadingzeroes[0]==leadingzeroes.input?1:0,i=leadingzeroes[0].length-offset;0<i;i--)delete this.maskset.validPositions[caretNdx+i],delete buffer[caretNdx+i];if(e)switch(e.type){case"blur":case"checkval":if(null!==opts.min){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min)return{refreshFromBuffer:!0,buffer:alignDigits(opts.min.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}if(buffer[buffer.length-1]===opts.negationSymbol.front){var nmbrMtchs=new RegExp("(^"+(""!=opts.negationSymbol.front?escapeRegex(opts.negationSymbol.front)+"?":"")+escapeRegex(opts.prefix)+")(.*)("+escapeRegex(opts.suffix)+(""!=opts.negationSymbol.back?escapeRegex(opts.negationSymbol.back)+"?":"")+"$)").exec(stripBuffer(buffer.slice(),!0).reverse().join("")),number=nmbrMtchs?nmbrMtchs[2]:"";0==number&&(result={refreshFromBuffer:!0,buffer:[0]})}else""!==opts.radixPoint&&buffer[0]===opts.radixPoint&&(result&&result.buffer?result.buffer.shift():(buffer.shift(),result={refreshFromBuffer:!0,buffer:stripBuffer(buffer)}));if(opts.enforceDigitsOnBlur){result=result||{};var bffr=result&&result.buffer||buffer.slice().reverse();result.refreshFromBuffer=!0,result.buffer=alignDigits(bffr,opts.digits,opts,!0).reverse()}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this),bffr;if(e.ctrlKey)switch(e.keyCode){case keyCode.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue"),!1;case keyCode.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===keyCode.DELETE||e.keyCode===keyCode.BACKSPACE||e.keyCode===keyCode.BACKSPACE_SAFARI)&&caretPos.begin!==buffer.length){if(buffer[e.keyCode===keyCode.DELETE?caretPos.begin-1:caretPos.end]===opts.negationSymbol.front)return bffr=buffer.slice().reverse(),""!==opts.negationSymbol.front&&bffr.shift(),""!==opts.negationSymbol.back&&bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin]),!1;if(!0===opts._radixDance){var radixPos=$.inArray(opts.radixPoint,buffer);if(opts.digitsOptional){if(0===radixPos)return bffr=buffer.slice().reverse(),bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin>=bffr.length?bffr.length:caretPos.begin]),!1}else if(-1!==radixPos&&(caretPos.begin<radixPos||caretPos.end<radixPos||e.keyCode===keyCode.DELETE&&caretPos.begin===radixPos))return caretPos.begin!==caretPos.end||e.keyCode!==keyCode.BACKSPACE&&e.keyCode!==keyCode.BACKSPACE_SAFARI||caretPos.begin++,bffr=buffer.slice().reverse(),bffr.splice(bffr.length-caretPos.begin,caretPos.begin-caretPos.end+1),bffr=alignDigits(bffr,opts.digits,opts).join(""),$input.trigger("setvalue",[bffr,caretPos.begin>=bffr.length?radixPos+1:caretPos.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function _mask(opts){return"("+opts.groupSeparator+"99){*|1}("+opts.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}}),module.exports=Inputmask},function(module,exports,__webpack_require__){"use strict";var _window=_interopRequireDefault(__webpack_require__(2)),_inputmask=_interopRequireDefault(__webpack_require__(1));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof _cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(Parent,args,Class){return _construct=isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document;if(document&&document.head&&document.head.attachShadow&&void 0===customElements.get("input-mask")){var InputmaskElement=function(_HTMLElement){function InputmaskElement(){var _this;_classCallCheck(this,InputmaskElement),_this=_possibleConstructorReturn(this,_getPrototypeOf(InputmaskElement).call(this));var attributeNames=_this.getAttributeNames(),shadow=_this.attachShadow({mode:"closed"}),input=document.createElement("input");for(var attr in input.type="text",shadow.appendChild(input),attributeNames)Object.prototype.hasOwnProperty.call(attributeNames,attr)&&input.setAttribute(attributeNames[attr],_this.getAttribute(attributeNames[attr]));var im=new _inputmask.default;return im.dataAttribute="",im.mask(input),input.inputmask.shadowRoot=shadow,_this}return _inherits(InputmaskElement,_HTMLElement),InputmaskElement}(_wrapNativeSuper(HTMLElement));customElements.define("input-mask",InputmaskElement)}}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function(window) {
    'use strict';

    var mixitup = null,
        h       = null;

    (function() {
        var VENDORS = ['webkit', 'moz', 'o', 'ms'],
            canary  = window.document.createElement('div'),
            i       = -1;

        // window.requestAnimationFrame

        for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
            window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame'];
        }

        // Element.nextElementSibling

        if (typeof canary.nextElementSibling === 'undefined') {
            Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
                get: function() {
                    var el = this.nextSibling;

                    while (el) {
                        if (el.nodeType === 1) {
                            return el;
                        }

                        el = el.nextSibling;
                    }

                    return null;
                }
            });
        }

        // Element.matches

        (function(ElementPrototype) {
            ElementPrototype.matches =
                ElementPrototype.matches ||
                ElementPrototype.machesSelector ||
                ElementPrototype.mozMatchesSelector ||
                ElementPrototype.msMatchesSelector ||
                ElementPrototype.oMatchesSelector ||
                ElementPrototype.webkitMatchesSelector ||
                function (selector) {
                    return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                };
        })(window.Element.prototype);

        // Object.keys
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

        if (!Object.keys) {
            Object.keys = (function() {
                var hasOwnProperty      = Object.prototype.hasOwnProperty,
                    hasDontEnumBug      = false,
                    dontEnums           = [],
                    dontEnumsLength     = -1;

                hasDontEnumBug = !({
                    toString: null
                })
                    .propertyIsEnumerable('toString');

                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ];

                dontEnumsLength = dontEnums.length;

                return function(obj) {
                    var result  = [],
                        prop    = '',
                        i       = -1;

                    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                        throw new TypeError('Object.keys called on non-object');
                    }

                    for (prop in obj) {
                        if (hasOwnProperty.call(obj, prop)) {
                            result.push(prop);
                        }
                    }

                    if (hasDontEnumBug) {
                        for (i = 0; i < dontEnumsLength; i++) {
                            if (hasOwnProperty.call(obj, dontEnums[i])) {
                                result.push(dontEnums[i]);
                            }
                        }
                    }

                    return result;
                };
            }());
        }

        // Array.isArray
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        // Object.create
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create

        if (typeof Object.create !== 'function') {
            Object.create = (function(undefined) {
                var Temp = function() {};

                return function (prototype, propertiesObject) {
                    if (prototype !== Object(prototype) && prototype !== null) {
                        throw TypeError('Argument must be an object, or null');
                    }

                    Temp.prototype = prototype || {};

                    var result = new Temp();

                    Temp.prototype = null;

                    if (propertiesObject !== undefined) {
                        Object.defineProperties(result, propertiesObject);
                    }

                    if (prototype === null) {
                        /* jshint ignore:start */
                        result.__proto__ = null;
                        /* jshint ignore:end */
                    }

                    return result;
                };
            })();
        }

        // String.prototyoe.trim

        if (!String.prototype.trim) {
            String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        // Array.prototype.indexOf
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(searchElement) {
                var n, k, t, len;

                if (this === null) {
                    throw new TypeError();
                }

                t = Object(this);

                len = t.length >>> 0;

                if (len === 0) {
                    return -1;
                }

                n = 0;

                if (arguments.length > 1) {
                    n = Number(arguments[1]);

                    if (n !== n) {
                        n = 0;
                    } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }

                if (n >= len) {
                    return -1;
                }

                for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k;
                    }
                }

                return -1;
            };
        }

        // Function.prototype.bind
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind

        if (!Function.prototype.bind) {
            Function.prototype.bind = function(oThis) {
                var aArgs, self, FNOP, fBound;

                if (typeof this !== 'function') {
                    throw new TypeError();
                }

                aArgs = Array.prototype.slice.call(arguments, 1);

                self = this;

                FNOP = function() {};

                fBound = function() {
                    return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                };

                if (this.prototype) {
                    FNOP.prototype = this.prototype;
                }

                fBound.prototype = new FNOP();

                return fBound;
            };
        }

        // Element.prototype.dispatchEvent

        if (!window.Element.prototype.dispatchEvent) {
            window.Element.prototype.dispatchEvent = function(event) {
                try {
                    return this.fireEvent('on' + event.type, event);
                } catch (err) {}
            };
        }
    })();

    /**
     * The `mixitup()` "factory" function creates and returns individual instances
     * of MixItUp, known as "mixers", on which API methods can be called.
     *
     * When loading MixItUp via a script tag, the factory function is accessed
     * via the global variable `mixitup`. When using a module loading
     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
     * exported into your module when you require the MixItUp library.
     *
     * @example
     * mixitup(container [,config] [,foreignDoc])
     *
     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
     * var containerEl = document.querySelector('.container');
     *
     * var mixer = mixitup(containerEl);
     *
     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 3: Passing a configuration object</caption>
     * var mixer = mixitup(containerEl, {
     *     animation: {
     *         effects: 'fade scale(0.5)'
     *     }
     * });
     *
     * @example <caption>Example 4: Passing an iframe reference</caption>
     * var mixer = mixitup(containerEl, config, foreignDocument);
     *
     * @global
     * @namespace
     * @public
     * @kind        function
     * @since       3.0.0
     * @param       {(Element|string)}  container
     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
     * @param       {object}            [config]
     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
     * @param       {object}            [foreignDoc]
     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
     * @return      {mixitup.Mixer}
     *      A "mixer" object holding the MixItUp instance.
     */

    mixitup = function(container, config, foreignDoc) {
        var el                  = null,
            returnCollection    = false,
            instance            = null,
            facade              = null,
            doc                 = null,
            output              = null,
            instances           = [],
            id                  = '',
            elements            = [],
            i                   = -1;

        doc = foreignDoc || window.document;

        if (returnCollection = arguments[3]) {
            // A non-documented 4th paramater enabling control of multiple instances

            returnCollection = typeof returnCollection === 'boolean';
        }

        if (typeof container === 'string') {
            elements = doc.querySelectorAll(container);
        } else if (container && typeof container === 'object' && h.isElement(container, doc)) {
            elements = [container];
        } else if (container && typeof container === 'object' && container.length) {
            // Although not documented, the container may also be an array-like list of
            // elements such as a NodeList or jQuery collection, is returnCollection is true

            elements = container;
        } else {
            throw new Error(mixitup.messages.errorFactoryInvalidContainer());
        }

        if (elements.length < 1) {
            throw new Error(mixitup.messages.errorFactoryContainerNotFound());
        }

        for (i = 0; el = elements[i]; i++) {
            if (i > 0 && !returnCollection) break;

            if (!el.id) {
                id = 'MixItUp' + h.randomHex();

                el.id = id;
            } else {
                id = el.id;
            }

            if (mixitup.instances[id] instanceof mixitup.Mixer) {
                instance = mixitup.instances[id];

                if (!config || (config && config.debug && config.debug.showWarnings !== false)) {
                    console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                }
            } else {
                instance = new mixitup.Mixer();

                instance.attach(el, doc, id, config);

                mixitup.instances[id] = instance;
            }

            facade = new mixitup.Facade(instance);

            if (config && config.debug && config.debug.enable) {
                instances.push(instance);
            } else {
                instances.push(facade);
            }
        }

        if (returnCollection) {
            output = new mixitup.Collection(instances);
        } else {
            // Return the first instance regardless

            output = instances[0];
        }

        return output;
    };

    /**
     * The `.use()` static method is used to extend the functionality of mixitup with compatible
     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
     *
     * You need only call the `.use()` function once per project, per extension, as module loaders
     * will cache a single reference to MixItUp inclusive of all changes made.
     *
     * @example
     * mixitup.use(extension)
     *
     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
     *
     * import mixitup from 'mixitup';
     * import mixitupPagination from 'mixitup-pagination';
     *
     * mixitup.use(mixitupPagination);
     *
     * // All mixers created by the factory function in all modules will now
     * // have pagination functionality
     *
     * var mixer = mixitup('.container');
     *
     * @public
     * @name     use
     * @memberof mixitup
     * @kind     function
     * @static
     * @since    3.0.0
     * @param    {*}  extension   A reference to the extension or library to be used.
     * @return   {void}
     */

    mixitup.use = function(extension) {
        mixitup.Base.prototype.callActions.call(mixitup, 'beforeUse', arguments);

        // Call the extension's factory function, passing
        // the mixitup factory as a paramater

        if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
            // Mixitup extension

            if (typeof mixitup.extensions[extension.NAME] === 'undefined') {
                extension(mixitup);

                mixitup.extensions[extension.NAME] = extension;
            }
        } else if (extension.fn && extension.fn.jquery) {
            // jQuery

            mixitup.libraries.$ = extension;
        }

        mixitup.Base.prototype.callActions.call(mixitup, 'afterUse', arguments);
    };

    mixitup.instances   = {};
    mixitup.extensions  = {};
    mixitup.libraries   = {};

    /**
     * @private
     */

    h = {

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {boolean}
         */

        hasClass: function(el, cls) {
            return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        addClass: function(el, cls) {
            if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls;
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */

        removeClass: function(el, cls) {
            if (this.hasClass(el, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');

                el.className = el.className.replace(reg, ' ').trim();
            }
        },

        /**
         * Merges the properties of the source object onto the
         * target object. Alters the target object.
         *
         * @private
         * @param   {object}    destination
         * @param   {object}    source
         * @param   {boolean}   [deep=false]
         * @param   {boolean}   [handleErrors=false]
         * @return  {void}
         */

        extend: function(destination, source, deep, handleErrors) {
            var sourceKeys  = [],
                key         = '',
                i           = -1;

            deep = deep || false;
            handleErrors = handleErrors || false;

            try {
                if (Array.isArray(source)) {
                    for (i = 0; i < source.length; i++) {
                        sourceKeys.push(i);
                    }
                } else if (source) {
                    sourceKeys = Object.keys(source);
                }

                for (i = 0; i < sourceKeys.length; i++) {
                    key = sourceKeys[i];

                    if (!deep || typeof source[key] !== 'object' || this.isElement(source[key])) {
                        // All non-object properties, or all properties if shallow extend

                        destination[key] = source[key];
                    } else if (Array.isArray(source[key])) {
                        // Arrays

                        if (!destination[key]) {
                            destination[key] = [];
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    } else {
                        // Objects

                        if (!destination[key]) {
                            destination[key] = {};
                        }

                        this.extend(destination[key], source[key], deep, handleErrors);
                    }
                }
            } catch(err) {
                if (handleErrors) {
                    this.handleExtendError(err, destination);
                } else {
                    throw err;
                }
            }

            return destination;
        },

        /**
         * @private
         * @param   {Error}  err
         * @param   {object} destination
         * @return  {void}
         */

        handleExtendError: function(err, destination) {
            var re                  = /property "?(\w*)"?[,:] object/i,
                matches             = null,
                erroneous           = '',
                message             = '',
                suggestion          = '',
                probableMatch       = '',
                key                 = '',
                mostMatchingChars   = -1,
                i                   = -1;

            if (err instanceof TypeError && (matches = re.exec(err.message))) {
                erroneous = matches[1];

                for (key in destination) {
                    i = 0;

                    while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
                        i++;
                    }

                    if (i > mostMatchingChars) {
                        mostMatchingChars = i;
                        probableMatch = key;
                    }
                }

                if (mostMatchingChars > 1) {
                    suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                        probableMatch: probableMatch
                    });
                }

                message = mixitup.messages.errorConfigInvalidProperty({
                    erroneous: erroneous,
                    suggestion: suggestion
                });

                throw new TypeError(message);
            }

            throw err;
        },

        /**
         * @private
         * @param   {string} str
         * @return  {function}
         */

        template: function(str) {
            var re          = /\${([\w]*)}/g,
                dynamics    = {},
                matches     = null;

            while ((matches = re.exec(str))) {
                dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g');
            }

            return function(data) {
                var key     = '',
                    output  = str;

                data = data || {};

                for (key in dynamics) {
                    output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '');
                }

                return output;
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @param   {boolean}       useCapture
         * @return  {void}
         */

        on: function(el, type, fn, useCapture) {
            if (!el) return;

            if (el.addEventListener) {
                el.addEventListener(type, fn, useCapture);
            } else if (el.attachEvent) {
                el['e' + type + fn] = fn;

                el[type + fn] = function() {
                    el['e' + type + fn](window.event);
                };

                el.attachEvent('on' + type, el[type + fn]);
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @return  {void}
         */

        off: function(el, type, fn) {
            if (!el) return;

            if (el.removeEventListener) {
                el.removeEventListener(type, fn, false);
            } else if (el.detachEvent) {
                el.detachEvent('on' + type, el[type + fn]);
                el[type + fn] = null;
            }
        },

        /**
         * @private
         * @param   {string}      eventType
         * @param   {object}      detail
         * @param   {Document}    [doc]
         * @return  {CustomEvent}
         */

        getCustomEvent: function(eventType, detail, doc) {
            var event = null;

            doc = doc || window.document;

            if (typeof window.CustomEvent === 'function') {
                event = new window.CustomEvent(eventType, {
                    detail: detail,
                    bubbles: true,
                    cancelable: true
                });
            } else if (typeof doc.createEvent === 'function') {
                event = doc.createEvent('CustomEvent');
                event.initCustomEvent(eventType, true, true, detail);
            } else {
                event = doc.createEventObject(),
                event.type = eventType;

                event.returnValue = false;
                event.cancelBubble = false;
                event.detail = detail;
            }

            return event;
        },

        /**
         * @private
         * @param   {Event} e
         * @return  {Event}
         */

        getOriginalEvent: function(e) {
            if (e.touches && e.touches.length) {
                return e.touches[0];
            } else if (e.changedTouches && e.changedTouches.length) {
                return e.changedTouches[0];
            } else {
                return e;
            }
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        selector
         * @return  {Number}
         */

        index: function(el, selector) {
            var i = 0;

            while ((el = el.previousElementSibling) !== null) {
                if (!selector || el.matches(selector)) {
                    ++i;
                }
            }

            return i;
        },

        /**
         * Converts a dash or snake-case string to camel case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        camelCase: function(str) {
            return str.toLowerCase().replace(/([_-][a-z])/g, function($1) {
                return $1.toUpperCase().replace(/[_-]/, '');
            });
        },

        /**
         * Converts a dash or snake-case string to pascal case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */

        pascalCase: function(str) {
            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
        },

        /**
         * Converts a camel or pascal-case string to dash case.
         *
         * @private
         * @param   {string}    str
         * @return  {string}
         */

        dashCase: function(str) {
            return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {boolean}
         */

        isElement: function(el, doc) {
            doc = doc || window.document;

            if (
                window.HTMLElement &&
                el instanceof window.HTMLElement
            ) {
                return true;
            } else if (
                doc.defaultView &&
                doc.defaultView.HTMLElement &&
                el instanceof doc.defaultView.HTMLElement
            ) {
                return true;
            } else {
                return (
                    el !== null &&
                    el.nodeType === 1 &&
                    typeof el.nodeName === 'string'
                );
            }
        },

        /**
         * @private
         * @param   {string}            htmlString
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {DocumentFragment}
         */

        createElement: function(htmlString, doc) {
            var frag = null,
                temp = null;

            doc = doc || window.document;

            frag = doc.createDocumentFragment();
            temp = doc.createElement('div');

            temp.innerHTML = htmlString.trim();

            while (temp.firstChild) {
                frag.appendChild(temp.firstChild);
            }

            return frag;
        },

        /**
         * @private
         * @param   {Node} node
         * @return  {void}
         */

        removeWhitespace: function(node) {
            var deleting;

            while (node && node.nodeName === '#text') {
                deleting = node;

                node = node.previousSibling;

                deleting.parentElement && deleting.parentElement.removeChild(deleting);
            }
        },

        /**
         * @private
         * @param   {Array<*>}  a
         * @param   {Array<*>}  b
         * @return  {boolean}
         */

        isEqualArray: function(a, b) {
            var i = a.length;

            if (i !== b.length) return false;

            while (i--) {
                if (a[i] !== b[i]) return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {object}  a
         * @param   {object}  b
         * @return  {boolean}
         */

        deepEquals: function(a, b) {
            var key;

            if (typeof a === 'object' && a && typeof b === 'object' && b) {
                if (Object.keys(a).length !== Object.keys(b).length) return false;

                for (key in a) {
                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                }
            } else if (a !== b) {
                return false;
            }

            return true;
        },

        /**
         * @private
         * @param   {Array<*>}  oldArray
         * @return  {Array<*>}
         */

        arrayShuffle: function(oldArray) {
            var newArray    = oldArray.slice(),
                len         = newArray.length,
                i           = len,
                p           = -1,
                t           = [];

            while (i--) {
                p = ~~(Math.random() * len);
                t = newArray[i];

                newArray[i] = newArray[p];
                newArray[p] = t;
            }

            return newArray;
        },

        /**
         * @private
         * @param   {object}    list
         */

        arrayFromList: function(list) {
            var output, i;

            try {
                return Array.prototype.slice.call(list);
            } catch(err) {
                output = [];

                for (i = 0; i < list.length; i++) {
                    output.push(list[i]);
                }

                return output;
            }
        },

        /**
         * @private
         * @param   {function}  func
         * @param   {Number}    wait
         * @param   {boolean}   immediate
         * @return  {function}
         */

        debounce: function(func, wait, immediate) {
            var timeout;

            return function() {
                var self     = this,
                    args     = arguments,
                    callNow  = immediate && !timeout,
                    later    = null;

                later = function() {
                    timeout  = null;

                    if (!immediate) {
                        func.apply(self, args);
                    }
                };

                clearTimeout(timeout);

                timeout = setTimeout(later, wait);

                if (callNow) func.apply(self, args);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   element
         * @return  {object}
         */

        position: function(element) {
            var xPosition       = 0,
                yPosition       = 0,
                offsetParent    = element;

            while (element) {
                xPosition -= element.scrollLeft;
                yPosition -= element.scrollTop;

                if (element === offsetParent) {
                    xPosition += element.offsetLeft;
                    yPosition += element.offsetTop;

                    offsetParent = element.offsetParent;
                }

                element = element.parentElement;
            }

            return {
                x: xPosition,
                y: yPosition
            };
        },

        /**
         * @private
         * @param   {object}    node1
         * @param   {object}    node2
         * @return  {Number}
         */

        getHypotenuse: function(node1, node2) {
            var distanceX = node1.x - node2.x,
                distanceY = node1.y - node2.y;

            distanceX = distanceX < 0 ? distanceX * -1 : distanceX,
            distanceY = distanceY < 0 ? distanceY * -1 : distanceY;

            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        },

        /**
         * Calcuates the area of intersection between two rectangles and expresses it as
         * a ratio in comparison to the area of the first rectangle.
         *
         * @private
         * @param   {Rect}  box1
         * @param   {Rect}  box2
         * @return  {number}
         */

        getIntersectionRatio: function(box1, box2) {
            var controlArea         = box1.width * box1.height,
                intersectionX       = -1,
                intersectionY       = -1,
                intersectionArea    = -1,
                ratio               = -1;

            intersectionX =
                Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));

            intersectionY =
                Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));

            intersectionArea = intersectionY * intersectionX;

            ratio = intersectionArea / controlArea;

            return ratio;
        },

        /**
         * @private
         * @param   {object}            el
         * @param   {string}            selector
         * @param   {boolean}           [includeSelf]
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {Element|null}
         */

        closestParent: function(el, selector, includeSelf, doc) {
            var parent  = el.parentNode;

            doc = doc || window.document;

            if (includeSelf && el.matches(selector)) {
                return el;
            }

            while (parent && parent != doc.body) {
                if (parent.matches && parent.matches(selector)) {
                    return parent;
                } else if (parent.parentNode) {
                    parent = parent.parentNode;
                } else {
                    return null;
                }
            }

            return null;
        },

        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {string}            selector
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {NodeList}
         */

        children: function(el, selector, doc) {
            var children    = [],
                tempId      = '';

            doc = doc || window.doc;

            if (el) {
                if (!el.id) {
                    tempId = 'Temp' + this.randomHexKey();

                    el.id = tempId;
                }

                children = doc.querySelectorAll('#' + el.id + ' > ' + selector);

                if (tempId) {
                    el.removeAttribute('id');
                }
            }

            return children;
        },

        /**
         * Creates a clone of a provided array, with any empty strings removed.
         *
         * @private
         * @param   {Array<*>} originalArray
         * @return  {Array<*>}
         */

        clean: function(originalArray) {
            var cleanArray = [],
                i = -1;

            for (i = 0; i < originalArray.length; i++) {
                if (originalArray[i] !== '') {
                    cleanArray.push(originalArray[i]);
                }
            }

            return cleanArray;
        },

        /**
         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
         *
         * @private
         * @param  {object} libraries
         * @return {h.Deferred}
         */

        defer: function(libraries) {
            var deferred       = null,
                promiseWrapper = null,
                $              = null;

            promiseWrapper = new this.Deferred();

            if (mixitup.features.has.promises) {
                // ES6 native promise or polyfill

                promiseWrapper.promise = new Promise(function(resolve, reject) {
                    promiseWrapper.resolve = resolve;
                    promiseWrapper.reject  = reject;
                });
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.Deferred === 'function') {
                // jQuery

                deferred = $.Deferred();

                promiseWrapper.promise = deferred.promise();
                promiseWrapper.resolve = deferred.resolve;
                promiseWrapper.reject  = deferred.reject;
            } else if (window.console) {
                // No implementation

                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return promiseWrapper;
        },

        /**
         * @private
         * @param   {Array<Promise>}    tasks
         * @param   {object}            libraries
         * @return  {Promise<Array>}
         */

        all: function(tasks, libraries) {
            var $ = null;

            if (mixitup.features.has.promises) {
                return Promise.all(tasks);
            } else if (($ = (window.jQuery || libraries.$)) && typeof $.when === 'function') {
                return $.when.apply($, tasks)
                    .done(function() {
                        // jQuery when returns spread arguments rather than an array or resolutions

                        return arguments;
                    });
            }

            // No implementation

            if (window.console) {
                console.warn(mixitup.messages.warningNoPromiseImplementation());
            }

            return [];
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        property
         * @param   {Array<string>} vendors
         * @return  {string}
         */

        getPrefix: function(el, property, vendors) {
            var i       = -1,
                prefix  = '';

            if (h.dashCase(property) in el.style) return '';

            for (i = 0; prefix = vendors[i]; i++) {
                if (prefix + property in el.style) {
                    return prefix.toLowerCase();
                }
            }

            return 'unsupported';
        },

        /**
         * @private
         * @return  {string}
         */

        randomHex: function() {
            return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
        },

        /**
         * @private
         * @param   {HTMLDocument}  [doc]
         * @return  {object}
         */

        getDocumentState: function(doc) {
            doc = typeof doc.body === 'object' ? doc : window.document;

            return {
                scrollTop: window.pageYOffset,
                scrollLeft: window.pageXOffset,
                docHeight: doc.documentElement.scrollHeight,
                docWidth: doc.documentElement.scrollWidth,
                viewportHeight: doc.documentElement.clientHeight,
                viewportWidth: doc.documentElement.clientWidth
            };
        },

        /**
         * @private
         * @param   {object}    obj
         * @param   {function}  fn
         * @return  {function}
         */

        bind: function(obj, fn) {
            return function() {
                return fn.apply(obj, arguments);
            };
        },

        /**
         * @private
         * @param   {HTMLElement}   el
         * @return  {boolean}
         */

        isVisible: function(el) {
            var styles = null;

            if (el.offsetParent) return true;

            styles = window.getComputedStyle(el);

            if (
                styles.position === 'fixed' &&
                styles.visibility !== 'hidden' &&
                styles.opacity !== '0'
            ) {
                // Fixed elements report no offsetParent,
                // but may still be invisible

                return true;
            }

            return false;
        },

        /**
         * @private
         * @param   {object}    obj
         */

        seal: function(obj) {
            if (typeof Object.seal === 'function') {
                Object.seal(obj);
            }
        },

        /**
         * @private
         * @param   {object}    obj
         */

        freeze: function(obj) {
            if (typeof Object.freeze === 'function') {
                Object.freeze(obj);
            }
        },

        /**
         * @private
         * @param   {string}    control
         * @param   {string}    specimen
         * @return  {boolean}
         */

        compareVersions: function(control, specimen) {
            var controlParts    = control.split('.'),
                specimenParts   = specimen.split('.'),
                controlPart     = -1,
                specimenPart    = -1,
                i               = -1;

            for (i = 0; i < controlParts.length; i++) {
                controlPart     = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
                specimenPart    = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);

                if (specimenPart < controlPart) {
                    return false;
                } else if (specimenPart > controlPart) {
                    return true;
                }
            }

            return true;
        },

        /**
         * @private
         * @constructor
         */

        Deferred: function() {
            this.promise    = null;
            this.resolve    = null;
            this.reject     = null;
            this.id         = h.randomHex();
        },

        /**
         * @private
         * @param   {object}  obj
         * @return  {boolean}
         */

        isEmptyObject: function(obj) {
            var key = '';

            if (typeof Object.keys === 'function') {
                return Object.keys(obj).length === 0;
            }

            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }

            return true;
        },

        /**
         * @param   {mixitup.Config.ClassNames}   classNames
         * @param   {string}                      elementName
         * @param   {string}                      [modifier]
         * @return  {string}
         */

        getClassname: function(classNames, elementName, modifier) {
            var classname = '';

            classname += classNames.block;

            if (classname.length) {
                classname += classNames.delineatorElement;
            }

            classname += classNames['element' + this.pascalCase(elementName)];

            if (!modifier) return classname;

            if (classname.length) {
                classname += classNames.delineatorModifier;
            }

            classname += modifier;

            return classname;
        },

        /**
         * Returns the value of a property on a given object via its string key.
         *
         * @param   {object}    obj
         * @param   {string}    stringKey
         * @return  {*} value
         */

        getProperty: function(obj, stringKey) {
            var parts           = stringKey.split('.'),
                returnCurrent   = null,
                current         = '',
                i               = 0;

            if (!stringKey) {
                return obj;
            }

            returnCurrent = function(obj) {
                if (!obj) {
                    return null;
                } else {
                    return obj[current];
                }
            };

            while (i < parts.length) {
                current = parts[i];

                obj = returnCurrent(obj);

                i++;
            }

            if (typeof obj !== 'undefined') {
                return obj;
            } else {
                return null;
            }
        }
    };

    mixitup.h = h;

    /**
     * The Base class adds instance methods to all other extensible MixItUp classes,
     * enabling the calling of any registered hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Base = function() {};

    mixitup.Base.prototype = {
        constructor: mixitup.Base,

        /**
         * Calls any registered hooks for the provided action.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    actionName
         * @param       {Array<*>}  args
         * @return      {void}
         */

        callActions: function(actionName, args) {
            var self            = this,
                hooks           = self.constructor.actions[actionName],
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return;

            for (extensionName in hooks) {
                hooks[extensionName].apply(self, args);
            }
        },

        /**
         * Calls any registered hooks for the provided filter.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    filterName
         * @param       {*}         input
         * @param       {Array<*>}  args
         * @return      {*}
         */

        callFilters: function(filterName, input, args) {
            var self            = this,
                hooks           = self.constructor.filters[filterName],
                output          = input,
                extensionName   = '';

            if (!hooks || h.isEmptyObject(hooks)) return output;

            args = args || [];

            for (extensionName in hooks) {
                args = h.arrayFromList(args);

                args.unshift(output);

                output = hooks[extensionName].apply(self, args);
            }

            return output;
        }
    };

    /**
     * The BaseStatic class holds a set of static methods which are then added to all other
     * extensible MixItUp classes as a means of integrating extensions via the addition of new
     * methods and/or actions and hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.BaseStatic = function() {
        this.actions = {};
        this.filters = {};

        /**
         * Performs a shallow extend on the class's prototype, adding one or more new members to
         * the class in a single operation.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {object} extension
         * @return      {void}
         */

        this.extend = function(extension) {
            h.extend(this.prototype, extension);
        };

        /**
         * Registers a function to be called on the action hook of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerAction = function(hookName, extensionName, func) {
            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
        };

        /**
         * Registers a function to be called on the filter of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */

        this.registerFilter = function(hookName, extensionName, func) {
            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
        };
    };

    /**
     * The `mixitup.Features` class performs all feature and CSS prefix detection
     * neccessary for MixItUp to function correctly, as well as storing various
     * string and array constants. All feature decection is on evaluation of the
     * library and stored in a singleton instance for use by other internal classes.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Features = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.boxSizingPrefix            = '';
        this.transformPrefix            = '';
        this.transitionPrefix           = '';

        this.boxSizingPrefix            = '';
        this.transformProp              = '';
        this.transformRule              = '';
        this.transitionProp             = '';
        this.perspectiveProp            = '';
        this.perspectiveOriginProp      = '';

        this.has                        = new mixitup.Has();

        this.canary                     = null;

        this.BOX_SIZING_PROP            = 'boxSizing';
        this.TRANSITION_PROP            = 'transition';
        this.TRANSFORM_PROP             = 'transform';
        this.PERSPECTIVE_PROP           = 'perspective';
        this.PERSPECTIVE_ORIGIN_PROP    = 'perspectiveOrigin';
        this.VENDORS                    = ['Webkit', 'moz', 'O', 'ms'];

        this.TWEENABLE = [
            'opacity',
            'width', 'height',
            'marginRight', 'marginBottom',
            'x', 'y',
            'scale',
            'translateX', 'translateY', 'translateZ',
            'rotateX', 'rotateY', 'rotateZ'
        ];

        this.callActions('afterConstruct');
    };

    mixitup.BaseStatic.call(mixitup.Features);

    mixitup.Features.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Features.prototype,
    /** @lends mixitup.Features */
    {
        constructor: mixitup.Features,

        /**
         * @private
         * @return  {void}
         */

        init: function() {
            var self = this;

            self.callActions('beforeInit', arguments);

            self.canary = document.createElement('div');

            self.setPrefixes();
            self.runTests();

            self.callActions('beforeInit', arguments);
        },

        /**
         * @private
         * @return  {void}
         */

        runTests: function() {
            var self = this;

            self.callActions('beforeRunTests', arguments);

            self.has.promises       = typeof window.Promise === 'function';
            self.has.transitions    = self.transitionPrefix !== 'unsupported';

            self.callActions('afterRunTests', arguments);

            h.freeze(self.has);
        },

        /**
         * @private
         * @return  {void}
         */

        setPrefixes: function() {
            var self = this;

            self.callActions('beforeSetPrefixes', arguments);

            self.transitionPrefix   = h.getPrefix(self.canary, 'Transition', self.VENDORS);
            self.transformPrefix    = h.getPrefix(self.canary, 'Transform', self.VENDORS);
            self.boxSizingPrefix    = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);

            self.boxSizingProp = self.boxSizingPrefix ?
                self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;

            self.transitionProp = self.transitionPrefix ?
                self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;

            self.transformProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;

            self.transformRule = self.transformPrefix ?
                '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;

            self.perspectiveProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;

            self.perspectiveOriginProp = self.transformPrefix ?
                self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) :
                self.PERSPECTIVE_ORIGIN_PROP;

            self.callActions('afterSetPrefixes', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Has = function() {
        this.transitions    = false;
        this.promises       = false;

        h.seal(this);
    };

    // Assign a singleton instance to `mixitup.features` and initialise:

    mixitup.features = new mixitup.Features();

    mixitup.features.init();

    /**
     * A group of properties defining the mixer's animation and effects settings.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        animation
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigAnimation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
         * If `false`, all operations will occur instantly and syncronously, although callback
         * functions and any returned promises will still be fulfilled.
         *
         * @example <caption>Example: Create a mixer with all animations disabled</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         enable: false
         *     }
         * });
         *
         * @name        enable
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A string of one or more space-seperated properties to which transitions will be
         * applied for all filtering animations.
         *
         * Properties can be listed any order or combination, although they will be applied in a specific
         * predefined order to produce consistent results.
         *
         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
         *
         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
         * // As targets are filtered in and out, they will fade between
         * // opacity 1 and 0 and transform between translateZ(-100px) and
         * // translateZ(0).
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateZ(-100px)'
         *     }
         * });
         *
         * @name        effects
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'fade scale'
         */

        this.effects = 'fade scale';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-in
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsIn: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsIn
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsIn = '';

        /**
         * A string of one or more space-seperated effects to be applied only to filter-out
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsOut: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.effectsOut = '';

        /**
         * An integer dictating the duration of all MixItUp animations in milliseconds, not
         * including any additional delay apllied via the `'stagger'` effect.
         *
         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         duration: 200
         *     }
         * });
         *
         * @name        duration
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     600
         */

        this.duration = 600;

        /**
         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
         *
         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'ease-in-out'
         *     }
         * });
         *
         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
         *     }
         * });
         *
         * @name        easing
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'ease'
         */

        this.easing = 'ease';

        /**
         * A boolean dictating whether or not to apply perspective to the MixItUp container
         * during animations. By default, perspective is always applied and creates the
         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
         * and `rotateY`.
         *
         * You may wish to disable this and define your own perspective settings via CSS.
         *
         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         applyPerspective: false
         *     }
         * });
         *
         * @name        applyPerspective
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {bolean}
         * @default     true
         */

        this.applyPerspective = true;

        /**
         * The perspective distance value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective distance of 2000px</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'rotateY(-25deg)',
         *         perspectiveDistance: '2000px'
         *     }
         * });
         *
         * @name        perspectiveDistance
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '3000px'
         */

        this.perspectiveDistance = '3000px';

        /**
         * The perspective-origin value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'transateZ(-200px)',
         *         perspectiveOrigin: '100% 0'
         *     }
         * });
         *
         * @name        perspectiveOrigin
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '50% 50%'
         */

        this.perspectiveOrigin = '50% 50%';

        /**
         * A boolean dictating whether or not to enable the queuing of operations.
         *
         * If `true` (default), and a control is clicked or an API call is made while another
         * operation is progress, the operation will go into the queue and will be automatically exectuted
         * when the previous operaitons is finished.
         *
         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
         *
         * @example <caption>Example: Disable queuing</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queue: false
         *     }
         * });
         *
         * @name        queue
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.queue = true;

        /**
         * An integer dictacting the maximum number of operations allowed in the queue at
         * any time, when queuing is enabled.
         *
         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queueLimit: 5
         *     }
         * });
         *
         * @name        queueLimit
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     3
         */

        this.queueLimit = 3;

        /**
         * A boolean dictating whether or not to transition the height and width of the
         * container as elements are filtered in and out. If disabled, the container height
         * will change abruptly.
         *
         * It may be desirable to disable this on mobile devices as the CSS `height` and
         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
         *
         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
         *     }
         * });
         *
         * @name        animateResizeContainer
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.animateResizeContainer = true;

        /**
         * A boolean dictating whether or not to transition the height and width of target
         * elements as they change throughout the course of an animation.
         *
         * This is often a must for flex-box grid layouts where the size of target elements may change
         * depending on final their position in relation to their siblings, or for `.changeLayout()`
         * operations where the size of targets change between layouts.
         *
         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
         * properties which may adversely affect performance on slower devices, and is therefore
         * disabled by default.
         *
         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeTargets: true
         *     }
         * });
         *
         * @name        animateResizeTargets
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.animateResizeTargets = false;

        /**
         * A custom function used to manipulate the order in which the stagger delay is
         * incremented when using the ‘stagger’ effect.
         *
         * When using the 'stagger' effect, the delay applied to each target element is incremented
         * based on its index. You may create a custom function to manipulate the order in which the
         * delay is incremented and create engaging non-linear stagger effects.
         *
         * The function receives the index of the target element as a parameter, and must
         * return an integer which serves as the multiplier for the stagger delay.
         *
         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return i % 3;
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
         *         }
         *     }
         * });
         *
         * @name        staggerSequence
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {function}
         * @default     null
         */

        this.staggerSequence = null;

        /**
         * A boolean dictating whether or not to reverse the direction of `translate`
         * and `rotate` transforms for elements being filtered out.
         *
         * It can be used to create carousel-like animations where elements enter and exit
         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
         * being filtered in would become `translateX(100%)` for targets being filtered out.
         *
         * This functionality can also be achieved by providing seperate effects
         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
         *
         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
         * // Elements being filtered in will be translated from '100%' to '0' while
         * // elements being filtered out will be translated from 0 to '-100%'
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateX(100%)',
         *         reverseOut: true,
         *         nudge: false // Disable nudging to create a carousel-like effect
         *     }
         * });
         *
         * @name        reverseOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.reverseOut = false;

        /**
         * A boolean dictating whether or not to "nudge" the animation path of targets
         * when they are being filtered in and out simulatenously.
         *
         * This has been the default behavior of MixItUp since version 1, but it
         * may be desirable to disable this effect when filtering directly from
         * one exclusive set of targets to a different exclusive set of targets,
         * to create a carousel-like effect, or a generally more subtle animation.
         *
         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         nudge: false
         *     }
         * });
         *
         * @name        nudge
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.nudge = true;

        /**
         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * height of the container might affect its vertical positioning in the viewport
         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container height-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampHeight: false
         *     }
         * });
         *
         * @name        clampHeight
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampHeight = true;

        /**
         * A boolean dictating whether or not to clamp the width of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * width of the container might affect its horitzontal positioning in the viewport
         * (e.g. a horizontall-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container width-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampWidth: false
         *     }
         * });
         *
         * @name        clampWidth
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.clampWidth = true;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigAnimation);

    mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;

    /**
     * A group of properties relating to the behavior of the Mixer.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        behavior
     * @namespace
     * @public
     * @since       3.1.12
     */

    mixitup.ConfigBehavior = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether to allow "live" sorting of the mixer.
         *
         * Because of the expensive nature of sorting, MixItUp makes use of several
         * internal optimizations to skip redundant sorting operations, such as when
         * the newly requested sort command is the same as the active one. The caveat
         * to this optimization is that "live" edits to the value of a target's sorting
         * attribute will be ignored when requesting a re-sort by the same attribute.
         *
         * By setting to `behavior.liveSort` to `true`, the mixer will always re-sort
         * regardless of whether or not the sorting attribute and order have changed.
         *
         * @example <caption>Example: Enabling `liveSort` to allow for re-sorting</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     behavior: {
         *         liveSort: true
         *     },
         *     load: {
         *         sort: 'edited:desc'
         *     }
         * });
         *
         * var target = containerEl.children[3];
         *
         * console.log(target.getAttribute('data-edited')); // '2015-04-24'
         *
         * target.setAttribute('data-edited', '2017-08-10'); // Update the target's edited date
         *
         * mixer.sort('edited:desc')
         *     .then(function(state) {
         *         // The target is now at the top of the list
         *
         *         console.log(state.targets[0] === target); // true
         *     });
         *
         * @name        liveSort
         * @memberof    mixitup.Config.behavior
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.liveSort = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigBehavior);

    mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;

    /**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * Each function is analogous to an event of the same name triggered from the
     * container element, and is invoked immediately after it.
     *
     * All callback functions receive the current `state` object as their first
     * argument, as well as other more specific arguments described below.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigCallbacks = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A callback function invoked immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * A second `futureState` argument is passed to the function which represents the final
         * state of the mixer once the requested operation has completed.
         *
         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixStart: function(state, futureState) {
         *              console.log('Starting operation...');
         *         }
         *     }
         * });
         *
         * @name        onMixStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixStart = null;

        /**
         * A callback function invoked when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixBusy: function(state) {
         *              console.log('Mixer busy');
         *         }
         *     }
         * });
         *
         * @name        onMixBusy
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixBusy  = null;

        /**
         * A callback function invoked after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: function(state) {
         *              console.log('Operation complete');
         *         }
         *     }
         * });
         *
         * @name        onMixEnd
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixEnd   = null;

        /**
         * A callback function invoked whenever an operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixFail: function(state) {
         *              console.log('No items could be found matching the requested filter');
         *         }
         *     }
         * });
         *
         * @name        onMixFail
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixFail  = null;

        /**
         * A callback function invoked whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * The clicked element is assigned to the `this` keyword within the function. The original
         * click event is passed to the function as the second argument, which can be useful if
         * using `<a>` tags as controls where the default behavior needs to be prevented.
         *
         * Returning `false` from the callback will prevent the control click from triggering
         * an operation.
         *
         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              console.log('The control "' + this.innerText + '" was clicked');
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Prevent original click event from bubbling up:
         *              originalEvent.stopPropagation();
         *
         *              // Prevent default behavior of clicked element:
         *              originalEvent.preventDefault();
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Perform some conditional check:
         *
         *              if (myApp.isLoading) {
         *                  // By returning false, we can prevent the control click from triggering an operation.
         *
         *                  return false;
         *              }
         *         }
         *     }
         * });
         *
         * @name        onMixClick
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onMixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigCallbacks);

    mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;

    /**
     * A group of properties relating to clickable control elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        controls
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigControls = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not controls should be enabled for the mixer instance.
         *
         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
         *
         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
         * via the mixer's API methods.
         *
         * If you do not intend to use the default controls, setting this property to `false` will
         * marginally improve the startup time of your mixer instance, and will also prevent any other active
         * mixer instances in the DOM which are bound to controls from controlling the instance.
         *
         * @example <caption>Example: Disabling controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         enable: false
         *     }
         * });
         *
         * // With the default controls disabled, we can only control
         * // the mixer via its API methods, e.g.:
         *
         * mixer.filter('.cat-1');
         *
         * @name        enable
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.enable = true;

        /**
         * A boolean dictating whether or not to use event delegation when binding click events
         * to the default controls.
         *
         * If `false` (default behavior), each control button in the DOM will be found and
         * individually bound when a mixer is instantiated, with their corresponding actions
         * cached for performance.
         *
         * If `true`, a single click handler will be applied to the `window` (or container element - see
         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
         *
         * If you require a user interface where control buttons may be added, removed, or changed during the
         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
         * performance deficit when using live controls, as the value of each control button must be read
         * from the DOM in real time once the click event has propagated.
         *
         * @example <caption>Example: Setting live controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         live: true
         *     }
         * });
         *
         * // Control buttons can now be added, remove and changed without breaking
         * // the mixer's UI
         *
         * @name        live
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.live = false;

        /**
         * A string dictating the "scope" to use when binding or querying the default controls. The available
         * values are `'global'` or `'local'`.
         *
         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
         * to bind, or delegate click events from (see `config.controls.live`).
         *
         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
         * This may be desireable if you require multiple active mixer instances within the same document, with
         * controls that would otherwise intefere with each other if scoped globally.
         *
         * Conversely, if you wish to control multiple instances with a single UI, you would create one
         * set of controls and keep the controls scope of each mixer set to `global`.
         *
         * @example <caption>Example: Setting 'local' scoped controls</caption>
         * var mixerOne = mixitup(containerOne, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * var mixerTwo = mixitup(containerTwo, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * // Both mixers can now exist within the same document with
         * // isolated controls placed within their container elements.
         *
         * @name        scope
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'global'
         */

        this.scope = 'global'; // enum: ['local' ,'global']

        /**
         * A string dictating the type of logic to apply when concatenating the filter selectors of
         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
         *
         * If set to `'or'` (default behavior), selectors will be concatenated together as
         * a comma-seperated list. For example:
         *
         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
         *
         * If set to `'and'`, selectors will be directly concatenated together. For example:
         *
         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
         *
         * @example <caption>Example: Setting "and" toggle logic</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleLogic: 'and'
         *     }
         * });
         *
         * @name        toggleLogic
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'or'
         */

        this.toggleLogic = 'or'; // enum: ['or', 'and']

        /**
         * A string dictating the filter behavior when all toggles are inactive.
         *
         * When set to `'all'` (default behavior), *all* targets will be shown by default
         * when no toggles are active, or at the moment all active toggles are toggled off.
         *
         * When set to `'none'`, no targets will be shown by default when no toggles are
         * active, or at the moment all active toggles are toggled off.
         *
         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'all'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'all'
         *          console.log(state.totalShow); // 12
         *     });
         *
         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'none'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'none'
         *          console.log(state.totalShow); // 0
         *     });
         *
         * @name        toggleDefault
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.toggleDefault = 'all'; // enum: ['all', 'none']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigControls);

    mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;

    /**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * Most commonly, class names are added to controls by MixItUp to indicate that
     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
     *
     * Using a "BEM" like structure, each classname is broken into the three parts:
     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
     * name (e.g. `'active'`) reflecting the state of the element.
     *
     * By default, each part of the classname is concatenated together using single hyphens as
     * delineators, but this can be easily customised to match the naming convention and style of
     * your project.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
         *
         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio'
         *     }
         * });
         *
         * // Active control output: "portfolio-control-active"
         *
         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: ''
         *     }
         * });
         *
         * // Active control output: "control-active"
         *
         * @name        block
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'mixitup'
         */

        this.block = 'mixitup';

        /**
         * The "element" portion of the class name added to container.
         *
         * @name        elementContainer
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'container'
         */

        this.elementContainer = 'container';

        /**
         * The "element" portion of the class name added to filter controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "mixitup-filter-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "portfolio-filter-active"
         *
         * @name        elementFilter
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementFilter = 'control';

        /**
         * The "element" portion of the class name added to sort controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "mixitup-sort-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "portfolio-sort-active"
         *
         * @name        elementSort
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementSort = 'control';

        /**
         * The "element" portion of the class name added to multimix controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementMultimix: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "mixitup-multimix-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "portfolio-multimix-active"
         *
         * @name        elementMultimix
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementMultimix = 'control';

        /**
         * The "element" portion of the class name added to toggle controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "mixitup-toggle-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "portfolio-toggle-active"
         *
         * @name        elementToggle
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementToggle = 'control';

        /**
         * The "modifier" portion of the class name added to active controls.
         * @name        modifierActive
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'active'
         */

        this.modifierActive = 'active';

        /**
         * The "modifier" portion of the class name added to disabled controls.
         *
         * @name        modifierDisabled
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'disabled'
         */

        this.modifierDisabled = 'disabled';

        /**
         * The "modifier" portion of the class name added to the container when in a "failed" state.
         *
         * @name        modifierFailed
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'failed'
         */

        this.modifierFailed = 'failed';

        /**
         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
         *
         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing the delineator to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *     }
         * });
         *
         * // example active control output: "mixitup__control-active"
         *
         * @name        delineatorElement
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorElement = '-';

        /**
         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
         *
         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing both delineators to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *         delineatorModifier: '--'
         *     }
         * });
         *
         * // Active control output: "mixitup__control--active"
         *
         * @name        delineatorModifier
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */

        this.delineatorModifier = '-';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigClassNames);

    mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;

    /**
     * A group of properties relating to MixItUp's dataset API.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        data
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string specifying the name of the key containing your data model's unique
         * identifier (UID). To use the dataset API, a UID key must be specified and
         * be present and unique on all objects in the dataset you provide to MixItUp.
         *
         * For example, if your dataset is made up of MongoDB documents, the UID
         * key would be `'id'` or `'_id'`.
         *
         * @example <caption>Example: Setting the UID to `'id'`</caption>
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     }
         * });
         *
         * @name        uidKey
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.uidKey = '';

        /**
         * A boolean dictating whether or not MixItUp should "dirty check" each object in
         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
         * for which a change is found.
         *
         * Depending on the complexity of your data model, dirty checking can be expensive
         * and is therefore disabled by default.
         *
         * NB: For changes to be detected, a new immutable instance of the edited model must be
         * provided to mixitup, rather than manipulating properties on the existing instance.
         * If your changes are a result of a DB write and read, you will most likely be calling
         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
         *
         * @example <caption>Example: Enabling dirty checking</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0"
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1"
         *         ...
         *     }
         * ];
         *
         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
         * // function defined
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id',
         *         dirtyCheck: true
         *     },
         *     load: {
         *         dataset: myDataset
         *     },
         *     render: {
         *         target: function() { ... }
         *     }
         * });
         *
         * // For illustration, we will clone and edit the second object in the dataset.
         * // NB: this would typically be done server-side in response to a DB update,
         * and then re-queried via an API.
         *
         * myDataset[1] = Object.assign({}, myDataset[1]);
         *
         * myDataset[1].title = 'Blog Post Title 11';
         *
         * mixer.dataset(myDataset)
         *    .then(function() {
         *        // the target with ID "1", will be re-rendered reflecting its new title
         *    });
         *
         * @name        dirtyCheck
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.dirtyCheck = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigData);

    mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;

    /**
     * A group of properties allowing the toggling of various debug features.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        debug
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigDebug = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not the mixer instance returned by the
         * `mixitup()` factory function should expose private properties and methods.
         *
         * By default, mixer instances only expose their public API, but enabling
         * debug mode will give you access to various mixer internals which may aid
         * in debugging, or the authoring of extensions.
         *
         * @example <caption>Example: Enabling debug mode</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         enable: true
         *     }
         * });
         *
         * // Private properties and methods will now be visible on the mixer instance:
         *
         * console.log(mixer);
         *
         * @name        enable
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.enable = false;

        /**
         * A boolean dictating whether or not warnings should be shown when various
         * common gotchas occur.
         *
         * Warnings are intended to provide insights during development when something
         * occurs that is not a fatal, but may indicate an issue with your integration,
         * and are therefore turned on by default. However, you may wish to disable
         * them in production.
         *
         * @example <caption>Example 1: Disabling warnings</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disabling warnings based on environment</caption>
         *
         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: showWarnings
         *     }
         * });
         *
         * @name        showWarnings
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.showWarnings = true;

        /**
         * Used for server-side testing only.
         *
         * @private
         * @name        fauxAsync
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.fauxAsync = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigDebug);

    mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;

    /**
     * A group of properties relating to the layout of the container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        layout
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A boolean dictating whether or not mixitup should query all descendants
         * of the container for targets, or only immediate children.
         *
         * By default, mixitup will query all descendants matching the
         * `selectors.target` selector when indexing targets upon instantiation.
         * This allows for targets to be nested inside a sub-container which is
         * useful when ring-fencing targets from locally scoped controls in your
         * markup (see `controls.scope`).
         *
         * However, if you are building a more complex UI requiring the nesting
         * of mixers within mixers, you will most likely want to limit targets to
         * immediate children of the container by setting this property to `false`.
         *
         * @example <caption>Example: Restricting targets to immediate children</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         allowNestedTargets: false
         *     }
         * });
         *
         * @name        allowNestedTargets
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.allowNestedTargets = true;

        /**
         * A string specifying an optional class name to apply to the container when in
         * its default state.
         *
         * By changing this class name or adding a class name to the container via the
         * `.changeLayout()` API method, the CSS layout of the container can be changed,
         * and MixItUp will attemp to gracefully animate the container and its targets
         * between states.
         *
         * @example <caption>Example 1: Specifying a container class name</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * mixer.changeLayout('list')
         *     .then(function(state) {
         *          console.log(state.activeContainerClass); // "list"
         *     });
         *
         * @name        containerClassName
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.containerClassName = '';

        /**
         * A reference to a non-target sibling element after which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
         *
         * var addButton = containerEl.querySelector('button');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingBefore: addButton
         *     }
         * });
         *
         * @name        siblingBefore
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingBefore = null;

        /**
         * A reference to a non-target sibling element before which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
         *
         * var gap = containerEl.querySelector('.gap');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingAfter: gap
         *     }
         * });
         *
         * @name        siblingAfter
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */

        this.siblingAfter = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLayout);

    mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;

    /**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigLoad = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A string defining any filtering to be statically applied to the mixer on load.
         * As per the `.filter()` API, this can be any valid selector string, or the
         * values `'all'` or `'none'`.
         *
         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
         *
         * // The mixer will show only those targets matching '.category-a' on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: '.category-a'
         *     }
         * });
         *
         * @example <caption>Example 2: Hiding all targets on load</caption>
         *
         * // The mixer will show hide all targets on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: 'none'
         *     }
         * });
         *
         * @name        filter
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'all'
         */

        this.filter = 'all';

        /**
         * A string defining any sorting to be statically applied to the mixer on load.
         * As per the `.sort()` API, this should be a valid "sort string" made up of
         * an attribute to sort by (or `'default'`) followed by an optional sorting
         * order, or the value `'random'`;
         *
         * @example <caption>Example: Defining sorting to be applied on load</caption>
         *
         * // The mixer will sort the container by the value of the `data-published-date`
         * // attribute, in descending order.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         sort: 'published-date:desc'
         *     }
         * });
         *
         * @name        sort
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'default:asc'
         */

        this.sort = 'default:asc';

        /**
         * An array of objects representing the underlying data of any pre-rendered targets,
         * when using the `.dataset()` API.
         *
         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
         *
         * @example <caption>Example: Defining the initial underyling dataset</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0",
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1",
         *         ...
         *     }
         * ];
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     },
         *     load: {
         *         dataset: myDataset
         *     }
         * });
         *
         * @name        dataset
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigLoad);

    mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;

    /**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigSelectors = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A selector string used to query and index target elements within the container.
         *
         * By default, the class selector `'.mix'` is used, but this can be changed to an
         * attribute or element selector to match the style of your project.
         *
         * @example <caption>Example 1: Changing the target selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '.portfolio-item'
         *     }
         * });
         *
         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
         *
         * // The mixer will search for any children with the attribute `data-ref="mix"`
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '[data-ref="mix"]'
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mix'
         */

        this.target = '.mix';

        /**
         * A optional selector string used to add further specificity to the querying of control elements,
         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
         *
         * This can be used if other elements in your document must contain the above attributes
         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
         * an additional `control` selector of your choice allows MixItUp to restrict event handling
         * to only those elements matching the defined selector.
         *
         * @name        control
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     ''
         *
         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         control: '.mixitup-control'
         *     }
         * });
         *
         * // Will not be handled:
         * // <button data-filter=".category-a"></button>
         *
         * // Will be handled:
         * // <button class="mixitup-control" data-filter=".category-a"></button>
         */

        this.control = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigSelectors);

    mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;

    /**
     * A group of optional render functions for creating and updating elements.
     *
     * All render functions receive a data object, and should return a valid HTML string.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigRender = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A function returning an HTML string representing a target element, or a reference to a
         * single DOM element.
         *
         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
         *
         * The function receives the relevant dataset item as its first parameter.
         *
         * @example <caption>Example 1: Using string concatenation</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 '&lt;div class="mix"&gt;' +
         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
         *                 '&lt;/div&gt;'
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an ES2015 template literal</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 `&lt;div class="mix"&gt;
         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
         *                  &lt;/div&gt;`
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using a Handlebars template</caption>
         *
         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: targetTemplate
         *     }
         * });
         *
         * @example <caption>Example 4: Returning a DOM element</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *              // Create a single element using your framework's built-in renderer
         *
         *              var el = ...
         *
         *              return el;
         *         }
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */

        this.target = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigRender);

    mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.ConfigTemplates = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ConfigTemplates);

    mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;

    /**
     * `mixitup.Config` is an interface used for customising the functionality of a
     * mixer instance. It is organised into several semantically distinct sub-objects,
     * each one pertaining to a particular aspect of MixItUp functionality.
     *
     * An object literal containing any or all of the available properies,
     * known as the "configuration object", can be passed as the second parameter to
     * the `mixitup` factory function when creating a mixer instance to customise its
     * functionality as needed.
     *
     * If no configuration object is passed, the mixer instance will take on the default
     * configuration values detailed below.
     *
     * @example <caption>Example 1: Creating and passing the configuration object</caption>
     * // Create a configuration object with desired values
     *
     * var config = {
     *     animation: {
     *         enable: false
     *     },
     *     selectors: {
     *         target: '.item'
     *     }
     * };
     *
     * // Pass the configuration object to the mixitup factory function
     *
     * var mixer = mixitup(containerEl, config);
     *
     * @example <caption>Example 2: Passing the configuration object inline</caption>
     * // Typically, the configuration object is passed inline for brevity.
     *
     * var mixer = mixitup(containerEl, {
     *     controls: {
     *         live: true,
     *         toggleLogic: 'and'
     *     }
     * });
     *
     *
     * @constructor
     * @memberof    mixitup
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.Config = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.animation          = new mixitup.ConfigAnimation();
        this.behavior           = new mixitup.ConfigBehavior();
        this.callbacks          = new mixitup.ConfigCallbacks();
        this.controls           = new mixitup.ConfigControls();
        this.classNames         = new mixitup.ConfigClassNames();
        this.data               = new mixitup.ConfigData();
        this.debug              = new mixitup.ConfigDebug();
        this.layout             = new mixitup.ConfigLayout();
        this.load               = new mixitup.ConfigLoad();
        this.selectors          = new mixitup.ConfigSelectors();
        this.render             = new mixitup.ConfigRender();
        this.templates          = new mixitup.ConfigTemplates();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Config);

    mixitup.Config.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Config.prototype.constructor = mixitup.Config;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.MixerDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.document               = null;
        this.body                   = null;
        this.container              = null;
        this.parent                 = null;
        this.targets                = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.MixerDom);

    mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UiClassNames = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.base       = '';
        this.active     = '';
        this.disabled   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UiClassNames);

    mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;

    /**
     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandDataset = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.dataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandDataset);

    mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;

    /**
     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandMultimix = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.filter       = null;
        this.sort         = null;
        this.insert       = null;
        this.remove       = null;
        this.changeLayout = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandMultimix);

    mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;

    /**
     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandFilter = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.selector   = '';
        this.collection = null;
        this.action     = 'show'; // enum: ['show', 'hide']

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandFilter);

    mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;

    /**
     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandSort = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.sortString = '';
        this.attribute  = '';
        this.order      = 'asc';
        this.collection = null;
        this.next       = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandSort);

    mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;

    /**
     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandInsert = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.index      = 0;
        this.collection = [];
        this.position   = 'before'; // enum: ['before', 'after']
        this.sibling    = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandInsert);

    mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;

    /**
     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandRemove = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.targets    = [];
        this.collection = [];

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandRemove);

    mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;

    /**
     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandChangeLayout = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.containerClassName = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.CommandChangeLayout);

    mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);

    mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {string}        type
     * @param       {string}        selector
     * @param       {boolean}       [live]
     * @param       {string}        [parent]
     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
     */

    mixitup.ControlDefinition = function(type, selector, live, parent) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.type    = type;
        this.selector  = selector;
        this.live      = live || false;
        this.parent    = parent || '';

        this.callActions('afterConstruct');

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.ControlDefinition);

    mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);

    mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;

    mixitup.controlDefinitions = [];

    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('filter', '[data-filter]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('sort', '[data-sort]'));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('toggle', '[data-toggle]'));

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Control = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el         = null;
        this.selector   = '';
        this.bound      = [];
        this.pending    = -1;
        this.type       = '';
        this.status     = 'inactive'; // enum: ['inactive', 'active', 'disabled', 'live']
        this.filter     = '';
        this.sort       = '';
        this.canDisable = false;
        this.handler    = null;
        this.classNames = new mixitup.UiClassNames();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Control);

    mixitup.Control.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Control.prototype,
    /** @lends mixitup.Control */
    {
        constructor: mixitup.Control,

        /**
         * @private
         * @param {HTMLElement} el
         * @param {string}      type
         * @param {string}      selector
         */

        init: function(el, type, selector) {
            var self = this;

            this.callActions('beforeInit', arguments);

            self.el         = el;
            self.type       = type;
            self.selector   = selector;

            if (self.selector) {
                self.status = 'live';
            } else {
                self.canDisable = typeof self.el.disable === 'boolean';

                switch (self.type) {
                    case 'filter':
                        self.filter = self.el.getAttribute('data-filter');

                        break;
                    case 'toggle':
                        self.filter = self.el.getAttribute('data-toggle');

                        break;
                    case 'sort':
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        self.filter = self.el.getAttribute('data-filter');
                        self.sort   = self.el.getAttribute('data-sort');

                        break;
                }
            }

            self.bindClick();

            mixitup.controls.push(self);

            this.callActions('afterInit', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {boolean}
         */

        isBound: function(mixer) {
            var self    = this,
                isBound = false;

            this.callActions('beforeIsBound', arguments);

            isBound = self.bound.indexOf(mixer) > -1;

            return self.callFilters('afterIsBound', isBound, arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        addBinding: function(mixer) {
            var self = this;

            this.callActions('beforeAddBinding', arguments);

            if (!self.isBound()) {
                self.bound.push(mixer);
            }

            this.callActions('afterAddBinding', arguments);
        },

        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */

        removeBinding: function(mixer) {
            var self        = this,
                removeIndex = -1;

            this.callActions('beforeRemoveBinding', arguments);

            if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
                self.bound.splice(removeIndex, 1);
            }

            if (self.bound.length < 1) {
                // No bindings exist, unbind event click handlers

                self.unbindClick();

                // Remove from `mixitup.controls` list

                removeIndex = mixitup.controls.indexOf(self);

                mixitup.controls.splice(removeIndex, 1);

                if (self.status === 'active') {
                    self.renderStatus(self.el, 'inactive');
                }
            }

            this.callActions('afterRemoveBinding', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        bindClick: function() {
            var self = this;

            this.callActions('beforeBindClick', arguments);

            self.handler = function(e) {
                self.handleClick(e);
            };

            h.on(self.el, 'click', self.handler);

            this.callActions('afterBindClick', arguments);
        },

        /**
         * @private
         * @return {void}
         */

        unbindClick: function() {
            var self = this;

            this.callActions('beforeUnbindClick', arguments);

            h.off(self.el, 'click', self.handler);

            self.handler = null;

            this.callActions('afterUnbindClick', arguments);
        },

        /**
         * @private
         * @param   {MouseEvent} e
         * @return  {void}
         */

        handleClick: function(e) {
            var self        = this,
                button      = null,
                mixer       = null,
                isActive    = false,
                returnValue = void(0),
                command     = {},
                clone       = null,
                commands    = [],
                i           = -1;

            this.callActions('beforeHandleClick', arguments);

            this.pending = 0;

            mixer = self.bound[0];

            if (!self.selector) {
                button = self.el;
            } else {
                button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
            }

            if (!button) {
                self.callActions('afterHandleClick', arguments);

                return;
            }

            switch (self.type) {
                case 'filter':
                    command.filter = self.filter || button.getAttribute('data-filter');

                    break;
                case 'sort':
                    command.sort = self.sort || button.getAttribute('data-sort');

                    break;
                case 'multimix':
                    command.filter  = self.filter || button.getAttribute('data-filter');
                    command.sort    = self.sort || button.getAttribute('data-sort');

                    break;
                case 'toggle':
                    command.filter  = self.filter || button.getAttribute('data-toggle');

                    if (self.status === 'live') {
                        isActive = h.hasClass(button, self.classNames.active);
                    } else {
                        isActive = self.status === 'active';
                    }

                    break;
            }

            for (i = 0; i < self.bound.length; i++) {
                // Create a clone of the command for each bound mixer instance

                clone = new mixitup.CommandMultimix();

                h.extend(clone, command);

                commands.push(clone);
            }

            commands = self.callFilters('commandsHandleClick', commands, arguments);

            self.pending = self.bound.length;

            for (i = 0; mixer = self.bound[i]; i++) {
                command = commands[i];

                if (!command) {
                    // An extension may set a command null to indicate that the click should not be handled

                    continue;
                }

                if (!mixer.lastClicked) {
                    mixer.lastClicked = button;
                }

                mixitup.events.fire('mixClick', mixer.dom.container, {
                    state: mixer.state,
                    instance: mixer,
                    originalEvent: e,
                    control: mixer.lastClicked
                }, mixer.dom.document);

                if (typeof mixer.config.callbacks.onMixClick === 'function') {
                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);

                    if (returnValue === false) {
                        // User has returned `false` from the callback, so do not handle click

                        continue;
                    }
                }

                if (self.type === 'toggle') {
                    isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
                } else {
                    mixer.multimix(command);
                }
            }

            this.callActions('afterHandleClick', arguments);
        },

        /**
         * @param   {object}          command
         * @param   {Array<string>}   toggleArray
         * @return  {void}
         */

        update: function(command, toggleArray) {
            var self    = this,
                actions = new mixitup.CommandMultimix();

            self.callActions('beforeUpdate', arguments);

            self.pending--;

            self.pending = Math.max(0, self.pending);

            if (self.pending > 0) return;

            if (self.status === 'live') {
                // Live control (status unknown)

                self.updateLive(command, toggleArray);
            } else {
                // Static control

                actions.sort    = self.sort;
                actions.filter  = self.filter;

                self.callFilters('actionsUpdate', actions, arguments);

                self.parseStatusChange(self.el, command, actions, toggleArray);
            }

            self.callActions('afterUpdate', arguments);
        },

        /**
         * @param   {mixitup.CommandMultimix} command
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        updateLive: function(command, toggleArray) {
            var self            = this,
                controlButtons  = null,
                actions         = null,
                button          = null,
                i               = -1;

            self.callActions('beforeUpdateLive', arguments);

            if (!self.el) return;

            controlButtons = self.el.querySelectorAll(self.selector);

            for (i = 0; button = controlButtons[i]; i++) {
                actions = new mixitup.CommandMultimix();

                switch (self.type) {
                    case 'filter':
                        actions.filter = button.getAttribute('data-filter');

                        break;
                    case 'sort':
                        actions.sort = button.getAttribute('data-sort');

                        break;
                    case 'multimix':
                        actions.filter  = button.getAttribute('data-filter');
                        actions.sort    = button.getAttribute('data-sort');

                        break;
                    case 'toggle':
                        actions.filter  = button.getAttribute('data-toggle');

                        break;
                }

                actions = self.callFilters('actionsUpdateLive', actions, arguments);

                self.parseStatusChange(button, command, actions, toggleArray);
            }

            self.callActions('afterUpdateLive', arguments);
        },

        /**
         * @param   {HTMLElement}             button
         * @param   {mixitup.CommandMultimix} command
         * @param   {mixitup.CommandMultimix} actions
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */

        parseStatusChange: function(button, command, actions, toggleArray) {
            var self    = this,
                alias   = '',
                toggle  = '',
                i       = -1;

            self.callActions('beforeParseStatusChange', arguments);

            switch (self.type) {
                case 'filter':
                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'multimix':
                    if (command.sort === actions.sort && command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'sort':
                    if (command.sort.match(/:asc/g)) {
                        alias = command.sort.replace(/:asc/g, '');
                    }

                    if (command.sort === actions.sort || alias === actions.sort) {
                        self.renderStatus(button, 'active');
                    } else {
                        self.renderStatus(button, 'inactive');
                    }

                    break;
                case 'toggle':
                    if (toggleArray.length < 1) self.renderStatus(button, 'inactive');

                    if (command.filter === actions.filter) {
                        self.renderStatus(button, 'active');
                    }

                    for (i = 0; i < toggleArray.length; i++) {
                        toggle = toggleArray[i];

                        if (toggle === actions.filter) {
                            // Button matches one active toggle

                            self.renderStatus(button, 'active');

                            break;
                        }

                        self.renderStatus(button, 'inactive');
                    }

                    break;
            }

            self.callActions('afterParseStatusChange', arguments);
        },

        /**
         * @param   {HTMLElement}   button
         * @param   {string}        status
         * @return  {void}
         */

        renderStatus: function(button, status) {
            var self = this;

            self.callActions('beforeRenderStatus', arguments);

            switch (status) {
                case 'active':
                    h.addClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'inactive':
                    h.removeClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);

                    if (self.canDisable) self.el.disabled = false;

                    break;
                case 'disabled':
                    if (self.canDisable) self.el.disabled = true;

                    h.addClass(button, self.classNames.disabled);
                    h.removeClass(button, self.classNames.active);

                    break;
            }

            if (self.status !== 'live') {
                // Update the control's status propery if not live

                self.status = status;
            }

            self.callActions('afterRenderStatus', arguments);
        }
    });

    mixitup.controls = [];

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.StyleData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.x              = 0;
        this.y              = 0;
        this.top            = 0;
        this.right          = 0;
        this.bottom         = 0;
        this.left           = 0;
        this.width          = 0;
        this.height         = 0;
        this.marginRight    = 0;
        this.marginBottom   = 0;
        this.opacity        = 0;
        this.scale          = new mixitup.TransformData();
        this.translateX     = new mixitup.TransformData();
        this.translateY     = new mixitup.TransformData();
        this.translateZ     = new mixitup.TransformData();
        this.rotateX        = new mixitup.TransformData();
        this.rotateY        = new mixitup.TransformData();
        this.rotateZ        = new mixitup.TransformData();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.StyleData);

    mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.StyleData.prototype.constructor = mixitup.StyleData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.value  = 0;
        this.unit   = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformData);

    mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TransformData.prototype.constructor = mixitup.TransformData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TransformDefaults = function() {
        mixitup.StyleData.apply(this);

        this.callActions('beforeConstruct');

        this.scale.value        = 0.01;
        this.scale.unit         = '';

        this.translateX.value   = 20;
        this.translateX.unit    = 'px';

        this.translateY.value   = 20;
        this.translateY.unit    = 'px';

        this.translateZ.value   = 20;
        this.translateZ.unit    = 'px';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateY.value      = 90;
        this.rotateY.unit       = 'deg';

        this.rotateX.value      = 90;
        this.rotateX.unit       = 'deg';

        this.rotateZ.value      = 180;
        this.rotateZ.unit       = 'deg';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TransformDefaults);

    mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);

    mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;

    /**
     * @private
     * @static
     * @since   3.0.0
     * @type    {mixitup.TransformDefaults}
     */

    mixitup.transformDefaults = new mixitup.TransformDefaults();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.EventDetail = function() {
        this.state          = null;
        this.futureState    = null;
        this.instance       = null;
        this.originalEvent  = null;
    };

    /**
     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
     * points within the lifecycle of a mixer operation.
     *
     * Each event is analogous to the callback function of the same name defined in
     * the `callbacks` configuration object, and is triggered immediately before it.
     *
     * Events are always triggered from the container element on which MixItUp is instantiated
     * upon.
     *
     * As with any event, registered event handlers receive the event object as a parameter
     * which includes a `detail` property containting references to the current `state`,
     * the `mixer` instance, and other event-specific properties described below.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Events = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * A custom event triggered immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * The `mixStart` event also exposes a `futureState` property via the
         * `event.detail` object, which represents the final state of the mixer once
         * the requested operation has completed.
         *
         * @name        mixStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixStart = null;

        /**
         * A custom event triggered when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @name        mixBusy
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixBusy = null;

        /**
         * A custom event triggered after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @name        mixEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixEnd = null;

        /**
         * A custom event triggered whenever a filter operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @name        mixFail
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixFail = null;

        /**
         * A custom event triggered whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * This event also exposes an `originalEvent` property via the `event.detail`
         * object, which holds a reference to the original click event.
         *
         * @name        mixClick
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.mixClick = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Events);

    mixitup.Events.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Events.prototype.constructor = mixitup.Events;

    /**
     * @private
     * @param   {string}      eventType
     * @param   {Element}     el
     * @param   {object}      detail
     * @param   {Document}    [doc]
     */

    mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
        var self        = this,
            event       = null,
            eventDetail = new mixitup.EventDetail();

        self.callActions('beforeFire', arguments);

        if (typeof self[eventType] === 'undefined') {
            throw new Error('Event type "' + eventType + '" not found.');
        }

        eventDetail.state = new mixitup.State();

        h.extend(eventDetail.state, detail.state);

        if (detail.futureState) {
            eventDetail.futureState = new mixitup.State();

            h.extend(eventDetail.futureState, detail.futureState);
        }

        eventDetail.instance = detail.instance;

        if (detail.originalEvent) {
            eventDetail.originalEvent = detail.originalEvent;
        }

        event = h.getCustomEvent(eventType, eventDetail, doc);

        self.callFilters('eventFire', event, arguments);

        el.dispatchEvent(event);
    };

    // Asign a singleton instance to `mixitup.events`:

    mixitup.events = new mixitup.Events();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.QueueItem = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.args           = [];
        this.instruction    = null;
        this.triggerElement = null;
        this.deferred       = null;
        this.isToggling     = false;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.QueueItem);

    mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);

    mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;

    /**
     * The `mixitup.Mixer` class is used to hold discreet, user-configured
     * instances of MixItUp on a provided container element.
     *
     * Mixer instances are returned whenever the `mixitup()` factory function is called,
     * which expose a range of methods enabling API-based filtering, sorting,
     * insertion, removal and more.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Mixer = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.config            = new mixitup.Config();

        this.id                = '';

        this.isBusy            = false;
        this.isToggling        = false;
        this.incPadding        = true;

        this.controls          = [];
        this.targets           = [];
        this.origOrder         = [];
        this.cache             = {};

        this.toggleArray       = [];

        this.targetsMoved      = 0;
        this.targetsImmovable  = 0;
        this.targetsBound      = 0;
        this.targetsDone       = 0;

        this.staggerDuration   = 0;
        this.effectsIn         = null;
        this.effectsOut        = null;
        this.transformIn       = [];
        this.transformOut      = [];
        this.queue             = [];

        this.state             = null;
        this.lastOperation     = null;
        this.lastClicked       = null;
        this.userCallback      = null;
        this.userDeferred      = null;

        this.dom               = new mixitup.MixerDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Mixer);

    mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Mixer.prototype,
    /** @lends mixitup.Mixer */
    {
        constructor: mixitup.Mixer,

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @param {HTMLElement} container
         * @param {HTMLElement} document
         * @param {string}      id
         * @param {object}      [config]
         */

        attach: function(container, document, id, config) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeAttach', arguments);

            self.id = id;

            if (config) {
                h.extend(self.config, config, true, true);
            }

            self.sanitizeConfig();

            self.cacheDom(container, document);

            if (self.config.layout.containerClassName) {
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            if (!mixitup.features.has.transitions) {
                self.config.animation.enable = false;
            }

            if (typeof window.console === 'undefined') {
                self.config.debug.showWarnings = false;
            }

            if (self.config.data.uidKey) {
                // If the dataset API is in use, force disable controls

                self.config.controls.enable = false;
            }

            self.indexTargets();

            self.state = self.getInitialState();

            for (i = 0; target = self.lastOperation.toHide[i]; i++) {
                target.hide();
            }

            if (self.config.controls.enable) {
                self.initControls();

                self.buildToggleArray(null, self.state);

                self.updateControls({
                    filter: self.state.activeFilter,
                    sort: self.state.activeSort
                });
            }

            self.parseEffects();

            self.callActions('afterAttach', arguments);
        },

        /**
         * @private
         * @instance
         * @since 3.0.0
         * @return {void}
         */

        sanitizeConfig: function() {
            var self = this;

            self.callActions('beforeSanitizeConfig', arguments);

            // Sanitize enum/string config options

            self.config.controls.scope          = self.config.controls.scope.toLowerCase().trim();
            self.config.controls.toggleLogic    = self.config.controls.toggleLogic.toLowerCase().trim();
            self.config.controls.toggleDefault  = self.config.controls.toggleDefault.toLowerCase().trim();

            self.config.animation.effects       = self.config.animation.effects.trim();

            self.callActions('afterSanitizeConfig', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {mixitup.State}
         */

        getInitialState: function() {
            var self        = this,
                state       = new mixitup.State(),
                operation   = new mixitup.Operation();

            self.callActions('beforeGetInitialState', arguments);

            // Map initial values into a mock state object in order to construct an operation

            state.activeContainerClassName = self.config.layout.containerClassName;

            if (self.config.load.dataset) {
                // Dataset API

                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
                    throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                }

                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                operation.show = self.targets.slice();

                state = self.callFilters('stateGetInitialState', state, arguments);
            } else {
                // DOM API

                state.activeFilter              = self.parseFilterArgs([self.config.load.filter]).command;
                state.activeSort                = self.parseSortArgs([self.config.load.sort]).command;
                state.totalTargets              = self.targets.length;

                state = self.callFilters('stateGetInitialState', state, arguments);

                if (
                    state.activeSort.collection || state.activeSort.attribute ||
                    state.activeSort.order === 'random' || state.activeSort.order === 'desc'
                ) {
                    // Sorting on load

                    operation.newSort = state.activeSort;

                    self.sortOperation(operation);

                    self.printSort(false, operation);

                    self.targets = operation.newOrder;
                } else {
                    operation.startOrder = operation.newOrder = self.targets;
                }

                operation.startFilter               = operation.newFilter               = state.activeFilter;
                operation.startSort                 = operation.newSort                 = state.activeSort;
                operation.startContainerClassName   = operation.newContainerClassName   = state.activeContainerClassName;

                if (operation.newFilter.selector === 'all') {
                    operation.newFilter.selector = self.config.selectors.target;
                } else if (operation.newFilter.selector === 'none') {
                    operation.newFilter.selector = '';
                }
            }

            operation = self.callFilters('operationGetInitialState', operation, [state]);

            self.lastOperation = operation;

            if (operation.newFilter) {
                self.filterOperation(operation);
            }

            state = self.buildState(operation);

            return state;
        },

        /**
         * Caches references of DOM elements neccessary for the mixer's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   document
         * @return  {void}
         */

        cacheDom: function(el, document) {
            var self    = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.document  = document;
            self.dom.body      = self.dom.document.querySelector('body');
            self.dom.container = el;
            self.dom.parent    = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * Indexes all child elements of the mixer matching the `selectors.target`
         * selector, instantiating a mixitup.Target for each one.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        indexTargets: function() {
            var self            = this,
                target          = null,
                el              = null,
                dataset         = null,
                i               = -1;

            self.callActions('beforeIndexTargets', arguments);

            self.dom.targets = self.config.layout.allowNestedTargets ?
                self.dom.container.querySelectorAll(self.config.selectors.target) :
                h.children(self.dom.container, self.config.selectors.target, self.dom.document);

            self.dom.targets = h.arrayFromList(self.dom.targets);

            self.targets = [];

            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
                throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
            }

            if (self.dom.targets.length) {
                for (i = 0; el = self.dom.targets[i]; i++) {
                    target = new mixitup.Target();

                    target.init(el, self, dataset ? dataset[i] : void(0));

                    target.isInDom = true;

                    self.targets.push(target);
                }

                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ?
                    self.dom.container :
                    self.dom.targets[0].parentElement;
            }

            self.origOrder = self.targets;

            self.callActions('afterIndexTargets', arguments);
        },

        initControls: function() {
            var self                = this,
                definition          = '',
                controlElements     = null,
                el                  = null,
                parent              = null,
                delagators          = null,
                control             = null,
                i                   = -1,
                j                   = -1;

            self.callActions('beforeInitControls', arguments);

            switch (self.config.controls.scope) {
                case 'local':
                    parent = self.dom.container;

                    break;
                case 'global':
                    parent = self.dom.document;

                    break;
                default:
                    throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
            }

            for (i = 0; definition = mixitup.controlDefinitions[i]; i++) {
                if (self.config.controls.live || definition.live) {
                    if (definition.parent) {
                        delagators = self.dom[definition.parent];

                        if (!delagators || delagators.length < 0) continue;

                        if (typeof delagators.length !== 'number') {
                            delagators = [delagators];
                        }
                    } else {
                        delagators = [parent];
                    }

                    for (j = 0; (el = delagators[j]); j++) {
                        control = self.getControl(el,  definition.type, definition.selector);

                        self.controls.push(control);
                    }
                } else {
                    controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);

                    for (j = 0; (el = controlElements[j]); j++) {
                        control = self.getControl(el, definition.type, '');

                        if (!control) continue;

                        self.controls.push(control);
                    }
                }
            }

            self.callActions('afterInitControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement} el
         * @param   {string}      type
         * @param   {string}      selector
         * @return  {mixitup.Control|null}
         */

        getControl: function(el, type, selector) {
            var self    = this,
                control = null,
                i       = -1;

            self.callActions('beforeGetControl', arguments);

            if (!selector) {
                // Static controls only

                for (i = 0; control = mixitup.controls[i]; i++) {
                    if (control.el === el && control.isBound(self)) {
                        // Control already bound to this mixer (as another type).

                        // NB: This prevents duplicate controls from being registered where a selector
                        // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"

                        return self.callFilters('controlGetControl', null, arguments);
                    } else if (control.el === el && control.type === type && control.selector === selector) {
                        // Another mixer is already using this control, add this mixer as a binding

                        control.addBinding(self);

                        return self.callFilters('controlGetControl', control, arguments);
                    }
                }
            }

            // Create new control

            control = new mixitup.Control();

            control.init(el, type, selector);

            control.classNames.base     = h.getClassname(self.config.classNames, type);
            control.classNames.active   = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);

            // Add a reference to this mixer as a binding

            control.addBinding(self);

            return self.callFilters('controlGetControl', control, arguments);
        },

        /**
         * Creates a compound selector by joining the `toggleArray` value as per the
         * defined toggle logic.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {string}
         */

        getToggleSelector: function() {
            var self            = this,
                delineator      = self.config.controls.toggleLogic === 'or' ? ', ' : '',
                toggleSelector  = '';

            self.callActions('beforeGetToggleSelector', arguments);

            self.toggleArray = h.clean(self.toggleArray);

            toggleSelector = self.toggleArray.join(delineator);

            if (toggleSelector === '') {
                toggleSelector = self.config.controls.toggleDefault;
            }

            return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments);
        },

        /**
         * Breaks compound selector strings in an array of discreet selectors,
         * as per the active `controls.toggleLogic` configuration option. Accepts
         * either a dynamic command object, or a state object.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object}        [command]
         * @param   {mixitup.State} [state]
         * @return  {void}
         */

        buildToggleArray: function(command, state) {
            var self                    = this,
                activeFilterSelector    = '';

            self.callActions('beforeBuildToggleArray', arguments);

            if (command && command.filter) {
                activeFilterSelector = command.filter.selector.replace(/\s/g, '');
            } else if (state) {
                activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '');
            } else {
                return;
            }

            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
                activeFilterSelector = '';
            }

            if (self.config.controls.toggleLogic === 'or') {
                self.toggleArray = activeFilterSelector.split(',');
            } else {
                self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
            }

            self.toggleArray = h.clean(self.toggleArray);

            self.callActions('afterBuildToggleArray', arguments);
        },

        /**
         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
         * and breaks into its individual selectors.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string} compoundSelector
         * @return  {string[]}
         */

        splitCompoundSelector: function(compoundSelector) {
            // Break at a `.` or `[`, capturing the delineator

            var partials    = compoundSelector.split(/([\.\[])/g),
                toggleArray = [],
                selector    = '',
                i           = -1;

            if (partials[0] === '') {
                partials.shift();
            }

            for (i = 0; i < partials.length; i++) {
                if (i % 2 === 0) {
                    selector = '';
                }

                selector += partials[i];

                if (i % 2 !== 0) {
                    toggleArray.push(selector);
                }
            }

            return toggleArray;
        },

        /**
         * Updates controls to their active/inactive state based on the command or
         * current state of the mixer.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object} command
         * @return  {void}
         */

        updateControls: function(command) {
            var self    = this,
                control = null,
                output  = new mixitup.CommandMultimix(),
                i       = -1;

            self.callActions('beforeUpdateControls', arguments);

            // Sanitise to defaults

            if (command.filter) {
                output.filter = command.filter.selector;
            } else {
                output.filter = self.state.activeFilter.selector;
            }

            if (command.sort) {
                output.sort = self.buildSortString(command.sort);
            } else {
                output.sort = self.buildSortString(self.state.activeSort);
            }

            if (output.filter === self.config.selectors.target) {
                output.filter = 'all';
            }

            if (output.filter === '') {
                output.filter = 'none';
            }

            h.freeze(output);

            for (i = 0; control = self.controls[i]; i++) {
                control.update(output, self.toggleArray);
            }

            self.callActions('afterUpdateControls', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort}   command
         * @return  {string}
         */

        buildSortString: function(command) {
            var self    = this;
            var output  = '';

            output += command.sortString;

            if (command.next) {
                output += ' ' + self.buildSortString(command.next);
            }

            return output;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}        command
         * @param   {Operation}     operation
         * @return  {Promise.<mixitup.State>}
         */

        insertTargets: function(command, operation) {
            var self            = this,
                nextSibling     = null,
                insertionIndex  = -1,
                frag            = null,
                target          = null,
                el              = null,
                i               = -1;

            self.callActions('beforeInsertTargets', arguments);

            if (typeof command.index === 'undefined') command.index = 0;

            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
            frag        = self.dom.document.createDocumentFragment();

            if (nextSibling) {
                insertionIndex = h.index(nextSibling, self.config.selectors.target);
            } else {
                insertionIndex = self.targets.length;
            }

            if (command.collection) {
                for (i = 0; el = command.collection[i]; i++) {
                    if (self.dom.targets.indexOf(el) > -1) {
                        throw new Error(mixitup.messages.errorInsertPreexistingElement());
                    }

                    // Ensure elements are hidden when they are added to the DOM, so they can
                    // be animated in gracefully

                    el.style.display = 'none';

                    frag.appendChild(el);
                    frag.appendChild(self.dom.document.createTextNode(' '));

                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;

                    target = new mixitup.Target();

                    target.init(el, self);

                    target.isInDom = true;

                    self.targets.splice(insertionIndex, 0, target);

                    insertionIndex++;
                }

                self.dom.parent.insertBefore(frag, nextSibling);
            }

            // Since targets have been added, the original order must be updated

            operation.startOrder = self.origOrder = self.targets;

            self.callActions('afterInsertTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Number}      [index]
         * @param   {Element}     [sibling]
         * @param   {string}      [position]
         * @return  {Element}
         */

        getNextSibling: function(index, sibling, position) {
            var self    = this,
                element = null;

            index = Math.max(index, 0);

            if (sibling && position === 'before') {
                // Explicit sibling

                element = sibling;
            } else if (sibling && position === 'after') {
                // Explicit sibling

                element = sibling.nextElementSibling || null;
            } else if (self.targets.length > 0 && typeof index !== 'undefined') {
                // Index and targets exist

                element = (index < self.targets.length || !self.targets.length) ?
                    self.targets[index].dom.el :
                    self.targets[self.targets.length - 1].dom.el.nextElementSibling;
            } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
                // No targets but other siblings

                if (self.config.layout.siblingAfter) {
                    element = self.config.layout.siblingAfter;
                } else if (self.config.layout.siblingBefore) {
                    element = self.config.layout.siblingBefore.nextElementSibling;
                } else {
                    self.dom.parent.children[0];
                }
            } else {
                element === null;
            }

            return self.callFilters('elementGetNextSibling', element, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        filterOperation: function(operation) {
            var self        = this,
                testResult  = false,
                index       = -1,
                action      = '',
                target      = null,
                i           = -1;

            self.callActions('beforeFilterOperation', arguments);

            action = operation.newFilter.action;

            for (i = 0; target = operation.newOrder[i]; i++) {
                if (operation.newFilter.collection) {
                    // show via collection

                    testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
                } else {
                    // show via selector

                    if (operation.newFilter.selector === '') {
                        testResult = false;
                    } else {
                        testResult = target.dom.el.matches(operation.newFilter.selector);
                    }
                }

                self.evaluateHideShow(testResult, target, action, operation);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = operation.show[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        // If any shown targets should be removed, move them into the toHide array

                        operation.show.splice(i, 1);

                        if ((index = operation.toShow.indexOf(target)) > -1) {
                            operation.toShow.splice(index, 1);
                        }

                        operation.toHide.push(target);
                        operation.hide.push(target);

                        i--;
                    }
                }
            }

            operation.matching = operation.show.slice();

            if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
                operation.hasFailed = true;
            }

            self.callActions('afterFilterOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   testResult
         * @param   {Element}   target
         * @param   {string}    action
         * @param   {Operation} operation
         * @return  {void}
         */

        evaluateHideShow: function(testResult, target, action, operation) {
            var self = this,
                filteredTestResult = false,
                args = Array.prototype.slice.call(arguments, 1);

            filteredTestResult = self.callFilters('testResultEvaluateHideShow', testResult, args);

            self.callActions('beforeEvaluateHideShow', arguments);

            if (
                filteredTestResult === true && action === 'show' ||
                filteredTestResult === false && action === 'hide'
            ) {
                operation.show.push(target);

                !target.isShown && operation.toShow.push(target);
            } else {
                operation.hide.push(target);

                target.isShown && operation.toHide.push(target);
            }

            self.callActions('afterEvaluateHideShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        sortOperation: function(operation) {
            var self     = this,
                newOrder = [],
                target   = null,
                el       = null,
                i        = -1;

            self.callActions('beforeSortOperation', arguments);

            operation.startOrder = self.targets;

            if (operation.newSort.collection) {
                // Sort by collection

                newOrder = [];

                for (i = 0; (el = operation.newSort.collection[i]); i++) {
                    if (self.dom.targets.indexOf(el) < 0) {
                        throw new Error(mixitup.messages.errorSortNonExistentElement());
                    }

                    target = new mixitup.Target();

                    target.init(el, self);

                    target.isInDom = true;

                    newOrder.push(target);
                }

                operation.newOrder = newOrder;
            } else if (operation.newSort.order === 'random') {
                // Sort random

                operation.newOrder = h.arrayShuffle(operation.startOrder);
            } else if (operation.newSort.attribute === '') {
                // Sort by default

                operation.newOrder = self.origOrder.slice();

                if (operation.newSort.order === 'desc') {
                    operation.newOrder.reverse();
                }
            } else {
                // Sort by attribute

                operation.newOrder = operation.startOrder.slice();

                operation.newOrder.sort(function(a, b) {
                    return self.compare(a, b, operation.newSort);
                });
            }

            if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
                operation.willSort = false;
            }

            self.callActions('afterSortOperation', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {mixitup.Target}        a
         * @param   {mixitup.Target}        b
         * @param   {mixitup.CommandSort}   command
         * @return  {Number}
         */

        compare: function(a, b, command) {
            var self        = this,
                order       = command.order,
                attrA       = self.getAttributeValue(a, command.attribute),
                attrB       = self.getAttributeValue(b, command.attribute);

            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                attrA = attrA.toLowerCase();
                attrB = attrB.toLowerCase();
            } else {
                attrA = attrA * 1;
                attrB = attrB * 1;
            }

            if (attrA < attrB) {
                return order === 'asc' ? -1 : 1;
            }

            if (attrA > attrB) {
                return order === 'asc' ? 1 : -1;
            }

            if (attrA === attrB && command.next) {
                return self.compare(a, b, command.next);
            }

            return 0;
        },

        /**
         * Reads the values of any data attributes present the provided target element
         * which match the current sort command.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Target}    target
         * @param   {string}            [attribute]
         * @return  {(String|Number)}
         */

        getAttributeValue: function(target, attribute) {
            var self    = this,
                value   = '';

            value = target.dom.el.getAttribute('data-' + attribute);

            if (value === null) {
                if (self.config.debug.showWarnings) {
                    // Encourage users to assign values to all targets to avoid erroneous sorting
                    // when types are mixed

                    console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                        attribute: 'data-' + attribute
                    }));
                }
            }

            // If an attribute is not present, return 0 as a safety value

            return self.callFilters('valueGetAttributeValue', value || 0, arguments);
        },

        /**
         * Inserts elements into the DOM in the appropriate
         * order using a document fragment for minimal
         * DOM thrashing
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   isResetting
         * @param   {Operation} operation
         * @return  {void}
         */

        printSort: function(isResetting, operation) {
            var self        = this,
                startOrder  = isResetting ? operation.newOrder : operation.startOrder,
                newOrder    = isResetting ? operation.startOrder : operation.newOrder,
                nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null,
                frag        = window.document.createDocumentFragment(),
                whitespace  = null,
                target      = null,
                el          = null,
                i           = -1;

            self.callActions('beforePrintSort', arguments);

            // Empty the container

            for (i = 0; target = startOrder[i]; i++) {
                el = target.dom.el;

                if (el.style.position === 'absolute') continue;

                h.removeWhitespace(el.previousSibling);

                el.parentElement.removeChild(el);
            }

            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;

            if (whitespace && whitespace.nodeName === '#text') {
                h.removeWhitespace(whitespace);
            }

            for (i = 0; target = newOrder[i]; i++) {
                // Add targets into a document fragment

                el = target.dom.el;

                if (h.isElement(frag.lastChild)) {
                    frag.appendChild(window.document.createTextNode(' '));
                }

                frag.appendChild(el);
            }

            // Insert the document fragment into the container
            // before any other non-target elements

            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
                frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0]);
            }

            if (nextSibling) {
                frag.appendChild(window.document.createTextNode(' '));

                self.dom.parent.insertBefore(frag, nextSibling);
            } else {
                self.dom.parent.appendChild(frag);
            }

            self.callActions('afterPrintSort', arguments);
        },

        /**
         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}                sortString
         * @param   {mixitup.CommandSort}   command
         * @return  {mixitup.CommandSort}
         */

        parseSortString: function(sortString, command) {
            var self        = this,
                rules       = sortString.split(' '),
                current     = command,
                rule        = [],
                i           = -1;

            // command.sortString = sortString;

            for (i = 0; i < rules.length; i++) {
                rule = rules[i].split(':');

                current.sortString  = rules[i];
                current.attribute   = h.dashCase(rule[0]);
                current.order       = rule[1] || 'asc';

                switch (current.attribute) {
                    case 'default':
                        // treat "default" as sorting by no attribute

                        current.attribute = '';

                        break;
                    case 'random':
                        // treat "random" as an order not an attribute

                        current.attribute   = '';
                        current.order       = 'random';

                        break;
                }

                if (!current.attribute || current.order === 'random') break;

                if (i < rules.length - 1) {
                    // Embed reference to the next command

                    current.next = new mixitup.CommandSort();

                    h.freeze(current);

                    current = current.next;
                }
            }

            return self.callFilters('commandsParseSort', command, arguments);
        },

        /**
         * Parses all effects out of the user-defined `animation.effects` string into
         * their respective properties and units.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @return  {void}
         */

        parseEffects: function() {
            var self            = this,
                transformName   = '',
                effectsIn       = self.config.animation.effectsIn || self.config.animation.effects,
                effectsOut      = self.config.animation.effectsOut || self.config.animation.effects;

            self.callActions('beforeParseEffects', arguments);

            self.effectsIn      = new mixitup.StyleData();
            self.effectsOut     = new mixitup.StyleData();
            self.transformIn    = [];
            self.transformOut   = [];

            self.effectsIn.opacity = self.effectsOut.opacity = 1;

            self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, true);

            for (transformName in mixitup.transformDefaults) {
                if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) {
                    continue;
                }

                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
            }

            self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, true);

            self.callActions('afterParseEffects', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {string}    effectName
         * @param   {string}    effectString
         * @param   {StyleData} effects
         * @param   {String[]}  transform
         * @param   {boolean}   [isOut]
         */

        parseEffect: function(effectName, effectString, effects, transform, isOut) {
            var self        = this,
                re          = /\(([^)]+)\)/,
                propIndex   = -1,
                str         = '',
                match       = [],
                val         = '',
                units       = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'],
                unit        = '',
                i           = -1;

            self.callActions('beforeParseEffect', arguments);

            if (typeof effectString !== 'string') {
                throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
            }

            if (effectString.indexOf(effectName) < 0) {
                // The effect is not present in the effects string

                if (effectName === 'stagger') {
                    // Reset stagger to 0

                    self.staggerDuration = 0;
                }

                return;
            }

            // The effect is present

            propIndex = effectString.indexOf(effectName + '(');

            if (propIndex > -1) {
                // The effect has a user defined value in parentheses

                // Extract from the first parenthesis to the end of string

                str = effectString.substring(propIndex);

                // Match any number of characters between "(" and ")"

                match = re.exec(str);

                val = match[1];
            }

            switch (effectName) {
                case 'fade':
                    effects.opacity = val ? parseFloat(val) : 0;

                    break;
                case 'stagger':
                    self.staggerDuration = val ? parseFloat(val) : 100;

                    // TODO: Currently stagger must be applied globally, but
                    // if seperate values are specified for in/out, this should
                    // be respected

                    break;
                default:
                    // All other effects are transforms following the same structure

                    if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1;
                    } else {
                        effects[effectName].value =
                            (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value);
                    }

                    if (val) {
                        for (i = 0; unit = units[i]; i++) {
                            if (val.indexOf(unit) > -1) {
                                effects[effectName].unit = unit;

                                break;
                            }
                        }
                    } else {
                        effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                    }

                    transform.push(
                        effectName +
                        '(' +
                        effects[effectName].value +
                        effects[effectName].unit +
                        ')'
                    );
            }

            self.callActions('afterParseEffect', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {State}
         */

        buildState: function(operation) {
            var self        = this,
                state       = new mixitup.State(),
                target      = null,
                i           = -1;

            self.callActions('beforeBuildState', arguments);

            // Map target elements into state arrays.
            // the real target objects should never be exposed

            for (i = 0; target = self.targets[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.targets.push(target.dom.el);
                }
            }

            for (i = 0; target = operation.matching[i]; i++) {
                state.matching.push(target.dom.el);
            }

            for (i = 0; target = operation.show[i]; i++) {
                state.show.push(target.dom.el);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
                    state.hide.push(target.dom.el);
                }
            }

            state.id                        = self.id;
            state.container                 = self.dom.container;
            state.activeFilter              = operation.newFilter;
            state.activeSort                = operation.newSort;
            state.activeDataset             = operation.newDataset;
            state.activeContainerClassName  = operation.newContainerClassName;
            state.hasFailed                 = operation.hasFailed;
            state.totalTargets              = self.targets.length;
            state.totalShow                 = operation.show.length;
            state.totalHide                 = operation.hide.length;
            state.totalMatching             = operation.matching.length;
            state.triggerElement            = operation.triggerElement;

            return self.callFilters('stateBuildState', state, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   shouldAnimate
         * @param   {Operation} operation
         * @return  {void}
         */

        goMix: function(shouldAnimate, operation) {
            var self        = this,
                deferred    = null;

            self.callActions('beforeGoMix', arguments);

            // If the animation duration is set to 0ms,
            // or no effects specified,
            // or the container is hidden
            // then abort animation

            if (
                !self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)
            ) {
                shouldAnimate = false;
            }

            if (
                !operation.toShow.length &&
                !operation.toHide.length &&
                !operation.willSort &&
                !operation.willChangeLayout
            ) {
                // If nothing to show or hide, and not sorting or
                // changing layout

                shouldAnimate = false;
            }

            if (
                !operation.startState.show.length &&
                !operation.show.length
            ) {
                // If nothing currently shown, nothing to show

                shouldAnimate = false;
            }

            mixitup.events.fire('mixStart', self.dom.container, {
                state: operation.startState,
                futureState: operation.newState,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixStart === 'function') {
                self.config.callbacks.onMixStart.call(
                    self.dom.container,
                    operation.startState,
                    operation.newState,
                    self
                );
            }

            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));

            if (!self.userDeferred) {
                // Queue empty, no pending operations

                deferred = self.userDeferred = h.defer(mixitup.libraries);
            } else {
                // Use existing deferred

                deferred = self.userDeferred;
            }

            self.isBusy = true;

            if (!shouldAnimate || !mixitup.features.has.transitions) {
                // Abort

                if (self.config.debug.fauxAsync) {
                    setTimeout(function() {
                        self.cleanUp(operation);
                    }, self.config.animation.duration);
                } else {
                    self.cleanUp(operation);
                }

                return self.callFilters('promiseGoMix', deferred.promise, arguments);
            }

            // If we should animate and the platform supports transitions, go for it

            if (window.pageYOffset !== operation.docState.scrollTop) {
                window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
            }

            if (self.config.animation.applyPerspective) {
                self.dom.parent.style[mixitup.features.perspectiveProp] =
                    self.config.animation.perspectiveDistance;

                self.dom.parent.style[mixitup.features.perspectiveOriginProp] =
                    self.config.animation.perspectiveOrigin;
            }

            if (
                self.config.animation.animateResizeContainer &&
                operation.startHeight !== operation.newHeight &&
                operation.viewportDeltaY !== operation.startHeight - operation.newHeight
            ) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (
                self.config.animation.animateResizeContainer &&
                operation.startWidth !== operation.newWidth &&
                operation.viewportDeltaX !== operation.startWidth - operation.newWidth
            ) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            if (operation.startHeight === operation.newHeight) {
                self.dom.parent.style.height = operation.startHeight + 'px';
            }

            if (operation.startWidth === operation.newWidth) {
                self.dom.parent.style.width = operation.startWidth + 'px';
            }

            if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) {
                self.dom.parent.style.overflow = 'hidden';
            }

            requestAnimationFrame(function() {
                self.moveTargets(operation);
            });

            return self.callFilters('promiseGoMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getStartMixData: function(operation) {
            var self        = this,
                parentStyle = window.getComputedStyle(self.dom.parent),
                parentRect  = self.dom.parent.getBoundingClientRect(),
                target      = null,
                data        = {},
                i           = -1,
                boxSizing   = parentStyle[mixitup.features.boxSizingProp];

            self.incPadding = (boxSizing === 'border-box');

            self.callActions('beforeGetStartMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                data = target.getPosData();

                operation.showPosData[i] = {
                    startPosData: data
                };
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                data = target.getPosData();

                operation.toHidePosData[i] = {
                    startPosData: data
                };
            }

            operation.startX = parentRect.left;
            operation.startY = parentRect.top;

            operation.startHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.startWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            self.callActions('afterGetStartMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setInter: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetInter', arguments);

            // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height/width

            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height    = operation.startHeight + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            if (self.config.animation.clampWidth) {
                self.dom.parent.style.width     = operation.startWidth + 'px';
                self.dom.parent.style.overflow  = 'hidden';
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterSetInter', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getInterMixData: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeGetInterMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].interPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].interPosData = target.getPosData();
            }

            self.callActions('afterGetInterMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        setFinal: function(operation) {
            var self    = this,
                target  = null,
                i       = -1;

            self.callActions('beforeSetFinal', arguments);

            operation.willSort && self.printSort(false, operation);

            for (i = 0; target = operation.toHide[i]; i++) {
                target.hide();
            }

            self.callActions('afterSetFinal', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        getFinalMixData: function(operation) {
            var self        = this,
                parentStyle = null,
                parentRect  = null,
                target      = null,
                i           = -1;

            self.callActions('beforeGetFinalMixData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                operation.showPosData[i].finalPosData = target.getPosData();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                operation.toHidePosData[i].finalPosData = target.getPosData();
            }

            // Remove clamping

            if (self.config.animation.clampHeight || self.config.animation.clampWidth) {
                self.dom.parent.style.height    =
                self.dom.parent.style.width     =
                self.dom.parent.style.overflow  = '';
            }

            if (!self.incPadding) {
                parentStyle = window.getComputedStyle(self.dom.parent);
            }

            parentRect  = self.dom.parent.getBoundingClientRect();

            operation.newX = parentRect.left;
            operation.newY = parentRect.top;

            operation.newHeight = self.incPadding ?
                parentRect.height :
                parentRect.height -
                    parseFloat(parentStyle.paddingTop) -
                    parseFloat(parentStyle.paddingBottom) -
                    parseFloat(parentStyle.borderTop) -
                    parseFloat(parentStyle.borderBottom);

            operation.newWidth = self.incPadding ?
                parentRect.width :
                parentRect.width -
                    parseFloat(parentStyle.paddingLeft) -
                    parseFloat(parentStyle.paddingRight) -
                    parseFloat(parentStyle.borderLeft) -
                    parseFloat(parentStyle.borderRight);

            operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
            operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;

            if (operation.willSort) {
                self.printSort(true, operation);
            }

            for (i = 0; target = operation.toShow[i]; i++) {
                target.hide();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.show();
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.newContainerClassName);
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }

            self.callActions('afterGetFinalMixData', arguments);
        },

        /**
         * @private
         * @instance
         * @since    3.0.0
         * @param    {Operation}     operation
         */

        getTweenData: function(operation) {
            var self            = this,
                target          = null,
                posData         = null,
                effectNames     = Object.getOwnPropertyNames(self.effectsIn),
                effectName      = '',
                effect          = null,
                widthChange     = -1,
                heightChange    = -1,
                i               = -1,
                j               = -1;

            self.callActions('beforeGetTweenData', arguments);

            for (i = 0; target = operation.show[i]; i++) {
                posData             = operation.showPosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                if (target.isShown) {
                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                } else {
                    posData.posIn.x = posData.posIn.y = 0;
                }

                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;

                // Process opacity

                posData.posIn.opacity       = target.isShown ? 1 : self.effectsIn.opacity;
                posData.posOut.opacity      = 1;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Adjust x and y if not nudging

                if (!target.isShown && !self.config.animation.nudge) {
                    posData.posIn.x = posData.posOut.x;
                    posData.posIn.y = posData.posOut.y;
                }

                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width     = posData.startPosData.width;
                    posData.posIn.height    = posData.startPosData.height;

                    // "||" Prevents width/height change from including 0 width/height if hiding or showing

                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;

                    posData.posOut.width    = posData.finalPosData.width;
                    posData.posOut.height   = posData.finalPosData.height;

                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;

                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;

                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;

                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;

                    posData.tweenData.width         = posData.posOut.width - posData.posIn.width;
                    posData.tweenData.height        = posData.posOut.height - posData.posIn.height;
                    posData.tweenData.marginRight   = posData.posOut.marginRight - posData.posIn.marginRight;
                    posData.tweenData.marginBottom  = posData.posOut.marginBottom - posData.posIn.marginBottom;
                }

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsIn[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = effect.value;
                    posData.posOut[effectName].value    = 0;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData             = operation.toHidePosData[i];
                posData.posIn       = new mixitup.StyleData();
                posData.posOut      = new mixitup.StyleData();
                posData.tweenData   = new mixitup.StyleData();

                // Process x and y

                posData.posIn.x     = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                posData.posIn.y     = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                posData.posOut.x    = self.config.animation.nudge ? 0 : posData.posIn.x;
                posData.posOut.y    = self.config.animation.nudge ? 0 : posData.posIn.y;
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;

                // Process width, height, and margins

                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width         = posData.startPosData.width;
                    posData.posIn.height        = posData.startPosData.height;

                    widthChange = posData.startPosData.width - posData.interPosData.width;

                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;

                    heightChange = posData.startPosData.height - posData.interPosData.height;

                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                }

                // Process opacity

                posData.posIn.opacity       = 1;
                posData.posOut.opacity      = self.effectsOut.opacity;
                posData.tweenData.opacity   = posData.posOut.opacity - posData.posIn.opacity;

                // Process transforms

                for (j = 0; effectName = effectNames[j]; j++) {
                    effect = self.effectsOut[effectName];

                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;

                    posData.posIn[effectName].value     = 0;
                    posData.posOut[effectName].value    = effect.value;

                    posData.tweenData[effectName].value =
                        posData.posOut[effectName].value - posData.posIn[effectName].value;

                    posData.posIn[effectName].unit =
                        posData.posOut[effectName].unit =
                        posData.tweenData[effectName].unit =
                        effect.unit;
                }
            }

            self.callActions('afterGetTweenData', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        moveTargets: function(operation) {
            var self            = this,
                target          = null,
                moveData        = null,
                posData         = null,
                statusChange    = '',
                willTransition  = false,
                staggerIndex    = -1,
                i               = -1,
                checkProgress   = self.checkProgress.bind(self);

            self.callActions('beforeMoveTargets', arguments);

            // TODO: this is an extra loop in addition to the calcs
            // done in getOperation, could some of this be done there?

            for (i = 0; target = operation.show[i]; i++) {
                moveData    = new mixitup.IMoveData();
                posData     = operation.showPosData[i];

                statusChange = target.isShown ? 'none' : 'show';

                willTransition = self.willTransition(
                    statusChange,
                    operation.hasEffect,
                    posData.posIn,
                    posData.posOut
                );

                if (willTransition) {
                    // Prevent non-transitioning targets from incrementing the staggerIndex

                    staggerIndex++;
                }

                target.show();

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = staggerIndex;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                posData  = operation.toHidePosData[i];
                moveData = new mixitup.IMoveData();

                statusChange = 'hide';

                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);

                moveData.posIn          = posData.posIn;
                moveData.posOut         = posData.posOut;
                moveData.statusChange   = statusChange;
                moveData.staggerIndex   = i;
                moveData.operation      = operation;
                moveData.callback       = willTransition ? checkProgress : null;

                target.move(moveData);
            }

            if (self.config.animation.animateResizeContainer) {
                self.dom.parent.style[mixitup.features.transitionProp] =
                    'height ' + self.config.animation.duration + 'ms ease, ' +
                    'width ' + self.config.animation.duration + 'ms ease ';

                requestAnimationFrame(function() {
                    if (
                        operation.startHeight !== operation.newHeight &&
                        operation.viewportDeltaY !== operation.startHeight - operation.newHeight
                    ) {
                        self.dom.parent.style.height = operation.newHeight + 'px';
                    }

                    if (
                        operation.startWidth !== operation.newWidth &&
                        operation.viewportDeltaX !== operation.startWidth - operation.newWidth
                    ) {
                        self.dom.parent.style.width = operation.newWidth + 'px';
                    }
                });
            }

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            self.callActions('afterMoveTargets', arguments);
        },

        /**
         * @private
         * @instance
         * @return  {boolean}
         */

        hasEffect: function() {
            var self        = this,
                EFFECTABLES = [
                    'scale',
                    'translateX', 'translateY', 'translateZ',
                    'rotateX', 'rotateY', 'rotateZ'
                ],
                effectName  = '',
                effect      = null,
                result      = false,
                value       = -1,
                i           = -1;

            if (self.effectsIn.opacity !== 1) {
                return self.callFilters('resultHasEffect', true, arguments);
            }

            for (i = 0; effectName = EFFECTABLES[i]; i++) {
                effect  = self.effectsIn[effectName];
                value   = (typeof effect && effect.value !== 'undefined') ?
                    effect.value : effect;

                if (value !== 0) {
                    result = true;

                    break;
                }
            }

            return self.callFilters('resultHasEffect', result, arguments);
        },

        /**
         * Determines if a target element will transition in
         * some fasion and therefore requires binding of
         * transitionEnd
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}        statusChange
         * @param   {boolean}       hasEffect
         * @param   {StyleData}     posIn
         * @param   {StyleData}     posOut
         * @return  {boolean}
         */

        willTransition: function(statusChange, hasEffect, posIn, posOut) {
            var self    = this,
                result  = false;

            if (!h.isVisible(self.dom.container)) {
                // If the container is not visible, the transitionEnd
                // event will not occur and MixItUp will hang

                result = false;
            } else if (
                (statusChange !== 'none' && hasEffect) ||
                posIn.x !== posOut.x ||
                posIn.y !== posOut.y
            ) {
                // If opacity and/or translate will change

                result = true;
            } else if (self.config.animation.animateResizeTargets) {
                // Check if width, height or margins will change

                result = (
                    posIn.width !== posOut.width ||
                    posIn.height !== posOut.height ||
                    posIn.marginRight !== posOut.marginRight ||
                    posIn.marginTop !== posOut.marginTop
                );
            } else {
                result = false;
            }

            return self.callFilters('resultWillTransition', result, arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        checkProgress: function(operation) {
            var self = this;

            self.targetsDone++;

            if (self.targetsBound === self.targetsDone) {
                self.cleanUp(operation);
            }
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */

        cleanUp: function(operation) {
            var self                = this,
                target              = null,
                whitespaceBefore    = null,
                whitespaceAfter     = null,
                nextInQueue         = null,
                i                   = -1;

            self.callActions('beforeCleanUp', arguments);

            self.targetsMoved          =
                self.targetsImmovable  =
                self.targetsBound      =
                self.targetsDone       = 0;

            for (i = 0; target = operation.show[i]; i++) {
                target.cleanUp();

                target.show();
            }

            for (i = 0; target = operation.toHide[i]; i++) {
                target.cleanUp();

                target.hide();
            }

            if (operation.willSort) {
                self.printSort(false, operation);
            }

            // Remove any styles applied to the parent container

            self.dom.parent.style[mixitup.features.transitionProp]             =
                self.dom.parent.style.height                                   =
                self.dom.parent.style.width                                    =
                self.dom.parent.style.overflow                                 =
                self.dom.parent.style[mixitup.features.perspectiveProp]        =
                self.dom.parent.style[mixitup.features.perspectiveOriginProp]  = '';

            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }

            if (operation.toRemove.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (operation.toRemove.indexOf(target) > -1) {
                        if (
                            (whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' &&
                            (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text'
                        ) {
                            h.removeWhitespace(whitespaceBefore);
                        }

                        if (!operation.willSort) {
                            // NB: Sorting will remove targets as a bi-product of `printSort()`

                            self.dom.parent.removeChild(target.dom.el);
                        }

                        self.targets.splice(i, 1);

                        target.isInDom = false;

                        i--;
                    }
                }

                // Since targets have been removed, the original order must be updated

                self.origOrder = self.targets;
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            self.state = operation.newState;
            self.lastOperation = operation;

            self.dom.targets = self.state.targets;

            // mixEnd

            mixitup.events.fire('mixEnd', self.dom.container, {
                state: self.state,
                instance: self
            }, self.dom.document);

            if (typeof self.config.callbacks.onMixEnd === 'function') {
                self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
            }

            if (operation.hasFailed) {
                // mixFail

                mixitup.events.fire('mixFail', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixFail === 'function') {
                    self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                }

                h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
            }

            // User-defined callback function

            if (typeof self.userCallback === 'function') {
                self.userCallback.call(self.dom.container, self.state, self);
            }

            if (typeof self.userDeferred.resolve === 'function') {
                self.userDeferred.resolve(self.state);
            }

            self.userCallback  = null;
            self.userDeferred  = null;
            self.lastClicked   = null;
            self.isToggling    = false;
            self.isBusy        = false;

            if (self.queue.length) {
                self.callActions('beforeReadQueueCleanUp', arguments);

                nextInQueue = self.queue.shift();

                // Update non-public API properties stored in queue

                self.userDeferred  = nextInQueue.deferred;
                self.isToggling    = nextInQueue.isToggling;
                self.lastClicked   = nextInQueue.triggerElement;

                if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) {
                    self.multimix.apply(self, nextInQueue.args);
                } else {
                    self.dataset.apply(self, nextInQueue.args);
                }
            }

            self.callActions('afterCleanUp', arguments);
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseMultimixArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandMultimix();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'object') {
                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            // Coerce arbitrary command arguments into typed command objects

            if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) {
                instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command;
            }

            if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) {
                instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command;
            }

            if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) {
                instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command;
            }

            if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) {
                instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command;
            }

            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) {
                instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command;
            }

            instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseFilterArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandFilter();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (typeof arg === 'string') {
                    // Selector

                    instruction.command.selector = arg;
                } else if (arg === null) {
                    instruction.command.collection = [];
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    instruction.command.collection = [arg];
                } else if (typeof arg === 'object' && typeof arg.length !== 'undefined') {
                    // Multiple elements in array, NodeList or jQuery collection

                    instruction.command.collection = h.arrayFromList(arg);
                } else if (typeof arg === 'object') {
                    // Filter command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.selector && instruction.command.collection) {
                throw new Error(mixitup.messages.errorFilterInvalidArguments());
            }

            instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        parseSortArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                sortString  = '',
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandSort();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        // Sort string

                        sortString = arg;

                        break;
                    case 'object':
                        // Array of element references

                        if (arg.length) {
                            instruction.command.collection = h.arrayFromList(arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (sortString) {
                instruction.command = self.parseSortString(sortString, instruction.command);
            }

            instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseInsertArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandInsert();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'number') {
                    // Insert index

                    instruction.command.index = arg;
                } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
                    // 'before'/'after'

                    instruction.command.position = arg;
                } else if (typeof arg === 'string') {
                    // Markup

                    instruction.command.collection =
                        h.arrayFromList(h.createElement(arg).childNodes);
                } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    // Single element

                    !instruction.command.collection.length ?
                        (instruction.command.collection = [arg]) :
                        (instruction.command.sibling = arg);
                } else if (typeof arg === 'object' && arg.length) {
                    // Multiple elements in array or jQuery collection

                    !instruction.command.collection.length ?
                        (instruction.command.collection = arg) :
                        instruction.command.sibling = arg[0];
                } else if (typeof arg === 'object' && arg.childNodes && arg.childNodes.length) {
                    // Document fragment

                    !instruction.command.collection.length ?
                        instruction.command.collection = h.arrayFromList(arg.childNodes) :
                        instruction.command.sibling = arg.childNodes[0];
                } else if (typeof arg === 'object') {
                    // Insert command

                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            if (instruction.command.index && instruction.command.sibling) {
                throw new Error(mixitup.messages.errorInsertInvalidArguments());
            }

            if (!instruction.command.collection.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningInsertNoElements());
            }

            instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseRemoveArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                target      = null,
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandRemove();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'number':
                        if (self.targets[arg]) {
                            instruction.command.targets[0] = self.targets[arg];
                        }

                        break;
                    case 'string':
                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));

                        break;
                    case 'object':
                        if (arg && arg.length) {
                            instruction.command.collection = arg;
                        } else if (h.isElement(arg, self.dom.document)) {
                            instruction.command.collection = [arg];
                        } else {
                            // Remove command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            if (instruction.command.collection.length) {
                for (i = 0; target = self.targets[i]; i++) {
                    if (instruction.command.collection.indexOf(target.dom.el) > -1) {
                        instruction.command.targets.push(target);
                    }
                }
            }

            if (!instruction.command.targets.length && self.config.debug.showWarnings) {
                console.warn(mixitup.messages.warningRemoveNoElements());
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseDatasetArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandDataset();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'object':
                        if (Array.isArray(arg) || typeof arg.length === 'number') {
                            instruction.command.dataset = arg;
                        } else {
                            // Change layout command

                            h.extend(instruction.command, arg);
                        }

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */

        parseChangeLayoutArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandChangeLayout();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                switch (typeof arg) {
                    case 'string':
                        instruction.command.containerClassName = arg;

                        break;
                    case 'object':
                        // Change layout command

                        h.extend(instruction.command, arg);

                        break;
                    case 'boolean':
                        instruction.animate = arg;

                        break;
                    case 'function':
                        instruction.callback = arg;

                        break;
                }
            }

            h.freeze(instruction);

            return instruction;
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @param       {mixitup.QueueItem}         queueItem
         * @return      {Promise.<mixitup.State>}
         */

        queueMix: function(queueItem) {
            var self            = this,
                deferred        = null,
                toggleSelector  = '';

            self.callActions('beforeQueueMix', arguments);

            deferred = h.defer(mixitup.libraries);

            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                queueItem.deferred = deferred;

                self.queue.push(queueItem);

                // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.

                if (self.config.controls.enable) {
                    if (self.isToggling) {
                        self.buildToggleArray(queueItem.instruction.command);

                        toggleSelector = self.getToggleSelector();

                        self.updateControls({
                            filter: {
                                selector: toggleSelector
                            }
                        });
                    } else {
                        self.updateControls(queueItem.instruction.command);
                    }
                }
            } else {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                }

                deferred.resolve(self.state);

                mixitup.events.fire('mixBusy', self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);

                if (typeof self.config.callbacks.onMixBusy === 'function') {
                    self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                }
            }

            return self.callFilters('promiseQueueMix', deferred.promise, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array.<object>}    newDataset
         * @return  {Operation}
         */

        getDataOperation: function(newDataset) {
            var self                = this,
                operation           = new mixitup.Operation(),
                startDataset        = [];

            operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);

            if (self.dom.targets.length && !(startDataset = (self.state.activeDataset || [])).length) {
                throw new Error(mixitup.messages.errorDatasetNotSet());
            }

            operation.id            = h.randomHex();
            operation.startState    = self.state;
            operation.startDataset  = startDataset;
            operation.newDataset    = newDataset.slice();

            self.diffDatasets(operation);

            operation.startOrder = self.targets;
            operation.newOrder = operation.show;

            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            self.targets = operation.show.slice();

            operation.newState = self.buildState(operation);

            // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
            // but are added after state is built so that state is accurate

            Array.prototype.push.apply(self.targets, operation.toRemove);

            operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);

            return operation;
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */

        diffDatasets: function(operation) {
            var self                = this,
                persistantStartIds  = [],
                persistantNewIds    = [],
                insertedTargets     = [],
                data                = null,
                target              = null,
                el                  = null,
                frag                = null,
                nextEl              = null,
                uids                = {},
                id                  = '',
                i                   = -1;

            self.callActions('beforeDiffDatasets', arguments);

            for (i = 0; data = operation.newDataset[i]; i++) {
                if (typeof (id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: self.config.data.uidKey
                    }));
                }

                if (!uids[id]) {
                    uids[id] = true;
                } else {
                    throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                        uid: id
                    }));
                }

                if ((target = self.cache[id]) instanceof mixitup.Target) {
                    // Already in cache

                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                        // change detected

                        el = target.render(data);

                        target.data = data;

                        if (el !== target.dom.el) {
                            // Update target element reference

                            if (target.isInDom) {
                                target.unbindEvents();

                                self.dom.parent.replaceChild(el, target.dom.el);
                            }

                            if (!target.isShown) {
                                el.style.display = 'none';
                            }

                            target.dom.el = el;

                            if (target.isInDom) {
                                target.bindEvents();
                            }
                        }
                    }

                    el = target.dom.el;
                } else {
                    // New target

                    target = new mixitup.Target();

                    target.init(null, self, data);

                    target.hide();
                }

                if (!target.isInDom) {
                    // Adding to DOM

                    if (!frag) {
                        // Open frag

                        frag = self.dom.document.createDocumentFragment();
                    }

                    if (frag.lastElementChild) {
                        frag.appendChild(self.dom.document.createTextNode(' '));
                    }

                    frag.appendChild(target.dom.el);

                    target.isInDom = true;

                    target.unbindEvents();
                    target.bindEvents();
                    target.hide();

                    operation.toShow.push(target);

                    insertedTargets.push(target);
                } else {
                    // Already in DOM

                    nextEl = target.dom.el.nextElementSibling;

                    persistantNewIds.push(id);

                    if (frag) {
                        // Close and insert previously opened frag

                        if (frag.lastElementChild) {
                            frag.appendChild(self.dom.document.createTextNode(' '));
                        }

                        self.insertDatasetFrag(frag, target.dom.el, insertedTargets);

                        frag = null;
                    }
                }

                operation.show.push(target);
            }

            if (frag) {
                // Unclosed frag remaining

                nextEl = nextEl || self.config.layout.siblingAfter;

                if (nextEl) {
                    frag.appendChild(self.dom.document.createTextNode(' '));
                }

                self.insertDatasetFrag(frag, nextEl, insertedTargets);
            }

            for (i = 0; data = operation.startDataset[i]; i++) {
                id = data[self.config.data.uidKey];

                target = self.cache[id];

                if (operation.show.indexOf(target) < 0) {
                    // Previously shown but now absent

                    operation.hide.push(target);
                    operation.toHide.push(target);
                    operation.toRemove.push(target);
                } else {
                    persistantStartIds.push(id);
                }
            }

            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
                operation.willSort = true;
            }

            self.callActions('afterDiffDatasets', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.1.5
         * @param   {DocumentFragment}          frag
         * @param   {(HTMLElement|null)}        nextEl
         * @param   {Array.<mixitup.Target>}    targets
         * @return  {void}
         */

        insertDatasetFrag: function(frag, nextEl, targets) {
            var self = this;
            var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;

            self.dom.parent.insertBefore(frag, nextEl);

            while (targets.length) {
                self.targets.splice(insertAt, 0, targets.shift());

                insertAt++;
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort} sortCommandA
         * @param   {mixitup.CommandSort} sortCommandB
         * @return  {boolean}
         */

        willSort: function(sortCommandA, sortCommandB) {
            var self    = this,
                result  = false;

            if (
                self.config.behavior.liveSort ||
                sortCommandA.order       === 'random' ||
                sortCommandA.attribute   !== sortCommandB.attribute ||
                sortCommandA.order       !== sortCommandB.order ||
                sortCommandA.collection  !== sortCommandB.collection ||
                (sortCommandA.next === null && sortCommandB.next) ||
                (sortCommandA.next && sortCommandB.next === null)
            ) {
                result = true;
            } else if (sortCommandA.next && sortCommandB.next) {
                result = self.willSort(sortCommandA.next, sortCommandB.next);
            } else {
                result = false;
            }

            return self.callFilters('resultWillSort', result, arguments);
        },

        /**
         * A shorthand method for `.filter('all')`. Shows all targets in the container.
         *
         * @example
         *
         * .show()
         *
         * @example <caption>Example: Showing all targets</caption>
         *
         * mixer.show()
         *     .then(function(state) {
         *         console.log(state.totalShow === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        show: function() {
            var self = this;

            return self.filter('all');
        },

        /**
         * A shorthand method for `.filter('none')`. Hides all targets in the container.
         *
         * @example
         *
         * .hide()
         *
         * @example <caption>Example: Hiding all targets</caption>
         *
         * mixer.hide()
         *     .then(function(state) {
         *         console.log(state.totalShow === 0); // true
         *         console.log(state.totalHide === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */

        hide: function() {
            var self = this;

            return self.filter('none');
        },

        /**
         * Returns a boolean indicating whether or not a MixItUp operation is
         * currently in progress.
         *
         * @example
         *
         * .isMixing()
         *
         * @example <caption>Example: Checking the status of a mixer</caption>
         *
         * mixer.sort('random', function() {
         *     console.log(mixer.isMixing()) // false
         * });
         *
         * console.log(mixer.isMixing()) // true
         *
         * @public
         * @instance
         * @since   2.0.0
         * @return  {boolean}
         */

        isMixing: function() {
            var self = this;

            return self.isBusy;
        },

        /**
         * Filters all targets in the container by a provided selector string, or the values `'all'`
         * or `'none'`. Only targets matching the selector will be shown.
         *
         * @example
         *
         * .filter(selector [, animate] [, callback])
         *
         * @example <caption>Example 1: Filtering targets by a class selector</caption>
         *
         * mixer.filter('.category-a')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
         *     });
         *
         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
         *
         * mixer.filter('[data-category~="a"]')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
         *     });
         *
         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
         *
         * // Show only those targets with the classes 'category-a' AND 'category-b'
         *
         * mixer.filter('.category-a.category-c')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
         *     });
         *
         * @example <caption>Example 4: Filtering via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * console.log(collection.length); // 34
         *
         * // Filter the collection manually using Array.prototype.filter
         *
         * var filtered = collection.filter(function(target) {
         *    return parseInt(target.getAttribute('data-price')) > 10;
         * });
         *
         * console.log(filtered.length); // 22
         *
         * // Pass the filtered collection to MixItUp
         *
         * mixer.filter(filtered)
         *    .then(function(state) {
         *        console.log(state.activeFilter.collection.length === 22); // true
         *    });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        filter: function() {
            var self        = this,
                instruction = self.parseFilterArgs(arguments);

            return self.multimix({
                filter: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Adds an additional selector to the currently active filter selector, concatenating
         * as per the logic defined in `controls.toggleLogic`.
         *
         * @example
         *
         * .toggleOn(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling on a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
         *
         * mixer.toggleOn('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOn: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                toggleSelector  = '';

            self.isToggling = true;

            if (self.toggleArray.indexOf(selector) < 0) {
                self.toggleArray.push(selector);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Removes a selector from the active filter selector.
         *
         * @example
         *
         * .toggleOff(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling off a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
         *
         * mixer.toggleOff('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        toggleOff: function() {
            var self            = this,
                instruction     = self.parseFilterArgs(arguments),
                selector        = instruction.command.selector,
                selectorIndex   = self.toggleArray.indexOf(selector),
                toggleSelector  = '';

            self.isToggling = true;

            if (selectorIndex > -1) {
                self.toggleArray.splice(selectorIndex, 1);
            }

            toggleSelector = self.getToggleSelector();

            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },

        /**
         * Sorts all targets in the container according to a provided sort string.
         *
         * @example
         *
         * .sort(sortString [, animate] [, callback])
         *
         * @example <caption>Example 1: Sorting by the default DOM order</caption>
         *
         * // Reverse the default order of the targets
         *
         * mixer.sort('default:desc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'default'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *     });
         *
         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute
         *
         * mixer.sort('published-date:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 3: Sorting by multiple attributes</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
         *
         * mixer.sort('published-date:desc data-title:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *
         *         console.log(state.activeSort.next.attribute === 'title'); // true
         *         console.log(state.activeSort.next.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 4: Sorting by random</caption>
         *
         * mixer.sort('random')
         *     .then(function(state) {
         *         console.log(state.activeSort.order === 'random') // true
         *     });
         *
         * @example <caption>Example 5: Sorting via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * // Swap the position of two elements in the collection:
         *
         * var temp = collection[1];
         *
         * collection[1] = collection[0];
         * collection[0] = temp;
         *
         * // Pass the sorted collection to MixItUp
         *
         * mixer.sort(collection)
         *     .then(function(state) {
         *         console.log(state.targets[0] === collection[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|Array.<HTMLElement>)}    sortString
         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        sort: function() {
            var self        = this,
                instruction = self.parseSortArgs(arguments);

            return self.multimix({
                sort: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Changes the layout of the container by adding, removing or updating a
         * layout-specific class name. If `animation.animateResizetargets` is
         * enabled, MixItUp will attempt to gracefully animate the width, height,
         * and position of targets between layout states.
         *
         * @example
         *
         * .changeLayout(containerClassName [, animate] [, callback])
         *
         * @example <caption>Example 1: Adding a new class name to the container</caption>
         *
         * mixer.changeLayout('container-list')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === 'container-list'); // true
         *      });
         *
         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
         *
         * mixer.changeLayout('')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === ''); // true
         *      });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    containerClassName
         *      A layout-specific class name to add to the container.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        changeLayout: function() {
            var self        = this,
                instruction = self.parseChangeLayoutArgs(arguments);

            return self.multimix({
                changeLayout: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * Updates the contents and order of the container to reflect the provided dataset,
         * if the dataset API is in use.
         *
         * The dataset API is designed for use in API-driven JavaScript applications, and
         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
         * achieved purely via changes to your data model, without the uglyness of having
         * to interact with or query the DOM directly.
         *
         * @example
         *
         * .dataset(dataset [, animate] [, callback])
         *
         * @example <caption>Example 1: Rendering a dataset</caption>
         *
         * var myDataset = [
         *     {id: 1, ...},
         *     {id: 2, ...},
         *     {id: 3, ...}
         * ];
         *
         * mixer.dataset(myDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 3); // true
         *     });
         *
         * @example <caption>Example 2: Sorting a dataset</caption>
         *
         * // Create a new dataset in reverse order
         *
         * var newDataset = myDataset.slice().reverse();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.activeDataset[0] === myDataset[2]); // true
         *     });
         *
         * @example <caption>Example 3: Removing an item from the dataset</caption>
         *
         * console.log(myDataset.length); // 3
         *
         * // Create a new dataset with the last item removed.
         *
         * var newDataset = myDataset.slice().pop();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {Array.<object>}    dataset
         *      An array of objects, each one representing the underlying data model of a target to be rendered.
         * @param       {boolean}           [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}          [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        dataset: function() {
            var self        = this,
                instruction = self.parseDatasetArgs(arguments),
                operation   = null,
                queueItem   = null,
                animate     = false;

            self.callActions('beforeDataset', arguments);

            if (!self.isBusy) {
                if (instruction.callback) self.userCallback = instruction.callback;

                animate = (instruction.animate ^ self.config.animation.enable) ? instruction.animate : self.config.animation.enable;

                operation = self.getDataOperation(instruction.command.dataset);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args          = arguments;
                queueItem.instruction   = instruction;

                return self.queueMix(queueItem);
            }
        },

        /**
         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
         * operations as requested.
         *
         * @example
         *
         * .multimix(multimixCommand [, animate] [, callback])
         *
         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
         *
         * mixer.multimix({
         *     filter: '.category-b',
         *     sort: 'published-date:desc'
         * })
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector === '.category-b'); // true
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *     });
         *
         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
         *
         * console.log(mixer.getState().totalShow); // 6
         *
         * // NB: When inserting via `multimix()`, an object should be provided as the value
         * // for the `insert` portion of the command, allowing for a collection of elements
         * // and an insertion index to be specified.
         *
         * mixer.multimix({
         *     sort: 'published-date:desc', // Sort the container, including any new elements
         *     insert: {
         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
         *         index: 5
         *     },
         *     remove: existingElementReference // Remove 1 existing element
         * })
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.totalShow === 7); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {object}    multimixCommand
         *      An object containing one or more things to do
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        multimix: function() {
            var self        = this,
                operation   = null,
                animate     = false,
                queueItem   = null,
                instruction = self.parseMultimixArgs(arguments);

            self.callActions('beforeMultimix', arguments);

            if (!self.isBusy) {
                operation = self.getOperation(instruction.command);

                if (self.config.controls.enable) {
                    // Update controls for API calls

                    if (instruction.command.filter && !self.isToggling) {
                        // As we are not toggling, reset the toggle array
                        // so new filter overrides existing toggles

                        self.toggleArray.length = 0;
                        self.buildToggleArray(operation.command);
                    }

                    if (self.queue.length < 1) {
                        self.updateControls(operation.command);
                    }
                }

                if (instruction.callback) self.userCallback = instruction.callback;

                // Always allow the instruction to override the instance setting

                animate = (instruction.animate ^ self.config.animation.enable) ?
                    instruction.animate :
                    self.config.animation.enable;

                self.callFilters('operationMultimix', operation, arguments);

                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();

                queueItem.args           = arguments;
                queueItem.instruction    = instruction;
                queueItem.triggerElement = self.lastClicked;
                queueItem.isToggling     = self.isToggling;

                return self.queueMix(queueItem);
            }
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}            multimixCommand
         * @param   {boolean}           [isPreFetch]
         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
         * @return  {Operation|null}
         */

        getOperation: function(multimixCommand) {
            var self                = this,
                sortCommand         = multimixCommand.sort,
                filterCommand       = multimixCommand.filter,
                changeLayoutCommand = multimixCommand.changeLayout,
                removeCommand       = multimixCommand.remove,
                insertCommand       = multimixCommand.insert,
                operation           = new mixitup.Operation();

            operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);

            operation.id                = h.randomHex();
            operation.command           = multimixCommand;
            operation.startState        = self.state;
            operation.triggerElement    = self.lastClicked;

            if (self.isBusy) {
                if (self.config.debug.showWarnings) {
                    console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                }

                return null;
            }

            if (insertCommand) {
                self.insertTargets(insertCommand, operation);
            }

            if (removeCommand) {
                operation.toRemove = removeCommand.targets;
            }

            operation.startSort = operation.newSort = operation.startState.activeSort;
            operation.startOrder = operation.newOrder = self.targets;

            if (sortCommand) {
                operation.startSort = operation.startState.activeSort;
                operation.newSort   = sortCommand;

                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);

                if (operation.willSort) {
                    self.sortOperation(operation);
                }
            }

            operation.startFilter = operation.startState.activeFilter;

            if (filterCommand) {
                operation.newFilter = filterCommand;
            } else {
                operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter);
            }

            if (operation.newFilter.selector === 'all') {
                operation.newFilter.selector = self.config.selectors.target;
            } else if (operation.newFilter.selector === 'none') {
                operation.newFilter.selector = '';
            }

            self.filterOperation(operation);

            operation.startContainerClassName = operation.startState.activeContainerClassName;

            if (changeLayoutCommand) {
                operation.newContainerClassName = changeLayoutCommand.containerClassName;

                if (operation.newContainerClassName !== operation.startContainerClassName) {
                    operation.willChangeLayout = true;
                }
            } else {
                operation.newContainerClassName = operation.startContainerClassName;
            }

            if (self.config.animation.enable) {
                // Populate the operation's position data

                self.getStartMixData(operation);
                self.setInter(operation);

                operation.docState = h.getDocumentState(self.dom.document);

                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);

                self.parseEffects();

                operation.hasEffect = self.hasEffect();

                self.getTweenData(operation);
            }

            if (operation.willSort) {
                self.targets = operation.newOrder;
            }

            operation.newState = self.buildState(operation);

            return self.callFilters('operationMappedGetOperation', operation, arguments);
        },

        /**
         * Renders a previously created operation at a specific point in its path, as
         * determined by a multiplier between 0 and 1.
         *
         * @example
         * .tween(operation, multiplier)
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation}     operation
         *      An operation object created via the `getOperation` method
         *
         * @param   {Float}                 multiplier
         *      Any number between 0 and 1 representing the percentage complete of the operation
         * @return  {void}
         */

        tween: function(operation, multiplier) {
            var target          = null,
                posData         = null,
                toHideIndex     = -1,
                i               = -1;

            multiplier = Math.min(multiplier, 1);
            multiplier = Math.max(multiplier, 0);

            for (i = 0; target = operation.show[i]; i++) {
                posData = operation.showPosData[i];

                target.applyTween(posData, multiplier);
            }

            for (i = 0; target = operation.hide[i]; i++) {
                if (target.isShown) {
                    target.hide();
                }

                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                    posData = operation.toHidePosData[toHideIndex];

                    if (!target.isShown) {
                        target.show();
                    }

                    target.applyTween(posData, multiplier);
                }
            }
        },

        /**
         * Inserts one or more new target elements into the container at a specified
         * index.
         *
         * To be indexed as targets, new elements must match the `selectors.target`
         * selector (`'.mix'` by default).
         *
         * @example
         *
         * .insert(newElements [, index] [, animate], [, callback])
         *
         * @example <caption>Example 1: Inserting a single element via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 0
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insert(newElement)
         *     .then(function(state) {
         *         console.log(state.totalShow === 1); // true
         *     });
         *
         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
         *
         * console.log(mixer.getState().totalShow); // 1
         *
         * // Create a new element via reference
         *
         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
         *
         * // Create and insert the new element at index 1
         *
         * mixer.insert(newElementHtml, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *         console.log(state.show[1].outerHTML === newElementHtml); // true
         *     });
         *
         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * // Create an array of new elements to insert.
         *
         * var newElement1 = document.createElement('div');
         * var newElement2 = document.createElement('div');
         *
         * newElement1.classList.add('mix');
         * newElement2.classList.add('mix');
         *
         * var newElementsCollection = [newElement1, newElement2];
         *
         * // Insert the new elements starting at index 1
         *
         * mixer.insert(newElementsCollection, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 4); // true
         *         console.log(state.show[1] === newElement1); // true
         *         console.log(state.show[2] === newElement2); // true
         *     });
         *
         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
         *
         * console.log(mixer.getState().totalShow); // 4
         *
         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
         *
         * // Insert the new elements starting at index 3
         *
         * mixer.insert($newElement, 3)
         *     .then(function(state) {
         *         console.log(state.totalShow === 5); // true
         *         console.log(state.show[3] === $newElement[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {number}    index=0
         *      The index at which to insert the new element(s). `0` by default.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insert: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.multimix({
                insert: args.command
            }, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements before a provided reference element.
         *
         * @example
         *
         * .insertBefore(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element before a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertBefore(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 2, before the reference element
         *
         *         console.log(state.show[2] === newElement); // true
         *
         *         // The reference element is now at index 3
         *
         *         console.log(state.show[3] === referenceElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements before.
         *@param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertBefore: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements after a provided reference element.
         *
         * @example
         *
         * .insertAfter(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element after a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertAfter(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 3, after the reference element
         *
         *         console.log(state.show[3] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements after.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        insertAfter: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container before all existing targets.
         *
         * @example
         *
         * .prepend(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Prepending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.prepend(newElement)
         *     .then(function(state) {
         *         console.log(state.show[0] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        prepend: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(0, args.command.collection, args.animate, args.callback);
        },

        /**
         * Inserts one or more new elements into the container after all existing targets.
         *
         * @example
         *
         * .append(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Appending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.append(newElement)
         *     .then(function(state) {
         *         console.log(state.show[state.show.length - 1] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        append: function() {
            var self = this,
                args = self.parseInsertArgs(arguments);

            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
        },

        /**
         * Removes one or more existing target elements from the container.
         *
         * @example
         *
         * .remove(elements [, animate] [, callback])
         *
         * @example <caption>Example 1: Removing an element by reference</caption>
         *
         * var elementToRemove = containerEl.firstElementChild;
         *
         * mixer.remove(elementToRemove)
         *      .then(function(state) {
         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
         *      });
         *
         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
         *
         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
         *
         * console.log(elementsToRemove.length) // 3
         *
         * mixer.remove(elementsToRemove)
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 3: Removing one or more elements by selector</caption>
         *
         * mixer.remove('.category-a')
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 4: Removing an element by index</caption>
         *
         * console.log(mixer.getState.totalShow); // 4
         *
         * // Remove the element at index 3
         *
         * mixer.remove(3)
         *      .then(function(state) {
         *          console.log(state.totalShow); // 3
         *          console.log(state.show[3]); // undefined
         *      });
         *
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */

        remove: function() {
            var self = this,
                args = self.parseRemoveArgs(arguments);

            return self.multimix({
                remove: args.command
            }, args.animate, args.callback);
        },

        /**
         * Retrieves the the value of any property or sub-object within the current
         * mixitup configuration, or the whole configuration object.
         *
         * @example
         *
         * .getConfig([stringKey])
         *
         * @example <caption>Example 1: retrieve the entire configuration object</caption>
         *
         * var config = mixer.getConfig(); // Config { ... }
         *
         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
         *
         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
         *
         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
         *
         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    [stringKey]    A "dot-notation" string key
         * @return      {*}
         */

        getConfig: function(stringKey) {
            var self    = this,
                value   = null;

            if (!stringKey) {
                value = self.config;
            } else {
                value = h.getProperty(self.config, stringKey);
            }

            return self.callFilters('valueGetConfig', value, arguments);
        },

        /**
         * Updates the configuration of the mixer, after it has been instantiated.
         *
         * See the Configuration Object documentation for a full list of avilable
         * configuration options.
         *
         * @example
         *
         * .configure(config)
         *
         * @example <caption>Example 1: Updating animation options</caption>
         *
         * mixer.configure({
         *     animation: {
         *         effects: 'fade translateX(-100%)',
         *         duration: 300
         *     }
         * });
         *
         * @example <caption>Example 2: Removing a callback after it has been set</caption>
         *
         * var mixer;
         *
         * function handleMixEndOnce() {
         *     // Do something ..
         *
         *     // Then nullify the callback
         *
         *     mixer.configure({
         *         callbacks: {
         *             onMixEnd: null
         *         }
         *     });
         * };
         *
         * // Instantiate a mixer with a callback defined
         *
         * mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: handleMixEndOnce
         *     }
         * });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {object}    config
         *      An object containing one of more configuration options.
         * @return      {void}
         */

        configure: function(config) {
            var self = this;

            self.callActions('beforeConfigure', arguments);

            h.extend(self.config, config, true, true);

            self.callActions('afterConfigure', arguments);
        },

        /**
         * Returns an object containing information about the current state of the
         * mixer. See the State Object documentation for more information.
         *
         * NB: State objects are immutable and should therefore be regenerated
         * after any operation.
         *
         * @example
         *
         * .getState();
         *
         * @example <caption>Example: Retrieving a state object</caption>
         *
         * var state = mixer.getState();
         *
         * console.log(state.totalShow + 'targets are currently shown');
         *
         * @public
         * @instance
         * @since       2.0.0
         * @return      {mixitup.State} An object reflecting the current state of the mixer.
         */

        getState: function() {
            var self    = this,
                state   = null;

            state = new mixitup.State();

            h.extend(state, self.state);

            h.freeze(state);

            return self.callFilters('stateGetState', state, arguments);
        },

        /**
         * Forces the re-indexing all targets within the container.
         *
         * This should only be used if some other piece of code in your application
         * has manipulated the contents of your container, which should be avoided.
         *
         * If you need to add or remove target elements from the container, use
         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
         * itself up to date.
         *
         * @example
         *
         * .forceRefresh()
         *
         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * // An element is removed from the container via some external DOM manipulation code:
         *
         * containerEl.removeChild(containerEl.firstElementChild);
         *
         * // The mixer does not know that the number of targets has changed:
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * mixer.forceRefresh();
         *
         * // After forceRefresh, the mixer is in sync again:
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * @public
         * @instance
         * @since 2.1.2
         * @return {void}
         */

        forceRefresh: function() {
            var self = this;

            self.indexTargets();
        },

        /**
         * Forces the re-rendering of all targets when using the Dataset API.
         *
         * By default, targets are only re-rendered when `data.dirtyCheck` is
         * enabled, and an item's data has changed when `dataset()` is called.
         *
         * The `forceRender()` method allows for the re-rendering of all targets
         * in response to some arbitrary event, such as the changing of the target
         * render function.
         *
         * Targets are rendered against their existing data.
         *
         * @example
         *
         * .forceRender()
         *
         * @example <caption>Example: Force render targets after changing the target render function</caption>
         *
         * console.log(container.innerHTML); // ... &lt;span class="mix"&gt;Foo&lt;/span&gt; ...
         *
         * mixer.configure({
         *     render: {
         *         target: (item) => `&lt;a href="/${item.slug}/" class="mix"&gt;${item.title}&lt;/a&gt;`
         *     }
         * });
         *
         * mixer.forceRender();
         *
         * console.log(container.innerHTML); // ... &lt;a href="/foo/" class="mix"&gt;Foo&lt;/a&gt; ...
         *
         * @public
         * @instance
         * @since 3.2.1
         * @return {void}
         */

        forceRender: function() {
            var self    = this,
                target  = null,
                el      = null,
                id      = '';

            for (id in self.cache) {
                target = self.cache[id];

                el = target.render(target.data);

                if (el !== target.dom.el) {
                    // Update target element reference

                    if (target.isInDom) {
                        target.unbindEvents();

                        self.dom.parent.replaceChild(el, target.dom.el);
                    }

                    if (!target.isShown) {
                        el.style.display = 'none';
                    }

                    target.dom.el = el;

                    if (target.isInDom) {
                        target.bindEvents();
                    }
                }
            }

            self.state = self.buildState(self.lastOperation);
        },

        /**
         * Removes mixitup functionality from the container, unbinds all control
         * event handlers, and deletes the mixer instance from MixItUp's internal
         * cache.
         *
         * This should be performed whenever a mixer's container is removed from
         * the DOM, such as during a page change in a single page application,
         * or React's `componentWillUnmount()`.
         *
         * @example
         *
         * .destroy([cleanUp])
         *
         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
         *
         * mixer.destroy();
         *
         * containerEl.parentElement.removeChild(containerEl);
         *
         * @public
         * @instance
         * @since   2.0.0
         * @param   {boolean}   [cleanUp=false]
         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
         * @return  {void}
         */

        destroy: function(cleanUp) {
            var self    = this,
                control = null,
                target  = null,
                i       = 0;

            self.callActions('beforeDestroy', arguments);

            for (i = 0; control = self.controls[i]; i++) {
                control.removeBinding(self);
            }

            for (i = 0; target = self.targets[i]; i++) {
                if (cleanUp) {
                    target.show();
                }

                target.unbindEvents();
            }

            if (self.dom.container.id.match(/^MixItUp/)) {
                self.dom.container.removeAttribute('id');
            }

            delete mixitup.instances[self.id];

            self.callActions('afterDestroy', arguments);
        }
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.IMoveData = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.posIn          = null;
        this.posOut         = null;
        this.operation      = null;
        this.callback       = null;
        this.statusChange   = '';
        this.duration       = -1;
        this.staggerIndex   = -1;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.IMoveData);

    mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);

    mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.TargetDom = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.el = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.TargetDom);

    mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);

    mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;

    /**
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Target = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id         = '';
        this.sortString = '';
        this.mixer      = null;
        this.callback   = null;
        this.isShown    = false;
        this.isBound    = false;
        this.isExcluded = false;
        this.isInDom    = false;
        this.handler    = null;
        this.operation  = null;
        this.data       = null;
        this.dom        = new mixitup.TargetDom();

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Target);

    mixitup.Target.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Target.prototype, {
        constructor: mixitup.Target,

        /**
         * Initialises a newly instantiated Target.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {(Element|null)}    el
         * @param   {object}            mixer
         * @param   {object}            [data]
         * @return  {void}
         */

        init: function(el, mixer, data) {
            var self = this,
                id   = '';

            self.callActions('beforeInit', arguments);

            self.mixer = mixer;

            if (!el) {
                // If no element is provided, render it

                el = self.render(data);
            }

            self.cacheDom(el);

            self.bindEvents();

            if (self.dom.el.style.display !== 'none') {
                self.isShown = true;
            }

            if (data && mixer.config.data.uidKey) {
                if (typeof (id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
                    throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                        uidKey: mixer.config.data.uidKey
                    }));
                }

                self.id     = id;
                self.data   = data;

                mixer.cache[id] = self;
            }

            self.callActions('afterInit', arguments);
        },

        /**
         * Renders the target element using a user-defined renderer function.
         *
         * @private
         * @instance
         * @since   3.1.4
         * @param   {object} data
         * @return  {void}
         */

        render: function(data) {
            var self    = this,
                render  = null,
                el      = null,
                temp    = null,
                output  = '';

            self.callActions('beforeRender', arguments);

            render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);

            if (typeof render !== 'function') {
                throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
            }

            output = render(data);

            if (output && typeof output === 'object' && h.isElement(output)) {
                el = output;
            } else if (typeof output === 'string') {
                temp = document.createElement('div');
                temp.innerHTML = output;

                el = temp.firstElementChild;
            }

            return self.callFilters('elRender', el, arguments);
        },

        /**
         * Caches references of DOM elements neccessary for the target's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Element} el
         * @return  {void}
         */

        cacheDom: function(el) {
            var self = this;

            self.callActions('beforeCacheDom', arguments);

            self.dom.el = el;

            self.callActions('afterCacheDom', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    attributeName
         * @return  {void}
         */

        getSortString: function(attributeName) {
            var self    = this,
                value   = self.dom.el.getAttribute('data-' + attributeName) || '';

            self.callActions('beforeGetSortString', arguments);

            value = isNaN(value * 1) ?
                value.toLowerCase() :
                value * 1;

            self.sortString = value;

            self.callActions('afterGetSortString', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        show: function() {
            var self = this;

            self.callActions('beforeShow', arguments);

            if (!self.isShown) {
                self.dom.el.style.display = '';

                self.isShown = true;
            }

            self.callActions('afterShow', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        hide: function() {
            var self = this;

            self.callActions('beforeHide', arguments);

            if (self.isShown) {
                self.dom.el.style.display = 'none';

                self.isShown = false;
            }

            self.callActions('afterHide', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        move: function(moveData) {
            var self = this;

            self.callActions('beforeMove', arguments);

            if (!self.isExcluded) {
                self.mixer.targetsMoved++;
            }

            self.applyStylesIn(moveData);

            requestAnimationFrame(function() {
                self.applyStylesOut(moveData);
            });

            self.callActions('afterMove', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}    posData
         * @param   {number}    multiplier
         * @return  {void}
         */

        applyTween: function(posData, multiplier) {
            var self                    = this,
                propertyName            = '',
                tweenData               = null,
                posIn                   = posData.posIn,
                currentTransformValues  = [],
                currentValues           = new mixitup.StyleData(),
                i                       = -1;

            self.callActions('beforeApplyTween', arguments);

            currentValues.x     = posIn.x;
            currentValues.y     = posIn.y;

            if (multiplier === 0) {
                self.hide();
            } else if (!self.isShown) {
                self.show();
            }

            for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                tweenData = posData.tweenData[propertyName];

                if (propertyName === 'x') {
                    if (!tweenData) continue;

                    currentValues.x = posIn.x + (tweenData * multiplier);
                } else if (propertyName === 'y') {
                    if (!tweenData) continue;

                    currentValues.y = posIn.y + (tweenData * multiplier);
                } else if (tweenData instanceof mixitup.TransformData) {
                    if (!tweenData.value) continue;

                    currentValues[propertyName].value =
                        posIn[propertyName].value + (tweenData.value * multiplier);

                    currentValues[propertyName].unit  = tweenData.unit;

                    currentTransformValues.push(
                        propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')'
                    );
                } else {
                    if (!tweenData) continue;

                    currentValues[propertyName] = posIn[propertyName] + (tweenData * multiplier);

                    self.dom.el.style[propertyName] = currentValues[propertyName];
                }
            }

            if (currentValues.x || currentValues.y) {
                currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)');
            }

            if (currentTransformValues.length) {
                self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(' ');
            }

            self.callActions('afterApplyTween', arguments);
        },

        /**
         * Applies the initial styling to a target element before any transition
         * is applied.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesIn: function(moveData) {
            var self            = this,
                posIn           = moveData.posIn,
                isFading        = self.mixer.effectsIn.opacity !== 1,
                transformValues = [];

            self.callActions('beforeApplyStylesIn', arguments);

            transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');

            if (self.mixer.config.animation.animateResizeTargets) {
                if (moveData.statusChange !== 'show') {
                    // Don't apply posIn width or height or showing, as will be 0

                    self.dom.el.style.width  = posIn.width + 'px';
                    self.dom.el.style.height = posIn.height + 'px';
                }

                self.dom.el.style.marginRight  = posIn.marginRight + 'px';
                self.dom.el.style.marginBottom = posIn.marginBottom + 'px';
            }

            isFading && (self.dom.el.style.opacity = posIn.opacity);

            if (moveData.statusChange === 'show') {
                transformValues = transformValues.concat(self.mixer.transformIn);
            }

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesIn', arguments);
        },

        /**
         * Applies a transition followed by the final styles for the element to
         * transition towards.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */

        applyStylesOut: function(moveData) {
            var self            = this,
                transitionRules = [],
                transformValues = [],
                isResizing      = self.mixer.config.animation.animateResizeTargets,
                isFading        = typeof self.mixer.effectsIn.opacity !== 'undefined';

            self.callActions('beforeApplyStylesOut', arguments);

            // Build the transition rules

            transitionRules.push(self.writeTransitionRule(
                mixitup.features.transformRule,
                moveData.staggerIndex
            ));

            if (moveData.statusChange !== 'none') {
                transitionRules.push(self.writeTransitionRule(
                    'opacity',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            if (isResizing) {
                transitionRules.push(self.writeTransitionRule(
                    'width',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'height',
                    moveData.staggerIndex,
                    moveData.duration
                ));

                transitionRules.push(self.writeTransitionRule(
                    'margin',
                    moveData.staggerIndex,
                    moveData.duration
                ));
            }

            // If no callback was provided, the element will
            // not transition in any way so tag it as "immovable"

            if (!moveData.callback) {
                self.mixer.targetsImmovable++;

                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
                    // If the total targets moved is equal to the
                    // number of immovable targets, the operation
                    // should be considered finished

                    self.mixer.cleanUp(moveData.operation);
                }

                return;
            }

            // If the target will transition in some fasion,
            // assign a callback function

            self.operation = moveData.operation;
            self.callback = moveData.callback;

            // As long as the target is not excluded, increment
            // the total number of targets bound

            !self.isExcluded && self.mixer.targetsBound++;

            // Tag the target as bound to differentiate from transitionEnd
            // events that may come from stylesheet driven effects

            self.isBound = true;

            // Apply the transition

            self.applyTransition(transitionRules);

            // Apply width, height and margin negation

            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                self.dom.el.style.width        = moveData.posOut.width + 'px';
                self.dom.el.style.height       = moveData.posOut.height + 'px';
                self.dom.el.style.marginRight  = moveData.posOut.marginRight + 'px';
                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px';
            }

            if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
                // If we're not nudging, the translation should be
                // applied before any other transforms to prevent
                // lateral movement

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply fade

            switch (moveData.statusChange) {
                case 'hide':
                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);

                    transformValues = transformValues.concat(self.mixer.transformOut);

                    break;
                case 'show':
                    isFading && (self.dom.el.style.opacity = 1);
            }

            if (
                self.mixer.config.animation.nudge ||
                (!self.mixer.config.animation.nudge && moveData.statusChange !== 'hide')
            ) {
                // Opposite of above - apply translate after
                // other transform

                transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
            }

            // Apply transforms

            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');

            self.callActions('afterApplyStylesOut', arguments);
        },

        /**
         * Combines the name of a CSS property with the appropriate duration and delay
         * values to created a valid transition rule.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    property
         * @param   {number}    staggerIndex
         * @param   {number}    duration
         * @return  {string}
         */

        writeTransitionRule: function(property, staggerIndex, duration) {
            var self  = this,
                delay = self.getDelay(staggerIndex),
                rule  = '';

            rule = property + ' ' +
                (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' +
                delay + 'ms ' +
                (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);

            return self.callFilters('ruleWriteTransitionRule', rule, arguments);
        },

        /**
         * Calculates the transition delay for each target element based on its index, if
         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
         * function can be used to manipulate the order of indices to produce custom
         * stagger effects (e.g. for use in a grid with irregular row lengths).
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {number}    index
         * @return  {number}
         */

        getDelay: function(index) {
            var self    = this,
                delay   = -1;

            if (typeof self.mixer.config.animation.staggerSequence === 'function') {
                index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
            }

            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;

            return self.callFilters('delayGetDelay', delay, arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string[]}  rules
         * @return  {void}
         */

        applyTransition: function(rules) {
            var self                = this,
                transitionString    = rules.join(', ');

            self.callActions('beforeApplyTransition', arguments);

            self.dom.el.style[mixitup.features.transitionProp] = transitionString;

            self.callActions('afterApplyTransition', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event} e
         * @return  {void}
         */

        handleTransitionEnd: function(e) {
            var self        = this,
                propName    = e.propertyName,
                canResize   = self.mixer.config.animation.animateResizeTargets;

            self.callActions('beforeHandleTransitionEnd', arguments);

            if (
                self.isBound &&
                e.target.matches(self.mixer.config.selectors.target) &&
                (
                    propName.indexOf('transform') > -1 ||
                    propName.indexOf('opacity') > -1 ||
                    canResize && propName.indexOf('height') > -1 ||
                    canResize && propName.indexOf('width') > -1 ||
                    canResize && propName.indexOf('margin') > -1
                )
            ) {
                self.callback.call(self, self.operation);

                self.isBound = false;
                self.callback = null;
                self.operation = null;
            }

            self.callActions('afterHandleTransitionEnd', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event}     e
         * @return  {void}
         */

        eventBus: function(e) {
            var self = this;

            self.callActions('beforeEventBus', arguments);

            switch (e.type) {
                case 'webkitTransitionEnd':
                case 'transitionend':
                    self.handleTransitionEnd(e);
            }

            self.callActions('afterEventBus', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        unbindEvents: function() {
            var self = this;

            self.callActions('beforeUnbindEvents', arguments);

            h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
            h.off(self.dom.el, 'transitionend', self.handler);

            self.callActions('afterUnbindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */

        bindEvents: function() {
            var self                = this,
                transitionEndEvent  = '';

            self.callActions('beforeBindEvents', arguments);

            transitionEndEvent = mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';

            self.handler = function(e) {
                return self.eventBus(e);
            };

            h.on(self.dom.el, transitionEndEvent, self.handler);

            self.callActions('afterBindEvents', arguments);
        },

        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   [getBox]
         * @return  {PosData}
         */

        getPosData: function(getBox) {
            var self    = this,
                styles  = {},
                rect    = null,
                posData = new mixitup.StyleData();

            self.callActions('beforeGetPosData', arguments);

            posData.x = self.dom.el.offsetLeft;
            posData.y = self.dom.el.offsetTop;

            if (self.mixer.config.animation.animateResizeTargets || getBox) {
                rect = self.dom.el.getBoundingClientRect();

                posData.top     = rect.top;
                posData.right   = rect.right;
                posData.bottom  = rect.bottom;
                posData.left    = rect.left;

                posData.width  = rect.width;
                posData.height = rect.height;
            }

            if (self.mixer.config.animation.animateResizeTargets) {
                styles = window.getComputedStyle(self.dom.el);

                posData.marginBottom = parseFloat(styles.marginBottom);
                posData.marginRight  = parseFloat(styles.marginRight);
            }

            return self.callFilters('posDataGetPosData', posData, arguments);
        },

        /**
         * @private
         * @instance
         * @since       3.0.0
         * @return      {void}
         */

        cleanUp: function() {
            var self = this;

            self.callActions('beforeCleanUp', arguments);

            self.dom.el.style[mixitup.features.transformProp]  = '';
            self.dom.el.style[mixitup.features.transitionProp] = '';
            self.dom.el.style.opacity                          = '';

            if (self.mixer.config.animation.animateResizeTargets) {
                self.dom.el.style.width        = '';
                self.dom.el.style.height       = '';
                self.dom.el.style.marginRight  = '';
                self.dom.el.style.marginBottom = '';
            }

            self.callActions('afterCleanUp', arguments);
        }
    });

    /**
     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
     *
     * @example
     * new mixitup.Collection(instances)
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer[]}   instances
     */

    mixitup.Collection = function(instances) {
        var instance    = null,
            i           = -1;

        this.callActions('beforeConstruct');

        for (i = 0; instance = instances[i]; i++) {
            this[i] = instance;
        }

        this.length = instances.length;

        this.callActions('afterConstruct');

        h.freeze(this);
    };

    mixitup.BaseStatic.call(mixitup.Collection);

    mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);

    h.extend(mixitup.Collection.prototype,
    /** @lends mixitup.Collection */
    {
        constructor: mixitup.Collection,

        /**
         * Calls a method on all instances in the collection by passing the method
         * name as a string followed by any applicable parameters to be curried into
         * to the method.
         *
         * @example
         * .mixitup(methodName[,arg1][,arg2..]);
         *
         * @example
         * var collection = new Collection([mixer1, mixer2]);
         *
         * return collection.mixitup('filter', '.category-a')
         *     .then(function(states) {
         *         state.forEach(function(state) {
         *             console.log(state.activeFilter.selector); // .category-a
         *         });
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}  methodName
         * @return      {Promise<Array<mixitup.State>>}
         */

        mixitup: function(methodName) {
            var self        = this,
                instance    = null,
                args        = Array.prototype.slice.call(arguments),
                tasks       = [],
                i           = -1;

            this.callActions('beforeMixitup');

            args.shift();

            for (i = 0; instance = self[i]; i++) {
                tasks.push(instance[methodName].apply(instance, args));
            }

            return self.callFilters('promiseMixitup', h.all(tasks, mixitup.libraries), arguments);
        }
    });

    /**
     * `mixitup.Operation` objects contain all data neccessary to describe the full
     * lifecycle of any MixItUp operation. They can be used to compute and store an
     * operation for use at a later time (e.g. programmatic tweening).
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Operation = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.id                      = '';

        this.args                    = [];
        this.command                 = null;
        this.showPosData             = [];
        this.toHidePosData           = [];

        this.startState              = null;
        this.newState                = null;
        this.docState                = null;

        this.willSort                = false;
        this.willChangeLayout        = false;
        this.hasEffect               = false;
        this.hasFailed               = false;

        this.triggerElement          = null;

        this.show                    = [];
        this.hide                    = [];
        this.matching                = [];
        this.toShow                  = [];
        this.toHide                  = [];
        this.toMove                  = [];
        this.toRemove                = [];
        this.startOrder              = [];
        this.newOrder                = [];
        this.startSort               = null;
        this.newSort                 = null;
        this.startFilter             = null;
        this.newFilter               = null;
        this.startDataset            = null;
        this.newDataset              = null;
        this.viewportDeltaX          = 0;
        this.viewportDeltaY          = 0;
        this.startX                  = 0;
        this.startY                  = 0;
        this.startHeight             = 0;
        this.startWidth              = 0;
        this.newX                    = 0;
        this.newY                    = 0;
        this.newHeight               = 0;
        this.newWidth                = 0;
        this.startContainerClassName = '';
        this.startDisplay            = '';
        this.newContainerClassName   = '';
        this.newDisplay              = '';

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Operation);

    mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Operation.prototype.constructor = mixitup.Operation;

    /**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.State = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /**
         * The ID of the mixer instance.
         *
         * @name        id
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.id = '';

        /**
         * The currently active filter command as set by a control click or API call.
         *
         * @name        activeFilter
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandFilter}
         * @default     null
         */

        this.activeFilter = null;

        /**
         * The currently active sort command as set by a control click or API call.
         *
         * @name        activeSort
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandSort}
         * @default     null
         */

        this.activeSort = null;

        /**
         * The current layout-specific container class name, if applied.
         *
         * @name        activeContainerClassName
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */

        this.activeContainerClassName = '';

        /**
         * A reference to the container element that the mixer is instantiated on.
         *
         * @name        container
         * @memberof    mixitup.State
         * @instance
         * @type        {Element}
         * @default     null
         */

        this.container = null;

        /**
         * An array of all target elements indexed by the mixer.
         *
         * @name        targets
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.targets = [];

        /**
         * An array of all target elements not matching the current filter.
         *
         * @name        hide
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.hide = [];

        /**
         * An array of all target elements matching the current filter and any additional
         * limits applied such as pagination.
         *
         * @name        show
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.show = [];

        /**
         * An array of all target elements matching the current filter irrespective of
         * any additional limits applied such as pagination.
         *
         * @name        matching
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */

        this.matching = [];

        /**
         * An integer representing the total number of target elements indexed by the
         * mixer. Equivalent to `state.targets.length`.
         *
         * @name        totalTargets
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalTargets = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter and any additional limits applied such as pagination.
         * Equivalent to `state.show.length`.
         *
         * @name        totalShow
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalShow = -1;

        /**
         * An integer representing the total number of target elements not matching
         * the current filter. Equivalent to `state.hide.length`.
         *
         * @name        totalHide
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalHide = -1;

        /**
         * An integer representing the total number of target elements matching the
         * current filter irrespective of any other limits applied such as pagination.
         * Equivalent to `state.matching.length`.
         *
         * @name        totalMatching
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalMatching = -1;

        /**
         * A boolean indicating whether the last operation "failed", i.e. no targets
         * could be found matching the filter.
         *
         * @name        hasFailed
         * @memberof    mixitup.State
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.hasFailed = false;

        /**
         * The DOM element that was clicked if the last operation was triggered by the
         * clicking of a control and not an API call.
         *
         * @name        triggerElement
         * @memberof    mixitup.State
         * @instance
         * @type        {Element|null}
         * @default     null
         */

        this.triggerElement = null;

        /**
         * The currently active dataset underlying the rendered targets, if the
         * dataset API is in use.
         *
         * @name        activeDataset
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */

        this.activeDataset = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.State);

    mixitup.State.prototype = Object.create(mixitup.Base.prototype);

    mixitup.State.prototype.constructor = mixitup.State;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.UserInstruction = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        this.command    = {};
        this.animate    = false;
        this.callback   = null;

        this.callActions('afterConstruct');

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.UserInstruction);

    mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);

    mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.Messages = function() {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct');

        /* Errors
        ----------------------------------------------------------------------------- */

        this.ERROR_FACTORY_INVALID_CONTAINER =
            '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';

        this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
            '[MixItUp] The provided selector yielded no container element';

        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
            '[MixItUp] Invalid value for `animation.effects`';

        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
            '[MixItUp] Invalid value for `controls.scope`';

        this.ERROR_CONFIG_INVALID_PROPERTY =
            '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';

        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
            '. Did you mean "${probableMatch}"?';

        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
            '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';

        this.ERROR_DATASET_INVALID_UID_KEY =
            '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';

        this.ERROR_DATASET_DUPLICATE_UID =
            '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';

        this.ERROR_INSERT_INVALID_ARGUMENTS =
            '[MixItUp] Please provider either an index or a sibling and position to insert, not both';

        this.ERROR_INSERT_PREEXISTING_ELEMENT =
            '[MixItUp] An element to be inserted already exists in the container';

        this.ERROR_FILTER_INVALID_ARGUMENTS =
            '[MixItUp] Please provide either a selector or collection `.filter()`, not both';

        this.ERROR_DATASET_NOT_SET =
            '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';

        this.ERROR_DATASET_PRERENDERED_MISMATCH =
            '[MixItUp] `load.dataset` does not match pre-rendered targets';

        this.ERROR_DATASET_RENDERER_NOT_SET =
            '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';

        this.ERROR_SORT_NON_EXISTENT_ELEMENT =
            '[MixItUp] An element to be sorted does not already exist in the container';

        /* Warnings
        ----------------------------------------------------------------------------- */

        this.WARNING_FACTORY_PREEXISTING_INSTANCE =
            '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' +
            ' If you wish to perform additional methods on this instance, please create a reference.';

        this.WARNING_INSERT_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.insert()`';

        this.WARNING_REMOVE_NO_ELEMENTS =
            '[MixItUp] WARNING: No valid elements were passed to `.remove()`';

        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
            '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' +
            'queue is full or queuing is disabled.';

        this.WARNING_GET_OPERATION_INSTANCE_BUSY =
            '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';

        this.WARNING_NO_PROMISE_IMPLEMENTATION =
            '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' +
            ' an ES6 Promise polyfill.';

        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
            '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' +
            ' which may product unexpected sort output';

        this.callActions('afterConstruct');

        this.compileTemplates();

        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Messages);

    mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Messages.prototype.constructor = mixitup.Messages;

    /**
     * @return {void}
     */

    mixitup.Messages.prototype.compileTemplates = function() {
        var errorKey        = '';
        var errorMessage    = '';

        for (errorKey in this) {
            if (typeof (errorMessage = this[errorKey]) !== 'string') continue;

            this[h.camelCase(errorKey)] = h.template(errorMessage);
        }
    };

    mixitup.messages = new mixitup.Messages();

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer} mixer
     */

    mixitup.Facade = function Mixer(mixer) {
        mixitup.Base.call(this);

        this.callActions('beforeConstruct', arguments);

        this.configure          = mixer.configure.bind(mixer);
        this.show               = mixer.show.bind(mixer);
        this.hide               = mixer.hide.bind(mixer);
        this.filter             = mixer.filter.bind(mixer);
        this.toggleOn           = mixer.toggleOn.bind(mixer);
        this.toggleOff          = mixer.toggleOff.bind(mixer);
        this.sort               = mixer.sort.bind(mixer);
        this.changeLayout       = mixer.changeLayout.bind(mixer);
        this.multimix           = mixer.multimix.bind(mixer);
        this.dataset            = mixer.dataset.bind(mixer);
        this.tween              = mixer.tween.bind(mixer);
        this.insert             = mixer.insert.bind(mixer);
        this.insertBefore       = mixer.insertBefore.bind(mixer);
        this.insertAfter        = mixer.insertAfter.bind(mixer);
        this.prepend            = mixer.prepend.bind(mixer);
        this.append             = mixer.append.bind(mixer);
        this.remove             = mixer.remove.bind(mixer);
        this.destroy            = mixer.destroy.bind(mixer);
        this.forceRefresh       = mixer.forceRefresh.bind(mixer);
        this.forceRender        = mixer.forceRender.bind(mixer);
        this.isMixing           = mixer.isMixing.bind(mixer);
        this.getOperation       = mixer.getOperation.bind(mixer);
        this.getConfig          = mixer.getConfig.bind(mixer);
        this.getState           = mixer.getState.bind(mixer);

        this.callActions('afterConstruct', arguments);

        h.freeze(this);
        h.seal(this);
    };

    mixitup.BaseStatic.call(mixitup.Facade);

    mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);

    mixitup.Facade.prototype.constructor = mixitup.Facade;

    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = mixitup;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return mixitup;
        });
    } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
        window.mixitup = mixitup;
    }
    mixitup.BaseStatic.call(mixitup.constructor);

    mixitup.NAME = 'mixitup';
    mixitup.CORE_VERSION = '3.3.1';
})(window);