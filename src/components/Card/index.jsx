import React from "react";
import { FiThumbsUp } from "react-icons/fi"

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/97115934?v=4" />
                <div>
                    <h4>Bruno Alves</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito no bootcamp OrangeTech+...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#Javascript #react</h4>
                <p>
                    <FiThumbsUp /> 84
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
};
export { Card };