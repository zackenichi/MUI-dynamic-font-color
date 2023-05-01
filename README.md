# MUI-dynamic-font-color

## This project explores the idea on how to make styles dynamic for web pages by clicking a few buttons

## The technique:

- Have a state for your values such as fontColor

`const [fontColor, setFontColor] = useState('#000000');`

- Use state in createTheme and use state values

 `const theme = createTheme({
    typography: {
      h1: {
        color: fontColor,  
      },
    },
  });`

- Add the element

 `<Typography variant="h1">Hello, World!</Typography>`
 
- Add controls and add function to change value of state

` <input
                  type="color"
                  value={fontColor}
                  onChange={handleFontColorChange}
                  style={{ cursor: 'pointer' }}
                />`

`const handleFontColorChange = (event) => {
    if (event.target && event.target.value) {
      setFontColor(event.target.value);
    }
  };`
                
- You can create an object with default values in case you want a reset function

`const defaultStyles = {
  color: '#000000',
};`

`const handleReset = () => {
    setFontColor(defaultStyles.color);
  };`
  
- Just customize logic and styles for other styling options

