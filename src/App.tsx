import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Button as={Link} to={'/2'}>
              BUTTON
            </Button>
          }
          path={'/'}
        />
        <Route
          element={
            <Button as={Link} to={'/'} variant={'secondary'}>
              BUTTON
            </Button>
          }
          path={'/2'}
        />
      </Routes>
    </BrowserRouter>
  )
}
