type ColorPaletteProps = {
  handleColorClick: (color: string) => void;
}

export const ColorPalette = ({handleColorClick} : ColorPaletteProps) => {

  return (
    <div className="color-palette">
      <button
        className="color-palette__item violet"
        onClick={() => handleColorClick("violet")}
      ></button>
      <button
        className="color-palette__item alive"
        onClick={() => handleColorClick("alive")}
      ></button>
      <button
        className="color-palette__item summer"
        onClick={() => handleColorClick("summer")}
      ></button>
      <button
        className="color-palette__item hydrogen"
        onClick={() => handleColorClick("hydrogen")}
      ></button>
      <button
        className="color-palette__item moon-purple"
        onClick={() => handleColorClick("moon-purple")}
      ></button>
      <button
        className="color-palette__item citrus-peel"
        onClick={() => handleColorClick("citrus-peel")}
      ></button>
    </div>
  );
};
