import React from "react";
import * as S from "./styled";
import * as I from "@styled-icons/boxicons-regular/";

const Atom = ({ layers }) => {
  const [play, setPlay] = React.useState(true);
  const size = [2, 1.8, 1.7, 1.4, 1.3, 1.1, 1,  .9]

  return (
    <S.Wrapper>
      <S.Button
        onClick={() => {
          setPlay(!play);
        }}
      >
        {play ? <I.Stop /> : <I.Play />}
      </S.Button>
      <S.Atom size={layers && size[layers.length]}>
        <S.Core />
        {layers &&
          layers.map((amount, index) => {
            const electronPosition = calcPosition(amount, index);
            return (
              <S.Layer play={play} direction={index & 1 ? 'normal' : 'reverse'} key={index + amount}>
                <S.Circuit index={index + 1} />
                {electronPosition.map((pos) => (
                  <S.Electron top={pos.top} left={pos.left} index={index + 1} key={pos.top + pos.left}/>
                ))}
              </S.Layer>
            );
          })}
      </S.Atom>
    </S.Wrapper>
  );
};

const calcPosition = (amount) => {
  // Multiplicar pelo raio e subtrair pela metade da altura total menos a metade do átomo => res * size - ( width / 2 - rad / 2 )
  const div = 360 / amount;
  const electrons = new Array();
  for (var i = 1; i <= amount; ++i) {
    electrons.push({
      top: Math.sin(div * i * (Math.PI / 180)),
      left: Math.cos(div * i * (Math.PI / 180)),
    });
  }
  return electrons;
};

export default Atom;
