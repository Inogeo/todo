import { expect, test } from 'vitest'
import { NavBar } from './NavBar'
import { setupStore } from '../../../redux/store'
import { renderWithProviders } from '../../../utils/test-utils'

test('Rendering NavBar', async () => {
  const store = setupStore()
  const { getByText } = renderWithProviders(<NavBar label={"test_label"} />, store)
  await expect.element(getByText("test_label")).toBeInTheDocument()
})