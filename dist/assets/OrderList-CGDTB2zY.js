import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "OrderList",
  __ssrInlineRender: true,
  setup(__props) {
    const orders = ref([
      { id: 1, status: "Pending", transactionLog: ["Order placed", "Payment received", "Processing"], showLog: false },
      { id: 2, status: "Shipped", transactionLog: ["Order placed", "Payment received", "Shipped"], showLog: false },
      { id: 3, status: "Delivered", transactionLog: ["Order placed", "Payment received", "Shipped", "Delivered"], showLog: false },
      { id: 4, status: "Processing", transactionLog: ["Order placed", "Payment received", "Processing"], showLog: false },
      { id: 5, status: "Cancelled", transactionLog: ["Order placed", "Payment received", "Cancelled"], showLog: false },
      { id: 6, status: "Completed", transactionLog: ["Order placed", "Payment received", "Shipped", "Delivered", "Completed"], showLog: false },
      { id: 7, status: "Returned", transactionLog: ["Order placed", "Payment received", "Shipped", "Delivered", "Returned"], showLog: false }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-198b028b><div class="header" data-v-198b028b><h2 data-v-198b028b>Order Tracking</h2></div><table class="striped-table" data-v-198b028b><thead data-v-198b028b><tr data-v-198b028b><th data-v-198b028b>Order ID</th><th data-v-198b028b>Status</th><th data-v-198b028b>Transaction Log</th></tr></thead><tbody data-v-198b028b><!--[-->`);
      ssrRenderList(orders.value, (order) => {
        _push(`<tr data-v-198b028b><td data-v-198b028b>${ssrInterpolate(order.id)}</td><td data-v-198b028b>${ssrInterpolate(order.status)}</td><td data-v-198b028b><button class="action-button" data-v-198b028b>${ssrInterpolate(order.showLog ? "- Details" : "+ Details")}</button>`);
        if (order.showLog) {
          _push(`<ul class="transaction-log" data-v-198b028b><!--[-->`);
          ssrRenderList(order.transactionLog, (log) => {
            _push(`<li data-v-198b028b>${ssrInterpolate(log)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/lists/OrderList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-198b028b"]]);
export {
  OrderList as default
};
