import { createSlice } from "@reduxjs/toolkit";
import { Atracao } from "../../models/atracao.model";

const state: Atracao[] = [
    {
        id: "1",
        nome: "Fresno",
        descricao: "Teste",
        horario: "18:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-fresno.png",
    },

    {
        id: "2",
        nome: "NX Zero",
        descricao: "Teste",
        horario: "19:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-nxzero.png",
    },

    {
        id: "3",
        nome: "Reação em Cadeia",
        descricao: "Teste",
        horario: "20:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-reacao-em-cadeia.png",
    },

    {
        id: "4",
        nome: "Papas da Língua",
        descricao: "Teste",
        horario: "21:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-papasnalingua.png",
    },

    {
        id: "5",
        nome: "Armandinho",
        descricao: "Teste",
        horario: "22:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-armandinho.png",
    },

    {
        id: "6",
        nome: "Os Paralamas do Sucesso",
        descricao: "Teste",
        horario: "23:00",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-osparalamas.png"
    },

    {
        id: "7",
        nome: "Vitor Kley",
        descricao: "Teste",
        horario: "23:30",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-vitor-kley.png",
    },

    {
        id: "8",
        nome: "Gabriel O Pensador",
        descricao: "Teste",
        horario: "00:30",
        curtidas: 0,
        descurtidas: 0,
        urlFoto: "https://s3.wasabisys.com/images.planetaatlantida.com.br/2024/lineup/home/polaroid-gabrielopensador.png",
    },

];  



const atracoesSlice = createSlice({
    name: "atracoes",
    initialState: state,
    reducers: {}
})

export default atracoesSlice.reducer;