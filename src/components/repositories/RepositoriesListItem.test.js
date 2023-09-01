import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import RepositoriesListItem from './RepositoriesListItem';

// during test, do not import a real FileIcon Component inside RepositoriesListItem
jest.mock('../tree/FileIcon', () => {
  return () => {
    // instead of a real component, replace it with the return value below
    return 'File Icon Component';
  };
});

function renderComponent() {
  const repository = {
    full_name: 'Michael',
    language: 'Python',
    description: 'Thats a Michael Repo',
    owner: 'The owner is Michael',
    name: 'Hello name',
    html_url: 'https://github.com/facebook/react'
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test('shows a link to a github homepage for this repository', async () => {
  renderComponent();
  // await screen.findByRole('img', { name: 'Python' });
});
