-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2019 at 01:15 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `www`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_level`
--

CREATE TABLE `admin_level` (
  `id` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(128) NOT NULL,
  `admin_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `fullname` varchar(20) DEFAULT NULL,
  `password` varchar(128) DEFAULT NULL,
  `role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `password`, `role`) VALUES
(202, 'asd', 'asd', '$2a$10$i5hFab4lxwbKHIMOv7sazOMajphpCFAJP5LjPm3mDkX3tp.N/48vq', 1),
(203, 'q', 'q', '$2a$10$2SqvyWk6RYY5N5Yd3DUTLeG1ro0Zpt0.hitQ0pjm.URPCr6yfpyFe', 1),
(204, 'e', 'e', '$2a$10$qENl0962oLQTSquHlMIVEeOHCET04IE.1rcUwSHKJjEpTSZTpPqRK', 1),
(205, 'f', 'f', '$2a$10$Tb21JenBy5al4.jZN6ZWweokX2jJgCKvoNUvn6MhT6nRk9MEhpL5O', 1),
(206, 'df', 'df', '$2a$10$qnI8mPl2mATnlkuChlbU0.E9vFp5At.zWs.2t0EujYGBCOwlRo2bG', 1),
(207, 'zxc', 'zxc', '$2a$10$yB7jj1mIcrWzOM3X6i.4A.efcriC9CFiW24iK8TzB2wLwleJA9n5e', 1),
(208, 'er', 'er', '$2a$10$J6SASZahI6LQbKTgkrbhtekht9yN9EDHaaoX9hmaSvpvKFvgeX89C', 1),
(209, 't', 't', '$2a$10$Csjw7i8BccnpK4HoaSurmu0dwCbytZEEkoSrBoLBRmgVG.0mf/x3e', 1),
(210, 'j', 'j', '$2a$10$NnSgjFf/jJYBOj0ufyH5FO4z4.14dGl6PZNtTgkQYMUH6vzyZLU.i', 1),
(211, 'ty', 'ty', '$2a$10$mddqrYhnvmFZKa93CiIC7O1NQVb8mKuqOOiU7/3AiUAfGBx0zsgfG', 1),
(212, 'b', 'b', '$2a$10$X1XAuO1GfKLAJtYlW7RaqOWbAtM0VtfFVkgyvHwfOeqJXEthiQNHm', 1),
(213, 'u', 'u', '$2a$10$K/GGbNqd0PNkp6Jhvt68IOZusgNOy1EyJRXLHCuaMrpBuFZ1KsHVu', 1),
(214, '5', '5', '$2a$10$ktIlv5jMFPQjZIDdxDrHVuc6r.pAGAYbkxitq7J4LeHBuAVH3ro8a', 1),
(215, 'h', 'h', '$2a$10$guxYojBvwCSodN1YNlwRYujrY460ktSebL7aQ3U0vM5vH88z7s0im', 1),
(216, 'v', 'v', '$2a$10$UiwOaJd1qIz5nc6V.doXl.T6Iil/wpfhtH2U7d80qCU3BBI2v9L/K', 1),
(217, 'z', 'z', '$2a$10$NFknF10E5/PPEIP/x51PHurjBBSwzEI/v2MJGebpDgfVM6QA2lxC.', 1),
(218, '1', '1', '$2a$10$AvAXn0DICsNq.ioWWJfOC..PIYjVv2SMJc6JtZCkvpEjNjFun6saq', 1),
(219, 'tr', 'tr', '$2a$10$zV21PHXZr9IimxtISzofDe7hRD4JcYnFE6oMXq4W.cpISe0c3g73W', 1),
(220, 'vc', 'vc', '$2a$10$BV2nKxF0vvZwb5Z4akRR8uq9hRvEI.KLSBWzY1wlI6GwOjkLR/7.q', 1),
(221, 'bvb', 'bvb', '$2a$10$Apg68.4e6YF1mrnFlAM5bOwMQ.jUN.Eo7uGQlHp85Xt4/LYoinpou', 1),
(222, 'sd', 'sd', '$2a$10$LGCZ8/YKcLCMZ3A/D77OSutP9RI9N0AX/kjiztNlR8E2TUfis8C9S', 1),
(223, '123', '123', '$2a$10$KK.KXz7CVOGgzvIsvH6uWe6C3kaMdvVsBXs2JEdEQfLHL21v9N4Aq', 1),
(224, '321', '321', '$2a$10$K8sbGhrSLis6Our1eL/Xx.RlWPyjK3bb35uHei5ASeJDQMGBMG84O', 1),
(225, '2', '2', '$2a$10$DKZ8b35sN.rFMU9NmP95HOoBj8SHOXJV2c27e5J4VLnksskUsZbIS', 1),
(226, '123', '123', '$2a$10$BqR9ygbG7WgPre72dGN3JeWumOQdTnyFI8M.wBeKlO8awHBsbeWlu', 1),
(227, '4', '4', '$2a$10$qtNm4dVcnwUqqFOqXB0ofuX4hBiWQT6wr7evZoJaISdByLSvTQ2XO', 1),
(228, '0', '0', '$2a$10$yhWAmvNEz4faGVqWSXa9ye/zsMwzA5NHQgUuMRUwVuHtjv/7wQjJO', 1),
(229, '7', '7', '$2a$10$OXvKIs6gSZS1isyaKQTyzu5bPSqZmWeTGCK7N2wH5YWkCN.HrwfH2', 1),
(230, 'uy', 'uy', '$2a$10$aOFmX9zsHFi1bQmSoANYn.Qexgd2mWQ3rmocJpSTxPyxVWasqeD36', 1),
(231, 'ert', 'wer', '$2a$10$MOTGTgMj2Jwo8znij1UHbu3e80ysdWo0fDmk7zB0S.cHUHgAQA4Yq', 1),
(232, 'poop', 'lol', '$2a$10$/8VHPa9vqmUQ2dK8pE/WyeLXb54VuCxw20R8.FKGYaw8OR.hWVGgm', 1),
(233, 'atr', 'atr', '$2a$10$9PfATiKIhXMs3OtydWnpY.dMVbKo7krX3SY6xc79q0WOPxmEu8AjO', 1),
(234, 'qwer', 'qwer', '$2a$10$l.508VUas55rjj3xdNnBSOYjzqZn4UTTdw/HiKFIsShBWg/J85SK.', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_level`
--
ALTER TABLE `admin_level`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`),
  ADD KEY `admin_level` (`admin_level`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=235;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_level`
--
ALTER TABLE `admin_level`
  ADD CONSTRAINT `admin_level_ibfk_1` FOREIGN KEY (`id`) REFERENCES `role` (`admin_level`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`role`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
