import{o as d}from"./jsxRuntime.module-c37c4584.js";import"./preact.module-a8db4ca9.js";class o extends HTMLElement{render(){let t=new Date(this.getAttribute("datetime")||Date.now());this.innerHTML=new Intl.DateTimeFormat("default",{year:this.getAttribute("year")||void 0,month:this.getAttribute("month")||void 0,day:this.getAttribute("day")||void 0,hour:this.getAttribute("hour")||void 0,minute:this.getAttribute("minute")||void 0,second:this.getAttribute("second")||void 0,timeZoneName:this.getAttribute("time-zone-name")||void 0}).format(t)}connectedCallback(){this.rendered||(this.render(),this.rendered=!0)}static get observedAttributes(){return["datetime","year","month","day","hour","minute","second","time-zone-name"]}attributeChangedCallback(t,m,u){this.render()}}customElements.define("time-formatted",o);const s=a=>d("time-formatted",{id:"elem1",hour:"numeric",minute:"numeric",second:"numeric"}),h={title:"Example/Time Formatted",component:s,tags:["autodocs"]},e={};var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["Small"];export{e as Small,f as __namedExportsOrder,h as default};
//# sourceMappingURL=test.stories-47c5e757.js.map
