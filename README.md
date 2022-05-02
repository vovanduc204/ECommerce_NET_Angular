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