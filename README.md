
# Microservices Backend with Nginx API Gateway

## Services
- Users Service (Port 3001)
- Orders Service (Port 3002)
- Nginx API Gateway (Port 8080)

## Run Locally

docker compose up --build

## Test
http://localhost:8080/health
http://localhost:8080/api/users/users
http://localhost:8080/api/orders/orders
