import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (Props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function formValidate() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorid) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Title is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function HandleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formValidate()) return;
    courseApi.saveCourse(course).then(() => {
      Props.history.push("/courses");
      toast.success("Course Saved!");
    });
  }

  return (
    <>
      <h2>Manage Course Page</h2>
      <CourseForm
        course={course}
        _onChange={HandleChange}
        _onSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};
export default ManageCoursePage;
