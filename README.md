# CustomerApp

**CustomerApp** is a small project developed as part of an Angular coding challenge. The goal was to implement a lightweight application with two main pages:

- **Customer List**
- **Customer Profile**

This project demonstrates core Angular concepts and best practices.

---

## Features & Technologies

### Angular Concepts Implemented

1. **Routing & Lazy-Loaded Modules**
    - Configured in `app.routes.ts`

2. **Angular Material**
    - Used for UI components: tables, inputs, cards, buttons, etc.
    - Custom styles applied in `styles.scss` and `custom-list.component.scss` for visual refinements

3. **Reactive Forms with Validation**
    - Implemented in `customer-profile.component.ts`
    - Includes form fields for **phone** and **email**, with built-in validation and error messages

4. **Services & Dependency Injection**
    - `customer.service.ts` handles data fetching (mock data in this case)
    - Service is injected into both core components

5. **RxJS for Reactive Patterns**
    - Uses `timer()` to simulate API behavior with mocked data
    - `customer-list.component.ts` Supports paging, filtering, and sorting using RxJS operators

---

## Additional Notes

- **2-Way Binding**: Not used since I ended up using reactive forms where 2-way data binding could make sense.
- **Design**: Attempt for a clean and simple UI with attention to usability and basic responsiveness.
- **Extras**:
    - Two custom **pipes** to display formatted data
    - A **directive** for modern-style loading animations
    - Basic **unit test** for the Customer Profile page

---

## Future Improvements

If more time were available, the following enhancements would be considered:

-  More comprehensive test coverage
-  Error handling during data fetching
-  Improved mobile responsiveness (e.g. better table layout on small screens)
-  Placeholder template for empty data tables


