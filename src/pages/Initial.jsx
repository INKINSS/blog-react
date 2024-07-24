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
          Explora y crea en un sitio dedicado al desarrollo web:{" "}
          <strong>encuentra</strong> conocimientos frescos y{" "}
          <strong>comparte</strong> tu pasión por la programación y el diseño.
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
