import { expect, test } from 'vitest'
import { NavBar } from './NavBar'
import { renderWithProviders } from '../../../utils/test-utils'
import "@vitest/browser/matchers";

test('Rendering NavBar', async () => {
  const { getByText } = renderWithProviders(<NavBar label={"test_label"} />)
  await expect.element(getByText("test_label")).toBeInTheDocument()
})