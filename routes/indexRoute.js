const express = require("express");

const router = express.Router();

router.use("/academicdetail", require("./academicDetailsRoute"));

router.use("/addemployee", require("./addEmployeeRoute"));

router.use("/student", require("./studentDetailsRoute"));

router.use("/gaurdian", require("./gurdianDetailRoute"));

router.use("/feestructure", require("./feeStructureRoute"));

router.use("/superadmin", require("./superAdminRoute"));

router.use("/notification", require("./notificationRoute"));

router.use("/hostel", require("./hostelRoutes"));

router.use("/school", require("./schoolRoutes"));

router.use("/user", require("./userRoutes"));

router.use("/academic-class", require("./academicClassRoute"));

router.use("/academic-section", require("./academicSectionRoute"));

router.use("/assign-teacher", require("./assignClassTeacherRoute"));

router.use("/subject", require("./subjectRoute"));

router.use("/assign-subject", require("./assignSubToClassRoute"));

router.use("/class-schedule", require("./classScheduleRoute"));

router.use("/teacher-schedule", require("./teacherScheduleRoute"));

router.use("/employee-academic-details", require("./employeeAcademicDetailsRoute"));

router.use("/employee-bank-details", require("./employeeBankDetailsRoute"));

module.exports = router;
