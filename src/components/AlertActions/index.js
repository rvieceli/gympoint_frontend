import Swal from 'sweetalert2';

async function save({ call, success }) {
  try {
    await call();

    Swal.fire({
      backdrop: false,
      allowOutsideClick: false,
      showConfirmButton: true,
      icon: 'success',
      title: 'Sucesso!',
      timer: 2000,
      html: `O registro foi salvo com sucesso.`,
    }).then(() => {
      success();
    });
  } catch (err) {
    console.tron.log(err.response);
    Swal.fire({
      backdrop: false,
      allowOutsideClick: false,
      type: 'error',
      icon: 'error',
      title: err.response.data.error,
      html: false,
    });
  }
}

function destroy(call, success) {
  Swal.fire({
    backdrop: false,
    allowOutsideClick: false,
    title: 'Você tem certeza?',
    text: 'Não será possível reverter isso!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#4d85ee',
    cancelButtonColor: '#ee4d64',
    confirmButtonText: 'Sim, exclua!',
    cancelButtonText: 'Não',
  }).then(async ({ value }) => {
    if (value) {
      try {
        await call();

        Swal.fire({
          backdrop: false,
          allowOutsideClick: false,
          showConfirmButton: true,
          icon: 'success',
          title: 'Excluído!',
          timer: 1500,
          html: 'O registro foi excluído com sucesso.',
        });

        success();
      } catch (err) {
        Swal.fire({
          backdrop: false,
          allowOutsideClick: false,
          type: 'error',
          icon: 'error',
          title: err.response.data.error,
          html: false,
        });
      }
    }
  });
}

export default { save, destroy };
