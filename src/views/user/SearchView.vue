<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { onMounted, ref,computed, watch} from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/user/product";
import Product from "@/components/Product.vue";

const productstore = useProductStore();

const route = useRoute();
const searchText = ref("");
const filterProducts = computed (() =>{
    return productstore.filterProducts(searchText.value)
})

watch( () => route.query.q,(newSearchText) =>{
  searchText.value = newSearchText;
} ,{immediate: true})


/*
onMounted(() => {
  if (route.query.q) {
    searchText.value = route.query.q;
  }
});
*/

</script>

<template>
  <UserLayout>
    <div class="text-3xl m-4">Search: {{ searchText }}</div>
    <Product :products="filterProducts"> </Product>
  </UserLayout>
</template>
