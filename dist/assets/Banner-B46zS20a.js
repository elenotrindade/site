import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-f8bde858><h1 data-v-f8bde858>Elegant and Timeless Jewelry</h1><section class="hero" id="home" data-v-f8bde858><div class="hero-content" data-v-f8bde858><p data-v-f8bde858>Discover our exclusive collection of fine jewelry.</p><button class="shop-now" data-v-f8bde858>Shop Now</button></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/website/Banner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f8bde858"]]);
export {
  Banner as default
};
