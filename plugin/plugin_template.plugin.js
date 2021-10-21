/**
 * @name ExamplePlugin
 * @author chazzox#1001
 * @description BoilerPlate extension for anyone to use :)
 * @version 0.0.1
 * @website https://github.com/chazzox/plugin-template#readme
 * @source https://github.com/chazzox/plugin-template
 */
BdApi.injectCSS("plugin_template-styles","#counterContainer{color:#fff;text-align:center}");const{React:e,ReactDOM:t}=BdApi;function o(){const[t,o]=e.useState(0);e.useEffect((()=>{const e=setInterval((()=>o(t+1)),1e3);return()=>{console.log("clearing");clearInterval(e)}}));return e.createElement("div",{id:"counterContainer"},t)}module.exports=class{load(){console.log("Hello World :)")}start(){BdApi.showConfirmationModal(e.createElement("h1",null,"Title"),["Hi!"," please free to take a look at the readme for instructions on where to get started",e.createElement(o,null)],{danger:!1,confirmText:"Start to develop :)",cancelText:"Im scared, pls help"})}stop(){}};
