import { expect, test } from 'vitest'
import { renderWithProviders } from '../../../utils/test-utils';
import { TaskCard } from './TaskCard'
import { v4 as uuidv4 } from 'uuid';
import { setupStore } from '../../../redux/store';

const store=setupStore()

test('Rendering TaskCard with done status set to false', async () => {
  const { getByText } = renderWithProviders(<TaskCard uuid={uuidv4()} title='test_title' description='test_description' done={false}/>, store)
  await expect.element(getByText('test_title')).toBeInTheDocument()
  await expect.element(getByText('test_description')).toBeInTheDocument()
})