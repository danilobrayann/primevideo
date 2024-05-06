import React from "react";
import { View,Image, TouchableOpacity, Text  } from "react-native";
import { Container, Header, Rotas,LogoIm,ButtonRotas, Well } from "./styles";
import Logo from '../../../assets/DragonFury.png'
import MovierDell from '../../assets/movies/the_wheel_of_time.png'
export default function Home() {
  return (
    <Container>
     <Header>
     <LogoIm source={ Logo}/> 
     </Header> 
<Rotas>
 <TouchableOpacity>
  <ButtonRotas>Home</ButtonRotas>
 </TouchableOpacity>
 <TouchableOpacity>
  <ButtonRotas>Tv Shows</ButtonRotas>
 </TouchableOpacity>
 <TouchableOpacity>
  <ButtonRotas>Movies</ButtonRotas>
 </TouchableOpacity>
 <TouchableOpacity>
  <ButtonRotas>Kids</ButtonRotas>
 </TouchableOpacity>
</Rotas>
    <TouchableOpacity>
    <Well source={ MovierDell}/> 
    </TouchableOpacity>
    </Container>
  );
}
