import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "newsletter" }, _attrs))}><h2>Subscribe to our Newsletter</h2><form><input type="email"${ssrRenderAttr("value", email.value)} placeholder="Enter your email" required><button type="submit">Subscribe</button></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/website/Newsletter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
