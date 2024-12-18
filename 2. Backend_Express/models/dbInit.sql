-- Schema for the course table
CREATE TABLE `course` (
  `course_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `course_sid` mediumint(5) NOT NULL,
  `course_n` varchar(150) NOT NULL,
  `course_red` date NOT NULL,
  `course_y` smallint(4) NOT NULL,
  `course_s` tinyint(1) NOT NULL,
  `course_ed` date NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Schema for the enroll table
CREATE TABLE `enroll` (
  `enroll_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `enroll_csid` int(5) NOT NULL,
  `enroll_csn` varchar(150) NOT NULL,
  `enroll_stdid` bigint(10) NOT NULL,
  `enroll_cy` smallint(4) NOT NULL,
  `enroll_cs` tinyint(1) NOT NULL,
  `enroll_ced` date NOT NULL,
  PRIMARY KEY (`enroll_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Schema for the student table
CREATE TABLE `student` (
  `student_id` bigint(10) NOT NULL,
  `student_firstname` varchar(150) NOT NULL,
  `student_lastname` varchar(150) NOT NULL,
  `student_em` varchar(150) NOT NULL,
  `student_pw` varchar(12) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Sample data for the course table
INSERT INTO `course` (`course_sid`, `course_n`, `course_red`, `course_y`, `course_s`, `course_ed`) VALUES
(10001, 'เริ่มต้นการเขียนโปรแกรม', '2024-01-15', 2024, 1, '2024-06-15'),
(10002, 'คณิตศาสตร์ขั้นสูง', '2024-02-01', 2024, 1, '2024-07-01'),
(10003, 'โครงสร้างข้อมูล', '2024-03-01', 2024, 1, '2024-08-01'),
(10004, 'เทคโนโลยีสารสนเทศ', '2024-04-01', 2024, 1, '2024-09-01'),
(10005, 'การพัฒนาเว็บ', '2024-05-01', 2024, 1, '2024-10-01'),
(10006, 'วิทยาการคอมพิวเตอร์', '2024-06-01', 2024, 1, '2024-11-01'),
(10007, 'การเขียนโปรแกรมเชิงวัตถุ', '2024-07-01', 2024, 1, '2024-12-01'),
(10008, 'วิศวกรรมซอฟต์แวร์', '2024-08-01', 2024, 1, '2025-01-01'),
(10009, 'การออกแบบระบบฐานข้อมูล', '2024-09-01', 2024, 1, '2025-02-01'),
(10010, 'คณิตศาสตร์ประยุกต์', '2024-10-01', 2024, 1, '2025-03-01');

-- Sample data for the enroll table
INSERT INTO `enroll` (`enroll_csid`, `enroll_csn`, `enroll_stdid`, `enroll_cy`, `enroll_cs`, `enroll_ced`) VALUES
(10001, 'เริ่มต้นการเขียนโปรแกรม', 20230001, 2024, 1, '2024-06-15'),
(10002, 'คณิตศาสตร์ขั้นสูง', 20230002, 2024, 1, '2024-07-01'),
(10003, 'โครงสร้างข้อมูล', 20230003, 2024, 1, '2024-08-01'),
(10004, 'เทคโนโลยีสารสนเทศ', 20230004, 2024, 1, '2024-09-01'),
(10005, 'การพัฒนาเว็บ', 20230005, 2024, 1, '2024-10-01'),
(10006, 'วิทยาการคอมพิวเตอร์', 20230006, 2024, 1, '2024-11-01'),
(10007, 'การเขียนโปรแกรมเชิงวัตถุ', 20230007, 2024, 1, '2024-12-01'),
(10008, 'วิศวกรรมซอฟต์แวร์', 20230008, 2024, 1, '2025-01-01'),
(10009, 'การออกแบบระบบฐานข้อมูล', 20230009, 2024, 1, '2025-02-01'),
(10010, 'คณิตศาสตร์ประยุกต์', 20230010, 2024, 1, '2025-03-01');

-- Sample data for the student table
INSERT INTO `student` (`student_id`, `student_firstname`, `student_lastname`, `student_em`, `student_pw`) VALUES
(20230001, 'จอห์น', 'โด', 'john.doe@example.com', 'password123'),
(20230002, 'เจน', 'สมิธ', 'jane.smith@example.com', 'securepass'),
(20230003, 'อลิซ', 'จอห์นสัน', 'alice.johnson@example.com', 'mypassword'),
(20230004, 'สมชาย', 'ภักดี', 'somchai@example.com', 'somchai123'),
(20230005, 'พิมพ์', 'เพชร', 'phim.p@example.com', 'pim12345'),
(20230006, 'ก้อง', 'ชัยวัฒน์', 'kong.chaivath@example.com', 'kongpass123'),
(20230007, 'แอนนา', 'สาริษฐ์', 'anna.sarit@example.com', 'anna12345'),
(20230008, 'ธนพงษ์', 'ศิริ', 'thanapong.s@example.com', 'thanapongpass'),
(20230009, 'สุพัตรา', 'สหกร', 'supatra.sahakorn@example.com', 'supatra2024'),
(20230010, 'ไพรินทร์', 'สกุล', 'phairin.sakul@example.com', 'phairin567');
