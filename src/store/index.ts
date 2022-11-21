import { ref, computed } from "vue";
import { KnowledgeCategory } from "../core/types";

/**
 * Bundle and expose variables/functionalities
 * to do with the managing of knowledge categories
 */
function initKnowledgeCategories() {
  const categories = ref<KnowledgeCategory[]>([]);

  function setKnowledgeCategories(list: KnowledgeCategory[]) {
    categories.value = list;
  }

  return {
    setKnowledgeCategories,
    categories,
  };
}

const store = {
  ...initKnowledgeCategories(),
};

export default store;
