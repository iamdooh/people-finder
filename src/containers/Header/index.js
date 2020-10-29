import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Device } from 'components';
import styled from 'styled-components';

const Search = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  background-color: #2a2f37;
  color: #fff;

  @media ${Device.tablet} {
    padding: 0 20px;
  }

  @media ${Device.mobile} {
    padding: 0 10px;
  }
`;

const Text = styled.p`
  padding: 24px 0 10px;
  font-size: 0.6875rem;
  text-align: center;
  word-break: keep-all;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 768px;
  margin: 0 auto;
  padding: 4px 12px;
  background-color: #fff;
  border-radius: 4px;
  box-sizing: border-box;

  @media ${Device.tablet} {
    width: 100%;
  }
`;

const InputBox = styled.input`
  width: 100%;
  border: none;
  line-height: 40px;
  font-size: 1rem;
  margin: 0 8px;
  outline: none;

  @media ${Device.mobile} {
    line-height: 32px;
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: #7e7e7e;
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: #5bcb6c;
`;

const Header = () => {
  const { t } = useTranslation();
  const refTextInputBox = useRef(null);
  const history = useHistory();

  const onSearch = e => {
    e.preventDefault();

    const inputValue = refTextInputBox.current.value.trim();

    if (inputValue) {
      history.push('/search/' + encodeURIComponent(inputValue));
    }
  }

  const onClear = () => {
    refTextInputBox.current.value = '';
  }

  return (
    <Search>
      <Text>
        {t('contact_help')}
      </Text>
      <Form onSubmit={onSearch}>
        <FontAwesomeIconStyled icon="search" size="lg" />
        <InputBox
          ref={refTextInputBox}
          type="text" />
        <ClearButton type="button" onClick={onClear}>
          <FontAwesomeIcon icon="times" size="lg" />
        </ClearButton>
      </Form>
    </Search>
  );
}

export default Header;