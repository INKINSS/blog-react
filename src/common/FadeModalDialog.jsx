// FadeModalDialog.js
import { Transition } from "react-transition-group";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function FadeModalDialog({ open, handleClose, articleId }) {
  return (
    <Transition in={open} timeout={400}>
      {(state) => (
        <Modal
          keepMounted
          open={!["exited", "exiting"].includes(state)}
          onClose={handleClose}
          slotProps={{
            backdrop: {
              sx: {
                opacity: 0,
                backdropFilter: "none",
                transition: `opacity 400ms, backdrop-filter 400ms`,
                ...{
                  entering: { opacity: 1, backdropFilter: "blur(8px)" },
                  entered: { opacity: 1, backdropFilter: "blur(8px)" },
                }[state],
              },
            },
          }}
          sx={{
            visibility: state === "exited" ? "hidden" : "visible",
          }}
        >
          <ModalDialog
          className={"flex flex-col justify-center"}
            sx={{
              opacity: 0,
              transition: `opacity 300ms`,
              ...{
                entering: { opacity: 1 },
                entered: { opacity: 1 },
              }[state],
            }}
          >
            <h3 className="text-center text-[1.3rem] font-semibold text-primary">¡Felicidades!</h3>
            <span className="inline-block text-grayLight text-center">
              Felicidades, tu articulo ha sido publicado, puedes leerlo de
              inmediado
            </span>
            <div className="flex justify-center">
            <Link
              className="border-2 max-w-[8rem] text-center border-primary rounded-full text-primary font-normal text-[1rem] py-1 px-3 hover:bg-primary hover:text-white transform duration-150"
              to={`/article/${articleId}`}
            >
              ver articulo
            </Link>

            </div>
          </ModalDialog>
        </Modal>
      )}
    </Transition>
  );
}

FadeModalDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  articleId: PropTypes.string.isRequired,
};
