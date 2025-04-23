# API Documentation:

- Get High Heart Rate Readings:
  GET /heart-rate/high

- Get Analytics:
  GET /heart-rate/analytics?patientId={ID}&from={startDate}&to={endDate}

- Get patientID:
  GET /patients/{ID}

- Get patients data request Count
  GET /patients
  - In order the call more clear, the next step would be to change the route path to something like '/patients/count'. It is curretly an issue, as it causes ambiguity with the GET /patients/{ID} path which is also expecting a string as param.  
    Some ideas: Using a seperate controller, or making ID be a number(if spec is ok with that..)

## Thought process:

# Data Structure

I began by reviewing the shape of the mock data and defined clear TypeScript interfaces to reflect that. This helped ensure type safety and made the logic easier to follow across services.

# Modular Design for Maintainability

I kept the code modular by separating patients and heart-rate logic into their own modules. This makes it easier to scale the app or add features later without touching unrelated code.

# Simple Logic in Controllers

I made sure the controllers only handled routing and delegating work to services. All the logic (filtering, calculating, tracking) lives in the services, keeping things clean and testable.

# Stateless Analytics

For the analytics endpoint, I kept it stateless and based on parameters (from, to) rather than pre-saving results. It’s flexible and avoids unnecessary complexity for a small dataset. For future Production level,, it might be worth precomputing analytics and caching...

# Scalability Considerations

While the current solution uses in-memory data for simplicity, I made sure the code is structured in a way that would make it easy to swap in a real database or Redis with minimal changes.

# Lean on NestJS Conventions

I stuck with NestJS patterns like using services and dependency injection, even in a small app. That helps keep things consistent and prepares the project for potential future expansion.

## Future steps (Production level):

- Tests coverage - I would write tests in the controller.spec.ts files that focus on the key features— analytics, filtering high heart rate readings, and tracking request counts, to ensure that the core logic behaves as expected.
- Extensive error handling - Using Exception Filters,
- Authentication and Authorization would need to be taken care of
- Replace in-memory mock data with a database (e.g., SQLite or PostgreSQL using TypeORM/Prisma).
