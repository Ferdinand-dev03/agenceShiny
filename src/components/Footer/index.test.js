import Footer from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../uttils/Context";

describe('Footer', ()=> {
  test('change theme', async () => {
    
    render(
      <ThemeProvider>
        <Footer/>
      </ThemeProvider>
    )
    const nigthModeButton = screen.getByRole('button')
    // verifier la presence de ligth ☀
    expect(nigthModeButton.textContent).toBe('change de mode: ☀')
    // interagir avec notre composant
    fireEvent.click(nigthModeButton)
    expect(nigthModeButton.textContent).toBe('change de mode: 🌙')
  })
})
