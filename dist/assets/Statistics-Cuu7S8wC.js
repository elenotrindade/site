import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import Chart from "chart.js/auto";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Statistics",
  __ssrInlineRender: true,
  setup(__props) {
    const sales = ref("$50,000");
    const expenses = ref("$30,000");
    const profit = ref("$20,000");
    onMounted(() => {
      const salesCtx = document.getElementById("salesChart").getContext("2d");
      new Chart(salesCtx, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Sales",
            data: [12e3, 19e3, 3e3, 5e3, 2e3, 3e4, 45e3],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      const expensesCtx = document.getElementById("expensesChart").getContext("2d");
      new Chart(expensesCtx, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Expenses",
            data: [8e3, 15e3, 2e3, 4e3, 1e3, 2e4, 25e3],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      const profitCtx = document.getElementById("profitChart").getContext("2d");
      new Chart(profitCtx, {
        type: "pie",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Profit",
            data: [4e3, 4e3, 1e3, 1e3, 1e3, 1e4, 2e4],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)"
            ],
            fill: true
          }]
        },
        options: {
          responsive: true
        }
      });
      const customerGrowthCtx = document.getElementById("customerGrowthChart").getContext("2d");
      new Chart(customerGrowthCtx, {
        type: "radar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Customer Growth",
            data: [100, 200, 300, 400, 500, 600, 700],
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            fill: true
          }]
        },
        options: {
          responsive: true
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "stats-dashboard" }, _attrs))} data-v-3fc1cb36><h2 data-v-3fc1cb36>Statistics Dashboard</h2><div class="stats" data-v-3fc1cb36><div class="stat" data-v-3fc1cb36><h3 data-v-3fc1cb36>Sales</h3><p data-v-3fc1cb36>${ssrInterpolate(sales.value)}</p></div><div class="stat" data-v-3fc1cb36><h3 data-v-3fc1cb36>Expenses</h3><p data-v-3fc1cb36>${ssrInterpolate(expenses.value)}</p></div><div class="stat" data-v-3fc1cb36><h3 data-v-3fc1cb36>Profit</h3><p data-v-3fc1cb36>${ssrInterpolate(profit.value)}</p></div></div><div class="charts" data-v-3fc1cb36><div class="chart" data-v-3fc1cb36><h3 data-v-3fc1cb36>Monthly Sales</h3><canvas id="salesChart" data-v-3fc1cb36></canvas></div><div class="chart" data-v-3fc1cb36><h3 data-v-3fc1cb36>Monthly Expenses</h3><canvas id="expensesChart" data-v-3fc1cb36></canvas></div><div class="chart" data-v-3fc1cb36><h3 data-v-3fc1cb36>Monthly Profit</h3><canvas id="profitChart" data-v-3fc1cb36></canvas></div><div class="chart" data-v-3fc1cb36><h3 data-v-3fc1cb36>Customer Growth</h3><canvas id="customerGrowthChart" data-v-3fc1cb36></canvas></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/Statistics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Statistics = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fc1cb36"]]);
export {
  Statistics as default
};
