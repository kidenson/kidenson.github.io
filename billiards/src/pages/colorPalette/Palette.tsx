import { Dispatch, SetStateAction } from 'react';
import Dot from './Dot';
import getRandomColors, { Color } from '../../shared/colors';

interface PaletteProps {
  setPalette: Dispatch<SetStateAction<boolean>>;
  setDot: Dispatch<SetStateAction<boolean>>;
  setColorBall: Dispatch<SetStateAction<string>>;
  palTop: number;
  palLeft: number;
}

function Palette({
  setPalette,
  setDot,
  setColorBall,
  palTop,
  palLeft,
}: PaletteProps) {
  const colors: Color[] = getRandomColors(5);
  return (
    <div className="paletteContainer" style={{ top: palTop, left: palLeft }}>
      Paint your balls!
      <div>
        {colors.map((color: Color) => (
          <Dot
          setPalette={setPalette}
            setDot={setDot}
            setColorBall={setColorBall}
            key={color.id}
            color={color.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Palette;
