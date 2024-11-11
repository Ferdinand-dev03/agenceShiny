import { fireEvent, render, screen } from "@testing-library/react";
import Card from ".";
import { ThemeProvider } from "../../uttils/Context";


describe('Card', ()=> {
  test('charge picture', async ()=> {
    render(
      <ThemeProvider>
        <Card
          title='Harry potter'
          label='Magicien'
          picture='/myPicture.pgn'
        />
      </ThemeProvider>
    )
    const cardPicture = screen.getByrole('img')
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardPicture.src).toBe(`http://localhost/myPicture.png`)
    expect(cardTitle.textContent).toBe('Harry Potter')
  })
  test('should add * around title', async ()=> {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Harry/i)
    const parentNode = cardTitle.closes('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})

  

