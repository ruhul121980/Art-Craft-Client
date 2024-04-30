import React from 'react';

export default function Slid() {
  return (
    <div className="carousel w-full max-h-96 overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/G7z9QB2/vecteezy-close-up-carpenter-working-carving-wood-ai-generative-32417434.jpg" className="w-full h-auto" alt="Slide 1" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle hidden lg:flex">❮</a> 
          <a href="#slide2" className="btn btn-circle hidden lg:flex">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/f957Zd6/vecteezy-exquisite-craftsmanship-traditional-russian-birch-bark-products-24069183.jpg" className="w-full h-auto" alt="Slide 2" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle hidden lg:flex">❮</a> 
          <a href="#slide3" className="btn btn-circle hidden lg:flex">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/y8qpFzp/vecteezy-ai-gerado-trabalhos-manuais-propaganda-fundo-com-copia-de-37245072.jpg" className="w-full h-auto" alt="Slide 3" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle hidden lg:flex">❮</a> 
          <a href="#slide1" className="btn btn-circle hidden lg:flex">❯</a>
        </div>
      </div> 
    </div>
  );
}
