import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const SButtonPrimary = styled.button`
  background: ${COLOURS.primary};
  padding: 0.5rem;
  min-width: 8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  box-shadow: 0px 4px 6px -4px ${COLOURS.secondary};

  &:hover {
    filter: brightness(85%);
  }
`;

export const SButtonSecondary = styled(SButtonPrimary)`
  background: ${COLOURS.secondary};
  color: white;
`;

export const SButtonDanger = styled(SButtonPrimary)`
  background: ${COLOURS.danger};
  color: white;
`;

export const SHeading = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 1rem;
`;
