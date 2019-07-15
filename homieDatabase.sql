-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2019 at 12:59 AM
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
  `id` int(11) UNSIGNED NOT NULL,
  `user_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `facilities` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_of_rooms` int(11) NOT NULL,
  `photo1` varchar(125) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo2` varchar(125) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `homestays`
--

INSERT INTO `homestays` (`id`, `user_id`, `name`, `location`, `address`, `facilities`, `number_of_rooms`, `photo1`, `photo2`, `created_at`, `updated_at`) VALUES
(1, 1, 'Homestay_1 Edited', 'Bukit Raya', 'Jl. Bukit Raya no. 1, Kec. Bukit Raya, Kota Pekanbaru', 'Dapur, Wifi, AC', 10, '/images/evelyn-paris-96422-unsplash.jpg', '/images/evelyn-paris-96422-unsplash.jpg', NULL, '2019-07-03 11:36:42'),
(2, 2, 'Homestay_2', 'Rumbai', 'Jl. Rumbai no.1, Kec. Rumbai, Kota Pekanbaru', 'Wifi, Parkiran, Ruang Tamu, Dapur', 10, '/images/christian-koch-D_4R9CcYZOk-unsplash.jpg', NULL, NULL, NULL),
(3, 3, 'Homestay_3', 'Marpoyan Damai', 'Jl. Marpoyan Damai no. 1, Kec. Marpoyan Damai, Kota Pekanbaru', 'Wifi, AC,', 6, '/images/christopher-harris-bJqeJxeyiJE-unsplash.jpg', NULL, NULL, NULL),
(4, 4, 'Homestay_4', 'Simpang Baru', 'Jl. Simpang Baru no.1, Kec. Simpang Baru, Kota Pekanbaru', 'AC, TV, Wifi, Dapur, Parkiran', 8, 'images/roya-ann-miller-_w-TB-ZTBg8-unsplash.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `homestays_facilities`
--

CREATE TABLE `homestays_facilities` (
  `id` int(11) NOT NULL,
  `homestay_id` int(11) NOT NULL,
  `facility` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_05_11_092502_create_homestays_table', 1),
(4, '2019_05_11_092612_create_rooms_table', 1),
(5, '2019_05_21_114513_create_orders_table', 1),
(6, '2019_05_21_114755_create_transactions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `room_id` int(11) NOT NULL,
  `homestay_id` int(11) NOT NULL,
  `room_number` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guest` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checkin_date` date NOT NULL,
  `duration` int(11) NOT NULL,
  `checkout_date` date NOT NULL,
  `price_total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `transaction_status` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bill_key` int(55) DEFAULT NULL,
  `biller_code` int(15) DEFAULT NULL,
  `pdf_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `approval_code` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_type` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `finish_redirect_url` varchar(125) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fraud_status` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gross_amount` int(11) DEFAULT NULL,
  `masked_card` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_number` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instruction_url` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_id` varchar(125) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_time` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_type` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `room_id`, `homestay_id`, `room_number`, `name`, `guest`, `email`, `phone_number`, `checkin_date`, `duration`, `checkout_date`, `price_total`, `created_at`, `updated_at`, `transaction_status`, `bill_key`, `biller_code`, `pdf_url`, `approval_code`, `bank`, `card_type`, `finish_redirect_url`, `fraud_status`, `gross_amount`, `masked_card`, `payment_type`, `bank_number`, `instruction_url`, `transaction_id`, `transaction_time`, `order_type`) VALUES
