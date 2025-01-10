import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "EmployeeForm",
  __ssrInlineRender: true,
  props: {
    employee: Object,
    editMode: Boolean
  },
  emits: ["save", "cancel"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4d2b4593><form data-v-4d2b4593><label for="employeeName" data-v-4d2b4593>Employee Name:</label><input type="text" id="employeeName"${ssrRenderAttr("value", __props.employee.name)} data-v-4d2b4593><label for="employeePosition" data-v-4d2b4593>Position:</label><input type="text" id="employeePosition"${ssrRenderAttr("value", __props.employee.position)} data-v-4d2b4593><div class="form-buttons" data-v-4d2b4593><button type="submit" class="form-button" data-v-4d2b4593>${ssrInterpolate(__props.editMode ? "Update" : "Save")}</button><button type="button" class="form-button" data-v-4d2b4593>Cancel</button></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/forms/EmployeeForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmployeeForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4d2b4593"]]);
export {
  EmployeeForm as default
};
