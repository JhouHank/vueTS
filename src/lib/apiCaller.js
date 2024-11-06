import { ref } from 'vue';
export default function (fn) {
  const isLoading = ref(false);
  const results = ref(null);
  const makeAPICall = async function (...args) {
    isLoading.value = true;
    results.value = null;
    try {
      results.value = await fn(...args);
    } catch (error) {
      console.log('API error:', error);
    } finally {
      isLoading.value = false;
    }
  };
  return { isLoading, results, makeAPICall };
}
