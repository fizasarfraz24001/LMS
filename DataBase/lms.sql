-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2023 at 09:40 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms`
--

-- --------------------------------------------------------

--
-- Table structure for table `addmarkmonth`
--

CREATE TABLE `addmarkmonth` (
  `mid` int(11) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `CN` int(200) NOT NULL,
  `ts` int(200) NOT NULL,
  `Sub` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addmarkmonth`
--

INSERT INTO `addmarkmonth` (`mid`, `Date`, `CN`, `ts`, `Sub`) VALUES
(7, '2023-03-24', 1, 1, 1),
(8, '2023-03-16', 1, 4, 1),
(9, '2023-03-01', 1, 3, 1),
(10, '2023-03-10', 1, 4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `addmarks`
--

CREATE TABLE `addmarks` (
  `mid` int(11) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `CN` int(11) NOT NULL,
  `ts` int(11) NOT NULL,
  `Sub` varchar(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `RegNo` varchar(200) NOT NULL,
  `PID` int(11) NOT NULL,
  `marks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addmarks`
--

INSERT INTO `addmarks` (`mid`, `Date`, `CN`, `ts`, `Sub`, `name`, `RegNo`, `PID`, `marks`) VALUES
(14, '2023-03-16', 1, 4, '1', 'w', 'yy', 0, 0),
(15, '2023-03-16', 1, 4, '1', 'USMAN2', '123', 0, 60),
(16, '2023-03-01', 1, 3, '1', 'w', 'yy', 0, 1),
(17, '2023-03-01', 1, 3, '1', 'USMAN2', '123', 0, 22),
(18, '2023-03-10', 1, 4, '3', 'u2', 'yy', 1, 0),
(19, '2023-03-10', 1, 4, '3', 'u2', '123', 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `addstudent`
--

CREATE TABLE `addstudent` (
  `Stid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `stdname` varchar(11) NOT NULL,
  `password` varchar(200) NOT NULL,
  `RegNo` varchar(200) NOT NULL,
  `contact` varchar(200) NOT NULL,
  `cn` int(11) NOT NULL,
  `Fees` varchar(200) NOT NULL,
  `pfk` int(11) NOT NULL,
  `BNID` int(10) NOT NULL,
  `userRole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addstudent`
--

INSERT INTO `addstudent` (`Stid`, `name`, `stdname`, `password`, `RegNo`, `contact`, `cn`, `Fees`, `pfk`, `BNID`, `userRole`) VALUES
(5, 'w', 'umer', 'rt', 'yy', '657', 1, '5000', 1, 1, 3),
(7, 'utu', 'y', 'yuy', 'iyi', 'hhuh', 2, '798', 1, 1, 3),
(8, 'USMAN2', 'AYAN', '123', '123', 'uuu', 1, '798', 1, 1, 3),
(9, 'U2', 'AYAN', '1', 'IIU', '79977', 1, '8989', 1, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `astat`
--

CREATE TABLE `astat` (
  `id` int(11) NOT NULL,
  `s` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `aid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `PID` int(11) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`aid`, `name`, `PID`, `Date`, `status`) VALUES
(1, 'w', 0, '2023-03-28', '0'),
(2, 'USMAN2', 0, '2023-03-28', '0'),
(3, 'utu', 0, '2023-03-28', 'P'),
(4, 'w', 0, '2023-03-01', '0'),
(5, 'utu', 0, '2023-03-01', '0'),
(6, 'w', 0, '2023-03-08', '0'),
(7, 'u2', 0, '2023-03-08', '0'),
(8, 'USMAN2', 0, '2023-03-08', '0'),
(9, 'w', 1, '2023-03-01', ''),
(10, 'USMAN2', 1, '2023-03-01', ''),
(11, 'u2', 1, '2023-03-01', '');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `BookID` int(11) NOT NULL,
  `Book` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`BookID`, `Book`) VALUES
(1, 'COMPUTER'),
(3, 'IT');

-- --------------------------------------------------------

--
-- Table structure for table `brenchname`
--

CREATE TABLE `brenchname` (
  `BID` int(11) NOT NULL,
  `BName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brenchname`
--

INSERT INTO `brenchname` (`BID`, `BName`) VALUES
(1, 'Punjab college');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `cid` int(11) NOT NULL,
  `classname` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`cid`, `classname`) VALUES
(1, '11th');

-- --------------------------------------------------------

--
-- Table structure for table `feeschallan`
--

CREATE TABLE `feeschallan` (
  `fid` int(11) NOT NULL,
  `Date` varchar(11) NOT NULL,
  `stdname` varchar(200) NOT NULL,
  `RegNo` varchar(200) NOT NULL,
  `cn` int(11) NOT NULL,
  `Fees` varchar(200) NOT NULL,
  `pfk` int(11) NOT NULL,
  `BNID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feeschallan`
--

INSERT INTO `feeschallan` (`fid`, `Date`, `stdname`, `RegNo`, `cn`, `Fees`, `pfk`, `BNID`) VALUES
(45, '2023-10', 'umer', 'yy', 1, '5000', 1, 1),
(46, '2023-10', 'y', 'iyi', 2, '798', 1, 1),
(47, '2023-01', 'umer', 'yy', 1, '5000', 1, 1),
(48, '2023-01', 'AYAN', '123', 1, '798', 1, 1),
(49, '2023-01', 'u2', 'iyi', 2, '798', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `Userid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `Image` varchar(400) NOT NULL,
  `BNID` int(11) NOT NULL,
  `userRole` int(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`Userid`, `name`, `email`, `password`, `Image`, `BNID`, `userRole`) VALUES
(195, 'ghgh', 'yy@gmail.com', 't', '', 0, 1),
(243, 'USMAN', 'yyyyy@gm5ail.com', 'U', 'upload\\images\\Image_1680004963326.png', 1, 1),
(253, 'USMAN2', '', '123', '', 1, 3),
(254, 'w', 't@gmail.com', 'w', 'upload\\images\\Image_1680013403407.jpg', 1, 2),
(255, 'U2', '', '1', 'upload\\images\\Image_1680026073535.jpg', 1, 3),
(256, 'UMER', '', '123', '', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
  `pid` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `Fk` varchar(200) NOT NULL,
  `BNID` int(10) NOT NULL,
  `userRole` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parents`
--

INSERT INTO `parents` (`pid`, `name`, `password`, `Fk`, `BNID`, `userRole`) VALUES
(1, 'u11', 'gggg', '1', 1, 4),
(2, 'UMER', '123', '1', 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `regbn`
--

CREATE TABLE `regbn` (
  `brenid` int(11) NOT NULL,
  `BN` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `Image` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `regbn`
--

INSERT INTO `regbn` (`brenid`, `BN`, `email`, `Address`, `Image`) VALUES
(1, 1, 'Punjab@gmail.com', 'Sialkot kashmir road', 'upload\\images\\Image_1679891605251.png');

-- --------------------------------------------------------

--
-- Table structure for table `titlemarks`
--

CREATE TABLE `titlemarks` (
  `tid` int(11) NOT NULL,
  `topic` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `titlemarks`
--

INSERT INTO `titlemarks` (`tid`, `topic`) VALUES
(1, 'Quiz1'),
(3, 'Assignment1'),
(4, 'Final-Exam');

-- --------------------------------------------------------

--
-- Table structure for table `uploadassquiz`
--

CREATE TABLE `uploadassquiz` (
  `upid` int(11) NOT NULL,
  `Topic` int(200) NOT NULL,
  `ClassN` int(200) NOT NULL,
  `subject` int(11) NOT NULL,
  `Question` varchar(200) NOT NULL,
  `Date` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `uploadassquiz`
--

INSERT INTO `uploadassquiz` (`upid`, `Topic`, `ClassN`, `subject`, `Question`, `Date`) VALUES
(2, 1, 1, 1, 'what is your name????\n', '2023-03-27');

-- --------------------------------------------------------

--
-- Table structure for table `urole`
--

CREATE TABLE `urole` (
  `UID` int(111) NOT NULL,
  `UName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `urole`
--

INSERT INTO `urole` (`UID`, `UName`) VALUES
(1, 'Admin'),
(2, 'Teacher'),
(3, 'Student'),
(4, 'Parents');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addmarkmonth`
--
ALTER TABLE `addmarkmonth`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `addmarks`
--
ALTER TABLE `addmarks`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `addstudent`
--
ALTER TABLE `addstudent`
  ADD PRIMARY KEY (`Stid`);

--
-- Indexes for table `astat`
--
ALTER TABLE `astat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`BookID`);

--
-- Indexes for table `brenchname`
--
ALTER TABLE `brenchname`
  ADD PRIMARY KEY (`BID`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `feeschallan`
--
ALTER TABLE `feeschallan`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`Userid`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `regbn`
--
ALTER TABLE `regbn`
  ADD PRIMARY KEY (`brenid`);

--
-- Indexes for table `titlemarks`
--
ALTER TABLE `titlemarks`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `uploadassquiz`
--
ALTER TABLE `uploadassquiz`
  ADD PRIMARY KEY (`upid`);

--
-- Indexes for table `urole`
--
ALTER TABLE `urole`
  ADD PRIMARY KEY (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addmarkmonth`
--
ALTER TABLE `addmarkmonth`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `addmarks`
--
ALTER TABLE `addmarks`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `addstudent`
--
ALTER TABLE `addstudent`
  MODIFY `Stid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `astat`
--
ALTER TABLE `astat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `BookID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brenchname`
--
ALTER TABLE `brenchname`
  MODIFY `BID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `feeschallan`
--
ALTER TABLE `feeschallan`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `Userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=257;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `regbn`
--
ALTER TABLE `regbn`
  MODIFY `brenid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `titlemarks`
--
ALTER TABLE `titlemarks`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `uploadassquiz`
--
ALTER TABLE `uploadassquiz`
  MODIFY `upid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `urole`
--
ALTER TABLE `urole`
  MODIFY `UID` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
