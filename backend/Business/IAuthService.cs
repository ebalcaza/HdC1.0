using backend.Domain;
using backend.Domain.DTOs;

namespace backend.Business;

public interface IAuthService
{
    Task<UsuarioResponseDto?> LoginAsync(LoginRequestDto dto);
    Task<UsuarioResponseDto> RegistrarAsync(Usuario usuario);
}