
import axios from 'axios'

const api = axios.create({
  beseURL: "https://nsf-lista-negra.herokuapp.com"
});

export default class MemelationApi {
  async Consultar(ml) {
   console.log(ml);

    let formData = new FormData();
    formData.append("autor", ml.autor);
    formData.append("categoria", ml.categoria);
    formData.append("hashtags", ml.hashtags);
    formData.append("maior", ml.maior);
    formData.append("imagem", ml.imagem);

    const resp = await api.post("/Memelation",formData,{
    headers:{ "content-type" : "multipart/form-data" }
    });
    console.log(resp);
    return resp;
  }
  async consultar(){
  const resp = await api.post("/Memelation");
  }
buscarImagem(foto){
  const urlFoto = api.defaults.baseURL + "/Memelation/foto/" + foto;
  console.log(urlFoto);

  return urlFoto;
}
     async Excluir(id){
    const resp = await api.delete(`/Memelation/${id}`);

    return resp.data;
  }

  async alterar(id, ml) {
    let formData = new FormData();
    formData.append("autor", ml.autor);
    formData.append("categoria", ml.categoria);
    formData.append("hashtags", ml.hashtags);
    formData.append("maior", ml.maior);
    formData.append("imagem", ml.imagem);

    const resp = await api.put(`/Memelation/${id}`, formData, {
      headers: { "content-type": "multipart/form-data" }
    });

    return resp.data;
  }
}


