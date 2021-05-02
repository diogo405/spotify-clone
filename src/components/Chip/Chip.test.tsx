import {render, screen} from '@testing-library/react'
import Chip from './index'

test('should render title and image', () => {
  render(<Chip thumbnail="https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41">Stoney (Deluxe)</Chip>)
  screen.getByText(/Stoney \(Deluxe\)/)
  expect(screen.getByTestId('chip-thumbnail')).toHaveStyle('background-image: url(https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41)')
})
