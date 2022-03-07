import React from 'react';
import { css } from '@emotion/react';
import CircleLoader from 'react-spinners/CircleLoader';

const override = css`
  height: 100vh;
  border-color: '#20b2aa';
  margin-top: 50vh;
  @media screen and (max-width: 800px) {
    margin-top: 50vh;
  }
`;
const Spinner: React.FC = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <CircleLoader css={override} size={100} color="#20b2aa" />
  </div>
);

export default Spinner;
