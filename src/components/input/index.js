import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { AlertTriangleOutline } from "@styled-icons/evaicons-outline/AlertTriangleOutline";
import styled from "styled-components";

const Icon = styled(AlertTriangleOutline)`
  width: 18px;
`;

const Span = styled.span``;

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} {...rest} />

      {error && (
        <span>
          <Icon />
          &nbsp; &nbsp;
          {error}
        </span>
      )}
    </>
  );
}
