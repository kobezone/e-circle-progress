import ECircleProgress from './e-circle-progress.vue';
// 导出模块
export default ECircleProgress;
//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ECircleProgress', ECircleProgress);
}
