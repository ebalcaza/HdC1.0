using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Business;

var builder = WebApplication.CreateBuilder(args);

// 1. DEFINIR NOMBRE DE LA POLÍTICA CORS
var misReglasCors = "ReglasCors";

// 2. CONFIGURAR EL SERVICIO CORS (Permitir llamadas desde React)
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: misReglasCors, builder =>
    {
        builder.WithOrigins("http://localhost:5173") // URL de tu React
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

builder.Services.AddControllers();

// Configuración de DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Inyección de dependencias
builder.Services.AddScoped<IAuthService, AuthService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 3. ACTIVAR EL MIDDLEWARE DE CORS (¡DEBE IR ANTES DE UseAuthorization!)
app.UseCors(misReglasCors);

app.UseAuthorization();
app.MapControllers();

app.Run();