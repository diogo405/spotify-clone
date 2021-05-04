import {render, screen} from '@testing-library/react'
import Track from './index'

test('should render track', () => {
  render(<Track name="Survival" length="2:34" number={1} />)
  screen.getByText(/Survival/)
  screen.getByText(/2:34/)
  screen.getByText(/1/)
})
