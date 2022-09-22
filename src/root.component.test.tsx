import { render } from '@testing-library/react';

import Root from './root.component';

describe('Root component', () => {
  it('auth provider should render loader component', () => {
    const { queryByText } = render(<Root name="Testapp" />);
    expect(queryByText(/Testapp is mounted!/i)).toBeNull();
  });
});
