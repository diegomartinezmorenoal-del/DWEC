class ValidacionError extends Error {
  constructor(mensaje, codigoError) {
    super(mensaje);
    this.name = "ValidacionError";
    this.codigoError = codigoError;
  }
}

function procesarUsuario(usuario) {
  if (!usuario.nombre) {
    throw new ValidacionError("El nombre de usuario es obligatorio.", 400);
  }
}

try {
  procesarUsuario({});
} catch (error) {
  if (error instanceof ValidacionError) {
    console.error(`[Código ${error.codigoError}] ${error.name}: ${error.message}`);
  }
}