
SET foreign_key_checks = 0;

DROP TABLE IF EXISTS pizzas;
DROP TABLE IF EXISTS ingredients;

SET foreign_key_checks = 1;

CREATE TABLE `pizzas` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`pub_price` DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ingredients` (
	`id` int NOT NULL AUTO_INCREMENT,
	`pizzas_id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`price` DECIMAL(10,2) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `ingredients` ADD CONSTRAINT `ingredients_fk0` FOREIGN KEY (`pizzas_id`) REFERENCES `pizzas`(`id`);
-- SAMPLE DATA 


INSERT INTO `pizzas`(name, pub_price)
 VALUES ('Fun Pizza', 7.50),
		('Super Mushroom Pizza', 5.25),
		('Exoclick Special Pizza', 5.25),
		('Vegan Pizza', 5.25),
		('Fun Pizza', 3.00),
		('Luxury Pizza', 7.25);

INSERT INTO `ingredients`(pizzas_id, name, price)
 VALUES (1, 'Sliced mushrooms', 0.50),
		(1, 'Tomatoes', 0.50),
		(1, 'Feta cheese', 1.00),
		(1, 'Sausage', 1.00),
		(1, 'Mozzarella cheese', 0.50),
		(1, 'Onions', 0.50),
		(1, 'Oregano', 1.00),
		(2, 'Sliced mushrooms', 0.50),
		(2, 'Tomatoes', 0.50),
		(2, 'Mozzarella cheese', 0.50),
		(2, 'Oregano', 1.00),
		(2, 'Bacon', 0.50),
		(3, 'Onions', 0.50),
		(3, 'Pineapple', 0.50),
		(3, 'Ham', 0.50),
		(3, 'Sausage', 0.50),
		(3, 'Spinach', 0.50),
		(3, 'Artichoke', 0.50),
		(3, 'Chicken', 0.50),
		(4, 'Peppers', 0.50),
		(4, 'Mushrooms', 0.50),
		(4, 'Tomatoes', 0.50),
		(4, 'Olives', 0.50),
		(4, 'Spinach', 0.50),
		(4, 'Oregano', 1.00),
		(5, 'Cheese', 0.50),
		(5, 'Pepperoni', 0.50),
		(5, 'Bacon', 0.50),
		(5, 'Onions', 0.50),
		(6, 'Tuna', 3.0),
		(6, 'Peppers', 0.50),
		(6, 'Mushrooms', 0.50),
		(6, 'Tomatoes', 0.50),
		(6, 'Olives', 0.50);
