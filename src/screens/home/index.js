import React from "react";
import { View,Image, TouchableOpacity, Text  } from "react-native";
import { Container, Header, Rotas } from "./styles";
export default function Home() {
  return (
    <Container>
     <Header>
     <Image source={1}/>
     <Image source={1}/>
<Rotas>
 <TouchableOpacity>
  <Text>Home</Text>
 </TouchableOpacity>
 <TouchableOpacity>
  <Text>Home</Text>
 </TouchableOpacity>
 <TouchableOpacity>
  <Text>Home</Text>
 </TouchableOpacity>
 <TouchableOpacity>
  <Text>Home</Text>
 </TouchableOpacity>
</Rotas>
     </Header>
    </Container>
  );
}
