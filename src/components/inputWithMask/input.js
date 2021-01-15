import React, { useRef, useEffect } from "react";
import ReactInputMask from "react-input-mask";
import { AlertTriangleOutline } from "@styled-icons/evaicons-outline/AlertTriangleOutline";
import styled from "styled-components";
import { useField } from "@unform/core";

const Icon = styled(AlertTriangleOutline)`
  width: 18px;
`;

const InputMask = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />

      {error && (
        <span>
          <Icon />
          &nbsp; &nbsp;{error}
        </span>
      )}
    </>
  );
};

export default InputMask;
