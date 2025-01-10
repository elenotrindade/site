import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
const _sfc_main = {
  __name: "SidebarMenu",
  __ssrInlineRender: true,
  props: {
    currentView: String
  },
  emits: ["updateView"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}><nav><ul><li class="${ssrRenderClass({ active: __props.currentView === "products" })}">Products</li><li class="${ssrRenderClass({ active: __props.currentView === "employees" })}">Employees</li><li class="${ssrRenderClass({ active: __props.currentView === "orders" })}">Orders</li></ul></nav></aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/SidebarMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
