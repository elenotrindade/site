<template>
    <div>
        <div class="header">
            <h2>Employee List</h2>
            <button class="add-button" @click="toggleEmployeeForm">{{ showEmployeeForm ? 'Close' : 'Add +' }}</button>
        </div>
        <table class="striped-table" v-if="!showEmployeeForm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.name">
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.position }}</td>
                    <td><button class="action-button" @click="editEmployee(employee)">Edit</button></td>
                </tr>
            </tbody>
        </table>
        <EmployeeForm v-if="showEmployeeForm" :employee="newEmployee" :editMode="editMode" @save="addEmployee" @cancel="cancelEdit" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EmployeeForm from '../forms/EmployeeForm.vue';

const newEmployee = ref({ name: '', position: '' });
const employees = ref([
    { name: 'Employee 1', position: 'Manager' },
    { name: 'Employee 2', position: 'Developer' },
    { name: 'Employee 3', position: 'Designer' },
]);
const showEmployeeForm = ref(false);
const editMode = ref(false);

function addEmployee() {
    if (editMode.value) {
        const index = employees.value.findIndex(e => e.name === newEmployee.value.name);
        employees.value[index] = { ...newEmployee.value };
    } else {
        employees.value.push({ ...newEmployee.value });
    }
    resetEmployeeForm();
}

function editEmployee(employee) {
    newEmployee.value = { ...employee };
    showEmployeeForm.value = true;
    editMode.value = true;
}

function cancelEdit() {
    resetEmployeeForm();
}

function resetEmployeeForm() {
    newEmployee.value = { name: '', position: '' };
    showEmployeeForm.value = false;
    editMode.value = false;
}

function toggleEmployeeForm() {
    showEmployeeForm.value = !showEmployeeForm.value;
    if (!showEmployeeForm.value) {
        resetEmployeeForm();
    }
}
</script>

<style scoped>
/* Remover estilos duplicados */
</style>
