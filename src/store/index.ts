import { ref, computed } from "vue";
import { KnowledgeCategory, AppMessage } from "../core/types";

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

/**
 * Bundle and expose variables/functionalities
 * to do with app-wide message management
 */
function initAppMessage() {
  const message = ref<AppMessage>({ type: "", message: "" });

  function setMessage(newMessage: AppMessage) {
    message.value = newMessage;
  }

  return {
    message,
    setMessage,
  };
}

const store = {
  ...initKnowledgeCategories(),
  ...initAppMessage(),
};

export default store;
