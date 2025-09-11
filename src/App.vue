<script setup lang="ts">
import { RouterView } from "vue-router";
import { Toaster } from "./components/ui/sonner";
import { useColorMode } from "@vueuse/core";

useColorMode({
  attribute: "class",
  selector: "html",
});
</script>

<template>
  <main class="p-4">
    <Toaster />
    <RouterView />
  </main>
</template>
