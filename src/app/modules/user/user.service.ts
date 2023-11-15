import { Prisma, Role, User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { userSearchableFields } from './user.contants';
import { IProfileUpdate, IUserFilterRequest } from './user.interface';

const getAllFromDB = async (
  filters: IUserFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<User[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { search, ...filterData } = filters;

  const andConditions = [];
  // if (search) {
  //   andConditions.push({
  //     OR: userSearchableFields.map(field => ({
  //       [field]: {
  //         contains: search,
  //         mode: 'insensitive',
  //       },
  //     })),
  //   });
  // }

  if (search) {
    andConditions.push({
      OR: userSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.user.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.user.count({
    where: whereConditions,
  });
  return {
    meta: {
      total,
      page,
      limit,
      totalPage: Math.ceil(total / limit),
    },
    data: result,
  };
};

const getByIdFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { id } });
  return result;
};

const updateIntoDB = async (
  userId: string,
  payload: User
): Promise<User | null> => {
  const data: IProfileUpdate = {};

  if (payload.name) {
    data['name'] = payload.name;
  }
  if (payload.address) {
    data['address'] = payload.address;
  }
  if (payload.contactNumber) {
    data['contactNumber'] = payload.contactNumber;
  }
  if (payload.profileImg) {
    data['profileImg'] = payload.profileImg;
  }
  console.log(payload);
  const result = await prisma.user.update({ where: { id: userId }, data });
  return result;
};

const deleteFromDB = async (
  id: string,
  userId: string
): Promise<User | null> => {
  const isAdminExist = await prisma.user.findUnique({ where: { id: userId } });

  if (isAdminExist?.role === Role.admin) {
    const isUserExist = await prisma.user.findUnique({ where: { id } });
    if (isUserExist?.role === Role.user) {
      const result = await prisma.user.delete({ where: { id } });
      return result;
    } else {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized for delete this user'
      );
    }
  } else if (isAdminExist?.role === Role.super_admin) {
    const isUserExist = await prisma.user.findUnique({ where: { id } });
    if (isUserExist?.role === Role.user || isUserExist?.role === Role.admin) {
      const result = await prisma.user.delete({ where: { id } });
      return result;
    } else {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized for delete this user'
      );
    }
  }
  throw new ApiError(
    httpStatus.UNAUTHORIZED,
    'You are not authorized for delete this user'
  );
};

const getProfile = async (userId: string): Promise<User | null> => {
  // const result = await prisma.user.findUnique({ where: { email } });
  const result = await prisma.user.findUnique({ where: { id: userId } });
  return result;
};

const updateAdminRoles = async (
  id: string,
  payload: User
): Promise<User | null> => {
  const result = await prisma.user.update({ where: { id }, data: payload });
  return result;
};

export const UserService = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getProfile,
  updateAdminRoles,
};
