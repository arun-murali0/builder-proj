import supabase from '../../../infrastruture/lib/supabase';
import { User } from '../../../domain/entities/user';
import { IUserPort } from '../../../application/ports/repositories/IuserRepo';

export class UserRepo implements IUserPort {
  async create(input: User): Promise<User> {
    const { data, error } = await supabase.from('users').insert(input).select().single();
    if (error) throw error;
    return data as User;
  }

  async findByEmail(email: string): Promise<User | null> {
    const { data, error } = await supabase.from('users').select().eq('email', email).single();
    if (error) throw error;
    return data as User | null;
  }

  async update(id: string, input: Partial<User>): Promise<void> {
    const { error } = await supabase.from('users').update(input).eq('id', id).select().single();
    if (error) throw error;
  }

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('users').delete().eq('id', id).select().single();
    if (error) throw error;
  }

  async getAll(): Promise<{ id: string; email: string }[]> {
    const { data, error } = await supabase.from('users').select('id, email');
    if (error) throw error;
    return data as { id: string; email: string }[];
  }

  async createApartInfo(): Promise<User | null> {
    return null;
  }
}
