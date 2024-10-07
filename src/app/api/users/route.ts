// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { IResponseCreateUser, IUserRegistered } from '../../../types/userInterface';

async function registerUser(user: IUserRegistered): Promise<IResponseCreateUser> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el usuario');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error en registerUser:', error);
      throw error; // Lanzar el error para manejarlo en el componente
    }
  }

export default registerUser
  