import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { TaskCard } from './TaskCard'

test('Rendering TaskCard with done status set to false', async () => {
  const { getByText } = render(<TaskCard title='test_title' description='test_description' done={false}/>)
  await expect.element(getByText('test_title')).toBeInTheDocument()
  await expect.element(getByText('test_description')).toBeInTheDocument()
})

test('Rendering TaskCard with done status set to true', async () => {
  const { getByText } = render(<TaskCard title='test_title' description='test_description' done={true}/>)
  await expect.element(getByText('test_title')).toBeInTheDocument()
  await expect.element(getByText('test_description')).toBeInTheDocument()
})