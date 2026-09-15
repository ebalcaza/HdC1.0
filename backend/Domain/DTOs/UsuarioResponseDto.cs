namespace backend.Domain.DTOs;

public class UsuarioResponseDto
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public int Rol { get; set; }
}