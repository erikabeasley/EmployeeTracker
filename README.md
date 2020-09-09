# EmployeeTracker
A solution for managing a company's employees using node, inquirer, and MySQL.

## Content
Department:
- id - INT PRIMARY KEY
- name - VARCHAR(30) to hold department name

Role:
- id - INT PRIMARY KEY
- title -  VARCHAR(30) to hold role title
- salary -  DECIMAL to hold role salary
- department_id -  INT to hold reference to department role belongs to

Employee:
- id - INT PRIMARY KEY
- first_name - VARCHAR(30) to hold employee first name
- last_name - VARCHAR(30) to hold employee last name
- role_id - INT to hold reference to role employee has
- manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

## User Story 

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

## Deployment
https://erikabeasley.github.io/EmployeeTracker/

## Video Of Functionality
[![Watch the video](/assets/Capture.PNG)](https://www.youtube.com/watch?v=s-GTWhQBSow)