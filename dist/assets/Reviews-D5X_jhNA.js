import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { d as diamondRingImage, g as goldNecklaceImage, s as silverBraceletImage } from "./silver-bracelet-DnlgWG6B.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Reviews",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([
      { id: 1, name: "Diamond Ring", price: "$5000", image: diamondRingImage },
      { id: 2, name: "Gold Necklace", price: "$3000", image: goldNecklaceImage },
      { id: 3, name: "Silver Bracelet", price: "$1500", image: silverBraceletImage }
    ]);
    const userNames = ref(["Alice", "Sophia", "Emma"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-default" }, _attrs))} data-v-04140f95><section class="reviews" id="reviews" data-v-04140f95><h2 data-v-04140f95>Reviews</h2><div class="reviews-list" data-v-04140f95><!--[-->`);
      ssrRenderList(products.value, (product, index) => {
        _push(`<div class="review" data-v-04140f95><div class="user-icon" data-v-04140f95><i class="fas fa-user-circle" data-v-04140f95></i></div><div class="review-content" data-v-04140f95><p class="user-name" data-v-04140f95>${ssrInterpolate(userNames.value[index])}</p><p class="stars" data-v-04140f95>★★★★★</p><p data-v-04140f95>Excellent product! Highly recommend.</p><h3 style="${ssrRenderStyle({ "margin-top": "1rem" })}" data-v-04140f95>${ssrInterpolate(product.name)}</h3></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/website/Reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Reviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04140f95"]]);
export {
  Reviews as default
};
