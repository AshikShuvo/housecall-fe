# House call FE


## Introduction
Basic CRUD operation created using dummy rest api provided by crudcrud platform. [crudcrud](https://crudcrud.com/) 

---

## Setup Instructions

### Prerequisites
- Node version 18.18.0^ <br>
- npm version 10.8.0^

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/AshikShuvo/housecall-fe.git
    ```
2. Navigate to the project directory:
    ```bash
    cd housecall-fe
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Run the application:
    ```bash
    npm run dev
    ```

### Environment Variables
`.env` configurations:
```plaintext
# Example
VITE_API_BASEURL= https://crudcrud.com/api/
VITE_API_KEY= <your crudcrud generated unique id>

don't change the value of `VITE_API_BASEURL` 
```
## assumptions or decisions
- I have used [sakai dashboard](https://github.com/primefaces/sakai-vue) template and [prime vue](https://primevue.org/) as component library.
- Could not export baby face, old face and unicorn icon from figma. used brand icon instead of them. 

## Completed bonus challenges
- State Management used pinia <br>
- Implemented comprehensive error handling for API calls and user interactions.<br>
- Added client-side validation for all forms (e.g., age, name etc) used [vee-validate](https://vee-validate.logaretm.com/v4/) and yup for validation schema

## Challenges and solution
- managed loading state by the beautiful collaboration of pinia store and axios interceptor by composable
- mange pagination and sorting used pinia state
- manage modals by individual route.
