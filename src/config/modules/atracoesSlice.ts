import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../../models/atracao.model";
import { RootState } from "../store";

const initialState: Atracao[] = [
    {
        id: "1",
        nome: "Fresno",
        descricao: "Nossa casa fica até menos assombrada quando a gente curte show de artistas que gostamos tanto, né? E estamos muito felizes em saber que Fresno estará com a gente nessa próxima edição.",
        horario: "18:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-fresno.png",
    },

    {
        id: "2",
        nome: "NX Zero",
        descricao: "Entre razões e emoções a saída é se jogar ao som de NX Zero. Estamos felizes demais em ter conosco uma banda que marcou gerações e que um dos lugares onde a Turnê Cedo ou Tarde vai se apresentar é no nosso!",
        horario: "19:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png",
    },

    {
        id: "3",
        nome: "Reação em Cadeia",
        descricao: "Formada em 99 em Novo Hamburgo, Reação em Cadeia é uma das bandas mais relevantes do rock gaúcho a nível nacional. Eles retomaram as atividades no Planeta de 2023, após seis anos de pausa, em um show que fez todo mundo se emocionar e cantar os clássicos mais nostálgicos.",
        horario: "20:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-reacao-em-cadeia.png",
    },

    {
        id: "4",
        nome: "Papas da Língua",
        descricao: "Eu sei.. Tudo pode acontecer… Inclusive, ter uma das maiores bandas de pop rock do Brasil no lineup, né? Depois de um hiato, o grupo Papas da Língua retorna aos palcos neste ano e logo no início de 2024 comanda um super show no Planeta Atlântida.",
        horario: "21:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-papasnalingua.png",
    },

    {
        id: "5",
        nome: "Armandinho",
        descricao: "Nessa e em todas as outras vidas queremos Armandinho no nosso lineup! A gente sabe que vocês esperavam ele aqui de novo com a gente, e por isso ele vai estar em mais um verão com toda sua vibe maravilhosa.",
        horario: "22:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-armandinho.png",
    },

    {
        id: "6",
        nome: "Os Paralamas do Sucesso",
        descricao: "Uma das maiores bandas brasileiras estará apresentando sua turnê de 40 anos no nosso palco e não poderíamos estar mais felizes. Eles que tem quem longo histórico de músicas de sucesso, diversos prêmios na história, um público fiel e gigantesco.",
        horario: "23:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-osparalamas.png"
    },

    {
        id: "7",
        nome: "Vitor Kley",
        descricao: "Vitor Kley é energia pura e não poderia ficar de fora desse lineup! E para ficar ainda melhor, ele receberá no palco Carol Biazin, cantora, compositora e instrumentalista, considerada uma das grandes potências em ascensão no cenário nacional.",
        horario: "23:30",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-vitor-kley.png",
    },

    {
        id: "8",
        nome: "Gabriel O Pensador",
        descricao: "Ele estava aqui quando tudo era mato! Um dos pioneiros do hip hop brasileiro, Gabriel foi o primeiro rapper a difundir o gênero na língua portuguesa, lançando seu primeiro disco em 1993. E como não ter esse nome de peso no nosso lineup?",
        horario: "00:30",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-gabrielopensador.png",
    },

];  

const atracoesSlice = createSlice({
    name: "atracoes",
    initialState,
    reducers: {
      curtirAtracao: (state, action: PayloadAction<string>) => {
        return state.map((item) => {
          if (item.id === action.payload) {
            return { ...item, curtidas: item.curtidas + 1 };
          }
          return item;
        });
      },
      descurtirAtracao: (state, action: PayloadAction<string>) => {
        return state.map((item) => {
          if (item.id === action.payload) {
            return { ...item, descurtidas: item.descurtidas + 1 };
          }
          return item;
        });
      },
    },
  });
  

  export const { curtirAtracao, descurtirAtracao } = atracoesSlice.actions;
  

  export default atracoesSlice.reducer;
  

  export const selectAtracoes = (state: RootState) => state.atracoes;


