/**
 * @name ExamplePlugin
 * @author chazzox#1001
 * @description BoilerPlate extension for anyone to use :)
 * @version 0.0.1
 * @website https://github.com/chazzox/plugin-template#readme
 * @source https://github.com/chazzox/plugin-template
 */
var e=BdApi.React;e.createContext;e.useRef;var t=e.useState;e.useLayoutEffect;var n=e.createElement;e.useContext;var o=e.useEffect;e.useMemo;e.useCallback;e.Children;e.isValidElement;e.Fragment;e.forwardRef;BdApi.injectCSS("plugin_template-styles","#counterContainer{color:#fff;text-align:center;display:flex;flex-direction:column;gap:15px;align-items:center}button{display:block;width:fit-content;padding:8px;border-radius:8px;background-color:var(--brand-experiment);color:#fff;font-size:12pt;box-shadow:0 5px 15px rgba(0,0,0,.35)}");function r(){var e=t(0),r=e[0],a=e[1];o((function(){var e=setInterval((function(){return a((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}));return n("div",{id:"counterContainer"},n("h1",null,r),n("button",{onClick:function(){return a((function(e){return++e}))}},"Increase"),n("button",{onClick:function(){return a((function(e){return--e}))}},"Decrease"))}module.exports=function(){function e(){}e.prototype.load=function(){console.log("%cExample Plugin","background:#5865f2;padding:4px;border-radius:8px;","Hello World :)")};e.prototype.start=function(){BdApi.showConfirmationModal(n("h1",null,"Hello world"),["Hi!"," please free to take a look at the readme for instructions on where to get started",n(r,null)],{danger:!1,confirmText:"Start to develop :)",cancelText:"Im scared, pls help"})};e.prototype.stop=function(){};return e}();
