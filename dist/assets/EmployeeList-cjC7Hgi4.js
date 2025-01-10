import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import EmployeeForm from "./EmployeeForm-X6IlNVGy.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "EmployeeList",
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
    function addEmployee() {
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7dfe1d7d><div class="header" data-v-7dfe1d7d><h2 data-v-7dfe1d7d>Employee List</h2><button class="add-button" data-v-7dfe1d7d>${ssrInterpolate(showEmployeeForm.value ? "Close" : "Add +")}</button></div>`);
      if (!showEmployeeForm.value) {
        _push(`<table class="striped-table" data-v-7dfe1d7d><thead data-v-7dfe1d7d><tr data-v-7dfe1d7d><th data-v-7dfe1d7d>Name</th><th data-v-7dfe1d7d>Position</th><th data-v-7dfe1d7d>Actions</th></tr></thead><tbody data-v-7dfe1d7d><!--[-->`);
        ssrRenderList(employees.value, (employee) => {
          _push(`<tr data-v-7dfe1d7d><td data-v-7dfe1d7d>${ssrInterpolate(employee.name)}</td><td data-v-7dfe1d7d>${ssrInterpolate(employee.position)}</td><td data-v-7dfe1d7d><button class="action-button" data-v-7dfe1d7d>Edit</button></td></tr>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/demos/erp/lists/EmployeeList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EmployeeList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7dfe1d7d"]]);
export {
  EmployeeList as default
};
