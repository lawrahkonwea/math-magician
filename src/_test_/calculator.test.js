import { render } from '@testing-library/react';
import CalcUserInterface from '../components/calculator';

describe('Test component', () => {
  it('Renders correctly', () => {
    const tree = render(<CalcUserInterface />);
    expect(tree).toMatchSnapshot();
  });
});
