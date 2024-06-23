import{_ as f,j as b,r as u,k as w,o as r,c as I,a,w as o,e as m,h as d,l as k,b as c,i as B,t as $}from"./index-BJijG9na.js";const y={name:"settings",computed:{inputDevices(){return this.$store.state.inputDevices},outputDevices(){return this.$store.state.outputDevices},defaultInputId:{get(){return this.$store.state.defaultInputId},set(e){this.$store.dispatch("setDefaultInputId",e)}},defaultOutputId:{get(){return this.$store.state.defaultOutputId},set(e){this.$store.dispatch("setDefaultOutputId",e)}},lang:{get(){return this.langs.find(e=>e.value==this.$store.state.lang)?this.$store.state.lang:"en"},set(e){this.$store.dispatch("setLang",e),location.reload()}},theme:{get(){return this.$vuetify.theme.current.dark},set(e){this.$vuetify.theme.current.dark=e,e?localStorage.removeItem("lightTheme"):localStorage.setItem("lightTheme","true"),location.reload()}},ATunning:{get(){return this.$store.state.ATunning},set(e){this.$store.dispatch("setATunning",e)}},notation:{get(){return this.$store.state.notation},set(e){this.$store.dispatch("setNotation",e)}},instrument:{get(){return this.$store.state.instrument},set(e){this.$store.dispatch("setInstrument",e)}},showHz:{get(){return this.$store.state.showHz},set(e){this.$store.dispatch("setShowHz",e)}},showBars:{get(){return this.$store.state.showBars},set(e){this.$store.dispatch("setShowBars",e)}},showForkButtons:{get(){return this.$store.state.showForkButtons},set(e){this.$store.dispatch("setShowForkButtons",e)}},instruments(){return[{id:0,name:"-"},...b.map(e=>(e.name=e.names[this.lang]||e.names.en,e))].sort((e,s)=>!e.names||!s.names?1:e.names[this.lang]<s.names[this.lang]?-1:e.names[this.lang]>s.names[this.lang]?1:0)},notations(){return this.notationsNames[this.$store.state.lang]||this.notationsNames.en},themes(){return[{name:this.$t("settings.theme.dark"),value:!0},{name:this.$t("settings.theme.light"),value:!1}]}},data(){return{langs:[{name:"English",value:"en"},{name:"Portugês",value:"pt"}],notationsNames:{en:[{name:"English",value:"eng"},{name:"European",value:"eur"}],pt:[{name:"Inglês",value:"eng"},{name:"Europeu",value:"eur"}]}}}};function D(e,s,U,N,h,t){const n=u("v-select"),g=u("v-text-field"),i=u("v-switch"),v=u("v-btn"),p=u("v-main"),V=w("mask");return r(),I("main",null,[a(p,null,{default:o(()=>[t.inputDevices.length>1?(r(),m(n,{key:0,modelValue:t.defaultInputId,"onUpdate:modelValue":s[0]||(s[0]=l=>t.defaultInputId=l),items:t.inputDevices,"item-title":"label","item-value":"deviceId",label:e.$t("settings.defaultInput")},null,8,["modelValue","items","label"])):d("",!0),t.outputDevices.length>1?(r(),m(n,{key:1,modelValue:t.defaultOutputId,"onUpdate:modelValue":s[1]||(s[1]=l=>t.defaultOutputId=l),items:t.outputDevices,"item-title":"label","item-value":"deviceId",label:e.$t("settings.defaultOutput")},null,8,["modelValue","items","label"])):d("",!0),a(n,{modelValue:t.lang,"onUpdate:modelValue":s[2]||(s[2]=l=>t.lang=l),items:h.langs,"item-title":"name","item-value":"value",label:e.$t("settings.appLang")},null,8,["modelValue","items","label"]),a(n,{modelValue:t.theme,"onUpdate:modelValue":s[3]||(s[3]=l=>t.theme=l),items:t.themes,"item-title":"name","item-value":"value",label:e.$t("settings.theme.theme")},null,8,["modelValue","items","label"]),a(n,{modelValue:t.instrument,"onUpdate:modelValue":s[4]||(s[4]=l=>t.instrument=l),items:t.instruments,"item-title":"name","item-value":"id",label:e.$t("settings.instrument")},null,8,["modelValue","items","label"]),k(a(g,{modelValue:t.ATunning,"onUpdate:modelValue":s[5]||(s[5]=l=>t.ATunning=l),type:"tel",label:e.$t("settings.ATuning"),suffix:"Hz"},null,8,["modelValue","label"]),[[V,"###"]]),a(n,{modelValue:t.notation,"onUpdate:modelValue":s[6]||(s[6]=l=>t.notation=l),items:t.notations,"item-title":"name","item-value":"value",label:e.$t("settings.notationNames")},null,8,["modelValue","items","label"]),c("section",null,[a(i,{modelValue:t.showHz,"onUpdate:modelValue":s[7]||(s[7]=l=>t.showHz=l),"hide-details":"",color:"primary",label:e.$t("settings.showHz")},null,8,["modelValue","label"]),a(i,{modelValue:t.showBars,"onUpdate:modelValue":s[8]||(s[8]=l=>t.showBars=l),"hide-details":"",color:"primary",label:e.$t("settings.showBars")},null,8,["modelValue","label"]),a(i,{modelValue:t.showForkButtons,"onUpdate:modelValue":s[9]||(s[9]=l=>t.showForkButtons=l),"hide-details":"",color:"primary",label:e.$t("settings.showForkButtons")},null,8,["modelValue","label"])]),a(v,{block:"",variant:"text",onClick:s[10]||(s[10]=l=>e.$router.push("/privacy-policy"))},{default:o(()=>[B($(e.$t("settings.privacyPolicy")),1)]),_:1})]),_:1})])}const z=f(y,[["render",D],["__scopeId","data-v-26aa2d5b"]]);export{z as default};
