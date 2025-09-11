import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import Home from "@/views/Home.vue";

describe("App", () => {
  it("renders properly", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/", component: Home }],
    });

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    expect(wrapper.text()).toContain("Vue 3 Template");
  });
});
