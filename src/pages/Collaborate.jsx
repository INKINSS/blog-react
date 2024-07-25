import { useState } from "react";
import Logo from "../common/Logo";
import MenuMobile from "../common/MenuMobile";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import Divider from "@mui/material/Divider";
import FadeModalDialog from "../common/FadeModalDialog";

const Collaborate = () => {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    publishDate: "",
    title: "",
    description: "",
    introduction: "",
    tags: [],
    title_content_1: "",
    content_1: "",
    title_content_2: "",
    content_2: "",
    title_content_3: "",
    content_3: "",
    title_content_4: "",
    content_4: "",
    conclution: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [articleId, setArticleId] = useState(null);

  const url = import.meta.evn.VITE_URL_BACKEND

  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(",").map((tag) => tag.trim());
    setFormData((prevData) => ({
      ...prevData,
      tags: tagsArray,
    }));
  };

  const handleDateChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      publishDate: e.target.value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la petición");
        }
        return res.json();
      })
      .then((data) => {
        setArticleId(data.id);
        setIsModalOpen(true);
        setIsPublic(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MenuMobile />
      <main className="mt-20 lg:px-[20rem] mb-10">
        <Logo />
        <p className="text-grayLight text-[1rem] text-center">
          Si estás interesado en compartir tus conocimientos, puedes hacerlo
          llenando este formulario con la información que quieras compartir.
        </p>
        <form
          action="http://localhost:3000/"
          onSubmit={handleSubmit}
          method="post"
          className="mt-10"
        >
          <div>
            <label className="text-primary font-semibold text-[1.2rem]">
              Información del usuario
            </label>
            <span className="block text-grayLight">
              Añade un poco de información para que las demás personas sepan
              quien hizo la publicación.
            </span>
          </div>
          <Box className="mt-5 space-y-6" noValidate autoComplete="off">
            <TextField
              className="w-[10rem]"
              fullWidth
              required
              id="outlined-basic"
              label="Nombre y apellido"
              variant="outlined"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              className="w-[10rem]"
              fullWidth
              required
              id="outlined-basic"
              label="Nickname"
              variant="outlined"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
            />
          </Box>
          <div className="w-full my-5">
            <span className="text-primary text-[.8rem] font-semibold block">
              Fecha de publicación
            </span>
            <input
              required
              type="date"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="mt-5">
            <label className="text-primary font-semibold text-[1.2rem]">
              Detalles de la publicación
            </label>
            <span className="block text-grayLight">
              Añade detalles relevantes acerca de tu publicación como el título
              principal, una breve descripción, entre otros datos.
            </span>
          </div>
          <Box className="mt-5 space-y-6" noValidate autoComplete="off">
            <TextField
              className="w-[10rem]"
              fullWidth
              required
              id="outlined-basic"
              label="Título principal"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[.8rem] block font-semibold">
                Descripción
              </label>
              <Textarea
                required
                placeholder="Describe tu artículo en unas pocas líneas"
                label="Breve descripción"
                minRows={1}
                variant="outlined"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[.8rem] block font-semibold">
                Introducción
              </label>
              <Textarea
                required
                placeholder="Añade una introducción detallada acerca de tu artículo"
                label="Introducción"
                minRows={4}
                variant="outlined"
                name="introduction"
                value={formData.introduction}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[.8rem] block font-semibold">
                Etiquetas
              </label>
              <TextField
                required
                placeholder="'node', 'javascript', 'express'"
                fullWidth
                label="Añade etiquetas para tu artículo"
                rows={4}
                variant="outlined"
                name="tags"
                value={formData.tags.join(", ")}
                onChange={handleTagsChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[1.2rem] block font-semibold">
                Contenido principal
              </label>
              <span className="block text-grayLight">
                Añade el contenido principal de tu artículo dividiéndolo en 4
                partes importantes
              </span>
              <TextField
                required
                fullWidth
                label="Primer subtítulo"
                rows={4}
                variant="outlined"
                name="title_content_1"
                value={formData.title_content_1}
                onChange={handleInputChange}
              />
              <Textarea
                required
                placeholder="Primer contenido"
                minRows={6}
                variant="outlined"
                name="content_1"
                value={formData.content_1}
                onChange={handleInputChange}
              />
            </div>
            <Divider />
            <div className="flex flex-col gap-2">
              <TextField
                required
                fullWidth
                label="Segundo subtítulo"
                rows={4}
                variant="outlined"
                name="title_content_2"
                value={formData.title_content_2}
                onChange={handleInputChange}
              />
              <Textarea
                required
                placeholder="Segundo párrafo"
                minRows={6}
                variant="outlined"
                name="content_2"
                value={formData.content_2}
                onChange={handleInputChange}
              />
            </div>
            <Divider />
            <div className="flex flex-col gap-2">
              <TextField
                required
                fullWidth
                label="Tercer subtítulo"
                rows={4}
                variant="outlined"
                name="title_content_3"
                value={formData.title_content_3}
                onChange={handleInputChange}
              />
              <Textarea
                required
                placeholder="Tercer párrafo"
                minRows={6}
                variant="outlined"
                name="content_3"
                value={formData.content_3}
                onChange={handleInputChange}
              />
            </div>
            <Divider />
            <div className="flex flex-col gap-2">
              <TextField
                required
                fullWidth
                label="Cuarto subtítulo"
                rows={4}
                variant="outlined"
                name="title_content_4"
                value={formData.title_content_4}
                onChange={handleInputChange}
              />
              <Textarea
                required
                placeholder="Cuarto párrafo"
                minRows={6}
                variant="outlined"
                name="content_4"
                value={formData.content_4}
                onChange={handleInputChange}
              />
            </div>
            <Divider />
            <div className="flex flex-col gap-2">
              <label className="text-primary text-[1.2rem] block font-semibold">
                Conclusión
              </label>
              <span className="block text-grayLight">
                Añade una conclusión detallada acerca de tu artículo.
              </span>
              <Textarea
                required
                placeholder="Conclusión"
                minRows={4}
                variant="outlined"
                name="conclution"
                value={formData.conclution}
                onChange={handleInputChange}
              />
            </div>
          </Box>
          <button
            type="submit"
            className="w-full py-3 text-primary hover:text-white border-2 border-primary hover:bg-primary transform duration-200 rounded-md my-10"
          >
            {isPublic ? "publicado" : "publicar"}
          </button>
        </form>
      </main>
      {isModalOpen && (
        <FadeModalDialog
          open={isModalOpen}
          articleId={articleId}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Collaborate;
