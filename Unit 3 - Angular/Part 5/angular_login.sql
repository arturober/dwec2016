-- phpMyAdmin SQL Dump
-- version 4.6.4deb1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-12-2016 a las 12:37:19
-- Versión del servidor: 5.6.30-1
-- Versión de PHP: 7.0.10-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `angular_login`
--
CREATE DATABASE IF NOT EXISTS `angular_login` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `angular_login`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `registrationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `avatar` varchar(200) NOT NULL,
  `idGoogle` varchar(100) DEFAULT NULL,
  `idFacebook` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `registrationDate`, `name`, `email`, `password`, `avatar`, `idGoogle`, `idFacebook`) VALUES
(1, '2016-12-21 13:33:11', 'Mary', 'mary@email.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'profile.jpg', NULL, NULL),
(3, '2016-12-21 13:36:43', 'asdf', 'asdf@email.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'profile.jpg', NULL, NULL),
(5, '2016-12-21 13:40:09', 'wert', 'wwertryer@email.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'bdb4fb80ab7a0a092d5263d74d53c50ef1764bc7.jpg', NULL, NULL),
(6, '2016-12-21 23:50:36', 'Arturo Bernal', 'arturober@gmail.com', NULL, '5e1e69650b3b1cf6f35182efc711bcc6169892516.jpg', '115091300894899273352', NULL),
(7, '2016-12-21 23:59:22', 'Arturo Bernal', 'arturober@hotmail.com', NULL, '12b40263811aface7090e4feed437450f4ffc9277.jpg', NULL, '10155073877414367'),
(8, '2016-12-22 00:17:28', 'Prueba', 'prueba@prueba.es', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '34b28371ece0229b189a102bca6ee98a1443b917.jpg', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
