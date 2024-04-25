// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Exam {
    address public teacher;
    uint public totalMarks;
    uint public passingMarks;
    mapping(address => uint) public marks;

    constructor(uint _totalMarks, uint _passingMarks) {
        teacher = msg.sender;
        totalMarks = _totalMarks;
        passingMarks = _passingMarks;
    }

    function submitMarks(address student, uint studentMarks) external {
        require(msg.sender == teacher, "Only teacher can submit marks");
        require(studentMarks <= totalMarks, "Marks cannot be greater than total marks");
        marks[student] = studentMarks;
    }

    function getMarks(address student) external view returns (uint) {
        require(msg.sender == teacher || msg.sender == student, "Only the teacher or the student can view the mark");
        require(student != address(0), "Unknow student");
        return marks[student];
    }

    function changeTeacher(address newTeacher) external {
        require(newTeacher != address(0), "Invalid teacher address");
        require(msg.sender == teacher, "Only teacher can change the teacher");
        require(newTeacher != teacher, "You are already the teacher");
        teacher = newTeacher;
    }

    function isPass(address student) external view returns (bool) {
        return marks[student] >= passingMarks;
    }
}
