/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': 4 + 'px',
    '--height': 24 + 'px',
  },
  medium: {
    '--padding': 0 + 'px',
    '--height': 12 + 'px',
  },
  small: {
    '--padding': 0 + 'px',
    '--height': 8 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={styles}
      role='meter'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
    >
      <Bar
        width={value}
        aria-hidden='true'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill={COLORS.primary}
        ></rect>
      </Bar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 200px;
  height: var(--height);
  padding: var(--padding);
  border-radius: 8px;
`;

const Bar = styled.svg`
  width: ${props => props.width + `%`};
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
