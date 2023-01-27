import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/navbar';

describe('test navbar component', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
