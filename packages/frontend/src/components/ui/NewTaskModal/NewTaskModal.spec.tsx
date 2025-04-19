import { expect, test } from 'vitest'
import { NewTaskModal } from './NewTaskModal'
import { setupStore } from '../../../redux/store'
import { renderWithProviders } from '../../../utils/test-utils'

test('Rendering NewTaskModal', async () => {
  const store = setupStore()
  const { getByText } = renderWithProviders(<NewTaskModal/>)
  await expect.element(getByText("Add a new task")).toBeInTheDocument()
})