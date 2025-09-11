import pkgJson from "./package.json";

const config = {
  APP_TITLE: pkgJson.displayName,
};

// Don't forget to add to `env.d.ts` also!

export default Object.fromEntries(
  Object.entries(config).map(([key, value]) => [
    `import.meta.env.${key}`,
    JSON.stringify(value),
  ])
);
