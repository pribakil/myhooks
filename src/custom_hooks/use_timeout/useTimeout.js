import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const setTheTimeout = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clearTheTimeout = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    setTheTimeout();
    return clearTheTimeout;
  }, [delay, setTheTimeout, clearTheTimeout]);

  const resetTheTimeout = useCallback(() => {
    clearTheTimeout();
    setTheTimeout();
  }, [clearTheTimeout, setTheTimeout]);

  return { resetTheTimeout, clearTheTimeout };
}
