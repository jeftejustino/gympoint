import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Background, Container, Content, Actions } from './styles';

import Loading from '~/components/Loading';

export default function ModalConfirm({
  children,
  handleConfirm,
  handleCancel,
  show,
  loading,
}) {
  return (
    <>
      {show ? (
        <Modal>
          <Background />
          <Container>
            {loading ? (
              <Loading />
            ) : (
              <Content>
                <div>{children}</div>

                <Actions>
                  <button
                    className="cancel"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                  <button
                    className="confirm"
                    type="button"
                    onClick={handleConfirm}
                  >
                    Confirmar
                  </button>
                </Actions>
              </Content>
            )}
          </Container>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
}

ModalConfirm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  show: PropTypes.bool,
  loading: PropTypes.bool,
};

ModalConfirm.defaultProps = {
  show: false,
  loading: false,
};
