"use client";

import { useSyncExternalStore } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
let mediaQuery;

const getMediaQuery = () => {
  if (typeof window === "undefined") {
    return null;
  }

  mediaQuery ??= window.matchMedia(MOBILE_QUERY);
  return mediaQuery;
};

const subscribe = (onStoreChange) => {
  const query = getMediaQuery();

  if (!query) {
    return () => {};
  }

  const handleChange = () => onStoreChange();

  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }

  query.addListener(handleChange);
  return () => query.removeListener(handleChange);
};

const getSnapshot = () => getMediaQuery()?.matches ?? false;
const getServerSnapshot = () => false;

const useIsMobile = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useIsMobile;
