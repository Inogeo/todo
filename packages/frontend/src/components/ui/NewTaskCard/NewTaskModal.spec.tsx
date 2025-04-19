import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { NewTaskModal } from './NewTaskModal'

test('Rendering NewTaskModal', async () => {
  const { getByText } = render(<NewTaskModal modal_id="test_modal" />)
  await expect.element(getByText("Save")).toBeInTheDocument()
})