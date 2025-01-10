import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { d as diamondRingImage, g as goldNecklaceImage, s as silverBraceletImage } from "./silver-bracelet-DnlgWG6B.js";
const _sfc_main = {
  __name: "ProductList",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([
      { id: 1, name: "Diamond Ring", price: "$5000", image: diamondRingImage },
      { id: 2, name: "Gold Necklace", price: "$3000", image: goldNecklaceImage },
      { id: 3, name: "Silver Bracelet", price: "$1500", image: silverBraceletImage }
    ]);
    function discountedPrice(price) {
      const numericPrice = parseFloat(price.replace("$", ""));
      const discounted = numericPrice * 0.5;
      return `$${discounted.toFixed(2)}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "products",
        id: "products"
      }, _attrs))}><h2>Products</h2><div class="product-list"><!--[-->`);
      ssrRenderList(products.value, (product) => {
        _push(`<div class="product"><img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)}><h3>${ssrInterpolate(product.name)}</h3><p class="price"><span class="original-price">${ssrInterpolate(product.price)}</span> <span class="discounted-price">${ssrInterpolate(discountedPrice(product.price))}</span></p></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/website/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
