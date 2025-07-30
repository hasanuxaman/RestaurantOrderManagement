# 🍽️ Restaurant Order Management System

A full-stack **Microservices-Based Restaurant Order Management** system with backend in `.NET Core Web API`, database using **SQL Server**, **EF Core + Dapper** for data access, and a modern **React.js** frontend.

---

## 🧩 Technologies Used

### ✅ Backend
- .NET Core 8 Web API
- Microservices Architecture
- Entity Framework Core (EF Core)
- Dapper (for performance-critical queries)
- API Gateway: Ocelot
- JWT Authentication (optional)
- RESTful API design

### ✅ Frontend
- React.js
- React Router
- Axios (for API calls)
- Tailwind CSS or Bootstrap (optional)

### ✅ Database
- SQL Server
- Separate schemas for services (optional)
- Shared ConnectionString via config

---

## 🧱 Microservices Structure

RestaurantOrderManagement/
│
├── ApiGateway/
│ └── ocelot.json, Program.cs, Startup.cs
│
├── MenuService.Api/
├── OrderService.Api/
├── TableService.Api/
├── CustomerService.Api/
├── InventoryService.Api/
├── PaymentService.Api/
│
├── Shared/
│ └── DapperContext, Models, DTOs, Utilities
│
└── Restaurant.UI/ // React Frontend


---

## 🔧 Prerequisites

- Visual Studio 2022 or VS Code
- .NET 8 SDK 
- SQL Server
- Node.js + npm
- Postman (for testing APIs)

---

## 🏗️ Getting Started

### 📌 1. Clone the Repository

git clone https://github.com/hasanuxaman/RestaurantOrderManagement.git

## 📌 2. Database Setup
 -Run the SQL scripts in /DatabaseScripts to create tables and seed data.

- Add-Migration InitialCreate -Context AppDbContext

- Update-Database -Context AppDbContext

Ensure SQL Server is running.

## 📌 3. Backend Setup
Update appsettings.json in each microservice to point to your SQL Server:

"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=RestaurantOrderManagementDB;Trusted_Connection=True;"
}
Open solution in Visual Studio

Run all APIs independently or as part of a single solution

## 📌 4. Run API Gateway

dotnet run --project ApiGateway
## 📌 5. React Frontend

npm install
npm Run Dev
### 🚀 Features
✅ Add/Edit/Delete Menu Items

✅ Place Customer Orders

✅ Track Table Availability

✅ Manage Inventory

✅ Process Payments

✅ Central API Gateway Routing

✅ React UI Integration

# 🔐 Optional Features (Advanced)
JWT Auth Integration

Role-based access

Docker containerization

CI/CD integration (GitHub Actions)

# 📁 Folder Structure Highlights
Shared/: Common code across services

MenuService.Api: Menu CRUD

OrderService.Api: Customer Orders

TableService.Api: Table data

CustomerService.Api: Customer info

InventoryService.Api: Inventory & Stock

PaymentService.Api: Payment Status

ApiGateway/: Ocelot API Gateway

Restaurant.UI/: React-based Frontend

### 🧪 Testing
Use Postman to test API endpoints individually

Swagger UI available at:

http://localhost:{port}/swagger

### 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first.

## 📜 License
MIT License

## 🙋‍♂️ Author
Md Hasanuzzaman Rony

📧 hasanuxaman.rony@gmail.com
🌐 GitHub https://github.com/hasanuxaman
🌍 Bangladesh

