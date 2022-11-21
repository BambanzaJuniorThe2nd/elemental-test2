<template>
  <div class="w-7/12 mt-2 mx-auto overflow-x-auto relative shadow-md-lg p-3">
    <h3
      class="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white"
    >
      Home Page
    </h3>
    <m-accordion>
      <m-accordion-item
        v-for="(value, key, index) in computedKnowledgeCategories"
      >
        <template #header>
          <h2>{{ key }}</h2>
        </template>

        <div class="item-container">
          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li v-for="item in value">
              <span class="text-blue-600 dark:text-blue-500 hover:underline">{{
                item.title
              }}</span>
            </li>
          </ul>
        </div>
      </m-accordion-item>
    </m-accordion>
  </div>
  <!-- <div class="w-11/12 mt-2 mx-auto overflow-x-auto relative shadow-md mb-6">
    <div id="accordion-collapse" data-accordion="collapse">
      <h2
        v-for="(value, key, index) in computedKnowledgeCategories"
        :id="
          'accordion-collapse-heading-' + (index != undefined ? index + 1 : '')
        "
      >
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          :data-accordion-target="
            '#accordion-collapse-body-' + (index != undefined ? index + 1 : '')
          "
          aria-expanded="false"
          :aria-controls="
            'accordion-collapse-body-' + (index != undefined ? index + 1 : '')
          "
        >
          <span>{{ key }}</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        v-for="(value, key, index) in computedKnowledgeCategories"
        :id="'accordion-collapse-body-' + (index != undefined ? index + 1 : '')"
        class="hidden"
        :aria-labelledby="
          'accordion-collapse-heading-' + (index != undefined ? index + 1 : '')
        "
      >
        <div
          class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
        >
          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <span class="text-blue-600 dark:text-blue-500 hover:underline"
                >Tailwind UI</span
              >
            </li>
            <li>
              <span class="text-blue-600 dark:text-blue-500 hover:underline"
                >Tailwind UI</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script lang="ts" setup>
import { onMounted, computed } from "vue";
import store from "../../store";
import { refreshData, groupKnowledgeByCategory } from "../util";

const computedKnowledgeCategories = computed(() => {
  console.log("Calling computedKnowledgeCategories...");
  if (store.categories.value.length) {
    const result = groupKnowledgeByCategory();
    console.log("result: ", result);
    return result;
  }
  return store.categories.value;
});
onMounted(async () => {
  try {
    refreshData();
  } catch (e) {
    console.log("Error: ", e);
  }
});

const appendIndexOnId = (index: number, id: string) => {
  return `${id}-${index}`;
};
</script>
<style>
.item-container {
  padding: 32px 16px;
}
</style>
