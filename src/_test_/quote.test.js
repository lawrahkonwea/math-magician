import { render } from '@testing-library/react';
import Quote from '../components/quote';

describe('test navbar component', () => {
  it('renders correctly', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
