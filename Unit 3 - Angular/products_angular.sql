-- phpMyAdmin SQL Dump
-- version 4.6.4deb1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-12-2016 a las 12:14:14
-- Versión del servidor: 5.6.30-1
-- Versión de PHP: 7.0.10-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `products_angular`
--
CREATE DATABASE IF NOT EXISTS `products_angular` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `products_angular`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` double NOT NULL,
  `available` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `imageUrl` varchar(200) NOT NULL,
  `rating` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `description`, `price`, `available`, `imageUrl`, `rating`) VALUES
(1, 'DDR3 1600 8GB 2x4GB ', 39.5, '2016-10-06 22:00:00', 'af97a28e5f7376fdb5cde30d90ad08cf9ae826ae.jpg', 5),
(2, 'Toshiba SSD Q300 480GB', 119, '2016-11-02 16:08:41', 'ssd.jpg', 3),
(3, 'Sony PS4 500GB', 249.95, '2016-11-14 20:15:23', 'ps4.jpg', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