(16, 24, 1, 6, 'Habib', 'Habib', 'habib_yafi@ymail.com', '08123123123', '2019-06-14', 2, '2019-06-16', 0, '2019-06-14 02:43:49', '2019-06-14 02:43:49', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL),
(19, 21, 1, 3, 'Habib', 'Ardi', 'habib_yafi@ymail.com', '081312341234', '2019-06-15', 2, '2019-06-17', 200000, '2019-06-15 18:48:46', '2019-06-15 18:48:46', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL),
(20, 20, 1, 2, 'Heru', 'Apriadi', 'heruapr@gmail.com', '081312341234', '2019-06-15', 2, '2019-06-17', 200000, '2019-06-15 19:06:06', '2019-06-15 19:06:06', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL),
(21, 20, 1, 2, 'Razin', 'Khaban', 'razin.surya@gmail.com', '081312341234', '2019-06-15', 2, '2019-06-17', 200000, '2019-06-15 19:25:01', '2019-06-15 19:25:01', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL),
(22, 20, 1, 2, 'Shinta', 'Erincia', 'shinta_t@gmail.com', '081312341234', '2019-06-15', 2, '2019-06-17', 200000, '2019-06-15 19:31:17', '2019-06-15 19:31:17', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL),
(23, 20, 1, 2, 'Ana Kusuman Ardani', 'Ana Kusuma', 'ana.ka@gmail.com', '081312341234', '2019-06-15', 2, '2019-06-17', 200000, '2019-06-15 19:39:00', '2019-06-15 19:39:00', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL),
(24, 20, 1, 2, 'Nabilla Lubna', 'Nabilla Lubna', 'nabilla@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-15 20:22:24', '2019-06-16 01:01:34', 'used', 0, 0, '', '1560655390933', 'mandiri', 'credit', 'http://example.com?order_id=24&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '520955ee-d9ba-4f6c-acad-d8bcb815dd88', '2019-06-16 10:23:10', NULL),
(25, 28, 1, 10, 'rajin', 'pangkal pandai', '123@xxx.com', '14045', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-16 06:56:40', '2019-06-16 06:56:40', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 22, 1, 4, 'Aang', 'Muammar', 'amuammar@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-17 01:48:25', '2019-06-17 02:02:06', 'used', 0, 0, '', '1560655390933', 'mandiri', 'credit', 'http://example.com?order_id=24&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '520955ee-d9ba-4f6c-acad-d8bcb815dd88', '2019-06-16 10:23:10', NULL),
(27, 22, 1, 4, 'Zaki', 'Yudhoyono', 'zaki@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-17 01:52:55', '2019-06-17 02:01:44', 'used', 0, 0, '', '1560655390933', 'mandiri', 'credit', 'http://example.com?order_id=24&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '520955ee-d9ba-4f6c-acad-d8bcb815dd88', '2019-06-16 10:23:10', NULL),
(28, 20, 1, 2, 'heru', 'heru apr', 'heruapr@gmail.com', '081242921537', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-17 03:46:39', '2019-06-17 03:46:39', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 22, 1, 4, 'Loudy Fitria', 'Aspita', 'lf_aspita@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-18 02:03:48', '2019-06-18 02:03:48', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 23, 1, 5, 'Ilham Putra', 'Ilham', 'ilhamps@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-18 02:09:38', '2019-06-18 02:09:38', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 20, 1, 2, 'Danang Hadi', 'Danang Hadi', 'daanang@gmail.com', '081373221234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-18 02:13:07', '2019-06-19 01:26:21', 'used', 0, 0, '', '1560849226835', 'mandiri', 'credit', 'http://example.com?order_id=31&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'dadf5be1-35af-4fdd-bc35-c2be620fba94', '2019-06-18 16:13:46', NULL),
(32, 28, 1, 10, 'Hesti Handayani', 'Handayani', 'hestihandayani@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-18 02:15:22', '2019-06-18 02:15:22', NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, 23, 1, 5, 'Sabrina Nur', 'Lani', 'sabrina@gmail.com', '081312341234', '2019-06-16', 1, '2019-06-17', 100000, '2019-06-18 02:31:18', '2019-06-18 02:31:18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(34, 27, 1, 9, 'Razin Sayyidin', 'Khabban', 'razinsayd@gmail.com', '081312341234', '2019-06-18', 1, '2019-06-19', 100000, '2019-06-18 07:59:53', '2019-06-18 08:00:19', 'used', NULL, NULL, NULL, '1560870014220', 'mandiri', 'credit', 'http://example.com?order_id=34&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'd48f5195-e1eb-4044-b80d-715a106e7d14', '2019-06-18 22:00:13', NULL),
(35, 21, 1, 3, 'Tiara', 'Tiara', 'tiara@gmail.com', '081312341234', '2019-06-18', 1, '2019-06-19', 100000, '2019-06-18 08:03:15', '2019-06-18 08:03:34', 'used', NULL, NULL, NULL, '1560870212843', 'mandiri', 'credit', 'http://example.com?order_id=35&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'e3b92bd4-c9b9-4c1f-bd3f-b150078de10c', '2019-06-18 22:03:32', NULL),
(36, 19, 1, 1, 'Marzuki Ali', 'Marzuki', 'marz_ali@gmail.com', '081312341234', '2019-06-18', 1, '2019-06-19', 100000, '2019-06-18 18:28:39', '2019-06-18 18:28:39', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 19, 1, 1, 'Barbara', 'Barbara', 'barb@gmail.com', '081412341234', '2019-06-18', 1, '2019-06-19', 100000, '2019-06-18 18:31:35', '2019-06-19 01:25:59', 'used', NULL, NULL, NULL, '1560907925698', 'mandiri', 'credit', 'http://example.com?order_id=37&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'ab64a560-2a0c-4907-be06-2878a1e1d4bd', '2019-06-19 08:32:05', NULL),
(38, 19, 1, 1, 'Wahyu', 'Wahyu', 'wahyu@gmail.com', '081312341234', '2019-06-18', 1, '2019-06-19', 100000, '2019-06-18 19:44:48', '2019-06-19 01:26:11', 'used', NULL, NULL, NULL, '1560912307434', 'mandiri', 'credit', 'http://example.com?order_id=38&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'f1c45217-5f8b-484e-b157-50e445ea7fa9', '2019-06-19 09:45:07', NULL),
(39, 19, 1, 1, 'Manggala Rezka Perdana', 'Manggala', 'mrperdana@gmail.com', '081312341234', '2019-06-19', 1, '2019-06-20', 100000, '2019-06-18 19:58:41', '2019-06-19 01:16:29', 'used', NULL, NULL, NULL, '1560913158998', 'mandiri', 'credit', 'http://example.com?order_id=39&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'ddfc489e-7bb7-491a-9d81-901edfed4767', '2019-06-19 09:59:18', NULL),
(40, 21, 1, 3, 'Heru Apriadi', 'Apriadi', 'heruapr@gmail.com', '081312341234', '2019-06-19', 1, '2019-06-20', 100000, '2019-06-18 21:43:48', '2019-06-19 01:17:26', 'used', NULL, NULL, NULL, '1560919443630', 'mandiri', 'credit', 'http://example.com?order_id=40&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '2b03d278-286f-472d-ac13-c206a83125f7', '2019-06-19 11:44:03', NULL),
(41, 20, 1, 2, 'Ary Prayoga', 'Ary Prayoga', 'aryprayoga123@gmail.com', '081312341234', '2019-06-19', 1, '2019-06-20', 100000, '2019-06-18 22:01:37', '2019-06-19 01:16:53', 'used', NULL, NULL, NULL, '1560920515969', 'mandiri', 'credit', 'http://example.com?order_id=41&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'fb219e2a-fb4f-441b-aeb1-027c5500fa8a', '2019-06-19 12:01:55', NULL),
(42, 19, 1, 1, 'Atharillah Alifka', 'Alifka', 'atharillah@gmail.com', '081312341234', '2019-06-19', 1, '2019-06-20', 100000, '2019-06-19 01:19:31', '2019-06-19 01:34:49', 'used', NULL, NULL, NULL, '1560932398328', 'mandiri', 'credit', 'http://example.com?order_id=42&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '09fa1fe5-11f1-4f6a-8813-a45fe7a0b987', '2019-06-19 15:19:57', NULL),
(43, 19, 1, 1, 'Alfina Putri', 'Alfina Putri', 'alfina_p@gmail.com', '081312341234', '2019-06-19', 1, '2019-06-20', 100000, '2019-06-19 17:25:04', '2019-06-19 17:26:15', 'used', NULL, NULL, NULL, '1560990374340', 'mandiri', 'credit', 'http://example.com?order_id=43&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '19947f27-b42a-4ee4-9f30-1e25b4fd5558', '2019-06-20 07:26:14', NULL),
(44, 20, 1, 2, 'Adipati Dolken', 'Alfina Putri', 'addolken@gmail.com', '081312341234', '2019-06-19', 1, '2019-06-20', 100000, '2019-06-19 17:28:37', '2019-06-19 17:29:08', 'used', NULL, NULL, NULL, '1560990550082', 'mandiri', 'credit', 'http://example.com?order_id=44&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '4f106010-811b-4831-94d8-fbe4be14a850', '2019-06-20 07:29:09', NULL),
(45, 20, 1, 2, 'Rizdiani', 'Rizdiani', 'rzdddd@gmail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-19 17:30:31', '2019-06-19 17:31:49', 'used', NULL, NULL, NULL, '1560990674243', 'mandiri', 'credit', 'http://example.com?order_id=45&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'de2222fa-680b-4143-a0e3-274cd3d275fb', '2019-06-20 07:31:14', NULL),
(46, 19, 1, 1, 'Habib Yafi', 'Habib', 'habibyafi@ymail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-19 19:39:03', '2019-06-19 19:40:50', 'used', NULL, NULL, NULL, '1560998373681', 'mandiri', 'credit', 'http://example.com?order_id=46&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'fd2dacc5-d5da-4547-9f28-477238a23f57', '2019-06-20 09:39:33', NULL),
(47, 19, 1, 1, 'Arbisono Putra', 'Arbisono', 'arbip@gmail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:42:32', '2019-06-20 20:42:32', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(48, 19, 1, 1, 'Arbisono Putra', 'Arbisono', 'arbip@gmail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:43:49', '2019-06-20 20:43:49', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(49, 19, 1, 1, 'Arbisono Putra', 'Arbisono', 'arbip@gmail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:43:55', '2019-06-20 20:43:55', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(50, 19, 1, 1, 'Arbisono Putra', 'Arbisono', 'arbip@gmail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:43:57', '2019-06-20 20:43:57', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(51, 19, 1, 1, 'Arbisono Putra', 'Arbisono', 'arbip@gmail.com', '081312341234', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:44:26', '2019-06-20 20:44:26', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 19, 1, 1, 'Arbisono', 'Arbisono', 'arbi@gmail.com', '0813123412314', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:45:10', '2019-06-20 20:45:10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 19, 1, 1, 'Arbisono', 'Arbisono', 'arbi@gmail.com', '0813123412314', '2019-06-20', 1, '2019-06-21', 100000, '2019-06-20 20:46:03', '2019-06-20 20:46:03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 19, 1, 1, 'Arbisana', 'Arbisana', 'arbisana@gmail.com', '081312341234', '2019-06-21', 1, '2019-06-22', 100000, '2019-06-20 20:56:49', '2019-06-20 20:56:49', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 19, 1, 1, 'Arbisana', 'Arbisana', 'arbisana@gmail.com', '081312341234', '2019-06-21', 1, '2019-06-22', 100000, '2019-06-20 20:58:43', '2019-06-21 08:22:31', 'used', NULL, NULL, NULL, '1561090109701', 'mandiri', 'credit', 'http://example.com?order_id=55&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '7f46a069-6b6e-4bc3-bc78-242161020abc', '2019-06-21 11:08:29', NULL),
(56, 20, 1, 2, 'Ricky Irfandi', 'Irfandi', 'rickymaru@gmail.com', '081312341234', '2019-06-21', 1, '2019-06-22', 100000, '2019-06-21 06:46:25', '2019-06-21 08:24:58', 'used', NULL, NULL, NULL, '1561124848084', 'mandiri', 'credit', 'http://example.com?order_id=56&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '39cff8d8-5409-408d-8812-ba676aa98c0e', '2019-06-21 20:47:27', NULL),
(57, 21, 1, 3, 'Rajin', 'Rajin', 'rajinkabban@gmail.com', '081312341234', '2019-06-21', 1, '2019-06-22', 100000, '2019-06-21 08:04:43', '2019-06-21 08:57:04', 'used', NULL, NULL, NULL, '1561129523572', 'mandiri', 'credit', 'http://example.com?order_id=57&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '077418f6-a231-4afa-a24a-3cf3f8352660', '2019-06-21 22:05:23', NULL),
(58, 22, 1, 4, 'Gilang Ramadhan', 'Gilang Ramadhan', 'gilangrmd@gmail.com', '081312341234', '2019-06-22', 2, '2019-06-24', 200000, '2019-06-21 09:25:01', '2019-06-21 20:34:07', 'used', NULL, NULL, NULL, '1561134337720', 'mandiri', 'credit', 'http://example.com?order_id=58&status_code=200&transaction_status=capture', 'accept', 200000, '481111-1114', 'credit_card', NULL, NULL, '5831d4dd-8591-4f1e-976c-f362d7b81419', '2019-06-21 23:25:37', NULL),
(59, 19, 1, 1, 'Ridwan', 'Ridwan', 'ridwanmuh@gmail.com', '081312341234', '2019-06-21', 1, '2019-06-22', 100000, '2019-06-21 09:33:40', '2019-06-21 09:39:48', 'used', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(60, 20, 1, 2, 'Ridwan Fajar Widodo', 'Ridwan Fajar Widodo', 'ridwanfajarw@gmail.com', '081312341234', '2019-06-21', 1, '2019-06-22', 100000, '2019-06-21 09:36:34', '2019-06-21 09:40:32', 'used', NULL, NULL, NULL, '1561135029832', 'mandiri', 'credit', 'http://example.com?order_id=60&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, 'cd534641-2e2e-467c-a922-b53b8ca767b2', '2019-06-21 23:37:09', NULL),
(61, 19, 1, 1, 'Heru Apriadi', 'Heru', 'herunodeapr@gmail.com', '081312341234', '2019-06-22', 2, '2019-06-24', 200000, '2019-06-21 20:32:35', '2019-06-24 04:43:24', 'active', NULL, NULL, NULL, '1561174394897', 'mandiri', 'credit', 'http://example.com?order_id=61&status_code=200&transaction_status=capture', 'accept', 200000, '481111-1114', 'credit_card', NULL, NULL, '1ebe7330-a02d-480d-b2bb-6ad82efdb0c6', '2019-06-22 10:33:14', NULL),
(63, 19, 1, 1, 'guest one', 'guest one', 'guestone@gmail.com', '081312341234', '2019-06-24', 1, '2019-06-25', 100000, '2019-06-24 04:44:10', '2019-06-24 04:48:25', 'active', NULL, NULL, NULL, '1561376673169', 'mandiri', 'credit', 'http://example.com?order_id=63&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '88aa2f88-48ac-4522-89f9-5ca564bb7869', '2019-06-24 18:44:32', NULL),
(64, 21, 1, 3, 'guest two', 'guest two', 'guesttwo@gmail.com', '081312341234', '2019-06-24', 3, '2019-06-27', 300000, '2019-06-24 04:45:09', '2019-06-24 04:47:52', 'active', NULL, NULL, NULL, '1561376727466', 'mandiri', 'credit', 'http://example.com?order_id=64&status_code=200&transaction_status=capture', 'accept', 300000, '481111-1114', 'credit_card', NULL, NULL, 'f4bb2688-0215-4e18-9694-7f1b0372d474', '2019-06-24 18:45:27', NULL),
(65, 22, 1, 4, 'guest three', 'guestthree', 'guestthree@gmail.com', '081312341234', '2019-06-24', 2, '2019-06-26', 200000, '2019-06-24 04:46:33', '2019-06-24 04:47:31', 'active', NULL, NULL, NULL, '1561376809841', 'mandiri', 'credit', 'http://example.com?order_id=65&status_code=200&transaction_status=capture', 'accept', 200000, '481111-1114', 'credit_card', NULL, NULL, 'c40c8230-ada1-4c21-b5b1-26a4d49977f7', '2019-06-24 18:46:49', NULL),
(66, 19, 1, 1, 'Integration Testing', 'Integration', 'int@gmail.com', '081312341234', '2019-06-24', 1, '2019-06-25', 100000, '2019-06-24 14:31:12', '2019-06-24 14:31:12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 20, 1, 2, 'Heru Apriadi', 'Heru', 'heruapr@gmail.com', '081312341234', '2019-06-26', 1, '2019-06-27', 100000, '2019-06-26 08:46:24', '2019-06-26 08:47:05', 'capture', NULL, NULL, NULL, '1561564023887', 'mandiri', 'credit', 'http://example.com?order_id=67&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '07ff312e-ab2b-4e44-aa8b-7bd2e55dda76', '2019-06-26 22:47:03', NULL),
(69, 19, 1, 1, 'Heru Apriadi', 'Apriadi', 'heruapr@gmail.com', '081312341234', '2019-06-26', 1, '2019-06-27', 100000, '2019-06-26 08:56:27', '2019-06-26 08:56:27', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(70, 22, 1, 4, 'Razin Sayyidin', 'Razin', 'razin.surya@gmail.com', '081312341234', '2019-06-26', 1, '2019-06-27', 100000, '2019-06-26 18:37:37', '2019-06-26 18:40:47', 'capture', NULL, NULL, NULL, '1561599647447', 'mandiri', 'credit', 'http://example.com?order_id=70&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '1df6863a-bb1b-4150-9d64-0aab18020370', '2019-06-27 08:40:47', NULL),
(71, 19, 1, 1, 'Refly Machdalian', 'Refly', 'ref.machdalian@gmail.com', '081312341234', '2019-07-03', 2, '2019-07-05', 200000, '2019-07-03 04:21:28', '2019-07-03 04:22:20', 'capture', NULL, NULL, NULL, '1562152940459', 'mandiri', 'credit', 'http://example.com?order_id=71&status_code=200&transaction_status=capture', 'accept', 200000, '481111-1114', 'credit_card', NULL, NULL, '928c9531-12f9-42e8-bade-ea2e96d6e2d1', '2019-07-03 18:22:20', NULL),
(72, 20, 1, 2, 'Heru Apriadi', 'Heru', 'heruapr@gmail.com', '081312341234', '2019-07-03', 1, '2019-07-04', 100000, '2019-07-03 09:54:17', '2019-07-03 09:54:48', 'capture', NULL, NULL, NULL, '1562172887226', 'mandiri', 'credit', 'http://example.com?order_id=72&status_code=200&transaction_status=capture', 'accept', 100000, '481111-1114', 'credit_card', NULL, NULL, '1d9ced9f-a828-4d9c-84be-885ee4ba6a54', '2019-07-03 23:54:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders_meta`
--

CREATE TABLE `orders_meta` (
  `id` int(11) UNSIGNED NOT NULL,
  `order_id` int(11) UNSIGNED DEFAULT NULL,
  `stay_date` date NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders_meta`
--

INSERT INTO `orders_meta` (`id`, `order_id`, `stay_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 55, '2019-06-21', 'used', '2019-06-20 20:58:43', '2019-06-20 20:58:43'),
(2, 55, '2019-06-22', 'used', '2019-06-20 20:58:43', '2019-06-20 20:58:43'),
(3, 56, '2019-06-21', 'used', '2019-06-21 06:46:25', '2019-06-21 06:46:25'),
(4, 56, '2019-06-22', 'used', '2019-06-21 06:46:25', '2019-06-21 06:46:25'),
(5, 57, '2019-06-21', 'used', '2019-06-21 08:04:43', '2019-06-21 08:57:05'),
(6, 57, '2019-06-22', 'used', '2019-06-21 08:04:43', '2019-06-21 08:57:05'),
(7, 58, '2019-06-22', 'used', '2019-06-21 09:25:01', '2019-06-21 20:34:07'),
(8, 58, '2019-06-23', 'used', '2019-06-21 09:25:02', '2019-06-21 20:34:07'),
(9, 58, '2019-06-24', 'used', '2019-06-21 09:25:02', '2019-06-21 20:34:07'),
(10, 59, '2019-06-21', 'used', '2019-06-21 09:33:40', '2019-06-21 09:39:48'),
(11, 59, '2019-06-22', 'used', '2019-06-21 09:33:40', '2019-06-21 09:39:48'),
(12, 60, '2019-06-21', 'used', '2019-06-21 09:36:34', '2019-06-21 09:40:32'),
(13, 60, '2019-06-22', 'used', '2019-06-21 09:36:34', '2019-06-21 09:40:32'),
(14, 61, '2019-06-22', 'active', '2019-06-21 20:32:36', '2019-06-24 04:43:24'),
(15, 61, '2019-06-23', 'active', '2019-06-21 20:32:36', '2019-06-24 04:43:24'),
(16, 61, '2019-06-24', 'active', '2019-06-21 20:32:36', '2019-06-24 04:43:24'),
(17, 62, '2019-06-22', 'used', '2019-06-21 21:16:34', '2019-06-21 22:02:13'),
(18, 62, '2019-06-23', 'used', '2019-06-21 21:16:34', '2019-06-21 22:02:13'),
(19, 63, '2019-06-24', 'active', '2019-06-24 04:44:10', '2019-06-24 04:48:26'),
(20, 63, '2019-06-25', 'active', '2019-06-24 04:44:10', '2019-06-24 04:48:26'),
(21, 64, '2019-06-24', 'active', '2019-06-24 04:45:09', '2019-06-24 04:47:52'),
(22, 64, '2019-06-25', 'active', '2019-06-24 04:45:09', '2019-06-24 04:47:52'),
(23, 64, '2019-06-26', 'active', '2019-06-24 04:45:09', '2019-06-24 04:47:52'),
(24, 64, '2019-06-27', 'active', '2019-06-24 04:45:10', '2019-06-24 04:47:52'),
(25, 65, '2019-06-24', 'active', '2019-06-24 04:46:33', '2019-06-24 04:47:31'),
(26, 65, '2019-06-25', 'active', '2019-06-24 04:46:33', '2019-06-24 04:47:31'),
(27, 65, '2019-06-26', 'active', '2019-06-24 04:46:33', '2019-06-24 04:47:31'),
(28, 66, '2019-06-24', 'capture', '2019-06-24 14:31:12', '2019-06-24 14:31:12'),
(29, 66, '2019-06-25', 'capture', '2019-06-24 14:31:12', '2019-06-24 14:31:12'),
(30, 67, '2019-06-26', 'capture', '2019-06-26 08:46:24', '2019-06-26 08:47:05'),
(31, 67, '2019-06-27', 'capture', '2019-06-26 08:46:25', '2019-06-26 08:47:05'),
(32, 68, '2019-06-26', 'capture', '2019-06-26 08:50:13', '2019-06-26 08:50:13'),
(33, 68, '2019-06-27', 'capture', '2019-06-26 08:50:13', '2019-06-26 08:50:13'),
(34, 69, '2019-06-26', 'capture', '2019-06-26 08:56:27', '2019-06-26 08:56:27'),
(35, 69, '2019-06-27', 'capture', '2019-06-26 08:56:27', '2019-06-26 08:56:27'),
(36, 70, '2019-06-26', 'capture', '2019-06-26 18:37:37', '2019-06-26 18:40:47'),
(37, 70, '2019-06-27', 'capture', '2019-06-26 18:37:37', '2019-06-26 18:40:47'),
(38, 71, '2019-07-03', 'capture', '2019-07-03 04:21:28', '2019-07-03 04:22:20'),
(39, 71, '2019-07-04', 'capture', '2019-07-03 04:21:28', '2019-07-03 04:22:20'),
(40, 71, '2019-07-05', 'capture', '2019-07-03 04:21:28', '2019-07-03 04:22:20'),
(41, 72, '2019-07-03', 'capture', '2019-07-03 09:54:17', '2019-07-03 09:54:48'),
(42, 72, '2019-07-04', 'capture', '2019-07-03 09:54:18', '2019-07-03 09:54:48');

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
  `id` int(11) UNSIGNED NOT NULL,
  `homestay_id` int(11) NOT NULL,
  `room_number` int(11) NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `room_availability` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photos` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `homestay_id`, `room_number`, `type`, `description`, `price`, `room_availability`, `photos`, `created_at`, `updated_at`) VALUES
(19, 1, 1, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(20, 1, 2, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(21, 1, 3, 'Single', 'description', 100000, '0', 'images/neonbrand-iAftdIcgpFc-unsplash.jpg', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(22, 1, 4, 'Single', 'description', 100000, '0', 'images/neonbrand-iAftdIcgpFc-unsplash.jpg', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(23, 1, 5, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(24, 1, 6, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(25, 1, 7, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:04', '2019-06-12 00:25:04'),
(26, 1, 8, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:05', '2019-06-12 00:25:05'),
(27, 1, 9, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:05', '2019-06-12 00:25:05'),
(28, 1, 10, 'Single', 'description', 100000, '0', 'photo 1', '2019-06-12 00:25:05', '2019-06-12 00:25:05');

-- --------------------------------------------------------

--
-- Table structure for table `rooms_facilities`
--

CREATE TABLE `rooms_facilities` (
  `id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `facility` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rooms_meta`
--

CREATE TABLE `rooms_meta` (
  `id` int(11) NOT NULL,
  `homestay_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `day` varchar(5) NOT NULL,
  `checkin_time` varchar(5) NOT NULL,
  `checkout_time` varchar(5) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'owner', 'owner@owner.com', NULL, '$2y$10$s48De29auAG.M0PI27ji9uIZMtiBc9q/q4YeNm3yStHrvovMbGVNy', NULL, '2019-05-29 21:13:17', '2019-05-29 21:13:17'),
(2, 'owner1', 'owner1@owner.com', NULL, '$2y$10$Z4Oo2BRZW56Hyv1lzYcax.zWCrLChf0P7m4PxhSdzd/VlH6i6164a', NULL, '2019-05-29 21:13:42', '2019-05-29 21:13:42'),
(3, 'owner2', 'owner2@owner.com', NULL, '$2y$10$nynLzA1ZkwAt4rAdiupaEe1jBYnZwbfbSJ66i7M/XwTWoHHJnkf4K', NULL, '2019-05-29 21:16:42', '2019-05-29 21:16:42'),
(4, 'owner3', 'owner3@owner.com', NULL, '$2y$10$Kd3A3V7VYKkqAZXWB7DTNOhPwFHoG/xS1y3DESruSY1AuvSEkzI.a', NULL, '2019-05-29 21:16:56', '2019-05-29 21:16:56'),
(5, 'admin', 'admin@admin.com', NULL, '$2y$10$54v0rwfzOubJo1bhC75gK.a8QcN5WmufyMXfMiKkqvR6fYOXFa0T.', NULL, '2019-07-02 10:06:25', '2019-07-02 10:06:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `homestays`
--
ALTER TABLE `homestays`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `homestays_facilities`
--
ALTER TABLE `homestays_facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `orders_meta`
--
ALTER TABLE `orders_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `homestay_id` (`homestay_id`);

--
-- Indexes for table `rooms_facilities`
--
ALTER TABLE `rooms_facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms_meta`
--
ALTER TABLE `rooms_meta`
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
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `homestays_facilities`
--
ALTER TABLE `homestays_facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `orders_meta`
--
ALTER TABLE `orders_meta`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `rooms_facilities`
--
ALTER TABLE `rooms_facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms_meta`
--
ALTER TABLE `rooms_meta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
