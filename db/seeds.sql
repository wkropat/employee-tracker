INSERT INTO departments (name)
VALUES ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title,department_id)
VALUES ("Salesperson",1),
        ("Lead Engineer",2),
        ("Software Engineer",2),
        ("Account Manager",3),
        ("Accountant",3),
        ("Legal team lead",4),
        ("Lawyer",4);

INSERT INTO employees (first_name,last_name,role_id)
VALUES ("Mike Chan"),
        ("Ashley Rodriguez"),
        ("Kevin Tupic"),
        ("Kumal Singh"),
        ("Malia Brown"),
        ("Sarah Lourde"),
        ("Tom Allen");