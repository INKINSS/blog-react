import ButtonCollaborate from "../common/ButtonCollaborate";
import ButtonContribute from "../common/ButtonContribute";
import Logo from "../common/Logo";
import MenuMobile from "../common/MenuMobile";
import Collaborate from "../components/Collaborate";
import Discover from "../components/Discover";

const Initial = () => {
  return (
    <>
      <MenuMobile />
      <main className="mt-20 lg:mx-[10rem]">
        <section className="pb-10 px-5">
          <Logo />
          <p className="text-center text-grayLight">
            Publica tus ideas, comparte tu pasión con una comunidad vibrante de
            desarrolladores y diseña soluciones innovadoras juntos. Colabora,
            aprende y crece en un entorno que fomenta la creatividad y el
            intercambio de conocimientos. También lee acerca de tus temas de
            interés de una form fácil y moderna publicados por el resto de
            personas con interes similares al tuyo.
          </p>
          <div className="flex gap-5 justify-center mt-5">
            <ButtonCollaborate color="grayLight" />
            <ButtonContribute color="grayLight" />
          </div>
        </section>
        <section>
          <Collaborate />
          <Discover />
        </section>
      </main>
    </>
  );
};

export default Initial;
