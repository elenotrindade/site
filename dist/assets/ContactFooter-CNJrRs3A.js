import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "contact",
    id: "contact"
  }, _attrs))}><div class="social-icons"><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/website/ContactFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContactFooter as default
};
