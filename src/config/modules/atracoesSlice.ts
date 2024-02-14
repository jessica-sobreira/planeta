import { createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../../models/atracao.model";

const state: Atracao[] = [
    {
        id: "1",
        nome: "Fresno",
        descricao: "Nossa casa fica até menos assombrada quando a gente curte show de artistas que gostamos tanto, né?",
        horario: "18:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-fresno.png"
    },

    
    {
        id: "2",
        nome: "NX Zero",
        descricao: "Entre razões e emoções a saída é se jogar ao som de NX Zero.",
        horario: "19:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png"
    },

    {
        id: "3",
        nome: "Reação em Cadeia",
        descricao: "Reação em Cadeia é uma das bandas mais relevantes do rock gaúcho a nível nacional.",
        horario: "20:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-reacao-em-cadeia.png"
    },

    {
        id: "4",
        nome: "Papas da Língua",
        descricao: "Eu sei.. Tudo pode acontecer… Inclusive, ter uma das maiores bandas de pop rock do Brasil no lineup",
        horario: "21:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-papasnalingua.png"
    },

    {
        id: "5",
        nome: "Armandinho",
        descricao: "Nessa e em todas as outras vidas queremos Armandinho no nosso lineup!",
        horario: "22:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-armandinho.png"
    },

    {
        id: "6",
        nome: "Os Paralamas do Sucesso",
        descricao: "Uma das maiores bandas brasileiras estará apresentando sua turnê de 40 anos no nosso palco",
        horario: "23:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-osparalamas.png"
    },
];  



const atracoesSlice = createSlice({
    name: "atracoes",
    initialState: state,
    reducers: {}
})

export default atracoesSlice.reducer;