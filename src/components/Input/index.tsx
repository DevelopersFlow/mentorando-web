import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
  useContext,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FaInfoCircle } from 'react-icons/fa';
import { useField } from '@unform/core';
import { ThemeContext } from 'styled-components';
import Ink from 'react-ink';

import { Container, IconContainer, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconClick?: () => void;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  iconClick,
  disabled,
  ...rest
}) => {
  const { colors } = useContext(ThemeContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
      disabled={disabled}
    >
      {error && (
        <Error title={error}>
          <FaInfoCircle color={colors.red} size={20} />
        </Error>
      )}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {Icon && (
        <IconContainer onClick={iconClick}>
          <Icon size={20} />
          <Ink />
        </IconContainer>
      )}
    </Container>
  );
};

export default Input;
