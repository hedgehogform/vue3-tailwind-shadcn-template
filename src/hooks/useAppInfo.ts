export const useAppInfo = () => {
  const appTitle = import.meta.env.APP_TITLE;

  return {
    appTitle,
  };
};
