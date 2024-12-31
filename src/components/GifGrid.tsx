import React from 'react';
import { GifCard } from './GifCard';

// Lista de GIFs e informações de categorias
const featuredGifs = [
  {
    id: '1',
    url: 'https://github.com/AstridNielsen-lab/Radio-Tatuape-FM-APP/blob/index/card%20site%20radio%20tatuape%20fm.gif?raw=true',
    title: 'Anuncie',
    category: 'Parceiras',
    link: 'https://api.whatsapp.com/send?phone=5511970603441&text=Eu%20gostaria%20de%20Anunciar%20,%20podem%20me%20ajudar%20?%20Cheguei%20pelo%20anuncio%20do%20site%20.' // Link fictício para "Anuncie"
  },
  {
    id: '2',
    url: 'https://help.grandchef.com.br/wp-content/uploads/2019/12/tenor-3.gif',
    title: 'Delivery 24 Horas',
    category: 'Bebidas',
    link: 'https://www.ifood.com.br/delivery/sao-paulo-sp/adega-radio-tatuape-fm-24-horas-vila-regente-feijo/29aa6191-cf23-4569-a8c3-d7bd66d877b5' // Link fictício para "Delivery 24 Horas"
  },
  {
    id: '3',
    url: 'https://i.gifer.com/LZ4n.gif',
    title: 'Juliette Psicose',
    category: 'Playlist',
    link: 'https://youtube.com/playlist?list=PLkm4QB9CKklpa5tej_S5yL-VM59O7mshE&si=3HVydZuknCSTxs-n' // Link fictício para "Radio Waves"
  },
  {
    id: '4',
    url: 'https://cdn.dribbble.com/users/954572/screenshots/17357871/facebook-gif.gif',
    title: 'Facebook',
    category: 'Siga',
    link: 'https://www.facebook.com/tatuapefm' // Link fictício para "Vintage Radio"
  },
  {
    id: '5',
    url: 'https://media.tenor.com/images/05fb59c7e6ee2f4e3bd73fc4aacd76e8/tenor.gif',
    title: 'DJ Setup',
    category: 'Equipment',
    link: 'https://www.magazinevoce.com.br/magazineradiotatuapefm/busca/dj+setup/?from=submit' // Link fictício para "DJ Setup"
  },
  {
    id: '6',
    url: 'https://media.giphy.com/media/ko7twHhomhk8E/giphy.gif',
    title: 'Like Look Solutions',
    category: 'Infrastructure',
    link: 'https://likelook.wixsite.com/solutions' // Link fictício para "Radio Tower"
  },
  {
    id: '7',
    url: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/07/5-carreiras-para-quem-gosta-de-falar-em-pc3bablico.gif?w=700',
    title: 'Microphone',
    category: 'Equipment',
    link: 'https://www.magazinevoce.com.br/magazineradiotatuapefm/busca/microfones%2Bprofissionais/?from=submit&filters=brand---akg' // Link fictício para "Microphone"
  },
  {
    id: '8',
    url: 'https://media4.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif?cid=6c09b952ppqplxk20c4dtbqku7v5bm9rk2gia8btesilqp8j&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    title: 'Discord',
    category: 'Technology',
    link: 'https://radiotatuapefm.wixsite.com/disparattechno' // Link fictício para "Sound Waves"
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    title: 'Radio Station',
    category: 'Studio',
    link: 'https://www.bing.com/search?pglt=771&q=radio+tatuape+fm&cvid=a9d53e4d741c4b839d0c4811874a1436&gs_lcrp=EgRlZGdlKgYIARAAGEAyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEEUYOzIGCAQQABhAMgYIBRAAGEAyBggGEEUYPDIGCAcQRRhBMgYICBBFGDzSAQgzNjg4ajBqMagCCLACAQ&form=EX0050&pc=EDGEBRV&filters=local_ypid:"YN7993x16616781707094725701"&shtp=GetUrl&shid=d613936e-e4a0-46f5-a543-adaf4eeaa343&shtk=UmFkaW8gVGF0dWFwZSBGbQ%3D%3D&shdk=UmFkaW8gVGF0dWFwZSBGTSDDqSBzdWEgZXN0YcOnw6NvIHBhcmEgbyBSb2NrIG5hY2lvbmFsIGUgSGVhdnkgTWV0YWwgYnJhc2lsZWlyby4gU2ludG9uaXplIHBhcmEgb3V2aXIgUm9jayDigKY%3D&shhk=EHKcdnRLtUaGp1cG8WKyFGUV5%2Fj0M2zvr4kEBcpQ6Ig%3D' // Link fictício para "Radio Station"
  },
  {
    id: '10',
    url: 'https://radiotatuapefm.radiostream321.com',
    title: 'Broadcasting',
    category: 'Live',
    link: 'https://www.exemplo.com/broadcasting' // Link fictício para "Broadcasting"
  }
];

// Componente principal para exibir a grade de GIFs
export default function GifGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {featuredGifs.map((gif) => (
        <a
          key={gif.id}
          href={gif.link} // Link associado a cada card
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Adiciona segurança ao abrir novos links
        >
          <GifCard
            title={gif.title} // Título do GIF
            imageUrl={gif.url} // URL da imagem
            category={gif.category} // Categoria
          />
        </a>
      ))}
    </div>
  );
}
