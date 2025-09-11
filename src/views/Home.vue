<script setup lang="ts">
import { Button } from "@ui/button";
import { useAppInfo } from "@/hooks/useAppInfo";
import { toast } from "vue-sonner";
import IconAccessibility from "~icons/carbon/accessibility";

const { appTitle } = useAppInfo();

const doToast = () => {
  toast("Title", {
    description: "some data",
  });
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-start bg-background text-foreground p-6"
  >
    <div
      class="w-full max-w-3xl bg-card text-card-foreground rounded-xl shadow-md p-8 space-y-6"
    >
      <h1 class="text-4xl font-extrabold text-primary">{{ appTitle }}</h1>
      <p class="text-lg">You did it! Welcome to your app.</p>
      <p class="text-base">
        Visit
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-emerald-500 font-semibold hover:text-accent-foreground transition-colors"
        >
          vuejs.org
        </a>
        to read the documentation.
      </p>

      <div class="space-y-2 max-h-64 overflow-y-auto">
        <p
          v-for="i in 100"
          :key="i"
          class="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Some text {{ i }}
        </p>
      </div>
      <Button @click="doToast">Toast</Button>
      <div class="flex gap-x-2">Icon: <IconAccessibility /></div>
    </div>
  </div>
</template>
