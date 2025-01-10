import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import EmployeeForm from "./EmployeeForm-X6IlNVGy.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "EmployeeManager",
  __ssrInlineRender: true,
  setup(__props) {
    const newEmployee = ref({ name: "", position: "" });
    const employees = ref([
      { name: "Employee 1", position: "Manager" },
      { name: "Employee 2", position: "Developer" },
      { name: "Employee 3", position: "Designer" }
    ]);
    const showEmployeeForm = ref(false);
    const editMode = ref(false);
    const errorMessage = ref("");
    function addEmployee() {
      if (!newEmployee.value.name || !newEmployee.value.position) {
        errorMessage.value = "Employee name and position cannot be empty.";
        setTimeout(() => {
          errorMessage.value = "";
        }, 3e3);
        return;
      }
      if (editMode.value) {
        const index = employees.value.findIndex((e) => e.name === newEmployee.value.name);
        employees.value[index] = { ...newEmployee.value };
      } else {
        employees.value.push({ ...newEmployee.value });
      }
      resetEmployeeForm();
    }
    function cancelEdit() {
      resetEmployeeForm();
    }
    function resetEmployeeForm() {
      newEmployee.value = { name: "", position: "" };
      showEmployeeForm.value = false;
      editMode.value = false;
      errorMessage.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cc436076><div class="header" data-v-cc436076><h2 data-v-cc436076>Employee Manager</h2><button class="add-button" data-v-cc436076>${ssrInterpolate(showEmployeeForm.value ? "Close" : "Add +")}</button></div>`);
      if (errorMessage.value) {
        _push(`<div class="${ssrRenderClass(["error-message", { hidden: !errorMessage.value }])}" data-v-cc436076>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!showEmployeeForm.value) {
        _push(`<table class="striped-table" data-v-cc436076><thead data-v-cc436076><tr data-v-cc436076><th data-v-cc436076>Name</th><th data-v-cc436076>Position</th><th data-v-cc436076>Actions</th></tr></thead><tbody data-v-cc436076><!--[-->`);
        ssrRenderList(employees.value, (employee) => {
          _push(`<tr data-v-cc436076><td data-v-cc436076>${ssrInterpolate(employee.name)}</td><td data-v-cc436076>${ssrInterpolate(employee.position)}</td><td data-v-cc436076><button class="action-button" data-v-cc436076>Edit</button></td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      } else {
        _push(`<!---->`);
      }
      if (showEmployeeForm.value) {
        _push(ssrRenderComponent(EmployeeForm, {
          employee: newEmployee.value,
          editMode: editMode.value,
          onSave: addEmployee,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/managers/EmployeeManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmployeeManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc436076"]]);
export {
  EmployeeManager as default
};
