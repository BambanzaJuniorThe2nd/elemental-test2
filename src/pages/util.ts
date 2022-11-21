import store from "../store";
import { backendClient } from "../api";
import { KnowledgeCategory, ContactDataPostArgs } from "../core";

// Refetches and stores knowledge categories
// if not already set in store
export const refreshData = async () => {
  if (!store.categories.value.length) {
    const categories = await backendClient().getKnowledgeCategories();
    const sortedCategories = getSortedCategories(categories);
    store.setKnowledgeCategories(sortedCategories);
  }
};

// Calls the relevant backend endpoint for posting contact data
export const submitContactData = async (args: ContactDataPostArgs) => {
  await backendClient().postContactData(args);
  store.setMessage({
    type: "success",
    message: "Successfully submitted contact details",
  });
};

export const getSortedCategories = (
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

// Handles error messages by setting them
// in the store, which makes it easy to
// display in notifications.
export const handleError = (e: any) => {
  store.setMessage({ type: "error", message: e.message });
};

export const groupKnowledgeByCategory = () => {
  return groupBy(store.categories.value, "cat");
};

function groupBy<T>(collection: T[], key: keyof T) {
  const groupedResult = collection.reduce((previous, current) => {
    if (!previous[current[key]]) {
      previous[current[key]] = [] as T[];
    }

    previous[current[key]].push(current);
    return previous;
  }, {} as any); // tried to figure this out, help!!!!!
  return groupedResult;
}
