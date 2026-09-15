using Microsoft.AspNetCore.Mvc;
using backend.Business;
using backend.Domain;
using backend.Domain.DTOs;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

[HttpPost("login")]
public async Task<IActionResult> Login([FromBody] LoginRequestDto dto)
{
    var resultado = await _authService.LoginAsync(dto);

    if (resultado == null)
    {
        // Retorna un objeto JSON explícito para evitar cuerpo vacío
        return Unauthorized(new { mensaje = "Email o contraseña incorrectos" });
    }

    // Devuelve UsuarioResponseDto (que incluye Nombre, Id y Rol)
    return Ok(resultado);
}

    [HttpPost("registrar")]
    public async Task<IActionResult> Registrar([FromBody] Usuario usuario)
    {
        var nuevoUsuario = await _authService.RegistrarAsync(usuario);
        return Ok(nuevoUsuario);
    }
}