<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";

import { useProductStore } from "@/stores/user/product";

const productstore = useProductStore();
</script>

<template>
  <UserLayout>
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">register now</p>
        </div>
      </div>
    </div>

    <!--Product card -->
    <Product :products="productstore.list"> </Product>
  </UserLayout>
</template>
