import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  min-height: 1014px;
  max-height: 1014px;
  top: 160px;
  background: #5E5E5E;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Containerpokes = styled.div`
min-width: 282px;
max-width: 282px;
min-height: 282px;
max-height: 282px;
  top: 160px;
  background: white;
  display:flex;
  Flex-direction:column
  align-items:center;
  justify-content:center;
`;


export const Container = styled.div`
 position: absolute;
  min-width: 1389.14px;
  max-width: 1389.14px;
  min-height: 663px;
  max-height: 663px;
  left: 0px;
  top: 398px;
  background-color: ${(props) => props.color};
  border-radius: 37.8857px;
  display:flex;
`;



export const ContPokemonFront = styled.div`
  position: absolute;
  min-width: 282px;
  max-width: 282px;
  min-height: 282px;
  max-height: 282px;
  left:44px;
  top:26px;
  background-color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
  `;

export const ContPokemonBack = styled.div`
position: absolute;
min-width: 282px;
max-width: 282px;
min-height: 282px;
max-height: 282px;
left:44px;
top:355px;
background-color: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
 `;

export const ContainerStats = styled.div`
 min-width: 343px;
 max-width: 343px;
 min-height: 613px;
 max-height: 613px;
 left:360px;
 margin-top:30px;
 background-color: red;
 border-radius: 12px;
 color: #ffffff;
 padding:16px

`;

export const ContainerMoves = styled.div`
  padding: 16px;
  min-width: 292px;
  max-width: 292px;
  min-height: 453px;
  max-height: 453px;
  background-color: yellow;
  border-radius: 8px;
  position: absolute;
  margin: 50px;
  color: #ffffff;
  left:771px;
  top:184px;
`;

export const ImgPokemonFront = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 8px;
  overflow: hidden;
 `;

export const ImgPokemonBack = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 8px;
  overflow: hidden;
 `;

export const PokemonNumber = styled.p`

width: 30px;
height: 19px;
left: 774px;
margin-top: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;

`;

export const PokemonName = styled.p`

width: 238px;
height: 58px;
left: 771px;
top: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;



color: #FFFFFF;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 26px;

 `;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display:flex;
  flex-direction: row;
`;
export const Pokeball = styled.img`
position: static;
width: 908.99px;
height: 908.99px;
left: 553.49px;
top: -50px;



`;

export const PokeballCard = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Pokemon = styled.img`
  width: 270px;
  height: 270px;
  position: absolute;
  top: 316px;
margin-left:35.14px
  right: 0;
  z-index: 2;
`;


export const TextPoke = styled.p`
position: absolute;
width: 220px;
height: 72px;
left: 40px;
top: 220px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
`

