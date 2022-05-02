# ECommerce_NET_Angular

mkdir non-stop
cd non-stop
dotnet new sln
dotnet new webapi -o API
dotnet sln add API
code .

cetificate: 
dotnet dev-certs https --clean
dotnet dev-certs https -t
Restart VS

run : dotnet run
https://localhost:5001/weatherforecast

install
Microsoft.EntityFrameworkCore.Sqlite version 5.0.8

dotnet restore

dotnet tool list -g

dotnet tool install --global dotnet-ef --version 5.0.8

dotnet tool update --global dotnet-ef --version 5.0.8

install
Microsoft.EntityFrameworkCore.Design 

dotnet ef migrations add InitialCreate -o Data/Migrations

dotnet new classlib -o Core
