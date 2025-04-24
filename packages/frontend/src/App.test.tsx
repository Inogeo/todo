import { expect, test } from 'vitest'
import { renderWithProviders } from './utils/test-utils';
import App  from './App'
import "@vitest/browser/matchers";

test('Rendering TaskCard with done status set to false', async () => {
  const { getByText } = renderWithProviders(<App/>)
  await expect.element(getByText('To-do list demo app')).toBeInTheDocument()
})