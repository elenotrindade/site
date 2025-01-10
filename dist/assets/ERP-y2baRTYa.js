import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./SidebarMenu-C2sNJmW4.js";
import ProductManager from "./ProductManager-Br7coRcY.js";
import EmployeeManager from "./EmployeeManager-ClJDNBuD.js";
import OrderList from "./OrderList-CGDTB2zY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ProductForm-DEdI99my.js";
import "./EmployeeForm-X6IlNVGy.js";
const _sfc_main = {
  __name: "ERP",
  __ssrInlineRender: true,
  setup(__props) {
    const currentView = ref("products");
    function updateView(view) {
      currentView.value = view;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "erp-system" }, _attrs))} data-v-bef0dcd6>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        currentView: currentView.value,
        onUpdateView: updateView
      }, null, _parent));
      _push(`<main class="main-content" data-v-bef0dcd6>`);
      if (currentView.value === "products") {
        _push(ssrRenderComponent(ProductManager, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentView.value === "employees") {
        _push(ssrRenderComponent(EmployeeManager, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentView.value === "orders") {
        _push(ssrRenderComponent(OrderList, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/ERP.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ERP = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bef0dcd6"]]);
export {
  ERP as default
};
