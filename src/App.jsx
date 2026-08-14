import './App.css'
// import ButtonEvents from './Button_Event'
import Button from './Button'

function App() {

  const handleClick = () => {
    console.log("Button clicked")
  }

  return (
    <>
      {/* <div>
        <h1>This is ButtonEvent_pre</h1>
        <ButtonEvents />
      </div> */}
        <div>
          <h1 style={{fontSize:"20px"}}>
            This is youtube_Button_pre
          </h1>
          <Button type = "button" disabled ={false} onClick ={handleClick}>
            ボタンクリック
          </Button>
          <button />
        </div>
        
    </>
  )
}

export default App
