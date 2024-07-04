import ButtonCollaborate from "../common/ButtonCollaborate";

const Collaborate = () => {
  return (
    <section className="bg-primary py-5 px-5">
      <h3 className="text-white text-[1.5rem] font-semibold mb-4">Colaborar</h3>
      <p className="text-white text-center">
        Construye un artículo basado en tu tema de interés, elaborando un
        contenido detallado y bien organizado que explore diversos aspectos y
        perspectivas del tema. Utiliza ejemplos, datos relevantes y recursos
        visuales para enriquecer la comprensión del lector.
      </p>
      <div className="flex justify-center py-5">
        <ButtonCollaborate color="white" />
      </div>
    </section>
  );
};

export default Collaborate;
