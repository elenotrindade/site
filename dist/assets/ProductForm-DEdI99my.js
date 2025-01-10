import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ProductForm",
  __ssrInlineRender: true,
  props: {
    product: Object,
    editMode: Boolean
  },
  emits: ["save", "cancel"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2922885b><form data-v-2922885b><label for="productName" data-v-2922885b>Product Name:</label><input type="text" id="productName"${ssrRenderAttr("value", __props.product.name)} data-v-2922885b><label for="productPrice" data-v-2922885b>Price:</label><input type="number" id="productPrice"${ssrRenderAttr("value", __props.product.price)} data-v-2922885b><div class="form-buttons" data-v-2922885b><button type="submit" class="form-button" data-v-2922885b>${ssrInterpolate(__props.editMode ? "Update" : "Save")}</button><button type="button" class="form-button" data-v-2922885b>Cancel</button></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/forms/ProductForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2922885b"]]);
export {
  ProductForm as default
};
