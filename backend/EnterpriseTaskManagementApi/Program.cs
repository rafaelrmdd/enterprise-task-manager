using EnterpriseTaskManagementApi.Context;
using EnterpriseTaskManagementApi.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EnterpriseTaskManagementContext>(options =>
    options.UseNpgsql("Server=localhost;Port=5433;Database=TaskManagementDB;User Id=postgres;Password=1234;")
);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

builder.Services.AddScoped<ITasksService, TasksService>();
builder.Services.AddScoped<IProjectsService, ProjectsService>();
builder.Services.AddScoped<IMembersService, MembersService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.DefaultModelsExpandDepth(-1);
    });
}

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

//to initialize, type this on console = dotnet watch -lp https
app.Run();