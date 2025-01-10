import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import ProductForm from "./ProductForm-DEdI99my.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ProductList",
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
    function addProduct() {
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-63e87dcd><div class="header" data-v-63e87dcd><h2 data-v-63e87dcd>Product List</h2><button class="add-button" data-v-63e87dcd>${ssrInterpolate(showProductForm.value ? "Close" : "Add +")}</button></div>`);
      if (!showProductForm.value) {
        _push(`<table class="striped-table" data-v-63e87dcd><thead data-v-63e87dcd><tr data-v-63e87dcd><th data-v-63e87dcd>Name</th><th data-v-63e87dcd>Price</th><th data-v-63e87dcd>Actions</th></tr></thead><tbody data-v-63e87dcd><!--[-->`);
        ssrRenderList(products.value, (product) => {
          _push(`<tr data-v-63e87dcd><td data-v-63e87dcd>${ssrInterpolate(product.name)}</td><td data-v-63e87dcd>$${ssrInterpolate(product.price)}</td><td data-v-63e87dcd><button class="action-button" data-v-63e87dcd>Editer</button></td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/lists/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63e87dcd"]]);
export {
  ProductList as default
};
