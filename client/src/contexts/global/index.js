import ApiProvider from './Api';
import ThemeProvider from './Theme';
import { SnackbarProvider } from 'notistack'

export default function GlobalProvider({ children }) {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <ApiProvider>
          {children}
        </ApiProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}