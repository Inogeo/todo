import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { NavBar } from './NavBar'

test('Rendering NavBar', async () => {
  const test_label = "test_navbar"
  const { getByText } = render(<NavBar label={test_label} />)

  await expect.element(getByText(test_label)).toBeInTheDocument()

})