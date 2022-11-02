import { useState } from "react";

export default function useInputForm(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(true);
  const onChange = (evt) => {
    setValue(evt.target.value);
    evt.target.value === "" ? setError(true) : setError(false);
  };
  const reset = () => {
    setValue("");
  };
  return [value, onChange, reset, error];
}
