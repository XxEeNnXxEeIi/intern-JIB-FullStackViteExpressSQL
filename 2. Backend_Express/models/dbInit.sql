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

-- Sample data for the course table
INSERT INTO `course` (`course_sid`, `course_n`, `course_red`, `course_y`, `course_s`, `course_ed`) VALUES
(10001, 'Introduction to Programming', '2024-01-15', 2024, 1, '2024-06-15'),
(10002, 'Advanced Mathematics', '2024-02-01', 2024, 1, '2024-07-01'),
(10003, 'Data Structures', '2024-03-01', 2024, 1, '2024-08-01');

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

-- Sample data for the enroll table
INSERT INTO `enroll` (`enroll_csid`, `enroll_csn`, `enroll_stdid`, `enroll_cy`, `enroll_cs`, `enroll_ced`) VALUES
(10001, 'Introduction to Programming', 20230001, 2024, 1, '2024-06-15'),
(10002, 'Advanced Mathematics', 20230002, 2024, 1, '2024-07-01'),
(10003, 'Data Structures', 20230003, 2024, 1, '2024-08-01');

-- Schema for the student table
CREATE TABLE `student` (
  `student_id` bigint(10) NOT NULL,
  `student_firstname` varchar(150) NOT NULL,
  `student_lastname` varchar(150) NOT NULL,
  `student_em` varchar(150) NOT NULL,
  `student_pw` varchar(12) NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Sample data for the student table
INSERT INTO `student` (`student_id`, `student_firstname`, `student_lastname`, `student_em`, `student_pw`) VALUES
(20230001, 'John', 'Doe', 'john.doe@example.com', 'password123'),
(20230002, 'Jane', 'Smith', 'jane.smith@example.com', 'securepass'),
(20230003, 'Alice', 'Johnson', 'alice.johnson@example.com', 'mypassword');
