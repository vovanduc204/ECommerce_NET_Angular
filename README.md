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

dotnet new classlib -o Infrastructure

dotnet sln add Core

dotnet sln add Infrastructure

cd API -> dotnet add reference ../Infrastructure

cd Infrastructure -> dotnet add reference ../Core

drop db:

cd non-stop

dotnet ef database drop -p Infrastructure -s API

drop migration:

dotnet ef migrations remove -p Infrastructure -s API

add migration:

dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations

dotnet ef migrations remove -p Infrastructure -s API

dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations
