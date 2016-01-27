
var DWZ={
keyCode:{},
eventType:{},
isOverAxis:function(x,reference,size){},
isOver:function(y,x,top,left,height,width){},
pageInfo:{},
statusCode:{},
ui:{},
frag:{},
_msg:{},
_set:{},
msg:function(key,args){},
debug:function(msg){},
loadLogin:function(){},
obj2str:function(o){},
jsonEval:function(data){},
ajaxError:function(xhr,ajaxOptions,thrownError){},
ajaxDone:function(json){},
init:function(pageFrag,options){}};(function($){
$.setRegional=function(key,value){};
$.fn.extend({
ajaxUrl:function(op){},
loadUrl:function(url,data,callback){},
initUI:function(){},
layoutH:function($refBox){},
hoverClass:function(className,speed){},
focusClass:function(className){},
inputAlert:function(){},
isTag:function(tn){},
isBind:function(type){},
log:function(msg){}});
$.extend(String.prototype,{
isPositiveInteger:function(){},
isInteger:function(){},
isNumber:function(value,element){},
trim:function(){},
startsWith:function(pattern){
return this.indexOf(pattern)===0;},
endsWith:function(pattern){
var d=this.length-pattern.length;
return d>=0&&this.lastIndexOf(pattern)===d;},
replaceSuffix:function(index){
return this.replace(/\[[0-9]+\]/,'['+index+']').replace('#index#',index);},
trans:function(){
return this.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');},
encodeTXT:function(){
return(this).replaceAll('&','&amp;').replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll(" ","&nbsp;");},
replaceAll:function(os,ns){
return this.replace(new RegExp(os,"gm"),ns);},
replaceTm:function($data){
if(!$data)
return this;
return this.replace(RegExp("({[A-Za-z_]+[A-Za-z0-9_]*})","g"),function($1){
return $data[$1.replace(/[{}]+/g,"")];});},
replaceTmById:function(_box){},
isFinishedTm:function(){
return !(new RegExp("{[A-Za-z_]+[A-Za-z0-9_]*}").test(this));},
skipChar:function(ch){},
isValidPwd:function(){
return(new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this));},
isValidMail:function(){
return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim()));},
isSpaces:function(){},
isPhone:function(){
return(new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(this));},
isUrl:function(){
return(new RegExp(/^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this));},
isExternalUrl:function(){
return this.isUrl()&&this.indexOf("://"+document.domain)==-1;}});})(jQuery);
function initEnv(){}
function initLayout(){}
function initUI(_box){
var $p=$(_box||document);
$("div.panel",$p).jPanel();
$("table.table",$p).jTable();
$('table.list',$p).cssTable();
$("div.tabs",$p).each(function(){
var $this=$(this);
var options={};
options.currentIndex=$this.attr("currentIndex")||0;
options.eventType=$this.attr("eventType")||"click";
$this.tabs(options);});
$("ul.tree",$p).jTree();
$('div.accordion',$p).each(function(){
var $this=$(this);
$this.accordion({fillSpace:$this.attr("fillSpace"),alwaysOpen:true,active:0});});
$(":button.checkboxCtrl, :checkbox.checkboxCtrl",$p).checkboxCtrl($p);
if($.fn.combox)
$("select.combox",$p).combox();
if($.fn.xheditor){
$("textarea.editor",$p).each(function(){
var $this=$(this);
var op={html5Upload:false,skin:'vista',tools:$this.attr("tools")||'full'};
var upAttrs=[["upLinkUrl","upLinkExt","zip,rar,txt"],["upImgUrl","upImgExt","jpg,jpeg,gif,png"],["upFlashUrl","upFlashExt","swf"],["upMediaUrl","upMediaExt","avi"]];
$(upAttrs).each(function(i){
var urlAttr=upAttrs[i][0];
var extAttr=upAttrs[i][1];
if($this.attr(urlAttr)){
op[urlAttr]=$this.attr(urlAttr);
op[extAttr]=$this.attr(extAttr)||upAttrs[i][2];}});
$this.xheditor(op);});}
if($.fn.uploadify){
$(":file[uploaderOption]",$p).each(function(){
var $this=$(this);
var options={
fileObjName:$this.attr("name")||"file",
auto:true,
multi:true,
onUploadError:uploadifyError};
var uploaderOption=DWZ.jsonEval($this.attr("uploaderOption"));
$.extend(options,uploaderOption);
DWZ.debug("uploaderOption: "+DWZ.obj2str(uploaderOption));
$this.uploadify(options);});}
$("input[type=text], input[type=password], textarea",$p).addClass("textInput").focusClass("focus");
$("input[readonly], textarea[readonly]",$p).addClass("readonly");
$("input[disabled=true], textarea[disabled=true]",$p).addClass("disabled");
$("input[type=text]",$p).not("div.tabs input[type=text]",$p).filter("[alt]").inputAlert();
$("div.panelBar li, div.panelBar",$p).hoverClass("hover");
$("div.button",$p).hoverClass("buttonHover");
$("div.buttonActive",$p).hoverClass("buttonActiveHover");
$("div.tabsHeader li, div.tabsPageHeader li, div.accordionHeader, div.accordion",$p).hoverClass("hover");
$("form.required-validate",$p).each(function(){
var $form=$(this);
$form.validate({
onsubmit:false,
focusInvalid:false,
focusCleanup:true,
errorElement:"span",
ignore:".ignore",
invalidHandler:function(form,validator){
var errors=validator.numberOfInvalids();
if(errors){
var message=DWZ.msg("validateFormError",[errors]);
alertMsg.error(message);}}});
$form.find('input[customvalid]').each(function(){
var $input=$(this);
$input.rules("add",{
customvalid:$input.attr("customvalid")})});});
if($.fn.datepicker){
$('input.date',$p).each(function(){
var $this=$(this);
var opts={};
if($this.attr("dateFmt"))
opts.pattern=$this.attr("dateFmt");
if($this.attr("minDate"))
opts.minDate=$this.attr("minDate");
if($this.attr("maxDate"))
opts.maxDate=$this.attr("maxDate");
if($this.attr("mmStep"))
opts.mmStep=$this.attr("mmStep");
if($this.attr("ssStep"))
opts.ssStep=$this.attr("ssStep");
$this.datepicker(opts);});}
$("a[target=navTab]",$p).each(function(){
$(this).click(function(event){
var $this=$(this);
var title=$this.attr("title")||$this.text();
var tabid=$this.attr("rel")||"_blank";
var fresh=eval($this.attr("fresh")||"true");
var external=eval($this.attr("external")||"false");
var url=unescape($this.attr("href")).replaceTmById($(event.target).parents(".unitBox:first"));
DWZ.debug(url);
if(!url.isFinishedTm()){
alertMsg.error($this.attr("warn")||DWZ.msg("alertSelectMsg"));
return false;}
navTab.openTab(tabid,url,{title:title,fresh:fresh,external:external});
event.preventDefault();});});
$("a[target=dialog]",$p).each(function(){
$(this).click(function(event){
var $this=$(this);
var title=$this.attr("title")||$this.text();
var rel=$this.attr("rel")||"_blank";
var options={};
var w=$this.attr("width");
var h=$this.attr("height");
if(w)
options.width=w;
if(h)
options.height=h;
options.max=eval($this.attr("max")||"false");
options.mask=eval($this.attr("mask")||"false");
options.maxable=eval($this.attr("maxable")||"true");
options.minable=eval($this.attr("minable")||"true");
options.fresh=eval($this.attr("fresh")||"true");
options.resizable=eval($this.attr("resizable")||"true");
options.drawable=eval($this.attr("drawable")||"true");
options.close=eval($this.attr("close")||"");
options.param=$this.attr("param")||"";
var url=unescape($this.attr("href")).replaceTmById($(event.target).parents(".unitBox:first"));
DWZ.debug(url);
if(!url.isFinishedTm()){
alertMsg.error($this.attr("warn")||DWZ.msg("alertSelectMsg"));
return false;}
$.pdialog.open(url,rel,title,options);
return false;});});
$("a[target=ajax]",$p).each(function(){
$(this).click(function(event){
var $this=$(this);
var rel=$this.attr("rel");
if(rel){
var $rel=$("#"+rel);
$rel.loadUrl($this.attr("href"),{},function(){
$rel.find("[layoutH]").layoutH();});}
event.preventDefault();});});
if($.fn.sortDrag)
$("div.sortDrag",$p).sortDrag();
if($.fn.ajaxTodo)
$("a[target=ajaxTodo]",$p).ajaxTodo();
if($.fn.dwzExport)
$("a[target=dwzExport]",$p).dwzExport();
if($.fn.lookup)
$("a[lookupGroup]",$p).lookup();
if($.fn.multLookup)
$("[multLookup]:button",$p).multLookup();
if($.fn.suggest)
$("input[suggestFields]",$p).suggest();
if($.fn.itemDetail)
$("table.itemDetail",$p).itemDetail();
if($.fn.selectedTodo)
$("a[target=selectedTodo]",$p).selectedTodo();
if($.fn.pagerForm)
$("form[rel=pagerForm]",$p).pagerForm({parentBox:$p});}(function($){
$.fn.extend({
theme:function(options){
var op=$.extend({themeBase:"themes"},options);
var _themeHref=op.themeBase+"/#theme#/style.css";
return this.each(function(){
var jThemeLi=$(this).find(">li[theme]");
var setTheme=function(themeName){
$("head").find("link[href$='style.css']").attr("href",_themeHref.replace("#theme#",themeName));
jThemeLi.find(">div").removeClass("selected");
jThemeLi.filter("[theme="+themeName+"]").find(">div").addClass("selected");
if($.isFunction($.cookie))$.cookie("dwz_theme",themeName);}
jThemeLi.each(function(index){
var $this=$(this);
var themeName=$this.attr("theme");
$this.addClass(themeName).click(function(){
setTheme(themeName);});});
if($.isFunction($.cookie)){
var themeName=$.cookie("dwz_theme");
if(themeName){
setTheme(themeName);}}});}});})(jQuery);(function($){
$.fn.navMenu=function(){}
$.fn.switchEnv=function(){}
function _show($box){
$box.addClass("selected");
$(document).bind("click",{box:$box},_handler);}
function _hide($box){
$box.removeClass("selected");
$(document).unbind("click",_handler);}
function _handler(event){
_hide(event.data.box);}})(jQuery);
$.setRegional("alertMsg",{
title:{error:"Error",info:"Information",warn:"Warning",correct:"Successful",confirm:"Confirmation"},
butMsg:{ok:"OK",yes:"Yes",no:"No",cancel:"Cancel"}});
var alertMsg={
_boxId:"#alertMsgBox",
_bgId:"#alertBackground",
_closeTimer:null,
_types:{error:"error",info:"info",warn:"warn",correct:"correct",confirm:"confirm"},
_getTitle:function(key){
return $.regional.alertMsg.title[key];},
_keydownOk:function(event){
if(event.keyCode==DWZ.keyCode.ENTER)event.data.target.trigger("click");
return false;},
_keydownEsc:function(event){
if(event.keyCode==DWZ.keyCode.ESC)event.data.target.trigger("click");},
_open:function(type,msg,buttons){},
close:function(){
$(document).unbind("keydown",this._keydownOk).unbind("keydown",this._keydownEsc);
$(this._boxId).animate({top:-$(this._boxId).height()},500,function(){
$(this).remove();});
$(this._bgId).hide();},
error:function(msg,options){
this._alert(this._types.error,msg,options);},
info:function(msg,options){
this._alert(this._types.info,msg,options);},
warn:function(msg,options){
this._alert(this._types.warn,msg,options);},
correct:function(msg,options){
this._alert(this._types.correct,msg,options);},
_alert:function(type,msg,options){
var op={okName:$.regional.alertMsg.butMsg.ok,okCall:null};
$.extend(op,options);
var buttons=[{name:op.okName,call:op.okCall,keyCode:DWZ.keyCode.ENTER}];
this._open(type,msg,buttons);},
confirm:function(msg,options){
var op={okName:$.regional.alertMsg.butMsg.ok,okCall:null,cancelName:$.regional.alertMsg.butMsg.cancel,cancelCall:null};
$.extend(op,options);
var buttons=[{name:op.okName,call:op.okCall,keyCode:DWZ.keyCode.ENTER},{name:op.cancelName,call:op.cancelCall,keyCode:DWZ.keyCode.ESC}];
this._open(this._types.confirm,msg,buttons);}};(function($){
var menu,shadow,hash;
$.fn.extend({
contextMenu:function(id,options){}});
function display(index,trigger,e,options){
var cur=hash[index];
var content=$(DWZ.frag[cur.id]);
content.find('li').hoverClass();
menu.html(content);
$.each(cur.bindings,function(id,func){
$("[rel='"+id+"']",menu).bind('click',function(e){
hide();
func($(trigger),$("#"+cur.id));});});
var posX=e.pageX;
var posY=e.pageY;
if($(window).width()<posX+menu.width())posX-=menu.width();
if($(window).height()<posY+menu.height())posY-=menu.height();
menu.css({'left':posX,'top':posY}).show();
if(cur.shadow)shadow.css({width:menu.width(),height:menu.height(),left:posX+3,top:posY+3}).show();
$(document).one('click',hide);
if($.isFunction(cur.ctrSub)){cur.ctrSub($(trigger),$("#"+cur.id));}}
function hide(){
menu.hide();
shadow.hide();}})(jQuery);
var navTab={
componentBox:null,
_tabBox:null,
_prevBut:null,
_nextBut:null,
_panelBox:null,
_moreBut:null,
_moreBox:null,
_currentIndex:0,
_op:{id:"navTab",stTabBox:".navTab-tab",stPanelBox:".navTab-panel",mainTabId:"main",close$:"a.close",prevClass:"tabsLeft",nextClass:"tabsRight",stMore:".tabsMore",stMoreLi:"ul.tabsMoreList"},
init:function(options){},
_init:function(){
var $this=this;
this._getTabs().each(function(iTabIndex){
$(this).unbind("click").click(function(event){
$this._switchTab(iTabIndex);});
$(this).find(navTab._op.close$).unbind("click").click(function(){
$this._closeTab(iTabIndex);});});
this._getMoreLi().each(function(iTabIndex){
$(this).find(">a").unbind("click").click(function(event){
$this._switchTab(iTabIndex);});});
this._switchTab(this._currentIndex);},
_contextmenu:function($obj){
var $this=this;
$obj.contextMenu('navTabCM',{
bindings:{
reload:function(t,m){
$this._reload(t,true);},
closeCurrent:function(t,m){
var tabId=t.attr("tabid");
if(tabId)$this.closeTab(tabId);
else $this.closeCurrentTab();},
closeOther:function(t,m){
var index=$this._indexTabId(t.attr("tabid"));
$this._closeOtherTab(index>0?index:$this._currentIndex);},
closeAll:function(t,m){
$this.closeAllTab();}},
ctrSub:function(t,m){}});},
_getTabs:function(){
return this._tabBox.find("> li");},
_getPanels:function(){
return this._panelBox.find("> div");},
_getMoreLi:function(){
return this._moreBox.find("> li");},
_getTab:function(tabid){
var index=this._indexTabId(tabid);
if(index>=0)return this._getTabs().eq(index);},
getPanel:function(tabid){
var index=this._indexTabId(tabid);
if(index>=0)return this._getPanels().eq(index);},
_getTabsW:function(iStart,iEnd){
return this._tabsW(this._getTabs().slice(iStart,iEnd));},
_tabsW:function($tabs){
var iW=0;
$tabs.each(function(){
iW+=$(this).outerWidth(true);});
return iW;},
_indexTabId:function(tabid){
if(!tabid)return -1;
var iOpenIndex=-1;
this._getTabs().each(function(index){
if($(this).attr("tabid")==tabid){iOpenIndex=index;return;}});
return iOpenIndex;},
_getLeft:function(){
return this._tabBox.position().left;},
_getScrollBarW:function(){
return this.componentBox.width()-55;},
_visibleStart:function(){
var iLeft=this._getLeft(),iW=0;
var $tabs=this._getTabs();
for(var i=0;i<$tabs.size();i++){
if(iW+iLeft>=0)return i;
iW+=$tabs.eq(i).outerWidth(true);}
return 0;},
_visibleEnd:function(){
var iLeft=this._getLeft(),iW=0;
var $tabs=this._getTabs();
for(var i=0;i<$tabs.size();i++){
iW+=$tabs.eq(i).outerWidth(true);
if(iW+iLeft>this._getScrollBarW())return i;}
return $tabs.size();},
_scrollPrev:function(){
var iStart=this._visibleStart();
if(iStart>0){
this._scrollTab(-this._getTabsW(0,iStart-1));}},
_scrollNext:function(){
var iEnd=this._visibleEnd();
if(iEnd<this._getTabs().size()){
this._scrollTab(-this._getTabsW(0,iEnd+1)+this._getScrollBarW());}},
_scrollTab:function(iLeft,isNext){
var $this=this;
this._tabBox.animate({left:iLeft+'px'},200,function(){$this._ctrlScrollBut();});},
_scrollCurrent:function(){
var iW=this._tabsW(this._getTabs());
if(iW<=this._getScrollBarW()){
this._scrollTab(0);}else if(this._getLeft()<this._getScrollBarW()-iW){
this._scrollTab(this._getScrollBarW()-iW);}else if(this._currentIndex<this._visibleStart()){
this._scrollTab(-this._getTabsW(0,this._currentIndex));}else if(this._currentIndex>=this._visibleEnd()){
this._scrollTab(this._getScrollBarW()-this._getTabs().eq(this._currentIndex).outerWidth(true)-this._getTabsW(0,this._currentIndex));}},
_ctrlScrollBut:function(){},
_switchTab:function(iTabIndex){},
_closeTab:function(index,openTabid){},
closeTab:function(tabid){
var index=this._indexTabId(tabid);
if(index>0){this._closeTab(index);}},
closeCurrentTab:function(openTabid){
if(this._currentIndex>0){this._closeTab(this._currentIndex,openTabid);}},
closeAllTab:function(){
this._getTabs().filter(":gt(0)").remove();
this._getPanels().filter(":gt(0)").trigger(DWZ.eventType.pageClear).remove();
this._getMoreLi().filter(":gt(0)").remove();
this._currentIndex=0;
this._init();
this._scrollCurrent();},
_closeOtherTab:function(index){},
_loadUrlCallback:function($panel){
$panel.find("[layoutH]").layoutH();
$panel.find(":button.close").click(function(){
navTab.closeCurrentTab();});},
_reload:function($tab,flag){
flag=flag||$tab.data("reloadFlag");
var url=$tab.attr("url");
if(flag&&url){
$tab.data("reloadFlag",null);
var $panel=this.getPanel($tab.attr("tabid"));
if($tab.hasClass("external")){
navTab.openExternal(url,$panel);}else{
var $pagerForm=$("#pagerForm",$panel);
var args=$pagerForm.size()>0?$pagerForm.serializeArray():{}
$panel.loadUrl(url,args,function(){navTab._loadUrlCallback($panel);});}}},
reloadFlag:function(tabid){
var $tab=this._getTab(tabid);
if($tab){
if(this._indexTabId(tabid)==this._currentIndex)this._reload($tab,true);
else $tab.data("reloadFlag",1);}},
reload:function(url,options){},
getCurrentPanel:function(){
return this._getPanels().eq(this._currentIndex);},
checkTimeout:function(){
var json=DWZ.jsonEval(this.getCurrentPanel().html());
if(json&&json.statusCode==DWZ.statusCode.timeout)this.closeCurrentTab();},
openExternal:function(url,$panel){
var ih=navTab._panelBox.height();
$panel.html(DWZ.frag["externalFrag"].replaceAll("{url}",url).replaceAll("{height}",ih+"px"));},
openTab:function(tabid,url,options){}};(function($){
$.fn.extend({
tabs:function(options){}});})(jQuery);(function($){
$.fn.extend({jresize:function(options){}});
$.resizeTool={
start:function(resizable,dialog,e,target){
$.pdialog.initResize(resizable,dialog,target);
$.data(resizable[0],'layer-drag',{
options:$.extend($.pdialog._op,{target:target,dialog:dialog,stop:$.resizeTool.stop})});
$.layerdrag.start(resizable[0],e,$.pdialog._op);},
stop:function(){
var data=$.data(arguments[0],'layer-drag');
$.pdialog.resizeDialog(arguments[0],data.options.dialog,data.options.target);
$("body").css("cursor","");
$(arguments[0]).hide();}};
$.layerdrag={
start:function(obj,e,options){},
drag:function(e){},
stop:function(e){},
preventEvent:function(e){
if(e.stopPropagation)e.stopPropagation();
if(e.preventDefault)e.preventDefault();
return false;}};})(jQuery);(function($){
$.pdialog={
_op:{height:300,width:580,minH:40,minW:50,total:20,max:false,mask:false,resizable:true,drawable:true,maxable:true,minable:true,fresh:true},
_current:null,
_zIndex:42,
getCurrent:function(){
return this._current;},
reload:function(url,options){},
open:function(url,dlgid,title,options){},
switchDialog:function(dialog){},
attachShadow:function(dialog){},
_init:function(dialog,options){},
initResize:function(resizable,dialog,target){},
repaint:function(target,options){},
resizeTool:function(target,tmove,dialog){},
resizeDialog:function(obj,dialog,target){},
close:function(dialog){},
closeCurrent:function(){
this.close($.pdialog._current);},
checkTimeout:function(){
var $conetnt=$(".dialogContent",$.pdialog._current);
var json=DWZ.jsonEval($conetnt.html());
if(json&&json.statusCode==DWZ.statusCode.timeout)
this.closeCurrent();},
maxsize:function(dialog){},
restore:function(dialog){},
minimize:function(dialog){},
_resizeContent:function(dialog,width,height){}};})(jQuery);(function($){
$.fn.dialogDrag=function(options){
if(typeof options=='string'){
if(options=='destroy')
return this.each(function(){
var dialog=this;
$("div.dialogHeader",dialog).unbind("mousedown");});}
return this.each(function(){
var dialog=$(this);
$("div.dialogHeader",dialog).mousedown(function(e){
$.pdialog.switchDialog(dialog);
dialog.data("task",true);
setTimeout(function(){
if(dialog.data("task"))$.dialogDrag.start(dialog,e);},100);
return false;}).mouseup(function(e){
dialog.data("task",false);
return false;});});};
$.dialogDrag={
currId:null,
_init:function(dialog){
this.currId=new Date().getTime();
var shadow=$("#dialogProxy");
if(!shadow.size()){
shadow=$(DWZ.frag["dialogProxy"]);
$("body").append(shadow);}
$("h1",shadow).html($(".dialogHeader h1",dialog).text());},
start:function(dialog,event){},
stop:function(){
var sh=$(arguments[0]);
var dialog=sh.data("dialog");
$(dialog).css({left:$(sh).css("left"),top:$(sh).css("top")});
$.pdialog.attachShadow(dialog);
$(sh).hide();}}})(jQuery);(function($){
var _op={
cursor:'move',
sortBoxs:'div.sortDrag',
replace:true,
items:'> *',
selector:'',
zIndex:1000};
var sortDrag={
start:function($sortBox,$item,event,op){},
drag:function(){},
stop:function(){
var $helper=$(arguments[0]),$item=$helper.data('$item'),$placeholder=$helper.data('$placeholder');
var position=$placeholder.position();
$helper.animate({
top:position.top+"px",
left:position.left+"px"},{
complete:function(){},
duration:300});},
_createPlaceholder:function($item){
return $('<'+$item[0].nodeName+' class="sortDragPlaceholder"/>').css({
width:$item.outerWidth()+'px',
height:$item.outerHeight()+'px',
marginTop:$item.css('marginTop'),
marginRight:$item.css('marginRight'),
marginBottom:$item.css('marginBottom'),
marginLeft:$item.css('marginLeft')});},
_getOverSortBox:function($item){
var itemPos=$item.position();
var y=itemPos.top+($item.height()/2), x = itemPos.left+($item.width()/2);
return $(_op.sortBoxs).filter(':visible').filter(function(){
var $sortBox=$(this),sortBoxPos=$sortBox.position();
return DWZ.isOver(y,x,sortBoxPos.top,sortBoxPos.left,$sortBox.height(),$sortBox.width());});}};
$.fn.sortDrag=function(options){
return this.each(function(){
var op=$.extend({},_op,options);
var $sortBox=$(this);
if($sortBox.attr('selector'))op.selector=$sortBox.attr('selector');
$sortBox.find(op.items).each(function(i){
var $item=$(this),$selector=$item;
if(op.selector){
$selector=$item.find(op.selector).css({cursor:op.cursor});}
$selector.mousedown(function(event){
sortDrag.start($sortBox,$item,event,op);
event.preventDefault();});});});}})(jQuery);(function($){
$.fn.extend({
cssTable:function(options){
return this.each(function(){
var $this=$(this);
var $trs=$this.find('tbody>tr');
var $grid=$this.parent();
var nowrap=$this.hasClass("nowrap");
$trs.hoverClass("hover").each(function(index){
var $tr=$(this);
if(!nowrap&&index%2==1)
$tr.addClass("trbg");
$tr.click(function(){
$trs.filter(".selected").removeClass("selected");
$tr.addClass("selected");
var sTarget=$tr.attr("target");
if(sTarget){
if($("#"+sTarget,$grid).size()==0){
$grid.prepend('<input id="'+sTarget+'" type="hidden" />');}
$("#"+sTarget,$grid).val($tr.attr("rel"));}});});
$this.find("thead [orderField]").orderBy({
targetType:$this.attr("targetType"),
rel:$this.attr("rel"),
asc:$this.attr("asc")||"asc",
desc:$this.attr("desc")||"desc"});});}});})(jQuery);(function($){
$.fn.jTable=function(options){};
$.jTableTool={};})(jQuery);(function($){
$.fn.extend({
jTask:function(options){}});
$.taskBar={}})(jQuery);
function validateCallback(form,callback,confirmMsg){}
function iframeCallback(form,callback){}
function _iframeResponse(iframe,callback){}
function navTabAjaxDone(json){
DWZ.ajaxDone(json);
if(json.statusCode==DWZ.statusCode.ok){
if(json.navTabId){
navTab.reloadFlag(json.navTabId);}else{
var $pagerForm=$("#pagerForm",navTab.getCurrentPanel());
var args=$pagerForm.size()>0?$pagerForm.serializeArray():{}
navTabPageBreak(args,json.rel);}
if("closeCurrent"==json.callbackType){
setTimeout(function(){
navTab.closeCurrentTab(json.navTabId);},100);}else if("forward"==json.callbackType){
navTab.reload(json.forwardUrl);}else if("forwardConfirm"==json.callbackType){
alertMsg.confirm(json.confirmMsg||DWZ.msg("forwardConfirmMsg"),{
okCall:function(){
navTab.reload(json.forwardUrl);}});}else{
navTab.getCurrentPanel().find(":input[initValue]").each(function(){
var initVal=$(this).attr("initValue");
$(this).val(initVal);});}}}
function dialogAjaxDone(json){
DWZ.ajaxDone(json);
if(json.statusCode==DWZ.statusCode.ok){
if(json.navTabId){
navTab.reload(json.forwardUrl,{navTabId:json.navTabId});}else if(json.rel){
var $pagerForm=$("#pagerForm",navTab.getCurrentPanel());
var args=$pagerForm.size()>0?$pagerForm.serializeArray():{}
navTabPageBreak(args,json.rel);}
if("closeCurrent"==json.callbackType){
$.pdialog.closeCurrent();}}}
function navTabSearch(form,navTabId){
var $form=$(form);
if(form[DWZ.pageInfo.pageNum])
form[DWZ.pageInfo.pageNum].value=1;
navTab.reload($form.attr('action'),{data:$form.serializeArray(),navTabId:navTabId});
return false;}
function dialogSearch(form){
var $form=$(form);
if(form[DWZ.pageInfo.pageNum])
form[DWZ.pageInfo.pageNum].value=1;
$.pdialog.reload($form.attr('action'),{data:$form.serializeArray()});
return false;}
function dwzSearch(form,targetType){
if(targetType=="dialog")
dialogSearch(form);
else
navTabSearch(form);
return false;}
function divSearch(form,rel){
var $form=$(form);
if(form[DWZ.pageInfo.pageNum])
form[DWZ.pageInfo.pageNum].value=1;
if(rel){
var $box=$("#"+rel);
$box.ajaxUrl({
type:"POST",url:$form.attr("action"),data:$form.serializeArray(),callback:function(){
$box.find("[layoutH]").layoutH();}});}
return false;}
function _getPagerForm($parent,args){
var form=$("#pagerForm",$parent).get(0);
if(form){
if(args["pageNum"])
form[DWZ.pageInfo.pageNum].value=args["pageNum"];
if(args["numPerPage"])
form[DWZ.pageInfo.numPerPage].value=args["numPerPage"];
if(args["orderField"])
form[DWZ.pageInfo.orderField].value=args["orderField"];
if(args["orderDirection"]&&form[DWZ.pageInfo.orderDirection])
form[DWZ.pageInfo.orderDirection].value=args["orderDirection"];}
return form;}
function dwzPageBreak(options){}
function navTabPageBreak(args,rel){
dwzPageBreak({targetType:"navTab",rel:rel,data:args});}
function dialogPageBreak(args,rel){
dwzPageBreak({targetType:"dialog",rel:rel,data:args});}
function ajaxTodo(url,callback){}
function uploadifyQueueComplete(queueData){
var msg="The total number of files uploaded: "+queueData.uploadsSuccessful+"<br/>"+"The total number of errors while uploading: "+queueData.uploadsErrored+"<br/>"+"The total number of bytes uploaded: "+queueData.queueBytesUploaded+"<br/>"+"The average speed of all uploaded files: "+queueData.averageSpeed;
if(queueData.uploadsErrored){
alertMsg.error(msg);}else{
alertMsg.correct(msg);}}
function uploadifySuccess(file,data,response){
alert(data)}
function uploadifyError(file,errorCode,errorMsg){
alertMsg.error(errorCode+": "+errorMsg);}
function uploadifyError(event,queueId,fileObj,errorObj){
alert("event:"+event+"\nqueueId:"+queueId+"\nfileObj.name:"+fileObj.name+"\nerrorObj.type:"+errorObj.type+"\nerrorObj.info:"+errorObj.info);}
$.fn.extend({
ajaxTodo:function(){
return this.each(function(){
var $this=$(this);
$this.click(function(event){
var url=unescape($this.attr("href")).replaceTmById($(event.target).parents(".unitBox:first"));
DWZ.debug(url);
if(!url.isFinishedTm()){
alertMsg.error($this.attr("warn")||DWZ.msg("alertSelectMsg"));
return false;}
var title=$this.attr("title");
if(title){
alertMsg.confirm(title,{
okCall:function(){
ajaxTodo(url,$this.attr("callback"));}});}else{
ajaxTodo(url,$this.attr("callback"));}
event.preventDefault();});});},
dwzExport:function(){
function _doExport($this){
var $p=$this.attr("targetType")=="dialog"?$.pdialog.getCurrent():navTab.getCurrentPanel();
var $form=$("#pagerForm",$p);
var url=$this.attr("href");
window.location=url+(url.indexOf('?')==-1?"?":"&")+"abd=123&bbd=234";}
return this.each(function(){
var $this=$(this);
$this.click(function(event){
var title=$this.attr("title");
if(title){
alertMsg.confirm(title,{
okCall:function(){
_doExport($this);}});}else{
_doExport($this);}
event.preventDefault();});});}});(function($){
$.fn.extend({
pagination:function(opts){},
orderBy:function(options){
var op=$.extend({targetType:"navTab",rel:"",asc:"asc",desc:"desc"},options);
return this.each(function(){
var $this=$(this).css({cursor:"pointer"}).click(function(){
var orderField=$this.attr("orderField");
var orderDirection=$this.hasClass(op.asc)?op.desc:op.asc;
dwzPageBreak({targetType:op.targetType,rel:op.rel,data:{orderField:orderField,orderDirection:orderDirection}});});});},
pagerForm:function(options){
var op=$.extend({pagerForm$:"#pagerForm",parentBox:document},options);
var frag='<input type="hidden" name="#name#" value="#value#" />';
return this.each(function(){
var $searchForm=$(this),$pagerForm=$(op.pagerForm$,op.parentBox);
var actionUrl=$pagerForm.attr("action").replaceAll("#rel#",$searchForm.attr("action"));
$pagerForm.attr("action",actionUrl);
$searchForm.find(":input").each(function(){
var $input=$(this),name=$input.attr("name");
if(name&&(!$input.is(":checkbox,:radio")||$input.is(":checked"))){
if($pagerForm.find(":input[name='"+name+"']").length==0){
var inputFrag=frag.replaceAll("#name#",name).replaceAll("#value#",$input.val());
$pagerForm.append(inputFrag);}}});});}});
var Pagination=function(opts){
this.opts=$.extend({
targetType:"navTab",
rel:"",
totalCount:0,
numPerPage:10,
pageNumShown:10,
currentPage:1,
callback:function(){
return false;}},opts);}
$.extend(Pagination.prototype,{
targetType:function(){
return this.opts.targetType},
rel:function(){
return this.opts.rel},
numPages:function(){
return Math.ceil(this.opts.totalCount/this.opts.numPerPage);},
getInterval:function(){
var ne_half=Math.ceil(this.opts.pageNumShown/2);
var np=this.numPages();
var upper_limit=np-this.opts.pageNumShown;
var start=this.getCurrentPage()>ne_half?Math.max(Math.min(this.getCurrentPage()-ne_half,upper_limit),0):0;
var end=this.getCurrentPage()>ne_half?Math.min(this.getCurrentPage()+ne_half,np):Math.min(this.opts.pageNumShown,np);
return{start:start+1,end:end +1};},
getCurrentPage:function(){
var currentPage=parseInt(this.opts.currentPage);
if(isNaN(currentPage))
return 1;
return currentPage;},
hasPrev:function(){
return this.getCurrentPage()>1;},
hasNext:function(){
return this.getCurrentPage()<this.numPages();}});})(jQuery);(function($){
var _lookup={currentGroup:"",suffix:"",$target:null,pk:"id"};
var _util={
_lookupPrefix:function(key){
var strDot=_lookup.currentGroup?".":"";
return _lookup.currentGroup+strDot+key+_lookup.suffix;},
lookupPk:function(key){
return this._lookupPrefix(key);},
lookupField:function(key){
return this.lookupPk(key);}};
$.extend({
bringBackSuggest:function(args){
var $box=_lookup['$target'].parents(".unitBox:first");
$box.find(":input").each(function(){
var $input=$(this),inputName=$input.attr("name");
for(var key in args){
var name=(_lookup.pk==key)?_util.lookupPk(key):_util.lookupField(key);
if(name==inputName){
$input.val(args[key]);
break;}}});},
bringBack:function(args){
$.bringBackSuggest(args);
$.pdialog.closeCurrent();}});
$.fn.extend({
lookup:function(){
return this.each(function(){
var $this=$(this),options={mask:true,
width:$this.attr('width')||820,height:$this.attr('height')||400,
maxable:eval($this.attr("maxable")||"true"),
resizable:eval($this.attr("resizable")||"true")};
$this.click(function(event){
_lookup=$.extend(_lookup,{
currentGroup:$this.attr("lookupGroup")||"",
suffix:$this.attr("suffix")||"",
$target:$this,
pk:$this.attr("lookupPk")||"id"});
var url=unescape($this.attr("href")).replaceTmById($(event.target).parents(".unitBox:first"));
if(!url.isFinishedTm()){
alertMsg.error($this.attr("warn")||DWZ.msg("alertSelectMsg"));
return false;}
$.pdialog.open(url,"_blank",$this.attr("title")||$this.text(),options);
return false;});});},
multLookup:function(){
return this.each(function(){
var $this=$(this),args={};
$this.click(function(event){
var $unitBox=$this.parents(".unitBox:first");
$unitBox.find("[name='"+$this.attr("multLookup")+"']").filter(":checked").each(function(){
var _args=DWZ.jsonEval($(this).val());
for(var key in _args){
var value=args[key]?args[key]+",":"";
args[key]=value+_args[key];}});
if($.isEmptyObject(args)){
alertMsg.error($this.attr("warn")||DWZ.msg("alertSelectMsg"));
return false;}
$.bringBack(args);});});},
suggest:function(){
var op={suggest$:"#suggest",suggestShadow$:"#suggestShadow"};
var selectedIndex=-1;
return this.each(function(){
var $input=$(this).attr('autocomplete','off').keydown(function(event){
if(event.keyCode==DWZ.keyCode.ENTER&&$(op.suggest$).is(':visible'))return false;});
var suggestFields=$input.attr('suggestFields').split(",");
function _show(event){}
function _select($item){
var jsonStr="{"+$item.attr('lookupAttrs')+"}";
$.bringBackSuggest(DWZ.jsonEval(jsonStr));}
function _close(){
$(op.suggest$).html('').hide();
selectedIndex=-1;
$(document).unbind("click",_close);}
$input.focus(_show).click(false).keyup(function(event){});});},
itemDetail:function(){},
selectedTodo:function(){}});})(jQuery);(function($){
$.setRegional("datepicker",{
dayNames:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
monthNames:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']});
$.fn.datepicker=function(opts){}
var Datepicker=function(sDate,opts){}
$.extend(Datepicker.prototype,{
get:function(name){
return this.opts[name];},
_getDays:function(y,m){
return m==2?(y%4||!(y%100)&&y%400?28:29):(/4|6|9|11/.test(m)?30:31);},
_minMaxDate:function(sDate){
var _count=sDate.split('-').length-1;
var _format='y-M-d';
if(_count==1)_format='y-M';
else if(_count==0)_format='y';
return sDate.parseDate(_format);},
getMinDate:function(){
return this._minMaxDate(this.opts.minDate);},
getMaxDate:function(){
var _sDate=this.opts.maxDate;
var _count=_sDate.split('-').length-1;
var _date=this._minMaxDate(_sDate);
if(_count<2){
var _day=this._getDays(_date.getFullYear(),_date.getMonth()+1);
_date.setDate(_day);
if(_count==0){
_date.setMonth(11);}}
return _date;},
getDateWrap:function(date){
if(!date)date=this.parseDate(this.sDate)||new Date();
var y=date.getFullYear();
var m=date.getMonth()+1;
var days=this._getDays(y,m);
return{
year:y,month:m,day:date.getDate(),
hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds(),
days:days,date:date}},
changeDate:function(y,m,d){
var date=new Date(y,m-1,d||1);
this.sDate=this.formatDate(date);
return date;},
changeDay:function(day,chMonth){
if(!chMonth)chMonth=0;
var dw=this.getDateWrap();
return this.changeDate(dw.year,dw.month+parseInt(chMonth),day);},
parseDate:function(sDate){
if(!sDate)return null;
return sDate.parseDate(this.opts.pattern);},
formatDate:function(date){
return date.formatDate(this.opts.pattern);},
hasHour:function(){
return this.opts.pattern.indexOf("H")!=-1;},
hasMinute:function(){
return this.opts.pattern.indexOf("m")!=-1;},
hasSecond:function(){
return this.opts.pattern.indexOf("s")!=-1;},
hasTime:function(){
return this.hasHour()||this.hasMinute()||this.hasSecond();},
hasDate:function(){
var _dateKeys=['y','M','d','E'];
for(var i=0;i<_dateKeys.length;i++){
if(this.opts.pattern.indexOf(_dateKeys[i])!=-1)return true;}
return false;}});})(jQuery);(function($){
$.extend($.fn,{
jBlindUp:function(options){
var op=$.extend({duration:500,easing:"swing",call:function(){}},options);
return this.each(function(){
var $this=$(this);
$(this).animate({height:0},{
step:function(){},
duration:op.duration,
easing:op.easing,
complete:function(){
$this.css({display:"none"});
op.call();}});});},
jBlindDown:function(options){
var op=$.extend({to:0,duration:500,easing:"swing",call:function(){}},options);
return this.each(function(){
var $this=$(this);
var	fixedPanelHeight=(op.to>0)?op.to:$.effect.getDimensions($this[0]).height;
$this.animate({height:fixedPanelHeight},{
step:function(){},
duration:op.duration,
easing:op.easing,
complete:function(){
$this.css({display:""});
op.call();}});});},
jSlideUp:function(options){
var op=$.extend({to:0,duration:500,easing:"swing",call:function(){}},options);
return this.each(function(){
var $this=$(this);
$this.wrapInner("<div></div>");
var	fixedHeight=(op.to>0)?op.to:$.effect.getDimensions($(">div",$this)[0]).height;
$this.css({overflow:"visible",position:"relative"});
$(">div",$this).css({position:"relative"}).animate({top:-fixedHeight},{
easing:op.easing,
duration:op.duration,
complete:function(){$this.html($(this).html());}});});},
jSlideDown:function(options){
var op=$.extend({to:0,duration:500,easing:"swing",call:function(){}},options);
return this.each(function(){
var $this=$(this);
var	fixedHeight=(op.to>0)?op.to:$.effect.getDimensions($this[0]).height;
$this.wrapInner("<div style=\"top:-" + fixedHeight + "px;\"></div>");
$this.css({overflow:"visible",position:"relative",height:"0px"})
.animate({height:fixedHeight},{
duration:op.duration,
easing:op.easing,
complete:function(){$this.css({display:"",overflow:""});op.call();}});
$(">div",$this).css({position:"relative"}).animate({top:0},{
easing:op.easing,
duration:op.duration,
complete:function(){$this.html($(this).html());}});});}});
$.effect={
getDimensions:function(element,displayElement){}}
$.effect.Rectangle=function(){
this.width=0;
this.height=0;
this.unit="px";}})(jQuery);(function($){
$.extend($.fn,{
jPanel:function(options){}});})(jQuery);(function($){
$.fn.extend({
checkboxCtrl:function(parent){
return this.each(function(){
var $trigger=$(this);
$trigger.click(function(){
var group=$trigger.attr("group");
if($trigger.is(":checkbox")){
var type=$trigger.is(":checked")?"all":"none";
if(group)$.checkbox.select(group,type,parent);}else{
if(group)$.checkbox.select(group,$trigger.attr("selectType")||"all",parent);}});});}});
$.checkbox={
selectAll:function(_name,_parent){
this.select(_name,"all",_parent);},
unSelectAll:function(_name,_parent){
this.select(_name,"none",_parent);},
selectInvert:function(_name,_parent){
this.select(_name,"invert",_parent);},
select:function(_name,_type,_parent){}};})(jQuery);(function($){
var allSelectBox=[];
var killAllBox=function(bid){
$.each(allSelectBox,function(i){
if(allSelectBox[i]!=bid){
if(!$("#"+allSelectBox[i])[0]){
$("#op_"+allSelectBox[i]).remove();}else{
$("#op_"+allSelectBox[i]).css({height:"",width:""}).hide();}
$(document).unbind("click",killAllBox);}});};
$.extend($.fn,{
comboxSelect:function(options){},
comboxOption:function(selector,box){},
combox:function(){}});})(jQuery);(function($){
$.extend({
History:{
_hash:new Array(),
_cont:undefined,
_currentHash:"",
_callback:undefined,
init:function(cont,callback){},
_historyCheck:function(){},
addHistory:function(hash,fun,args){},
loadHistory:function(hash){}}});})(jQuery);(function($){
$.printBox=function(rel){}})(jQuery);
