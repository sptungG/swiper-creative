/**
 * UI Initiative Panorama Slider
 *
 * Infinite 3D panorama slider
 *
 * https://uiinitiative.com
 *
 * Copyright 2022 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 */

!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(a="undefined"!=typeof globalThis?globalThis:a||self).EffectPanorama=e()}(this,(function(){"use strict";return function({swiper:a,extendParams:e,on:s}){e({panoramaEffect:{depth:200,rotate:30}}),s("beforeInit",(()=>{if("panorama"!==a.params.effect)return;a.classNames.push(`${a.params.containerModifierClass}panorama`),a.classNames.push(`${a.params.containerModifierClass}3d`);const e={watchSlidesProgress:!0};Object.assign(a.params,e),Object.assign(a.originalParams,e)})),s("progress",(()=>{if("panorama"!==a.params.effect)return;const e=a.slidesSizesGrid,{depth:s=200,rotate:t=30}=a.params.panoramaEffect,r=t*Math.PI/180/2,n=1/(180/t);for(let o=0;o<a.slides.length;o+=1){const i=a.slides[o],f=i.progress,p=e[o],d=f+(a.params.centeredSlides?0:.5*(a.params.slidesPerView-1)),l=1-Math.cos(d*n*Math.PI),c=d*(p/3)*l+"px",m=d*t,h=.5*p/Math.sin(r)*l-s+"px";i.style.transform="horizontal"===a.params.direction?`translateX(${c}) translateZ(${h}) rotateY(${m}deg)`:`translateY(${c}) translateZ(${h}) rotateX(${-m}deg)`}})),s("setTransition",((e,s)=>{"panorama"===a.params.effect&&a.slides.forEach((a=>{a.style.transition=`${s}ms`}))}))}}));
//# sourceMappingURL=effect-panorama.min.js.map