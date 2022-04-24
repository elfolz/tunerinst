"use strict";(globalThis["webpackChunkTunerinst"]=globalThis["webpackChunkTunerinst"]||[]).push([[362],{7611:(t,e,i)=>{i.d(e,{Z:()=>u});var s=i(3556),a=i(5827),r=i(3325),h=i(4981),n=i(5600),l=i(4589),o=i(1824);const u=(0,r.Z)(s.Z,h.Z).extend({name:"v-slider",directives:{ClickOutside:n.Z},mixins:[h.Z],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"===typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"===typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}),computed:{classes(){return{...s.Z.options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){const t=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(t)?0:t},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",i=this.vertical?"height":"width",s=this.$vuetify.rtl?"auto":"0",a=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:`${this.inputWidth}%`;return{transition:this.trackTransition,[t]:s,[e]:a,[i]:r}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",i="0px",s=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:i,[e]:s}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t}}},beforeMount(){this.internalValue=this.value},mounted(){this.app=document.querySelector("[data-app]")||(0,o.Kd)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=(0,l.MT)(this.numTicks+1),i=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",s=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const a=e.map((e=>{const a=[];this.tickLabels[e]&&a.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const r=e*(100/this.numTicks),h=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":h},style:{width:`${t}px`,height:`${t}px`,[i]:`calc(${r}% - ${t/2}px)`,[s]:`calc(50% - ${t/2}px)`}},a)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},a)},genThumbContainer(t,e,i,s,a,r,h="thumb"){const n=[this.genThumb()],l=this.genThumbLabelContent(t);return this.showThumbLabel&&n.push(this.genThumbLabel(l)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:h,key:h,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":s,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:a,blur:r,keydown:this.onKeyDown}}),n)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=(0,l.kb)(this.thumbSize),i=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(a.T0,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,{transition:this.trackTransition,[e]:`${i}%`}},onSliderMouseDown(t){var e;if(t.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null!=(e=t.target)&&e.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;const e=t.target.getBoundingClientRect(),i="touches"in t?t.touches[0]:t;this.startOffset=this.vertical?i.clientY-(e.top+e.height/2):i.clientX-(e.left+e.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout((()=>{this.thumbPressed=!0}),300);const i=!l.e$||{passive:!0,capture:!0},s=!!l.e$&&{passive:!0},a="touches"in t;this.onMouseMove(t),this.app.addEventListener(a?"touchmove":"mousemove",this.onMouseMove,s),(0,l.qh)(this.app,a?"touchend":"mouseup",this.onSliderMouseUp,i),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;const e=!!l.e$&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),(0,l.vZ)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){"mousemove"===t.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(t)},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);const e=this.$refs.thumb;e.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",i=this.vertical?"height":"width",s=this.vertical?"clientY":"clientX",{[e]:a,[i]:r}=this.$refs.track.getBoundingClientRect(),h="touches"in t?t.touches[0][s]:t[s];let n=Math.min(Math.max((h-a-this.startOffset)/r,0),1)||0;return this.vertical&&(n=1-n),this.$vuetify.rtl&&(n=1-n),parseFloat(this.min)+n*(this.maxValue-this.minValue)},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:i,pagedown:s,end:a,home:r,left:h,right:n,down:o,up:u}=l.Do;if(![i,s,a,r,h,n,o,u].includes(t.keyCode))return;t.preventDefault();const c=this.stepNumeric||1,d=(this.maxValue-this.minValue)/c;if([h,n,o,u].includes(t.keyCode)){const i=this.$vuetify.rtl?[h,u]:[n,u],s=i.includes(t.keyCode)?1:-1,a=t.shiftKey?3:t.ctrlKey?2:1;e+=s*c*a}else if(t.keyCode===r)e=this.minValue;else if(t.keyCode===a)e=this.maxValue;else{const i=t.keyCode===s?1:-1;e-=i*c*(d>100?d/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,s=this.minValue%this.stepNumeric,a=Math.round((t-s)/this.stepNumeric)*this.stepNumeric+s;return parseFloat(Math.min(a,this.maxValue).toFixed(i))}}})},5362:(t,e,i)=>{i.r(e),i.d(e,{default:()=>g});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("section",{class:{playing:t.playing}},[i("mark",{staticClass:"cymbal"},[i("span")]),i("mark",{staticClass:"bass"},[i("span")]),i("mark",{staticClass:"snare"},[i("span")])]),i("footer",[t.data.length||t.rhythm?t._e():i("v-progress-linear",{attrs:{indeterminate:""}}),t.data.length&&t.rhythm?[i("v-select",{ref:"drumsRhythm",attrs:{items:t.data,"item-text":"name","return-object":"",label:t.$i18n.t("drums.rhythm")},on:{input:t.setRhythm},model:{value:t.rhythm,callback:function(e){t.rhythm=e},expression:"rhythm"}}),i("v-slider",{attrs:{step:"20",min:t.rhythm.bpms[0],max:t.rhythm.bpms[t.rhythm.bpms.length-1],"thumb-label":"always"},on:{change:t.setBPM},model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}}),i("nav",[i("v-btn",{ref:"subtractBpmButton",attrs:{fab:"",small:"",title:t.$i18n.t("metronome.subtractStep",{n:20})},on:{click:t.subtractBpm}},[i("v-icon",[t._v("remove")])],1),i("v-btn",{attrs:{color:t.playing?"primary":null,loading:t.loading,title:t.playing?t.$i18n.t("home.stop"):t.$i18n.t("home.play")},on:{click:t.togglePlay}},[i("v-icon",[t._v(t._s(t.playing?"pause":"play_arrow"))])],1),i("v-btn",{ref:"addBpmButton",attrs:{fab:"",small:"",title:t.$i18n.t("metronome.addStep",{n:20})},on:{click:t.addBpm}},[i("v-icon",[t._v("add")])],1)],1)]:t._e()],2)])},a=[],r=i(2476);const h={name:"drums",computed:{device(){return(0,r.Z)()},inputDevices(){return this.$store.state.inputDevices},outputDevices(){return this.$store.state.outputDevices}},data(){return{data:[],loading:!1,playing:!1,bpm:parseInt(localStorage.getItem("drumsPBM")||"80"),rhythm:null,audioCtx:new AudioContext,audio:new Audio,destination:null,audioSrc:null}},mounted(){window.addEventListener("keydown",this.toggleByKeyboard),this.getData()},beforeDestroy(){this.audio.pause(),this.audioCtx.close(),window.removeEventListener("keydown",this.toggleByKeyboard)},methods:{getData(){this.axios.get("/json/drums.json").then((t=>{this.data=t.data,this.rhythm=this.data.find((t=>t.dir==localStorage.getItem("drumsRhythm"))),this.rhythm||(this.rhythm=this.data[0]),this.resetRhythm()}))},toggleByKeyboard(t){if(document.hidden)return!1;["ArrowLeft","MediaTrackPrevious","-"].includes(t.key)&&this.subtractBpm(),["ArrowRight","MediaTrackNext","+"].includes(t.key)&&this.addBpm(),[" ","MediaPlayPause"].includes(t.key)&&(this.togglePlay(),t.preventDefault())},createAudioBuffer(){this.destination=this.audioCtx.createMediaStreamDestination(),this.audio.srcObject=this.destination.stream,this.$store.state.defaultOutputId&&this.outputDevices.find((t=>t.deviceId==this.$store.state.defaultOutputId))&&this.audio.setSinkId(this.$store.state.defaultOutputId),this.audioSrc=this.audioCtx.createBufferSource(),this.audioSrc.connect(this.destination),this.audioSrc.loop=!0},setBPM(t){localStorage.setItem("drumsPBM",t),this.resetPlay()},setRhythm(t){localStorage.setItem("drumsRhythm",t.dir),this.resetRhythm(),this.resetPlay()},resetRhythm(){this.rhythm.bpms.includes(this.bpm)||(this.bpm=this.rhythm.bpms[0])},resetPlay(){if(this.$refs.drumsRhythm.blur(),this.playing&&this.audioSrc.stop(),!this.playing)return!1;this.playing=!1,this.togglePlay()},togglePlay(){this.playing?(this.audio.pause(),this.audioSrc.stop(),this.playing=!1):(this.createAudioBuffer(),this.loading=!0,this.axios.get(`/audio/drums/${this.rhythm.dir}/${this.bpm}.${"ios"==this.device.name?"aac":"opus"}`,{responseType:"arraybuffer"}).then((t=>{this.audioCtx.decodeAudioData(t.data,(t=>{this.audioSrc.buffer=t,this.audioSrc.start(),this.audio.play(),this.loading=!1,this.playing=!0}))})))},subtractBpm(){if(this.$refs.subtractBpmButton.$el.blur(),this.bpm<=this.rhythm.bpms[0])return!1;let t=this.rhythm.bpms.indexOf(this.bpm);this.bpm=this.rhythm.bpms[t-1],this.setBPM(this.bpm)},addBpm(){if(this.$refs.addBpmButton.$el.blur(),this.bpm>=this.rhythm.bpms[this.rhythm.bpms.length-1])return!1;let t=this.rhythm.bpms.indexOf(this.bpm);this.bpm=this.rhythm.bpms[t+1],this.setBPM(this.bpm)}}},n=h;var l=i(1001),o=i(3453),u=i.n(o),c=i(8704),d=i(4926),m=i(4768),p=i(5212),b=i(8079),v=i(7611),y=(0,l.Z)(n,s,a,!1,null,"f1013cf8",null);const g=y.exports;u()(y,{VBtn:c.Z,VIcon:d.Z,VMain:m.Z,VProgressLinear:p.Z,VSelect:b.Z,VSlider:v.Z})}}]);