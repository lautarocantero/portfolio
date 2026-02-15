import './App.css'
import { ImageDialogProvider } from './components/ImageDialog/ImageDialogProvider'
import SnackBarProvider from './components/shared/snackbar/SnackBarProvider'
import { SimpleDialogProvider } from './components/SimpleDialog/SimpleDialogProvider'
import { StackContextProvider } from './components/StackTab/context/StackProvider'
import PortfolioPage from './pages/PortfolioPage'
import { AppTheme } from './theme/AppTheme'
import { ThemeProvider } from './theme/context/ThemeProvider'

const PortfolioApp = () => {

  return (
    <ThemeProvider>
      <SnackBarProvider>
        <AppTheme>
          <ImageDialogProvider>
            <SimpleDialogProvider>
              <StackContextProvider>
                <PortfolioPage />
              </StackContextProvider>
            </SimpleDialogProvider>
          </ImageDialogProvider>
        </AppTheme>
      </SnackBarProvider>
    </ThemeProvider>
  )
}

export default PortfolioApp
