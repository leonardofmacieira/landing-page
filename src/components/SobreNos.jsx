import React from "react";

const SobreNos = () => {
  return (
    <div id="sobrenos" className="flex flex-col gap-10 p-5 md:p-20">
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="flex flex-col gap-5 md:w-[50%]">
          <h2 className="text-[30px] md:text-[40px] text-orange-500">Nossa Missão</h2>
          <p className="text-base md:text-lg">
            Proporcionar proteção, conforto e segurança para motociclistas através de produtos inovadores, promovendo bem-estar e qualidade de vida no trabalho.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-[50%]">
          <img src="/missao.jpg" alt="Imagem" className="w-full rounded-lg"/>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="flex flex-col gap-5 md:w-[50%]">
          <h2 className="text-[30px] md:text-[40px] text-orange-500">Nossa Visão</h2>
          <p className="text-base md:text-lg">
            Ser a empresa líder em proteção solar para motociclistas no Brasil em três anos. Reconhecida pelo impacto positivo na saúde e bem-estar dos motociclistas.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-[50%]">
          <img src="/trabalho.jpg" alt="Imagem" className="w-full rounded-lg"/>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="flex flex-col gap-5 md:w-[50%]">
          <h2 className="text-[30px] md:text-[40px] text-orange-500">Nossos Valores</h2>
          <p className="text-base md:text-lg">
            Dentro de nossos valores como empresa prezamos por produtos confiáveis e de alto desempenho para garantir o bem-estar e a saúde dos motociclistas.
          </p>
        </div>
        <div className="flex-shrink-0 w-full md:w-[50%]">
          <img src="/aperto.jpg" alt="Imagem" className="w-full rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
