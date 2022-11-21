<template>
  <div class="w-7/12 mt-2 mx-auto overflow-x-auto relative shadow-md-lg p-3">
    <div class="w-7/12 mx-auto py-6 px-6 lg:px-8">
      <h3
        class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white"
      >
        Contact Page
      </h3>
      <form @submit.prevent="submit" class="mt-8 space-y-6" action="#">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your name (Only letters allowed)</label
          >
          <input
            type="text"
            name="name"
            id="name"
            v-model="contactData.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name"
            pattern="[a-zA-Z]+"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your email (i.e., joedoe@gmail.com)</label
          >
          <input
            type="email"
            name="email"
            id="email"
            v-model="contactData.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your phone (XXXXXXXXX)</label
          >
          <input
            type="tel"
            name="phone"
            id="phone"
            v-model="contactData.phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="phone (XXXXXXXXX)"
            pattern="[1-9]{1}[0-9]{8}"
            title="Invalid phone number"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { handleError, submitContactData } from "../util";
const contactData = reactive({ name: "", email: "", phone: "" });
const submit = async () => {
  console.log("Submitting contact data...");
  console.log("contactData.name: ", contactData.name);
  console.log("contactData.email: ", contactData.email);
  console.log("contactData.phone: ", contactData.phone);

  try {
    await submitContactData({
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone,
    });

    initContactData();
  } catch (e) {
    handleError(e);
  }
};

const initContactData = () => {
  contactData.name = "";
  contactData.email = "";
  contactData.phone = "";
};
</script>
