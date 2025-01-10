import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import Header from "./Header-DbF0Qh2K.js";
import Banner from "./Banner-B46zS20a.js";
import _sfc_main$1 from "./ProductList-CRZoXxjl.js";
import _sfc_main$2 from "./Newsletter-Bh0omwBD.js";
import Reviews from "./Reviews-D5X_jhNA.js";
import ContactFooter from "./ContactFooter-CNJrRs3A.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./silver-bracelet-DnlgWG6B.js";
const _sfc_main = {
  __name: "Website",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "css-loaded",
        class: "landing-page"
      }, _attrs))} data-v-a4172a5c><div class="background" data-v-a4172a5c>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(`</div><div class="bg-default" data-v-a4172a5c>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="bg-default" data-v-a4172a5c>`);
      _push(ssrRenderComponent(Reviews, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(ContactFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/website/Website.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Website = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4172a5c"]]);
export {
  Website as default
};
