import store from "../store";
import { backendClient } from "../api";
import { KnowledgeCategory } from "../core";

export const refreshData = async () => {
  if (!store.categories.value.length) {
    const categories = await backendClient().getKnowledgeCategories();
    console.log("categories in refreshData: ", categories);
    store.setKnowledgeCategories(categories);
  }
};

export const getFormattedCategories = (
  categories: KnowledgeCategory[],
): KnowledgeCategory[] => {
  // sort by name
  const sortedCategories = categories.sort((a, b) => {
    const catA = a.cat.toUpperCase(); // ignore upper and lowercase
    const catB = b.cat.toUpperCase(); // ignore upper and lowercase
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (catA < catB) {
      return -1;
    }
    if (catB > catB) {
      return 1;
    }

    if (titleA < titleB) {
      return -1;
    }

    if (titleA > titleB) {
      return 1;
    }

    // both cat and title must be equal
    return 0;
  });

  console.log("sorted categories: ", sortedCategories);
  return sortedCategories;
};
