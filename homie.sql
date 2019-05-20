-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2019 at 05:57 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homie`
--

-- --------------------------------------------------------

--
-- Table structure for table `homestays`
--

CREATE TABLE `homestays` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `facilities` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_of_rooms` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `homestays`
--

INSERT INTO `homestays` (`id`, `id_user`, `name`, `location`, `address`, `facilities`, `number_of_rooms`, `created_at`, `updated_at`) VALUES
(1, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:25:34', '2019-05-13 02:25:34'),
(2, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:25:47', '2019-05-13 02:25:47'),
(3, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:28:34', '2019-05-13 02:28:34'),
(4, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:30:45', '2019-05-13 02:30:45'),
(5, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:33:15', '2019-05-13 02:33:15'),
(6, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:36:21', '2019-05-13 02:36:21'),
(7, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:40:37', '2019-05-13 02:40:37'),
(8, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:41:25', '2019-05-13 02:41:25'),
(9, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 02:43:30', '2019-05-13 02:43:30'),
(10, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 12:00:55', '2019-05-13 12:00:55'),
(11, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-13 19:01:54', '2019-05-13 19:01:54'),
(12, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 05:25:29', '2019-05-14 05:25:29'),
(13, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 05:25:46', '2019-05-14 05:25:46'),
(14, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 06:05:03', '2019-05-14 06:05:03'),
(15, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 06:05:22', '2019-05-14 06:05:22'),
(16, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 06:09:02', '2019-05-14 06:09:02'),
(17, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 06:23:18', '2019-05-14 06:23:18'),
(18, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 06:31:49', '2019-05-14 06:31:49'),
(19, 1, 'test 1', 'loc 1', 'address 1', 'fac 1', 6, '2019-05-14 06:31:59', '2019-05-14 06:31:59');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(12, '2014_10_12_000000_create_users_table', 1),
(13, '2014_10_12_100000_create_password_resets_table', 1),
(14, '2019_05_11_092502_create_homestays_table', 1),
(15, '2019_05_11_092612_create_rooms_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_homestay` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `room_availability` tinyint(1) NOT NULL,
  `photos` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `id_homestay`, `title`, `description`, `price`, `room_availability`, `photos`, `created_at`, `updated_at`) VALUES
(1, 1, 'test room 1', 'test desc room 1', 100, 1, 'test photos path 1', '2019-05-14 06:09:02', '2019-05-14 06:09:02'),
(2, 1, 'test room 1', 'test desc room 1', 100, 1, 'test photos path 1', '2019-05-14 06:23:18', '2019-05-14 06:23:18'),
(3, 1, 'test room 1', 'test desc room 1', 100, 1, 'test photos path 1', '2019-05-14 06:31:49', '2019-05-14 06:31:49'),
(4, 1, 'test room 1', 'test desc room 1', 100, 1, 'test photos path 1', '2019-05-14 06:31:59', '2019-05-14 06:31:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `homestays`
--
ALTER TABLE `homestays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `homestays`
--
ALTER TABLE `homestays`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
