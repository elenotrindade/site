<template>
    <div>
        <div class="header">
            <h2>Employee Manager</h2>
            <button class="add-button" @click="toggleEmployeeForm">{{ showEmployeeForm ? 'Close' : 'Add +' }}</button>
        </div>
        <transition name="fade">
            <div :class="['error-message', { hidden: !errorMessage }]" v-if="errorMessage">{{ errorMessage }}</div>
        </transition>
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
const errorMessage = ref('');

function addEmployee() {
    if (!newEmployee.value.name || !newEmployee.value.position) {
        errorMessage.value = 'Employee name and position cannot be empty.';
        setTimeout(() => {
            errorMessage.value = '';
        }, 3000);
        return;
    }
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
    errorMessage.value = '';
}

function cancelEdit() {
    resetEmployeeForm();
}

function resetEmployeeForm() {
    newEmployee.value = { name: '', position: '' };
    showEmployeeForm.value = false;
    editMode.value = false;
    errorMessage.value = '';
}

function toggleEmployeeForm() {
    showEmployeeForm.value = !showEmployeeForm.value;
    if (!showEmployeeForm.value) {
        resetEmployeeForm();
    }
}
</script>

<style scoped>
.add-button {
    padding: 5px 10px;
    background-color: transparent;
    color: white;
    border: 1px solid #4CAF50;
    cursor: pointer;
    border-radius: 5px;
}
.add-button:hover {
    background-color: #45a049;
}
.error-message {
    color: white;
    border: 1px solid red;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: opacity 1s ease-out, max-height 1s ease-out, padding 1s ease-out, margin-bottom 1s ease-out;
    max-height: 100px;
    overflow: hidden;
}
.error-message.hidden {
    opacity: 0;
    max-height: 0;
    padding: 0;
    margin-bottom: 0;
    border: none;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}
</style>
