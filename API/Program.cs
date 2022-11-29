using API.Extensions;
using API.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// application extension method
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// if(builder.Environment.IsDevelopment()) 
// {
//     app.UseDeveloperExceptionPage();
// }
app.UseMiddleware<ExceptionMiddleware>();
// Configure the HTTP request pipeline

app.UseCors(policy => {
    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();



app.Run();
