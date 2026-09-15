namespace backend.Domain;

public class Usuario
{
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty; // <--- Agregar o modificar este campo
    public string Nombre { get; set; } = string.Empty;
    public int Rol { get; set; } // Número (ej: 1 = Admin, 2 = Usuario)
    public string Contrasena { get; set; } = string.Empty; // Hash de la contraseña
}