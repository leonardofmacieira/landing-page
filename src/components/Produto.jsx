import React from "react";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import { TbHandFinger } from "react-icons/tb";

const Produto = () => {
  return (
    <div id="produto">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/moto.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-orange-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-orange-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">Nossa Solução:</h2>

                <p className="mt-4 text-gray-600">
                  Proporciona segurança e conforto, reduzindo a exposição direta
                  ao sol e o risco de problemas de saúde.
                </p>
                <p className="mt-4 text-gray-600">
                  As empresas ganham com uma equipe mais saudável, reduzindo
                  afastamentos e garantindo maior consistência dos seus
                  parceiros e colaboradores.
                </p>
                <p className="mt-4 text-gray-600">
                  Melhora o bem-estar e a qualidade de trabalho dos
                  motociclistas, promovendo maior satisfação e produtividade no
                  dia a dia.
                </p>
                <p className="mt-4 text-gray-600">
                  À vista disso desenvolvemos uma coberta de fácil instalação a
                  fim de minimizar os efeitos nefastos da exposição solar,
                  intensa e diária, que os motoqueiros estão submetidos. Eles
                  estarão mais protegidos da incidência solar diretamente, como
                  também os passageiros que contratam seus serviços.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-orange-500 bg-white px-12 py-3 text-sm font-medium text-primary hover:bg-orange-500 hover:text-white duration-150 focus:outline-none focus:ring active:text-orange-500"
                >
                  Explorar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Benefícios do Produto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border hover:border-orange-500 hover:scale-105 transition-all">
              <div className="flex justify-center items-center mb-4 gap-1">
                <h3 className="text-xl font-semibold text-orange-500 ml-4">Custo</h3>
                <TbReportMoney className="text-4xl text-orange-500" />
              </div>
              <p className="mt-4 text-gray-600">
                Facilita a instalação e oferece um excelente custo-benefício para as empresas e motociclistas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border hover:border-orange-500 hover:scale-105 transition-all">
              <div className="flex justify-center items-center mb-4 gap-1">
                <h3 className="text-xl font-semibold text-orange-500 ml-4">Benefício</h3>
                <MdOutlineVerified className="text-4xl text-orange-500" />
              </div>
              <p className="mt-4 text-gray-600">
                Reduz a exposição ao sol e oferece proteção contra problemas de saúde causados pela exposição intensa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border hover:border-orange-500 hover:scale-105 transition-all">
              <div className="flex justify-center items-center mb-4 gap-1">
                <h3 className="text-xl font-semibold text-orange-500 ml-4">Acessibilidade</h3>
                <TbHandFinger className="text-4xl text-orange-500" />
              </div>
              <p className="mt-4 text-gray-600">
                Melhora o bem-estar dos motociclistas, promovendo maior satisfação e eficiência no trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Seção sobre o Público-Alvo */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Segmentos</h2>
          <p className="text-xl text-gray-600 mb-6 text-center">
            Nosso produto é ideal para motociclistas e empresas que buscam melhorar a segurança e o conforto no trabalho, além de reduzir os riscos à saúde. Com foco na proteção solar, ele atende principalmente aqueles que lidam com exposição constante ao sol durante suas atividades diárias.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-orange-500">Motociclistas</h3>
              <p className="mt-4 text-gray-600">
                Motociclistas por aplicativos de entrega e de passageiros.
              </p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-orange-500">Empresas Frotistas</h3>
              <p className="mt-4 text-gray-600">
                Empresas frotistas com oportunidade de teste gratuito por 30 dias.
              </p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-orange-500">Campanhas Digitais e Marketplace</h3>
              <p className="mt-4 text-gray-600">
                Campanhas publicitárias digitais e Promoções em Marketplace, oferecendo descontos iniciais para atrair os primieros compradores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produto;
