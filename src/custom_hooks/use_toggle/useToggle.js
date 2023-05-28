import { useState } from "react";

export default function useToggle(defaultvalue) {
  const [value, setValue] = useState(defaultvalue);

  function toggleValue(value) {
    setValue((previousValue) =>
      typeof value === "boolean" ? value : !previousValue
    );
  }

  return [value, toggleValue];
}
