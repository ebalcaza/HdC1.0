using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Domain;
using backend.Domain.DTOs;

namespace backend.Business;

public class AuthService : IAuthService
{
    private readonly AppDbContext _context;

    public AuthService(AppDbContext context)
    {
        _context = context;
    }

public async Task<UsuarioResponseDto?> LoginAsync(LoginRequestDto dto)
{
    // Buscar por Email en lugar de Nombre
    var usuario = await _context.Usuarios
        .FirstOrDefaultAsync(u => u.Email == dto.Email);

    if (usuario == null) return null;

    if (usuario.Contrasena != dto.Contrasena) return null;

    // Retorna los datos con el nombre incluido
    return new UsuarioResponseDto
    {
        Id = usuario.Id,
        Nombre = usuario.Nombre,
        Rol = usuario.Rol
    };
}
    public async Task<UsuarioResponseDto> RegistrarAsync(Usuario usuario)
    {
        _context.Usuarios.Add(usuario);
        await _context.SaveChangesAsync();

        return new UsuarioResponseDto
        {
            Id = usuario.Id,
            Nombre = usuario.Nombre,
            Rol = usuario.Rol
        };
    }
}