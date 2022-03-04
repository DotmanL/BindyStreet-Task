import React from 'react';
import { css } from '@emotion/react';
import PuffLoader from 'react-spinners/PuffLoader';

const override = css`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50vh;
  height: 100vh;
  border-color: #27ae60;
  @media screen and (max-width: 800px) {
    margin-top: 40vh;
  }
`;
const Spinner: React.FC = () => (
  <div>
    <PuffLoader css={override} size={100} color="#27AE60" />
  </div>
);

export default Spinner;
