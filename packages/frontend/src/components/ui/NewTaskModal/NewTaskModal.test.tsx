import { expect, test } from 'vitest'
import { NewTaskModal } from './NewTaskModal'
import { renderWithProviders } from '../../../utils/test-utils'
import "@vitest/browser/matchers";

test('Rendering NewTaskModal', async () => {
  const { getByText } = renderWithProviders(<NewTaskModal/>)
  await expect.element(getByText("Add a new task")).toBeInTheDocument()
})