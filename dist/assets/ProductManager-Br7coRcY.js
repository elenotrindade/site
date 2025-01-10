import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import ProductForm from "./ProductForm-DEdI99my.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ProductManager",
  __ssrInlineRender: true,
  setup(__props) {
    const newProduct = ref({ name: "", price: 0 });
    const products = ref([
      { name: "Product 1", price: 100 },
      { name: "Product 2", price: 200 },
      { name: "Product 3", price: 300 }
    ]);
    const showProductForm = ref(false);
    const editMode = ref(false);
    const errorMessage = ref("");
    function addProduct() {
      if (!newProduct.value.name || newProduct.value.price <= 0) {
        errorMessage.value = "Product name cannot be empty and price must be greater than 0.";
        setTimeout(() => {
          errorMessage.value = "";
        }, 3e3);
        return;
      }
      if (editMode.value) {
        const index = products.value.findIndex((p) => p.name === newProduct.value.name);
        products.value[index] = { ...newProduct.value };
      } else {
        products.value.push({ ...newProduct.value });
      }
      resetProductForm();
    }
    function cancelEdit() {
      resetProductForm();
    }
    function resetProductForm() {
      newProduct.value = { name: "", price: 0 };
      showProductForm.value = false;
      editMode.value = false;
      errorMessage.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-52e4c76f><div class="header" data-v-52e4c76f><h2 data-v-52e4c76f>Product Manager</h2><button class="add-button" data-v-52e4c76f>${ssrInterpolate(showProductForm.value ? "Close" : "Add +")}</button></div>`);
      if (errorMessage.value) {
        _push(`<div class="${ssrRenderClass(["error-message", { hidden: !errorMessage.value }])}" data-v-52e4c76f>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!showProductForm.value) {
        _push(`<table class="striped-table" data-v-52e4c76f><thead data-v-52e4c76f><tr data-v-52e4c76f><th data-v-52e4c76f>Name</th><th data-v-52e4c76f>Price</th><th data-v-52e4c76f>Actions</th></tr></thead><tbody data-v-52e4c76f><!--[-->`);
        ssrRenderList(products.value, (product) => {
          _push(`<tr data-v-52e4c76f><td data-v-52e4c76f>${ssrInterpolate(product.name)}</td><td data-v-52e4c76f>$${ssrInterpolate(product.price)}</td><td data-v-52e4c76f><button class="action-button" data-v-52e4c76f>Edit</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<!---->`);
      }
      if (showProductForm.value) {
        _push(ssrRenderComponent(ProductForm, {
          product: newProduct.value,
          editMode: editMode.value,
          onSave: addProduct,
          onCancel: cancelEdit
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/managers/ProductManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52e4c76f"]]);
export {
  ProductManager as default
};
