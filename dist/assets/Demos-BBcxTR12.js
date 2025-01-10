import { ssrRenderComponent } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import ERP from "./ERP-y2baRTYa.js";
import Website from "./Website-DQR-tlBY.js";
import Statistics from "./Statistics-Cuu7S8wC.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./SidebarMenu-C2sNJmW4.js";
import "./ProductManager-Br7coRcY.js";
import "./ProductForm-DEdI99my.js";
import "./EmployeeManager-ClJDNBuD.js";
import "./EmployeeForm-X6IlNVGy.js";
import "./OrderList-CGDTB2zY.js";
import "./Header-DbF0Qh2K.js";
import "./Banner-B46zS20a.js";
import "./ProductList-CRZoXxjl.js";
import "./silver-bracelet-DnlgWG6B.js";
import "./Newsletter-Bh0omwBD.js";
import "./Reviews-D5X_jhNA.js";
import "./ContactFooter-CNJrRs3A.js";
import "chart.js/auto";
const _sfc_main = {
  __name: "Demos",
  __ssrInlineRender: true,
  setup(__props) {
    const currentDemo = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="demo-selector" data-v-99d896b3><button class="demo-button" data-demo="erp" data-v-99d896b3>ERP</button><button class="demo-button" data-demo="website" data-v-99d896b3>Website</button><button class="demo-button" data-demo="statistics" data-v-99d896b3>Statistics</button></div>`);
      if (currentDemo.value) {
        _push(`<div data-v-99d896b3>`);
        if (currentDemo.value === "erp") {
          _push(ssrRenderComponent(ERP, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (currentDemo.value === "website") {
          _push(ssrRenderComponent(Website, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (currentDemo.value === "statistics") {
          _push(ssrRenderComponent(Statistics, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Demos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Demos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-99d896b3"]]);
export {
  Demos as default
};
