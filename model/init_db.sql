
SET foreign_key_checks = 0;

DROP TABLE IF EXISTS pizzas;
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS ingredients_by_pizza;

SET foreign_key_checks = 1;

CREATE TABLE `pizzas` (
	`id` int NOT NULL AUTO_INCREMENT,
	`image` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`pub_price` DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ingredients_by_pizza` (
	`id` int NOT NULL AUTO_INCREMENT,
	`pizza_id` int NOT NULL,
	`ingredient_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ingredients` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`price` DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `ingredients_by_pizza` ADD CONSTRAINT `ingredients_by_pizza_fk0` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas`(`id`);
ALTER TABLE `ingredients_by_pizza` ADD CONSTRAINT `ingredients_by_pizza_fk1` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients`(`id`);
-- SAMPLE DATA 


INSERT INTO `pizzas`(image, name, pub_price)
 VALUES ('https://images.unsplash.com/photo-1642829618523-ec3daa857242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1biUyMHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'Fun Pizza', 7.50),
		('https://images.unsplash.com/photo-1530632789071-8543f47edb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaHJvb21zJTIwcGl6emF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'Super Mushroom Pizza', 4.50),
		('https://images.unsplash.com/photo-1669717879542-65eb286d1b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BlY2lhbCUyMHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60','Exoclick Special Pizza', 6.00),
		('https://plus.unsplash.com/premium_photo-1675451537385-e76cd7e78087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60','Vegan Pizza', 5.25),
		('https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWNpYWwlMjBwaXp6YXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60','Classic Pizza', 3.00),
		('https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9ybyUyMHBpenphfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60','Luxury Pizza', 7.50);

INSERT INTO `ingredients`(name, price)
 VALUES ('Sliced mushrooms', 0.50),
		('Tomatoes', 0.50),
		('Feta cheese', 1.00),
		('Sausage', 1.00),
		('Mozzarella cheese', 0.50),
		('Onions', 0.50),
		('Oregano', 1.00),
		('Bacon', 0.50),
		('Pineapple', 0.50),
		('Spinach', 0.50),
		('Artichoke', 0.50),
		('Chicken', 0.50),
		('Peppers', 0.50),
		('Olives', 0.50),
		('Cheese', 0.50),
		('Pepperoni', 0.50),
		('Tuna', 3.00);

INSERT INTO `ingredients_by_pizza`(pizza_id, ingredient_id)
VALUES  (1, 1),
		(1, 2),
		(1, 3),
		(1, 4),
		(1, 5),
		(1, 6),
		(1, 7),
		(2, 1),
		(2, 2),
		(2, 5),
		(2, 7),
		(2, 8),
		(3, 6),
		(3, 9),
		(3, 8),
		(3, 4),
		(3, 10),
		(3, 11),
		(3, 12),
		(4, 13),
		(4, 1),
		(4, 2),
		(4, 11),
		(4, 10),
		(4, 7),
		(5, 15),
		(5, 16),
		(5, 8),
		(5, 6),
		(6, 17),
		(6, 13),
		(6, 1),
		(6, 2),
		(6, 14);


	