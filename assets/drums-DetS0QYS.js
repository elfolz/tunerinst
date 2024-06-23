import{_ as v,g as B,r as o,o as m,e as c,w as r,b as s,n as k,h as y,c as S,a,i as d,t as C,F as w,p as I,f as P}from"./index-BJijG9na.js";const D={name:"drums",computed:{baseUrl(){return"/"},device(){return B()},inputDevices(){return this.$store.state.inputDevices},outputDevices(){return this.$store.state.outputDevices}},data(){return{data:[],loading:!1,playing:!1,bpm:parseInt(localStorage.getItem("drumsPBM")||"80"),rhythm:null,audioCtx:new AudioContext,audio:new Audio,destination:null,audioSrc:null}},mounted(){window.addEventListener("keydown",this.toggleByKeyboard),this.getData()},beforeDestroy(){this.audio.pause(),this.audioCtx.close(),window.removeEventListener("keydown",this.toggleByKeyboard)},methods:{getData(){fetch(`${this.baseUrl}json/drums.json`).then(t=>{if(t.status!=200)throw null;return t.json()}).then(t=>{this.data=t,this.rhythm=this.data.find(i=>i.dir==localStorage.getItem("drumsRhythm")),this.rhythm||(this.rhythm=this.data[0]),this.resetRhythm()})},toggleByKeyboard(t){if(document.hidden)return!1;["ArrowLeft","MediaTrackPrevious","-"].includes(t.key)&&this.subtractBpm(),["ArrowRight","MediaTrackNext","+"].includes(t.key)&&this.addBpm(),[" ","MediaPlayPause"].includes(t.key)&&(this.togglePlay(),t.preventDefault())},createAudioBuffer(){this.destination=this.audioCtx.createMediaStreamDestination(),this.audio.srcObject=this.destination.stream,this.$store.state.defaultOutputId&&this.outputDevices.find(t=>t.deviceId==this.$store.state.defaultOutputId)&&this.audio.setSinkId(this.$store.state.defaultOutputId),this.audioSrc=this.audioCtx.createBufferSource(),this.audioSrc.connect(this.destination),this.audioSrc.loop=!0},setBPM(t){localStorage.setItem("drumsPBM",t),this.resetPlay()},setRhythm(t){localStorage.setItem("drumsRhythm",t.dir),this.resetRhythm(),this.resetPlay()},resetRhythm(){this.rhythm.bpms.includes(this.bpm)||(this.bpm=this.rhythm.bpms[0])},resetPlay(){if(this.$refs.drumsRhythm.blur(),this.playing&&this.audioSrc.stop(),!this.playing)return!1;this.playing=!1,this.togglePlay()},togglePlay(){this.playing?(this.audio.pause(),this.audioSrc.stop(),this.playing=!1):(this.createAudioBuffer(),this.loading=!0,fetch(`${this.baseUrl}audio/drums/${this.rhythm.dir}/${this.bpm}.${this.device.name=="ios"?"aac":"opus"}`).then(t=>{if(t.status!=200)throw null;return t.arrayBuffer()}).then(t=>{this.audioCtx.decodeAudioData(t,i=>{this.audioSrc.buffer=i,this.audioSrc.start(),this.audio.play(),this.loading=!1,this.playing=!0})}))},subtractBpm(){if(this.$refs.subtractBpmButton.$el.blur(),this.bpm<=this.rhythm.bpms[0])return!1;let t=this.rhythm.bpms.indexOf(this.bpm);this.bpm=this.rhythm.bpms[t-1],this.setBPM(this.bpm)},addBpm(){if(this.$refs.addBpmButton.$el.blur(),this.bpm>=this.rhythm.bpms[this.rhythm.bpms.length-1])return!1;let t=this.rhythm.bpms.indexOf(this.bpm);this.bpm=this.rhythm.bpms[t+1],this.setBPM(this.bpm)}}},p=t=>(I("data-v-015924e3"),t=t(),P(),t),x=p(()=>s("mark",{class:"cymbal"},[s("span")],-1)),M=p(()=>s("mark",{class:"bass"},[s("span")],-1)),R=p(()=>s("mark",{class:"snare"},[s("span")],-1)),V=[x,M,R];function A(t,i,O,j,e,l){const f=o("v-progress-linear"),b=o("v-select"),g=o("v-slider"),n=o("v-icon"),h=o("v-btn"),_=o("v-main");return m(),c(_,null,{default:r(()=>[s("section",{class:k({playing:e.playing})},V,2),s("footer",null,[!e.data.length&&!e.rhythm?(m(),c(f,{key:0,indeterminate:""})):y("",!0),e.data.length&&e.rhythm?(m(),S(w,{key:1},[a(b,{modelValue:e.rhythm,"onUpdate:modelValue":i[0]||(i[0]=u=>e.rhythm=u),ref:"drumsRhythm",items:e.data,"item-title":"name","return-object":"",label:t.$t("drums.rhythm"),onInput:l.setRhythm},null,8,["modelValue","items","label","onInput"]),a(g,{modelValue:e.bpm,"onUpdate:modelValue":i[1]||(i[1]=u=>e.bpm=u),step:"20",color:"primary",min:e.rhythm.bpms[0],max:e.rhythm.bpms[e.rhythm.bpms.length-1],"thumb-label":"always",onChange:l.setBPM},null,8,["modelValue","min","max","onChange"]),s("nav",null,[a(h,{fab:"",small:"",onClick:l.subtractBpm,ref:"subtractBpmButton",title:t.$t("metronome.subtractStep",{n:20})},{default:r(()=>[a(n,null,{default:r(()=>[d("remove")]),_:1})]),_:1},8,["onClick","title"]),a(h,{color:e.playing?"primary":null,loading:e.loading,onClick:l.togglePlay,title:e.playing?t.$t("home.stop"):t.$t("home.play")},{default:r(()=>[a(n,null,{default:r(()=>[d(C(e.playing?"pause":"play_arrow"),1)]),_:1})]),_:1},8,["color","loading","onClick","title"]),a(h,{fab:"",small:"",onClick:l.addBpm,ref:"addBpmButton",title:t.$t("metronome.addStep",{n:20})},{default:r(()=>[a(n,null,{default:r(()=>[d("add")]),_:1})]),_:1},8,["onClick","title"])])],64)):y("",!0)])]),_:1})}const U=v(D,[["render",A],["__scopeId","data-v-015924e3"]]);export{U as default};
