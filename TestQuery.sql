--select * from Users ;
 
 -- BEST PRACTICES.

--Use single-line (–) comment markers.
-- SELECT department_name
--, location
--FROM departments
----WHERE location ='Monterrey';
--SELECT customer_name
--FROM customers
--WHERE (customer_name IN ('Luke', 'Ralph' , 'Winder%')
----OR customer_id > 5250
--AND country='USA'
--ORDER BY customer_name;

--INSERT INTO dbo.Users ( Name, Email, Department) values( 'Luis Castilleja', 'castilleja2800@gmail.com', 'development');
--select Name from dbo.Users;

--SELECT first_name, last_name, gender FROM patients where gender = 'M';
--SELECT first_name, last_name, gender FROM patients where allergies IS null;
-- Contenga C
--SELECT first_name FROM patients where first_name like '%C%';
-- Empiece con C
--SELECT first_name FROM patients where first_name like '%C%';

-- Peso entre 100 y 120
--SELECT
--  first_name,
--  last_name
--FROM patients
--WHERE weight BETWEEN 100 AND 120;

--Show all of the patients grouped into weight groups.
--Show the total amount of patients in each weight group.
--Order the list by the weight group decending.

--For example, if they weight 100 to 109 they are placed in the 100 weight group, 110-119 = 110 weight group, etc.
--SELECT
--  count(patient_id),
--  weight - weight % 10 AS weight_group
--FROM patients
--GROUP BY weight_group
--ORDER BY weight_group DESC




