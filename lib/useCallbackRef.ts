"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Returns a stable function identity that always calls the latest `callback`.
 * Lets us depend on it in effects without re-running on every render.
 */
export function useCallbackRef<Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  });

  return useCallback((...args: Args) => ref.current(...args), []);
}
