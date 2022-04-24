(()=>{"use strict";var t={2476:(t,e,n)=>{n.d(e,{Z:()=>s});const s=()=>{var t;const e=window.navigator.userAgent.toLowerCase(),n=window.matchMedia("(display-mode: standalone)").matches;return/windows/.test(e)?t="windows":/Macintosh/.test(e)?t="mac":/android/.test(e)?t="android":/iphone|ipad|ipod/.test(e)&&(t="ios"),{name:t,standalone:n||"windows"==t||"mac"==t,isMobile:"android"==t||"ios"==t}}},7072:(t,e,n)=>{n.d(e,{Z:()=>s});const s=[{id:1,names:{en:"Violin",pt:"Violino"},chords:[196,293.7,440,659.3],notes:[55,62,69,76]},{id:2,names:{en:"Viola",pt:"Viola"},chords:[130.8,196,293.6,440],notes:[48,55,62,69]},{id:3,names:{en:"Violoncello",pt:"Violoncelo"},chords:[65.4,98,146.8,220],notes:[36,43,50,57]},{id:4,names:{en:"Eletric Guitar",pt:"Guitarra"},chords:[82.4,110,146.8,196,246.9,329.6],notes:[40,45,50,55,59,64]},{id:5,names:{en:"Bass",pt:"Contrabaixo"},chords:[97.9,73.4,55,41.2],notes:[43,38,33,28]},{id:6,names:{en:"Ukulele",pt:"Ukulele"},chords:[392,261.6,329.6,440],notes:[67,60,64,69]},{id:7,names:{en:"Guitar",pt:"Violão"},chords:[82.4,110,146.8,196,246.9,329.6],notes:[40,45,50,55,59,64]}]},5418:(t,e,n)=>{var s=n(8935),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view"),n("v-snackbar",{staticClass:"clickable",attrs:{top:"",timeout:1e4,color:"primary"},nativeOn:{click:function(e){return t.updateApp.apply(null,arguments)}},scopedSlots:t._u([{key:"action",fn:function(e){var s=e.attrs;return[n("v-btn",t._b({attrs:{text:"",icon:""}},"v-btn",s,!1),[n("v-icon",[t._v("cached")])],1)]}}]),model:{value:t.updateAvailable,callback:function(e){t.updateAvailable=e},expression:"updateAvailable"}},[t._v(" "+t._s(t.$i18n.t("system.updateAvailable"))+"  ")]),n("v-bottom-navigation",{attrs:{fixed:"",shift:"",color:"primary"},model:{value:t.menuIndex,callback:function(e){t.menuIndex=e},expression:"menuIndex"}},t._l(t.buttons,(function(e,s){return n("v-btn",{key:s,attrs:{text:""},on:{click:function(n){return t.$router.push(e.path)}}},[n("span",[t._v(t._s(e.title))]),e.icon?n("v-icon",[t._v(t._s(e.icon))]):t._e(),e.imgDark&&t.darkTheme?n("img",{staticClass:"v-icon",attrs:{src:t.menuIndex==s?e.imgActive:e.imgDark,alt:e.title}}):t._e(),e.imgLight&&!t.darkTheme?n("img",{staticClass:"v-icon",attrs:{src:t.menuIndex==s?e.imgActive:e.imgLight,alt:e.title}}):t._e()],1)})),1),t.device.standalone?t._e():n("install-pwa-banner"),t.privacyPolicyAccepted?t._e():n("cookiesWarningBanner")],1)},i=[],o=n(2476),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("footer",{staticClass:"elevation-8",class:{light:!t.darkTheme},on:{click:function(e){t.show=!1}}},[n("div",{staticClass:"title"},[t._v(t._s(t.$i18n.t("installPWABanner.title")))]),"ios"==t.device.name?[n("div",[t._v(t._s(t.$i18n.t("installPWABanner.tap"))+" "),n("v-icon",[t._v("ios_share")]),t._v(" "+t._s(t.$i18n.t("installPWABanner.than")))],1),n("div",{staticClass:"ios"},[t._v(t._s(t.$i18n.t("installPWABanner.addToHomeIOS"))),n("span")])]:t._e(),"android"==t.device.name?[n("div",[t._v(t._s(t.$i18n.t("installPWABanner.tap"))+" "),n("v-icon",[t._v("more_vert")]),t._v(" "+t._s(t.$i18n.t("installPWABanner.than")))],1),n("div",[t._v(t._s(t.$i18n.t("installPWABanner.addToHomeAndroid")))])]:t._e()],2):t._e()])},c=[];const l={name:"install-pwa-banner",computed:{device(){return(0,o.Z)()},darkTheme(){return this.$vuetify.theme.dark}},data(){return{show:!0}},mounted(){setTimeout((()=>{this.show=!1}),1e4)}},u=l;var d=n(1001),m=n(3453),h=n.n(m),p=n(4926),g=(0,d.Z)(u,r,c,!1,null,"487e19c2",null);const v=g.exports;h()(g,{VIcon:p.Z});var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("footer",{staticClass:"elevation-8",class:{light:!t.darkTheme}},[n("p",[t._v(t._s(t.$i18n.t("ads.cookiesWarning.title")))]),n("p",[t._v(t._s(t.$i18n.t("ads.cookiesWarning.subtitle"))+" "),n("font",{on:{click:function(e){return t.$router.push("/privacy-policy")}}},[t._v("tunerinst.net/privacy-policy")])],1),n("section",[n("v-btn",{on:{click:t.accept}},[n("v-icon",[t._v("check")]),t._v(t._s(t.$i18n.t("ads.cookiesWarning.accept")))],1)],1)]):t._e()])},y=[];const b={name:"cookies-warning-banner",computed:{darkTheme(){return this.$vuetify.theme.dark}},data(){return{show:!localStorage.getItem("privacyPolicyAccepted")}},methods:{accept(){localStorage.setItem("privacyPolicyAccepted","true"),this.show=!1}}},w=b;var k=n(8704),I=(0,d.Z)(w,f,y,!1,null,"51eda788",null);const S=I.exports;h()(I,{VBtn:k.Z,VIcon:p.Z});const _={components:{cookiesWarningBanner:S,installPwaBanner:v},computed:{baseUrl(){return"/tunerinst/"},lang(){return this.$store.state.lang},darkTheme(){return this.$vuetify.theme.dark},device(){return(0,o.Z)()},initMenuIndex(){return"/metronome"==window.location.pathname?1:"/drums"==window.location.pathname?2:"/piano"==window.location.pathname?3:"/settings"==window.location.pathname?4:0},privacyPolicyAccepted(){return!!localStorage.getItem("privacyPolicyAccepted")},updateAvailable:{get(){return this.$store.state.updateAvailable},set(t){return this.$store.commit("updateAvailable",t)}}},data(){return{menuIndex:0,buttons:[]}},created(){this.buttons=[{title:this.$i18n.t("system.tuner"),path:"/",imgLight:`${this.baseUrl}img/tuning-fork-light.svg`,imgDark:`${this.baseUrl}img/tuning-fork-dark.svg`,imgActive:`${this.baseUrl}img/tuning-fork-active.svg`},{title:this.$i18n.t("system.metronome"),path:"/metronome",imgLight:`${this.baseUrl}img/metronome-light.svg`,imgDark:`${this.baseUrl}img/metronome-dark.svg`,imgActive:`${this.baseUrl}img/metronome-active.svg`},{title:this.$i18n.t("system.drums"),path:"/drums",imgLight:`${this.baseUrl}img/drums-light.svg`,imgDark:`${this.baseUrl}img/drums-dark.svg`,imgActive:`${this.baseUrl}img/drums-active.svg`},{title:this.$i18n.t("system.piano"),path:"/piano",imgLight:`${this.baseUrl}img/piano-light.svg`,imgDark:`${this.baseUrl}img/piano-dark.svg`,imgActive:`${this.baseUrl}img/piano-active.svg`},{title:this.$i18n.t("system.settings"),path:"/settings",icon:"settings"}],this.getInputDevices(),this.menuIndex=this.initMenuIndex,document.documentElement.style.setProperty("--font-color",this.$vuetify.theme.dark?"#fff":"rgba(0, 0, 0, 0.87)"),document.documentElement.style.setProperty("--vh",`${window.innerHeight}px`),window.oncontextmenu=t=>!1},mounted(){try{navigator.wakeLock.request("screen").then()}catch(t){}window.addEventListener("resize",(()=>{document.documentElement.style.setProperty("--vh",`${window.innerHeight}px`),this.$root.$emit("resize")}))},methods:{getInputDevices(){navigator.mediaDevices.enumerateDevices().then((t=>{let e=t.filter((t=>"audioinput"==t.kind)),n=t.filter((t=>"audiooutput"==t.kind));this.$store.commit("setInputDevices",e),this.$store.commit("setOutputDevices",n)}))},updateApp(){navigator.serviceWorker.ready.then((t=>{let e,n=t.waiting;n.postMessage("skipWaiting"),n.addEventListener("statechange",(()=>{"activated"!=n.state||e||(window.location.reload(!0),e=!0)}))}))}},watch:{lang(t){this.$i18n.locale=t}}},A=_;var $=n(3167),B=n(8819),P=n(8766),T=(0,d.Z)(A,a,i,!1,null,null,null);const x=T.exports;h()(T,{VApp:$.Z,VBottomNavigation:B.Z,VBtn:k.Z,VIcon:p.Z,VSnackbar:P.Z});var D=n(2809),C=n(3130),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t.instrument?n("h1",[t._v(t._s(t.instrument.names[t.lang]))]):t._e(),n("v-main",[n("section",[t._l(t.displayNotes,(function(e,s){return n("article",{key:""+e[t.notation]+s,class:{accurate:t.accurate&&2==s}},[n("ins",[n("span",[t._v(t._s(e[t.notation]))]),n("span",[t._v(t._s(t.detectedNote.octave))])])])})),t._l(11,(function(t){return n("label",{key:t})})),n("mark",{class:{accurate:t.accurate}})],2),t.showHz?n("header",{class:{accurate:t.accurate}},[n("span",[t._v(t._s(t._f("fixed")(t.detectedNote.frequency||t.ATunning)))]),n("span",[t._v("Hz")])]):t._e(),t.showForkButtons&&t.instrument?n("nav",t._l(t.instrument.notes,(function(e,s){return n("v-btn",{key:s,staticClass:"elevation-4",attrs:{fab:"",color:t.playing==s?"primary":null,title:t.playing==s?t.$i18n.t("home.stop"):t.$i18n.t("home.play")},on:{click:function(n){return t.playOscilator(e,s)}}},[n("span",[t._v(t._s(t.notes[e%12][t.notation]))]),n("label",[t._v(t._s(parseInt(e/12)-1))])])})),1):t._e()]),t.showBars?n("canvas",{ref:"canvas"}):t._e(),n("instrument-picker-dialog")],1)},O=[];n(8675),n(3462),n(3824);const Z=[{eng:"C",eur:"Dó"},{eng:"C#",eur:"Dó#"},{eng:"D",eur:"Ré"},{eng:"D#",eur:"Ré#"},{eng:"E",eur:"Mi"},{eng:"F",eur:"Fa"},{eng:"F#",eur:"Fa#"},{eng:"G",eur:"Sol"},{eng:"G#",eur:"Sol#"},{eng:"A",eur:"La"},{eng:"A#",eur:"La#"},{eng:"B",eur:"Si"}];var F=n(7072),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",[t._v(" "+t._s(t.$i18n.t("instrumentPicker.title"))+" ")]),n("v-card-text",[n("p",[t._v(t._s(t.$i18n.t("instrumentPicker.message"))+" "),n("span",{staticClass:"emoji-font"},[t._v("🤗")])]),n("v-select",{attrs:{items:t.instruments,"item-text":"name","item-value":"id"},model:{value:t.instrument,callback:function(e){t.instrument=e},expression:"instrument"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.start}},[t._v(t._s(t.$i18n.t("instrumentPicker.button")))])],1)],1)],1)},E=[];const H={name:"instrument-picker-dialog",computed:{instrument:{get(){return this.$store.state.instrument},set(t){this.$store.dispatch("setInstrument",t)}},lang(){return this.$store.state.lang},instruments(){return F.Z.map((t=>(t.name=t.names[this.$store.state.lang]||t.names.en,t))).sort(((t,e)=>t.names[this.lang]<e.names[this.lang]?-1:t.names[this.lang]>e.names[this.lang]?1:0))}},data(){return{show:!1}},mounted(){this.show=isNaN(this.instrument)||void 0===this.instrument},methods:{start(){if(!this.instrument)return!1;this.show=!1}}},L=H;var z=n(2371),q=n(7118),V=n(8366),W=n(8079),j=(0,d.Z)(L,N,E,!1,null,"24bb07ea",null);const U=j.exports;h()(j,{VBtn:k.Z,VCard:z.Z,VCardActions:q.h7,VCardText:q.ZB,VCardTitle:q.EB,VDialog:V.Z,VSelect:W.Z});const R={name:"tuner",components:{instrumentPickerDialog:U},data(){return{audioCtx:new AudioContext,audio:new Audio,bufferSize:2048,analyser:null,processor:null,oscilator:null,pitchDetector:null,started:!1,accurate:!1,detectedNote:{octave:4},displayNotes:[],frequencyData:null,canvasContext:null,playing:null}},computed:{inputDevices(){return this.$store.state.inputDevices},outputDevices(){return this.$store.state.outputDevices},lang(){return this.$store.state.lang},ATunning(){return this.$store.state.ATunning},notation(){return this.$store.state.notation},instrument(){return F.Z.find((t=>t.id==this.$store.state.instrument))},showHz(){return this.$store.state.showHz},showBars(){return this.$store.state.showBars},showForkButtons(){return this.$store.state.showForkButtons},instruments(){return F.Z},notes(){return Z}},created(){this.detectedNote.frequency=this.ATunning,this.displayNotes=this.notes.slice(7)},mounted(){this.analyser=this.audioCtx.createAnalyser(),this.processor=this.audioCtx.createScriptProcessor(this.bufferSize,1,1),this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount),this.showBars&&(this.canvasContext=this.$refs.canvas.getContext("2d")),Aubio().then((t=>{this.pitchDetector=new t.Pitch("default",this.bufferSize,1,this.audioCtx.sampleRate),this.start()})),this.$root.$on("resize",(()=>{this.$refs.canvas&&(this.$refs.canvas.width=this.$refs.canvas.clientWidth,this.$refs.canvas.height=this.$refs.canvas.clientHeight)}))},beforeDestroy(){this.audio.pause(),this.pause()},methods:{toggle(){this.started=!this.started,this.started?this.start():this.pause()},start(){this.audioCtx.resume(),navigator.mediaDevices.getUserMedia({audio:{noiseSuppression:!0,echoCancellation:!0,deviceId:this.$store.state.defaultInputId?{exact:this.$store.state.defaultInputId}:void 0}}).then((t=>{this.audioCtx.createMediaStreamSource(t).connect(this.analyser),this.analyser.connect(this.processor),this.processor.connect(this.audioCtx.destination),this.processor.onaudioprocess=t=>{this.analyser.getByteFrequencyData(this.frequencyData),requestAnimationFrame(this.refreshBars);let e=this.pitchDetector.do(t.inputBuffer.getChannelData(0));if(!e)return!1;let n=this.getNote(e),s=n%12;this.detectedNote={name:this.notes[s],frequency:e,octave:parseInt(n/12)-1},this.refreshDisplayNotes(s),this.refreshMark(e,n,this.getCents(e,n)/45*45)}}),(t=>{console.log(t)}))},pause(){this.processor.onaudioprocess=void 0,this.stopOscilator()},playOscilator(t,e){if(this.playing==e)return this.stopOscilator();null!==this.playing&&this.playing!=e&&this.stopOscilator(),this.playing=e,this.destination=this.audioCtx.createMediaStreamDestination(),this.oscilator=this.audioCtx.createOscillator(),this.oscilator.frequency.value=this.getStandardFrequency(t),this.oscilator.connect(this.destination),this.audio.srcObject=this.destination.stream,this.$store.state.defaultOutputId&&this.outputDevices.find((t=>t.deviceId==this.$store.state.defaultOutputId))&&this.audio.setSinkId(this.$store.state.defaultOutputId),this.oscilator.start(),this.audio.play()},stopOscilator(){if(this.playing=null,!this.oscilator)return!1;this.audio.pause(),this.oscilator.stop(),this.oscilator.disconnect()},refreshDisplayNotes(t){this.displayNotes=[this.notes[t-2]||this.notes[t+10],this.notes[t-1]||this.notes[t+9],this.notes[t],this.notes[t+1]||this.notes[0],this.notes[t+2]||this.notes[1]]},refreshMark(t,e,n){if(document.documentElement.style.setProperty("--angle",`${n}deg`),!this.instrument)return!1;this.accurate=!1,this.instrument.notes.some(((e,n,s)=>{let a=this.getStandardFrequency(e);if(t>a-1&&t<a+1)return this.accurate=!0,!0}),this)},refreshBars(){if(!this.$refs.canvas)return!1;let t=64,e=this.$refs.canvas.clientWidth/t-.5;this.canvasContext.clearRect(0,0,this.$refs.canvas.clientWidth,this.$refs.canvas.clientHeight);for(let n=0;n<t;n++)this.canvasContext.fillStyle=this.$vuetify.theme.currentTheme.accent,this.canvasContext.fillRect(n*(e+.5),this.$refs.canvas.clientHeight-this.frequencyData[n],e,this.frequencyData[n])},getNote(t){let e=Math.log(t/this.ATunning)/Math.log(2)*12;return Math.round(e)+69},getStandardFrequency(t){return this.ATunning*Math.pow(2,(t-69)/12)},getCents(t,e){return Math.floor(1200*Math.log(t/this.getStandardFrequency(e))/Math.log(2))}},filters:{fixed(t){return t.toFixed(2)}}},G=R;var K=n(4768),Q=(0,d.Z)(G,M,O,!1,null,"63b66217",null);const J=Q.exports;h()(Q,{VBtn:k.Z,VMain:K.Z});const X=()=>n.e(220).then(n.bind(n,2220)),Y=()=>n.e(445).then(n.bind(n,2445)),tt=()=>n.e(658).then(n.bind(n,9658)),et=()=>n.e(174).then(n.bind(n,5174)),nt=()=>n.e(990).then(n.bind(n,8990));s.Z.use(D.Z);const st=[{path:"/settings",name:"Settings",component:et},{path:"/metronome",name:"Metronome",component:X},{path:"/drums",name:"Drums",component:Y},{path:"/piano",name:"piano",component:tt},{path:"/privacy-policy",name:"Privacy Policy",component:nt},{path:"*",name:"Tuner",component:J}],at=new D.Z({mode:"history",base:"/tunerinst/",routes:st});s.Z.use(C.ZP,{appName:"Tunerinst",pageTrackerScreenviewEnabled:!0,pageTrackerExcludedRotues:["/settings","/privacy-policy"],config:{id:"G-HCB3BQ66PF"}},at);const it=at;var ot=n(4665);s.Z.use(ot.ZP);const rt=new ot.ZP.Store({state:{updateAvailable:!1,defaultInputId:localStorage.getItem("defaultInputId"),defaultOutputId:localStorage.getItem("defaultOutputId"),lang:localStorage.getItem("lang")||navigator.language.split("-")[0],ATunning:parseInt(localStorage.getItem("ATunning")||"440"),metronomeBPM:parseInt(localStorage.getItem("metronomeBPM")||"55"),metronomeBPMStep:parseInt(localStorage.getItem("metronomeBPMStep")||"10"),notation:localStorage.getItem("notation")||"eng",instrument:parseInt(localStorage.getItem("instrument"))??void 0,showHz:!localStorage.getItem("hideHz"),showBars:!localStorage.getItem("hideBars"),showForkButtons:!localStorage.getItem("hideForkButtons"),inputDevices:[],outputDevices:[]},mutations:{updateAvailable(t,e){t.updateAvailable=e},setDefaultInputId(t,e){t.defaultInputId=e},setDefaultOutputId(t,e){t.defaultOutputId=e},setLang(t,e){t.lang=e},setATunning(t,e){t.ATunning=e},setMetronomeBPM(t,e){t.metronomeBPM=e},setMetronomeBPMStep(t,e){t.metronomeBPMStep=e},setNotation(t,e){t.notation=e},setInstrument(t,e){t.instrument=e},setShowHz(t,e){t.showHz=e},setShowBars(t,e){t.showBars=e},setShowForkButtons(t,e){t.showForkButtons=e},setInputDevices(t,e){t.inputDevices=e},setOutputDevices(t,e){t.outputDevices=e}},actions:{setDefaultInputId(t,e){t.commit("setDefaultInputId",e),e?localStorage.setItem("defaultInputId",e):localStorage.removeItem("defaultInputId")},setDefaultOutputId(t,e){t.commit("setDefaultOutputId",e),e?localStorage.setItem("defaultOutputId",e):localStorage.removeItem("defaultOutputId")},setLang(t,e){e||(e="en"),t.commit("setLang",e),localStorage.setItem("lang",e)},setATunning(t,e){e||(e=440),t.commit("setATunning",parseInt(e)),localStorage.setItem("ATunning",e)},setMetronomeBPM(t,e){e||(e=55),t.commit("setMetronomeBPM",parseInt(e)),localStorage.setItem("metronomeBPM",e)},setMetronomeBPMStep(t,e){(!e||parseInt(e)<10)&&(e=10),t.commit("setMetronomeBPMStep",parseInt(e)),localStorage.setItem("metronomeBPMStep",e)},setNotation(t,e){e||(e="eng"),t.commit("setNotation",e),localStorage.setItem("notation",e)},setInstrument(t,e){e||(e=0),t.commit("setInstrument",parseInt(e)),localStorage.setItem("instrument",e)},setShowHz(t,e){t.commit("setShowHz",!!e),e?localStorage.removeItem("hideHz"):localStorage.setItem("hideHz","true")},setShowBars(t,e){t.commit("setShowBars",!!e),e?localStorage.removeItem("hideBars"):localStorage.setItem("hideBars","true")},setShowForkButtons(t,e){t.commit("setShowForkButtons",!!e),e?localStorage.removeItem("hideForkButtons"):localStorage.setItem("hideForkButtons","true")}}});var ct=n(9132),lt=n(8161),ut=n.n(lt);s.Z.use(ct.Z),s.Z.use(ut());const dt=new ct.Z({icons:{iconfont:"md"},theme:{dark:!localStorage.getItem("lightTheme")&&!!window.matchMedia("(prefers-color-scheme: dark)").matches,options:{customProperties:!0},themes:{light:{primary:"#43b3ae",secondary:"#779ecb",accent:"#9370db",error:"#ea3c53",info:"#9bddff",success:"#77dd77",warning:"#fcf75e"},dark:{primary:"#43b3ae",secondary:"#779ecb",accent:"#9370db",error:"#ea3c53",info:"#9bddff",success:"#77dd77",warning:"#fcf75e"}}}});var mt=n(7345);const ht={system:{updateAvailable:"Update available",tuner:"Tuner",metronome:"Metronome",drums:"Drums",piano:"Piano",settings:"Settings"},home:{start:"Start",pause:"Pause",stop:"Stop",play:"Play"},metronome:{tempo:"Tempo",subtractStep:"Subtract %{n} BPM",addStep:"Add %{n} BPM"},drums:{bpm:"BPM",rhythm:"Rhythm"},settings:{defaultInput:"Input device",defaultOutput:"Output device",appLang:"Language",instrument:"Instrument",ATuning:"Orchestra tuning",notationNames:"Notation names",showHz:"Hertz",showBars:"Bars",showForkButtons:"Tuning Forks",privacyPolicy:"Privacy Policy",theme:{theme:"Theme",light:"Light",dark:"Dark"}},instrumentPicker:{title:"First time using the app ?",message:"Tell us which instrument do you play",button:"Let's tune"},installPWABanner:{title:"Install this app on your device",tap:"Tap",than:"and then",addToHomeIOS:"Add to Home screen",addToHomeAndroid:"Install app"},ads:{cookiesWarning:{title:"We use cookies to improve your experience.",subtitle:"Find out more on",accept:"Accept"}}},pt={system:{updateAvailable:"Atualização disponível",tuner:"Afinador",metronome:"Metrônomo",drums:"Bateria",piano:"Piano",settings:"Configurações"},home:{start:"Começar",pause:"Pausar",stop:"Parar",play:"Tocar"},metronome:{tempo:"Andamento",subtractStep:"Subtrair %{n} BPM",addStep:"Adicionar %{n} BPM"},drums:{bpm:"BPM",rhythm:"Ritmo"},settings:{defaultInput:"Dispositivo de entrada",defaultOutput:"Dispositivo de saída",appLang:"Idioma",instrument:"Instrumento",ATuning:"Afinação da Orquestra",notationNames:"Notação",showHz:"Hertz",showBars:"Barras",showForkButtons:"Diapasão",privacyPolicy:"Política de Privacidade",theme:{theme:"Tema",light:"Claro",dark:"Escuro"}},instrumentPicker:{title:"Primeira vez usando o App ?",message:"Diga aê qual instrumento vc toca",button:"Partiu afinar"},installPWABanner:{title:"Instale esse App no seu celular",tap:"Toque em",than:"e depois em",addToHomeIOS:"Adicionar à Tela de Início",addToHomeAndroid:"Instalar aplicativo"},ads:{cookiesWarning:{title:"Usamos cookies para melhorar sua experiência.",subtitle:"Saiba mais em",accept:"Aceitar"}}},gt={en:ht,pt};s.Z.use(mt.Z);const vt=new mt.Z({locale:localStorage.getItem("lang")||navigator.language.split("-")[0],fallbackLocale:"en",messages:gt});var ft=n(563);(0,ft.z)("/tunerinst/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){rt.commit("updateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var yt=n(6166),bt=n.n(yt);let wt={};const kt=bt().create(wt);kt.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),kt.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=kt,window.axios=kt,Object.defineProperties(t.prototype,{axios:{get(){return kt}},$axios:{get(){return kt}}})},s.Z.use(Plugin);Plugin;s.Z.config.productionTip=!1,s.Z.config.devtools=!1,new s.Z({router:it,i18n:vt,store:rt,vuetify:dt,render:t=>t(x)}).$mount("#app")}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,n),i.exports}n.m=t,(()=>{var t=[];n.O=(e,s,a,i)=>{if(!s){var o=1/0;for(u=0;u<t.length;u++){for(var[s,a,i]=t[u],r=!0,c=0;c<s.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((t=>n.O[t](s[c])))?s.splice(c--,1):(r=!1,i<o&&(o=i));if(r){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,a,i]}})(),(()=>{n.F={},n.E=t=>{Object.keys(n.F).map((e=>{n.F[e](t)}))}})(),(()=>{n.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return n.d(e,{a:e}),e}})(),(()=>{n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}})(),(()=>{n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce(((e,s)=>(n.f[s](t,e),e)),[]))})(),(()=>{n.u=t=>"js/"+t+"."+{174:"ad43d103",220:"4a44d92e",445:"66662383",658:"02f57a11",990:"88ad63d9"}[t]+".js"})(),(()=>{n.miniCssF=t=>"css/"+t+"."+{174:"b03acf17",220:"e830b536",445:"621a496d",658:"61a19c97",990:"d1af0f3c"}[t]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="Tunerinst:";n.l=(s,a,i,o)=>{if(t[s])t[s].push(a);else{var r,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+i){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+i),r.src=s),t[s]=[a];var m=(e,n)=>{r.onerror=r.onload=null,clearTimeout(h);var a=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((t=>t(n))),e)return e(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),c&&document.head.appendChild(r)}}})(),(()=>{n.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{n.p="/tunerinst/"})(),(()=>{var t=(t,e,n,s)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=i=>{if(a.onerror=a.onload=null,"load"===i.type)n();else{var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,a.parentNode.removeChild(a),s(c)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=(t,e)=>{for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var a=n[s],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){a=o[s],i=a.getAttribute("data-href");if(i===t||i===e)return a}},s=s=>new Promise(((a,i)=>{var o=n.miniCssF(s),r=n.p+o;if(e(o,r))return a();t(s,r,a,i)})),a={143:0};n.f.miniCss=(t,e)=>{var n={174:1,220:1,445:1,658:1,990:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=s(t).then((()=>{a[t]=0}),(e=>{throw delete a[t],e})))}})(),(()=>{var t={143:0,283:0};n.f.j=(e,s)=>{var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)s.push(a[2]);else if(283!=e){var i=new Promise(((n,s)=>a=t[e]=[n,s]));s.push(a[2]=i);var o=n.p+n.u(e),r=new Error,c=s=>{if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",r.name="ChunkLoadError",r.type=i,r.request=o,a[1](r)}};n.l(o,c,"chunk-"+e,e)}else t[e]=0},n.F.j=e=>{if((!n.o(t,e)||void 0===t[e])&&283!=e){t[e]=null;var s=document.createElement("link");n.nc&&s.setAttribute("nonce",n.nc),s.rel="prefetch",s.as="script",s.href=n.p+n.u(e),document.head.appendChild(s)}},n.O.j=e=>0===t[e];var e=(e,s)=>{var a,i,[o,r,c]=s,l=0;if(o.some((e=>0!==t[e]))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var u=c(n)}for(e&&e(s);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},s=globalThis["webpackChunkTunerinst"]=globalThis["webpackChunkTunerinst"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})(),(()=>{n.O(0,[143],(()=>{[220,445,658,174,990].map(n.E)}),5)})();var s=n.O(void 0,[772,840,602,274,611,125,283,797],(()=>n(5418)));s=n.O(s)})();