import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { FileUploader } from '../../../helpers/FileUploadeHelper';
import { IUploadFile } from '../../../interfaces/file';
import ApiError from '../../../errors/apiError';
import httpStatus from 'http-status';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const fileData = req.file as IUploadFile;
  if (!fileData) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Select your profile image');
  }

  const uploadedImage = await FileUploader.uploadToCloudinary(fileData);

  if (uploadedImage) {
    req.body.student.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicSemesterResponse = await AuthService.get(
    `/api/v1/academic-semesters?syncId=${academicSemester}`
  );

  const academicDepartmentResponse = await AuthService.get(
    `/api/v1/academic-departments?syncId=${academicDepartment}`
  );

  const academicFacultyResponse = await AuthService.get(
    `/api/v1/academic-faculties?syncId=${academicFaculty}`
  );

  if (!academicSemesterResponse.data.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academic Semester not found!');
  }

  if (!academicDepartmentResponse.data.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academic Department not found!');
  }

  if (!academicFacultyResponse.data.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academic Faculty not found!');
  }

  if (academicSemesterResponse.data.length) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  if (academicDepartmentResponse.data.length) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  if (academicFacultyResponse.data.length) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const createStudentURL = `${req.baseUrl}/create-student`;
  const response: IGenericResponse = await AuthService.post(createStudentURL, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = { createStudent };
